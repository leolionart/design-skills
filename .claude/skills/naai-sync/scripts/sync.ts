#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import https from "node:https";
import { fileURLToPath } from "node:url";

const API_URL = "https://naai.studio/api/design-styles";

const __filename = fileURLToPath(import.meta.url);
const SCRIPT_DIR = path.dirname(__filename);
const REPO_ROOT = path.resolve(SCRIPT_DIR, "../../../..");

const THEMES_FILE = path.join(REPO_ROOT, "lib/themes.ts");
const ALIASES_FILE = path.join(REPO_ROOT, "lib/style-aliases.ts");
const ROUTER_FILE = path.join(
  REPO_ROOT,
  ".claude/skills/design-style-director/references/router.md",
);
const REPORT_FILE = path.join(REPO_ROOT, "naai-sync-report.json");
const CLAUDE_SKILLS_ROOT = path.join(REPO_ROOT, ".claude/skills");

const FAMILY_RECIPE_FILES = {
  "high-agency": path.join(
    REPO_ROOT,
    ".claude/skills/family-high-agency/references/recipes.md",
  ),
  "editorial-typography": path.join(
    REPO_ROOT,
    ".claude/skills/family-editorial-typography/references/recipes.md",
  ),
  "grid-product": path.join(
    REPO_ROOT,
    ".claude/skills/family-grid-product/references/recipes.md",
  ),
  "immersive-premium": path.join(
    REPO_ROOT,
    ".claude/skills/family-immersive-premium/references/recipes.md",
  ),
  "tactile-organic": path.join(
    REPO_ROOT,
    ".claude/skills/family-tactile-organic/references/recipes.md",
  ),
  "experimental-loud": path.join(
    REPO_ROOT,
    ".claude/skills/family-experimental-loud/references/recipes.md",
  ),
};

const FAMILY_ORDER = [
  "high-agency",
  "editorial-typography",
  "grid-product",
  "immersive-premium",
  "tactile-organic",
  "experimental-loud",
];

const FAMILY_NOTES = {
  "high-agency":
    "Flagship launch pages with hierarchy swings, assertive CTAs, and anti-generic momentum.",
  "editorial-typography":
    "Reading-first layouts led by typography rhythm, restraint, and composed whitespace.",
  "grid-product":
    "Scan-friendly modular product storytelling with clear structure and practical density.",
  "immersive-premium":
    "Atmosphere-led premium launches using depth, cinematic layering, and controlled spectacle.",
  "tactile-organic":
    "Soft materiality, rounded surfaces, and approachable visual temperature.",
  "experimental-loud":
    "Culture-forward disruption with deliberate tension, high contrast, and anti-template energy.",
};

const REMOTE_TO_LOCAL_FAMILY = {
  "product-marketing": "grid-product",
  "editorial-minimal": "editorial-typography",
  "deconstructed-experimental": "experimental-loud",
  "graphic-modernist": "grid-product",
  "retro-digital": "experimental-loud",
  "material-surface": "tactile-organic",
  "immersive-cinematic": "immersive-premium",
  "bold-brutalist": "experimental-loud",
};

const SLUG_FAMILY_OVERRIDES = {
  "asymmetry-grid-layouts": "high-agency",
  "floating-composition": "high-agency",
  "diagonal-layout": "high-agency",
  "newsprint": "editorial-typography",
  "swiss-minimalist": "editorial-typography",
  academia: "editorial-typography",
  "canon-grid-editorial": "editorial-typography",
  "lineart-illustration": "editorial-typography",
  "organic-mesh-gradients": "tactile-organic",
  botanical: "tactile-organic",
  kinetic: "immersive-premium",
  cyberpunk: "immersive-premium",
  terminal: "immersive-premium",
  vaporwave: "experimental-loud",
  maximalist: "experimental-loud",
};

const LEGACY_SLUG_REPLACEMENTS = {
  "default-high-agency": "asymmetry-grid-layouts",
  "academia-classical": "academia",
  "cyberpunk-neon": "cyberpunk",
  "maximalism-collage": "maximalist",
  "professional-corporate": "bento-grid",
  "terminal-interface": "terminal",
  "web3-orange-ledger": "cyberpunk",
  "vaporwave-dreamscape": "vaporwave",
  "botanical-editorial": "botanical",
  "sketch-wireframe": "sketch",
  "bauhaus-geometric": "swiss-minimalist",
  "art-deco-luxe": "art-deco",
  "minimalist-editorial": "editorial-minimalism",
  "premium-polish": "premium-monochrome",
  "structured-technical": "terminal",
};

