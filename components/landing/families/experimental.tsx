import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Surface } from "@/components/ui/surface";
import { productName, sharedContent } from "@/lib/landing-content";
import { styles, type ThemeDefinition } from "@/lib/themes";

function getSiblingStyle(theme: ThemeDefinition) {
  return styles.find((style) => style.family === theme.family && style.slug !== theme.slug);
}

export function ExperimentalLanding({ theme }: { theme: ThemeDefinition }) {
  const siblingStyle = getSiblingStyle(theme);

  return (
    <>
      <section className="relative overflow-hidden py-8 sm:py-14">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
            <div>
              <p className="inline-flex rounded-full border-2 border-[var(--theme-border)] bg-[var(--theme-surface-strong)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--theme-muted)] shadow-[var(--theme-shadow)]">
                {theme.kicker}
              </p>
              <h1 className="mt-6 max-w-4xl font-[family-name:var(--theme-font-display)] text-5xl leading-[0.9] tracking-[-0.07em] text-[var(--theme-text)] sm:text-7xl lg:text-[6.25rem]">
                {theme.pageTitle}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--theme-muted)] sm:text-xl">
                In this family, {productName} is not trying to behave politely. It is composed like an intentional digital poster, where hierarchy and visual tension are allowed to speak louder than template cleanliness.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/">Back to style catalog</Button>
                {siblingStyle ? (
                  <Button href={`/styles/${siblingStyle.slug}`} variant="secondary">
                    Compare {siblingStyle.modeLabel}
                  </Button>
                ) : null}
              </div>
            </div>

            <div className="grid gap-4 pt-2">
              {theme.previewBullets.map((bullet, index) => (
                <Surface
                  key={bullet}
                  className={`border-2 p-5 shadow-[var(--theme-shadow)] ${
                    index === 0
                      ? "translate-x-3 rotate-[-2deg]"
                      : index === 1
                        ? "-translate-x-3 rotate-[1.5deg]"
                        : "translate-x-6 rotate-[-1deg]"
                  }`}
                >
                  <p className="text-xs uppercase tracking-[0.22em] text-[var(--theme-muted)]">
                    signal 0{index + 1}
                  </p>
                  <p className="mt-3 text-lg font-semibold tracking-[-0.03em] text-[var(--theme-text)]">
                    {bullet}
                  </p>
                </Surface>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-10 sm:py-14">
        <Container className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
          <SectionHeading
            eyebrow="Disruption with intent"
            title="Experimental does not mean disorganized; it simply prioritizes tension over smoothness."
            description="Neo-brutalism, Y2K, and anti-design belong to the same family because they all reject the generic-safe feeling, but each style creates tension through a different tool: hard borders, glossy nostalgia, or intentional off-rhythm composition."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {sharedContent.features.map((feature, index) => (
              <Surface
                key={feature.title}
                className={`border-2 p-6 shadow-[var(--theme-shadow)] ${
                  index === 0 ? "sm:-rotate-1" : index === 1 ? "sm:translate-y-6" : "sm:rotate-1"
                }`}
              >
                <p className="text-xs uppercase tracking-[0.22em] text-[var(--theme-muted)]">
                  break rule 0{index + 1}
                </p>
                <h2 className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-[var(--theme-text)]">
                  {feature.title}
                </h2>
                <p className="mt-4 text-sm leading-7 text-[var(--theme-muted)]">
                  {feature.description}
                </p>
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
              <p className="text-xs uppercase tracking-[0.24em] text-[var(--theme-muted)]">Style payload</p>
              <blockquote className="mt-6 max-w-4xl font-[family-name:var(--theme-font-display)] text-4xl leading-tight tracking-[-0.05em] text-[var(--theme-text)] sm:text-5xl">
                “{sharedContent.quotes[0]}”
              </blockquote>
              <div className="mt-8 flex flex-wrap gap-3">
                {theme.keywords.slice(0, 6).map((keyword) => (
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
