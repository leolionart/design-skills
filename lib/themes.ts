import type { CSSProperties } from "react";

import {
  styleFamilies,
  type CtaVariant,
  type EmphasisMode,
  type HeroVariant,
  type MediaTreatment,
  type PreviewSilhouette,
  type ProofVariant,
  type RhythmVariant,
  type SectionKind,
  type StyleDensity,
  type StyleFamily,
} from "@/lib/style-families";

type StyleVariables = CSSProperties & Record<`--${string}`, string>;

export type StyleRecipe = {
  heroVariant: HeroVariant;
  rhythm: RhythmVariant;
  proofVariant: ProofVariant;
  ctaVariant: CtaVariant;
  previewSilhouette: PreviewSilhouette;
  density: StyleDensity;
  emphasis: EmphasisMode;
  mediaTreatment: MediaTreatment;
  sectionSequence: SectionKind[];
  structuralTags: string[];
  structuralSignature: {
    hero: string;
    rhythm: string;
    proof: string;
  };
};

export type StyleDefinition = {
  slug: string;
  modeLabel: string;
  pageTitle: string;
  kicker: string;
  summary: string;
  audience: string;
  family: StyleFamily;
  primaryLanguage: string;
  supportingTreatments: string[];
  imageryMode: string;
  avoidList: string[];
  previewBullets: string[];
  keywords: string[];
  featured?: boolean;
  demoAvailable?: boolean;
  previewKind?: string;
  designPromptId?: string;
  vars: StyleVariables;
  recipe: StyleRecipe;
};

export type ThemeDefinition = StyleDefinition;

const baseVars: Record<`--${string}`, string> = {
  "--theme-font-body": "var(--font-manrope), system-ui, sans-serif",
  "--theme-font-display": "var(--font-manrope), system-ui, sans-serif",
  "--theme-font-serif": "var(--font-editorial), Georgia, serif",
  "--theme-font-mono": "var(--font-ibm-plex-mono), ui-monospace, monospace",
  "--theme-radius": "28px",
};

function vars(overrides: Record<`--${string}`, string>): StyleVariables {
  return { ...baseVars, ...overrides };
}

type StyleSeed = Omit<StyleDefinition, "recipe">;

