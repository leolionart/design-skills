import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Surface } from "@/components/ui/surface";
import { sharedContent } from "@/lib/landing-content";
import type { ThemeDefinition } from "@/lib/themes";

function GlossChip({ label }: { label: string }) {
  return (
    <span className="rounded-full border border-white/40 bg-white/25 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-white backdrop-blur">
      {label}
    </span>
  );
}

function ChromeOrb({ className }: { className: string }) {
  return (
    <div
      className={`rounded-full border border-white/40 bg-gradient-to-br from-white/70 via-white/10 to-transparent shadow-[0_20px_50px_rgba(0,0,0,0.2)] backdrop-blur ${className}`}
    />
  );
}

export function Y2KLanding({ theme }: { theme: ThemeDefinition }) {
  return (
    <>
      <section className="relative overflow-hidden py-14 sm:py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(255,255,255,0.36),transparent_32%),radial-gradient(circle_at_86%_14%,rgba(128,255,255,0.28),transparent_30%),radial-gradient(circle_at_72%_78%,rgba(255,80,220,0.24),transparent_30%)]" />
        <ChromeOrb className="absolute -left-10 top-10 h-36 w-36" />
        <ChromeOrb className="absolute right-8 top-20 h-24 w-24" />
        <ChromeOrb className="absolute bottom-8 right-1/4 h-20 w-20" />

        <Container className="relative">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--theme-accent)]">
                {theme.kicker}
              </p>
              <h1 className="mt-4 max-w-4xl text-5xl font-black leading-[0.9] tracking-[-0.05em] text-[var(--theme-text)] sm:text-7xl">
                Digital nostalgia,
                <br />
                <span className="bg-gradient-to-r from-[var(--theme-accent)] via-[var(--theme-accent-2)] to-[var(--theme-text)] bg-clip-text text-transparent">
                  polished weirdness.
                </span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--theme-muted)]">
                Y2K here is glossy, playful, and campaign-like: chrome hints, candy gradients, and millennium-tech attitude without collapsing readability.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/">Back to style catalog</Button>
                <Button href="/styles/vaporwave" variant="secondary">
                  Compare vaporwave
                </Button>
              </div>
            </div>

            <Surface className="relative overflow-hidden border-2 border-white/40 bg-white/10 p-6 shadow-[var(--theme-shadow)] backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-[var(--theme-accent-2)]/20" />
              <div className="relative grid gap-4">
                <div className="rounded-2xl border border-white/35 bg-black/20 p-4">
                  <p className="text-xs uppercase tracking-[0.24em] text-white/80">signal // 2000s</p>
                  <p className="mt-3 text-xl font-semibold text-white">Gloss + chrome + playful tech cues</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["mp3-aesthetic", "liquid-ui", "future-pop", "digital-culture"].map((item) => (
                    <GlossChip key={item} label={item} />
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
            {sharedContent.features.map((feature, index) => (
              <Surface
                key={feature.title}
                className={`relative overflow-hidden border-2 border-white/30 p-6 shadow-[var(--theme-shadow)] ${
                  index % 2 === 0 ? "bg-gradient-to-br from-white/18 to-[var(--theme-accent-2)]/20" : "bg-gradient-to-br from-white/20 to-[var(--theme-accent)]/20"
                }`}
              >
                <div className="absolute right-4 top-4 h-7 w-7 rounded-full border border-white/50 bg-white/40" />
                <p className="text-xs uppercase tracking-[0.24em] text-[var(--theme-muted)]">module 0{index + 1}</p>
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
