type PromptMode = "light" | "dark";
type PromptFontType = "sans-serif" | "serif" | "mono";

export type RemoteDesignPrompt = {
  id: string;
  name: string;
  description: string;
  mode: PromptMode;
  fontType: PromptFontType;
  content: string;
  fullPrompt: string;
  sourceUrl: string;
};

const DESIGN_PROMPTS_HOME = "https://www.designprompts.dev/";
const CACHE_TTL_MS = 60 * 60 * 1000;

let cachedBundle:
  | {
      bundleUrl: string;
      bundleText: string;
      rolePrompt: string;
      expiresAt: number;
    }
  | undefined;

function decodeQuotedValue(raw: string) {
  try {
    return JSON.parse(`"${raw}"`) as string;
  } catch {
    return raw.replace(/\\"/g, '"').replace(/\\\\/g, "\\");
  }
}

function decodeTemplateValue(raw: string) {
  return raw.replace(/\\`/g, "`").replace(/\\\\/g, "\\");
}

function decodeStringLiteral(raw: string, quote: '"' | "'") {
  if (quote === '"') {
    return decodeQuotedValue(raw);
  }

  try {
    return JSON.parse(`"${raw.replace(/\\'/g, "'").replace(/"/g, '\\"')}"`) as string;
  } catch {
    return raw.replace(/\\'/g, "'").replace(/\\\\/g, "\\");
  }
}

function extractBacktickSection(source: string, marker: string) {
  const start = source.indexOf(marker);

  if (start === -1) {
    return undefined;
  }

  const contentStart = start + marker.length;
  let escaped = false;

  for (let index = contentStart; index < source.length; index += 1) {
    const char = source[index];

    if (escaped) {
      escaped = false;
      continue;
    }

    if (char === "\\") {
      escaped = true;
      continue;
    }

    if (char === "`") {
      return decodeTemplateValue(source.slice(contentStart, index));
    }
  }

  return undefined;
}

function extractBalancedObject(source: string, startIndex: number) {
  let depth = 0;
  let currentQuote: '"' | "'" | "`" | undefined;
  let escaped = false;

  for (let index = startIndex; index < source.length; index += 1) {
    const char = source[index];

    if (currentQuote) {
      if (escaped) {
        escaped = false;
        continue;
      }

      if (char === "\\") {
        escaped = true;
        continue;
      }

      if (char === currentQuote) {
        currentQuote = undefined;
      }

      continue;
    }

    if (char === '"' || char === "'" || char === "`") {
      currentQuote = char;
      continue;
    }

    if (char === "{") {
      depth += 1;
      continue;
    }

    if (char === "}") {
      depth -= 1;

      if (depth === 0) {
        return source.slice(startIndex, index + 1);
      }
    }
  }

  return undefined;
}

function extractStringProperty(
  source: string,
  property: string,
): { value: string; quote: '"' | "'" | "`" } | undefined {
  const marker = `${property}:`;
  const propertyIndex = source.indexOf(marker);

  if (propertyIndex === -1) {
    return undefined;
  }

  const valueStart = propertyIndex + marker.length;
  const quote = source[valueStart];

  if (quote !== '"' && quote !== "'" && quote !== "`") {
    return undefined;
  }

  let escaped = false;

  for (let index = valueStart + 1; index < source.length; index += 1) {
    const char = source[index];

    if (escaped) {
      escaped = false;
      continue;
    }

    if (char === "\\") {
      escaped = true;
      continue;
    }

    if (char === quote) {
      const rawValue = source.slice(valueStart + 1, index);

      return {
        value:
          quote === "`"
            ? decodeTemplateValue(rawValue)
            : decodeStringLiteral(rawValue, quote),
        quote,
      };
    }
  }

  return undefined;
}

function extractAssetUrl(html: string) {
  const match = html.match(/src="(\/assets\/index-[^"]+\.js)"/);
  return match ? new URL(match[1], DESIGN_PROMPTS_HOME).toString() : undefined;
}

async function loadBundle() {
  if (cachedBundle && cachedBundle.expiresAt > Date.now()) {
    return cachedBundle;
  }

  const homeResponse = await fetch(DESIGN_PROMPTS_HOME, {
    next: { revalidate: 3600 },
  });

  if (!homeResponse.ok) {
    throw new Error(`Failed to fetch designprompts home: ${homeResponse.status}`);
  }

  const html = await homeResponse.text();
  const bundleUrl = extractAssetUrl(html);

  if (!bundleUrl) {
    throw new Error("Could not locate designprompts bundle asset.");
  }

  const bundleResponse = await fetch(bundleUrl, {
    next: { revalidate: 3600 },
  });

  if (!bundleResponse.ok) {
    throw new Error(`Failed to fetch designprompts bundle: ${bundleResponse.status}`);
  }

  const bundleText = await bundleResponse.text();
  const rolePrompt = extractBacktickSection(bundleText, "const J5=`");

  if (!rolePrompt) {
    throw new Error("Could not extract shared role prompt from designprompts bundle.");
  }

  cachedBundle = {
    bundleUrl,
    bundleText,
    rolePrompt,
    expiresAt: Date.now() + CACHE_TTL_MS,
  };

  return cachedBundle;
}

function extractPromptEntry(bundleText: string, id: string) {
  const promptSectionStart = bundleText.indexOf("Z5={");

  if (promptSectionStart === -1) {
    return undefined;
  }

  const quotedMarker = `"${id}":{id:"${id}"`;
  const plainMarker = `${id}:{id:"${id}"`;
  const quotedIndex = bundleText.indexOf(quotedMarker, promptSectionStart);
  const plainIndex = bundleText.indexOf(plainMarker, promptSectionStart);
  const markerIndex = quotedIndex !== -1 ? quotedIndex : plainIndex;

  if (markerIndex === -1) {
    return undefined;
  }

  const objectStart = bundleText.indexOf("{", markerIndex + id.length + 1);

  if (objectStart === -1) {
    return undefined;
  }

  const entrySource = extractBalancedObject(bundleText, objectStart);

  if (!entrySource) {
    return undefined;
  }

  const name = extractStringProperty(entrySource, "name")?.value;
  const mode = entrySource.match(/mode:"(light|dark)"/)?.[1] as PromptMode | undefined;
  const fontType = entrySource.match(/fontType:"(sans-serif|serif|mono)"/)?.[1] as
    | PromptFontType
    | undefined;
  const description = extractStringProperty(entrySource, "description")?.value;
  const content = extractStringProperty(entrySource, "content")?.value;

  if (!name || !mode || !fontType || !description || content === undefined) {
    return undefined;
  }

  return {
    id,
    name,
    description,
    mode,
    fontType,
    content,
  };
}

export async function getRemoteDesignPrompt(id: string): Promise<RemoteDesignPrompt | undefined> {
  const bundle = await loadBundle();
  const prompt = extractPromptEntry(bundle.bundleText, id);

  if (!prompt) {
    return undefined;
  }

  return {
    ...prompt,
    fullPrompt: `<role>\n${bundle.rolePrompt}\n</role>\n\n<design-system>\n${prompt.content}\n</design-system>`,
    sourceUrl: bundle.bundleUrl,
  };
}