const STYLE_RECIPE_OVERRIDES = {
  "premium-monochrome": {
    heroVariant: "ornamental-frame",
    proofVariant: "folio-columns",
    ctaVariant: "luxury-prompt",
    previewSilhouette: "ornament",
    emphasis: "material",
    mediaTreatment: "photographic",
  },
  academia: {
    heroVariant: "scholarly-archive",
    proofVariant: "folio-columns",
    previewSilhouette: "ornament",
    emphasis: "material",
    mediaTreatment: "ornamental",
  },
  newsprint: {
    heroVariant: "scholarly-archive",
    proofVariant: "folio-columns",
    previewSilhouette: "monolith",
    mediaTreatment: "type-led",
  },
  "typography-first": {
    heroVariant: "oversized-type",
    proofVariant: "keyword-badges",
    emphasis: "type",
    mediaTreatment: "type-led",
  },
  "canon-grid-editorial": {
    heroVariant: "manifesto-split",
    proofVariant: "keyword-badges",
    previewSilhouette: "monolith",
  },
  "bento-grid": {
    heroVariant: "modular-overview",
    proofVariant: "tile-matrix",
    previewSilhouette: "tiles",
    density: "dense",
    emphasis: "grid",
    mediaTreatment: "diagrammatic",
  },
  terminal: {
    heroVariant: "neon-console",
    proofVariant: "object-spec",
    ctaVariant: "assertive-dual",
    previewSilhouette: "console",
    emphasis: "material",
    mediaTreatment: "diagrammatic",
  },
  "catholic-mondrianism": {
    heroVariant: "geometric-grid",
    proofVariant: "comparison-grid",
    previewSilhouette: "tiles",
    emphasis: "grid",
    mediaTreatment: "diagrammatic",
  },
  "isometric-design": {
    heroVariant: "geometric-grid",
    proofVariant: "tile-matrix",
    previewSilhouette: "tiles",
    emphasis: "grid",
    mediaTreatment: "diagrammatic",
  },
  "glassmorphism-mature": {
    heroVariant: "ambient-cloud",
    proofVariant: "keyword-badges",
    previewSilhouette: "orbital",
    emphasis: "atmosphere",
    mediaTreatment: "ambient",
  },
  "claymorphism-soft-3d": {
    heroVariant: "soft-stack",
    proofVariant: "soft-bullets",
    previewSilhouette: "stacked-cards",
    emphasis: "material",
    mediaTreatment: "ambient",
  },
  "organic-mesh-gradients": {
    heroVariant: "ambient-cloud",
    proofVariant: "keyword-badges",
    previewSilhouette: "orbital",
    emphasis: "atmosphere",
    mediaTreatment: "ambient",
  },
  skeuomorphic: {
    heroVariant: "soft-stack",
    proofVariant: "keyword-badges",
    ctaVariant: "quiet-links",
    previewSilhouette: "stacked-cards",
    density: "balanced",
    emphasis: "material",
    mediaTreatment: "photographic",
  },
  skeuomorphism: {
    heroVariant: "ambient-cloud",
    proofVariant: "soft-bullets",
    ctaVariant: "gentle-invite",
    previewSilhouette: "stacked-cards",
    density: "balanced",
    emphasis: "material",
    mediaTreatment: "photographic",
  },
  botanical: {
    heroVariant: "earthy-asymmetry",
    proofVariant: "editorial-notes",
    previewSilhouette: "stacked-cards",
    emphasis: "material",
    mediaTreatment: "photographic",
  },
  "dark-glow-aurora": {
    heroVariant: "control-surface",
    proofVariant: "reveal-cards",
    previewSilhouette: "orbital",
    emphasis: "atmosphere",
    mediaTreatment: "ambient",
  },
  "immersive-3d-product": {
    heroVariant: "object-spotlight",
    proofVariant: "object-spec",
    previewSilhouette: "spotlight",
    emphasis: "object",
    mediaTreatment: "rendered-object",
  },
  "motion-led-storytelling": {
    heroVariant: "narrative-reveal",
    proofVariant: "reveal-cards",
    previewSilhouette: "orbital",
    emphasis: "atmosphere",
    mediaTreatment: "ambient",
  },
  kinetic: {
    heroVariant: "narrative-reveal",
    proofVariant: "reveal-cards",
    emphasis: "atmosphere",
    mediaTreatment: "ambient",
  },
  cyberpunk: {
    heroVariant: "neon-console",
    proofVariant: "object-spec",
    previewSilhouette: "console",
    emphasis: "material",
    mediaTreatment: "diagrammatic",
  },
  "neo-brutalism": {
    heroVariant: "poster-stack",
    proofVariant: "signal-cards",
    previewSilhouette: "poster",
    emphasis: "poster",
    mediaTreatment: "photographic",
  },
  "y2k-retro-futurism": {
    heroVariant: "glossy-badge-cloud",
    proofVariant: "comparison-grid",
    previewSilhouette: "collage",
    emphasis: "material",
    mediaTreatment: "ambient",
  },
  "anti-design": {
    heroVariant: "poster-stack",
    proofVariant: "signal-cards",
    previewSilhouette: "collage",
    emphasis: "poster",
    mediaTreatment: "collaged",
  },
  maximalist: {
    heroVariant: "poster-stack",
    proofVariant: "comparison-grid",
    previewSilhouette: "collage",
    emphasis: "poster",
    mediaTreatment: "collaged",
  },
  vaporwave: {
    heroVariant: "glossy-badge-cloud",
    proofVariant: "comparison-grid",
    previewSilhouette: "collage",
    emphasis: "material",
    mediaTreatment: "ambient",
  },
  sketch: {
    heroVariant: "handmade-board",
    proofVariant: "keyword-badges",
    previewSilhouette: "stacked-cards",
    emphasis: "type",
    mediaTreatment: "hand-drawn",
  },
};

function requestJson(url, headers = {}) {
  return new Promise((resolve, reject) => {
    const req = https.get(url, { headers }, (res) => {
      if (!res.statusCode || res.statusCode < 200 || res.statusCode >= 300) {
        res.resume();
        reject(new Error(`Unexpected status code ${res.statusCode ?? "unknown"}`));
        return;
      }

      let data = "";
      res.on("data", (chunk) => {
        data += chunk;
      });
      res.on("end", () => {
        try {
          resolve(JSON.parse(data));
        } catch (error) {
          reject(error);
        }
      });
    });

    req.on("error", reject);
  });
}

