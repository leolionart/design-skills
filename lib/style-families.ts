export type StyleFamily =
  | "high-agency"
  | "editorial-typography"
  | "grid-product"
  | "immersive-premium"
  | "tactile-organic"
  | "experimental-loud";

export const styleFamilies: Record<
  StyleFamily,
  {
    label: string;
    description: string;
  }
> = {
  "high-agency": {
    label: "High-agency",
    description: "Asymmetric flagship launch pages with strong hierarchy and anti-generic marketing energy.",
  },
  "editorial-typography": {
    label: "Editorial / typography",
    description: "Type-led, refined and whitespace-driven layouts for manifesto, luxury and quiet brand expression.",
  },
  "grid-product": {
    label: "Grid / product",
    description: "Modular, scan-friendly product marketing directions for SaaS, explainers and feature-heavy launches.",
  },
  "immersive-premium": {
    label: "Immersive / premium",
    description: "Layered, luminous or object-centric pages built around atmosphere, depth and premium motion cues.",
  },
  "tactile-organic": {
    label: "Tactile / organic",
    description: "Soft, rounded and material-feeling interfaces with approachable motion and ambient color fields.",
  },
  "experimental-loud": {
    label: "Experimental / loud",
    description: "Bold, disruptive and culture-led directions that intentionally reject template neatness.",
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
