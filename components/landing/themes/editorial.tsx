import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { FamilyAtmosphere } from "@/components/landing/effects/family-atmosphere";
import { SectionHeading } from "@/components/ui/section-heading";
import { Surface } from "@/components/ui/surface";
import { productName, sharedContent } from "@/lib/landing-content";
import type { ThemeDefinition } from "@/lib/themes";

import {
  getCompareLabel,
  getHeroStatement,
  getProofLabel,
  getQuoteLabel,
  getRhythmDescription,
  getRhythmEyebrow,
  getSiblingStyle,
} from "@/components/landing/theme-recipe-copy";
import { getStyleImagery } from "@/lib/style-imagery";
import { StyleHeroVisual } from "@/components/landing/style-image";

export function EditorialLanding({ theme }: { theme: ThemeDefinition }) {
  const siblingStyle = getSiblingStyle(theme);
  const heroStatement = getHeroStatement(theme);
  const compareLabel = getCompareLabel(theme);
  const proofLabel = getProofLabel(theme);
  const quoteLabel = getQuoteLabel(theme);
  const heroGrid =
    theme.recipe.heroVariant === "oversized-type"
      ? "lg:grid-cols-[0.78fr_1.22fr]"
      : theme.recipe.heroVariant === "ornamental-frame"
        ? "lg:grid-cols-[1fr]"
        : "lg:grid-cols-[0.95fr_1.05fr]";
  const titleClass =
    theme.recipe.heroVariant === "oversized-type"
      ? "text-6xl sm:text-8xl lg:text-[7rem]"
      : theme.recipe.heroVariant === "scholarly-archive"
        ? "text-5xl sm:text-7xl lg:text-[5.5rem]"
        : "text-5xl sm:text-7xl lg:text-[6rem]";
  const introTone =
    theme.recipe.heroVariant === "scholarly-archive"
      ? `${productName} is framed like a carefully preserved publication: authoritative, paced, and grounded in archival mood.`
      : theme.recipe.heroVariant === "ornamental-frame"
        ? `${productName} is framed like an invitation: ceremonial, precise, and intentionally luxurious.`
        : theme.recipe.heroVariant === "oversized-type"
          ? `${productName} lets typography do the visual lifting here, so scale and rhythm become the art direction.`
          : `${productName} becomes an editorial statement here: restrained, spacious and built to let typography carry the emotional weight.`;
  const imagery = getStyleImagery(theme.slug);

  return (
    <>
      <section className="relative overflow-hidden py-10 sm:py-16">
        <FamilyAtmosphere variant="editorial-typography" className="opacity-65" />
        <Container>
          <div className={`grid gap-10 ${heroGrid}`}>
            <div className="space-y-6 lg:pt-12">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--theme-muted)]">
                {theme.kicker}
              </p>
              <div className="h-px w-24 bg-[var(--theme-border)]" />
              <p className="max-w-sm text-sm leading-7 text-[var(--theme-muted)]">{sharedContent.intro}</p>
              {theme.recipe.heroVariant === "ornamental-frame" ? (
                <Surface className="max-w-sm p-5">
                  <p className="text-xs uppercase tracking-[0.24em] text-[var(--theme-muted)]">Framing cue</p>
                  <p className="mt-3 text-sm leading-7 text-[var(--theme-text)]">
                    {theme.primaryLanguage} · {theme.imageryMode}
                  </p>
                </Surface>
              ) : null}
            </div>
            <div className={theme.recipe.heroVariant === "ornamental-frame" ? "max-w-5xl" : ""}>
              {/* Hero image for editorial styles */}
              <StyleHeroVisual
                imagery={imagery}
                variant="default"
                className="mb-8"
              />
              
              <h1
                className={`max-w-4xl font-[family-name:var(--theme-font-display)] leading-[0.94] tracking-[-0.05em] text-[var(--theme-text)] ${titleClass}`}
              >
                {heroStatement}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--theme-muted)]">{introTone}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/" variant="secondary">
                  Return to gallery
                </Button>
                {siblingStyle && compareLabel ? (
                  <Button href={`/styles/${siblingStyle.slug}`} variant="ghost">
                    {compareLabel}
                  </Button>
                ) : null}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-8 sm:py-12">
        <Container className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
          <SectionHeading
            eyebrow={getRhythmEyebrow(theme)}
            title={getRhythmDescription(theme)}
            description="The page changes style through reading cadence, framing, and section hierarchy instead of relying on decorative token swaps alone."
          />
          <div className="grid gap-6 border-t border-[var(--theme-border)] pt-8 sm:grid-cols-2">
            {sharedContent.features.map((feature) => (
              <article key={feature.title} className="space-y-4 border-b border-[var(--theme-border)] pb-6">
                <p className="text-xs uppercase tracking-[0.26em] text-[var(--theme-muted)]">{proofLabel}</p>
                <h3 className="font-[family-name:var(--theme-font-display)] text-3xl leading-tight tracking-[-0.04em] text-[var(--theme-text)]">
                  {feature.title}
                </h3>
                <p className="text-base leading-8 text-[var(--theme-muted)]">{feature.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-8 sm:py-14">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
            <blockquote className="max-w-4xl font-[family-name:var(--theme-font-display)] text-4xl leading-tight tracking-[-0.04em] text-[var(--theme-text)] sm:text-6xl">
              “{sharedContent.quotes[1]}”
            </blockquote>
            <Surface className="p-6">
              <p className="text-xs uppercase tracking-[0.26em] text-[var(--theme-muted)]">{quoteLabel}</p>
              <dl className="mt-6 space-y-5 text-sm leading-7">
                <div>
                  <dt className="font-semibold text-[var(--theme-text)]">Hero</dt>
                  <dd className="text-[var(--theme-muted)]">{theme.recipe.structuralSignature.hero}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-[var(--theme-text)]">Rhythm</dt>
                  <dd className="text-[var(--theme-muted)]">{theme.recipe.structuralSignature.rhythm}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-[var(--theme-text)]">Audience</dt>
                  <dd className="text-[var(--theme-muted)]">{theme.audience}</dd>
                </div>
              </dl>
            </Surface>
          </div>
        </Container>
      </section>
    </>
  );
}
