import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import type { ThemeDefinition } from "@/lib/themes";

type HeroPatternId =
  | "hero-digital-success"
  | "hero-ai-value-proposition"
  | "hero-social-app"
  | "hero-ai-ecommerce"
  | "hero-ai-infrastructure"
  | "hero-financial";

type HeroPattern = {
  id: HeroPatternId;
  label: string;
  eyebrow: string;
  title: string;
  description: string;
  ctaPrimary: string;
  ctaSecondary: string;
};

const heroPatterns: Record<HeroPatternId, HeroPattern> = {
  "hero-digital-success": {
    id: "hero-digital-success",
    label: "Digital Success",
    eyebrow: "UI Layouts hero pattern",
    title: "Unlock launch momentum with a high-contrast hero and sharp CTA timing.",
    description:
      "Best for flagship positioning, asymmetry, and conversion-forward campaigns where confidence needs to be visible above the fold.",
    ctaPrimary: "Book a call",
    ctaSecondary: "See growth plan",
  },
  "hero-ai-value-proposition": {
    id: "hero-ai-value-proposition",
    label: "AI Value Proposition",
    eyebrow: "UI Layouts hero pattern",
    title: "Explain product value in one clean read with immediate proof.",
    description:
      "Great for SaaS and AI tools that need fast comprehension, low-friction scanning, and practical CTA entry points.",
    ctaPrimary: "Get started",
    ctaSecondary: "View demo",
  },
  "hero-social-app": {
    id: "hero-social-app",
    label: "Social App",
    eyebrow: "UI Layouts hero pattern",
    title: "Drive adoption with a creator-first message and social energy.",
    description:
      "Use this when growth, sharing loops, and playful conversion cues are central to the product story.",
    ctaPrimary: "Create account",
    ctaSecondary: "Watch preview",
  },
  "hero-ai-ecommerce": {
    id: "hero-ai-ecommerce",
    label: "AI Ecommerce",
    eyebrow: "UI Layouts hero pattern",
    title: "Frame AI assistance as a direct revenue lever for commerce teams.",
    description:
      "Useful for merchant tools, conversion optimization products, and storefront ops where ROI and speed matter most.",
    ctaPrimary: "Start free trial",
    ctaSecondary: "Explore workflows",
  },
  "hero-ai-infrastructure": {
    id: "hero-ai-infrastructure",
    label: "AI Infrastructure",
    eyebrow: "UI Layouts hero pattern",
    title: "Position technical depth with a strong operator-facing first impression.",
    description:
      "Built for infra/devtool narratives where reliability, scale, and architecture credibility must be clear immediately.",
    ctaPrimary: "Deploy now",
    ctaSecondary: "Read docs",
  },
  "hero-financial": {
    id: "hero-financial",
    label: "Financial",
    eyebrow: "UI Layouts hero pattern",
    title: "Lead with trust and clarity for risk-aware, decision-heavy audiences.",
    description:
      "Designed for fintech, enterprise, and compliance-centric flows that need confidence without visual noise.",
    ctaPrimary: "Request access",
    ctaSecondary: "See security",
  },
};

function resolvePatternId(theme: ThemeDefinition): HeroPatternId {
  const explicitMap: Partial<Record<string, HeroPatternId>> = {
    "default-high-agency": "hero-digital-success",
    "glassmorphism-mature": "hero-ai-infrastructure",
    "neo-brutalism": "hero-social-app",
    "editorial-minimalism": "hero-financial",
    "bento-grid": "hero-ai-value-proposition",
    "dark-glow-aurora": "hero-ai-infrastructure",
    "claymorphism-soft-3d": "hero-social-app",
    "immersive-3d-product": "hero-digital-success",
    "y2k-retro-futurism": "hero-social-app",
    "anti-design": "hero-social-app",
    "clean-saas-gradient": "hero-ai-value-proposition",
    "typography-first": "hero-financial",
    "organic-mesh-gradients": "hero-social-app",
    "premium-monochrome": "hero-financial",
    "motion-led-storytelling": "hero-digital-success",
    "iridescent-holographic-chrome": "hero-social-app",
    "meaningful-minimalism": "hero-financial",
    "cute-alism-kawaii-brutalism": "hero-social-app",
    "brutalist-editorial-zine": "hero-social-app",
    "inclusive-accessibility-first": "hero-financial",
    "professional-corporate": "hero-financial",
    "terminal-interface": "hero-ai-infrastructure",
    "web3-orange-ledger": "hero-ai-infrastructure",
    "vaporwave-dreamscape": "hero-social-app",
    "botanical-editorial": "hero-social-app",
    "sketch-wireframe": "hero-ai-ecommerce",
    "bauhaus-geometric": "hero-ai-value-proposition",
    "academia-classical": "hero-financial",
    "cyberpunk-neon": "hero-ai-infrastructure",
    "maximalism-collage": "hero-ai-ecommerce",
    "art-deco-luxe": "hero-financial",
    "ai-ecommerce": "hero-ai-ecommerce",
  };

  return explicitMap[theme.slug] ?? "hero-ai-value-proposition";
}

export function UiLayoutsHero({ theme }: { theme: ThemeDefinition }) {
  const pattern = heroPatterns[resolvePatternId(theme)];

  return (
    <section className="py-8 sm:py-12">
      <Container>
        <div className="overflow-hidden rounded-[var(--theme-radius)] border border-[var(--theme-border)] bg-[var(--theme-surface)] p-6 shadow-[var(--theme-shadow)] sm:p-8">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--theme-muted)]">
                {pattern.eyebrow}
              </p>
              <p className="mt-3 inline-flex rounded-full border border-[var(--theme-border)] bg-[var(--theme-bg)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--theme-muted)]">
                {pattern.id}
              </p>
              <h2 className="mt-4 max-w-4xl font-[family-name:var(--theme-font-display)] text-3xl leading-tight tracking-[-0.04em] text-[var(--theme-text)] sm:text-5xl">
                {pattern.title}
              </h2>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-[var(--theme-muted)] sm:text-base">
                {pattern.description}
              </p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <Button href="#" className="pointer-events-none">
                {pattern.ctaPrimary}
              </Button>
              <Button href="#" variant="secondary" className="pointer-events-none">
                {pattern.ctaSecondary}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
