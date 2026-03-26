import {
  DemoStyleSidebar,
  DemoStyleSidebarDrawer,
} from "@/components/landing/demo-style-sidebar";
import { BauhausLanding } from "@/components/landing/families/bauhaus";
import { familyRenderers } from "@/components/landing/families/registry";
import { CopyPromptButton } from "@/components/shell/copy-prompt-button";
import { StyleIntelligencePanel } from "@/components/shell/style-intelligence-panel";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Surface } from "@/components/ui/surface";
import { styleFamilies } from "@/lib/style-families";
import { demoStyles, type ThemeDefinition } from "@/lib/themes";

// Special renderers for specific styles that need unique treatment
const specialRenderers: Record<string, typeof familyRenderers[keyof typeof familyRenderers]> = {
  "bauhaus-geometric": BauhausLanding,
};

export function LandingPageRenderer({ theme }: { theme: ThemeDefinition }) {
  const Renderer = specialRenderers[theme.slug] ?? familyRenderers[theme.family];
  const family = styleFamilies[theme.family];
  const demoStyleLinks = demoStyles.map((style) => ({
    slug: style.slug,
    modeLabel: style.modeLabel,
    family: style.family,
  }));

  return (
    <main
      style={theme.vars}
      className={`theme-shell theme-family-${theme.family} min-h-screen bg-[var(--theme-bg)] text-[var(--theme-text)]`}
    >
      {/* Fixed sidebar - doesn't push content */}
      <DemoStyleSidebar currentSlug={theme.slug} styles={demoStyleLinks} />

      {/* Main content - full width, with left padding on lg to account for sidebar */}
      <div className="lg:pl-[280px]">
        <div className="border-b border-[var(--theme-border)] bg-[var(--theme-bg)]/80 backdrop-blur-sm">
          <Container className="flex flex-wrap items-center justify-between gap-4 py-5">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[var(--theme-muted)]">
                {family.label}
              </p>
              <h1 className="mt-2 text-lg font-semibold tracking-[-0.03em] text-[var(--theme-text)]">
                {theme.modeLabel}
              </h1>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button href="/" variant="ghost">
                Style library
              </Button>
              {theme.designPromptId ? (
                <CopyPromptButton promptId={theme.designPromptId} variant="secondary" />
              ) : null}
              <DemoStyleSidebarDrawer currentSlug={theme.slug} styles={demoStyleLinks} />
              <Button href="#cta">Jump to CTA</Button>
            </div>
          </Container>
        </div>

        <div className="min-w-0">
          <Renderer theme={theme} />
          <StyleIntelligencePanel theme={theme} />

          <section id="cta" className="py-10 sm:py-16">
            <Container>
              <Surface className="p-6 shadow-[var(--theme-shadow)] sm:p-10">
                <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
                  <div>
                    <p className="text-xs uppercase tracking-[0.28em] text-[var(--theme-muted)]">
                      Practical takeaway
                    </p>
                    <h2 className="mt-4 font-[family-name:var(--theme-font-display)] text-4xl leading-tight tracking-[-0.05em] text-[var(--theme-text)] sm:text-5xl">
                      A strong style catalog should clarify visual language, not just make screenshots look nicer.
                    </h2>
                    <p className="mt-5 max-w-3xl text-base leading-8 text-[var(--theme-muted)]">
                      This route demonstrates how the same product can be art directed in radically different directions by changing layout, hierarchy, materiality, and density with intention.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-3 lg:justify-end">
                    <Button href="/">Choose another style</Button>
                    <Button href="/styles/default-high-agency" variant="secondary">
                      Reset to flagship
                    </Button>
                  </div>
                </div>
              </Surface>
            </Container>
          </section>
        </div>
      </div>
    </main>
  );
}