const themeSeeds: StyleSeed[] = [
  {
    slug: "default-high-agency",
    modeLabel: "Default high-agency",
    pageTitle: "Flagship launch with asymmetry",
    kicker: "Canonical flagship / anti-generic product marketing",
    summary:
      "The flagship version keeps the original spirit of the project: an asymmetric launch page with strong hierarchy and section rhythm that keeps changing as you scroll.",
    audience: "Founders, product marketing, brand-forward landing pages",
    family: "high-agency",
    primaryLanguage: "asymmetry",
    supportingTreatments: ["muted colors", "semi-flat depth"],
    imageryMode: "abstract geometrical",
    avoidList: ["overly safe centered heroes", "generic three-column feature grids"],
    previewBullets: [
      "Off-axis hero with strong hierarchy",
      "Multiple layout rhythms that shift from section to section",
      "CTA and proof blocks feel dimensional without turning into card spam",
    ],
    keywords: ["asymmetry", "launch page", "flagship", "anti-generic marketing"],
    featured: true,
    vars: vars({
      "--theme-bg": "#f7f1e8",
      "--theme-bg-alt": "#eadfce",
      "--theme-surface": "rgba(255, 250, 243, 0.8)",
      "--theme-surface-strong": "#fff8ef",
      "--theme-text": "#1e1713",
      "--theme-muted": "#67564d",
      "--theme-border": "rgba(35, 26, 20, 0.12)",
      "--theme-accent": "#c76434",
      "--theme-accent-2": "#23443d",
      "--theme-accent-contrast": "#140e0b",
      "--theme-ring": "rgba(199, 100, 52, 0.36)",
      "--theme-shadow": "0 32px 72px rgba(92, 61, 39, 0.16)",
      "--theme-grid": "rgba(44, 34, 27, 0.06)",
    }),
  },
  {
    slug: "glassmorphism-mature",
    modeLabel: "Mature glassmorphism",
    pageTitle: "Translucent depth for premium interfaces",
    kicker: "Mature glass / layered translucent product surfaces",
    summary:
      "This direction uses blur, translucent panels, and layered depth in a more restrained, mature way instead of relying on flashy glow.",
    audience: "Fintech, AI products, dashboards, premium system interfaces",
    family: "immersive-premium",
    primaryLanguage: "layered translucency",
    supportingTreatments: ["soft border", "aurora tint"],
    imageryMode: "transparent panel UI",
    avoidList: ["low contrast on dense text", "excessive blur that softens content"],
    previewBullets: [
      "Layered frosted-glass surfaces",
      "Cool accents with soft luminous borders",
      "A hero that feels like a premium control surface",
    ],
    keywords: ["glassmorphism ui", "frosted glass", "blur background", "transparent panels"],
    vars: vars({
      "--theme-bg": "#e6eef8",
      "--theme-bg-alt": "#d7e3f3",
      "--theme-surface": "rgba(255, 255, 255, 0.34)",
      "--theme-surface-strong": "rgba(255, 255, 255, 0.56)",
      "--theme-text": "#10243c",
      "--theme-muted": "#4c627b",
      "--theme-border": "rgba(255, 255, 255, 0.45)",
      "--theme-accent": "#4d84f3",
      "--theme-accent-2": "#7fd8f8",
      "--theme-accent-contrast": "#0b1b33",
      "--theme-ring": "rgba(77, 132, 243, 0.32)",
      "--theme-shadow": "0 32px 82px rgba(70, 103, 146, 0.18)",
      "--theme-grid": "rgba(16, 36, 60, 0.06)",
      "--theme-radius": "30px",
    }),
  },
  {
    slug: "neo-brutalism",
    modeLabel: "Neo-brutalism",
    pageTitle: "Hard-edged launch with loud confidence",
    kicker: "Bold border / hard shadow / anti-clean campaign layout",
    summary:
      "This version is intentionally blunt, using thick borders, hard shadows, and a loud palette to give a brand or campaign unmistakable character.",
    audience: "Creative startups, campaign pages, studios, brand sites with a loud personality",
    family: "experimental-loud",
    primaryLanguage: "hard-edged grid",
    supportingTreatments: ["thick borders", "high-contrast palette"],
    imageryMode: "playful brutalist layout",
    avoidList: ["trust-heavy finance UI", "very high information density"],
    previewBullets: [
      "Bold borders and hard shadows",
      "Large, blunt, highly assertive headlines",
      "A layout that feels more like a digital poster than a SaaS page",
    ],
    keywords: ["neo brutalism ui", "bold border", "hard shadow card", "anti clean web design"],
    designPromptId: "neo-brutalism",
    vars: vars({
      "--theme-bg": "#fff5cf",
      "--theme-bg-alt": "#ffdd5d",
      "--theme-surface": "#fffef8",
      "--theme-surface-strong": "#ffffff",
      "--theme-text": "#101010",
      "--theme-muted": "#5a4f39",
      "--theme-border": "#101010",
      "--theme-accent": "#ff5f2d",
      "--theme-accent-2": "#2457ff",
      "--theme-accent-contrast": "#111111",
      "--theme-ring": "rgba(36, 87, 255, 0.28)",
      "--theme-shadow": "8px 8px 0 rgba(16, 16, 16, 0.88)",
      "--theme-grid": "rgba(16, 16, 16, 0.14)",
      "--theme-radius": "18px",
    }),
  },
  {
    slug: "editorial-minimalism",
    modeLabel: "Editorial minimalism",
    pageTitle: "Quiet manifesto with editorial rhythm",
    kicker: "Swiss-inspired / warm monochrome / reading-first",
    summary:
      "Large white space, rhythmic type, hairline borders, and a publication-like tone make the landing page feel like a carefully designed manifesto.",
    audience: "Luxury brands, agencies, portfolios, refined editorial commerce",
    family: "editorial-typography",
    primaryLanguage: "Swiss",
    supportingTreatments: ["warm monochrome", "hairline borders"],
    imageryMode: "lineart",
    avoidList: ["neon accents", "pill-heavy component styling"],
    previewBullets: [
      "Serif headlines with exceptionally clean body text",
      "Generous white space and ultra-thin borders",
      "Quiet CTAs that make the page feel like a manifesto in print",
    ],
    keywords: ["editorial web design", "swiss ui layout", "luxury minimal interface", "grid editorial ui"],
    designPromptId: "swiss-minimalist",
    vars: vars({
      "--theme-bg": "#f5efe6",
      "--theme-bg-alt": "#ede4d8",
      "--theme-surface": "rgba(255, 252, 247, 0.72)",
      "--theme-surface-strong": "#fffdf8",
      "--theme-text": "#1c1713",
      "--theme-muted": "#70655b",
      "--theme-border": "rgba(28, 23, 19, 0.12)",
      "--theme-accent": "#42362c",
      "--theme-accent-2": "#8b6c4d",
      "--theme-accent-contrast": "#f6f0e7",
      "--theme-ring": "rgba(66, 54, 44, 0.22)",
      "--theme-shadow": "0 14px 30px rgba(44, 34, 25, 0.06)",
      "--theme-grid": "rgba(25, 21, 18, 0.05)",
      "--theme-radius": "22px",
      "--theme-font-display": "var(--font-editorial), Georgia, serif",
    }),
  },
  {
    slug: "bento-grid",
    modeLabel: "Bento grid aesthetics",
    pageTitle: "Modular product story in dense tiles",
    kicker: "Rounded modular tiles / dense-but-readable overview",
    summary:
      "This direction uses modular tiles to communicate many benefits on one screen while keeping hierarchy clear and scanning easy.",
    audience: "SaaS, AI tools, feature overviews, product storytelling",
    family: "grid-product",
    primaryLanguage: "modular layouts",
    supportingTreatments: ["varied tile sizes", "rounded containers"],
    imageryMode: "mixed media blocks",
    avoidList: ["lifeless catalog cards", "layout without clear order"],
    previewBullets: [
      "Different tile sizes that control visual rhythm",
      "Many benefits visible in the first view",
      "Great for feature-overview pages",
    ],
    keywords: ["bento grid ui", "modular card website", "feature tile interface", "apple bento grid"],
    vars: vars({
      "--theme-bg": "#eef2fb",
      "--theme-bg-alt": "#dfe8fb",
      "--theme-surface": "rgba(255, 255, 255, 0.82)",
      "--theme-surface-strong": "#ffffff",
      "--theme-text": "#13203f",
      "--theme-muted": "#58658c",
      "--theme-border": "rgba(19, 32, 63, 0.1)",
      "--theme-accent": "#5073f7",
      "--theme-accent-2": "#a15fff",
      "--theme-accent-contrast": "#0b1228",
      "--theme-ring": "rgba(80, 115, 247, 0.28)",
      "--theme-shadow": "0 24px 58px rgba(80, 115, 247, 0.14)",
      "--theme-grid": "rgba(19, 32, 63, 0.06)",
      "--theme-radius": "30px",
    }),
  },
  {
    slug: "dark-glow-aurora",
    modeLabel: "Dark glow / aurora",
    pageTitle: "Dark-canvas launch with luminous atmosphere",
    kicker: "Cyber-luxury / glow edges / aurora fields",
    summary:
      "A dark canvas, aurora glow, and luminous accents create a premium-tech atmosphere that feels cinematic and slightly futuristic while keeping hierarchy under control.",
    audience: "AI, crypto, devtools, gaming-lite, premium tech launches",
    family: "immersive-premium",
    primaryLanguage: "dark atmospheric hero",
    supportingTreatments: ["aurora gradients", "glow edges"],
    imageryMode: "premium dark landing page",
    avoidList: ["glow covering the entire UI", "long-form text on very dark surfaces"],
    previewBullets: [
      "Dark canvas with soft luminous fields",
      "A hero that feels cinematic and future-facing",
      "Well suited to premium tech launches",
    ],
    keywords: ["dark glow ui", "aurora interface", "neon gradient dashboard", "premium dark landing page"],
    designPromptId: "modern-dark",
    vars: vars({
      "--theme-bg": "#0b0f18",
      "--theme-bg-alt": "#111827",
      "--theme-surface": "rgba(22, 28, 45, 0.72)",
      "--theme-surface-strong": "rgba(35, 43, 69, 0.9)",
      "--theme-text": "#eef4ff",
      "--theme-muted": "#a8b6db",
      "--theme-border": "rgba(140, 169, 255, 0.18)",
      "--theme-accent": "#72a2ff",
      "--theme-accent-2": "#44f1ff",
      "--theme-accent-contrast": "#0b1020",
      "--theme-ring": "rgba(114, 162, 255, 0.3)",
      "--theme-shadow": "0 40px 120px rgba(1, 6, 18, 0.56)",
      "--theme-grid": "rgba(162, 183, 255, 0.06)",
    }),
  },
  {
    slug: "claymorphism-soft-3d",
    modeLabel: "Claymorphism / soft 3D",
    pageTitle: "Rounded surfaces with tactile softness",
    kicker: "Puffy layers / toy-like depth / friendly material feel",
    summary:
      "This version feels touchable through puffy surfaces, heavy rounding, and soft depth that resembles molded plastic or pliable clay.",
    audience: "Consumer apps, onboarding, wellness, family products, playful marketing",
    family: "tactile-organic",
    primaryLanguage: "rounded tactile geometry",
    supportingTreatments: ["soft shadow", "pastel material feel"],
    imageryMode: "soft 3D interface",
    avoidList: ["enterprise data UI", "business workflows that need crisp sharpness"],
    previewBullets: [
      "Heavily rounded forms with soft shadows",
      "Pastel color fields that feel approachable",
      "Great for playful landing pages or onboarding-led products",
    ],
    keywords: ["claymorphism ui", "soft 3d interface", "tactile app design", "rounded 3d icons ui"],
    designPromptId: "claymorphism",
    vars: vars({
      "--theme-bg": "#fff3ef",
      "--theme-bg-alt": "#ffe1da",
      "--theme-surface": "#ffece6",
      "--theme-surface-strong": "#fff8f5",
      "--theme-text": "#453036",
      "--theme-muted": "#7f6770",
      "--theme-border": "rgba(127, 103, 112, 0.14)",
      "--theme-accent": "#ff8f72",
      "--theme-accent-2": "#7ac6ff",
      "--theme-accent-contrast": "#45251b",
      "--theme-ring": "rgba(255, 143, 114, 0.28)",
      "--theme-shadow": "0 24px 42px rgba(232, 163, 141, 0.28)",
      "--theme-grid": "rgba(69, 48, 54, 0.05)",
      "--theme-radius": "34px",
    }),
  },
  {
    slug: "immersive-3d-product",
    modeLabel: "3D product rendering",
    pageTitle: "Object-centric hero with cinematic depth",
    kicker: "Floating objects / rendered product scenes / wow-factor",
    summary:
      "This direction uses object presence and spotlighted scenes to turn the landing page into a high-depth product reveal with a strong sense of spectacle.",
    audience: "Hardware, luxury products, AI infra, gaming, product reveal websites",
    family: "immersive-premium",
    primaryLanguage: "object-centric storytelling",
    supportingTreatments: ["depth-heavy hero", "cinematic lighting"],
    imageryMode: "rendered product scene",
    avoidList: ["pages that need direct conversion", "very low-powered target devices"],
    previewBullets: [
      "A hero staged around one primary object",
      "Feature sections that behave like a product reveal sequence",
      "Strong wow-factor from the very first impression",
    ],
    keywords: ["3d website ui", "object centric landing page", "cinematic product website", "interactive 3d interface"],
    vars: vars({
      "--theme-bg": "#11100f",
      "--theme-bg-alt": "#1e1a18",
      "--theme-surface": "rgba(255, 255, 255, 0.06)",
      "--theme-surface-strong": "rgba(255, 255, 255, 0.12)",
      "--theme-text": "#f5ede6",
      "--theme-muted": "#c8bbb0",
      "--theme-border": "rgba(255, 255, 255, 0.14)",
      "--theme-accent": "#d9b07d",
      "--theme-accent-2": "#7f9cff",
      "--theme-accent-contrast": "#17110c",
      "--theme-ring": "rgba(217, 176, 125, 0.3)",
      "--theme-shadow": "0 42px 120px rgba(0, 0, 0, 0.48)",
      "--theme-grid": "rgba(255, 255, 255, 0.05)",
    }),
  },
  {
    slug: "y2k-retro-futurism",
    modeLabel: "Y2K / retro-futurism",
    pageTitle: "Digital nostalgia with glossy tension",
    kicker: "Chrome hints / glossy controls / millennium-era futurism",
    summary:
      "Inspired by early-2000s digital language: shiny, glossy, techno, and nostalgic, but refined through a more contemporary level of craft.",
    audience: "Fashion, music, youth culture, campaign pages, creative portfolios",
    family: "experimental-loud",
    primaryLanguage: "glossy techno collage",
    supportingTreatments: ["retro gradients", "chrome accents"],
    imageryMode: "digital nostalgia web",
    avoidList: ["enterprise UX", "products that need timelessness"],
    previewBullets: [
      "Glossy gradients and chrome motifs",
      "Techno typography with nostalgic accents",
      "A playful tone with a slightly sci-fi retro edge",
    ],
    keywords: ["y2k ui design", "retro futuristic website", "chrome interface", "digital nostalgia web"],
    designPromptId: "retro",
    vars: vars({
      "--theme-bg": "#f3efff",
      "--theme-bg-alt": "#dce0ff",
      "--theme-surface": "rgba(255, 255, 255, 0.82)",
      "--theme-surface-strong": "rgba(255, 255, 255, 0.96)",
      "--theme-text": "#1d1730",
      "--theme-muted": "#625a83",
      "--theme-border": "rgba(29, 23, 48, 0.12)",
      "--theme-accent": "#ff48c4",
      "--theme-accent-2": "#59b3ff",
      "--theme-accent-contrast": "#180f2f",
      "--theme-ring": "rgba(255, 72, 196, 0.28)",
      "--theme-shadow": "0 24px 72px rgba(101, 77, 201, 0.22)",
      "--theme-grid": "rgba(29, 23, 48, 0.06)",
      "--theme-radius": "24px",
    }),
  },
  {
    slug: "anti-design",
    modeLabel: "Anti-design",
    pageTitle: "Intentional disorder with visual tension",
    kicker: "Odd spacing / broken alignment / raw graphic interface",
    summary:
      "This direction deliberately breaks rhythm and alignment to push back against websites that feel overly templated and over-sanitized.",
    audience: "Culture, art, fashion, experimental brands, unconventional portfolios",
    family: "experimental-loud",
    primaryLanguage: "intentional disorder",
    supportingTreatments: ["deliberate asymmetry", "raw typography"],
    imageryMode: "collaged visuals",
    avoidList: ["sensitive onboarding flows", "conversion paths that need extreme smoothness"],
    previewBullets: [
      "Spacing and alignment that intentionally misbehave",
      "A page that feels human and opinionated",
      "Excellent for portfolios or culture-led brand pages",
    ],
    keywords: ["anti design website", "intentional disorder web", "deconstructed ui", "raw graphic interface"],
    vars: vars({
      "--theme-bg": "#f4efe7",
      "--theme-bg-alt": "#e6ddd1",
      "--theme-surface": "rgba(255, 250, 243, 0.84)",
      "--theme-surface-strong": "#fffbf5",
      "--theme-text": "#171310",
      "--theme-muted": "#6f5f52",
      "--theme-border": "rgba(23, 19, 16, 0.16)",
      "--theme-accent": "#d74b24",
      "--theme-accent-2": "#1f4fff",
      "--theme-accent-contrast": "#120d0a",
      "--theme-ring": "rgba(215, 75, 36, 0.28)",
      "--theme-shadow": "0 22px 58px rgba(75, 49, 29, 0.14)",
      "--theme-grid": "rgba(23, 19, 16, 0.06)",
      "--theme-radius": "20px",
    }),
  },
  {
    slug: "clean-saas-gradient",
    modeLabel: "Clean SaaS gradient",
    pageTitle: "Conversion-friendly SaaS clarity",
    kicker: "Clean sections / soft gradients / trust-building hierarchy",
    summary:
      "A common and highly practical product-marketing direction: clean, clear, gently softened, and focused on trust, feature clarity, and conversion.",
    audience: "B2B SaaS, AI products, startup launches, practical product marketing pages",
    family: "grid-product",
    primaryLanguage: "clean modular marketing",
    supportingTreatments: ["soft gradients", "rounded cards"],
    imageryMode: "minimal SaaS design",
    avoidList: ["brands that need a much stronger personality", "template-looking card spam"],
    previewBullets: [
      "Clean sections and easy-to-consume CTAs",
      "A strong benchmark for practical real-world product marketing",
      "Keeps the conversion feel while still looking polished",
    ],
    keywords: ["saas landing page modern", "clean gradient interface", "product marketing page", "b2b website ui"],
    featured: true,
    designPromptId: "saas",
    vars: vars({
      "--theme-bg": "#f7f9ff",
      "--theme-bg-alt": "#edf2ff",
      "--theme-surface": "rgba(255, 255, 255, 0.9)",
      "--theme-surface-strong": "#ffffff",
      "--theme-text": "#18223f",
      "--theme-muted": "#61719b",
      "--theme-border": "rgba(24, 34, 63, 0.09)",
      "--theme-accent": "#5f7cff",
      "--theme-accent-2": "#8fd7ff",
      "--theme-accent-contrast": "#101a33",
      "--theme-ring": "rgba(95, 124, 255, 0.26)",
      "--theme-shadow": "0 20px 52px rgba(95, 124, 255, 0.12)",
      "--theme-grid": "rgba(24, 34, 63, 0.05)",
      "--theme-radius": "28px",
    }),
  },
  {
    slug: "organic-mesh-gradients",
    modeLabel: "Organic mesh gradients",
    pageTitle: "Ambient color fields with soft futurism",
    kicker: "Mesh gradients / blobs / abstract ambient backgrounds",
    summary:
      "This direction uses organic color fields, blobs, and light diffusion to make a modern brand feel more current, soft, and digitally native.",
    audience: "Startups, wellness tech, AI, creator tools, soft-futurist marketing sites",
    family: "tactile-organic",
    primaryLanguage: "ambient gradient field",
    supportingTreatments: ["amorphous blobs", "soft diffusion"],
    imageryMode: "abstract gradient landing page",
    avoidList: ["insufficient contrast", "blobs that obscure the layout structure"],
    previewBullets: [
      "Mesh gradients that feel like an atmosphere of light",
      "Well suited to gentle, current brands",
      "Less tactile than claymorphism, but softer than clean SaaS",
    ],
    keywords: ["mesh gradient ui", "blob interface design", "organic gradient website", "ambient color field web"],
    designPromptId: "organic",
    vars: vars({
      "--theme-bg": "#f7f4ff",
      "--theme-bg-alt": "#e7eeff",
      "--theme-surface": "rgba(255, 255, 255, 0.78)",
      "--theme-surface-strong": "rgba(255, 255, 255, 0.92)",
      "--theme-text": "#201a38",
      "--theme-muted": "#716d98",
      "--theme-border": "rgba(32, 26, 56, 0.1)",
      "--theme-accent": "#8d7dff",
      "--theme-accent-2": "#73d9ff",
      "--theme-accent-contrast": "#201a38",
      "--theme-ring": "rgba(141, 125, 255, 0.24)",
      "--theme-shadow": "0 24px 64px rgba(141, 125, 255, 0.16)",
      "--theme-grid": "rgba(32, 26, 56, 0.05)",
      "--theme-radius": "30px",
    }),
  },
  {
    slug: "premium-monochrome",
    modeLabel: "Premium monochrome",
    pageTitle: "Quiet luxury with restrained depth",
    kicker: "Monochrome refinement / serif-sans pairing / spacious elegance",
    summary:
      "Minimal color and very few effects, but with an emphasis on the precision of type, borders, and white space to create a restrained digital-luxury feel.",
    audience: "Luxury commerce, fashion, architecture, boutique service brands",
    family: "editorial-typography",
    primaryLanguage: "quiet luxury editorial",
    supportingTreatments: ["fine borders", "neutral palette"],
    imageryMode: "art-direction imagery",
    avoidList: ["mass-market pages that need more energy", "feature explanations that become overly dense"],
    previewBullets: [
      "A highly restrained black, white, and neutral palette",
      "Typography and spacing do the work of making it feel expensive",
      "Easy to use for premium founder brands or boutique services",
    ],
    keywords: ["quiet luxury website", "premium monochrome ui", "minimal luxury digital", "refined black white website"],
    featured: true,
    designPromptId: "monochrome",
    vars: vars({
      "--theme-bg": "#f2f0ee",
      "--theme-bg-alt": "#e3dfda",
      "--theme-surface": "rgba(255, 255, 255, 0.72)",
      "--theme-surface-strong": "#fbfbfa",
      "--theme-text": "#171514",
      "--theme-muted": "#5d5956",
      "--theme-border": "rgba(23, 21, 20, 0.1)",
      "--theme-accent": "#1d1b19",
      "--theme-accent-2": "#8c7d72",
      "--theme-accent-contrast": "#f7f4f1",
      "--theme-ring": "rgba(29, 27, 25, 0.18)",
      "--theme-shadow": "0 18px 32px rgba(28, 22, 20, 0.08)",
      "--theme-grid": "rgba(23, 21, 20, 0.05)",
      "--theme-radius": "24px",
      "--theme-font-display": "var(--font-editorial), Georgia, serif",
    }),
  },
  {
    slug: "motion-led-storytelling",
    modeLabel: "Motion-led storytelling",
    pageTitle: "Narrative pacing built for scroll and reveal",
    kicker: "Scroll choreography / sticky narrative / cinematic pacing",
    summary:
      "Even though this demo does not rely on heavy motion, the layout is still organized like a layered reveal journey to suggest storytelling through movement.",
    audience: "Brand launches, campaign microsites, interactive reports, studio showcases",
    family: "immersive-premium",
    primaryLanguage: "narrative motion structure",
    supportingTreatments: ["reveal sequences", "sticky pacing"],
    imageryMode: "interactive narrative design",
    avoidList: ["task-oriented pages", "wow-factor overpowering conversion"],
    previewBullets: [
      "Section flow that suggests scroll choreography",
      "Great for brand launches or interactive storytelling",
      "Uses narrative pacing as an art-direction tool",
    ],
    keywords: ["immersive storytelling website", "motion led web design", "sticky scrollytelling website", "cinematic landing page"],
    vars: vars({
      "--theme-bg": "#10141c",
      "--theme-bg-alt": "#182030",
      "--theme-surface": "rgba(255, 255, 255, 0.05)",
      "--theme-surface-strong": "rgba(255, 255, 255, 0.1)",
      "--theme-text": "#edf1fa",
      "--theme-muted": "#b3bfd9",
      "--theme-border": "rgba(255, 255, 255, 0.12)",
      "--theme-accent": "#8ab3ff",
      "--theme-accent-2": "#ff8bc2",
      "--theme-accent-contrast": "#0d1320",
      "--theme-ring": "rgba(138, 179, 255, 0.28)",
      "--theme-shadow": "0 36px 100px rgba(0, 0, 0, 0.42)",
      "--theme-grid": "rgba(255, 255, 255, 0.05)",
    }),
  },
  {
    slug: "iridescent-holographic-chrome",
    modeLabel: "Iridescent / holographic / chrome",
    pageTitle: "Reflective surfaces with Y2K future polish",
    kicker: "Chrome sheen / holographic highlights / reflective product art",
    summary:
      "This direction is more about reflective material and iridescent effects than about a new layout system. It works well when the brand needs a fashion-tech, music-led, or high-novelty campaign feel.",
    audience: "Fashion-tech, music, campaign microsites, youth culture launches, beauty tech",
    family: "immersive-premium",
    primaryLanguage: "reflective material gradients",
    supportingTreatments: ["chrome accents", "iridescent glow"],
    imageryMode: "reflective surfaces and holographic product shots",
    avoidList: ["products that need very high corporate trust", "highlight overload that creates visual noise"],
    previewBullets: [
      "Chrome surfaces with a soft rainbow sheen",
      "A hero driven more by reflective material than by UI cards",
      "Excellent for campaign art direction or music-tech launches",
    ],
    keywords: ["iridescent", "holographic", "chrome ui", "metallic interface", "reflective surface ui"],
    demoAvailable: true,
    vars: vars({
      "--theme-bg": "#f3f3ff",
      "--theme-bg-alt": "#dfe6ff",
      "--theme-surface": "rgba(255, 255, 255, 0.76)",
      "--theme-surface-strong": "rgba(255, 255, 255, 0.92)",
      "--theme-text": "#1a1830",
      "--theme-muted": "#676487",
      "--theme-border": "rgba(26, 24, 48, 0.1)",
      "--theme-accent": "#9c7dff",
      "--theme-accent-2": "#70dfff",
      "--theme-accent-contrast": "#1a1830",
      "--theme-ring": "rgba(156, 125, 255, 0.24)",
      "--theme-shadow": "0 28px 72px rgba(133, 120, 255, 0.18)",
      "--theme-grid": "rgba(26, 24, 48, 0.05)",
      "--theme-radius": "30px",
    }),
  },
  {
    slug: "cute-alism-kawaii-brutalism",
    modeLabel: "Cute-alism / Kawaii brutalism",
    pageTitle: "Bold geometry softened by playful character",
    kicker: "Friendly bold UI / soft brutalism / character-driven web",
    summary:
      "This blends the weight and boldness of brutalism with a friendlier, cuter, more youthful tone. It leans toward character art, stickers, mascots, and playful product imagery.",
    audience: "Consumer products, youth brands, creator tools, playful onboarding, family apps",
    family: "experimental-loud",
    primaryLanguage: "friendly high-contrast geometry",
    supportingTreatments: ["cute iconography", "soft brutalist blocks"],
    imageryMode: "character-led illustration and playful stock",
    avoidList: ["enterprise dashboards", "contexts that require formal authority"],
    previewBullets: [
      "Bold shapes that still feel soft and playful",
      "Great for mascots, sticker systems, and character art",
      "Especially strong for consumer or youth-facing brands",
    ],
    keywords: ["cute alism", "kawaii brutalism", "playful brutalist ui", "cute geometric interface", "friendly bold ui"],
    demoAvailable: true,
    vars: vars({
      "--theme-bg": "#fff1f5",
      "--theme-bg-alt": "#ffe176",
      "--theme-surface": "#fff8fb",
      "--theme-surface-strong": "#ffffff",
      "--theme-text": "#24142a",
      "--theme-muted": "#765d78",
      "--theme-border": "#24142a",
      "--theme-accent": "#ff5db1",
      "--theme-accent-2": "#52b6ff",
      "--theme-accent-contrast": "#24142a",
      "--theme-ring": "rgba(255, 93, 177, 0.28)",
      "--theme-shadow": "8px 8px 0 rgba(36, 20, 42, 0.82)",
      "--theme-grid": "rgba(36, 20, 42, 0.08)",
      "--theme-radius": "22px",
    }),
  },
  {
    slug: "brutalist-editorial-zine",
    modeLabel: "Brutalist editorial / Zine style",
    pageTitle: "Raw publication energy with deconstructed type",
    kicker: "Zine collage / raw editorial layout / deconstructed typography",
    summary:
      "Sitting between anti-design and typography-first, this direction emphasizes collage, broken rhythm in type, rough texture, and layouts that feel like an independent publication or cultural zine.",
    audience: "Art publications, fashion editorials, culture sites, indie portfolios, magazines",
    family: "experimental-loud",
    primaryLanguage: "collaged editorial tension",
    supportingTreatments: ["raw type layering", "cut-out composition"],
    imageryMode: "scanned paper, cutout stock and deconstructed editorial imagery",
    avoidList: ["conversion pages that require high clarity", "highly standardized business content"],
    previewBullets: [
      "The feel of an independent magazine or cultural poster",
      "Images and text layered like physical cutouts",
      "Strong for brands with a clear artistic point of view",
    ],
    keywords: ["brutalist editorial", "zine style", "editorial brutalism", "raw editorial layout", "deconstructed typography website"],
    demoAvailable: true,
    vars: vars({
      "--theme-bg": "#f3eee6",
      "--theme-bg-alt": "#d84a2a",
      "--theme-surface": "rgba(255, 250, 244, 0.9)",
      "--theme-surface-strong": "#fffdf8",
      "--theme-text": "#12100f",
      "--theme-muted": "#665a53",
      "--theme-border": "#12100f",
      "--theme-accent": "#d84a2a",
      "--theme-accent-2": "#2451ff",
      "--theme-accent-contrast": "#0d0b0a",
      "--theme-ring": "rgba(216, 74, 42, 0.28)",
      "--theme-shadow": "0 20px 42px rgba(32, 20, 14, 0.12)",
      "--theme-grid": "rgba(18, 16, 15, 0.08)",
      "--theme-radius": "18px",
    }),
  },
  {
    slug: "inclusive-accessibility-first",
    modeLabel: "Inclusive design / Accessibility-first UI",
    pageTitle: "High-clarity interfaces with accessible confidence",
    kicker: "High contrast / readable systems / inclusive product clarity",
    summary:
      "This is not only about compliance; it is an art-direction choice where readability, contrast, and generously sized controls become a clear visual identity.",
    audience: "Government, healthcare, education, enterprise tools, public services",
    family: "grid-product",
    primaryLanguage: "high-clarity accessible layout",
    supportingTreatments: ["strong contrast", "large readable controls"],
    imageryMode: "inclusive product photography and simple diagrams",
    avoidList: ["trend-chasing that hurts readability", "too many secondary colors creating noise"],
    previewBullets: [
      "Strong contrast with clearly sized type and controls",
      "Imagery that leans toward real people and real contexts of use",
      "Shows that accessibility can have its own visual identity",
    ],
    keywords: ["inclusive design", "accessibility first ui", "high contrast accessible interface", "readable dashboard ui", "wcag friendly product design"],
    demoAvailable: true,
    vars: vars({
      "--theme-bg": "#f7f5ee",
      "--theme-bg-alt": "#ffe36e",
      "--theme-surface": "rgba(255, 255, 255, 0.94)",
      "--theme-surface-strong": "#ffffff",
      "--theme-text": "#111111",
      "--theme-muted": "#4c4c4c",
      "--theme-border": "rgba(17, 17, 17, 0.18)",
      "--theme-accent": "#0f5fff",
      "--theme-accent-2": "#111111",
      "--theme-accent-contrast": "#ffffff",
      "--theme-ring": "rgba(15, 95, 255, 0.28)",
      "--theme-shadow": "0 18px 34px rgba(17, 17, 17, 0.08)",
      "--theme-grid": "rgba(17, 17, 17, 0.07)",
      "--theme-radius": "20px",
    }),
  },
  {
    slug: "academia-classical",
    modeLabel: "Academia / classical",
    pageTitle: "Scholarly landing pages with library-grade gravitas",
    kicker: "Old-library mood / brass accents / serif authority",
    summary:
      "This direction leans into warm paper, dark wood, and scholarly typography to make a product feel established, intelligent, and deeply considered.",
    audience: "Education, publishing, cultural institutions, premium research products",
    family: "editorial-typography",
    primaryLanguage: "scholarly editorial hierarchy",
    supportingTreatments: ["parchment warmth", "ornate brass accents"],
    imageryMode: "sepia editorial still life",
    avoidList: ["brands that need startup velocity", "ultra-playful consumer launches"],
    previewBullets: [
      "Warm serif hierarchy with institutional credibility",
      "Brass-accented details that feel archival and premium",
      "Best for products that benefit from authority and depth",
    ],
    keywords: ["academia design", "scholarly ui", "classic web", "educational"],
    designPromptId: "academia",
    vars: vars({
      "--theme-bg": "#201915",
      "--theme-bg-alt": "#2d241f",
      "--theme-surface": "rgba(43, 34, 29, 0.86)",
      "--theme-surface-strong": "#332923",
      "--theme-text": "#eadfce",
      "--theme-muted": "#b7a690",
      "--theme-border": "rgba(201, 169, 98, 0.2)",
      "--theme-accent": "#c9a962",
      "--theme-accent-2": "#8b2635",
      "--theme-accent-contrast": "#1b1512",
      "--theme-ring": "rgba(201, 169, 98, 0.3)",
      "--theme-shadow": "0 28px 84px rgba(5, 3, 2, 0.38)",
      "--theme-grid": "rgba(234, 223, 206, 0.06)",
      "--theme-font-display": "var(--font-editorial), Georgia, serif",
    }),
  },
  {
    slug: "cyberpunk-neon",
    modeLabel: "Cyberpunk",
    pageTitle: "Neon interfaces with sci-fi intensity",
    kicker: "Neon glow / glitch energy / futuristic control surfaces",
    summary:
      "This mode pushes the interface toward bright electric contrast, angular surfaces, and dark-canvas spectacle for high-energy speculative-tech launches.",
    audience: "Gaming, creator tools, futuristic campaigns, experimental tech products",
    family: "immersive-premium",
    primaryLanguage: "neon sci-fi contrast",
    supportingTreatments: ["glitch accents", "electric edge glow"],
    imageryMode: "futuristic neon product art",
    avoidList: ["long reading flows", "trust-heavy institutional brands"],
    previewBullets: [
      "Dark canvas punctured by bright electric accents",
      "Best when the brand wants velocity and edge",
      "A strong fit for speculative or game-adjacent tech",
    ],
    keywords: ["cyberpunk", "neon design", "futuristic ui", "sci-fi web"],
    designPromptId: "cyberpunk",
    vars: vars({
      "--theme-bg": "#070b14",
      "--theme-bg-alt": "#10172a",
      "--theme-surface": "rgba(14, 23, 40, 0.78)",
      "--theme-surface-strong": "rgba(20, 33, 58, 0.92)",
      "--theme-text": "#ecfbff",
      "--theme-muted": "#9eb9c6",
      "--theme-border": "rgba(0, 255, 136, 0.2)",
      "--theme-accent": "#00ff88",
      "--theme-accent-2": "#ff33cc",
      "--theme-accent-contrast": "#06110c",
      "--theme-ring": "rgba(0, 255, 136, 0.34)",
      "--theme-shadow": "0 36px 110px rgba(1, 4, 16, 0.62)",
      "--theme-grid": "rgba(236, 251, 255, 0.05)",
    }),
  },
  {
    slug: "maximalism-collage",
    modeLabel: "Maximalism",
    pageTitle: "Layered visual abundance with high-energy composition",
    kicker: "Dense collage / loud color / decorative excess",
    summary:
      "Instead of restraint, this direction uses accumulation: layered surfaces, more color, more motion cues, and more decorative contrast to feel culturally loud.",
    audience: "Fashion, events, culture brands, campaigns, creator-led launches",
    family: "experimental-loud",
    primaryLanguage: "decorative visual overload",
    supportingTreatments: ["sticker-like accents", "layered collage blocks"],
    imageryMode: "cutout visuals and dense editorial composition",
    avoidList: ["minimal B2B products", "flows that require very calm scanning"],
    previewBullets: [
      "A page that feels stacked, layered, and expressive",
      "Useful when the brand should feel abundant, not restrained",
      "Designed for campaigns and culture-forward storytelling",
    ],
    keywords: ["maximalism", "editorial collage", "decorative web", "bold layered design"],
    designPromptId: "maximalism",
    vars: vars({
      "--theme-bg": "#fff2ea",
      "--theme-bg-alt": "#ffd2eb",
      "--theme-surface": "#fff9f5",
      "--theme-surface-strong": "#ffffff",
      "--theme-text": "#25181b",
      "--theme-muted": "#7f5c67",
      "--theme-border": "#25181b",
      "--theme-accent": "#ff5fa2",
      "--theme-accent-2": "#5a5dff",
      "--theme-accent-contrast": "#241318",
      "--theme-ring": "rgba(255, 95, 162, 0.28)",
      "--theme-shadow": "9px 9px 0 rgba(37, 24, 27, 0.82)",
      "--theme-grid": "rgba(37, 24, 27, 0.08)",
      "--theme-radius": "20px",
    }),
  },
  {
    slug: "professional-corporate",
    modeLabel: "Professional",
    pageTitle: "Structured business clarity with trust-first polish",
    kicker: "Professional systems / crisp hierarchy / enterprise confidence",
    summary:
      "This direction is intentionally controlled and practical, prioritizing trust, hierarchy, and information legibility over novelty-heavy art direction.",
    audience: "Consulting, enterprise software, fintech, operational B2B products",
    family: "grid-product",
    primaryLanguage: "trust-first business layout",
    supportingTreatments: ["controlled blue accents", "crisp card hierarchy"],
    imageryMode: "executive product photography and diagrams",
    avoidList: ["youth-culture launches", "brands that need a disruptive first impression"],
    previewBullets: [
      "Clear hierarchy built for decision-makers and buyers",
      "A reliable direction for serious B2B communication",
      "Balances polish with operational readability",
    ],
    keywords: ["professional ui", "corporate design", "trust-driven layout", "business product site"],
    designPromptId: "professional",
    vars: vars({
      "--theme-bg": "#f4f7fb",
      "--theme-bg-alt": "#e6edf7",
      "--theme-surface": "rgba(255, 255, 255, 0.88)",
      "--theme-surface-strong": "#ffffff",
      "--theme-text": "#14233c",
      "--theme-muted": "#60728d",
      "--theme-border": "rgba(20, 35, 60, 0.1)",
      "--theme-accent": "#0f6bff",
      "--theme-accent-2": "#0f8f93",
      "--theme-accent-contrast": "#ffffff",
      "--theme-ring": "rgba(15, 107, 255, 0.24)",
      "--theme-shadow": "0 24px 56px rgba(34, 62, 102, 0.12)",
      "--theme-grid": "rgba(20, 35, 60, 0.05)",
      "--theme-radius": "24px",
    }),
  },
  {
    slug: "terminal-interface",
    modeLabel: "Terminal",
    pageTitle: "Command-line aesthetics for technical launches",
    kicker: "Monospace UI / command-line cues / hacker precision",
    summary:
      "This style uses monospace rhythm, terminal-green contrast, and technical layout blocks to make the page feel like an operational console rather than a generic marketing site.",
    audience: "Developer tools, infrastructure, security products, technical communities",
    family: "grid-product",
    primaryLanguage: "terminal-grade technical hierarchy",
    supportingTreatments: ["monospace labels", "console contrast"],
    imageryMode: "CLI screens and system diagrams",
    avoidList: ["consumer brands needing warmth", "soft lifestyle storytelling"],
    previewBullets: [
      "Monospace-dominant rhythm with strong scanability",
      "Feels operational and credible for technical buyers",
      "Useful for infra, security, and devtool launches",
    ],
    keywords: ["terminal design", "cli ui", "hacker aesthetic", "monospace"],
    designPromptId: "terminal",
    vars: vars({
      "--theme-bg": "#08110d",
      "--theme-bg-alt": "#0f1b16",
      "--theme-surface": "rgba(11, 22, 17, 0.92)",
      "--theme-surface-strong": "#11221a",
      "--theme-text": "#ddffe8",
      "--theme-muted": "#8cb7a0",
      "--theme-border": "rgba(78, 181, 120, 0.18)",
      "--theme-accent": "#4be37e",
      "--theme-accent-2": "#98ffcc",
      "--theme-accent-contrast": "#06110b",
      "--theme-ring": "rgba(75, 227, 126, 0.26)",
      "--theme-shadow": "0 28px 72px rgba(1, 8, 5, 0.38)",
      "--theme-grid": "rgba(221, 255, 232, 0.05)",
      "--theme-font-display": "var(--font-ibm-plex-mono), ui-monospace, monospace",
      "--theme-font-body": "var(--font-ibm-plex-mono), ui-monospace, monospace",
    }),
  },
  {
    slug: "web3-orange-ledger",
    modeLabel: "Web3",
    pageTitle: "Ledger-inspired launches with crypto heat",
    kicker: "Bitcoin orange / grid overlays / glowing trust cues",
    summary:
      "This direction combines dark operational surfaces with orange-gold glow to make the page feel like a live ledger, technical terminal, and premium crypto launch at once.",
    audience: "Crypto, blockchain tooling, wallet products, trading or protocol launches",
    family: "immersive-premium",
    primaryLanguage: "crypto control-surface atmosphere",
    supportingTreatments: ["orange luminescence", "network-grid overlays"],
    imageryMode: "blockchain diagrams and dark product renders",
    avoidList: ["products needing regulatory calm", "general audiences unfamiliar with crypto language"],
    previewBullets: [
      "Orange and gold glow over dark technical surfaces",
      "Feels fast, precise, and finance-adjacent",
      "Best for protocol, wallet, and trading experiences",
    ],
    keywords: ["web3", "blockchain ui", "crypto landing page", "bitcoin orange"],
    designPromptId: "web3",
    vars: vars({
      "--theme-bg": "#0a0d12",
      "--theme-bg-alt": "#131922",
      "--theme-surface": "rgba(18, 22, 30, 0.78)",
      "--theme-surface-strong": "rgba(24, 31, 42, 0.92)",
      "--theme-text": "#f8f5ef",
      "--theme-muted": "#b7b0a3",
      "--theme-border": "rgba(247, 147, 26, 0.16)",
      "--theme-accent": "#f7931a",
      "--theme-accent-2": "#ffd45c",
      "--theme-accent-contrast": "#120d08",
      "--theme-ring": "rgba(247, 147, 26, 0.3)",
      "--theme-shadow": "0 42px 120px rgba(0, 0, 0, 0.52)",
      "--theme-grid": "rgba(248, 245, 239, 0.05)",
    }),
  },
  {
    slug: "vaporwave-dreamscape",
    modeLabel: "Vaporwave",
    pageTitle: "Dreamlike nostalgia in neon sunset gradients",
    kicker: "Magenta-cyan glow / digital nostalgia / dream-state UI",
    summary:
      "This style leans into synthetic sunsets, glossy nostalgia, and dreamy gradients to create a softer, more surreal version of retro-futurist web direction.",
    audience: "Music, youth culture, campaigns, creator brands, playful product launches",
    family: "experimental-loud",
    primaryLanguage: "dreamy neon nostalgia",
    supportingTreatments: ["sunset gradients", "glossy retro glow"],
    imageryMode: "dreamlike retro-future artwork",
    avoidList: ["formal enterprise brands", "information-dense operational products"],
    previewBullets: [
      "Magenta, cyan, and lilac gradients with strong mood",
      "Feels more dreamy than cyberpunk and more synthetic than retro",
      "Ideal for music-tech, creator, and culture-led pages",
    ],
    keywords: ["vaporwave", "neon nostalgia", "retro future web", "gradient dreamscape"],
    designPromptId: "vaporwave",
    vars: vars({
      "--theme-bg": "#140b26",
      "--theme-bg-alt": "#231042",
      "--theme-surface": "rgba(36, 18, 66, 0.7)",
      "--theme-surface-strong": "rgba(54, 28, 96, 0.88)",
      "--theme-text": "#f7efff",
      "--theme-muted": "#d4b8ef",
      "--theme-border": "rgba(255, 0, 255, 0.18)",
      "--theme-accent": "#ff4de3",
      "--theme-accent-2": "#66d7ff",
      "--theme-accent-contrast": "#16081f",
      "--theme-ring": "rgba(255, 77, 227, 0.28)",
      "--theme-shadow": "0 32px 96px rgba(10, 5, 20, 0.52)",
      "--theme-grid": "rgba(247, 239, 255, 0.05)",
    }),
  },
  {
    slug: "botanical-editorial",
    modeLabel: "Botanical",
    pageTitle: "Organic editorial systems with earth-toned calm",
    kicker: "Earthy palette / natural texture / botanical softness",
    summary:
      "This mode uses clay, moss, stem, and paper references to make the interface feel grounded, restorative, and art-directed through natural materials.",
    audience: "Wellness, beauty, hospitality, sustainable brands, lifestyle commerce",
    family: "tactile-organic",
    primaryLanguage: "earth-toned organic calm",
    supportingTreatments: ["botanical texture", "natural asymmetry"],
    imageryMode: "botanical product photography",
    avoidList: ["hard-tech products", "brands that need a highly synthetic tone"],
    previewBullets: [
      "Natural materials replace tech gloss as the main mood cue",
      "Strong for lifestyle products and premium wellness brands",
      "Balances softness with enough editorial control to feel premium",
    ],
    keywords: ["botanical design", "earthy ui", "wellness web", "natural editorial"],
    designPromptId: "botanical",
    vars: vars({
      "--theme-bg": "#f5efe8",
      "--theme-bg-alt": "#e5d5c8",
      "--theme-surface": "rgba(255, 251, 246, 0.82)",
      "--theme-surface-strong": "#fffdf9",
      "--theme-text": "#2f2e24",
      "--theme-muted": "#716b5d",
      "--theme-border": "rgba(93, 112, 82, 0.16)",
      "--theme-accent": "#c27b66",
      "--theme-accent-2": "#5d7052",
      "--theme-accent-contrast": "#fff8f3",
      "--theme-ring": "rgba(194, 123, 102, 0.24)",
      "--theme-shadow": "0 24px 56px rgba(96, 73, 56, 0.12)",
      "--theme-grid": "rgba(47, 46, 36, 0.05)",
      "--theme-radius": "30px",
    }),
  },
  {
    slug: "sketch-wireframe",
    modeLabel: "Sketch",
    pageTitle: "Hand-drawn interface language with deliberate roughness",
    kicker: "Marker-line UI / paper texture / concept-board energy",
    summary:
      "This style intentionally keeps the interface rougher and more hand-shaped, using marker-like edges and concept-board cues to feel like a crafted prototype brought to life.",
    audience: "Studios, creative tooling, workshops, educational products, portfolio launches",
    family: "experimental-loud",
    primaryLanguage: "hand-drawn concept-board rhythm",
    supportingTreatments: ["marker borders", "paper-cut accents"],
    imageryMode: "sketched diagrams and annotated mockups",
    avoidList: ["high-trust financial products", "ultra-polished luxury launches"],
    previewBullets: [
      "Roughened lines make the page feel authored by hand",
      "Ideal when polish would make the brand feel too corporate",
      "Best for creative tools and workshop-like experiences",
    ],
    keywords: ["sketch ui", "hand drawn interface", "concept board design", "marker layout"],
    designPromptId: "sketch",
    vars: vars({
      "--theme-bg": "#fbf5eb",
      "--theme-bg-alt": "#f2dfc7",
      "--theme-surface": "#fffaf2",
      "--theme-surface-strong": "#ffffff",
      "--theme-text": "#2a1d18",
      "--theme-muted": "#7d675d",
      "--theme-border": "#2a1d18",
      "--theme-accent": "#ff4d4d",
      "--theme-accent-2": "#2f65ff",
      "--theme-accent-contrast": "#1d100c",
      "--theme-ring": "rgba(255, 77, 77, 0.26)",
      "--theme-shadow": "7px 7px 0 rgba(42, 29, 24, 0.78)",
      "--theme-grid": "rgba(42, 29, 24, 0.08)",
      "--theme-radius": "18px",
    }),
  },
  {
    slug: "bauhaus-geometric",
    modeLabel: "Bauhaus",
    pageTitle: "Primary-color geometry with modular visual discipline",
    kicker: "Geometric rigor / primary color blocks / modernist composition",
    summary:
      "Bauhaus here means strong geometry, modular grids, and a disciplined use of primary color so the interface feels graphic, rational, and unmistakably designed.",
    audience: "Studios, portfolios, creative brands, product showcases with strong visual identity",
    family: "grid-product",
    primaryLanguage: "modernist geometric modularity",
    supportingTreatments: ["primary color accents", "strict geometric framing"],
    imageryMode: "geometric illustration and cropped product scenes",
    avoidList: ["soft lifestyle brands", "contexts that need subdued neutrality"],
    previewBullets: [
      "Primary colors create instant recognizability",
      "Grid rhythm feels rational, graphic, and crafted",
      "Useful for design-led brands that want modernist clarity",
    ],
    keywords: ["bauhaus", "geometric design", "modernist web", "primary color ui"],
    designPromptId: "bauhaus",
    vars: vars({
      "--theme-bg": "#f6f1e7",
      "--theme-bg-alt": "#ece3d3",
      "--theme-surface": "rgba(255, 255, 255, 0.86)",
      "--theme-surface-strong": "#fffdf9",
      "--theme-text": "#121212",
      "--theme-muted": "#5b5b5b",
      "--theme-border": "rgba(18, 18, 18, 0.12)",
      "--theme-accent": "#e3342f",
      "--theme-accent-2": "#2457ff",
      "--theme-accent-contrast": "#ffffff",
      "--theme-ring": "rgba(227, 52, 47, 0.26)",
      "--theme-shadow": "0 20px 50px rgba(18, 18, 18, 0.1)",
      "--theme-grid": "rgba(18, 18, 18, 0.06)",
      "--theme-radius": "18px",
    }),
  },
  {
    slug: "art-deco-luxe",
    modeLabel: "Art Deco",
    pageTitle: "Ornamental luxury with geometric gold precision",
    kicker: "Deco symmetry / black-gold glamour / ornamental elegance",
    summary:
      "Art Deco combines luxury contrast and geometric ornament, pushing the page toward cinematic hospitality, premium events, and old-world glamour with modern control.",
    audience: "Hospitality, premium events, fashion, luxury commerce, founder brands",
    family: "editorial-typography",
    primaryLanguage: "ornamental geometric luxury",
    supportingTreatments: ["gold linework", "symmetric framing"],
    imageryMode: "cinematic luxury photography",
    avoidList: ["utility-first B2B pages", "products that need casual friendliness"],
    previewBullets: [
      "Gold geometry frames content like a premium invitation",
      "Luxurious without relying on heavy gradients or glass",
      "Strong fit for hospitality, fashion, and premium launches",
    ],
    keywords: ["art deco", "luxury geometric design", "gold line ui", "ornamental web"],
    designPromptId: "art-deco",
    vars: vars({
      "--theme-bg": "#141214",
      "--theme-bg-alt": "#201b1f",
      "--theme-surface": "rgba(25, 23, 27, 0.82)",
      "--theme-surface-strong": "#2a2329",
      "--theme-text": "#f4ead6",
      "--theme-muted": "#c3b49d",
      "--theme-border": "rgba(212, 175, 55, 0.24)",
      "--theme-accent": "#d4af37",
      "--theme-accent-2": "#f0d78c",
      "--theme-accent-contrast": "#1a1410",
      "--theme-ring": "rgba(212, 175, 55, 0.3)",
      "--theme-shadow": "0 32px 96px rgba(0, 0, 0, 0.48)",
      "--theme-grid": "rgba(244, 234, 214, 0.05)",
      "--theme-font-display": "var(--font-editorial), Georgia, serif",
    }),
  },
];

