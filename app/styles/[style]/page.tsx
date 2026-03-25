import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { LandingPageRenderer } from "@/components/landing/landing-page-renderer";
import { demoStyleSlugs, getStyleBySlug } from "@/lib/themes";

export async function generateStaticParams() {
  return demoStyleSlugs.map((style) => ({ style }));
}

export async function generateMetadata(
  props: PageProps<"/styles/[style]">,
): Promise<Metadata> {
  const { style: slug } = await props.params;
  const style = getStyleBySlug(slug);

  if (!style) {
    return {
      title: "Style not found",
    };
  }

  return {
    title: `${style.modeLabel} — Design Trending Style`,
    description: style.summary,
  };
}

export default async function StylePage(props: PageProps<"/styles/[style]">) {
  const { style: slug } = await props.params;
  const style = getStyleBySlug(slug);

  if (!style || style.demoAvailable === false) {
    notFound();
  }

  return <LandingPageRenderer theme={style} />;
}