function escapeString(value) {
  return String(value).replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function ensureArray(value) {
  if (!Array.isArray(value)) return [];
  return value
    .map((item) => String(item ?? "").trim())
    .filter(Boolean);
}

function uniqueList(items) {
  return [...new Set(items)];
}

function fallbackTitleFromSlug(slug) {
  return slug
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function hashSeed(input) {
  let hash = 0;
  for (let i = 0; i < input.length; i += 1) {
    hash = (hash * 31 + input.charCodeAt(i)) >>> 0;
  }
  return hash;
}

function hue(input, delta = 0) {
  return (hashSeed(input) + delta) % 360;
}

function inferFamily(style) {
  const slug = String(style.slug ?? "");
  const slugLower = slug.toLowerCase();
  const remoteFamily = String(style.family ?? "");

  if (SLUG_FAMILY_OVERRIDES[slug]) {
    return SLUG_FAMILY_OVERRIDES[slug];
  }

  let family = REMOTE_TO_LOCAL_FAMILY[remoteFamily] ?? "grid-product";

  if (slugLower.includes("asymmetry") || slugLower.includes("diagonal")) {
    family = "high-agency";
  }

  if (
    slugLower.includes("editorial") ||
    slugLower.includes("typography") ||
    slugLower.includes("newsprint")
  ) {
    family = "editorial-typography";
  }

  if (
    slugLower.includes("cyber") ||
    slugLower.includes("glow") ||
    slugLower.includes("immersive")
  ) {
    family = "immersive-premium";
  }

  return family;
}

function paletteForStyle(style, family) {
  const slug = String(style.slug ?? "");
  const textProbe = [
    slug,
    style.name_en,
    style.page_title_en,
    style.kicker_en,
    ...(ensureArray(style.keywords) ?? []),
  ]
    .join(" ")
    .toLowerCase();

  const h0 = hue(slug, 0);
  const h1 = hue(slug, 38);
  const h2 = hue(slug, 190);

  if (slug === "terminal") {
    return {
      "--theme-bg": "hsl(212 22% 7%)",
      "--theme-bg-alt": "hsl(212 20% 10%)",
      "--theme-surface": "hsl(212 18% 12% / 0.94)",
      "--theme-surface-strong": "hsl(212 20% 16% / 0.98)",
      "--theme-text": "hsl(210 36% 92%)",
      "--theme-muted": "hsl(210 16% 68%)",
      "--theme-border": "hsl(145 24% 36% / 0.62)",
      "--theme-accent": "hsl(143 84% 56%)",
      "--theme-accent-2": "hsl(165 80% 52%)",
      "--theme-accent-contrast": "hsl(212 22% 8%)",
      "--theme-ring": "hsl(143 84% 56% / 0.34)",
      "--theme-shadow": "0 24px 48px rgba(0, 0, 0, 0.45)",
      "--theme-grid": "hsl(145 34% 44% / 0.12)",
    };
  }

  if (slug === "skeuomorphic") {
    return {
      "--theme-bg": "hsl(214 12% 16%)",
      "--theme-bg-alt": "hsl(214 10% 22%)",
      "--theme-surface": "hsl(214 10% 24% / 0.92)",
      "--theme-surface-strong": "hsl(214 9% 30% / 0.98)",
      "--theme-text": "hsl(210 18% 92%)",
      "--theme-muted": "hsl(210 10% 70%)",
      "--theme-border": "hsl(212 10% 54% / 0.56)",
      "--theme-accent": "hsl(24 92% 56%)",
      "--theme-accent-2": "hsl(38 92% 62%)",
      "--theme-accent-contrast": "hsl(214 12% 10%)",
      "--theme-ring": "hsl(24 92% 56% / 0.34)",
      "--theme-shadow": "0 20px 36px rgba(0, 0, 0, 0.42)",
      "--theme-grid": "hsl(214 10% 62% / 0.12)",
    };
  }

  if (slug === "skeuomorphism") {
    return {
      "--theme-bg": "hsl(36 18% 90%)",
      "--theme-bg-alt": "hsl(32 14% 84%)",
      "--theme-surface": "hsl(0 0% 98% / 0.94)",
      "--theme-surface-strong": "hsl(0 0% 100% / 0.98)",
      "--theme-text": "hsl(220 12% 22%)",
      "--theme-muted": "hsl(220 8% 42%)",
      "--theme-border": "hsl(28 10% 58% / 0.34)",
      "--theme-accent": "hsl(214 54% 46%)",
      "--theme-accent-2": "hsl(28 36% 50%)",
      "--theme-accent-contrast": "hsl(0 0% 100%)",
      "--theme-ring": "hsl(214 54% 46% / 0.3)",
      "--theme-shadow": "0 22px 40px rgba(61, 67, 86, 0.16)",
      "--theme-grid": "hsl(220 10% 40% / 0.08)",
    };
  }

  const darkSignal = /(dark|night|neon|cyber|terminal|glitch|vaporwave|retro|aurora|cinemagraph|particle)/;
  const shouldUseDark = darkSignal.test(textProbe);

  if (shouldUseDark || (family === "immersive-premium" && !textProbe.includes("paper"))) {
    return {
      "--theme-bg": `hsl(${h0} 35% 8%)`,
      "--theme-bg-alt": `hsl(${h1} 32% 12%)`,
      "--theme-surface": `hsl(${h0} 28% 16% / 0.78)`,
      "--theme-surface-strong": `hsl(${h0} 26% 22% / 0.9)`,
      "--theme-text": "hsl(214 100% 96%)",
      "--theme-muted": "hsl(220 36% 74%)",
      "--theme-border": `hsl(${h2} 74% 72% / 0.22)`,
      "--theme-accent": `hsl(${h1} 96% 66%)`,
      "--theme-accent-2": `hsl(${h2} 94% 64%)`,
      "--theme-accent-contrast": "hsl(224 40% 10%)",
      "--theme-ring": `hsl(${h1} 86% 66% / 0.36)`,
      "--theme-shadow": "0 40px 120px rgba(1, 6, 18, 0.56)",
      "--theme-grid": `hsl(${h2} 70% 80% / 0.08)`,
    };
  }

  if (family === "editorial-typography") {
    return {
      "--theme-bg": `hsl(${h0} 35% 96%)`,
      "--theme-bg-alt": `hsl(${h0} 28% 92%)`,
      "--theme-surface": "hsl(0 0% 100% / 0.75)",
      "--theme-surface-strong": "hsl(0 0% 100%)",
      "--theme-text": `hsl(${h1} 18% 14%)`,
      "--theme-muted": `hsl(${h1} 14% 36%)`,
      "--theme-border": `hsl(${h1} 18% 18% / 0.12)`,
      "--theme-accent": `hsl(${h0} 34% 28%)`,
      "--theme-accent-2": `hsl(${h2} 38% 42%)`,
      "--theme-accent-contrast": "hsl(38 62% 94%)",
      "--theme-ring": `hsl(${h0} 28% 28% / 0.22)`,
      "--theme-shadow": "0 16px 34px rgba(23, 20, 16, 0.08)",
      "--theme-grid": `hsl(${h1} 18% 20% / 0.06)`,
      "--theme-font-display": "var(--font-editorial), Georgia, serif",
    };
  }

  if (family === "tactile-organic") {
    return {
      "--theme-bg": `hsl(${h0} 75% 95%)`,
      "--theme-bg-alt": `hsl(${h1} 68% 91%)`,
      "--theme-surface": "hsl(0 0% 100% / 0.72)",
      "--theme-surface-strong": "hsl(0 0% 100% / 0.92)",
      "--theme-text": `hsl(${h1} 24% 18%)`,
      "--theme-muted": `hsl(${h1} 14% 43%)`,
      "--theme-border": `hsl(${h1} 34% 62% / 0.3)`,
      "--theme-accent": `hsl(${h2} 76% 58%)`,
      "--theme-accent-2": `hsl(${h0} 72% 62%)`,
      "--theme-accent-contrast": "hsl(0 0% 100%)",
      "--theme-ring": `hsl(${h2} 86% 56% / 0.28)`,
      "--theme-shadow": "0 24px 55px rgba(89, 93, 142, 0.14)",
      "--theme-grid": `hsl(${h1} 32% 54% / 0.08)`,
      "--theme-radius": "30px",
    };
  }

  if (family === "experimental-loud") {
    return {
      "--theme-bg": `hsl(${h0} 94% 90%)`,
      "--theme-bg-alt": `hsl(${h1} 88% 74%)`,
      "--theme-surface": "hsl(0 0% 100%)",
      "--theme-surface-strong": "hsl(44 100% 96%)",
      "--theme-text": "hsl(0 0% 7%)",
      "--theme-muted": "hsl(26 17% 32%)",
      "--theme-border": "hsl(0 0% 7%)",
      "--theme-accent": `hsl(${h1} 88% 54%)`,
      "--theme-accent-2": `hsl(${h2} 90% 52%)`,
      "--theme-accent-contrast": "hsl(0 0% 6%)",
      "--theme-ring": `hsl(${h1} 88% 56% / 0.34)`,
      "--theme-shadow": "8px 8px 0 rgba(10, 10, 10, 0.92)",
      "--theme-grid": "hsl(0 0% 10% / 0.14)",
      "--theme-radius": "18px",
    };
  }

  if (family === "high-agency") {
    return {
      "--theme-bg": `hsl(${h0} 56% 95%)`,
      "--theme-bg-alt": `hsl(${h1} 52% 89%)`,
      "--theme-surface": "hsl(0 0% 100% / 0.8)",
      "--theme-surface-strong": "hsl(0 0% 100%)",
      "--theme-text": "hsl(18 28% 12%)",
      "--theme-muted": "hsl(18 18% 36%)",
      "--theme-border": "hsl(18 24% 16% / 0.14)",
      "--theme-accent": `hsl(${h1} 72% 48%)`,
      "--theme-accent-2": `hsl(${h2} 42% 28%)`,
      "--theme-accent-contrast": "hsl(24 48% 94%)",
      "--theme-ring": `hsl(${h1} 82% 48% / 0.32)`,
      "--theme-shadow": "0 28px 72px rgba(92, 61, 39, 0.16)",
      "--theme-grid": "hsl(22 20% 18% / 0.07)",
    };
  }

  return {
    "--theme-bg": `hsl(${h0} 60% 95%)`,
    "--theme-bg-alt": `hsl(${h1} 56% 91%)`,
    "--theme-surface": "hsl(0 0% 100% / 0.95)",
    "--theme-surface-strong": "hsl(0 0% 100%)",
    "--theme-text": `hsl(${h2} 45% 14%)`,
    "--theme-muted": `hsl(${h2} 22% 36%)`,
    "--theme-border": `hsl(${h2} 26% 24% / 0.12)`,
    "--theme-accent": `hsl(${h1} 72% 54%)`,
    "--theme-accent-2": `hsl(${h2} 72% 48%)`,
    "--theme-accent-contrast": "hsl(0 0% 100%)",
    "--theme-ring": `hsl(${h1} 80% 54% / 0.3)`,
    "--theme-shadow": "0 14px 34px rgba(14, 26, 48, 0.12)",
    "--theme-grid": `hsl(${h2} 30% 22% / 0.06)`,
  };
}

function normalizeStyle(style) {
  const slug = String(style.slug ?? "").trim();
  if (!slug) {
    throw new Error("Style item without slug");
  }

  const family = inferFamily(style);
  const naaiFamily = String(style.family ?? "").trim() || "unknown";
  const keywords = uniqueList(ensureArray(style.keywords));
  const supportingTreatments = uniqueList(ensureArray(style.supporting_treatments_en));
  const avoidList = uniqueList(ensureArray(style.avoid_list_en));
  const previewBullets = uniqueList(ensureArray(style.preview_bullets_en));

  const modeLabel = String(style.name_en ?? "").trim() || fallbackTitleFromSlug(slug);

  const fallbackPreviewBullets =
    keywords.slice(0, 3).map((item) => item.replace(/[-_]/g, " ")) || [];

  return {
    slug,
    modeLabel,
    pageTitle: String(style.page_title_en ?? "").trim() || `${modeLabel} style demo`,
    kicker:
      String(style.kicker_en ?? "").trim() ||
      `${modeLabel} / NAAI-synced style direction`,
    summary:
      String(style.summary_en ?? "").trim() ||
      `A NAAI-synced direction for ${modeLabel.toLowerCase()} with differentiated layout grammar and material language.`,
    audience:
      String(style.audience_en ?? "").trim() ||
      "Product, design, and marketing teams selecting a differentiated landing-page direction.",
    family,
    naaiFamily,
    primaryLanguage:
      String(style.primary_language_en ?? "").trim() ||
      "Layout, hierarchy, and material treatment tuned from NAAI style semantics.",
    supportingTreatments:
      supportingTreatments.length > 0
        ? supportingTreatments
        : ["composition rhythm", "surface language", "hierarchy contrast"],
    imageryMode:
      String(style.imagery_mode_en ?? "").trim() ||
      "Art direction and visual treatment derived from NAAI style cues.",
    avoidList:
      avoidList.length > 0
        ? avoidList
        : [
            "palette-only styling without layout changes",
            "mixed visual languages that collapse hierarchy",
          ],
    previewBullets:
      previewBullets.length > 0
        ? previewBullets
        : fallbackPreviewBullets.length > 0
          ? fallbackPreviewBullets
          : [
              "Differentiated hierarchy rhythm",
              "Distinct surface language",
              "Purposeful visual identity cues",
            ],
    keywords:
      keywords.length > 0
        ? keywords
        : [slug.replace(/-/g, " "), family.replace(/-/g, " "), "naai style"],
    featured: Boolean(style.featured),
    demoAvailable: style.reference_only !== true,
    displayOrder:
      Number.isFinite(style.display_order) && style.display_order >= 0
        ? style.display_order
        : 9999,
    vars: paletteForStyle(style, family),
    legacyAliases: ensureArray(style.legacy_aliases),
  };
}

function renderStringArray(values, arrayIndent = 6) {
  if (values.length === 0) {
    return "[]";
  }

  const indent = " ".repeat(arrayIndent);
  const closeIndent = " ".repeat(arrayIndent - 2);
  return `[\n${values.map((value) => `${indent}"${escapeString(value)}"`).join(",\n")}\n${closeIndent}]`;
}

function renderVars(varsMap) {
  const entries = Object.entries(varsMap);
  return `vars({\n${entries
    .map(([key, value]) => `      "${escapeString(key)}": "${escapeString(value)}",`)
    .join("\n")}\n    })`;
}

function renderStyleSeed(style) {
  return `  {
    slug: "${escapeString(style.slug)}",
    modeLabel: "${escapeString(style.modeLabel)}",
    pageTitle: "${escapeString(style.pageTitle)}",
    kicker: "${escapeString(style.kicker)}",
    summary: "${escapeString(style.summary)}",
    audience: "${escapeString(style.audience)}",
    family: "${style.family}",
    primaryLanguage: "${escapeString(style.primaryLanguage)}",
    supportingTreatments: ${renderStringArray(style.supportingTreatments)},
    imageryMode: "${escapeString(style.imageryMode)}",
    avoidList: ${renderStringArray(style.avoidList)},
    previewBullets: ${renderStringArray(style.previewBullets)},
    keywords: ${renderStringArray(style.keywords)},
    featured: ${style.featured ? "true" : "false"},
    demoAvailable: ${style.demoAvailable ? "true" : "false"},
    vars: ${renderVars(style.vars)},
  },`;
}

function replaceObjectBlock(fileContent, marker, renderedBlock) {
  const start = fileContent.indexOf(marker);
  if (start === -1) {
    throw new Error(`Marker not found: ${marker}`);
  }

  const objectStart = fileContent.indexOf("{", start);
  if (objectStart === -1) {
    throw new Error(`Object start not found for marker: ${marker}`);
  }

  let depth = 0;
  let objectEnd = -1;
  for (let index = objectStart; index < fileContent.length; index += 1) {
    if (fileContent[index] === "{") depth += 1;
    if (fileContent[index] === "}") depth -= 1;
    if (depth === 0) {
      objectEnd = index;
      break;
    }
  }

  if (objectEnd === -1) {
    throw new Error(`Could not locate object end for marker: ${marker}`);
  }

  return `${fileContent.slice(0, objectStart + 1)}\n${renderedBlock}\n${fileContent.slice(objectEnd)}`;
}

function replaceArrayBlock(fileContent, marker, renderedBlock) {
  const start = fileContent.indexOf(marker);
  if (start === -1) {
    throw new Error(`Marker not found: ${marker}`);
  }

  const arrayStart = start + marker.length;
  let depth = 1;
  let arrayEnd = -1;

  for (let index = arrayStart; index < fileContent.length; index += 1) {
    if (fileContent[index] === "[") depth += 1;
    if (fileContent[index] === "]") depth -= 1;

    if (depth === 0) {
      arrayEnd = index;
      break;
    }
  }

  if (arrayEnd === -1) {
    throw new Error(`Could not locate the end of array for marker: ${marker}`);
  }

  return `${fileContent.slice(0, arrayStart)}\n${renderedBlock}\n${fileContent.slice(arrayEnd)}`;
}

function extractThemeSlugs(content) {
  return [...content.matchAll(/slug:\s*"([^"]+)"/g)].map((match) => match[1]);
}

function buildRouterContent(styles) {
  const grouped = Object.fromEntries(FAMILY_ORDER.map((family) => [family, []]));
  for (const style of styles) {
    grouped[style.family].push(style.slug);
  }

  return `# Router

## Choose the family by dominant intent

${FAMILY_ORDER.map((family) => `### ${family}\n${FAMILY_NOTES[family]}`).join("\n\n")}

## Active style catalog (synced from NAAI)
${FAMILY_ORDER.map(
  (family) =>
    `- ${family} -> ${grouped[family].map((slug) => `\`${slug}\``).join(", ") || "_none_"}`,
).join("\n")}

## Style-specific guardrails
- \`terminal\` is mapped to immersive-premium for family routing, but should keep hard-edged command-line controls and avoid pill-shaped CTAs.
- \`skeuomorphic\` should read as raised keycaps over a recessed base (matte panels, tighter radii, safety-orange utility accents), not soft pastel blobs.
- \`skeuomorphism\` should use refined raised controls over a soft base (bevel/specular detail, controlled shadows), not toy-like inflated clay surfaces.
- For both skeuo styles, apply the raised-key effect to primary cards and CTA buttons, not only to micro chips.
`;
}

function buildRecipesContent(family, styles) {
  const familyStyles = styles
    .filter((style) => style.family === family)
    .sort((a, b) => a.displayOrder - b.displayOrder || a.slug.localeCompare(b.slug));

  const trimmed = (value) => String(value ?? "").replace(/\s+/g, " ").trim();
  const sentence = (value) => {
    const clean = trimmed(value);
    if (!clean) return "";
    return /[.!?]$/.test(clean) ? clean : `${clean}.`;
  };
  const lowerFirst = (value) => {
    const clean = trimmed(value);
    if (!clean) return "";
    return clean.charAt(0).toLowerCase() + clean.slice(1);
  };
  const list = (items, limit = 3) => uniqueList(ensureArray(items)).slice(0, limit);
  const bulletLines = (items, fallback) => {
    const current = list(items);
    if (current.length > 0) {
      return current.map((item) => `- ${sentence(item)}`).join("\n");
    }
    return `- ${sentence(fallback)}`;
  };
  const normalizeTokens = (value) =>
    trimmed(value)
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, " ")
      .split(" ")
      .map((token) => token.trim())
      .filter((token) => token.length >= 3);
  const tokenSetForStyle = (style) => {
    const tokens = [
      style.slug.replace(/-/g, " "),
      style.modeLabel,
      style.pageTitle,
      style.primaryLanguage,
      ...list(style.keywords, 8),
      ...list(style.supportingTreatments, 6),
    ].flatMap((item) => normalizeTokens(item));
    return new Set(tokens);
  };
  const overlapCount = (left, right) => {
    let score = 0;
    for (const token of left) {
      if (right.has(token)) score += 1;
    }
    return score;
  };
  const siblingFor = (style) => {
    const baseTokens = tokenSetForStyle(style);
    return familyStyles
      .filter((candidate) => candidate.slug !== style.slug)
      .map((candidate) => ({
        candidate,
        score: overlapCount(baseTokens, tokenSetForStyle(candidate)),
      }))
      .sort((a, b) => b.score - a.score || a.candidate.slug.localeCompare(b.candidate.slug))
      .slice(0, 2)
      .map((item) => item.candidate);
  };

  const styleBlocks =
    familyStyles.length > 0
      ? familyStyles
          .map((style) => {
            const pageTitle = sentence(style.pageTitle.replace(/\.+$/, "").trim());
            const summary = sentence(style.summary);
            const language = sentence(style.primaryLanguage);
            const imagery = sentence(style.imageryMode);
            const contrasts = siblingFor(style)
              .map((candidate) => {
                const candidateLanguage = lowerFirst(
                  candidate.primaryLanguage || candidate.pageTitle || candidate.modeLabel,
                );
                const candidateImagery = lowerFirst(candidate.imageryMode);
                const candidateProfile = candidateImagery
                  ? `${candidateLanguage} with ${candidateImagery}`
                  : candidateLanguage;
                return `- Keep \`${style.slug}\` anchored in ${lowerFirst(style.primaryLanguage || style.pageTitle || style.modeLabel)}; avoid drifting toward \`${candidate.slug}\` (${candidateProfile}).`;
              })
              .join("\n");
            const availability = style.demoAvailable
              ? "Live demo available."
              : "Reference-only style (no dedicated live demo route).";
            const styleSpecificGuidance = [
              style.slug === "terminal"
                ? "- Keep controls hard-edged and near-rectangular (Warp/Terminus-like); avoid rounded-pill buttons and soft card geometry."
                : "",
              style.slug === "skeuomorphic"
                ? "- Build a recessed base plus raised keycap controls (hardware-like matte shells, tighter radii, practical orange utility accents); avoid bubbly rounded consumer softness."
                : "",
              style.slug === "skeuomorphism"
                ? "- Build a soft base layer with raised crafted controls (subtle bevel/specular cues and restrained depth); avoid industrial panel language or toy-like puffiness."
                : "",
              style.slug === "skeuomorphic" || style.slug === "skeuomorphism"
                ? "- Apply the raised-key depth model to major cards and CTA buttons as the primary visual cue, not only to small chips or tags."
                : "",
            ]
              .filter(Boolean)
              .join("\n");

            return `### \`${style.slug}\`

**NAAI profile**
- Name: ${style.modeLabel}
- NAAI family: ${style.naaiFamily}
- Local family mapping: \`${style.family}\`
- Availability: ${availability}

**Core distinction**
${summary}

**Page intent**
${pageTitle}

**Structural language**
${language}

**Supporting treatments**
${bulletLines(style.supportingTreatments, "Composition rhythm, surface language, and hierarchy contrast should reinforce the style intent.")}

**Imagery mode**
${imagery}

**Preview cues (NAAI)**
${bulletLines(style.previewBullets, "Differentiated hierarchy rhythm, distinct surface language, and purposeful identity cues.")}

**Avoid**
${bulletLines(style.avoidList, "Palette-only styling without layout changes and mixed visual languages that collapse hierarchy.")}

**Keywords**
${bulletLines(style.keywords, `${style.slug.replace(/-/g, " ")} and ${style.family.replace(/-/g, " ")} signals.`)}

**Differentiation guidance for AI**
- Keep this style anchored in its NAAI page intent and structural language before adjusting color.
- Use the supporting treatments together as a system, not as isolated decorative effects.
- Maintain the stated imagery mode and avoid list to prevent drift into nearby styles.
${contrasts || "- Contrast against sibling styles by preserving this style's structural language and imagery cues."}
${styleSpecificGuidance}
- Use preview cues and keywords as guardrails when expanding prompts or generating variants.
`;
          })
          .join("\n")
      : "No active style in this family at the moment.";

  const chooserLines =
    familyStyles.length > 0
      ? familyStyles
          .map(
            (style) =>
              `- \`${style.slug}\`${style.demoAvailable ? "" : " (reference-only)"} -> ${style.pageTitle.replace(/\.+$/, "").trim()}.`,
          )
          .join("\n")
      : "- _No active style in this family at the moment._";

  return `# Recipes

## Exemplar chooser
${chooserLines}

## NAAI style differentiation details (all active styles)
${styleBlocks}

## Sync note
- This file is generated by naai-sync.
- Styles are sourced from NAAI and grouped by local family mapping.
- Reference-only styles are included for guidance even when they do not have a live demo route.
`;
}

function renderRecipeValue(value) {
  if (Array.isArray(value)) {
    return `[${value.map((item) => `"${escapeString(item)}"`).join(", ")}]`;
  }
  if (typeof value === "string") {
    return `"${escapeString(value)}"`;
  }
  if (typeof value === "boolean") {
    return value ? "true" : "false";
  }
  return String(value);
}

function renderStyleRecipeOverrides(styles) {
  const activeSlugs = new Set(styles.map((style) => style.slug));
  const lines = [];

  for (const slug of styles.map((style) => style.slug)) {
    const override = STYLE_RECIPE_OVERRIDES[slug];
    if (!override || !activeSlugs.has(slug)) continue;

    const keys = Object.keys(override);
    if (keys.length === 0) continue;

    lines.push(`  "${slug}": {`);
    for (const key of keys) {
      lines.push(`    ${key}: ${renderRecipeValue(override[key])},`);
    }
    lines.push("  },");
  }

  return lines.join("\n");
}

function listMarkdownFiles(dir) {
  const files = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...listMarkdownFiles(fullPath));
      continue;
    }
    if (entry.isFile() && entry.name.endsWith(".md")) {
      files.push(fullPath);
    }
  }
  return files;
}

