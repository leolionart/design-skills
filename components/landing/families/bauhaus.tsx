import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Surface } from "@/components/ui/surface";
import { sharedContent } from "@/lib/landing-content";
import type { ThemeDefinition } from "@/lib/themes";

// Bauhaus primary shapes as decorative elements
function BauhausShapes() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Large red circle */}
      <div
        className="absolute -right-20 -top-20 h-80 w-80 rounded-full opacity-90"
        style={{ backgroundColor: "var(--theme-accent)" }}
      />
      {/* Blue square */}
      <div
        className="absolute -bottom-10 left-20 h-48 w-48 rotate-12 opacity-80"
        style={{ backgroundColor: "var(--theme-accent-2)" }}
      />
      {/* Yellow triangle (using clip-path) */}
      <div
        className="absolute right-1/4 top-1/3 h-32 w-32 opacity-85"
        style={{
          backgroundColor: "#f5c518",
          clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
        }}
      />
      {/* Small black circle */}
      <div className="absolute bottom-1/4 right-1/3 h-16 w-16 rounded-full bg-[var(--theme-text)] opacity-90" />
    </div>
  );
}

function GeometricCard({
  shape,
  title,
  description,
}: {
  shape: "circle" | "square" | "triangle";
  title: string;
  description: string;
}) {
  const shapeElement = {
    circle: (
      <div
        className="h-12 w-12 rounded-full"
        style={{ backgroundColor: "var(--theme-accent)" }}
      />
    ),
    square: (
      <div
        className="h-12 w-12"
        style={{ backgroundColor: "var(--theme-accent-2)" }}
      />
    ),
    triangle: (
      <div
        className="h-12 w-12"
        style={{
          backgroundColor: "#f5c518",
          clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
        }}
      />
    ),
  };

  return (
    <div className="group relative border-2 border-[var(--theme-text)] bg-[var(--theme-bg)] p-6 transition-colors hover:bg-[var(--theme-surface-strong)]">
      <div className="mb-4">{shapeElement[shape]}</div>
      <h3 className="text-xl font-black uppercase tracking-tight text-[var(--theme-text)]">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-[var(--theme-muted)]">
        {description}
      </p>
    </div>
  );
}

export function BauhausLanding({ theme }: { theme: ThemeDefinition }) {
  const shapes: Array<"circle" | "square" | "triangle"> = ["circle", "square", "triangle"];

  return (
    <>
      {/* Hero with geometric shapes */}
      <section className="relative min-h-[70vh] overflow-hidden py-16 sm:py-24">
        <BauhausShapes />
        <Container className="relative z-10">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-[var(--theme-muted)]">
                {theme.kicker}
              </p>
              <h1 className="mt-6 font-[family-name:var(--theme-font-display)] text-6xl font-black uppercase leading-[0.85] tracking-[-0.02em] text-[var(--theme-text)] sm:text-8xl">
                Form
                <br />
                Follows
                <br />
                <span style={{ color: "var(--theme-accent)" }}>Function</span>
              </h1>
              <p className="mt-8 max-w-md text-lg leading-relaxed text-[var(--theme-muted)]">
                Rational design through geometric precision. Every element serves a purpose. Every shape communicates meaning.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Button href="/" className="border-2 border-[var(--theme-text)] bg-[var(--theme-text)] font-bold uppercase tracking-wider text-[var(--theme-bg)] hover:bg-transparent hover:text-[var(--theme-text)]">
                  Explore Gallery
                </Button>
                <Button
                  href="/styles/editorial-minimalism"
                  variant="ghost"
                  className="border-2 border-[var(--theme-text)] font-bold uppercase tracking-wider"
                >
                  Compare Styles
                </Button>
              </div>
            </div>

            {/* Geometric composition */}
            <div className="relative hidden aspect-square lg:block">
              <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 gap-4">
                <div className="col-span-2 row-span-2 rounded-full" style={{ backgroundColor: "var(--theme-accent)" }} />
                <div className="bg-[var(--theme-text)]" />
                <div style={{ backgroundColor: "var(--theme-accent-2)" }} />
                <div
                  className="col-span-2"
                  style={{
                    backgroundColor: "#f5c518",
                    clipPath: "polygon(0 0, 100% 0, 50% 100%)",
                  }}
                />
                <div className="rounded-full border-4 border-[var(--theme-text)]" />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Features with geometric shapes */}
      <section className="border-t-4 border-[var(--theme-text)] py-16 sm:py-20">
        <Container>
          <div className="mb-12 max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-[var(--theme-muted)]">
              Modular System
            </p>
            <h2 className="mt-4 text-4xl font-black uppercase tracking-tight text-[var(--theme-text)] sm:text-5xl">
              Primary Elements
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {sharedContent.features.slice(0, 3).map((feature, index) => (
              <GeometricCard
                key={feature.title}
                shape={shapes[index % 3]}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* Manifesto section */}
      <section className="relative overflow-hidden py-16 sm:py-20" style={{ backgroundColor: "var(--theme-text)" }}>
        <Container className="relative z-10">
          <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-center">
            <blockquote className="text-3xl font-black uppercase leading-tight tracking-tight sm:text-5xl" style={{ color: "var(--theme-bg)" }}>
              "Less is more. But less must be{" "}
              <span style={{ color: "var(--theme-accent)" }}>precisely</span>{" "}
              calculated."
            </blockquote>
            <div className="flex gap-4">
              <div className="h-20 w-20 rounded-full" style={{ backgroundColor: "var(--theme-accent)" }} />
              <div className="h-20 w-20" style={{ backgroundColor: "var(--theme-accent-2)" }} />
              <div
                className="h-20 w-20"
                style={{
                  backgroundColor: "#f5c518",
                  clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
                }}
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Grid specs */}
      <section className="border-t-4 border-[var(--theme-text)] py-16 sm:py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-3">
            <Surface className="border-2 border-[var(--theme-text)] p-6">
              <div className="mb-4 h-3 w-16" style={{ backgroundColor: "var(--theme-accent)" }} />
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--theme-muted)]">
                Primary Language
              </p>
              <p className="mt-2 text-xl font-black uppercase text-[var(--theme-text)]">
                {theme.primaryLanguage}
              </p>
            </Surface>
            <Surface className="border-2 border-[var(--theme-text)] p-6">
              <div className="mb-4 h-3 w-16" style={{ backgroundColor: "var(--theme-accent-2)" }} />
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--theme-muted)]">
                Imagery Mode
              </p>
              <p className="mt-2 text-xl font-black uppercase text-[var(--theme-text)]">
                {theme.imageryMode}
              </p>
            </Surface>
            <Surface className="border-2 border-[var(--theme-text)] p-6">
              <div className="mb-4 h-3 w-16" style={{ backgroundColor: "#f5c518" }} />
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--theme-muted)]">
                Audience
              </p>
              <p className="mt-2 text-xl font-black uppercase text-[var(--theme-text)]">
                {theme.audience.split(",")[0]}
              </p>
            </Surface>
          </div>
        </Container>
      </section>
    </>
  );
}