const familyDefaults: Record<
  StyleFamily,
  Omit<StyleRecipe, "structuralSignature" | "structuralTags">
> = {
  "high-agency": {
    heroVariant: "launch-swing",
    rhythm: "swing",
    proofVariant: "metric-band",
    ctaVariant: "assertive-dual",
    previewSilhouette: "off-axis",
    density: "balanced",
    emphasis: "grid",
    mediaTreatment: "abstract",
    sectionSequence: ["hero", "proof", "features", "quote", "details"],
  },
  "editorial-typography": {
    heroVariant: "manifesto-split",
    rhythm: "reading",
    proofVariant: "editorial-notes",
    ctaVariant: "quiet-links",
    previewSilhouette: "monolith",
    density: "airy",
    emphasis: "type",
    mediaTreatment: "type-led",
    sectionSequence: ["hero", "features", "quote", "details", "proof"],
  },
  "grid-product": {
    heroVariant: "modular-overview",
    rhythm: "scan",
    proofVariant: "tile-matrix",
    ctaVariant: "utility-stack",
    previewSilhouette: "tiles",
    density: "dense",
    emphasis: "grid",
    mediaTreatment: "diagrammatic",
    sectionSequence: ["hero", "proof", "features", "details", "quote"],
  },
  "immersive-premium": {
    heroVariant: "control-surface",
    rhythm: "reveal",
    proofVariant: "reveal-cards",
    ctaVariant: "luxury-prompt",
    previewSilhouette: "spotlight",
    density: "balanced",
    emphasis: "atmosphere",
    mediaTreatment: "ambient",
    sectionSequence: ["hero", "proof", "features", "quote", "details"],
  },
  "tactile-organic": {
    heroVariant: "soft-stack",
    rhythm: "flow",
    proofVariant: "soft-bullets",
    ctaVariant: "gentle-invite",
    previewSilhouette: "orbital",
    density: "airy",
    emphasis: "material",
    mediaTreatment: "ambient",
    sectionSequence: ["hero", "details", "features", "quote", "proof"],
  },
  "experimental-loud": {
    heroVariant: "poster-stack",
    rhythm: "collision",
    proofVariant: "signal-cards",
    ctaVariant: "culture-switch",
    previewSilhouette: "collage",
    density: "dense",
    emphasis: "poster",
    mediaTreatment: "collaged",
    sectionSequence: ["hero", "proof", "features", "details", "quote"],
  },
};