function rewriteLegacyMentionsInDocs(replacements) {
  let changedFiles = 0;
  const markdownFiles = listMarkdownFiles(CLAUDE_SKILLS_ROOT);

  for (const filePath of markdownFiles) {
    let content = fs.readFileSync(filePath, "utf8");
    const originalContent = content;

    for (const [oldSlug, newSlug] of Object.entries(replacements)) {
      const escapedOld = escapeRegExp(oldSlug);
      content = content.replace(new RegExp(`\`${escapedOld}\``, "g"), `\`${newSlug}\``);
      content = content.replace(
        new RegExp(`/styles/${escapedOld}(?=[/\\s\\)\\]\\"'\\x60]|$)`, "g"),
        `/styles/${newSlug}`,
      );
    }

    if (content !== originalContent) {
      fs.writeFileSync(filePath, content);
      changedFiles += 1;
    }
  }

  return changedFiles;
}

function writeAliasesFile(styles) {
  const aliasMap = {};

  for (const style of styles) {
    for (const alias of style.legacyAliases) {
      if (/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(alias) && alias !== style.slug) {
        aliasMap[alias] = style.slug;
      }
    }
  }

  for (const [oldSlug, newSlug] of Object.entries(LEGACY_SLUG_REPLACEMENTS)) {
    aliasMap[oldSlug] = newSlug;
  }

  const sortedEntries = Object.entries(aliasMap).sort(([a], [b]) => a.localeCompare(b));
  const fileBody = `export const legacyThemeAliases: Record<string, string> = {
${sortedEntries
  .map(([alias, slug]) => `  "${escapeString(alias)}": "${escapeString(slug)}",`)
  .join("\n")}
};
`;

  fs.writeFileSync(ALIASES_FILE, fileBody);
}

