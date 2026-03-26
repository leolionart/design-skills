import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Surface } from "@/components/ui/surface";
import { sharedContent } from "@/lib/landing-content";
import type { ThemeDefinition } from "@/lib/themes";

const modules = [
  ["Source brief", "Mode rules", "Token map"],
  ["Section logic", "Type system", "Motion preset"],
  ["Route preview", "CTA states", "Mobile collapse"],
];

export function TechnicalLanding({ theme }: { theme: ThemeDefinition }) {
  const isTerminal = theme.slug === "terminal";

  return (
    <>
      <section className="py-8 sm:py-12">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--theme-muted)]">
                {theme.kicker}
              </p>
              <h1 className="mt-5 max-w-4xl font-[family-name:var(--theme-font-display)] text-5xl leading-[0.92] tracking-[-0.06em] text-[var(--theme-text)] sm:text-7xl lg:text-[6rem]">
                Make the information architecture part of the aesthetic.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--theme-muted)]">
                This version presents the product like a technical explainer: clear grids, clean modules, scannable text, and code-like surfaces that emphasize structure over decoration.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/">Back to gallery</Button>
                <Button href="/styles/editorial-minimalism" variant="secondary">
                  Compare editorial
                </Button>
              </div>
            </div>

            <Surface className="overflow-hidden p-5 shadow-[var(--theme-shadow)] sm:p-6">
              {isTerminal ? (
                <div className="mb-4 flex items-center justify-between border border-[var(--theme-border)] bg-[var(--theme-bg)] px-3 py-2 font-[family-name:var(--theme-font-mono)] text-xs text-[var(--theme-muted)]">
                  <span>operator@runtime:~</span>
                  <span className="text-[var(--theme-accent)]">live</span>
                </div>
              ) : null}
              <div className="grid gap-4 sm:grid-cols-3">
                {modules.map((column, columnIndex) => (
                  <div key={columnIndex} className="space-y-4">
                    {column.map((cell) => (
                      <div
                        key={cell}
                        className={`${isTerminal ? "rounded-[4px] bg-[var(--theme-bg-alt)]" : "rounded-[calc(var(--theme-radius)-14px)] bg-[var(--theme-surface-strong)]"} border border-[var(--theme-border)] p-4`}
                      >
                        <p className="font-[family-name:var(--theme-font-mono)] text-xs uppercase tracking-[0.2em] text-[var(--theme-muted)]">
                          block_{columnIndex + 1}
                        </p>
                        <p className="mt-3 text-sm font-semibold text-[var(--theme-text)]">{cell}</p>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </Surface>
          </div>
        </Container>
      </section>

      <section className="py-10 sm:py-14">
        <Container>
          <SectionHeading
            eyebrow="Structured technical explainer"
            title="The page is intentionally denser, but scanability stays in front."
            description="Data, systems, and flow are presented like an explainer for a technical product, so the sense of trust comes from modular composition rather than cinematic styling."
          />
          <div className="mt-8 grid gap-4 lg:grid-cols-[0.95fr_1.05fr]">
            <Surface className="p-6 shadow-[var(--theme-shadow)]">
              <p className="font-[family-name:var(--theme-font-mono)] text-xs uppercase tracking-[0.24em] text-[var(--theme-muted)]">
                architecture.map
              </p>
              <div className="mt-5 space-y-4">
                {sharedContent.features.map((feature) => (
                  <div
                    key={feature.title}
                    className={`${isTerminal ? "rounded-[4px] bg-[var(--theme-bg-alt)]" : "rounded-2xl"} border border-[var(--theme-border)] p-4`}
                  >
                    <p className="font-[family-name:var(--theme-font-mono)] text-[11px] uppercase tracking-[0.22em] text-[var(--theme-muted)]">
                      capability
                    </p>
                    <h3 className="mt-2 text-xl font-semibold tracking-[-0.03em] text-[var(--theme-text)]">
                      {feature.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-[var(--theme-muted)]">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </Surface>

            <div className="grid gap-4">
              <Surface className="p-6 shadow-[var(--theme-shadow)]">
                <p className="font-[family-name:var(--theme-font-mono)] text-xs uppercase tracking-[0.24em] text-[var(--theme-muted)]">
                  route.config
                </p>
                <dl className="mt-5 grid gap-4 sm:grid-cols-2">
                  <div
                    className={`${isTerminal ? "rounded-[4px] bg-[var(--theme-bg-alt)]" : "rounded-2xl"} border border-[var(--theme-border)] p-4`}
                  >
                    <dt className="text-xs uppercase tracking-[0.2em] text-[var(--theme-muted)]">primary</dt>
                    <dd className="mt-2 text-xl font-semibold text-[var(--theme-text)]">{theme.primaryLanguage}</dd>
                  </div>
                  <div
                    className={`${isTerminal ? "rounded-[4px] bg-[var(--theme-bg-alt)]" : "rounded-2xl"} border border-[var(--theme-border)] p-4`}
                  >
                    <dt className="text-xs uppercase tracking-[0.2em] text-[var(--theme-muted)]">imagery</dt>
                    <dd className="mt-2 text-xl font-semibold text-[var(--theme-text)]">{theme.imageryMode}</dd>
                  </div>
                  <div
                    className={`${isTerminal ? "rounded-[4px] bg-[var(--theme-bg-alt)]" : "rounded-2xl"} border border-[var(--theme-border)] p-4 sm:col-span-2`}
                  >
                    <dt className="text-xs uppercase tracking-[0.2em] text-[var(--theme-muted)]">supporting</dt>
                    <dd className="mt-2 text-base text-[var(--theme-text)]">
                      {theme.supportingTreatments.join(" · ")}
                    </dd>
                  </div>
                </dl>
              </Surface>
              <Surface className="p-6 shadow-[var(--theme-shadow)]">
                <p className="font-[family-name:var(--theme-font-mono)] text-xs uppercase tracking-[0.24em] text-[var(--theme-muted)]">
                  avoid.list
                </p>
                <ul className="mt-5 space-y-3 text-sm leading-7 text-[var(--theme-text)]">
                  {theme.avoidList.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </Surface>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
