import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Surface } from "@/components/ui/surface";
import { productName, sharedContent } from "@/lib/landing-content";
import { styles, type ThemeDefinition } from "@/lib/themes";

function getSiblingStyle(theme: ThemeDefinition) {
  return styles.find((style) => style.family === theme.family && style.slug !== theme.slug);
}

export function TactileLanding({ theme }: { theme: ThemeDefinition }) {
  const siblingStyle = getSiblingStyle(theme);

  return (
    <>
      <section className="relative overflow-hidden py-8 sm:py-14">
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div
            className="absolute -left-10 top-6 h-52 w-52 rounded-full opacity-30 blur-3xl"
            style={{ background: "var(--theme-accent)" }}
          />
          <div
            className="absolute right-0 top-20 h-64 w-64 rounded-full opacity-25 blur-3xl"
            style={{ background: "var(--theme-accent-2)" }}
          />
          <div
            className="absolute bottom-0 left-1/3 h-56 w-56 rounded-full opacity-20 blur-3xl"
            style={{ background: "var(--theme-bg-alt)" }}
          />
        </div>

        <Container>
          <div className="grid gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
            <div>
              <p className="inline-flex rounded-full border border-[var(--theme-border)] bg-[var(--theme-surface-strong)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--theme-muted)] shadow-[var(--theme-shadow)]">
                {theme.kicker}
              </p>
              <h1 className="mt-6 max-w-4xl font-[family-name:var(--theme-font-display)] text-5xl leading-[0.92] tracking-[-0.06em] text-[var(--theme-text)] sm:text-7xl lg:text-[6rem]">
                {theme.pageTitle}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--theme-muted)] sm:text-xl">
                {productName} is pulled toward a softer, more touchable, and more approachable feel through oversized rounding, gentle depth, and a friendlier section rhythm.
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

            <div className="grid gap-4 sm:grid-cols-[1.1fr_0.9fr]">
              <Surface className="p-6 shadow-[var(--theme-shadow)] sm:p-7">
                <p className="text-xs uppercase tracking-[0.24em] text-[var(--theme-muted)]">
                  Material feel
                </p>
                <p className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-[var(--theme-text)]">
                  {theme.primaryLanguage}
                </p>
                <p className="mt-4 text-sm leading-7 text-[var(--theme-muted)]">{theme.summary}</p>
              </Surface>
              <Surface className="translate-y-4 p-6 shadow-[var(--theme-shadow)] sm:mt-10">
                <p className="text-xs uppercase tracking-[0.24em] text-[var(--theme-muted)]">
                  Supporting treatments
                </p>
                <ul className="mt-4 space-y-3 text-sm leading-6 text-[var(--theme-text)]">
                  {theme.supportingTreatments.map((item) => (
                    <li key={item} className="rounded-full bg-[var(--theme-bg)] px-4 py-2">
                      {item}
                    </li>
                  ))}
                </ul>
              </Surface>
              <Surface className="p-6 shadow-[var(--theme-shadow)] sm:col-span-2">
                <p className="text-xs uppercase tracking-[0.24em] text-[var(--theme-muted)]">
                  Preview cues
                </p>
                <div className="mt-5 grid gap-3 sm:grid-cols-3">
                  {theme.previewBullets.map((bullet, index) => (
                    <div
                      key={bullet}
                      className={`rounded-[calc(var(--theme-radius)-10px)] border border-[var(--theme-border)] bg-[var(--theme-surface-strong)] p-4 ${
                        index === 1 ? "sm:-translate-y-4" : index === 2 ? "sm:translate-y-4" : ""
                      }`}
                    >
                      <p className="text-xs uppercase tracking-[0.2em] text-[var(--theme-muted)]">
                        0{index + 1}
                      </p>
                      <p className="mt-3 text-sm leading-6 text-[var(--theme-text)]">{bullet}</p>
                    </div>
                  ))}
                </div>
              </Surface>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-10 sm:py-14">
        <Container className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
          <SectionHeading
            eyebrow="Soft structure"
            title="Tactility here comes from surface treatment, not just from switching to pastel colors."
            description="Claymorphism and organic mesh gradients live in the same family because both prioritize softness and approachability, but one leans toward raised material forms while the other leans toward atmosphere and color environment."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {sharedContent.features.map((feature, index) => (
              <Surface
                key={feature.title}
                className={`p-6 shadow-[var(--theme-shadow)] ${
                  index === 0 ? "sm:translate-y-6" : index === 2 ? "sm:col-span-2" : ""
                }`}
              >
                <p className="text-xs uppercase tracking-[0.22em] text-[var(--theme-muted)]">
                  soft block 0{index + 1}
                </p>
                <h2 className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-[var(--theme-text)]">
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
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <Surface className="p-8 shadow-[var(--theme-shadow)] sm:p-10">
              <p className="text-xs uppercase tracking-[0.24em] text-[var(--theme-muted)]">
                Emotional read
              </p>
              <blockquote className="mt-6 max-w-4xl font-[family-name:var(--theme-font-display)] text-4xl leading-tight tracking-[-0.05em] text-[var(--theme-text)] sm:text-5xl">
                “{sharedContent.quotes[1]}”
              </blockquote>
            </Surface>
            <Surface className="p-8 shadow-[var(--theme-shadow)]">
              <p className="text-xs uppercase tracking-[0.24em] text-[var(--theme-muted)]">Keywords</p>
              <div className="mt-5 flex flex-wrap gap-3">
                {theme.keywords.slice(0, 6).map((keyword) => (
                  <span
                    key={keyword}
                    className="rounded-full border border-[var(--theme-border)] bg-[var(--theme-surface-strong)] px-4 py-2 text-sm text-[var(--theme-text)]"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
              <p className="mt-6 text-sm leading-7 text-[var(--theme-muted)]">
                Audience fit: {theme.audience}
              </p>
            </Surface>
          </div>
        </Container>
      </section>
    </>
  );
}
