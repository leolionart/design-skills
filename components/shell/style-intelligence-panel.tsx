import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Surface } from "@/components/ui/surface";
import { getStyleIntelligence } from "@/lib/style-intelligence";
import { getStyleBySlug, type ThemeDefinition } from "@/lib/themes";

export function StyleIntelligencePanel({ theme }: { theme: ThemeDefinition }) {
  const intelligence = getStyleIntelligence(theme.slug);

  return (
    <section className="py-10 sm:py-14">
      <Container>
        <Surface className="p-6 shadow-[var(--theme-shadow)] sm:p-8">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.35fr)_minmax(300px,0.65fr)]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--theme-muted)]">
                Style intelligence
              </p>
              <h2 className="mt-4 font-[family-name:var(--theme-font-display)] text-4xl leading-tight tracking-[-0.05em] text-[var(--theme-text)] sm:text-5xl">
                Why this style reads as {theme.modeLabel}
              </h2>
              <p className="mt-5 max-w-3xl text-base leading-8 text-[var(--theme-muted)]">
                {intelligence.thesis}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {intelligence.grammar.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[var(--theme-border)] bg-[var(--theme-bg)] px-3 py-1.5 text-xs text-[var(--theme-muted)]"
                  >
                    {item}
                  </span>
                ))}
              </div>

              {intelligence.compare.length > 0 ? (
                <div className="mt-8 grid gap-4 md:grid-cols-2">
                  {intelligence.compare.map((item) => {
                    const relatedStyle = getStyleBySlug(item.slug);
                    const hasDemo = relatedStyle?.demoAvailable !== false;

                    return (
                      <div
                        key={`${theme.slug}-${item.slug}`}
                        className="rounded-[24px] border border-[var(--theme-border)] bg-[var(--theme-surface)] p-4"
                      >
                        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--theme-muted)]">
                          Compare against
                        </p>
                        <p className="mt-2 text-lg font-semibold tracking-[-0.03em] text-[var(--theme-text)]">
                          {relatedStyle?.modeLabel ?? item.slug}
                        </p>
                        <p className="mt-3 text-sm leading-7 text-[var(--theme-muted)]">{item.reason}</p>
                        {relatedStyle && hasDemo ? (
                          <div className="mt-4">
                            <Button href={`/styles/${relatedStyle.slug}`} variant="secondary">
                              View {relatedStyle.modeLabel}
                            </Button>
                          </div>
                        ) : null}
                      </div>
                    );
                  })}
                </div>
              ) : null}
            </div>

            <div className="grid gap-4">
              <div className="rounded-[24px] border border-[var(--theme-border)] bg-[var(--theme-surface)] p-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--theme-muted)]">
                  Best fit
                </p>
                <p className="mt-3 text-sm leading-7 text-[var(--theme-text)]">{theme.audience}</p>
              </div>

              <div className="rounded-[24px] border border-[var(--theme-border)] bg-[var(--theme-surface)] p-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--theme-muted)]">
                  Structural signature
                </p>
                <dl className="mt-3 space-y-2 text-sm leading-7 text-[var(--theme-text)]">
                  <div>
                    <dt className="font-semibold">Hero</dt>
                    <dd>{theme.recipe.structuralSignature.hero}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold">Rhythm</dt>
                    <dd>{theme.recipe.structuralSignature.rhythm}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold">Proof</dt>
                    <dd>{theme.recipe.structuralSignature.proof}</dd>
                  </div>
                </dl>
              </div>

              <div className="rounded-[24px] border border-[var(--theme-border)] bg-[var(--theme-surface)] p-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--theme-muted)]">
                  Avoid
                </p>
                <ul className="mt-3 space-y-2">
                  {theme.avoidList.map((item) => (
                    <li key={item} className="text-sm leading-7 text-[var(--theme-text)]">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Surface>
      </Container>
    </section>
  );
}

