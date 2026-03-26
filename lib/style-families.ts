export type StyleFamily =
  | "high-agency"
  | "editorial-typography"
  | "grid-product"
  | "immersive-premium"
  | "tactile-organic"
  | "experimental-loud";

export type HeroVariant =
  | "launch-swing"
  | "manifesto-split"
  | "oversized-type"
  | "ornamental-frame"
  | "scholarly-archive"
  | "modular-overview"
  | "boardroom-brief"
  | "geometric-grid"
  | "control-surface"
  | "object-spotlight"
  | "narrative-reveal"
  | "neon-console"
  | "soft-stack"
  | "ambient-cloud"
  | "earthy-asymmetry"
  | "poster-stack"
  | "glossy-badge-cloud"
  | "handmade-board";

export type RhythmVariant = "swing" | "reading" | "scan" | "reveal" | "flow" | "collision";

export type ProofVariant =
  | "metric-band"
  | "editorial-notes"
  | "folio-columns"
  | "tile-matrix"
  | "comparison-grid"
  | "object-spec"
  | "reveal-cards"
  | "soft-bullets"
  | "signal-cards"
  | "keyword-badges";

export type CtaVariant =
  | "assertive-dual"
  | "quiet-links"
  | "utility-stack"
  | "luxury-prompt"
  | "gentle-invite"
  | "culture-switch";

export type PreviewSilhouette =
  | "off-axis"
  | "monolith"
  | "ornament"
  | "tiles"
  | "console"
  | "spotlight"
  | "orbital"
  | "collage"
  | "stacked-cards"
  | "poster";

export type StyleDensity = "airy" | "balanced" | "dense";

export type EmphasisMode = "type" | "grid" | "object" | "material" | "atmosphere" | "poster";

export type MediaTreatment =
  | "abstract"
  | "type-led"
  | "photographic"
  | "diagrammatic"
  | "rendered-object"
  | "ambient"
  | "collaged"
  | "ornamental"
  | "hand-drawn";

export type SectionKind = "hero" | "proof" | "features" | "quote" | "details";

export type FamilyRecipeConstraints = {
  heroVariants: readonly HeroVariant[];
  rhythms: readonly RhythmVariant[];
  proofVariants: readonly ProofVariant[];
  ctaVariants: readonly CtaVariant[];
  previewSilhouettes: readonly PreviewSilhouette[];
  densityModes: readonly StyleDensity[];
  emphasisModes: readonly EmphasisMode[];
  mediaTreatments: readonly MediaTreatment[];
};

export const styleFamilies: Record<
  StyleFamily,
  {
    label: string;
    description: string;
    constraints: FamilyRecipeConstraints;
  }
> = {
  "high-agency": {
    label: "High-agency",
    description: "Asymmetric flagship launch pages with strong hierarchy and anti-generic marketing energy.",
    constraints: {
      heroVariants: ["launch-swing"],
      rhythms: ["swing"],
      proofVariants: ["metric-band", "reveal-cards"],
      ctaVariants: ["assertive-dual"],
      previewSilhouettes: ["off-axis", "stacked-cards"],
      densityModes: ["balanced", "dense"],
      emphasisModes: ["grid", "poster"],
      mediaTreatments: ["abstract", "photographic"],
    },
  },
  "editorial-typography": {
    label: "Editorial / typography",
    description: "Type-led, refined and whitespace-driven layouts for manifesto, luxury and quiet brand expression.",
    constraints: {
      heroVariants: [
        "manifesto-split",
        "oversized-type",
        "ornamental-frame",
        "scholarly-archive",
      ],
      rhythms: ["reading"],
      proofVariants: ["editorial-notes", "folio-columns", "keyword-badges"],
      ctaVariants: ["quiet-links", "luxury-prompt"],
      previewSilhouettes: ["monolith", "ornament"],
      densityModes: ["airy", "balanced"],
      emphasisModes: ["type", "material"],
      mediaTreatments: ["type-led", "photographic", "ornamental"],
    },
  },
  "grid-product": {
    label: "Grid / product",
    description: "Modular, scan-friendly product marketing directions for SaaS, explainers and feature-heavy launches.",
    constraints: {
      heroVariants: ["modular-overview", "boardroom-brief", "geometric-grid", "neon-console"],
      rhythms: ["scan"],
      proofVariants: ["tile-matrix", "comparison-grid", "keyword-badges"],
      ctaVariants: ["utility-stack"],
      previewSilhouettes: ["tiles", "console"],
      densityModes: ["balanced", "dense"],
      emphasisModes: ["grid", "type"],
      mediaTreatments: ["diagrammatic", "photographic", "type-led"],
    },
  },
  "immersive-premium": {
    label: "Immersive / premium",
    description: "Layered, luminous or object-centric pages built around atmosphere, depth and premium motion cues.",
    constraints: {
      heroVariants: ["control-surface", "object-spotlight", "narrative-reveal", "neon-console"],
      rhythms: ["reveal"],
      proofVariants: ["object-spec", "reveal-cards", "metric-band"],
      ctaVariants: ["luxury-prompt", "assertive-dual"],
      previewSilhouettes: ["spotlight", "orbital", "console"],
      densityModes: ["balanced", "dense"],
      emphasisModes: ["object", "atmosphere", "material"],
      mediaTreatments: ["rendered-object", "ambient", "photographic", "diagrammatic"],
    },
  },
  "tactile-organic": {
    label: "Tactile / organic",
    description: "Soft, rounded and material-feeling interfaces with approachable motion and ambient color fields.",
    constraints: {
      heroVariants: ["soft-stack", "ambient-cloud", "earthy-asymmetry"],
      rhythms: ["flow"],
      proofVariants: ["soft-bullets", "keyword-badges", "editorial-notes"],
      ctaVariants: ["gentle-invite", "quiet-links"],
      previewSilhouettes: ["orbital", "stacked-cards"],
      densityModes: ["airy", "balanced"],
      emphasisModes: ["material", "atmosphere"],
      mediaTreatments: ["ambient", "photographic", "abstract"],
    },
  },
  "experimental-loud": {
    label: "Experimental / loud",
    description: "Bold, disruptive and culture-led directions that intentionally reject template neatness.",
    constraints: {
      heroVariants: ["poster-stack", "glossy-badge-cloud", "handmade-board"],
      rhythms: ["collision"],
      proofVariants: ["signal-cards", "comparison-grid", "keyword-badges"],
      ctaVariants: ["culture-switch", "assertive-dual"],
      previewSilhouettes: ["collage", "poster", "stacked-cards"],
      densityModes: ["balanced", "dense"],
      emphasisModes: ["poster", "material", "type"],
      mediaTreatments: ["collaged", "ambient", "hand-drawn", "photographic"],
    },
  },
};

export const familyOrder: StyleFamily[] = [
  "high-agency",
  "editorial-typography",
  "grid-product",
  "immersive-premium",
  "tactile-organic",
  "experimental-loud",
];