const styleRecipeOverrides: Record<
  string,
  Partial<Omit<StyleRecipe, "structuralSignature" | "structuralTags">>
> = {
  "editorial-minimalism": {
    proofVariant: "folio-columns",
  },
  "premium-monochrome": {
    heroVariant: "ornamental-frame",
    proofVariant: "folio-columns",
    ctaVariant: "luxury-prompt",
    previewSilhouette: "ornament",
    emphasis: "material",
    mediaTreatment: "photographic",
  },
  "academia-classical": {
    heroVariant: "scholarly-archive",
    proofVariant: "folio-columns",
    previewSilhouette: "ornament",
    emphasis: "material",
    mediaTreatment: "ornamental",
  },
  "art-deco-luxe": {
    heroVariant: "ornamental-frame",
    proofVariant: "keyword-badges",
    ctaVariant: "luxury-prompt",
    previewSilhouette: "ornament",
    mediaTreatment: "ornamental",
  },
  "bento-grid": {
    heroVariant: "modular-overview",
    proofVariant: "tile-matrix",
    density: "dense",
  },
  "clean-saas-gradient": {
    heroVariant: "modular-overview",
    proofVariant: "comparison-grid",
    density: "balanced",
    emphasis: "grid",
    mediaTreatment: "photographic",
  },
  "professional-corporate": {
    heroVariant: "boardroom-brief",
    proofVariant: "comparison-grid",
    previewSilhouette: "tiles",
    density: "balanced",
    emphasis: "grid",
    mediaTreatment: "photographic",
  },
  "terminal-interface": {
    heroVariant: "neon-console",
    proofVariant: "comparison-grid",
    previewSilhouette: "console",
    emphasis: "type",
  },
  "bauhaus-geometric": {
    heroVariant: "geometric-grid",
    proofVariant: "tile-matrix",
    previewSilhouette: "tiles",
    emphasis: "grid",
  },
  "inclusive-accessibility-first": {
    heroVariant: "boardroom-brief",
    proofVariant: "comparison-grid",
    density: "balanced",
    emphasis: "type",
    mediaTreatment: "photographic",
  },
  "glassmorphism-mature": {
    heroVariant: "control-surface",
    proofVariant: "metric-band",
    previewSilhouette: "orbital",
    emphasis: "material",
  },
  "dark-glow-aurora": {
    heroVariant: "control-surface",
    proofVariant: "reveal-cards",
    previewSilhouette: "orbital",
    emphasis: "atmosphere",
  },
  "immersive-3d-product": {
    heroVariant: "object-spotlight",
    proofVariant: "object-spec",
    previewSilhouette: "spotlight",
    emphasis: "object",
    mediaTreatment: "rendered-object",
  },
  "motion-led-storytelling": {
    heroVariant: "narrative-reveal",
    proofVariant: "reveal-cards",
    emphasis: "atmosphere",
    mediaTreatment: "ambient",
  },
  "cyberpunk-neon": {
    heroVariant: "neon-console",
    proofVariant: "object-spec",
    previewSilhouette: "console",
    emphasis: "material",
    mediaTreatment: "diagrammatic",
  },
  "web3-orange-ledger": {
    heroVariant: "neon-console",
    proofVariant: "metric-band",
    previewSilhouette: "console",
    emphasis: "object",
    mediaTreatment: "diagrammatic",
  },
  "iridescent-holographic-chrome": {
    heroVariant: "object-spotlight",
    proofVariant: "object-spec",
    previewSilhouette: "orbital",
    emphasis: "material",
    mediaTreatment: "rendered-object",
  },
  "claymorphism-soft-3d": {
    heroVariant: "soft-stack",
    proofVariant: "soft-bullets",
    previewSilhouette: "stacked-cards",
    emphasis: "material",
  },
  "organic-mesh-gradients": {
    heroVariant: "ambient-cloud",
    emphasis: "atmosphere",
    mediaTreatment: "ambient",
  },
  "botanical-editorial": {
    heroVariant: "earthy-asymmetry",
    proofVariant: "editorial-notes",
    previewSilhouette: "stacked-cards",
    emphasis: "material",
    mediaTreatment: "photographic",
  },
  "neo-brutalism": {
    heroVariant: "poster-stack",
    proofVariant: "signal-cards",
    previewSilhouette: "poster",
    emphasis: "poster",
  },
  "y2k-retro-futurism": {
    heroVariant: "glossy-badge-cloud",
    previewSilhouette: "collage",
    emphasis: "material",
    mediaTreatment: "ambient",
  },
  "anti-design": {
    heroVariant: "poster-stack",
    previewSilhouette: "collage",
    emphasis: "poster",
    mediaTreatment: "collaged",
  },
  "maximalism-collage": {
    heroVariant: "poster-stack",
    proofVariant: "comparison-grid",
    previewSilhouette: "collage",
    emphasis: "poster",
    mediaTreatment: "collaged",
  },
  "vaporwave-dreamscape": {
    heroVariant: "glossy-badge-cloud",
    previewSilhouette: "collage",
    emphasis: "material",
    mediaTreatment: "ambient",
  },
  "cute-alism-kawaii-brutalism": {
    heroVariant: "glossy-badge-cloud",
    previewSilhouette: "stacked-cards",
    emphasis: "material",
    mediaTreatment: "photographic",
  },
  "brutalist-editorial-zine": {
    heroVariant: "poster-stack",
    proofVariant: "comparison-grid",
    previewSilhouette: "collage",
    emphasis: "poster",
    mediaTreatment: "collaged",
  },
  "sketch-wireframe": {
    heroVariant: "handmade-board",
    previewSilhouette: "stacked-cards",
    emphasis: "type",
    mediaTreatment: "hand-drawn",
  },
};

