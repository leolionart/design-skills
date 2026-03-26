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
  getSiblingStyle,
} from "@/components/landing/theme-recipe-copy";
import { getStyleImagery } from "@/lib/style-imagery";
import { StyleHeroVisual } from "@/components/landing/style-image";

export function ExperimentalLanding({ theme }: { theme: ThemeDefinition }) {
  const siblingStyle = getSiblingStyle(theme);
  const compareLabel = getCompareLabel(theme);
  const heroStatement = getHeroStatement(theme);
  const proofLabel = getProofLabel(theme);
  const quoteLabel = getQuoteLabel(theme);
  const isGlossy = theme.recipe.heroVariant === "glossy-badge-cloud";
  const isHandmade = theme.recipe.heroVariant === "handmade-board";
  const imagery = getStyleImagery(theme.slug);

  return (
    <>
      <section className="relative overflow-hidden py-8 sm:py-14">
        <FamilyAtmosphere variant="experimental-loud" className="-z-10 opacity-80" />
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
            <div>
              <p className="inline-flex rounded-full border-2 border-[var(--theme-border)] bg-[var(--theme-surface-strong)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--theme-muted)] shadow-[var(--theme-shadow)]">
                {theme.kicker}
              </p>
              <h1 className="mt-6 max-w-4xl font-[family-name:var(--theme-font-display)] text-5xl leading-[0.9] tracking-[-0.07em] text-[var(--theme-text)] sm:text-7xl lg:text-[6.25rem]">
                {heroStatement}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--theme-muted)] sm:text-xl">
                {isGlossy
                  ? `In this family, ${productName} behaves like a pile of expressive digital artifacts: glossy, nostalgic, and unafraid of excess.`
                  : isHandmade
                    ? `In this family, ${productName} feels assembled by hand, so roughness and annotation become part of the brand voice.`
                    : `In this family, ${productName} is not trying to behave politely. It is composed like an intentional digital poster, where hierarchy and visual tension are allowed to speak louder than template cleanliness.`}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/">Back to style catalog</Button>
                {siblingStyle && compareLabel ? (
                  <Button href={`/styles/${siblingStyle.slug}`} variant="secondary">
                    {compareLabel}
                  </Button>
                ) : null}
              </div>
            </div>

            <div className="space-y-4">
              {/* Hero visual for experimental styles */}
              <StyleHeroVisual
                imagery={imagery}
                variant="material"
                className="mb-2"
              />
              
              <div className="grid gap-4 pt-2">
                {theme.previewBullets.map((bullet, index) => (
                <Surface
                  key={bullet}
                  className={`border-2 p-5 shadow-[var(--theme-shadow)] ${
                    isHandmade
                      ? index === 0
                        ? "-rotate-1"
                        : index === 1
                          ? "translate-x-2 rotate-[2deg]"
                          : "-translate-x-1 rotate-[-2deg]"
                      : index === 0
                        ? "translate-x-3 rotate-[-2deg]"
                        : index === 1
                          ? "-translate-x-3 rotate-[1.5deg]"
                          : "translate-x-6 rotate-[-1deg]"
                  }`}
                >
                  <p className="text-xs uppercase tracking-[0.22em] text-[var(--theme-muted)]">{proofLabel} 0{index + 1}</p>
                  <p className="mt-3 text-lg font-semibold tracking-[-0.03em] text-[var(--theme-text)]">{bullet}</p>
                </Surface>
              ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-10 sm:py-14">
        <Container className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
          <SectionHeading
            eyebrow="Disruption with intent"
            title="Experimental does not mean disorganized; it simply prioritizes tension over smoothness."
            description="These styles reject generic-safe polish through different tools: hard borders, glossy nostalgia, collage density, or handmade roughness."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {sharedContent.features.map((feature, index) => (
              <Surface
                key={feature.title}
                className={`border-2 p-6 shadow-[var(--theme-shadow)] ${
                  index === 0 ? "sm:-rotate-1" : index === 1 ? "sm:translate-y-6" : "sm:rotate-1"
                }`}
              >
                <p className="text-xs uppercase tracking-[0.22em] text-[var(--theme-muted)]">break rule 0{index + 1}</p>
                <h2 className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-[var(--theme-text)]">
                  {feature.title}
                </h2>
                <p className="mt-4 text-sm leading-7 text-[var(--theme-muted)]">{feature.description}</p>
              </Surface>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-10 sm:py-16">
        <Container>
          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <Surface className="border-2 p-8 shadow-[var(--theme-shadow)] sm:p-10">
              <p className="text-xs uppercase tracking-[0.24em] text-[var(--theme-muted)]">Avoid list</p>
              <ul className="mt-6 space-y-4 text-sm leading-7 text-[var(--theme-text)]">
                {theme.avoidList.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </Surface>
            <Surface className="border-2 p-8 shadow-[var(--theme-shadow)] sm:p-10">
              <p className="text-xs uppercase tracking-[0.24em] text-[var(--theme-muted)]">{quoteLabel}</p>
              <blockquote className="mt-6 max-w-4xl font-[family-name:var(--theme-font-display)] text-4xl leading-tight tracking-[-0.05em] text-[var(--theme-text)] sm:text-5xl">
                “{sharedContent.quotes[0]}”
              </blockquote>
              <div className="mt-8 flex flex-wrap gap-3">
                {theme.recipe.structuralTags.slice(0, 6).map((keyword) => (
                  <span
                    key={keyword}
                    className="rounded-full border-2 border-[var(--theme-border)] bg-[var(--theme-bg)] px-4 py-2 text-sm font-semibold text-[var(--theme-text)]"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </Surface>
          </div>
        </Container>
      </section>
    </>
  );
}
