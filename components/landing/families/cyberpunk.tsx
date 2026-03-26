import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Surface } from "@/components/ui/surface";
import { sharedContent } from "@/lib/landing-content";
import type { ThemeDefinition } from "@/lib/themes";

// Scanline overlay effect
function Scanlines() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-50 opacity-[0.03]"
      style={{
        backgroundImage:
          "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 255, 136, 0.1) 2px, rgba(0, 255, 136, 0.1) 4px)",
      }}
    />
  );
}

// Glitch text effect component
function GlitchText({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={`relative inline-block ${className}`}>
      <span className="relative z-10">{children}</span>
      <span
        className="absolute left-[2px] top-0 z-0 opacity-70"
        style={{ color: "var(--theme-accent-2)", clipPath: "inset(0 0 50% 0)" }}
        aria-hidden
      >
        {children}
      </span>
      <span
        className="absolute -left-[2px] top-0 z-0 opacity-70"
        style={{ color: "var(--theme-accent)", clipPath: "inset(50% 0 0 0)" }}
        aria-hidden
      >
        {children}
      </span>
    </span>
  );
}

// Neon border card
function NeonCard({
  children,
  glowColor = "var(--theme-accent)",
  className = "",
}: {
  children: React.ReactNode;
  glowColor?: string;
  className?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden border bg-[var(--theme-surface)] p-6 ${className}`}
      style={{
        borderColor: glowColor,
        boxShadow: `0 0 20px ${glowColor}40, inset 0 0 20px ${glowColor}10`,
      }}
    >
      {/* Corner accents */}
      <div
        className="absolute left-0 top-0 h-4 w-4 border-l-2 border-t-2"
        style={{ borderColor: glowColor }}
      />
      <div
        className="absolute right-0 top-0 h-4 w-4 border-r-2 border-t-2"
        style={{ borderColor: glowColor }}
      />
      <div
        className="absolute bottom-0 left-0 h-4 w-4 border-b-2 border-l-2"
        style={{ borderColor: glowColor }}
      />
      <div
        className="absolute bottom-0 right-0 h-4 w-4 border-b-2 border-r-2"
        style={{ borderColor: glowColor }}
      />
      {children}
    </div>
  );
}

// Terminal-style text
function TerminalLine({ prefix = ">", children }: { prefix?: string; children: React.ReactNode }) {
  return (
    <p className="font-mono text-sm">
      <span style={{ color: "var(--theme-accent)" }}>{prefix}</span>{" "}
      <span className="text-[var(--theme-text)]">{children}</span>
      <span
        className="ml-1 inline-block h-4 w-2 animate-pulse"
        style={{ backgroundColor: "var(--theme-accent)" }}
      />
    </p>
  );
}

export function CyberpunkLanding({ theme }: { theme: ThemeDefinition }) {
  return (
    <>
      <Scanlines />

      {/* Hero with neon effects */}
      <section className="relative min-h-[80vh] overflow-hidden py-16 sm:py-24">
        {/* Background grid */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(var(--theme-accent) 1px, transparent 1px),
              linear-gradient(90deg, var(--theme-accent) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />

        {/* Gradient orbs */}
        <div
          className="absolute -left-32 top-1/4 h-96 w-96 rounded-full opacity-30 blur-3xl"
          style={{ backgroundColor: "var(--theme-accent)" }}
        />
        <div
          className="absolute -right-32 bottom-1/4 h-96 w-96 rounded-full opacity-20 blur-3xl"
          style={{ backgroundColor: "var(--theme-accent-2)" }}
        />

        <Container className="relative z-10">
          <div className="max-w-4xl">
            <p
              className="font-mono text-sm uppercase tracking-[0.4em]"
              style={{ color: "var(--theme-accent)" }}
            >
              [{theme.kicker}]
            </p>

            <h1 className="mt-6 text-5xl font-black uppercase leading-[0.9] tracking-tight sm:text-7xl lg:text-8xl">
              <GlitchText>Welcome to</GlitchText>
              <br />
              <span style={{ color: "var(--theme-accent)" }}>The Future</span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-relaxed text-[var(--theme-muted)]">
              High-energy interfaces for the next generation. Neon-lit, glitch-infused, and ready for the edge.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button
                href="/"
                className="border-2 border-[var(--theme-accent)] bg-[var(--theme-accent)] font-mono uppercase tracking-wider text-[var(--theme-accent-contrast)]"
              >
                [RETURN_TO_GRID]
              </Button>
              <Button
                href="/styles/dark-glow-aurora"
                variant="ghost"
                className="border-2 border-[var(--theme-accent-2)] font-mono uppercase tracking-wider text-[var(--theme-accent-2)]"
              >
                [COMPARE_AURORA]
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Features with neon cards */}
      <section className="relative py-16 sm:py-20">
        <Container>
          <div className="mb-12">
            <p
              className="font-mono text-sm uppercase tracking-[0.3em]"
              style={{ color: "var(--theme-accent-2)" }}
            >
              // SYSTEM_CAPABILITIES
            </p>
            <h2 className="mt-4 text-3xl font-bold uppercase tracking-tight sm:text-4xl">
              Core <span style={{ color: "var(--theme-accent)" }}>Modules</span>
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {sharedContent.features.map((feature, index) => (
              <NeonCard
                key={feature.title}
                glowColor={index % 2 === 0 ? "var(--theme-accent)" : "var(--theme-accent-2)"}
              >
                <p
                  className="font-mono text-xs uppercase tracking-widest"
                  style={{ color: index % 2 === 0 ? "var(--theme-accent)" : "var(--theme-accent-2)" }}
                >
                  MODULE_{String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 text-xl font-bold uppercase text-[var(--theme-text)]">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--theme-muted)]">
                  {feature.description}
                </p>
              </NeonCard>
            ))}
          </div>
        </Container>
      </section>

      {/* Terminal section */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <p
                className="font-mono text-sm uppercase tracking-[0.3em]"
                style={{ color: "var(--theme-accent)" }}
              >
                // SYSTEM_OUTPUT
              </p>
              <blockquote className="mt-6 text-2xl font-bold leading-snug tracking-tight sm:text-3xl">
                "{sharedContent.quotes[1]}"
              </blockquote>
            </div>

            <NeonCard className="font-mono">
              <div className="mb-4 flex items-center gap-2">
                <div className="h-3 w-3 rounded-full" style={{ backgroundColor: "var(--theme-accent-2)" }} />
                <div className="h-3 w-3 rounded-full" style={{ backgroundColor: "var(--theme-accent)" }} />
                <div className="h-3 w-3 rounded-full bg-[var(--theme-muted)]" />
                <span className="ml-2 text-xs text-[var(--theme-muted)]">terminal_v2.0</span>
              </div>
              <div className="space-y-3">
                <TerminalLine prefix="$">init style_engine --mode=cyberpunk</TerminalLine>
                <p className="text-sm text-[var(--theme-muted)]">Loading neon matrices...</p>
                <TerminalLine prefix="$">config.primary = "{theme.primaryLanguage}"</TerminalLine>
                <TerminalLine prefix="$">config.imagery = "{theme.imageryMode}"</TerminalLine>
                <p className="text-sm" style={{ color: "var(--theme-accent)" }}>
                  [SUCCESS] Style engine initialized
                </p>
              </div>
            </NeonCard>
          </div>
        </Container>
      </section>

      {/* Specs grid */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="border border-[var(--theme-accent)] bg-[var(--theme-surface)] p-6 shadow-[0_0_15px_var(--theme-accent)/30]">
              <p className="font-mono text-xs uppercase tracking-widest text-[var(--theme-muted)]">
                PRIMARY_LANG
              </p>
              <p className="mt-2 text-lg font-bold text-[var(--theme-accent)]">
                {theme.primaryLanguage}
              </p>
            </div>
            <div className="border border-[var(--theme-accent-2)] bg-[var(--theme-surface)] p-6 shadow-[0_0_15px_var(--theme-accent-2)/30]">
              <p className="font-mono text-xs uppercase tracking-widest text-[var(--theme-muted)]">
                IMAGERY_MODE
              </p>
              <p className="mt-2 text-lg font-bold text-[var(--theme-accent-2)]">
                {theme.imageryMode}
              </p>
            </div>
            <div className="border border-[var(--theme-accent)] bg-[var(--theme-surface)] p-6 shadow-[0_0_15px_var(--theme-accent)/30]">
              <p className="font-mono text-xs uppercase tracking-widest text-[var(--theme-muted)]">
                TARGET_AUDIENCE
              </p>
              <p className="mt-2 text-lg font-bold text-[var(--theme-accent)]">
                {theme.audience.split(",")[0]}
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
