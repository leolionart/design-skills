import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Surface } from "@/components/ui/surface";
import { sharedContent } from "@/lib/landing-content";
import type { ThemeDefinition } from "@/lib/themes";

// Bento tile variants with different visual treatments
function BentoTile({
  size = "1x1",
  variant = "default",
  children,
  className = "",
}: {
  size?: "1x1" | "2x1" | "1x2" | "2x2";
  variant?: "default" | "accent" | "gradient" | "outline";
  children: React.ReactNode;
  className?: string;
}) {
  const sizeClasses = {
    "1x1": "",
    "2x1": "sm:col-span-2",
    "1x2": "sm:row-span-2",
    "2x2": "sm:col-span-2 sm:row-span-2",
  };

  const variantClasses = {
    default: "bg-[var(--theme-surface-strong)]",
    accent: "bg-[var(--theme-accent)] text-[var(--theme-accent-contrast)]",
    gradient: "bg-gradient-to-br from-[var(--theme-accent)] to-[var(--theme-accent-2)] text-white",
    outline: "bg-transparent border-2 border-[var(--theme-border)]",
  };

  return (
    <div
      className={`
        rounded-[var(--theme-radius)] p-5 sm:p-6
        shadow-[var(--theme-shadow)]
        ${sizeClasses[size]}
        ${variantClasses[variant]}
        ${className}
      `}
    >
      {children}
    </div>
  );
}

// Stats display for bento tiles
function StatTile({ value, label }: { value: string; label: string }) {
  return (
    <BentoTile>
      <div className="flex h-full flex-col justify-between">
        <p className="text-4xl font-bold tracking-tight text-[var(--theme-text)] sm:text-5xl">
          {value}
        </p>
        <p className="mt-2 text-sm text-[var(--theme-muted)]">{label}</p>
      </div>
    </BentoTile>
  );
}

// Feature tile with icon placeholder
function FeatureTile({
  title,
  description,
  size = "1x1",
}: {
  title: string;
  description: string;
  size?: "1x1" | "2x1";
}) {
  return (
    <BentoTile size={size}>
      <div className="flex h-full flex-col">
        {/* Icon placeholder */}
        <div className="mb-4 h-10 w-10 rounded-xl bg-[var(--theme-accent)]/10 p-2">
          <div className="h-full w-full rounded-lg bg-[var(--theme-accent)]" />
        </div>
        <h3 className="text-lg font-semibold text-[var(--theme-text)]">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-[var(--theme-muted)]">
          {description}
        </p>
      </div>
    </BentoTile>
  );
}

export function BentoLanding({ theme }: { theme: ThemeDefinition }) {
  return (
    <>
      {/* Hero bento grid */}
      <section className="py-10 sm:py-16">
        <Container>
          <div className="grid gap-4 sm:grid-cols-3 sm:grid-rows-[auto_auto_auto]">
            {/* Main hero tile - 2x2 */}
            <BentoTile size="2x2" variant="gradient" className="flex flex-col justify-between">
              <div>
                <p className="text-sm font-medium uppercase tracking-widest opacity-80">
                  {theme.kicker}
                </p>
                <h1 className="mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                  Everything you need, beautifully organized
                </h1>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button
                  href="/"
                  className="bg-white/20 text-white backdrop-blur-sm hover:bg-white/30"
                >
                  Back to gallery
                </Button>
                <Button
                  href="/styles/clean-saas-gradient"
                  variant="ghost"
                  className="text-white/90 hover:bg-white/10 hover:text-white"
                >
                  Compare SaaS
                </Button>
              </div>
            </BentoTile>

            {/* Stats tiles */}
            <StatTile value="10x" label="Faster workflows" />
            <StatTile value="99%" label="Uptime guarantee" />
            <StatTile value="50+" label="Integrations ready" />
          </div>
        </Container>
      </section>

      {/* Features bento grid */}
      <section className="py-8 sm:py-12">
        <Container>
          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-widest text-[var(--theme-muted)]">
              Capabilities
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-[var(--theme-text)] sm:text-4xl">
              Built for modern teams
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {/* Wide feature tile */}
            <BentoTile size="2x1" className="sm:col-span-2">
              <div className="flex h-full flex-col justify-between">
                <div>
                  <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--theme-accent)]">
                    <div className="h-5 w-5 rounded bg-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-[var(--theme-text)]">
                    {sharedContent.features[0].title}
                  </h3>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-[var(--theme-muted)]">
                    {sharedContent.features[0].description}
                  </p>
                </div>
              </div>
            </BentoTile>

            {/* Regular feature tiles */}
            {sharedContent.features.slice(1, 3).map((feature) => (
              <FeatureTile
                key={feature.title}
                title={feature.title}
                description={feature.description}
              />
            ))}

            {/* Accent tile */}
            <BentoTile variant="accent">
              <div className="flex h-full flex-col justify-between">
                <p className="text-3xl font-bold">∞</p>
                <div>
                  <p className="font-semibold">Unlimited</p>
                  <p className="text-sm opacity-80">Projects & collaborators</p>
                </div>
              </div>
            </BentoTile>

            {/* More features */}
            {sharedContent.features.slice(3).map((feature) => (
              <FeatureTile
                key={feature.title}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* Info grid */}
      <section className="py-8 sm:py-12">
        <Container>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Surface className="p-6 shadow-[var(--theme-shadow)]">
              <p className="text-xs font-semibold uppercase tracking-widest text-[var(--theme-muted)]">
                Primary Language
              </p>
              <p className="mt-3 text-xl font-semibold text-[var(--theme-text)]">
                {theme.primaryLanguage}
              </p>
            </Surface>
            <Surface className="p-6 shadow-[var(--theme-shadow)]">
              <p className="text-xs font-semibold uppercase tracking-widest text-[var(--theme-muted)]">
                Imagery Mode
              </p>
              <p className="mt-3 text-xl font-semibold text-[var(--theme-text)]">
                {theme.imageryMode}
              </p>
            </Surface>
            <Surface className="p-6 shadow-[var(--theme-shadow)] sm:col-span-2 lg:col-span-1">
              <p className="text-xs font-semibold uppercase tracking-widest text-[var(--theme-muted)]">
                Best For
              </p>
              <p className="mt-3 text-xl font-semibold text-[var(--theme-text)]">
                {theme.audience.split(",")[0]}
              </p>
            </Surface>
          </div>
        </Container>
      </section>

      {/* Quote in bento style */}
      <section className="py-8 sm:py-12">
        <Container>
          <div className="grid gap-4 sm:grid-cols-5">
            <BentoTile size="2x1" variant="outline" className="sm:col-span-3 flex items-center">
              <blockquote className="text-2xl font-semibold leading-snug tracking-tight text-[var(--theme-text)] sm:text-3xl">
                "{sharedContent.quotes[0]}"
              </blockquote>
            </BentoTile>
            <div className="grid gap-4 sm:col-span-2">
              <BentoTile variant="accent">
                <p className="text-sm font-medium opacity-80">Direction</p>
                <p className="mt-1 text-lg font-semibold">Modular grid</p>
              </BentoTile>
              <BentoTile>
                <p className="text-sm text-[var(--theme-muted)]">Supporting</p>
                <p className="mt-1 font-semibold text-[var(--theme-text)]">
                  {theme.supportingTreatments[0]}
                </p>
              </BentoTile>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