function toStructuralSignature(recipe: Omit<StyleRecipe, "structuralSignature" | "structuralTags">) {
  return {
    hero: recipe.heroVariant.replace(/-/g, " "),
    rhythm: `${recipe.rhythm} · ${recipe.density}`,
    proof: recipe.proofVariant.replace(/-/g, " "),
  };
}

function toStructuralTags(recipe: Omit<StyleRecipe, "structuralSignature" | "structuralTags">) {
  return [
    recipe.heroVariant,
    recipe.rhythm,
    recipe.proofVariant,
    recipe.ctaVariant,
    recipe.previewSilhouette,
    recipe.density,
    recipe.emphasis,
    recipe.mediaTreatment,
    ...recipe.sectionSequence,
  ].map((item) => item.replace(/-/g, " "));
}

function assertRecipe(style: StyleSeed, recipe: Omit<StyleRecipe, "structuralSignature" | "structuralTags">) {
  const constraints = styleFamilies[style.family].constraints;

  if (!constraints.heroVariants.includes(recipe.heroVariant)) {
    throw new Error(`Invalid heroVariant \"${recipe.heroVariant}\" for ${style.slug}`);
  }

  if (!constraints.rhythms.includes(recipe.rhythm)) {
    throw new Error(`Invalid rhythm \"${recipe.rhythm}\" for ${style.slug}`);
  }

  if (!constraints.proofVariants.includes(recipe.proofVariant)) {
    throw new Error(`Invalid proofVariant \"${recipe.proofVariant}\" for ${style.slug}`);
  }

  if (!constraints.ctaVariants.includes(recipe.ctaVariant)) {
    throw new Error(`Invalid ctaVariant \"${recipe.ctaVariant}\" for ${style.slug}`);
  }

  if (!constraints.previewSilhouettes.includes(recipe.previewSilhouette)) {
    throw new Error(`Invalid previewSilhouette \"${recipe.previewSilhouette}\" for ${style.slug}`);
  }

  if (!constraints.densityModes.includes(recipe.density)) {
    throw new Error(`Invalid density \"${recipe.density}\" for ${style.slug}`);
  }

  if (!constraints.emphasisModes.includes(recipe.emphasis)) {
    throw new Error(`Invalid emphasis \"${recipe.emphasis}\" for ${style.slug}`);
  }

  if (!constraints.mediaTreatments.includes(recipe.mediaTreatment)) {
    throw new Error(`Invalid mediaTreatment \"${recipe.mediaTreatment}\" for ${style.slug}`);
  }

  if (recipe.sectionSequence.length < 3 || recipe.sectionSequence[0] !== "hero") {
    throw new Error(`Invalid sectionSequence for ${style.slug}`);
  }
}

