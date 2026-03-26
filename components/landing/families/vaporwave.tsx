import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Surface } from "@/components/ui/surface";
import { sharedContent } from "@/lib/landing-content";
import type { ThemeDefinition } from "@/lib/themes";

function Sun() {
  return (
    <div className="relative h-44 w-44 rounded-full bg-gradient-to-b from-[#ffb36b] via-[#ff66c8] to-[#9c5cff] shadow-[0_0_80px_rgba(255,102,200,0.6)]">
      <div className="absolute inset-0 rounded-full bg-[linear-gradient(to_bottom,transparent_35%,rgba(20,11,38,0.75)_35%,rgba(20,11,38,0.75)_40%,transparent_40%,transparent_55%,rgba(20,11,38,0.75)_55%,rgba(20,11,38,0.75)_60%,transparent_60%)]" />
    </div>
  );
}

export function VaporwaveLanding({ theme }: { theme: ThemeDefinition }) {
  return (
    <>
      <section className="relative overflow-hidden py-14 sm:py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,77,227,0.28),transparent_30%),radial-gradient(circle_at_85%_18%,rgba(102,215,255,0.22),transparent_28%),linear-gradient(180deg,rgba(255,77,227,0.12)_0%,rgba(20,11,38,0)_48%)]" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-56 bg-[linear-gradient(to_top,rgba(102,215,255,0.2),transparent)]" />

        <Container className="relative">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--theme-accent-2)]">
                {theme.kicker}
              </p>
              <h1 className="mt-4 max-w-4xl text-5xl font-black leading-[0.9] tracking-[-0.05em] text-[var(--theme-text)] sm:text-7xl">
                Neon sunsets,
                <br />
                dreamy signal.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--theme-muted)]">
                Vaporwave should feel surreal and nostalgic: sunset gradients, retro horizon cues, and soft synthetic glow that stays readable.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/">Back to style catalog</Button>
                <Button href="/styles/cyberpunk" variant="secondary">
                  Compare cyberpunk
                </Button>
              </div>
            </div>

            <Surface className="relative overflow-hidden border border-[var(--theme-border)] bg-[var(--theme-surface)] p-6 shadow-[var(--theme-shadow)]">
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,77,227,0.18),transparent_45%)]" />
              <div className="relative flex flex-col items-center gap-5">
                <Sun />
                <div className="w-full border-t border-[var(--theme-accent-2)]/50" />
                <div className="grid w-full grid-cols-6 gap-2">
                  {Array.from({ length: 18 }).map((_, i) => (
                    <div
                      key={i}
                      className="h-2 rounded-full bg-gradient-to-r from-[var(--theme-accent)] to-[var(--theme-accent-2)] opacity-70"
                    />
                  ))}
                </div>
              </div>
            </Surface>
          </div>
        </Container>
      </section>

      <section className="py-10 sm:py-14">
        <Container>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {sharedContent.features.map((feature) => (
              <Surface
                key={feature.title}
                className="border border-[var(--theme-border)] bg-gradient-to-br from-[var(--theme-surface-strong)] to-[var(--theme-surface)] p-6 shadow-[var(--theme-shadow)]"
              >
                <p className="text-xs uppercase tracking-[0.24em] text-[var(--theme-accent-2)]">dream layer</p>
                <h2 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-[var(--theme-text)]">
                  {feature.title}
                </h2>
                <p className="mt-3 text-sm leading-7 text-[var(--theme-muted)]">{feature.description}</p>
              </Surface>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
