import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Surface } from "@/components/ui/surface";
import { sharedContent } from "@/lib/landing-content";
import type { ThemeDefinition } from "@/lib/themes";

function HandNote({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block -rotate-2 rounded-md border border-[var(--theme-text)]/50 bg-[var(--theme-bg-alt)] px-2 py-1 text-xs uppercase tracking-[0.2em] text-[var(--theme-text)]">
      {children}
    </span>
  );
}

export function SketchLanding({ theme }: { theme: ThemeDefinition }) {
  return (
    <>
      <section className="relative overflow-hidden py-12 sm:py-16">
        <div className="pointer-events-none absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(0,0,0,0.14)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.14)_1px,transparent_1px)] [background-size:26px_26px]" />

        <Container className="relative">
          <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr]">
            <div>
              <HandNote>draft v4</HandNote>
              <h1 className="mt-5 max-w-4xl font-[family-name:var(--theme-font-display)] text-5xl leading-[0.92] tracking-[-0.05em] text-[var(--theme-text)] sm:text-7xl">
                Hand-drawn logic,
                <br />
                visible process.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--theme-muted)]">
                Sketch mode should feel like a concept board brought to life: marker borders, annotations, and intentional roughness with one clear reading path.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/">Back to style catalog</Button>
                <Button href="/styles/anti-design" variant="secondary">
                  Compare anti-design
                </Button>
              </div>
            </div>

            <Surface className="-rotate-1 border-2 border-[var(--theme-text)] bg-[var(--theme-surface)] p-6 shadow-none">
              <p className="text-xs uppercase tracking-[0.24em] text-[var(--theme-muted)]">annotated wireframe</p>
              <div className="mt-4 space-y-4">
                <div className="h-8 w-2/3 rounded border-2 border-[var(--theme-text)] bg-transparent" />
                <div className="h-24 rounded border-2 border-[var(--theme-text)] bg-transparent" />
                <div className="grid grid-cols-2 gap-3">
                  <div className="h-16 rounded border-2 border-[var(--theme-text)] bg-transparent" />
                  <div className="h-16 rounded border-2 border-[var(--theme-text)] bg-transparent" />
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
                className={`border-2 border-[var(--theme-text)] bg-[var(--theme-surface)] p-6 shadow-none ${
                  index % 2 === 0 ? "rotate-[-0.8deg]" : "rotate-[0.8deg]"
                }`}
              >
                <p className="text-xs uppercase tracking-[0.22em] text-[var(--theme-muted)]">note {index + 1}</p>
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

