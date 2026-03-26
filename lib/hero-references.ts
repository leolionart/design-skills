export type HeroReference = {
  slug: string;
  label: string;
  family: string;
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: string;
  secondaryCta: string;
  proof: string[];
};

export const heroReferences: HeroReference[] = [
  {
    slug: "bento-grid",
    label: "Bento Product Hero",
    family: "grid-product",
    eyebrow: "Dense scan layout",
    title: "Show many product wins in one screen without losing hierarchy.",
    description:
      "Use a left copy column and a right-side bento matrix so users understand value, proof, and entry points in seconds.",
    primaryCta: "Start free",
    secondaryCta: "See feature map",
    proof: ["12 modules in one workspace", "SOC 2 ready", "Trusted by 1,500 teams"],
  },
  {
    slug: "clean-saas-gradient",
    label: "SaaS Gradient Hero",
    family: "grid-product",
    eyebrow: "Conversion-friendly clarity",
    title: "A practical startup hero with polish, trust, and direct CTA flow.",
    description:
      "Keep messaging simple, pair one strong CTA with one exploration CTA, and anchor trust logos immediately below the fold.",
    primaryCta: "Book demo",
    secondaryCta: "Watch product tour",
    proof: ["92% onboarding completion", "3.2x faster rollout", "99.95% uptime"],
  },
  {
    slug: "professional-corporate",
    label: "Enterprise Trust Hero",
    family: "grid-product",
    eyebrow: "Executive-grade hierarchy",
    title: "Lead with operational outcomes for decision-makers and procurement.",
    description:
      "Prioritize readability, KPI snapshots, and confidence signals instead of novelty-heavy visuals or decorative effects.",
    primaryCta: "Request proposal",
    secondaryCta: "Download security brief",
    proof: ["Fortune 500 pilot-ready", "ISO 27001 controls", "Audit logs by default"],
  },
  {
    slug: "glassmorphism-mature",
    label: "Glass Premium Hero",
    family: "immersive-premium",
    eyebrow: "Layered translucent surfaces",
    title: "Use frosted depth to feel premium while preserving legibility.",
    description:
      "Blend soft blur, subtle borders, and bright focal CTA. Keep text contrast strict so glass is material, not a readability compromise.",
    primaryCta: "Launch workspace",
    secondaryCta: "Explore UI kit",
    proof: ["Live sync across panels", "Smart alerts by priority", "Role-aware controls"],
  },
  {
    slug: "dark-glow-aurora",
    label: "Dark Aurora Hero",
    family: "immersive-premium",
    eyebrow: "Cinematic premium tech",
    title: "Create atmosphere with controlled glow, not noisy neon overload.",
    description:
      "Use a dark canvas with one luminous accent system. Keep cards and text blocks clean so atmosphere supports hierarchy.",
    primaryCta: "Enter command center",
    secondaryCta: "View architecture",
    proof: ["Sub-200ms event latency", "Realtime anomaly feed", "Private cloud ready"],
  },
  {
    slug: "default-high-agency",
    label: "Asymmetric Launch Hero",
    family: "high-agency",
    eyebrow: "Flagship momentum",
    title: "Break center alignment to create launch energy and priority shifts.",
    description:
      "Use asymmetric composition, staged proof blocks, and a dominant CTA timing strategy to avoid a template-like first impression.",
    primaryCta: "Start launch plan",
    secondaryCta: "Compare editions",
    proof: ["25% higher CTA focus", "Faster message recall", "Built for campaign velocity"],
  },
  {
    slug: "typography-first",
    label: "Typography-first Hero",
    family: "editorial-typography",
    eyebrow: "Voice-led branding",
    title: "Let headline scale and cadence become the visual system.",
    description:
      "Use oversized display type, tight copy control, and restrained supporting visuals for brands where language is the main differentiator.",
    primaryCta: "Read the manifesto",
    secondaryCta: "See case studies",
    proof: ["Distinct tone in one screen", "High editorial recall", "Premium without heavy effects"],
  },
  {
    slug: "terminal-interface",
    label: "Terminal Tech Hero",
    family: "grid-product",
    eyebrow: "Operator-mode aesthetic",
    title: "Use console rhythm to signal technical credibility instantly.",
    description:
      "Monospace hierarchy, command-style modules, and strong contrast build trust for infra, security, and developer tooling audiences.",
    primaryCta: "Open CLI docs",
    secondaryCta: "Run quickstart",
    proof: ["Zero-config setup path", "Typed API everywhere", "Deploy in under 5 minutes"],
  },
  {
    slug: "inclusive-accessibility-first",
    label: "Accessible Clarity Hero",
    family: "grid-product",
    eyebrow: "Readability-first trust",
    title: "Turn accessibility choices into a visible brand strength.",
    description:
      "Use high contrast, generous type sizing, and predictable structure so broad audiences can parse value quickly and confidently.",
    primaryCta: "Try accessible demo",
    secondaryCta: "Read compliance details",
    proof: ["WCAG-focused design system", "Clear keyboard paths", "Civic-grade readability"],
  },
  {
    slug: "organic-mesh-gradients",
    label: "Soft Consumer Hero",
    family: "tactile-organic",
    eyebrow: "Ambient warmth",
    title: "Use mesh gradients for friendliness without losing structure.",
    description:
      "Keep the gradient atmospheric and pair it with crisp cards and concise CTA hierarchy to avoid drifting into decorative noise.",
    primaryCta: "Create account",
    secondaryCta: "View onboarding flow",
    proof: ["Gentle first impression", "Lower visual friction", "Great for consumer adoption"],
  },
];

export function getHeroReferenceBySlug(slug: string) {
  return heroReferences.find((item) => item.slug === slug);
}
