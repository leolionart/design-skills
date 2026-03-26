import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { sharedContent } from "@/lib/landing-content";
import type { ThemeDefinition } from "@/lib/themes";

// 3D-style floating object placeholder
function FloatingObject({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      {/* Glow underneath */}
      <div className="absolute -bottom-8 left-1/2 h-8 w-3/4 -translate-x-1/2 rounded-full bg-[var(--theme-accent)] opacity-30 blur-2xl" />
      
      {/* Main object - simulated 3D cube/product */}
      <div
        className="relative mx-auto h-64 w-64 sm:h-80 sm:w-80"
        style={{
          perspective: "1000px",
          transformStyle: "preserve-3d",
        }}
      >
        {/* Front face */}
        <div
          className="absolute inset-0 rounded-3xl border border-[var(--theme-accent)]/30 bg-gradient-to-br from-[var(--theme-surface-strong)] to-[var(--theme-surface)]"
          style={{
            transform: "rotateY(-15deg) rotateX(10deg)",
            boxShadow: `
              0 25px 50px -12px rgba(0, 0, 0, 0.5),
              inset 0 1px 0 rgba(255, 255, 255, 0.1)
            `,
          }}
        >
          {/* Inner highlight */}
          <div className="absolute inset-4 rounded-2xl border border-[var(--theme-accent)]/20 bg-gradient-to-br from-[var(--theme-accent)]/10 to-transparent" />
          
          {/* Center icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-20 w-20 rounded-2xl bg-gradient-to-br from-[var(--theme-accent)] to-[var(--theme-accent-2)] opacity-80 shadow-lg" />
          </div>
        </div>
        
        {/* Floating particles */}
        <div className="absolute -right-4 top-1/4 h-3 w-3 rounded-full bg-[var(--theme-accent)] opacity-60 blur-[1px]" />
        <div className="absolute -left-6 top-1/2 h-2 w-2 rounded-full bg-[var(--theme-accent-2)] opacity-50 blur-[1px]" />
        <div className="absolute bottom-1/4 right-1/4 h-4 w-4 rounded-full bg-[var(--theme-accent)] opacity-40 blur-[2px]" />
      </div>
    </div>
  );
}

// Spotlight section
function SpotlightCard({
  title,
  description,
  index,
}: {
  title: string;
  description: string;
  index: number;
}) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-[var(--theme-border)] bg-[var(--theme-surface)] p-8 transition-all hover:border-[var(--theme-accent)]/50">
      {/* Spotlight glow on hover */}
      <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[var(--theme-accent)] opacity-0 blur-3xl transition-opacity group-hover:opacity-20" />
      
      <span className="text-6xl font-bold text-[var(--theme-accent)]/10">
        {String(index + 1).padStart(2, "0")}
      </span>
      <h3 className="mt-4 text-xl font-semibold text-[var(--theme-text)]">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-[var(--theme-muted)]">
        {description}
      </p>
    </div>
  );
}

// Product spec item
function SpecItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-b border-[var(--theme-border)] py-4 last:border-0">
      <p className="text-xs uppercase tracking-widest text-[var(--theme-muted)]">
        {label}
      </p>
      <p className="mt-1 text-lg font-medium text-[var(--theme-text)]">
        {value}
      </p>
    </div>
  );
}

export function Product3DLanding({ theme }: { theme: ThemeDefinition }) {
  return (
    <>
      {/* Hero with floating 3D object */}
      <section className="relative min-h-[90vh] overflow-hidden py-16 sm:py-24">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--theme-accent)]/5 to-transparent" />
        
        {/* Radial glow */}
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--theme-accent)] opacity-[0.07] blur-[100px]" />

        <Container className="relative z-10">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.3em] text-[var(--theme-accent)]">
                {theme.kicker}
              </p>
              <h1 className="mt-6 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
                Experience the
                <br />
                <span className="bg-gradient-to-r from-[var(--theme-accent)] to-[var(--theme-accent-2)] bg-clip-text text-transparent">
                  next dimension
                </span>
              </h1>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-[var(--theme-muted)]">
                Object-centric design that turns every product into a cinematic reveal. 
                High depth, dramatic lighting, pure spectacle.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Button href="/" className="bg-[var(--theme-accent)] text-[var(--theme-accent-contrast)]">
                  Back to gallery
                </Button>
                <Button href="/styles/glassmorphism-mature" variant="ghost">
                  Compare glass style
                </Button>
              </div>
            </div>

            <FloatingObject />
          </div>
        </Container>
      </section>

      {/* Product reveal sequence */}
      <section className="py-16 sm:py-24">
        <Container>
          <div className="mb-12 text-center">
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-[var(--theme-accent)]">
              Product Reveal
            </p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Every angle matters
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {sharedContent.features.map((feature, index) => (
              <SpotlightCard
                key={feature.title}
                title={feature.title}
                description={feature.description}
                index={index}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* Cinematic quote section */}
      <section className="relative overflow-hidden py-24 sm:py-32">
        {/* Background object glow */}
        <div className="absolute right-0 top-1/2 h-96 w-96 -translate-y-1/2 translate-x-1/2 rounded-full bg-[var(--theme-accent-2)] opacity-10 blur-[100px]" />
        
        <Container className="relative z-10">
          <blockquote className="mx-auto max-w-4xl text-center text-3xl font-bold leading-snug tracking-tight sm:text-5xl">
            "{sharedContent.quotes[1]}"
          </blockquote>
        </Container>
      </section>

      {/* Specs section */}
      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.3em] text-[var(--theme-accent)]">
                Style Specifications
              </p>
              <h2 className="mt-4 text-4xl font-bold tracking-tight">
                Technical details
              </h2>
              <p className="mt-4 text-lg text-[var(--theme-muted)]">
                This direction uses depth, lighting, and object presence to create 
                an immersive product experience.
              </p>
            </div>

            <div className="rounded-3xl border border-[var(--theme-border)] bg-[var(--theme-surface)] p-8">
              <SpecItem label="Primary Language" value={theme.primaryLanguage} />
              <SpecItem label="Imagery Mode" value={theme.imageryMode} />
              <SpecItem label="Target Audience" value={theme.audience.split(",")[0]} />
              <SpecItem label="Supporting Treatments" value={theme.supportingTreatments.join(", ")} />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
