import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Surface } from "@/components/ui/surface";
import { sharedContent } from "@/lib/landing-content";
import type { ThemeDefinition } from "@/lib/themes";

function TapeLabel({ children, rotate }: { children: React.ReactNode; rotate: string }) {
  return (
    <span
      className={`inline-block border border-[var(--theme-text)] bg-[var(--theme-bg-alt)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--theme-text)] ${rotate}`}
    >
      {children}
    </span>
  );
}

export function AntiDesignLanding({ theme }: { theme: ThemeDefinition }) {
  return (
    <>
      <section className="relative overflow-hidden py-10 sm:py-14">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="relative">
              <div className="mb-4 flex flex-wrap gap-2">
                <TapeLabel rotate="-rotate-2">intentional disorder</TapeLabel>
                <TapeLabel rotate="rotate-2">not template-safe</TapeLabel>
              </div>
              <h1 className="max-w-4xl font-[family-name:var(--theme-font-display)] text-5xl leading-[0.88] tracking-[-0.06em] text-[var(--theme-text)] sm:text-7xl">
                Break the
                <br />
                expected rhythm.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--theme-muted)]">
                Anti-design should feel authored and resistant to polished sameness: off-grid composition, awkward tension, and deliberate interruption with one readable spine.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/">Back to style catalog</Button>
                <Button href="/styles/maximalist" variant="secondary">
                  Compare maximalist
                </Button>
              </div>
            </div>

            <div className="relative pt-3">
              <Surface className="translate-x-3 rotate-[-2.4deg] border-2 border-[var(--theme-text)] bg-[var(--theme-surface-strong)] p-5 shadow-none">
                <p className="text-xs uppercase tracking-[0.22em] text-[var(--theme-muted)]">signal 01</p>
                <p className="mt-3 text-lg font-semibold text-[var(--theme-text)]">{theme.previewBullets[0]}</p>
              </Surface>
              <Surface className="-mt-2 -translate-x-4 rotate-[1.8deg] border-2 border-[var(--theme-text)] bg-[var(--theme-surface)] p-5 shadow-none">
                <p className="text-xs uppercase tracking-[0.22em] text-[var(--theme-muted)]">signal 02</p>
                <p className="mt-3 text-lg font-semibold text-[var(--theme-text)]">{theme.previewBullets[1]}</p>
              </Surface>
              <Surface className="mt-1 translate-x-7 rotate-[-1.4deg] border-2 border-[var(--theme-text)] bg-[var(--theme-surface-strong)] p-5 shadow-none">
                <p className="text-xs uppercase tracking-[0.22em] text-[var(--theme-muted)]">signal 03</p>
                <p className="mt-3 text-lg font-semibold text-[var(--theme-text)]">{theme.previewBullets[2]}</p>
              </Surface>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-10 sm:py-14">
        <Container>
          <div className="grid gap-5 sm:grid-cols-2">
            {sharedContent.features.map((feature, index) => (
              <Surface
                key={feature.title}
                className={`border-2 border-[var(--theme-text)] p-6 shadow-none ${
                  index % 2 === 0 ? "sm:-translate-y-2 sm:-rotate-1" : "sm:translate-y-5 sm:rotate-1"
                }`}
              >
                <p className="text-xs uppercase tracking-[0.22em] text-[var(--theme-muted)]">break rule 0{index + 1}</p>
                <h2 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-[var(--theme-text)]">{feature.title}</h2>
                <p className="mt-3 text-sm leading-7 text-[var(--theme-muted)]">{feature.description}</p>
              </Surface>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