function buildRecipe(style: StyleSeed): StyleRecipe {
  const recipe = {
    ...familyDefaults[style.family],
    ...styleRecipeOverrides[style.slug],
  };

  assertRecipe(style, recipe);

  return {
    ...recipe,
    structuralSignature: toStructuralSignature(recipe),
    structuralTags: toStructuralTags(recipe),
  };
}

function assertUniqueSlugs(items: StyleSeed[]) {
  const seen = new Set<string>();

  for (const item of items) {
    if (seen.has(item.slug)) {
      throw new Error(`Duplicate style slug: ${item.slug}`);
    }

    seen.add(item.slug);
  }
}

assertUniqueSlugs(themeSeeds);

export const themes: StyleDefinition[] = themeSeeds.map((style) => ({
  ...style,
  recipe: buildRecipe(style),
}));

export const styles = themes;
export const demoStyles = styles.filter((style) => style.demoAvailable !== false);
export const styleSlugs = styles.map((style) => style.slug);
export const demoStyleSlugs = demoStyles.map((style) => style.slug);
export const featuredStyles = demoStyles.filter((style) => style.featured);
export const themeSlugs = demoStyleSlugs;

export function getStyleBySlug(slug: string) {
  return styles.find((style) => style.slug === slug);
}

export function getThemeBySlug(slug: string) {
  return getStyleBySlug(slug);
}