async function main() {
  try {
    console.log("Starting NAAI sync...");
    console.log(`Repo root: ${REPO_ROOT}`);

    const headers = {
      "User-Agent": "naai-sync-skill/2.0",
    };

    if (process.env.NAAI_API_KEY) {
      headers["X-API-Key"] = process.env.NAAI_API_KEY;
    }

    const remotePayload = await requestJson(API_URL, headers);
    if (!Array.isArray(remotePayload)) {
      throw new Error("Expected array payload from NAAI API.");
    }

    const remoteStyles = remotePayload
      .filter((style) => style && style.slug && style.is_published !== false)
      .sort(
        (a, b) =>
          (Number.isFinite(a.display_order) ? a.display_order : 9999) -
            (Number.isFinite(b.display_order) ? b.display_order : 9999) ||
          String(a.slug).localeCompare(String(b.slug)),
      )
      .map(normalizeStyle);

    const localThemesContent = fs.readFileSync(THEMES_FILE, "utf8");
    const localSlugsBefore = extractThemeSlugs(localThemesContent);
    const remoteSlugs = remoteStyles.map((style) => style.slug);

    const renderedThemeSeeds = remoteStyles.map(renderStyleSeed).join("\n");
    const nextThemesContent = replaceArrayBlock(
      localThemesContent,
      "const themeSeeds: StyleSeed[] = [",
      renderedThemeSeeds,
    );

    const renderedRecipeOverrides = renderStyleRecipeOverrides(remoteStyles);
    const updatedThemesContent = replaceObjectBlock(
      nextThemesContent,
      "const styleRecipeOverrides: Record<",
      renderedRecipeOverrides,
    );

    fs.writeFileSync(THEMES_FILE, updatedThemesContent);
    writeAliasesFile(remoteStyles);

    fs.writeFileSync(ROUTER_FILE, buildRouterContent(remoteStyles));
    for (const family of FAMILY_ORDER) {
      fs.writeFileSync(FAMILY_RECIPE_FILES[family], buildRecipesContent(family, remoteStyles));
    }

    const rewrittenDocsCount = rewriteLegacyMentionsInDocs(LEGACY_SLUG_REPLACEMENTS);

    const localSet = new Set(localSlugsBefore);
    const remoteSet = new Set(remoteSlugs);
    const added = remoteSlugs.filter((slug) => !localSet.has(slug));
    const removed = localSlugsBefore.filter((slug) => !remoteSet.has(slug));
    const kept = remoteSlugs.filter((slug) => localSet.has(slug));

    const byFamily = Object.fromEntries(FAMILY_ORDER.map((family) => [family, 0]));
    for (const style of remoteStyles) {
      byFamily[style.family] += 1;
    }

    const report = {
      timestamp: new Date().toISOString(),
      source: API_URL,
      summary: {
        total_remote: remoteStyles.length,
        total_local_before: localSlugsBefore.length,
        total_local_after: remoteSlugs.length,
        added_count: added.length,
        removed_count: removed.length,
        kept_count: kept.length,
        docs_rewritten_count: rewrittenDocsCount,
      },
      by_family: byFamily,
      reference_only_slugs: remoteStyles
        .filter((style) => !style.demoAvailable)
        .map((style) => style.slug),
      added_slugs: added,
      removed_slugs: removed,
      legacy_slug_replacements: LEGACY_SLUG_REPLACEMENTS,
    };

    fs.writeFileSync(REPORT_FILE, JSON.stringify(report, null, 2));

    console.log("Sync complete.");
    console.log(`- Remote styles: ${remoteStyles.length}`);
    console.log(`- Added: ${added.length}`);
    console.log(`- Removed: ${removed.length}`);
    console.log(`- Docs updated: ${rewrittenDocsCount} markdown files`);
    console.log(`- Report: ${REPORT_FILE}`);
  } catch (error) {
    console.error("NAAI sync failed:", error);
    process.exit(1);
  }
}

main();
