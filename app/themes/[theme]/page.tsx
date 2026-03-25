import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";

import { demoStyleSlugs, getStyleBySlug } from "@/lib/themes";
import { legacyThemeAliases } from "@/lib/style-aliases";

const legacyThemeSlugs = [...new Set([...Object.keys(legacyThemeAliases), ...demoStyleSlugs])];

function getCanonicalStyleSlug(slug: string) {
  return legacyThemeAliases[slug] ?? getStyleBySlug(slug)?.slug;
}

export async function generateStaticParams() {
  return legacyThemeSlugs.map((theme) => ({ theme }));
}

export async function generateMetadata(
  props: PageProps<"/themes/[theme]">,
): Promise<Metadata> {
  const { theme: slug } = await props.params;
  const canonicalSlug = getCanonicalStyleSlug(slug);
  const style = canonicalSlug ? getStyleBySlug(canonicalSlug) : undefined;

  if (!style || style.demoAvailable === false) {
    return {
      title: "Theme not found",
    };
  }

  return {
    title: `${style.modeLabel} — Design Trending Style`,
    description: style.summary,
  };
}

export default async function ThemePage(props: PageProps<"/themes/[theme]">) {
  const { theme: slug } = await props.params;
  const canonicalSlug = getCanonicalStyleSlug(slug);

  const style = canonicalSlug ? getStyleBySlug(canonicalSlug) : undefined;

  if (!canonicalSlug || !style || style.demoAvailable === false) {
    notFound();
  }

  redirect(`/styles/${canonicalSlug}`);
}
