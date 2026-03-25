import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Surface } from "@/components/ui/surface";
import { productName, sharedContent } from "@/lib/landing-content";
import type { ThemeDefinition } from "@/lib/themes";

export function PremiumLanding({ theme }: { theme: ThemeDefinition }) {
  return (
    <>
      <section className="relative overflow-hidden py-8 sm:py-14">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(215,163,108,0.24),transparent_34%)]" />
        <Container>
          <Surface className="relative overflow-hidden p-6 shadow-[var(--theme-shadow)] sm:p-10">
            <div className="absolute inset-0 bg-[linear-gradient(130deg,rgba(255,255,255,0.08),transparent_35%,rgba(255,255,255,0.02))]" />
            <div className="relative grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-[var(--theme-muted)]">
                  {theme.kicker}
                </p>
                <h1 className="mt-5 max-w-4xl font-[family-name:var(--theme-font-display)] text-5xl leading-[0.9] tracking-[-0.07em] text-[var(--theme-text)] sm:text-7xl lg:text-[6.25rem]">
                  Give the same product a more cinematic point of arrival.
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--theme-muted)]">
                  {productName} is presented here through richer surfaces, spotlighted proof and panel choreography that feels more like a launch campaign than a docs page.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button href="/">Back to gallery</Button>
                  <Button href="/styles/default-high-agency" variant="secondary">
                    Compare flagship mode
                  </Button>
                </div>
              </div>

              <div className="grid gap-4">
                <Surface className="bg-[var(--theme-surface-strong)]/90 p-5">
                  <p className="text-xs uppercase tracking-[0.26em] text-[var(--theme-muted)]">
                    Material stack
                  </p>
                  <div className="mt-5 grid gap-3 sm:grid-cols-3">
                    {sharedContent.metrics.map((metric) => (
                      <div
                        key={metric.label}
                        className="rounded-[calc(var(--theme-radius)-12px)] border border-[var(--theme-border)] bg-black/10 p-4"
                      >
                        <p className="text-xs uppercase tracking-[0.2em] text-[var(--theme-muted)]">
                          {metric.label}
                        </p>
                        <p className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-[var(--theme-text)]">
                          {metric.value}
                        </p>
                      </div>
                    ))}
                  </div>
                </Surface>
                <div className="grid gap-4 sm:grid-cols-[1.2fr_0.8fr]">
                  <Surface className="p-5">
                    <p className="text-xs uppercase tracking-[0.26em] text-[var(--theme-muted)]">
                      Supporting treatments
                    </p>
                    <ul className="mt-4 space-y-3 text-sm leading-7 text-[var(--theme-text)]">
                      {theme.supportingTreatments.map((item) => (
                        <li key={item}>• {item}</li>
                      ))}
                    </ul>
                  </Surface>
                  <Surface className="p-5">
                    <p className="text-xs uppercase tracking-[0.26em] text-[var(--theme-muted)]">
                      Imagery
                    </p>
                    <p className="mt-4 text-xl font-semibold tracking-[-0.03em] text-[var(--theme-text)]">
                      {theme.imageryMode}
                    </p>
                  </Surface>
                </div>
              </div>
            </div>
          </Surface>
        </Container>
      </section>

      <section className="py-10 sm:py-16">
        <Container className="grid gap-6 lg:grid-cols-3">
          {sharedContent.features.map((feature, index) => (
            <Surface
              key={feature.title}
              className={`p-6 shadow-[var(--theme-shadow)] ${index === 1 ? "lg:-translate-y-8" : index === 2 ? "lg:translate-y-8" : ""}`}
            >
              <p className="text-xs uppercase tracking-[0.26em] text-[var(--theme-muted)]">
                reveal 0{index + 1}
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-[var(--theme-text)]">
                {feature.title}
              </h2>
              <p className="mt-4 text-sm leading-7 text-[var(--theme-muted)]">
                {feature.description}
              </p>
            </Surface>
          ))}
        </Container>
      </section>

      <section className="py-10 sm:py-16">
        <Container>
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <Surface className="p-8 shadow-[var(--theme-shadow)] sm:p-10">
              <p className="text-xs uppercase tracking-[0.28em] text-[var(--theme-muted)]">
                Premium read
              </p>
              <blockquote className="mt-6 max-w-4xl font-[family-name:var(--theme-font-display)] text-4xl leading-tight tracking-[-0.05em] text-[var(--theme-text)] sm:text-6xl">
                “{sharedContent.quotes[0]}”
              </blockquote>
            </Surface>
            <Surface className="p-8 shadow-[var(--theme-shadow)]">
              <p className="text-xs uppercase tracking-[0.26em] text-[var(--theme-muted)]">
                Avoid list
              </p>
              <ul className="mt-6 space-y-4 text-sm leading-7 text-[var(--theme-text)]">
                {theme.avoidList.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </Surface>
          </div>
        </Container>
      </section>
    </>
  );
}
