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
  getQuoteLabel,
  getSiblingStyle,
} from "@/components/landing/theme-recipe-copy";
import { getStyleImagery } from "@/lib/style-imagery";
import { StyleHeroVisual } from "@/components/landing/style-image";

export function HighAgencyLanding({ theme }: { theme: ThemeDefinition }) {
  const siblingStyle = getSiblingStyle(theme);
  const compareLabel = getCompareLabel(theme);
  const heroStatement = getHeroStatement(theme);
  const quoteLabel = getQuoteLabel(theme);
  const imagery = getStyleImagery(theme.slug);

  return (
    <>
      <section className="relative overflow-hidden py-8 sm:py-12">
        <FamilyAtmosphere variant="high-agency" className="opacity-80" />
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <div className="space-y-8">
              <div className="inline-flex rounded-full border border-[var(--theme-border)] bg-[var(--theme-surface)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--theme-muted)]">
                {theme.kicker}
              </div>
              <div>
                <p className="mb-4 text-sm uppercase tracking-[0.22em] text-[var(--theme-muted)]">
                  {sharedContent.eyebrow}
                </p>
                <h1 className="max-w-4xl font-[family-name:var(--theme-font-display)] text-5xl leading-[0.92] tracking-[-0.07em] text-[var(--theme-text)] sm:text-7xl lg:text-[6.5rem]">
                  {heroStatement}
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--theme-muted)] sm:text-xl">
                  {productName} turns one product story into a flagship landing page with asymmetry, layered proof blocks and a rhythm that keeps changing as you scroll.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button href="/">Back to gallery</Button>
                {siblingStyle && compareLabel ? (
                  <Button href={`/styles/${siblingStyle.slug}`} variant="secondary">
                    {compareLabel}
                  </Button>
                ) : null}
              </div>
            </div>

            <div>
              {/* Hero image */}
              <StyleHeroVisual
                imagery={imagery}
                variant="default"
                className="mb-6"
              />
              
              <Surface className="relative overflow-hidden p-6 shadow-[var(--theme-shadow)] sm:p-8">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(199,100,52,0.16),transparent_38%)]" />
              <div className="relative grid gap-6">
                <div className="grid gap-4 sm:grid-cols-[1fr_0.8fr]">
                  <div className="rounded-[calc(var(--theme-radius)-10px)] bg-[var(--theme-surface-strong)] p-5">
                    <p className="text-xs uppercase tracking-[0.24em] text-[var(--theme-muted)]">Design language</p>
                    <p className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-[var(--theme-text)]">
                      {theme.primaryLanguage}
                    </p>
                    <p className="mt-4 text-sm leading-6 text-[var(--theme-muted)]">
                      Strong hierarchy, diagonal energy, and just enough dimensional proof blocks to create momentum across the page.
                    </p>
                  </div>
                  <div className="rounded-[calc(var(--theme-radius)-10px)] border border-[var(--theme-border)] p-5">
                    <p className="text-xs uppercase tracking-[0.24em] text-[var(--theme-muted)]">Avoid</p>
                    <ul className="mt-4 space-y-3 text-sm leading-6 text-[var(--theme-text)]">
                      {theme.avoidList.map((item) => (
                        <li key={item}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-3">
                  {sharedContent.metrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="rounded-[calc(var(--theme-radius)-12px)] border border-[var(--theme-border)] bg-[var(--theme-bg)] p-5"
                    >
                      <p className="text-xs uppercase tracking-[0.22em] text-[var(--theme-muted)]">{metric.label}</p>
                      <p className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-[var(--theme-text)]">
                        {metric.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Surface>
          </div>
          </div>
        </Container>
      </section>

      <section className="py-10 sm:py-14">
        <Container className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading
            eyebrow="What makes it feel flagship"
            title="The layout keeps changing, so the page never collapses into a predictable SaaS template."
            description="Instead of a uniform row of cards, this version alternates between stat bands, split narrative, and proof surfaces so the launch page feels intentionally directed."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {sharedContent.features.map((feature, index) => (
              <Surface
                key={feature.title}
                className={`p-6 shadow-[var(--theme-shadow)] ${index === 0 ? "sm:translate-y-8" : index === 2 ? "sm:col-span-2 lg:-translate-x-10" : ""}`}
              >
                <p className="text-xs uppercase tracking-[0.22em] text-[var(--theme-muted)]">0{index + 1}</p>
                <h3 className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-[var(--theme-text)]">
                  {feature.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[var(--theme-muted)]">{feature.description}</p>
              </Surface>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-10 sm:py-16">
        <Container>
          <Surface className="grid gap-8 overflow-hidden p-6 shadow-[var(--theme-shadow)] sm:p-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-[var(--theme-muted)]">{quoteLabel}</p>
              <blockquote className="mt-6 max-w-3xl font-[family-name:var(--theme-font-display)] text-3xl leading-tight tracking-[-0.05em] text-[var(--theme-text)] sm:text-5xl">
                “{sharedContent.quotes[0]}”
              </blockquote>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {theme.supportingTreatments.map((treatment) => (
                <div
                  key={treatment}
                  className="rounded-[calc(var(--theme-radius)-10px)] border border-[var(--theme-border)] bg-[var(--theme-bg)] p-5"
                >
                  <p className="text-xs uppercase tracking-[0.24em] text-[var(--theme-muted)]">Supporting treatment</p>
                  <p className="mt-3 text-xl font-semibold tracking-[-0.03em] text-[var(--theme-text)]">{treatment}</p>
                </div>
              ))}
            </div>
          </Surface>
        </Container>
      </section>
    </>
  );
}
