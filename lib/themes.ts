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
  "--theme-button-radius": "999px",
  "--theme-button-border-width": "1px",
  "--theme-button-border-style": "solid",
  "--theme-button-letter-spacing": "0.02em",
  "--theme-button-text-transform": "none",
  "--theme-button-font": "var(--theme-font-body)",
  "--theme-button-font-weight": "600",
  "--theme-button-shadow": "var(--theme-shadow)",
  "--theme-button-shadow-secondary": "none",
  "--theme-shape-radius": "18px",
  "--theme-shape-outline-width": "1px",
  "--theme-shape-outline-style": "solid",
};

function vars(overrides: Record<`--${string}`, string>): StyleVariables {
  return { ...baseVars, ...overrides };
}

type StyleSeed = Omit<StyleDefinition, "recipe">;

const themeSeeds: StyleSeed[] = [
  {
    slug: "academia",
    modeLabel: "Academia",
    pageTitle: "Academia aesthetic with warm paper texture and classic scholarly serif type",
    kicker: "Scholarly / paper / classic serif",
    summary: "An academic aesthetic with traditional serifs, warm paper textures, and crimson-gold accents that evoke old libraries.",
    audience: "Education, publishing, cultural institutions, and knowledge-led brands",
    family: "editorial-typography",
    primaryLanguage: "Traditional serif typography, paper materiality, and crimson-gold accents",
    supportingTreatments: [
      "Paper grain",
      "Classic serif",
      "Archival framing"
    ],
    imageryMode: "Old libraries, books, parchment, and archival academic details",
    avoidList: [
      "Classical ornament pushed until it feels overly nostalgic",
      "A palette so muted that contrast and legibility suffer"
    ],
    previewBullets: [
      "Academic",
      "Warm paper",
      "Classic serif"
    ],
    keywords: [
      "academia",
      "old library",
      "paper texture",
      "traditional serif",
      "crimson gold"
    ],
    featured: false,
    demoAvailable: true,
    vars: vars({
      "--theme-bg": "hsl(253 35% 96%)",
      "--theme-bg-alt": "hsl(253 28% 92%)",
      "--theme-surface": "hsl(0 0% 100% / 0.75)",
      "--theme-surface-strong": "hsl(0 0% 100%)",
      "--theme-text": "hsl(291 18% 14%)",
      "--theme-muted": "hsl(291 14% 36%)",
      "--theme-border": "hsl(291 18% 18% / 0.12)",
      "--theme-accent": "hsl(253 34% 28%)",
      "--theme-accent-2": "hsl(83 38% 42%)",
      "--theme-accent-contrast": "hsl(38 62% 94%)",
      "--theme-ring": "hsl(253 28% 28% / 0.22)",
      "--theme-shadow": "0 16px 34px rgba(23, 20, 16, 0.08)",
      "--theme-grid": "hsl(291 18% 20% / 0.06)",
      "--theme-font-display": "var(--font-editorial), Georgia, serif",
    }),
  },
  {
    slug: "art-deco",
    modeLabel: "Art Deco",
    pageTitle: "Luxurious Art Deco direction with geometric symmetry and metallic accents",
    kicker: "Symmetry / metallic / Gatsby elegance",
    summary: "An Art Deco direction of symmetrical geometry, metallic gold accents, and Gatsby-era architectural elegance.",
    audience: "Luxury hospitality, jewelry, heritage fashion, and premium editorial brands",
    family: "grid-product",
    primaryLanguage: "Architectural symmetry, geometric linework, and decorative metallic shine",
    supportingTreatments: [
      "Sunburst motifs",
      "Metallic lines",
      "Ornamental framing"
    ],
    imageryMode: "Sunbursts, ornamental frames, and Gatsby-era architectural motifs",
    avoidList: [
      "Ornament so dense that the layout loses elegance",
      "Overused metallic accents that feel kitsch"
    ],
    previewBullets: [
      "Art Deco",
      "Elegant geometry",
      "Metallic gold"
    ],
    keywords: [
      "art deco",
      "gatsby",
      "metallic gold",
      "architectural symmetry",
      "luxury heritage"
    ],
    featured: false,
    demoAvailable: true,
    vars: vars({
      "--theme-bg": "hsl(183 60% 95%)",
      "--theme-bg-alt": "hsl(221 56% 91%)",
      "--theme-surface": "hsl(0 0% 100% / 0.95)",
      "--theme-surface-strong": "hsl(0 0% 100%)",
      "--theme-text": "hsl(13 45% 14%)",
      "--theme-muted": "hsl(13 22% 36%)",
      "--theme-border": "hsl(13 26% 24% / 0.12)",
      "--theme-accent": "hsl(221 72% 54%)",
      "--theme-accent-2": "hsl(13 72% 48%)",
      "--theme-accent-contrast": "hsl(0 0% 100%)",
      "--theme-ring": "hsl(221 80% 54% / 0.3)",
      "--theme-shadow": "0 14px 34px rgba(14, 26, 48, 0.12)",
      "--theme-grid": "hsl(13 30% 22% / 0.06)",
    }),
  },
  {
    slug: "botanical",
    modeLabel: "Botanical",
    pageTitle: "Earthy botanical style for wellness brands and soft editorial experiences",
    kicker: "Organic / earthy / soft luxury",
    summary: "A soft earthy-natural direction with organic forms, paper grain texture, and refined serif typography.",
    audience: "Wellness, beauty, premium lifestyle, and nature-led editorial brands",
    family: "tactile-organic",
    primaryLanguage: "Organic shapes, paper texture, and refined serif typography",
    supportingTreatments: [
      "Paper grain",
      "Organic frames",
      "Soft serif accents"
    ],
    imageryMode: "Botanical details, natural still lifes, and warm paper surfaces",
    avoidList: [
      "Overly saturated color that breaks the earthy mood",
      "Geometry that feels too rigid or mechanical"
    ],
    previewBullets: [
      "Natural",
      "Earthy",
      "Soft luxury"
    ],
    keywords: [
      "botanical",
      "earthy tones",
      "organic shapes",
      "paper grain",
      "natural luxury"
    ],
    featured: false,
    demoAvailable: true,
    vars: vars({
      "--theme-bg": "hsl(185 75% 95%)",
      "--theme-bg-alt": "hsl(223 68% 91%)",
      "--theme-surface": "hsl(0 0% 100% / 0.72)",
      "--theme-surface-strong": "hsl(0 0% 100% / 0.92)",
      "--theme-text": "hsl(223 24% 18%)",
      "--theme-muted": "hsl(223 14% 43%)",
      "--theme-border": "hsl(223 34% 62% / 0.3)",
      "--theme-accent": "hsl(15 76% 58%)",
      "--theme-accent-2": "hsl(185 72% 62%)",
      "--theme-accent-contrast": "hsl(0 0% 100%)",
      "--theme-ring": "hsl(15 86% 56% / 0.28)",
      "--theme-shadow": "0 24px 55px rgba(89, 93, 142, 0.14)",
      "--theme-grid": "hsl(223 32% 54% / 0.08)",
      "--theme-radius": "30px",
    }),
  },
  {
    slug: "catholic-mondrianism",
    modeLabel: "Catholic Mondrianism",
    pageTitle: "A modernist Mondrian direction infused with Catholic stained-glass order and liturgical symbolism",
    kicker: "sacred geometry|stained-glass grid|liturgical modernism",
    summary: "A Catholic-inflected Mondrian variant that blends modernist grids, liturgical color palettes, stained-glass rhythm, and a sense of sacred space into a visual language that feels solemn yet highly graphic.",
    audience: "Religious exhibitions, cultural projects, symbol-rich editorials, church event posters, and brands that need a sacred-modern tone",
    family: "grid-product",
    primaryLanguage: "Mondrian-like rectilinear grids with a more devotional restraint, evoking stained glass and liturgical symbolism",
    supportingTreatments: [
      "abstract stained glass",
      "solemn grid rhythm",
      "restrained liturgical color"
    ],
    imageryMode: "Stained-glass-like color panels, bold dividers, luminous negative space, and red-blue-yellow accents warmed by liturgical gold",
    avoidList: [
      "Religious symbols used too literally instead of graphically",
      "Liturgical colors applied so heavily that the layout feels visually heavy"
    ],
    previewBullets: [
      "Sacred",
      "Graphic",
      "Symbolic"
    ],
    keywords: [
      "catholic mondrianism",
      "catholic modernism",
      "stained glass grid",
      "liturgical geometry",
      "sacred modernist"
    ],
    featured: false,
    demoAvailable: true,
    vars: vars({
      "--theme-bg": "hsl(347 60% 95%)",
      "--theme-bg-alt": "hsl(25 56% 91%)",
      "--theme-surface": "hsl(0 0% 100% / 0.95)",
      "--theme-surface-strong": "hsl(0 0% 100%)",
      "--theme-text": "hsl(177 45% 14%)",
      "--theme-muted": "hsl(177 22% 36%)",
      "--theme-border": "hsl(177 26% 24% / 0.12)",
      "--theme-accent": "hsl(25 72% 54%)",
      "--theme-accent-2": "hsl(177 72% 48%)",
      "--theme-accent-contrast": "hsl(0 0% 100%)",
      "--theme-ring": "hsl(25 80% 54% / 0.3)",
      "--theme-shadow": "0 14px 34px rgba(14, 26, 48, 0.12)",
      "--theme-grid": "hsl(177 30% 22% / 0.06)",
    }),
  },
  {
    slug: "cyberpunk",
    modeLabel: "Cyberpunk",
    pageTitle: "Neon-on-black cyberpunk style with glitch motion and dystopian tech energy",
    kicker: "Neon / glitch / dystopian-tech",
    summary: "A neon-on-black cyberpunk direction with glitch motion, monospace typography, and dystopian sci-fi energy.",
    audience: "Gaming, developer tools, sci-fi campaigns, and future-facing technology products",
    family: "immersive-premium",
    primaryLanguage: "Neon-on-black contrast, sharp monospace type, and digital city depth",
    supportingTreatments: [
      "Glitch layers",
      "Monospace UI",
      "Holographic glow"
    ],
    imageryMode: "Glitch HUDs, city lights, holographic panels, and scanlines",
    avoidList: [
      "Glitch effects overused until content becomes noisy",
      "Secondary text contrast that drops below readability"
    ],
    previewBullets: [
      "Neon",
      "Glitch",
      "Dystopian tech"
    ],
    keywords: [
      "cyberpunk",
      "neon on black",
      "glitch",
      "dystopian sci fi",
      "hacker aesthetic"
    ],
    featured: false,
    demoAvailable: true,
    vars: vars({
      "--theme-bg": "hsl(99 35% 8%)",
      "--theme-bg-alt": "hsl(137 32% 12%)",
      "--theme-surface": "hsl(99 28% 16% / 0.78)",
      "--theme-surface-strong": "hsl(99 26% 22% / 0.9)",
      "--theme-text": "hsl(214 100% 96%)",
      "--theme-muted": "hsl(220 36% 74%)",
      "--theme-border": "hsl(289 74% 72% / 0.22)",
      "--theme-accent": "hsl(137 96% 66%)",
      "--theme-accent-2": "hsl(289 94% 64%)",
      "--theme-accent-contrast": "hsl(224 40% 10%)",
      "--theme-ring": "hsl(137 86% 66% / 0.36)",
      "--theme-shadow": "0 40px 120px rgba(1, 6, 18, 0.56)",
      "--theme-grid": "hsl(289 70% 80% / 0.08)",
    }),
  },
  {
    slug: "flat-design",
    modeLabel: "Flat Design",
    pageTitle: "Flat 2D design with direct geometry and strong color blocking",
    kicker: "Flat 2D / color blocking / direct",
    summary: "A flat two-dimensional visual language that removes bevels and shadows in favor of color blocking, typography, and direct geometry.",
    audience: "Explainer sites, productivity tools, simple dashboards, and information-first digital products",
    family: "grid-product",
    primaryLanguage: "Flat color planes, clear typography, and geometry without depth cues",
    supportingTreatments: [
      "Color blocks",
      "Simple icons",
      "No-shadow surfaces"
    ],
    imageryMode: "Flat illustration, icon blocks, and direct geometric compositions",
    avoidList: [
      "Flattening everything until hierarchy disappears",
      "Color palettes with too little contrast or tension"
    ],
    previewBullets: [
      "Flat 2D",
      "Color blocking",
      "Clear geometry"
    ],
    keywords: [
      "flat design",
      "2d design",
      "color blocking",
      "geometric layout",
      "no depth cues"
    ],
    featured: false,
    demoAvailable: true,
    vars: vars({
      "--theme-bg": "hsl(122 60% 95%)",
      "--theme-bg-alt": "hsl(160 56% 91%)",
      "--theme-surface": "hsl(0 0% 100% / 0.95)",
      "--theme-surface-strong": "hsl(0 0% 100%)",
      "--theme-text": "hsl(312 45% 14%)",
      "--theme-muted": "hsl(312 22% 36%)",
      "--theme-border": "hsl(312 26% 24% / 0.12)",
      "--theme-accent": "hsl(160 72% 54%)",
      "--theme-accent-2": "hsl(312 72% 48%)",
      "--theme-accent-contrast": "hsl(0 0% 100%)",
      "--theme-ring": "hsl(160 80% 54% / 0.3)",
      "--theme-shadow": "0 14px 34px rgba(14, 26, 48, 0.12)",
      "--theme-grid": "hsl(312 30% 22% / 0.06)",
    }),
  },
  {
    slug: "kinetic",
    modeLabel: "Kinetic",
    pageTitle: "Motion-first kinetic web direction for high-rhythm landing pages",
    kicker: "Motion-first / marquee / scroll rhythm",
    summary: "A motion-first direction where typography is the main medium, using marquees and scroll-driven movement to lead the eye.",
    audience: "Product landing pages, brand campaigns, motion-led portfolios",
    family: "immersive-premium",
    primaryLanguage: "Oversized typography, rhythmic motion, and strong contrast",
    supportingTreatments: [
      "Marquee",
      "Scroll motion",
      "Oversized type"
    ],
    imageryMode: "Type-led compositions, repeating marquees, and scroll animation",
    avoidList: [
      "Overloaded animation that feels noisy",
      "Motion rhythm without hierarchy"
    ],
    previewBullets: [
      "Motion-first",
      "Large type",
      "High rhythm"
    ],
    keywords: [
      "kinetic",
      "motion first",
      "marquee",
      "scroll animation",
      "typography as medium"
    ],
    featured: false,
    demoAvailable: true,
    vars: vars({
      "--theme-bg": "hsl(241 35% 8%)",
      "--theme-bg-alt": "hsl(279 32% 12%)",
      "--theme-surface": "hsl(241 28% 16% / 0.78)",
      "--theme-surface-strong": "hsl(241 26% 22% / 0.9)",
      "--theme-text": "hsl(214 100% 96%)",
      "--theme-muted": "hsl(220 36% 74%)",
      "--theme-border": "hsl(71 74% 72% / 0.22)",
      "--theme-accent": "hsl(279 96% 66%)",
      "--theme-accent-2": "hsl(71 94% 64%)",
      "--theme-accent-contrast": "hsl(224 40% 10%)",
      "--theme-ring": "hsl(279 86% 66% / 0.36)",
      "--theme-shadow": "0 40px 120px rgba(1, 6, 18, 0.56)",
      "--theme-grid": "hsl(71 70% 80% / 0.08)",
    }),
  },
  {
    slug: "material-design",
    modeLabel: "Material Design",
    pageTitle: "Material Design 3 direction with clear elevation and dynamic color for digital products",
    kicker: "Material 3 / elevation / system UI",
    summary: "A Material Design 3-inspired interface language with clear elevation states, dynamic color, and polished micro-interactions.",
    audience: "Product teams, mobile apps, SaaS, and systems that need a well-governed interface language",
    family: "tactile-organic",
    primaryLanguage: "Clear elevation states, soft shape systems, and dynamic color used systematically",
    supportingTreatments: [
      "Elevation states",
      "Pill components",
      "Dynamic color"
    ],
    imageryMode: "Component states, screen-based UI, and layered surfaces with a friendly tone",
    avoidList: [
      "An interface that feels like an untouched default template",
      "Elevation applied inconsistently across screens"
    ],
    previewBullets: [
      "Material 3",
      "Elevation",
      "Dynamic color"
    ],
    keywords: [
      "material design",
      "material 3",
      "elevation",
      "dynamic color",
      "pill buttons"
    ],
    featured: false,
    demoAvailable: true,
    vars: vars({
      "--theme-bg": "hsl(188 75% 95%)",
      "--theme-bg-alt": "hsl(226 68% 91%)",
      "--theme-surface": "hsl(0 0% 100% / 0.72)",
      "--theme-surface-strong": "hsl(0 0% 100% / 0.92)",
      "--theme-text": "hsl(226 24% 18%)",
      "--theme-muted": "hsl(226 14% 43%)",
      "--theme-border": "hsl(226 34% 62% / 0.3)",
      "--theme-accent": "hsl(18 76% 58%)",
      "--theme-accent-2": "hsl(188 72% 62%)",
      "--theme-accent-contrast": "hsl(0 0% 100%)",
      "--theme-ring": "hsl(18 86% 56% / 0.28)",
      "--theme-shadow": "0 24px 55px rgba(89, 93, 142, 0.14)",
      "--theme-grid": "hsl(226 32% 54% / 0.08)",
      "--theme-radius": "30px",
    }),
  },
  {
    slug: "maximalist",
    modeLabel: "Maximalist",
    pageTitle: "A visually dense direction built on layered graphics, rich ornament, and expressive abundance",
    kicker: "layered visuals|ornamented density|expressive abundance",
    summary: "Maximalist design favors visual abundance: layered content, color, texture, typography, and ornament appear together to create a bold, deliberate sense of richness rather than restraint or reduction.",
    audience: "Personality-rich editorials, fashion campaigns, cultural posters, creative landing pages, and brands that want exuberance rather than minimal restraint",
    family: "experimental-loud",
    primaryLanguage: "Type, imagery, texture, and color stack in controlled layers to create high density while preserving rhythm",
    supportingTreatments: [
      "layered collage",
      "rich ornament",
      "dense high-contrast typography"
    ],
    imageryMode: "Dense collage, alternating type scales, strong textures, repeating patterns, and richly contrasted palettes",
    avoidList: [
      "Many layers without clear hierarchy",
      "Color, texture, and type competing so aggressively that the focal point disappears"
    ],
    previewBullets: [
      "Dense",
      "Bold",
      "Expressive"
    ],
    keywords: [
      "maximalist",
      "maximalism",
      "layered collage",
      "ornamental editorial",
      "visual abundance"
    ],
    featured: false,
    demoAvailable: true,
    vars: vars({
      "--theme-bg": "hsl(359 94% 90%)",
      "--theme-bg-alt": "hsl(37 88% 74%)",
      "--theme-surface": "hsl(0 0% 100%)",
      "--theme-surface-strong": "hsl(44 100% 96%)",
      "--theme-text": "hsl(0 0% 7%)",
      "--theme-muted": "hsl(26 17% 32%)",
      "--theme-border": "hsl(0 0% 7%)",
      "--theme-accent": "hsl(37 88% 54%)",
      "--theme-accent-2": "hsl(189 90% 52%)",
      "--theme-accent-contrast": "hsl(0 0% 6%)",
      "--theme-ring": "hsl(37 88% 56% / 0.34)",
      "--theme-shadow": "8px 8px 0 rgba(10, 10, 10, 0.92)",
      "--theme-grid": "hsl(0 0% 10% / 0.14)",
      "--theme-radius": "18px",
    }),
  },
  {
    slug: "neumorphism",
    modeLabel: "Neumorphism",
    pageTitle: "Soft neumorphic style built from dual shadows and monochrome surfaces",
    kicker: "Soft UI / dual shadows / tactile",
    summary: "A monochromatic soft-surface direction where dual shadows create extruded and inset tactile elements.",
    audience: "Utility apps, minimal dashboards, and digital products that need a soft tactile feel",
    family: "tactile-organic",
    primaryLanguage: "Soft monochrome surfaces, subtle extrusions, and friendly rounded forms",
    supportingTreatments: [
      "Dual shadows",
      "Inset surfaces",
      "Rounded cards"
    ],
    imageryMode: "Rounded controls, inset and raised surfaces, and soft directional light",
    avoidList: [
      "Contrast that becomes too low for usability",
      "Too many raised and inset effects that make the UI heavy"
    ],
    previewBullets: [
      "Soft extrusions",
      "Monochrome",
      "Tactile"
    ],
    keywords: [
      "neumorphism",
      "dual shadows",
      "soft ui",
      "extruded elements",
      "tactile"
    ],
    featured: false,
    demoAvailable: true,
    vars: vars({
      "--theme-bg": "hsl(281 75% 95%)",
      "--theme-bg-alt": "hsl(319 68% 91%)",
      "--theme-surface": "hsl(0 0% 100% / 0.72)",
      "--theme-surface-strong": "hsl(0 0% 100% / 0.92)",
      "--theme-text": "hsl(319 24% 18%)",
      "--theme-muted": "hsl(319 14% 43%)",
      "--theme-border": "hsl(319 34% 62% / 0.3)",
      "--theme-accent": "hsl(111 76% 58%)",
      "--theme-accent-2": "hsl(281 72% 62%)",
      "--theme-accent-contrast": "hsl(0 0% 100%)",
      "--theme-ring": "hsl(111 86% 56% / 0.28)",
      "--theme-shadow": "0 24px 55px rgba(89, 93, 142, 0.14)",
      "--theme-grid": "hsl(319 32% 54% / 0.08)",
      "--theme-radius": "30px",
    }),
  },
  {
    slug: "newsprint",
    modeLabel: "Newsprint",
    pageTitle: "Newsprint editorial style with black-and-white contrast and tight newspaper grids",
    kicker: "Newsprint / editorial / high contrast",
    summary: "A black-and-white newsprint direction with sharp contrast, tight grids, and editorial depth.",
    audience: "Media, editorial platforms, research reports, and text-heavy cultural websites",
    family: "editorial-typography",
    primaryLanguage: "Black-and-white contrast, newspaper column rhythm, and print-like sharpness",
    supportingTreatments: [
      "Halftone grain",
      "Column grids",
      "Rule lines"
    ],
    imageryMode: "Halftone photography, newspaper-style crops, and multi-column layouts",
    avoidList: [
      "Print grain pushed so far that the layout feels dirty",
      "Density so high that screen readability suffers"
    ],
    previewBullets: [
      "Newsprint",
      "High contrast",
      "Editorial"
    ],
    keywords: [
      "newsprint",
      "newspaper aesthetic",
      "black and white editorial",
      "tight grid",
      "editorial depth"
    ],
    featured: false,
    demoAvailable: true,
    vars: vars({
      "--theme-bg": "hsl(26 35% 96%)",
      "--theme-bg-alt": "hsl(26 28% 92%)",
      "--theme-surface": "hsl(0 0% 100% / 0.75)",
      "--theme-surface-strong": "hsl(0 0% 100%)",
      "--theme-text": "hsl(64 18% 14%)",
      "--theme-muted": "hsl(64 14% 36%)",
      "--theme-border": "hsl(64 18% 18% / 0.12)",
      "--theme-accent": "hsl(26 34% 28%)",
      "--theme-accent-2": "hsl(216 38% 42%)",
      "--theme-accent-contrast": "hsl(38 62% 94%)",
      "--theme-ring": "hsl(26 28% 28% / 0.22)",
      "--theme-shadow": "0 16px 34px rgba(23, 20, 16, 0.08)",
      "--theme-grid": "hsl(64 18% 20% / 0.06)",
      "--theme-font-display": "var(--font-editorial), Georgia, serif",
    }),
  },
  {
    slug: "organic",
    modeLabel: "Organic",
    pageTitle: "Earth-toned organic direction with soft blobs and wabi-sabi warmth",
    kicker: "Earth tones / blobs / wabi-sabi",
    summary: "An earth-toned organic direction with blob-like forms, grain textures, and wabi-sabi warmth for refined digital surfaces.",
    audience: "Wellness, sustainable lifestyle, soft beauty, and approachable editorial brands",
    family: "editorial-typography",
    primaryLanguage: "Earth tones, soft organic forms, and natural grain textures",
    supportingTreatments: [
      "Grain texture",
      "Organic cutouts",
      "Soft shadow depth"
    ],
    imageryMode: "Organic blobs, tactile cutouts, and refined raw-material surfaces",
    avoidList: [
      "Color temperature that becomes too cold",
      "Grids that feel too rigid for the organic mood"
    ],
    previewBullets: [
      "Earth tones",
      "Organic blobs",
      "Wabi-sabi"
    ],
    keywords: [
      "organic",
      "earth tones",
      "blob shapes",
      "grain texture",
      "wabi sabi"
    ],
    featured: false,
    demoAvailable: true,
    vars: vars({
      "--theme-bg": "hsl(131 35% 96%)",
      "--theme-bg-alt": "hsl(131 28% 92%)",
      "--theme-surface": "hsl(0 0% 100% / 0.75)",
      "--theme-surface-strong": "hsl(0 0% 100%)",
      "--theme-text": "hsl(169 18% 14%)",
      "--theme-muted": "hsl(169 14% 36%)",
      "--theme-border": "hsl(169 18% 18% / 0.12)",
      "--theme-accent": "hsl(131 34% 28%)",
      "--theme-accent-2": "hsl(321 38% 42%)",
      "--theme-accent-contrast": "hsl(38 62% 94%)",
      "--theme-ring": "hsl(131 28% 28% / 0.22)",
      "--theme-shadow": "0 16px 34px rgba(23, 20, 16, 0.08)",
      "--theme-grid": "hsl(169 18% 20% / 0.06)",
      "--theme-font-display": "var(--font-editorial), Georgia, serif",
    }),
  },
  {
    slug: "playful-geometric",
    modeLabel: "Playful Geometric",
    pageTitle: "Playful geometric direction with bright color and modern Memphis energy",
    kicker: "Geometric / bright / friendly",
    summary: "A stable structural grid mixed with bright geometric play and modern Memphis energy for a friendly, upbeat feel.",
    audience: "Consumer apps, edtech, family-friendly products, and upbeat modern brands",
    family: "grid-product",
    primaryLanguage: "Primitive shapes, bright color fields, and a friendly compositional rhythm",
    supportingTreatments: [
      "Primitive shapes",
      "Bright blocks",
      "Memphis accents"
    ],
    imageryMode: "Circle-square compositions, geometric illustration, and modular patterns",
    avoidList: [
      "Too many bright colors without a system",
      "Small fragmented shapes that weaken focal hierarchy"
    ],
    previewBullets: [
      "Playful geometry",
      "Bright colors",
      "Modern Memphis"
    ],
    keywords: [
      "playful geometric",
      "memphis",
      "bright colors",
      "primitive shapes",
      "friendly vibe"
    ],
    featured: false,
    demoAvailable: true,
    vars: vars({
      "--theme-bg": "hsl(77 60% 95%)",
      "--theme-bg-alt": "hsl(115 56% 91%)",
      "--theme-surface": "hsl(0 0% 100% / 0.95)",
      "--theme-surface-strong": "hsl(0 0% 100%)",
      "--theme-text": "hsl(267 45% 14%)",
      "--theme-muted": "hsl(267 22% 36%)",
      "--theme-border": "hsl(267 26% 24% / 0.12)",
      "--theme-accent": "hsl(115 72% 54%)",
      "--theme-accent-2": "hsl(267 72% 48%)",
      "--theme-accent-contrast": "hsl(0 0% 100%)",
      "--theme-ring": "hsl(115 80% 54% / 0.3)",
      "--theme-shadow": "0 14px 34px rgba(14, 26, 48, 0.12)",
      "--theme-grid": "hsl(267 30% 22% / 0.06)",
    }),
  },
  {
    slug: "sketch",
    modeLabel: "Sketch",
    pageTitle: "Hand-drawn sketch style for playful concepts and expressive interfaces",
    kicker: "Hand-drawn / imperfect / playful",
    summary: "A hand-drawn direction with wobbly borders, paper textures, and playful intentional imperfection.",
    audience: "Creative brands, education products, workshops, and playful concept landing pages",
    family: "experimental-loud",
    primaryLanguage: "Wobbly outlines, paper texture, and intentional imperfection",
    supportingTreatments: [
      "Wobbly borders",
      "Paper texture",
      "Handwritten notes"
    ],
    imageryMode: "Doodles, hand annotations, and sketch-like paper cutouts",
    avoidList: [
      "Too much wobble that turns the layout chaotic",
      "Weak hierarchy that makes the work feel unfinished"
    ],
    previewBullets: [
      "Sketchy",
      "Wobbly",
      "Playful"
    ],
    keywords: [
      "sketch",
      "hand drawn",
      "wobbly borders",
      "paper texture",
      "intentional imperfection"
    ],
    featured: false,
    demoAvailable: true,
    vars: vars({
      "--theme-bg": "hsl(252 94% 90%)",
      "--theme-bg-alt": "hsl(290 88% 74%)",
      "--theme-surface": "hsl(0 0% 100%)",
      "--theme-surface-strong": "hsl(44 100% 96%)",
      "--theme-text": "hsl(0 0% 7%)",
      "--theme-muted": "hsl(26 17% 32%)",
      "--theme-border": "hsl(0 0% 7%)",
      "--theme-accent": "hsl(290 88% 54%)",
      "--theme-accent-2": "hsl(82 90% 52%)",
      "--theme-accent-contrast": "hsl(0 0% 6%)",
      "--theme-ring": "hsl(290 88% 56% / 0.34)",
      "--theme-shadow": "8px 8px 0 rgba(10, 10, 10, 0.92)",
      "--theme-grid": "hsl(0 0% 10% / 0.14)",
      "--theme-radius": "18px",
    }),
  },
  {
    slug: "skeuomorphic",
    modeLabel: "Skeuomorphic",
    pageTitle: "Industrial skeuomorphic style with hardware cues and tactile surfaces",
    kicker: "Hardware / tactile / industrial",
    summary: "An industrial skeuomorphic direction inspired by hardware, using matte surfaces, mechanical detailing, and safety-orange accents.",
    audience: "Tooling products, device brands, industrial dashboards, and operational software",
    family: "tactile-organic",
    primaryLanguage: "Matte surfaces, mechanical detailing, and weighty tactile depth",
    supportingTreatments: [
      "Inset panels",
      "Physical buttons",
      "Safety-orange accents"
    ],
    imageryMode: "Hardware close-ups, control panels, and lighting that emphasizes materiality",
    avoidList: [
      "Material simulation pushed so far that function suffers",
      "Mechanical details that are decorative but meaningless"
    ],
    previewBullets: [
      "Hardware",
      "Mechanical",
      "Matte surfaces"
    ],
    keywords: [
      "industrial",
      "skeuomorphism",
      "hardware",
      "matte plastic",
      "safety orange"
    ],
    featured: false,
    demoAvailable: true,
    vars: vars({
      "--theme-bg": "hsl(214 12% 16%)",
      "--theme-bg-alt": "hsl(214 10% 22%)",
      "--theme-surface": "hsl(214 10% 24% / 0.92)",
      "--theme-surface-strong": "hsl(214 9% 30% / 0.98)",
      "--theme-text": "hsl(210 18% 92%)",
      "--theme-muted": "hsl(210 10% 70%)",
      "--theme-border": "hsl(212 10% 54% / 0.56)",
      "--theme-accent": "hsl(24 92% 56%)",
      "--theme-accent-2": "hsl(38 92% 62%)",
      "--theme-accent-contrast": "hsl(214 12% 10%)",
      "--theme-ring": "hsl(24 92% 56% / 0.34)",
      "--theme-shadow": "0 20px 36px rgba(0, 0, 0, 0.42)",
      "--theme-grid": "hsl(214 10% 62% / 0.12)",
    }),
  },
  {
    slug: "swiss-minimalist",
    modeLabel: "Swiss Minimalist",
    pageTitle: "Swiss minimalist direction with disciplined grids and objective typography",
    kicker: "Swiss / grid / objective type",
    summary: "A rigorous Swiss-style direction built on objective typography, mathematical grids, and a strict black-white-red palette.",
    audience: "Editorial platforms, portfolios, cultural brands, and systems that require maximum clarity",
    family: "editorial-typography",
    primaryLanguage: "Mathematical grids, generous white space, and disciplined neutral typography",
    supportingTreatments: [
      "Grid modules",
      "Black-red accents",
      "Typographic scales"
    ],
    imageryMode: "Poster-like crops, stark photography, and precise type-image layouts",
    avoidList: [
      "Rigidity taken so far that the layout loses emotional rhythm",
      "Overuse of the red-black-white palette without moments of rest"
    ],
    previewBullets: [
      "Swiss",
      "Disciplined grid",
      "Readable"
    ],
    keywords: [
      "swiss minimalist",
      "international typographic style",
      "mathematical grid",
      "black white red",
      "objective typography"
    ],
    featured: false,
    demoAvailable: true,
    vars: vars({
      "--theme-bg": "hsl(1 35% 96%)",
      "--theme-bg-alt": "hsl(1 28% 92%)",
      "--theme-surface": "hsl(0 0% 100% / 0.75)",
      "--theme-surface-strong": "hsl(0 0% 100%)",
      "--theme-text": "hsl(39 18% 14%)",
      "--theme-muted": "hsl(39 14% 36%)",
      "--theme-border": "hsl(39 18% 18% / 0.12)",
      "--theme-accent": "hsl(1 34% 28%)",
      "--theme-accent-2": "hsl(191 38% 42%)",
      "--theme-accent-contrast": "hsl(38 62% 94%)",
      "--theme-ring": "hsl(1 28% 28% / 0.22)",
      "--theme-shadow": "0 16px 34px rgba(23, 20, 16, 0.08)",
      "--theme-grid": "hsl(39 18% 20% / 0.06)",
      "--theme-font-display": "var(--font-editorial), Georgia, serif",
    }),
  },
  {
    slug: "terminal",
    modeLabel: "Terminal",
    pageTitle: "Terminal-inspired aesthetic for developer tools with monospace command-line energy",
    kicker: "CLI / monospace / functional",
    summary: "A raw retro-futuristic command-line aesthetic with monospaced precision, blinking cursors, and strong functional contrast.",
    audience: "Developer tools, infrastructure products, AI agent tooling, and operations-heavy software",
    family: "immersive-premium",
    primaryLanguage: "Precise monospace typography, strong contrast, and a raw command-line feel",
    supportingTreatments: [
      "Cursor blink",
      "Code panes",
      "Terminal prompts"
    ],
    imageryMode: "CLI screens, blinking cursors, and dark console panels",
    avoidList: [
      "Hacker tropes pushed into cliché territory",
      "Neon styling that reduces readability"
    ],
    previewBullets: [
      "Command-line",
      "Monospace",
      "Retro-futuristic"
    ],
    keywords: [
      "terminal",
      "cli",
      "monospace",
      "retro futuristic",
      "hacker culture"
    ],
    featured: false,
    demoAvailable: true,
    vars: vars({
      "--theme-bg": "hsl(212 22% 7%)",
      "--theme-bg-alt": "hsl(212 20% 10%)",
      "--theme-surface": "hsl(212 18% 12% / 0.94)",
      "--theme-surface-strong": "hsl(212 20% 16% / 0.98)",
      "--theme-text": "hsl(210 36% 92%)",
      "--theme-muted": "hsl(210 16% 68%)",
      "--theme-border": "hsl(145 24% 36% / 0.62)",
      "--theme-accent": "hsl(143 84% 56%)",
      "--theme-accent-2": "hsl(165 80% 52%)",
      "--theme-accent-contrast": "hsl(212 22% 8%)",
      "--theme-ring": "hsl(143 84% 56% / 0.34)",
      "--theme-shadow": "0 24px 48px rgba(0, 0, 0, 0.45)",
      "--theme-grid": "hsl(145 34% 44% / 0.12)",
    }),
  },
  {
    slug: "vaporwave",
    modeLabel: "Vaporwave",
    pageTitle: "Neon vaporwave retro-futurism with sunset gradients and digital grids",
    kicker: "Neon / retro-futurism / synthetic",
    summary: "A neon-drenched vaporwave direction with pink-cyan contrast, digital grids, sunset gradients, and synthetic retro-futurist mood.",
    audience: "Music, fashion, event culture, and digital products with a nostalgic synthetic mood",
    family: "experimental-loud",
    primaryLanguage: "Pink-cyan contrast, retro glow, and a synthetic digital-world atmosphere",
    supportingTreatments: [
      "CRT scanlines",
      "Grid horizon",
      "Neon glow"
    ],
    imageryMode: "3D grids, sunset gradients, scanlines, and retro-tech iconography",
    avoidList: [
      "Neon intensity that overwhelms the layout",
      "Retro effects layered so heavily that content becomes hard to read"
    ],
    previewBullets: [
      "Neon nostalgia",
      "Sunset gradients",
      "Synthetic world"
    ],
    keywords: [
      "vaporwave",
      "retro futurism",
      "pink cyan",
      "digital grids",
      "crt scanlines"
    ],
    featured: false,
    demoAvailable: true,
    vars: vars({
      "--theme-bg": "hsl(25 35% 8%)",
      "--theme-bg-alt": "hsl(63 32% 12%)",
      "--theme-surface": "hsl(25 28% 16% / 0.78)",
      "--theme-surface-strong": "hsl(25 26% 22% / 0.9)",
      "--theme-text": "hsl(214 100% 96%)",
      "--theme-muted": "hsl(220 36% 74%)",
      "--theme-border": "hsl(215 74% 72% / 0.22)",
      "--theme-accent": "hsl(63 96% 66%)",
      "--theme-accent-2": "hsl(215 94% 64%)",
      "--theme-accent-contrast": "hsl(224 40% 10%)",
      "--theme-ring": "hsl(63 86% 66% / 0.36)",
      "--theme-shadow": "0 40px 120px rgba(1, 6, 18, 0.56)",
      "--theme-grid": "hsl(215 70% 80% / 0.08)",
    }),
  },
  {
    slug: "bauhaus-mondrian",
    modeLabel: "Bauhaus / Mondrian",
    pageTitle: "Modernist grid composition with primary geometry and foundational color",
    kicker: "Modernist grid / primary colors / geometric order",
    summary: "A Bauhaus- and Mondrian-inspired direction that uses visible grids, basic forms, and primary-color palettes to create an ordered, modern, and unmistakably graphic visual system.",
    audience: "System-led brands, design-forward landing pages, creative portfolios, and products that need a canonical modernist language",
    family: "grid-product",
    primaryLanguage: "Modernist grid, primary geometry, and controlled primary color",
    supportingTreatments: [
      "bold grid lines",
      "primary color fields",
      "minimal composition with strong structure"
    ],
    imageryMode: "Rectilinear forms, strong grid dividers, and balanced red-yellow-blue color blocks with a poster-like modernist feel",
    avoidList: [
      "soft gradients that dilute the modernist feel",
      "too many organic effects",
      "loose grids without visual discipline"
    ],
    previewBullets: [
      "Visible grids make the composition feel systematic and decisive",
      "Primary colors create immediate recognition",
      "Well suited to layouts with poster logic and graphic modernism"
    ],
    keywords: [
      "bauhaus",
      "mondrian",
      "modernist grid",
      "primary colors",
      "geometric composition"
    ],
    featured: false,
    demoAvailable: false,
    vars: vars({
      "--theme-bg": "hsl(12 60% 95%)",
      "--theme-bg-alt": "hsl(50 56% 91%)",
      "--theme-surface": "hsl(0 0% 100% / 0.95)",
      "--theme-surface-strong": "hsl(0 0% 100%)",
      "--theme-text": "hsl(202 45% 14%)",
      "--theme-muted": "hsl(202 22% 36%)",
      "--theme-border": "hsl(202 26% 24% / 0.12)",
      "--theme-accent": "hsl(50 72% 54%)",
      "--theme-accent-2": "hsl(202 72% 48%)",
      "--theme-accent-contrast": "hsl(0 0% 100%)",
      "--theme-ring": "hsl(50 80% 54% / 0.3)",
      "--theme-shadow": "0 14px 34px rgba(14, 26, 48, 0.12)",
      "--theme-grid": "hsl(202 30% 22% / 0.06)",
    }),
  },
  {
    slug: "glassmorphism-mature",
    modeLabel: "Mature glassmorphism",
    pageTitle: "Translucent depth for premium interfaces",
    kicker: "Mature glass / layered translucent product surfaces",
    summary: "Uses blur, translucent surfaces, and layered depth in a restrained, mature way rather than relying on flashy glow.",
    audience: "Fintech, AI products, dashboards, premium system interfaces",
    family: "tactile-organic",
    primaryLanguage: "Layered translucency",
    supportingTreatments: [
      "soft borders",
      "aurora tint",
      "frosted panels"
    ],
    imageryMode: "Transparent panel UI and control-surface styling",
    avoidList: [
      "low contrast on dense text",
      "excessive blur that softens content"
    ],
    previewBullets: [
      "Layered frosted-glass surfaces",
      "Cool accents with soft luminous borders",
      "A hero that feels like a premium control surface"
    ],
    keywords: [
      "glassmorphism",
      "frosted glass",
      "blur",
      "transparent panels",
      "premium tech"
    ],
    featured: false,
    demoAvailable: true,
    vars: vars({
      "--theme-bg": "hsl(158 75% 95%)",
      "--theme-bg-alt": "hsl(196 68% 91%)",
      "--theme-surface": "hsl(0 0% 100% / 0.72)",
      "--theme-surface-strong": "hsl(0 0% 100% / 0.92)",
      "--theme-text": "hsl(196 24% 18%)",
      "--theme-muted": "hsl(196 14% 43%)",
      "--theme-border": "hsl(196 34% 62% / 0.3)",
      "--theme-accent": "hsl(348 76% 58%)",
      "--theme-accent-2": "hsl(158 72% 62%)",
      "--theme-accent-contrast": "hsl(0 0% 100%)",
      "--theme-ring": "hsl(348 86% 56% / 0.28)",
      "--theme-shadow": "0 24px 55px rgba(89, 93, 142, 0.14)",
      "--theme-grid": "hsl(196 32% 54% / 0.08)",
      "--theme-radius": "30px",
    }),
  },
  {
    slug: "neo-brutalism",
    modeLabel: "Neo-brutalism",
    pageTitle: "Hard-edged launch with loud confidence",
    kicker: "Bold border / hard shadow / anti-clean campaign layout",
    summary: "An intentionally blunt direction using thick borders, hard shadows, and a loud palette to give a brand unmistakable character.",
    audience: "Creative startups, campaign pages, studios, loud-personality brand sites",
    family: "experimental-loud",
    primaryLanguage: "Hard-edged grid",
    supportingTreatments: [
      "thick borders",
      "hard shadows",
      "high-contrast palette"
    ],
    imageryMode: "Playful brutalist layout with poster-like energy",
    avoidList: [
      "trust-heavy finance UI",
      "very high information density"
    ],
    previewBullets: [
      "Bold borders and hard shadows",
      "Large, blunt, highly assertive headlines",
      "A layout that feels more like a digital poster than a SaaS page"
    ],
    keywords: [
      "neo brutalism",
      "bold border",
      "hard shadow",
      "anti clean",
      "brutalist"
    ],
    featured: false,
    demoAvailable: true,
    vars: vars({
      "--theme-bg": "hsl(116 94% 90%)",
      "--theme-bg-alt": "hsl(154 88% 74%)",
      "--theme-surface": "hsl(0 0% 100%)",
      "--theme-surface-strong": "hsl(44 100% 96%)",
      "--theme-text": "hsl(0 0% 7%)",
      "--theme-muted": "hsl(26 17% 32%)",
      "--theme-border": "hsl(0 0% 7%)",
      "--theme-accent": "hsl(154 88% 54%)",
      "--theme-accent-2": "hsl(306 90% 52%)",
      "--theme-accent-contrast": "hsl(0 0% 6%)",
      "--theme-ring": "hsl(154 88% 56% / 0.34)",
      "--theme-shadow": "8px 8px 0 rgba(10, 10, 10, 0.92)",
      "--theme-grid": "hsl(0 0% 10% / 0.14)",
      "--theme-radius": "18px",
    }),
  },
  {
    slug: "editorial-minimalism",
    modeLabel: "Editorial minimalism",
    pageTitle: "Quiet manifesto with editorial rhythm",
    kicker: "Swiss-inspired / warm monochrome / reading-first",
    summary: "Large white space, rhythmic type, hairline borders, and a publication-like tone make the page feel like a carefully designed manifesto.",
    audience: "Luxury brands, agencies, portfolios, refined editorial commerce",
    family: "editorial-typography",
    primaryLanguage: "Swiss / reading-first",
    supportingTreatments: [
      "warm monochrome",
      "hairline borders",
      "serif headlines"
    ],
    imageryMode: "Line art and imagery that supports the reading rhythm",
    avoidList: [
      "neon accents",
      "pill-heavy styling",
      "showy UI treatment"
    ],
    previewBullets: [
      "Serif headlines with exceptionally clean body text",
      "Generous white space and ultra-thin borders",
      "Quiet CTAs that make the page feel like a manifesto in print"
    ],
    keywords: [
      "editorial",
      "swiss",
      "luxury minimal",
      "manifesto",
      "typography"
    ],
    featured: false,
    demoAvailable: true,
    vars: vars({
      "--theme-bg": "hsl(24 35% 96%)",
      "--theme-bg-alt": "hsl(24 28% 92%)",
      "--theme-surface": "hsl(0 0% 100% / 0.75)",
      "--theme-surface-strong": "hsl(0 0% 100%)",
      "--theme-text": "hsl(62 18% 14%)",
      "--theme-muted": "hsl(62 14% 36%)",
      "--theme-border": "hsl(62 18% 18% / 0.12)",
      "--theme-accent": "hsl(24 34% 28%)",
      "--theme-accent-2": "hsl(214 38% 42%)",
      "--theme-accent-contrast": "hsl(38 62% 94%)",
      "--theme-ring": "hsl(24 28% 28% / 0.22)",
      "--theme-shadow": "0 16px 34px rgba(23, 20, 16, 0.08)",
      "--theme-grid": "hsl(62 18% 20% / 0.06)",
      "--theme-font-display": "var(--font-editorial), Georgia, serif",
    }),
  },
  {
    slug: "bento-grid",
    modeLabel: "Bento grid aesthetics",
    pageTitle: "Modular product story in dense tiles",
    kicker: "Rounded modular tiles / dense-but-readable overview",
    summary: "Uses modular tiles to communicate many benefits on one screen while keeping hierarchy clear and scanning easy.",
    audience: "SaaS, AI tools, feature overviews, product storytelling",
    family: "grid-product",
    primaryLanguage: "Modular layouts",
    supportingTreatments: [
      "varied tile sizes",
      "rounded containers",
      "scan-friendly hierarchy"
    ],
    imageryMode: "Mixed media blocks and tile-based composition",
    avoidList: [
      "lifeless catalog cards",
      "layout without clear order"
    ],
    previewBullets: [
      "Different tile sizes that control visual rhythm",
      "Many benefits visible in the first view",
      "Great for feature-overview pages"
    ],
    keywords: [
      "bento",
      "modular",
      "feature tiles",
      "product marketing",
      "saas"
    ],
    featured: true,
    demoAvailable: true,
    vars: vars({
      "--theme-bg": "hsl(229 60% 95%)",
      "--theme-bg-alt": "hsl(267 56% 91%)",
      "--theme-surface": "hsl(0 0% 100% / 0.95)",
      "--theme-surface-strong": "hsl(0 0% 100%)",
      "--theme-text": "hsl(59 45% 14%)",
      "--theme-muted": "hsl(59 22% 36%)",
      "--theme-border": "hsl(59 26% 24% / 0.12)",
      "--theme-accent": "hsl(267 72% 54%)",
      "--theme-accent-2": "hsl(59 72% 48%)",
      "--theme-accent-contrast": "hsl(0 0% 100%)",
      "--theme-ring": "hsl(267 80% 54% / 0.3)",
      "--theme-shadow": "0 14px 34px rgba(14, 26, 48, 0.12)",
      "--theme-grid": "hsl(59 30% 22% / 0.06)",
    }),
  },
  {
    slug: "dark-glow-aurora",
    modeLabel: "Dark glow / aurora",
    pageTitle: "Dark-canvas launch with luminous atmosphere",
    kicker: "Cyber-luxury / glow edges / aurora fields",
    summary: "A dark canvas, aurora glow, and luminous accents create a cinematic premium-tech atmosphere while keeping hierarchy under control.",
    audience: "AI, crypto, devtools, gaming-lite, premium tech launches",
    family: "immersive-premium",
    primaryLanguage: "Dark atmospheric hero",
    supportingTreatments: [
      "aurora gradients",
      "glow edges",
      "premium dark surfaces"
    ],
    imageryMode: "Dark atmosphere, glow fields, and layered hero art direction",
    avoidList: [
      "glow covering the entire UI",
      "long-form text on very dark surfaces"
    ],
    previewBullets: [
      "Dark canvas with soft luminous fields",
      "A hero that feels cinematic and future-facing",
      "Well suited to premium tech launches"
    ],
    keywords: [
      "dark glow",
      "aurora",
      "premium dark",
      "neon gradient",
      "cinematic"
    ],
    featured: false,
    demoAvailable: true,
    vars: vars({
      "--theme-bg": "hsl(73 35% 8%)",
      "--theme-bg-alt": "hsl(111 32% 12%)",
      "--theme-surface": "hsl(73 28% 16% / 0.78)",
      "--theme-surface-strong": "hsl(73 26% 22% / 0.9)",
      "--theme-text": "hsl(214 100% 96%)",
      "--theme-muted": "hsl(220 36% 74%)",
      "--theme-border": "hsl(263 74% 72% / 0.22)",
      "--theme-accent": "hsl(111 96% 66%)",
      "--theme-accent-2": "hsl(263 94% 64%)",
      "--theme-accent-contrast": "hsl(224 40% 10%)",
      "--theme-ring": "hsl(111 86% 66% / 0.36)",
      "--theme-shadow": "0 40px 120px rgba(1, 6, 18, 0.56)",
      "--theme-grid": "hsl(263 70% 80% / 0.08)",
    }),
  },
  {
    slug: "claymorphism-soft-3d",
    modeLabel: "Claymorphism / soft 3D",
    pageTitle: "Rounded surfaces with tactile softness",
    kicker: "Puffy layers / toy-like depth / friendly material feel",
    summary: "Feels touchable through puffy surfaces, heavy rounding, and soft depth that resembles molded plastic or pliable clay.",
    audience: "Consumer apps, onboarding, wellness, family products, playful marketing",
    family: "tactile-organic",
    primaryLanguage: "Rounded tactile geometry",
    supportingTreatments: [
      "soft shadows",
      "pastel material feel",
      "rounded blocks"
    ],
    imageryMode: "Soft 3D surfaces and tactile material-like UI",
    avoidList: [
      "enterprise data UI",
      "business workflows that need crisp sharpness"
    ],
    previewBullets: [
      "Heavily rounded forms with soft shadows",
      "Pastel color fields that feel approachable",
      "Great for playful landing pages or onboarding-led products"
    ],
    keywords: [
      "claymorphism",
      "soft 3d",
      "tactile",
      "rounded",
      "playful"
    ],
    featured: false,
    demoAvailable: true,
    vars: vars({
      "--theme-bg": "hsl(59 75% 95%)",
      "--theme-bg-alt": "hsl(97 68% 91%)",
      "--theme-surface": "hsl(0 0% 100% / 0.72)",
      "--theme-surface-strong": "hsl(0 0% 100% / 0.92)",
      "--theme-text": "hsl(97 24% 18%)",
      "--theme-muted": "hsl(97 14% 43%)",
      "--theme-border": "hsl(97 34% 62% / 0.3)",
      "--theme-accent": "hsl(249 76% 58%)",
      "--theme-accent-2": "hsl(59 72% 62%)",
      "--theme-accent-contrast": "hsl(0 0% 100%)",
      "--theme-ring": "hsl(249 86% 56% / 0.28)",
      "--theme-shadow": "0 24px 55px rgba(89, 93, 142, 0.14)",
      "--theme-grid": "hsl(97 32% 54% / 0.08)",
      "--theme-radius": "30px",
    }),
  },
  {
    slug: "immersive-3d-product",
    modeLabel: "3D product rendering",
    pageTitle: "Object-centric hero with cinematic depth",
    kicker: "Floating objects / rendered product scenes / wow-factor",
    summary: "Uses object presence and spotlighted scenes to turn the landing page into a high-depth product reveal with strong spectacle.",
    audience: "Hardware, luxury products, AI infra, gaming, product reveal websites",
    family: "immersive-premium",
    primaryLanguage: "Object-centric storytelling",
    supportingTreatments: [
      "depth-heavy hero",
      "cinematic lighting",
      "spotlight reveal"
    ],
    imageryMode: "Rendered product scenes and cinematic object staging",
    avoidList: [
      "pages that need direct conversion",
      "very low-powered target devices"
    ],
    previewBullets: [
      "A hero staged around one primary object",
      "Feature sections behave like a product reveal sequence",
      "Strong wow-factor from the very first impression"
    ],
    keywords: [
      "3d website",
      "product reveal",
      "cinematic",
      "object centric",
      "immersive"
    ],
    featured: false,
    demoAvailable: true,
    vars: vars({
      "--theme-bg": "hsl(117 35% 8%)",
      "--theme-bg-alt": "hsl(155 32% 12%)",
      "--theme-surface": "hsl(117 28% 16% / 0.78)",
      "--theme-surface-strong": "hsl(117 26% 22% / 0.9)",
      "--theme-text": "hsl(214 100% 96%)",
      "--theme-muted": "hsl(220 36% 74%)",
      "--theme-border": "hsl(307 74% 72% / 0.22)",
      "--theme-accent": "hsl(155 96% 66%)",
      "--theme-accent-2": "hsl(307 94% 64%)",
      "--theme-accent-contrast": "hsl(224 40% 10%)",
      "--theme-ring": "hsl(155 86% 66% / 0.36)",
      "--theme-shadow": "0 40px 120px rgba(1, 6, 18, 0.56)",
      "--theme-grid": "hsl(307 70% 80% / 0.08)",
    }),
  },
  {
    slug: "y2k-retro-futurism",
    modeLabel: "Y2K / retro-futurism",
    pageTitle: "Digital nostalgia with glossy tension",
    kicker: "Chrome hints / glossy controls / millennium-era futurism",
    summary: "Inspired by early-2000s digital language: shiny, glossy, techno, and nostalgic, refined through contemporary craft.",
    audience: "Fashion, music, youth culture, campaign pages, creative portfolios",
    family: "experimental-loud",
    primaryLanguage: "Glossy techno collage",
    supportingTreatments: [
      "retro gradients",
      "chrome accents",
      "techno typography"
    ],
    imageryMode: "Chrome accents, glossy controls, digital nostalgia visuals",
    avoidList: [
      "enterprise UX",
      "products that need timelessness"
    ],
    previewBullets: [
      "Glossy gradients and chrome motifs",
      "Techno typography with nostalgic accents",
      "A playful tone with a slightly sci-fi retro edge"
    ],
    keywords: [
      "y2k",
      "retro futurism",
      "chrome",
      "digital nostalgia",
      "glossy"
    ],
    featured: false,
    demoAvailable: true,
    vars: vars({
      "--theme-bg": "hsl(219 35% 8%)",
      "--theme-bg-alt": "hsl(257 32% 12%)",
      "--theme-surface": "hsl(219 28% 16% / 0.78)",
      "--theme-surface-strong": "hsl(219 26% 22% / 0.9)",
      "--theme-text": "hsl(214 100% 96%)",
      "--theme-muted": "hsl(220 36% 74%)",
      "--theme-border": "hsl(49 74% 72% / 0.22)",
      "--theme-accent": "hsl(257 96% 66%)",
      "--theme-accent-2": "hsl(49 94% 64%)",
      "--theme-accent-contrast": "hsl(224 40% 10%)",
      "--theme-ring": "hsl(257 86% 66% / 0.36)",
      "--theme-shadow": "0 40px 120px rgba(1, 6, 18, 0.56)",
      "--theme-grid": "hsl(49 70% 80% / 0.08)",
    }),
  },
  {
    slug: "anti-design",
    modeLabel: "Anti-design",
    pageTitle: "Intentional disorder with visual tension",
    kicker: "Odd spacing / broken alignment / raw graphic interface",
    summary: "Deliberately breaks rhythm and alignment to push back against websites that feel overly templated and sanitized.",
    audience: "Culture, art, fashion, experimental brands, unconventional portfolios",
    family: "experimental-loud",
    primaryLanguage: "Intentional disorder",
    supportingTreatments: [
      "deliberate asymmetry",
      "raw typography",
      "unexpected spacing"
    ],
    imageryMode: "Collaged visuals and raw graphic treatment",
    avoidList: [
      "sensitive onboarding flows",
      "conversion paths that need extreme smoothness"
    ],
    previewBullets: [
      "Spacing and alignment that intentionally misbehave",
      "A page that feels human and opinionated",
      "Excellent for portfolios or culture-led brand pages"
    ],
    keywords: [
      "anti design",
      "deconstructed",
      "raw graphic",
      "intentional disorder",
      "experimental"
    ],
    featured: false,
    demoAvailable: true,
    vars: vars({
      "--theme-bg": "hsl(185 94% 90%)",
      "--theme-bg-alt": "hsl(223 88% 74%)",
      "--theme-surface": "hsl(0 0% 100%)",
      "--theme-surface-strong": "hsl(44 100% 96%)",
      "--theme-text": "hsl(0 0% 7%)",
      "--theme-muted": "hsl(26 17% 32%)",
      "--theme-border": "hsl(0 0% 7%)",
      "--theme-accent": "hsl(223 88% 54%)",
      "--theme-accent-2": "hsl(15 90% 52%)",
      "--theme-accent-contrast": "hsl(0 0% 6%)",
      "--theme-ring": "hsl(223 88% 56% / 0.34)",
      "--theme-shadow": "8px 8px 0 rgba(10, 10, 10, 0.92)",
      "--theme-grid": "hsl(0 0% 10% / 0.14)",
      "--theme-radius": "18px",
    }),
  },
  {
    slug: "typography-first",
    modeLabel: "Typography-first",
    pageTitle: "Type as the dominant visual system",
    kicker: "Expressive font pairing / giant headline / spacing-led composition",
    summary: "Typography does not just carry content here — it becomes the main visual material, pulling the page into a distinct voice.",
    audience: "Editorial platforms, product launches, studios, culture-led and luxury brand sites",
    family: "editorial-typography",
    primaryLanguage: "Type-led hierarchy",
    supportingTreatments: [
      "expressive type pairing",
      "oversized headlines",
      "spacing-led composition"
    ],
    imageryMode: "Text as the main graphic form",
    avoidList: [
      "systems filled with tiny labels",
      "accessibility being treated as optional"
    ],
    previewBullets: [
      "Oversized headlines that dominate the page",
      "Text becomes the primary shape and rhythm",
      "Well suited to brands with a strong point of view"
    ],
    keywords: [
      "typography",
      "type-led",
      "oversized headline",
      "editorial",
      "expressive"
    ],
    featured: false,
    demoAvailable: true,
    vars: vars({
      "--theme-bg": "hsl(274 35% 96%)",
      "--theme-bg-alt": "hsl(274 28% 92%)",
      "--theme-surface": "hsl(0 0% 100% / 0.75)",
      "--theme-surface-strong": "hsl(0 0% 100%)",
      "--theme-text": "hsl(312 18% 14%)",
      "--theme-muted": "hsl(312 14% 36%)",
      "--theme-border": "hsl(312 18% 18% / 0.12)",
      "--theme-accent": "hsl(274 34% 28%)",
      "--theme-accent-2": "hsl(104 38% 42%)",
      "--theme-accent-contrast": "hsl(38 62% 94%)",
      "--theme-ring": "hsl(274 28% 28% / 0.22)",
      "--theme-shadow": "0 16px 34px rgba(23, 20, 16, 0.08)",
      "--theme-grid": "hsl(312 18% 20% / 0.06)",
      "--theme-font-display": "var(--font-editorial), Georgia, serif",
    }),
  },
  {
    slug: "organic-mesh-gradients",
    modeLabel: "Organic mesh gradients",
    pageTitle: "Ambient color fields with soft futurism",
    kicker: "Mesh gradients / blobs / abstract ambient backgrounds",
    summary: "Uses organic color fields, blobs, and light diffusion to make a brand feel current, soft, and digitally native.",
    audience: "Startups, wellness tech, AI, creator tools, soft-futurist marketing sites",
    family: "tactile-organic",
    primaryLanguage: "Ambient gradient field",
    supportingTreatments: [
      "amorphous blobs",
      "soft diffusion",
      "gentle futuristic color"
    ],
    imageryMode: "Ambient gradient blobs and soft diffusion backgrounds",
    avoidList: [
      "insufficient contrast",
      "blobs obscuring layout structure"
    ],
    previewBullets: [
      "Mesh gradients that feel like an atmosphere of light",
      "Well suited to gentle, current brands",
      "Less tactile than claymorphism, but softer than clean SaaS"
    ],
    keywords: [
      "mesh gradient",
      "organic",
      "blob",
      "ambient",
      "soft futurism"
    ],
    featured: false,
    demoAvailable: true,
    vars: vars({
      "--theme-bg": "hsl(93 75% 95%)",
      "--theme-bg-alt": "hsl(131 68% 91%)",
      "--theme-surface": "hsl(0 0% 100% / 0.72)",
      "--theme-surface-strong": "hsl(0 0% 100% / 0.92)",
      "--theme-text": "hsl(131 24% 18%)",
      "--theme-muted": "hsl(131 14% 43%)",
      "--theme-border": "hsl(131 34% 62% / 0.3)",
      "--theme-accent": "hsl(283 76% 58%)",
      "--theme-accent-2": "hsl(93 72% 62%)",
      "--theme-accent-contrast": "hsl(0 0% 100%)",
      "--theme-ring": "hsl(283 86% 56% / 0.28)",
      "--theme-shadow": "0 24px 55px rgba(89, 93, 142, 0.14)",
      "--theme-grid": "hsl(131 32% 54% / 0.08)",
      "--theme-radius": "30px",
    }),
  },
  {
    slug: "premium-monochrome",
    modeLabel: "Premium monochrome",
    pageTitle: "Quiet luxury with restrained depth",
    kicker: "Monochrome refinement / serif-sans pairing / spacious elegance",
    summary: "Minimal color and very few effects, but with precise type, borders, and spacing to create a restrained digital-luxury feel.",
    audience: "Luxury commerce, fashion, architecture, boutique service brands",
    family: "editorial-typography",
    primaryLanguage: "Quiet luxury editorial",
    supportingTreatments: [
      "fine borders",
      "neutral palette",
      "serif-sans pairing"
    ],
    imageryMode: "Art-directed imagery with neutral palette and restrained framing",
    avoidList: [
      "mass-market pages needing more energy",
      "feature explanations that become overly dense"
    ],
    previewBullets: [
      "A highly restrained black, white, and neutral palette",
      "Typography and spacing do the work of making it feel expensive",
      "Easy to use for premium founder brands or boutique services"
    ],
    keywords: [
      "premium monochrome",
      "quiet luxury",
      "minimal luxury",
      "refined",
      "boutique"
    ],
    featured: true,
    demoAvailable: true,
    vars: vars({
      "--theme-bg": "hsl(123 35% 96%)",
      "--theme-bg-alt": "hsl(123 28% 92%)",
      "--theme-surface": "hsl(0 0% 100% / 0.75)",
      "--theme-surface-strong": "hsl(0 0% 100%)",
      "--theme-text": "hsl(161 18% 14%)",
      "--theme-muted": "hsl(161 14% 36%)",
      "--theme-border": "hsl(161 18% 18% / 0.12)",
      "--theme-accent": "hsl(123 34% 28%)",
      "--theme-accent-2": "hsl(313 38% 42%)",
      "--theme-accent-contrast": "hsl(38 62% 94%)",
      "--theme-ring": "hsl(123 28% 28% / 0.22)",
      "--theme-shadow": "0 16px 34px rgba(23, 20, 16, 0.08)",
      "--theme-grid": "hsl(161 18% 20% / 0.06)",
      "--theme-font-display": "var(--font-editorial), Georgia, serif",
    }),
  },
  {
    slug: "motion-led-storytelling",
    modeLabel: "Motion-led storytelling",
    pageTitle: "Narrative pacing built for scroll and reveal",
    kicker: "Scroll choreography / sticky narrative / cinematic pacing",
    summary: "Even without heavy motion, the layout is organized like a layered reveal journey to suggest storytelling through movement.",
    audience: "Brand launches, campaign microsites, interactive reports, studio showcases",
    family: "immersive-premium",
    primaryLanguage: "Narrative motion structure",
    supportingTreatments: [
      "reveal sequences",
      "sticky pacing",
      "narrative composition"
    ],
    imageryMode: "Interactive narrative pacing and layered reveal structure",
    avoidList: [
      "task-oriented pages",
      "wow-factor overpowering conversion"
    ],
    previewBullets: [
      "Section flow that suggests scroll choreography",
      "Great for brand launches or interactive storytelling",
      "Uses narrative pacing as an art-direction tool"
    ],
    keywords: [
      "motion-led",
      "scrollytelling",
      "sticky narrative",
      "immersive storytelling",
      "cinematic"
    ],
    featured: false,
    demoAvailable: true,
    vars: vars({
      "--theme-bg": "hsl(181 35% 8%)",
      "--theme-bg-alt": "hsl(219 32% 12%)",
      "--theme-surface": "hsl(181 28% 16% / 0.78)",
      "--theme-surface-strong": "hsl(181 26% 22% / 0.9)",
      "--theme-text": "hsl(214 100% 96%)",
      "--theme-muted": "hsl(220 36% 74%)",
      "--theme-border": "hsl(11 74% 72% / 0.22)",
      "--theme-accent": "hsl(219 96% 66%)",
      "--theme-accent-2": "hsl(11 94% 64%)",
      "--theme-accent-contrast": "hsl(224 40% 10%)",
      "--theme-ring": "hsl(219 86% 66% / 0.36)",
      "--theme-shadow": "0 40px 120px rgba(1, 6, 18, 0.56)",
      "--theme-grid": "hsl(11 70% 80% / 0.08)",
    }),
  },
  {
    slug: "iridescent-holographic-chrome",
    modeLabel: "Iridescent / holographic / chrome",
    pageTitle: "Reflective surfaces with Y2K future polish",
    kicker: "Chrome sheen / holographic highlights / reflective product art",
    summary: "More about reflective material and iridescent effects than a new layout system; strong for fashion-tech or high-novelty campaigns.",
    audience: "Fashion-tech, music, campaign microsites, youth culture launches, beauty tech",
    family: "experimental-loud",
    primaryLanguage: "Reflective material gradients",
    supportingTreatments: [
      "chrome accents",
      "iridescent glow",
      "reflective product art"
    ],
    imageryMode: "Reflective surfaces and holographic product shots",
    avoidList: [
      "products needing very high corporate trust",
      "highlight overload creating visual noise"
    ],
    previewBullets: [
      "Chrome surfaces with a soft rainbow sheen",
      "A hero driven more by reflective material than by UI cards",
      "Excellent for campaign art direction or music-tech launches"
    ],
    keywords: [
      "iridescent",
      "holographic",
      "chrome",
      "metallic",
      "reflective"
    ],
    featured: false,
    demoAvailable: false,
    vars: vars({
      "--theme-bg": "hsl(276 94% 90%)",
      "--theme-bg-alt": "hsl(314 88% 74%)",
      "--theme-surface": "hsl(0 0% 100%)",
      "--theme-surface-strong": "hsl(44 100% 96%)",
      "--theme-text": "hsl(0 0% 7%)",
      "--theme-muted": "hsl(26 17% 32%)",
      "--theme-border": "hsl(0 0% 7%)",
      "--theme-accent": "hsl(314 88% 54%)",
      "--theme-accent-2": "hsl(106 90% 52%)",
      "--theme-accent-contrast": "hsl(0 0% 6%)",
      "--theme-ring": "hsl(314 88% 56% / 0.34)",
      "--theme-shadow": "8px 8px 0 rgba(10, 10, 10, 0.92)",
      "--theme-grid": "hsl(0 0% 10% / 0.14)",
      "--theme-radius": "18px",
    }),
  },
  {
    slug: "meaningful-minimalism",
    modeLabel: "Meaningful minimalism / Zen UI",
    pageTitle: "Calm whitespace with understated product presence",
    kicker: "Editorial calm / zen restraint / quiet hierarchy",
    summary: "Close to editorial minimalism, but leans more into stillness, softness, and a slower reading rhythm with only a few precise accents.",
    audience: "Wellness, architecture, boutique SaaS, premium services, founder brands",
    family: "editorial-typography",
    primaryLanguage: "Calm typographic restraint",
    supportingTreatments: [
      "quiet spacing",
      "soft monochrome",
      "precise accents"
    ],
    imageryMode: "Cropped editorial still-life photography",
    avoidList: [
      "launch pages that need high energy",
      "very dense feature matrices"
    ],
    previewBullets: [
      "Large white space with a small number of confident accents",
      "Imagery leans toward still-life composition or refined crops",
      "Well suited to brands that need a calm, mature tone"
    ],
    keywords: [
      "meaningful minimalism",
      "zen ui",
      "calm",
      "quiet luxury",
      "editorial"
    ],
    featured: false,
    demoAvailable: false,
    vars: vars({
      "--theme-bg": "hsl(159 35% 96%)",
      "--theme-bg-alt": "hsl(159 28% 92%)",
      "--theme-surface": "hsl(0 0% 100% / 0.75)",
      "--theme-surface-strong": "hsl(0 0% 100%)",
      "--theme-text": "hsl(197 18% 14%)",
      "--theme-muted": "hsl(197 14% 36%)",
      "--theme-border": "hsl(197 18% 18% / 0.12)",
      "--theme-accent": "hsl(159 34% 28%)",
      "--theme-accent-2": "hsl(349 38% 42%)",
      "--theme-accent-contrast": "hsl(38 62% 94%)",
      "--theme-ring": "hsl(159 28% 28% / 0.22)",
      "--theme-shadow": "0 16px 34px rgba(23, 20, 16, 0.08)",
      "--theme-grid": "hsl(197 18% 20% / 0.06)",
      "--theme-font-display": "var(--font-editorial), Georgia, serif",
    }),
  },
  {
    slug: "cute-alism-kawaii-brutalism",
    modeLabel: "Cute-alism / Kawaii brutalism",
    pageTitle: "Bold geometry softened by playful character",
    kicker: "Friendly bold UI / soft brutalism / character-driven web",
    summary: "Blends the weight of brutalism with a friendlier, cuter, more youthful tone centered on character art and sticker-like visuals.",
    audience: "Consumer products, youth brands, creator tools, family apps, playful onboarding",
    family: "experimental-loud",
    primaryLanguage: "Friendly high-contrast geometry",
    supportingTreatments: [
      "cute iconography",
      "soft brutalist blocks",
      "mascot-led art direction"
    ],
    imageryMode: "Character-led illustration and playful product imagery",
    avoidList: [
      "enterprise dashboards",
      "contexts requiring formal authority"
    ],
    previewBullets: [
      "Bold shapes that still feel soft and playful",
      "Great for mascots, sticker systems, and character art",
      "Especially strong for consumer or youth-facing brands"
    ],
    keywords: [
      "cute-alism",
      "kawaii brutalism",
      "playful brutalist",
      "cute geometry",
      "youth"
    ],
    featured: false,
    demoAvailable: false,
    vars: vars({
      "--theme-bg": "hsl(27 94% 90%)",
      "--theme-bg-alt": "hsl(65 88% 74%)",
      "--theme-surface": "hsl(0 0% 100%)",
      "--theme-surface-strong": "hsl(44 100% 96%)",
      "--theme-text": "hsl(0 0% 7%)",
      "--theme-muted": "hsl(26 17% 32%)",
      "--theme-border": "hsl(0 0% 7%)",
      "--theme-accent": "hsl(65 88% 54%)",
      "--theme-accent-2": "hsl(217 90% 52%)",
      "--theme-accent-contrast": "hsl(0 0% 6%)",
      "--theme-ring": "hsl(65 88% 56% / 0.34)",
      "--theme-shadow": "8px 8px 0 rgba(10, 10, 10, 0.92)",
      "--theme-grid": "hsl(0 0% 10% / 0.14)",
      "--theme-radius": "18px",
    }),
  },
  {
    slug: "brutalist-editorial-zine",
    modeLabel: "Brutalist editorial / Zine style",
    pageTitle: "Raw publication energy with deconstructed type",
    kicker: "Zine collage / raw editorial layout / deconstructed typography",
    summary: "Sits between anti-design and typography-first, emphasizing collage, broken type rhythm, rough texture, and independent-publication energy.",
    audience: "Art publications, fashion editorials, culture sites, indie portfolios, magazines",
    family: "editorial-typography",
    primaryLanguage: "Collaged editorial tension",
    supportingTreatments: [
      "raw type layering",
      "cut-out composition",
      "publication-inspired tension"
    ],
    imageryMode: "Scanned paper, cutout stock, and deconstructed editorial imagery",
    avoidList: [
      "conversion pages requiring high clarity",
      "highly standardized business content"
    ],
    previewBullets: [
      "Feels like an independent magazine or cultural poster",
      "Images and text layered like physical cutouts",
      "Strong for brands with a clear artistic point of view"
    ],
    keywords: [
      "zine",
      "brutalist editorial",
      "collage",
      "publication",
      "deconstructed typography"
    ],
    featured: false,
    demoAvailable: false,
    vars: vars({
      "--theme-bg": "hsl(1 35% 96%)",
      "--theme-bg-alt": "hsl(1 28% 92%)",
      "--theme-surface": "hsl(0 0% 100% / 0.75)",
      "--theme-surface-strong": "hsl(0 0% 100%)",
      "--theme-text": "hsl(39 18% 14%)",
      "--theme-muted": "hsl(39 14% 36%)",
      "--theme-border": "hsl(39 18% 18% / 0.12)",
      "--theme-accent": "hsl(1 34% 28%)",
      "--theme-accent-2": "hsl(191 38% 42%)",
      "--theme-accent-contrast": "hsl(38 62% 94%)",
      "--theme-ring": "hsl(1 28% 28% / 0.22)",
      "--theme-shadow": "0 16px 34px rgba(23, 20, 16, 0.08)",
      "--theme-grid": "hsl(39 18% 20% / 0.06)",
      "--theme-font-display": "var(--font-editorial), Georgia, serif",
    }),
  },
  {
    slug: "inclusive-accessibility-first",
    modeLabel: "Inclusive design / Accessibility-first UI",
    pageTitle: "High-clarity interfaces with accessible confidence",
    kicker: "High contrast / readable systems / inclusive product clarity",
    summary: "Not only about compliance; this is an art-direction choice where readability, contrast, and generously sized controls become a clear visual identity.",
    audience: "Government, healthcare, education, enterprise tools, public services",
    family: "grid-product",
    primaryLanguage: "High-clarity accessible layout",
    supportingTreatments: [
      "strong contrast",
      "readable type",
      "large controls"
    ],
    imageryMode: "Inclusive product photography and simple diagrams",
    avoidList: [
      "trend-chasing that hurts readability",
      "too many secondary colors creating noise"
    ],
    previewBullets: [
      "Strong contrast with clearly sized type and controls",
      "Imagery leans toward real people and real contexts of use",
      "Shows that accessibility can have its own visual identity"
    ],
    keywords: [
      "inclusive design",
      "accessibility first",
      "readable",
      "wcag",
      "high contrast"
    ],
    featured: false,
    demoAvailable: false,
    vars: vars({
      "--theme-bg": "hsl(272 60% 95%)",
      "--theme-bg-alt": "hsl(310 56% 91%)",
      "--theme-surface": "hsl(0 0% 100% / 0.95)",
      "--theme-surface-strong": "hsl(0 0% 100%)",
      "--theme-text": "hsl(102 45% 14%)",
      "--theme-muted": "hsl(102 22% 36%)",
      "--theme-border": "hsl(102 26% 24% / 0.12)",
      "--theme-accent": "hsl(310 72% 54%)",
      "--theme-accent-2": "hsl(102 72% 48%)",
      "--theme-accent-contrast": "hsl(0 0% 100%)",
      "--theme-ring": "hsl(310 80% 54% / 0.3)",
      "--theme-shadow": "0 14px 34px rgba(14, 26, 48, 0.12)",
      "--theme-grid": "hsl(102 30% 22% / 0.06)",
    }),
  },
  {
    slug: "skeuomorphism",
    modeLabel: "Skeuomorphism",
    pageTitle: "Interfaces that simulate familiar materials and tactile surfaces",
    kicker: "Tactile realism / dimensional UI / material cues",
    summary: "A direction that recreates real-world materials such as metal, leather, plastic, or glass to make digital interfaces feel tactile, familiar, and highly finished.",
    audience: "Consumer apps, premium dashboards, and products that benefit from a crafted, physical feel",
    family: "tactile-organic",
    primaryLanguage: "Material surfaces, shadowing, and tactile depth",
    supportingTreatments: [
      "realistic material texture",
      "controlled soft shadowing",
      "edge detail and specular highlights"
    ],
    imageryMode: "Icons and panels with visible material finish, reflected highlights, and subtle bevel or emboss cues",
    avoidList: [
      "overly kitsch retro-mobile skeuomorphism",
      "heavy messy shadows",
      "decorative detail that hurts usability"
    ],
    previewBullets: [
      "Material surfaces make the UI feel touchable",
      "Visual finishing detail creates a strong sense of craft and trust",
      "Works well for screens that need depth and premium presence"
    ],
    keywords: [
      "skeuomorphism",
      "tactile ui",
      "material realism",
      "dimensional interface",
      "premium surfaces"
    ],
    featured: false,
    demoAvailable: true,
    vars: vars({
      "--theme-bg": "hsl(36 18% 90%)",
      "--theme-bg-alt": "hsl(32 14% 84%)",
      "--theme-surface": "hsl(0 0% 98% / 0.94)",
      "--theme-surface-strong": "hsl(0 0% 100% / 0.98)",
      "--theme-text": "hsl(220 12% 22%)",
      "--theme-muted": "hsl(220 8% 42%)",
      "--theme-border": "hsl(28 10% 58% / 0.34)",
      "--theme-accent": "hsl(214 54% 46%)",
      "--theme-accent-2": "hsl(28 36% 50%)",
      "--theme-accent-contrast": "hsl(0 0% 100%)",
      "--theme-ring": "hsl(214 54% 46% / 0.3)",
      "--theme-shadow": "0 22px 40px rgba(61, 67, 86, 0.16)",
      "--theme-grid": "hsl(220 10% 40% / 0.08)",
    }),
  },
  {
    slug: "asymmetry-grid-layouts",
    modeLabel: "Asymmetry and broken grid layouts",
    pageTitle: "Flagship launch with asymmetry",
    kicker: "Canonical flagship / anti-generic product marketing",
    summary: "An asymmetric launch-page direction with strong hierarchy, shifting section rhythm, and anti-generic product-marketing energy.",
    audience: "Founders, flagship launches, brand-forward product marketing pages",
    family: "high-agency",
    primaryLanguage: "Asymmetry and strong hierarchy",
    supportingTreatments: [
      "muted color fields",
      "semi-flat depth",
      "changing section rhythm"
    ],
    imageryMode: "Abstract geometry and composition-led hero treatment",
    avoidList: [
      "overly safe centered heroes",
      "generic three-column feature grids",
      "weak CTA hierarchy"
    ],
    previewBullets: [
      "Off-axis hero with strong hierarchy",
      "Multiple layout rhythms that shift by section",
      "CTA and proof blocks feel dimensional without turning into card spam"
    ],
    keywords: [
      "asymmetry",
      "launch page",
      "flagship",
      "anti-generic",
      "hierarchy"
    ],
    featured: false,
    demoAvailable: true,
    vars: vars({
      "--theme-bg": "hsl(122 56% 95%)",
      "--theme-bg-alt": "hsl(160 52% 89%)",
      "--theme-surface": "hsl(0 0% 100% / 0.8)",
      "--theme-surface-strong": "hsl(0 0% 100%)",
      "--theme-text": "hsl(18 28% 12%)",
      "--theme-muted": "hsl(18 18% 36%)",
      "--theme-border": "hsl(18 24% 16% / 0.14)",
      "--theme-accent": "hsl(160 72% 48%)",
      "--theme-accent-2": "hsl(312 42% 28%)",
      "--theme-accent-contrast": "hsl(24 48% 94%)",
      "--theme-ring": "hsl(160 82% 48% / 0.32)",
      "--theme-shadow": "0 28px 72px rgba(92, 61, 39, 0.16)",
      "--theme-grid": "hsl(22 20% 18% / 0.07)",
    }),
  },
  {
    slug: "dada-deconstructed",
    modeLabel: "Dada deconstructed",
    pageTitle: "Deconstructed collage with anti-order energy and deliberate disruption",
    kicker: "Collage disruption / anti-order / fractured editorial",
    summary: "Inspired by Dada and deconstructed editorial language, this style uses cut-up collage, layering, axis shifts, and visual collision to feel rebellious, irregular, and full of statement-making energy.",
    audience: "Contemporary culture, fashion editorials, music releases, experimental portfolios, and campaigns that need a counter-conventional voice",
    family: "experimental-loud",
    primaryLanguage: "Deconstructed collage and intentional visual collision",
    supportingTreatments: [
      "handmade collage",
      "off-axis typography",
      "scanned texture and torn-paper cues"
    ],
    imageryMode: "Layered cut-out imagery, rotated type, scanned paper, torn texture, and components arranged like a deliberately broken editorial spread",
    avoidList: [
      "pure randomness without rhythm",
      "layouts that are too clean and balanced",
      "too many elements that bury the message"
    ],
    previewBullets: [
      "The anti-design attitude is obvious from the first screen",
      "Collaged layers create a strong editorial personality",
      "Fits projects that need a visual statement rather than safe polish"
    ],
    keywords: [
      "dada",
      "deconstructed editorial",
      "collage",
      "anti-design",
      "visual disruption"
    ],
    featured: false,
    demoAvailable: true,
    vars: vars({
      "--theme-bg": "hsl(74 94% 90%)",
      "--theme-bg-alt": "hsl(112 88% 74%)",
      "--theme-surface": "hsl(0 0% 100%)",
      "--theme-surface-strong": "hsl(44 100% 96%)",
      "--theme-text": "hsl(0 0% 7%)",
      "--theme-muted": "hsl(26 17% 32%)",
      "--theme-border": "hsl(0 0% 7%)",
      "--theme-accent": "hsl(112 88% 54%)",
      "--theme-accent-2": "hsl(264 90% 52%)",
      "--theme-accent-contrast": "hsl(0 0% 6%)",
      "--theme-ring": "hsl(112 88% 56% / 0.34)",
      "--theme-shadow": "8px 8px 0 rgba(10, 10, 10, 0.92)",
      "--theme-grid": "hsl(0 0% 10% / 0.14)",
      "--theme-radius": "18px",
    }),
  },
  {
    slug: "duotone-graphics",
    modeLabel: "Duotone graphics",
    pageTitle: "Two-tone graphic language with sharp poster energy",
    kicker: "Duotone treatment / poster contrast / graphic compression",
    summary: "A direction built on two dominant tones that compress imagery and typography into a compact, bold, and highly recognizable system, ideal for digital posters, campaign heroes, and pages that need graphic punch.",
    audience: "Campaign pages, media brands, creative launches, music or event landings, and social-first microsites",
    family: "grid-product",
    primaryLanguage: "Two-tone contrast and strong poster rhythm",
    supportingTreatments: [
      "clear two-color palette",
      "compressed high-contrast imagery",
      "bold direct typography"
    ],
    imageryMode: "Images treated in duotone, portraits or objects with clear silhouettes, and typography overlaid with promotional-poster energy",
    avoidList: [
      "too many secondary colors breaking the duotone logic",
      "images without strong silhouette",
      "color treatment too weak to carry poster energy"
    ],
    previewBullets: [
      "Two-tone color creates instant recognition",
      "Image and type fuse into a clear digital-poster feel",
      "Great for campaigns that need compact but forceful impact"
    ],
    keywords: [
      "duotone",
      "poster graphics",
      "two-tone",
      "campaign visual",
      "high contrast"
    ],
    featured: false,
    demoAvailable: true,
    vars: vars({
      "--theme-bg": "hsl(24 60% 95%)",
      "--theme-bg-alt": "hsl(62 56% 91%)",
      "--theme-surface": "hsl(0 0% 100% / 0.95)",
      "--theme-surface-strong": "hsl(0 0% 100%)",
      "--theme-text": "hsl(214 45% 14%)",
      "--theme-muted": "hsl(214 22% 36%)",
      "--theme-border": "hsl(214 26% 24% / 0.12)",
      "--theme-accent": "hsl(62 72% 54%)",
      "--theme-accent-2": "hsl(214 72% 48%)",
      "--theme-accent-contrast": "hsl(0 0% 100%)",
      "--theme-ring": "hsl(62 80% 54% / 0.3)",
      "--theme-shadow": "0 14px 34px rgba(14, 26, 48, 0.12)",
      "--theme-grid": "hsl(214 30% 22% / 0.06)",
    }),
  },
  {
    slug: "suprematism",
    modeLabel: "Suprematism",
    pageTitle: "Minimal geometric abstraction with radical clarity and avant-garde force",
    kicker: "Abstract geometry / radical reduction / avant-garde composition",
    summary: "Inspired by Suprematism, this direction uses minimal geometry, expansive negative space, and non-representational composition to feel radical, distilled, and strongly declarative.",
    audience: "Art-forward brands, experimental campaigns, cultural microsites, poster-led landing pages, and portfolios driven by visual ideas",
    family: "grid-product",
    primaryLanguage: "Minimal abstract geometry and decisive negative space",
    supportingTreatments: [
      "condensed geometric planes",
      "wide negative space",
      "limited but sharp palette"
    ],
    imageryMode: "Squares, circles, diagonals, and color planes arranged as abstract statements, with little or no reliance on literal imagery",
    avoidList: [
      "too much illustrative detail",
      "conventional UI grids that weaken the avant-garde feel",
      "literal photography overwhelming the abstract language"
    ],
    previewBullets: [
      "A few geometric forms can carry a very strong visual statement",
      "Large negative space heightens the distilled avant-garde feel",
      "Well suited to landing pages built around a singular visual idea"
    ],
    keywords: [
      "suprematism",
      "abstract geometry",
      "avant-garde",
      "minimal composition",
      "visual manifesto"
    ],
    featured: false,
    demoAvailable: true,
    vars: vars({
      "--theme-bg": "hsl(124 60% 95%)",
      "--theme-bg-alt": "hsl(162 56% 91%)",
      "--theme-surface": "hsl(0 0% 100% / 0.95)",
      "--theme-surface-strong": "hsl(0 0% 100%)",
      "--theme-text": "hsl(314 45% 14%)",
      "--theme-muted": "hsl(314 22% 36%)",
      "--theme-border": "hsl(314 26% 24% / 0.12)",
      "--theme-accent": "hsl(162 72% 54%)",
      "--theme-accent-2": "hsl(314 72% 48%)",
      "--theme-accent-contrast": "hsl(0 0% 100%)",
      "--theme-ring": "hsl(162 80% 54% / 0.3)",
      "--theme-shadow": "0 14px 34px rgba(14, 26, 48, 0.12)",
      "--theme-grid": "hsl(314 30% 22% / 0.06)",
    }),
  },
  {
    slug: "op-art",
    modeLabel: "Op art / Optical art",
    pageTitle: "Optical rhythm with geometric visual tension",
    kicker: "Optical illusion / high-contrast geometry / rhythmic vibration",
    summary: "Uses repeated geometry, sharp contrast, and striped or radial rhythm to create vibration, movement, and optical illusion on a static surface.",
    audience: "Campaign graphics, poster-led landing pages, culture brands, art-forward microsites",
    family: "grid-product",
    primaryLanguage: "High-contrast geometric illusion",
    supportingTreatments: [
      "dense repeated stripes",
      "radial distortion",
      "poster-like typography"
    ],
    imageryMode: "Optical patterns, hard-contrast color fields, and graphic-field hero treatment",
    avoidList: [
      "conventional UI cards",
      "overly organic illustration",
      "too much detail that weakens the optical effect"
    ],
    previewBullets: [
      "Repeated patterns create a vibrating sense of movement",
      "High contrast makes the hero feel like a graphic poster",
      "Strong for campaigns that need instant visual impact"
    ],
    keywords: [
      "op art",
      "optical art",
      "high contrast",
      "geometric illusion",
      "graphic modernism"
    ],
    featured: false,
    demoAvailable: true,
    vars: vars({
      "--theme-bg": "hsl(55 60% 95%)",
      "--theme-bg-alt": "hsl(93 56% 91%)",
      "--theme-surface": "hsl(0 0% 100% / 0.95)",
      "--theme-surface-strong": "hsl(0 0% 100%)",
      "--theme-text": "hsl(245 45% 14%)",
      "--theme-muted": "hsl(245 22% 36%)",
      "--theme-border": "hsl(245 26% 24% / 0.12)",
      "--theme-accent": "hsl(93 72% 54%)",
      "--theme-accent-2": "hsl(245 72% 48%)",
      "--theme-accent-contrast": "hsl(0 0% 100%)",
      "--theme-ring": "hsl(93 80% 54% / 0.3)",
      "--theme-shadow": "0 14px 34px rgba(14, 26, 48, 0.12)",
      "--theme-grid": "hsl(245 30% 22% / 0.06)",
    }),
  },
  {
    slug: "expressionist-graphics",
    modeLabel: "Expressionist graphics",
    pageTitle: "Emotion-first graphics with raw visual friction",
    kicker: "Painterly tension / raw mark-making / expressive composition",
    summary: "Leans on emotional force, aggressive marks, rough texture, and expressive composition to give a website a clear artistic voice instead of pure cleanliness and logic.",
    audience: "Art projects, culture brands, fashion campaigns, experimental portfolios, music releases",
    family: "experimental-loud",
    primaryLanguage: "Expressive graphic texture",
    supportingTreatments: [
      "paper or paint texture",
      "off-balance composition",
      "raw or condensed type"
    ],
    imageryMode: "Brush strokes, scanned texture, emotional collage, and poster-like image treatment",
    avoidList: [
      "overly clean corporate UI",
      "emotionless icon systems",
      "overly even grids that remove tension"
    ],
    previewBullets: [
      "Texture and mark-making feel distinctly human",
      "Composition stays slightly off-balance to preserve energy",
      "Well suited to brands that need an artistic statement"
    ],
    keywords: [
      "expressionism",
      "expressive graphics",
      "painterly",
      "raw texture",
      "art-driven"
    ],
    featured: false,
    demoAvailable: true,
    vars: vars({
      "--theme-bg": "hsl(158 94% 90%)",
      "--theme-bg-alt": "hsl(196 88% 74%)",
      "--theme-surface": "hsl(0 0% 100%)",
      "--theme-surface-strong": "hsl(44 100% 96%)",
      "--theme-text": "hsl(0 0% 7%)",
      "--theme-muted": "hsl(26 17% 32%)",
      "--theme-border": "hsl(0 0% 7%)",
      "--theme-accent": "hsl(196 88% 54%)",
      "--theme-accent-2": "hsl(348 90% 52%)",
      "--theme-accent-contrast": "hsl(0 0% 6%)",
      "--theme-ring": "hsl(196 88% 56% / 0.34)",
      "--theme-shadow": "8px 8px 0 rgba(10, 10, 10, 0.92)",
      "--theme-grid": "hsl(0 0% 10% / 0.14)",
      "--theme-radius": "18px",
    }),
  },
  {
    slug: "glitch-digital-distortion",
    modeLabel: "Glitch / digital distortion",
    pageTitle: "Intentional signal noise and digital disruption",
    kicker: "Signal breakup / corrupted frames / techno interference",
    summary: "Uses signal failure, scanlines, broken frames, and digital noise to create a tense, unstable surface with experimental tech energy.",
    audience: "Music-tech, gaming-lite, cyber campaigns, creative tool launches, experimental digital brands",
    family: "experimental-loud",
    primaryLanguage: "Digital noise and signal distortion",
    supportingTreatments: [
      "scanlines",
      "pixel breakup",
      "narrow techno typography"
    ],
    imageryMode: "Corrupted frames, scanlines, RGB offsets, and screen-noise imagery",
    avoidList: [
      "long-form reading flows",
      "sensitive conversion forms",
      "noise covering the entire page"
    ],
    previewBullets: [
      "The hero feels like a signal in the middle of breaking apart",
      "Noise and distortion create a clear cyber tone",
      "Strong for digital campaigns that want experimental energy"
    ],
    keywords: [
      "glitch",
      "digital distortion",
      "signal noise",
      "scanline",
      "cyber"
    ],
    featured: false,
    demoAvailable: true,
    vars: vars({
      "--theme-bg": "hsl(194 35% 8%)",
      "--theme-bg-alt": "hsl(232 32% 12%)",
      "--theme-surface": "hsl(194 28% 16% / 0.78)",
      "--theme-surface-strong": "hsl(194 26% 22% / 0.9)",
      "--theme-text": "hsl(214 100% 96%)",
      "--theme-muted": "hsl(220 36% 74%)",
      "--theme-border": "hsl(24 74% 72% / 0.22)",
      "--theme-accent": "hsl(232 96% 66%)",
      "--theme-accent-2": "hsl(24 94% 64%)",
      "--theme-accent-contrast": "hsl(224 40% 10%)",
      "--theme-ring": "hsl(232 86% 66% / 0.36)",
      "--theme-shadow": "0 40px 120px rgba(1, 6, 18, 0.56)",
      "--theme-grid": "hsl(24 70% 80% / 0.08)",
    }),
  },
  {
    slug: "rgb-channel-split",
    modeLabel: "RGB channel split",
    pageTitle: "Color-channel offsets with electronic motion",
    kicker: "Color separation / chromatic offset / digital afterimage",
    summary: "Offsets red, green, and blue channels to create chromatic edges, afterimage, and a subtle sense of motion even when the image is static.",
    audience: "Music, nightlife, experimental product pages, gaming aesthetics, digital posters",
    family: "experimental-loud",
    primaryLanguage: "Electronic chromatic offset",
    supportingTreatments: [
      "chromatic fringing",
      "dark high-contrast grounds",
      "techno sans or condensed type"
    ],
    imageryMode: "Images or objects with RGB edge separation, often on dark or high-contrast backgrounds",
    avoidList: [
      "product imagery needing perfect realism",
      "corporate-trust contexts",
      "overuse on long reading text"
    ],
    previewBullets: [
      "Chromatic edge offsets create instant digital energy",
      "Less chaotic than glitch but still clearly experimental",
      "Works well for digital posters, music pages, or motion-feel heroes"
    ],
    keywords: [
      "rgb split",
      "channel split",
      "chromatic aberration",
      "color channels",
      "digital effect"
    ],
    featured: false,
    demoAvailable: true,
    vars: vars({
      "--theme-bg": "hsl(288 94% 90%)",
      "--theme-bg-alt": "hsl(326 88% 74%)",
      "--theme-surface": "hsl(0 0% 100%)",
      "--theme-surface-strong": "hsl(44 100% 96%)",
      "--theme-text": "hsl(0 0% 7%)",
      "--theme-muted": "hsl(26 17% 32%)",
      "--theme-border": "hsl(0 0% 7%)",
      "--theme-accent": "hsl(326 88% 54%)",
      "--theme-accent-2": "hsl(118 90% 52%)",
      "--theme-accent-contrast": "hsl(0 0% 6%)",
      "--theme-ring": "hsl(326 88% 56% / 0.34)",
      "--theme-shadow": "8px 8px 0 rgba(10, 10, 10, 0.92)",
      "--theme-grid": "hsl(0 0% 10% / 0.14)",
      "--theme-radius": "18px",
    }),
  },
  {
    slug: "isometric-design",
    modeLabel: "Isometric design",
    pageTitle: "System illustration through isometric space",
    kicker: "Isometric illustration / modular systems / explanatory depth",
    summary: "Uses isometric perspective to turn features, systems, or workflows into structured scenes with depth, making explanation more visual and easier to parse.",
    audience: "SaaS, infra tools, education products, system explainers, product illustration libraries",
    family: "grid-product",
    primaryLanguage: "Isometric system illustration",
    supportingTreatments: [
      "clear modular blocks",
      "clean bright palette",
      "diagram-like composition"
    ],
    imageryMode: "Architectural blocks, mini dashboards, and objects built on an isometric grid",
    avoidList: [
      "heroes needing naturalistic realism",
      "overly dense scenes",
      "mixed perspectives that break the grid"
    ],
    previewBullets: [
      "Illustrated scenes feel dimensional while staying highly structured",
      "Useful for explaining flows, features, and product architecture",
      "Well suited to websites that need clear visual explainers"
    ],
    keywords: [
      "isometric",
      "system illustration",
      "diagrammatic",
      "explainer",
      "illustrated systems"
    ],
    featured: false,
    demoAvailable: true,
    vars: vars({
      "--theme-bg": "hsl(14 60% 95%)",
      "--theme-bg-alt": "hsl(52 56% 91%)",
      "--theme-surface": "hsl(0 0% 100% / 0.95)",
      "--theme-surface-strong": "hsl(0 0% 100%)",
      "--theme-text": "hsl(204 45% 14%)",
      "--theme-muted": "hsl(204 22% 36%)",
      "--theme-border": "hsl(204 26% 24% / 0.12)",
      "--theme-accent": "hsl(52 72% 54%)",
      "--theme-accent-2": "hsl(204 72% 48%)",
      "--theme-accent-contrast": "hsl(0 0% 100%)",
      "--theme-ring": "hsl(52 80% 54% / 0.3)",
      "--theme-shadow": "0 14px 34px rgba(14, 26, 48, 0.12)",
      "--theme-grid": "hsl(204 30% 22% / 0.06)",
    }),
  },
  {
    slug: "wavy-sections",
    modeLabel: "Wavy sections",
    pageTitle: "Section rhythm shaped by soft waves and directional flow",
    kicker: "Organic dividers / flowing section rhythm / soft but still structured",
    summary: "Uses waves, soft dividers, and flowing transitions between sections to make a page feel less rigid, more approachable, and visually guided from block to block.",
    audience: "Wellness brands, creator products, consumer landing pages, and sites that need softer approachability",
    family: "grid-product",
    primaryLanguage: "Organic curves and soft section flow",
    supportingTreatments: [
      "organic shape dividers",
      "soft color fields",
      "flowing section transitions"
    ],
    imageryMode: "Wavy backgrounds, curved dividers, and sections connected by soft color fields",
    avoidList: [
      "sectioning that feels too slide-like and rigid",
      "overusing waves until the page loses anchors",
      "overly sentimental gradients"
    ],
    previewBullets: [
      "Sections connect through waves or curved fields",
      "The page rhythm feels softer than a straight grid",
      "Useful for landing pages that need a current, approachable tone"
    ],
    keywords: [
      "wavy",
      "shape divider",
      "organic sections",
      "flowing layout",
      "soft landing page"
    ],
    featured: false,
    demoAvailable: true,
    vars: vars({
      "--theme-bg": "hsl(326 60% 95%)",
      "--theme-bg-alt": "hsl(4 56% 91%)",
      "--theme-surface": "hsl(0 0% 100% / 0.95)",
      "--theme-surface-strong": "hsl(0 0% 100%)",
      "--theme-text": "hsl(156 45% 14%)",
      "--theme-muted": "hsl(156 22% 36%)",
      "--theme-border": "hsl(156 26% 24% / 0.12)",
      "--theme-accent": "hsl(4 72% 54%)",
      "--theme-accent-2": "hsl(156 72% 48%)",
      "--theme-accent-contrast": "hsl(0 0% 100%)",
      "--theme-ring": "hsl(4 80% 54% / 0.3)",
      "--theme-shadow": "0 14px 34px rgba(14, 26, 48, 0.12)",
      "--theme-grid": "hsl(156 30% 22% / 0.06)",
    }),
  },
  {
    slug: "canon-grid-editorial",
    modeLabel: "Canon grid editorial",
    pageTitle: "Editorial composition guided by canonical page proportion",
    kicker: "Canon grid / page proportion / refined editorial hierarchy",
    summary: "Draws from classical canon-grid proportion to create mature reading rhythm, disciplined spacing, and a page that feels carefully art-directed rather than casually assembled.",
    audience: "Editorial brands, luxury content pages, refined portfolios, and sites that need publication-like authority",
    family: "editorial-typography",
    primaryLanguage: "Canonical page proportion and editorial hierarchy",
    supportingTreatments: [
      "wide margins",
      "refined typographic rhythm",
      "balanced text-image proportion"
    ],
    imageryMode: "Disciplined image crops, balanced text blocks, and wide margins like a printed spread",
    avoidList: [
      "card-heavy UI that breaks the editorial feeling",
      "arbitrary spacing that ignores page proportion",
      "overly loud CTAs"
    ],
    previewBullets: [
      "Wide margins and highly disciplined text blocks",
      "The page feels like a carefully composed publication",
      "Strong for content-led pages and refined brands"
    ],
    keywords: [
      "canon grid",
      "editorial",
      "page proportion",
      "print-inspired",
      "typographic layout"
    ],
    featured: false,
    demoAvailable: true,
    vars: vars({
      "--theme-bg": "hsl(182 35% 96%)",
      "--theme-bg-alt": "hsl(182 28% 92%)",
      "--theme-surface": "hsl(0 0% 100% / 0.75)",
      "--theme-surface-strong": "hsl(0 0% 100%)",
      "--theme-text": "hsl(220 18% 14%)",
      "--theme-muted": "hsl(220 14% 36%)",
      "--theme-border": "hsl(220 18% 18% / 0.12)",
      "--theme-accent": "hsl(182 34% 28%)",
      "--theme-accent-2": "hsl(12 38% 42%)",
      "--theme-accent-contrast": "hsl(38 62% 94%)",
      "--theme-ring": "hsl(182 28% 28% / 0.22)",
      "--theme-shadow": "0 16px 34px rgba(23, 20, 16, 0.08)",
      "--theme-grid": "hsl(220 18% 20% / 0.06)",
      "--theme-font-display": "var(--font-editorial), Georgia, serif",
    }),
  },
  {
    slug: "floating-composition",
    modeLabel: "Floating composition",
    pageTitle: "Layered floating elements for a light but assertive hero",
    kicker: "Floating cards / layered objects / off-grid balance",
    summary: "Uses suspended cards, objects, or image planes with deliberate gaps to create a light, mobile feeling while preserving enough hierarchy for launches and product storytelling.",
    audience: "AI tools, startup launches, product heroes, and pages that need a modern agile feel",
    family: "high-agency",
    primaryLanguage: "Floating layers and off-axis balance",
    supportingTreatments: [
      "generous spacing",
      "layered floating planes",
      "offset composition"
    ],
    imageryMode: "Cards, screenshots, or objects suspended in space with restrained shadow cues",
    avoidList: [
      "stacking too densely until it feels cluttered",
      "putting every element on the same height plane",
      "heavy shadows that kill the lightness"
    ],
    previewBullets: [
      "Elements feel suspended rather than flatly placed",
      "The hero has depth while staying airy",
      "Useful for product pages that need speed and currentness"
    ],
    keywords: [
      "floating composition",
      "layered hero",
      "suspended cards",
      "offset layout",
      "product storytelling"
    ],
    featured: false,
    demoAvailable: true,
    vars: vars({
      "--theme-bg": "hsl(35 56% 95%)",
      "--theme-bg-alt": "hsl(73 52% 89%)",
      "--theme-surface": "hsl(0 0% 100% / 0.8)",
      "--theme-surface-strong": "hsl(0 0% 100%)",
      "--theme-text": "hsl(18 28% 12%)",
      "--theme-muted": "hsl(18 18% 36%)",
      "--theme-border": "hsl(18 24% 16% / 0.14)",
      "--theme-accent": "hsl(73 72% 48%)",
      "--theme-accent-2": "hsl(225 42% 28%)",
      "--theme-accent-contrast": "hsl(24 48% 94%)",
      "--theme-ring": "hsl(73 82% 48% / 0.32)",
      "--theme-shadow": "0 28px 72px rgba(92, 61, 39, 0.16)",
      "--theme-grid": "hsl(22 20% 18% / 0.07)",
    }),
  },
  {
    slug: "diagonal-layout",
    modeLabel: "Diagonal layout",
    pageTitle: "Directional layout driven by diagonal tension",
    kicker: "Diagonal flow / directional energy / dynamic hierarchy",
    summary: "Builds movement through diagonal alignment or slanted section logic, making the page feel more directional, energetic, and forward-moving than standard rectilinear layouts.",
    audience: "Campaign pages, launch pages, creative product marketing, and brands that need visible momentum",
    family: "high-agency",
    primaryLanguage: "Diagonal movement and directional composition",
    supportingTreatments: [
      "clear diagonal axes",
      "dynamic cropping",
      "forceful section breaks"
    ],
    imageryMode: "Heroes, image crops, or color blocks arranged on a diagonal axis to pull the eye",
    avoidList: [
      "tilting everything until it becomes a gimmick",
      "putting long reading text on diagonal axes",
      "repeating the same diagonal motif in every section"
    ],
    previewBullets: [
      "Diagonals make the hero feel less static and more energetic",
      "Creates a quick sense of forward motion",
      "Strong for launches or campaigns that need pace"
    ],
    keywords: [
      "diagonal layout",
      "directional hero",
      "dynamic composition",
      "campaign page",
      "visual momentum"
    ],
    featured: false,
    demoAvailable: true,
    vars: vars({
      "--theme-bg": "hsl(258 56% 95%)",
      "--theme-bg-alt": "hsl(296 52% 89%)",
      "--theme-surface": "hsl(0 0% 100% / 0.8)",
      "--theme-surface-strong": "hsl(0 0% 100%)",
      "--theme-text": "hsl(18 28% 12%)",
      "--theme-muted": "hsl(18 18% 36%)",
      "--theme-border": "hsl(18 24% 16% / 0.14)",
      "--theme-accent": "hsl(296 72% 48%)",
      "--theme-accent-2": "hsl(88 42% 28%)",
      "--theme-accent-contrast": "hsl(24 48% 94%)",
      "--theme-ring": "hsl(296 82% 48% / 0.32)",
      "--theme-shadow": "0 28px 72px rgba(92, 61, 39, 0.16)",
      "--theme-grid": "hsl(22 20% 18% / 0.07)",
    }),
  },
  {
    slug: "modular-layouts",
    modeLabel: "Modular layouts",
    pageTitle: "Structured modular layout for dense but legible storytelling",
    kicker: "Module system / repeatable blocks / scalable product storytelling",
    summary: "Relies on repeatable modules with clear rules so a page can scale across many features, use cases, or content layers without losing scanability.",
    audience: "SaaS, documentation-led marketing, feature overviews, and system-led websites that need long-term scalability",
    family: "grid-product",
    primaryLanguage: "Repeatable modules with clear hierarchy",
    supportingTreatments: [
      "rule-based modules",
      "clean grids",
      "scan-friendly structure"
    ],
    imageryMode: "Content, media, and proof packaged into modules that can be recomposed cleanly",
    avoidList: [
      "making every module identical until the page feels lifeless",
      "card spam without priority rhythm",
      "missing hero or breathing blocks"
    ],
    previewBullets: [
      "Easy to extend with new sections without breaking the system",
      "Dense content stays scannable",
      "Strong for product marketing and multi-use-case sites"
    ],
    keywords: [
      "modular layout",
      "system design",
      "feature blocks",
      "structured marketing",
      "grid product"
    ],
    featured: false,
    demoAvailable: true,
    vars: vars({
      "--theme-bg": "hsl(270 60% 95%)",
      "--theme-bg-alt": "hsl(308 56% 91%)",
      "--theme-surface": "hsl(0 0% 100% / 0.95)",
      "--theme-surface-strong": "hsl(0 0% 100%)",
      "--theme-text": "hsl(100 45% 14%)",
      "--theme-muted": "hsl(100 22% 36%)",
      "--theme-border": "hsl(100 26% 24% / 0.12)",
      "--theme-accent": "hsl(308 72% 54%)",
      "--theme-accent-2": "hsl(100 72% 48%)",
      "--theme-accent-contrast": "hsl(0 0% 100%)",
      "--theme-ring": "hsl(308 80% 54% / 0.3)",
      "--theme-shadow": "0 14px 34px rgba(14, 26, 48, 0.12)",
      "--theme-grid": "hsl(100 30% 22% / 0.06)",
    }),
  },
  {
    slug: "new-york-school-graphics",
    modeLabel: "New York School graphics",
    pageTitle: "Poster-forward modernist graphics with urban typographic punch",
    kicker: "Modernist poster / expressive type / urban graphic energy",
    summary: "Channels New York School graphic design through assertive type, decisive cropping, and poster-like urban energy for pages that need unmistakable graphic presence.",
    audience: "Culture brands, art events, media pages, studios, and campaigns that need modern graphic force",
    family: "grid-product",
    primaryLanguage: "Poster typography and urban graphic energy",
    supportingTreatments: [
      "oversized headlines",
      "aggressive crops",
      "modernist poster rhythm"
    ],
    imageryMode: "Black-and-white or tightly cropped imagery, oversized type, and limited but decisive color accents",
    avoidList: [
      "overly corporate cleanliness",
      "too many soft effects that dilute the poster feel",
      "type that lacks compression and force"
    ],
    previewBullets: [
      "Type and imagery behave like a digital poster",
      "The visual energy feels urban and cultural",
      "Strong for microsites that need a clear graphic point of view"
    ],
    keywords: [
      "new york school",
      "graphic design",
      "poster typography",
      "modernist graphics",
      "urban editorial"
    ],
    featured: false,
    demoAvailable: true,
    vars: vars({
      "--theme-bg": "hsl(347 60% 95%)",
      "--theme-bg-alt": "hsl(25 56% 91%)",
      "--theme-surface": "hsl(0 0% 100% / 0.95)",
      "--theme-surface-strong": "hsl(0 0% 100%)",
      "--theme-text": "hsl(177 45% 14%)",
      "--theme-muted": "hsl(177 22% 36%)",
      "--theme-border": "hsl(177 26% 24% / 0.12)",
      "--theme-accent": "hsl(25 72% 54%)",
      "--theme-accent-2": "hsl(177 72% 48%)",
      "--theme-accent-contrast": "hsl(0 0% 100%)",
      "--theme-ring": "hsl(25 80% 54% / 0.3)",
      "--theme-shadow": "0 14px 34px rgba(14, 26, 48, 0.12)",
      "--theme-grid": "hsl(177 30% 22% / 0.06)",
    }),
  },
  {
    slug: "highly-detailed-vintage",
    modeLabel: "Highly-detailed vintage",
    pageTitle: "Highly ornate vintage detail with collectible illustration character",
    kicker: "Vintage detail / engraved texture / ornate illustration",
    summary: "Prioritizes dense ornament, archival texture, and hand-crafted illustration cues reminiscent of engraved or collectible print artifacts, creating strong heritage and depth.",
    audience: "Luxury packaging, heritage brands, premium editorial campaigns, and print-inspired landing pages",
    family: "experimental-loud",
    primaryLanguage: "Ornate vintage detail and archival texture",
    supportingTreatments: [
      "dense ornament",
      "aged-paper texture",
      "restrained heritage palette"
    ],
    imageryMode: "Detailed illustration, vintage ornament, paper texture, and engraved-print character",
    avoidList: [
      "cheap faux-vintage styling",
      "detail overload without a focal point",
      "colors that feel too fresh for the archival mood"
    ],
    previewBullets: [
      "Dense detail creates a collectible, crafted feeling",
      "The page carries depth even without much motion",
      "Useful for brands that need heritage or art-print mood"
    ],
    keywords: [
      "vintage",
      "ornate",
      "engraved",
      "heritage",
      "detailed illustration"
    ],
    featured: false,
    demoAvailable: true,
    vars: vars({
      "--theme-bg": "hsl(287 94% 90%)",
      "--theme-bg-alt": "hsl(325 88% 74%)",
      "--theme-surface": "hsl(0 0% 100%)",
      "--theme-surface-strong": "hsl(44 100% 96%)",
      "--theme-text": "hsl(0 0% 7%)",
      "--theme-muted": "hsl(26 17% 32%)",
      "--theme-border": "hsl(0 0% 7%)",
      "--theme-accent": "hsl(325 88% 54%)",
      "--theme-accent-2": "hsl(117 90% 52%)",
      "--theme-accent-contrast": "hsl(0 0% 6%)",
      "--theme-ring": "hsl(325 88% 56% / 0.34)",
      "--theme-shadow": "8px 8px 0 rgba(10, 10, 10, 0.92)",
      "--theme-grid": "hsl(0 0% 10% / 0.14)",
      "--theme-radius": "18px",
    }),
  },
  {
    slug: "subtle-colored-shadows",
    modeLabel: "Subtle colored shadows",
    pageTitle: "Soft chromatic shadows that add depth without theatrics",
    kicker: "Tinted shadow / soft depth / polished modern surfaces",
    summary: "Uses lightly tinted shadows to give cards, objects, or hero elements a refined sense of depth without slipping into flashy glow or heavy-handed neumorphism.",
    audience: "Polished SaaS, AI products, modern app marketing, and interfaces needing subtle dimensionality",
    family: "tactile-organic",
    primaryLanguage: "Tinted shadow and restrained depth",
    supportingTreatments: [
      "chromatic shadows",
      "clean surfaces",
      "very restrained depth"
    ],
    imageryMode: "Cards, chips, or objects with faint pink, violet, or blue shadow tints on clean grounds",
    avoidList: [
      "overly neon glow",
      "muddy heavy shadows",
      "too many shadow colors at once creating visual dirt"
    ],
    previewBullets: [
      "Shadows carry a light color tint instead of plain gray",
      "Feels polished without losing usability",
      "Useful for UI or heroes that need moderate extra depth"
    ],
    keywords: [
      "colored shadows",
      "subtle depth",
      "tinted shadow",
      "polished ui",
      "modern surface"
    ],
    featured: false,
    demoAvailable: true,
    vars: vars({
      "--theme-bg": "hsl(336 75% 95%)",
      "--theme-bg-alt": "hsl(14 68% 91%)",
      "--theme-surface": "hsl(0 0% 100% / 0.72)",
      "--theme-surface-strong": "hsl(0 0% 100% / 0.92)",
      "--theme-text": "hsl(14 24% 18%)",
      "--theme-muted": "hsl(14 14% 43%)",
      "--theme-border": "hsl(14 34% 62% / 0.3)",
      "--theme-accent": "hsl(166 76% 58%)",
      "--theme-accent-2": "hsl(336 72% 62%)",
      "--theme-accent-contrast": "hsl(0 0% 100%)",
      "--theme-ring": "hsl(166 86% 56% / 0.28)",
      "--theme-shadow": "0 24px 55px rgba(89, 93, 142, 0.14)",
      "--theme-grid": "hsl(14 32% 54% / 0.08)",
      "--theme-radius": "30px",
    }),
  },
  {
    slug: "particle-backgrounds",
    modeLabel: "Particle backgrounds",
    pageTitle: "Particle fields that create atmospheric digital depth",
    kicker: "Particle field / ambient tech atmosphere / point-cloud texture",
    summary: "Uses particles, light points, or point-cloud-like fields to create digital atmosphere and depth, especially effective for AI, data, scientific, or systems-oriented narratives.",
    audience: "AI, data platforms, scientific products, infra brands, and future-facing technology pages",
    family: "immersive-premium",
    primaryLanguage: "Particle fields and digital atmosphere",
    supportingTreatments: [
      "light particle glow",
      "dark canvases",
      "spatial depth"
    ],
    imageryMode: "Dark or deep-gradient grounds with luminous particles, point clouds, or controlled point noise",
    avoidList: [
      "particles so dense they read as noise texture",
      "using it behind long text without contrast control",
      "cheap-looking fake motion cues"
    ],
    previewBullets: [
      "The background feels like a field of points or digital dust",
      "Creates technological atmosphere very quickly",
      "Strong for AI, data, or atmosphere-led heroes"
    ],
    keywords: [
      "particle background",
      "point cloud",
      "ai atmosphere",
      "data visual mood",
      "digital field"
    ],
    featured: false,
    demoAvailable: true,
    vars: vars({
      "--theme-bg": "hsl(46 35% 8%)",
      "--theme-bg-alt": "hsl(84 32% 12%)",
      "--theme-surface": "hsl(46 28% 16% / 0.78)",
      "--theme-surface-strong": "hsl(46 26% 22% / 0.9)",
      "--theme-text": "hsl(214 100% 96%)",
      "--theme-muted": "hsl(220 36% 74%)",
      "--theme-border": "hsl(236 74% 72% / 0.22)",
      "--theme-accent": "hsl(84 96% 66%)",
      "--theme-accent-2": "hsl(236 94% 64%)",
      "--theme-accent-contrast": "hsl(224 40% 10%)",
      "--theme-ring": "hsl(84 86% 66% / 0.36)",
      "--theme-shadow": "0 40px 120px rgba(1, 6, 18, 0.56)",
      "--theme-grid": "hsl(236 70% 80% / 0.08)",
    }),
  },
  {
    slug: "semi-flat-depth",
    modeLabel: "Semi-flat depth (Material Design)",
    pageTitle: "Flat-design clarity with just enough dimensional depth",
    kicker: "Semi-flat UI / restrained depth / modern product clarity",
    summary: "Keeps the legibility of flat design while adding modest elevation, shadow, and highlight so the interface feels more contemporary, trustworthy, and less paper-thin.",
    audience: "SaaS, dashboards, product marketing, and systems that need clarity without total flatness",
    family: "tactile-organic",
    primaryLanguage: "Flat design upgraded with gentle depth",
    supportingTreatments: [
      "light elevation",
      "clean surfaces",
      "clear layered hierarchy"
    ],
    imageryMode: "Clean UI cards and components with moderate lift and clear separation from the background",
    avoidList: [
      "keeping it so flat that everything sticks to the background",
      "heavy shadows that become pseudo-3D",
      "inconsistent rounding and elevation rules"
    ],
    previewBullets: [
      "Still clean and product-oriented, but with extra depth",
      "Components lift just enough to improve scanning and trust",
      "Useful for modern websites and dashboards that need balance"
    ],
    keywords: [
      "semi-flat",
      "flat design depth",
      "elevation",
      "product ui",
      "modern dashboard"
    ],
    featured: false,
    demoAvailable: true,
    vars: vars({
      "--theme-bg": "hsl(254 75% 95%)",
      "--theme-bg-alt": "hsl(292 68% 91%)",
      "--theme-surface": "hsl(0 0% 100% / 0.72)",
      "--theme-surface-strong": "hsl(0 0% 100% / 0.92)",
      "--theme-text": "hsl(292 24% 18%)",
      "--theme-muted": "hsl(292 14% 43%)",
      "--theme-border": "hsl(292 34% 62% / 0.3)",
      "--theme-accent": "hsl(84 76% 58%)",
      "--theme-accent-2": "hsl(254 72% 62%)",
      "--theme-accent-contrast": "hsl(0 0% 100%)",
      "--theme-ring": "hsl(84 86% 56% / 0.28)",
      "--theme-shadow": "0 24px 55px rgba(89, 93, 142, 0.14)",
      "--theme-grid": "hsl(292 32% 54% / 0.08)",
      "--theme-radius": "30px",
    }),
  },
  {
    slug: "authentic-photography",
    modeLabel: "Authentic photography",
    pageTitle: "Real-life imagery with warmth and trust",
    kicker: "Candid people / natural light / anti-stock polish",
    summary: "A photography direction built on candid moments, natural light, and human warmth so the brand feels trustworthy, relatable, and less like generic stock marketing.",
    audience: "Lifestyle brands, wellness, community products, and services that need warmth and credibility",
    family: "grid-product",
    primaryLanguage: "Real-life photography and human closeness",
    supportingTreatments: [
      "gently warm grading",
      "close crops on people or action",
      "preserve real-life texture"
    ],
    imageryMode: "Candid moments, real environments, and soft natural lighting",
    avoidList: [
      "over-polished retouching",
      "stiff staged poses",
      "overly sterile stock-style backdrops"
    ],
    previewBullets: [
      "Creates trust through realism",
      "Works well for human-centered brands",
      "Prioritizes natural light and real contexts"
    ],
    keywords: [
      "authentic photography",
      "candid",
      "natural light",
      "human-centered",
      "lifestyle"
    ],
    featured: false,
    demoAvailable: true,
    vars: vars({
      "--theme-bg": "hsl(37 60% 95%)",
      "--theme-bg-alt": "hsl(75 56% 91%)",
      "--theme-surface": "hsl(0 0% 100% / 0.95)",
      "--theme-surface-strong": "hsl(0 0% 100%)",
      "--theme-text": "hsl(227 45% 14%)",
      "--theme-muted": "hsl(227 22% 36%)",
      "--theme-border": "hsl(227 26% 24% / 0.12)",
      "--theme-accent": "hsl(75 72% 54%)",
      "--theme-accent-2": "hsl(227 72% 48%)",
      "--theme-accent-contrast": "hsl(0 0% 100%)",
      "--theme-ring": "hsl(75 80% 54% / 0.3)",
      "--theme-shadow": "0 14px 34px rgba(14, 26, 48, 0.12)",
      "--theme-grid": "hsl(227 30% 22% / 0.06)",
    }),
  },
  {
    slug: "clay-white-landscape-mockup",
    modeLabel: "Clay white landscape mockup",
    pageTitle: "Minimal white mockup that foregrounds the product UI",
    kicker: "Clay render / white-on-white / clean product framing",
    summary: "A white clay-style mockup that presents product UI in a clean, neutral frame, making it ideal for showcasing screens without visual competition from the background.",
    audience: "SaaS, app launches, product decks, and case studies that need clear screen presentation",
    family: "grid-product",
    primaryLanguage: "Clean mockup language focused on UI clarity",
    supportingTreatments: [
      "minimal bright background",
      "soft shadows",
      "generous whitespace around the mockup"
    ],
    imageryMode: "White clay devices or frames with soft shadow on a neutral backdrop",
    avoidList: [
      "distracting textures",
      "irrelevant props",
      "overly heavy shadows"
    ],
    previewBullets: [
      "Excellent for UI showcase",
      "Minimal and broadly usable",
      "Keeps the spotlight on the product"
    ],
    keywords: [
      "clay mockup",
      "white mockup",
      "ui showcase",
      "device frame",
      "minimal"
    ],
    featured: false,
    demoAvailable: true,
    vars: vars({
      "--theme-bg": "hsl(31 60% 95%)",
      "--theme-bg-alt": "hsl(69 56% 91%)",
      "--theme-surface": "hsl(0 0% 100% / 0.95)",
      "--theme-surface-strong": "hsl(0 0% 100%)",
      "--theme-text": "hsl(221 45% 14%)",
      "--theme-muted": "hsl(221 22% 36%)",
      "--theme-border": "hsl(221 26% 24% / 0.12)",
      "--theme-accent": "hsl(69 72% 54%)",
      "--theme-accent-2": "hsl(221 72% 48%)",
      "--theme-accent-contrast": "hsl(0 0% 100%)",
      "--theme-ring": "hsl(69 80% 54% / 0.3)",
      "--theme-shadow": "0 14px 34px rgba(14, 26, 48, 0.12)",
      "--theme-grid": "hsl(221 30% 22% / 0.06)",
    }),
  },
  {
    slug: "flat-lay-hero-image",
    modeLabel: "Flat lay hero image",
    pageTitle: "Top-down composition for hero visuals and campaigns",
    kicker: "Top-down composition / arranged objects / editorial product staging",
    summary: "Uses a top-down viewpoint with intentionally arranged objects to create hero visuals that are clear, scannable, and well suited to e-commerce, editorial commerce, or campaign pages.",
    audience: "E-commerce, brand campaigns, lifestyle products, and social-first hero imagery",
    family: "grid-product",
    primaryLanguage: "Controlled top-down composition",
    supportingTreatments: [
      "restrained palette",
      "even object spacing",
      "leave open areas for headline placement"
    ],
    imageryMode: "Flat-lay photography with restrained props and clear negative space",
    avoidList: [
      "overcrowded arrangement",
      "too many props",
      "no space left for content overlay"
    ],
    previewBullets: [
      "Useful for commercial hero layouts",
      "Easy to scan at a glance",
      "Great when multiple objects need to be shown together"
    ],
    keywords: [
      "flat lay",
      "hero image",
      "top-down",
      "product staging",
      "editorial commerce"
    ],
    featured: false,
    demoAvailable: true,
    vars: vars({
      "--theme-bg": "hsl(269 60% 95%)",
      "--theme-bg-alt": "hsl(307 56% 91%)",
      "--theme-surface": "hsl(0 0% 100% / 0.95)",
      "--theme-surface-strong": "hsl(0 0% 100%)",
      "--theme-text": "hsl(99 45% 14%)",
      "--theme-muted": "hsl(99 22% 36%)",
      "--theme-border": "hsl(99 26% 24% / 0.12)",
      "--theme-accent": "hsl(307 72% 54%)",
      "--theme-accent-2": "hsl(99 72% 48%)",
      "--theme-accent-contrast": "hsl(0 0% 100%)",
      "--theme-ring": "hsl(307 80% 54% / 0.3)",
      "--theme-shadow": "0 14px 34px rgba(14, 26, 48, 0.12)",
      "--theme-grid": "hsl(99 30% 22% / 0.06)",
    }),
  },
  {
    slug: "perspective-app-screens-mockup",
    modeLabel: "Perspective app screens mockup",
    pageTitle: "App screens in perspective for more depth and momentum",
    kicker: "Perspective stack / angled screens / dimensional product showcase",
    summary: "Uses perspective and angled screen arrangements to turn app UI into a more dimensional showcase, ideal when the product needs to feel dynamic rather than flatly documented.",
    audience: "App launches, startup landings, feature campaigns, and pitch decks that need momentum",
    family: "grid-product",
    primaryLanguage: "Perspective and depth in UI showcase",
    supportingTreatments: [
      "consistent screen angles",
      "soft layered shadows",
      "clean background to highlight perspective"
    ],
    imageryMode: "Layered angled screens with spacing and shadow that communicates depth",
    avoidList: [
      "overly aggressive perspective",
      "screens overlapping into unreadability",
      "exaggerated fake 3D effects"
    ],
    previewBullets: [
      "Adds momentum to app presentation",
      "Makes UI showcase feel dimensional",
      "Works well in heroes and feature spotlights"
    ],
    keywords: [
      "perspective mockup",
      "app screens",
      "angled ui",
      "depth",
      "product showcase"
    ],
    featured: false,
    demoAvailable: true,
    vars: vars({
      "--theme-bg": "hsl(344 60% 95%)",
      "--theme-bg-alt": "hsl(22 56% 91%)",
      "--theme-surface": "hsl(0 0% 100% / 0.95)",
      "--theme-surface-strong": "hsl(0 0% 100%)",
      "--theme-text": "hsl(174 45% 14%)",
      "--theme-muted": "hsl(174 22% 36%)",
      "--theme-border": "hsl(174 26% 24% / 0.12)",
      "--theme-accent": "hsl(22 72% 54%)",
      "--theme-accent-2": "hsl(174 72% 48%)",
      "--theme-accent-contrast": "hsl(0 0% 100%)",
      "--theme-ring": "hsl(22 80% 54% / 0.3)",
      "--theme-shadow": "0 14px 34px rgba(14, 26, 48, 0.12)",
      "--theme-grid": "hsl(174 30% 22% / 0.06)",
    }),
  },
  {
    slug: "double-exposure-duotone",
    modeLabel: "Double exposure duotone",
    pageTitle: "Layered duotone imagery with campaign intensity",
    kicker: "Double exposure / duotone / posterized portrait treatment",
    summary: "A layered image treatment that combines double exposure with duotone color, producing a mood-heavy, high-impact look suited to campaign heroes, digital posters, and attention-grabbing landings.",
    audience: "Campaign pages, music or event visuals, creative launches, media brands, and poster-led landings",
    family: "grid-product",
    primaryLanguage: "Layered imagery with two-tone contrast",
    supportingTreatments: [
      "high contrast",
      "light grain texture",
      "poster-style typography overlay"
    ],
    imageryMode: "Portraits or objects with clear silhouettes, blended in layers and pushed into duotone grading",
    avoidList: [
      "overly messy blending",
      "unclear silhouettes",
      "duotone palettes with weak contrast"
    ],
    previewBullets: [
      "Great for campaign-led visuals",
      "Creates immediate mood in the hero",
      "Pairs naturally with bold typography"
    ],
    keywords: [
      "double exposure",
      "duotone",
      "posterized",
      "campaign visual",
      "experimental"
    ],
    featured: false,
    demoAvailable: true,
    vars: vars({
      "--theme-bg": "hsl(294 60% 95%)",
      "--theme-bg-alt": "hsl(332 56% 91%)",
      "--theme-surface": "hsl(0 0% 100% / 0.95)",
      "--theme-surface-strong": "hsl(0 0% 100%)",
      "--theme-text": "hsl(124 45% 14%)",
      "--theme-muted": "hsl(124 22% 36%)",
      "--theme-border": "hsl(124 26% 24% / 0.12)",
      "--theme-accent": "hsl(332 72% 54%)",
      "--theme-accent-2": "hsl(124 72% 48%)",
      "--theme-accent-contrast": "hsl(0 0% 100%)",
      "--theme-ring": "hsl(332 80% 54% / 0.3)",
      "--theme-shadow": "0 14px 34px rgba(14, 26, 48, 0.12)",
      "--theme-grid": "hsl(124 30% 22% / 0.06)",
    }),
  },
  {
    slug: "double-light-photography",
    modeLabel: "Double light photography",
    pageTitle: "Dual-light photography with cinematic depth",
    kicker: "Dual lighting / colored rim light / cinematic portrait mood",
    summary: "Uses two light sources or contrasting color temperatures to make the subject feel more cinematic, premium, and visually dimensional.",
    audience: "Fashion, premium brands, campaign portraits, and tech visuals that need modern mood",
    family: "immersive-premium",
    primaryLanguage: "Dual-light cinematography and depth",
    supportingTreatments: [
      "colored rim light",
      "controlled darker background",
      "clean contrast"
    ],
    imageryMode: "Portraits or objects lit with a clear key light plus colored rim or secondary light",
    avoidList: [
      "flat lighting",
      "unintentional color muddiness",
      "retouching that kills the lighting mood"
    ],
    previewBullets: [
      "Instantly feels premium",
      "Excellent for portrait-led heroes",
      "Adds depth without needing complex layouts"
    ],
    keywords: [
      "double light",
      "dual lighting",
      "cinematic portrait",
      "rim light",
      "moody photography"
    ],
    featured: false,
    demoAvailable: true,
    vars: vars({
      "--theme-bg": "hsl(298 35% 8%)",
      "--theme-bg-alt": "hsl(336 32% 12%)",
      "--theme-surface": "hsl(298 28% 16% / 0.78)",
      "--theme-surface-strong": "hsl(298 26% 22% / 0.9)",
      "--theme-text": "hsl(214 100% 96%)",
      "--theme-muted": "hsl(220 36% 74%)",
      "--theme-border": "hsl(128 74% 72% / 0.22)",
      "--theme-accent": "hsl(336 96% 66%)",
      "--theme-accent-2": "hsl(128 94% 64%)",
      "--theme-accent-contrast": "hsl(224 40% 10%)",
      "--theme-ring": "hsl(336 86% 66% / 0.36)",
      "--theme-shadow": "0 40px 120px rgba(1, 6, 18, 0.56)",
      "--theme-grid": "hsl(128 70% 80% / 0.08)",
    }),
  },
  {
    slug: "ruined-effect",
    modeLabel: "Ruined effect",
    pageTitle: "Intentional image decay with worn, disruptive texture",
    kicker: "Distressed image / damaged texture / imperfect surface",
    summary: "Adds intentional wear, tearing, blur, or damaged-surface cues so imagery feels alive, unstable, and materially rich instead of overly clean and sterile.",
    audience: "Music, fashion, culture campaigns, street-inspired brands, and creative portfolios",
    family: "experimental-loud",
    primaryLanguage: "Distressed texture and imperfect surfaces",
    supportingTreatments: [
      "raw grain",
      "paper-damage texture",
      "enough contrast to preserve the subject"
    ],
    imageryMode: "Images or posters treated with erosion, scratches, blur, or layered distressed texture",
    avoidList: [
      "damage that destroys readability",
      "fake repetitive textures",
      "distressing every surface equally"
    ],
    previewBullets: [
      "Adds material texture and tension",
      "Works for culture and music campaigns",
      "Best used with restraint to preserve the subject"
    ],
    keywords: [
      "ruined effect",
      "distressed",
      "worn texture",
      "damaged image",
      "grunge"
    ],
    featured: false,
    demoAvailable: true,
    vars: vars({
      "--theme-bg": "hsl(319 94% 90%)",
      "--theme-bg-alt": "hsl(357 88% 74%)",
      "--theme-surface": "hsl(0 0% 100%)",
      "--theme-surface-strong": "hsl(44 100% 96%)",
      "--theme-text": "hsl(0 0% 7%)",
      "--theme-muted": "hsl(26 17% 32%)",
      "--theme-border": "hsl(0 0% 7%)",
      "--theme-accent": "hsl(357 88% 54%)",
      "--theme-accent-2": "hsl(149 90% 52%)",
      "--theme-accent-contrast": "hsl(0 0% 6%)",
      "--theme-ring": "hsl(357 88% 56% / 0.34)",
      "--theme-shadow": "8px 8px 0 rgba(10, 10, 10, 0.92)",
      "--theme-grid": "hsl(0 0% 10% / 0.14)",
      "--theme-radius": "18px",
    }),
  },
  {
    slug: "mbe-illustration",
    modeLabel: "MBE illustration",
    pageTitle: "Playful icon-like illustration with clean, friendly forms",
    kicker: "Outline icons / rounded geometry / cheerful UI illustration",
    summary: "MBE is a simple, rounded illustration style with icon-like clarity, useful for making digital products feel friendlier, more understandable, and less dry.",
    audience: "SaaS, onboarding flows, explainer sections, edtech, and approachable UI brands",
    family: "grid-product",
    primaryLanguage: "Rounded structured illustration with a friendly tone",
    supportingTreatments: [
      "rounded shapes",
      "bright palette",
      "just enough detail to feel like expanded icons"
    ],
    imageryMode: "Outlined illustrations with simple shapes, moderate stroke weight, and bright friendly colors",
    avoidList: [
      "too many tiny details",
      "inconsistent stroke system",
      "overly muted palettes that lose friendliness"
    ],
    previewBullets: [
      "Works for friendly digital products",
      "Useful in onboarding and explainers",
      "Maintains clarity at small sizes"
    ],
    keywords: [
      "mbe",
      "icon illustration",
      "rounded",
      "friendly ui",
      "outline illustration"
    ],
    featured: false,
    demoAvailable: true,
    vars: vars({
      "--theme-bg": "hsl(309 60% 95%)",
      "--theme-bg-alt": "hsl(347 56% 91%)",
      "--theme-surface": "hsl(0 0% 100% / 0.95)",
      "--theme-surface-strong": "hsl(0 0% 100%)",
      "--theme-text": "hsl(139 45% 14%)",
      "--theme-muted": "hsl(139 22% 36%)",
      "--theme-border": "hsl(139 26% 24% / 0.12)",
      "--theme-accent": "hsl(347 72% 54%)",
      "--theme-accent-2": "hsl(139 72% 48%)",
      "--theme-accent-contrast": "hsl(0 0% 100%)",
      "--theme-ring": "hsl(347 80% 54% / 0.3)",
      "--theme-shadow": "0 14px 34px rgba(14, 26, 48, 0.12)",
      "--theme-grid": "hsl(139 30% 22% / 0.06)",
    }),
  },
  {
    slug: "comic-art-illustration",
    modeLabel: "Comic art illustration",
    pageTitle: "High-energy illustration with comic and poster attitude",
    kicker: "Comic linework / halftone / pop action energy",
    summary: "Brings comic-book energy through clear linework, bold color, and strong motion cues, making it a good fit for campaigns or interfaces that need youthful punch.",
    audience: "Youth campaigns, entertainment, creator brands, playful educational content, and high-energy landings",
    family: "experimental-loud",
    primaryLanguage: "Strong linework with pop energy",
    supportingTreatments: [
      "burst shapes",
      "speech-bubble or pop captions",
      "high-contrast palette"
    ],
    imageryMode: "Illustrations with clear outlines, optional halftone, bold contrast, and motion-driven poses",
    avoidList: [
      "too much detail causing clutter",
      "muddy color with no emphasis",
      "lack of motion rhythm"
    ],
    previewBullets: [
      "Feels youthful and energetic",
      "Strong fit for standout campaigns",
      "Helpful when visuals need to tell a quick story"
    ],
    keywords: [
      "comic art",
      "halftone",
      "pop illustration",
      "dynamic",
      "youthful"
    ],
    featured: false,
    demoAvailable: true,
    vars: vars({
      "--theme-bg": "hsl(268 94% 90%)",
      "--theme-bg-alt": "hsl(306 88% 74%)",
      "--theme-surface": "hsl(0 0% 100%)",
      "--theme-surface-strong": "hsl(44 100% 96%)",
      "--theme-text": "hsl(0 0% 7%)",
      "--theme-muted": "hsl(26 17% 32%)",
      "--theme-border": "hsl(0 0% 7%)",
      "--theme-accent": "hsl(306 88% 54%)",
      "--theme-accent-2": "hsl(98 90% 52%)",
      "--theme-accent-contrast": "hsl(0 0% 6%)",
      "--theme-ring": "hsl(306 88% 56% / 0.34)",
      "--theme-shadow": "8px 8px 0 rgba(10, 10, 10, 0.92)",
      "--theme-grid": "hsl(0 0% 10% / 0.14)",
      "--theme-radius": "18px",
    }),
  },
  {
    slug: "lineart-illustration",
    modeLabel: "Lineart illustration",
    pageTitle: "Minimal line illustration for editorial layouts",
    kicker: "Thin lines / reduced detail / elegant supporting visual",
    summary: "Lineart uses restrained drawing to add illustration without making the layout heavy, which makes it ideal for pages where typography and reading flow stay central.",
    audience: "Editorial commerce, portfolios, minimal product pages, and refined wellness or lifestyle brands",
    family: "editorial-typography",
    primaryLanguage: "Restrained line drawing with clean reading rhythm",
    supportingTreatments: [
      "ample whitespace",
      "limited palette",
      "pairs with elegant typography"
    ],
    imageryMode: "Thin to medium lines, minimal fill, and illustrations that support rather than dominate content",
    avoidList: [
      "overly heavy strokes",
      "too much filled color",
      "illustration overpowering the text hierarchy"
    ],
    previewBullets: [
      "Light, clean, and refined",
      "Fits reading-first layouts",
      "Works well as supporting visuals"
    ],
    keywords: [
      "lineart",
      "outline illustration",
      "minimal",
      "editorial",
      "whitespace"
    ],
    featured: false,
    demoAvailable: true,
    vars: vars({
      "--theme-bg": "hsl(38 35% 96%)",
      "--theme-bg-alt": "hsl(38 28% 92%)",
      "--theme-surface": "hsl(0 0% 100% / 0.75)",
      "--theme-surface-strong": "hsl(0 0% 100%)",
      "--theme-text": "hsl(76 18% 14%)",
      "--theme-muted": "hsl(76 14% 36%)",
      "--theme-border": "hsl(76 18% 18% / 0.12)",
      "--theme-accent": "hsl(38 34% 28%)",
      "--theme-accent-2": "hsl(228 38% 42%)",
      "--theme-accent-contrast": "hsl(38 62% 94%)",
      "--theme-ring": "hsl(38 28% 28% / 0.22)",
      "--theme-shadow": "0 16px 34px rgba(23, 20, 16, 0.08)",
      "--theme-grid": "hsl(76 18% 20% / 0.06)",
      "--theme-font-display": "var(--font-editorial), Georgia, serif",
    }),
  },
  {
    slug: "hand-drawn-lineart",
    modeLabel: "Hand-drawn lineart",
    pageTitle: "Hand-drawn organic linework with human warmth",
    kicker: "Sketch line / imperfect stroke / crafted warmth",
    summary: "Keeps the wobble, imperfection, and natural rhythm of hand drawing so the brand or interface feels crafted, approachable, and more human.",
    audience: "Wellness, handmade brands, creator tools, educational content, and family-oriented products",
    family: "experimental-loud",
    primaryLanguage: "Organic linework with intentional imperfection",
    supportingTreatments: [
      "subtle paper texture",
      "soft palette",
      "details that feel crafted by hand"
    ],
    imageryMode: "Slightly uneven strokes with lower polish and a true hand-sketched feel",
    avoidList: [
      "overly perfect vectors",
      "mechanical strokes",
      "harsh color that kills the organic feel"
    ],
    previewBullets: [
      "Adds a human touch",
      "Fits friendly brands well",
      "Useful as a natural-feeling accent system"
    ],
    keywords: [
      "hand drawn",
      "lineart",
      "organic",
      "sketch",
      "crafted"
    ],
    featured: false,
    demoAvailable: true,
    vars: vars({
      "--theme-bg": "hsl(198 94% 90%)",
      "--theme-bg-alt": "hsl(236 88% 74%)",
      "--theme-surface": "hsl(0 0% 100%)",
      "--theme-surface-strong": "hsl(44 100% 96%)",
      "--theme-text": "hsl(0 0% 7%)",
      "--theme-muted": "hsl(26 17% 32%)",
      "--theme-border": "hsl(0 0% 7%)",
      "--theme-accent": "hsl(236 88% 54%)",
      "--theme-accent-2": "hsl(28 90% 52%)",
      "--theme-accent-contrast": "hsl(0 0% 6%)",
      "--theme-ring": "hsl(236 88% 56% / 0.34)",
      "--theme-shadow": "8px 8px 0 rgba(10, 10, 10, 0.92)",
      "--theme-grid": "hsl(0 0% 10% / 0.14)",
      "--theme-radius": "18px",
    }),
  },
  {
    slug: "tailored-illustrations",
    modeLabel: "Tailored illustrations",
    pageTitle: "Custom brand illustrations that build distinct identity",
    kicker: "Custom illustration system / brand-specific visual language / ownable assets",
    summary: "A direction based on custom illustration systems rather than generic stock styles, helping the visual language feel more ownable, cohesive, and memorable.",
    audience: "Brand systems, startups seeking differentiation, content products, and service businesses wanting owned visuals",
    family: "grid-product",
    primaryLanguage: "Brand-tailored custom illustration language",
    supportingTreatments: [
      "consistent shape language",
      "brand-linked palette",
      "intentional repeatable motifs"
    ],
    imageryMode: "Illustrations customized to the brand’s own shape language, palette, and expressive tone",
    avoidList: [
      "each illustration using a different style",
      "generic stock-like treatment",
      "details unrelated to the brand story"
    ],
    previewBullets: [
      "Builds distinctive recognition",
      "Strong for long-term brands",
      "Makes the visual system more durable and consistent"
    ],
    keywords: [
      "custom illustration",
      "brand illustration",
      "tailored",
      "owned visual system",
      "identity"
    ],
    featured: false,
    demoAvailable: true,
    vars: vars({
      "--theme-bg": "hsl(56 60% 95%)",
      "--theme-bg-alt": "hsl(94 56% 91%)",
      "--theme-surface": "hsl(0 0% 100% / 0.95)",
      "--theme-surface-strong": "hsl(0 0% 100%)",
      "--theme-text": "hsl(246 45% 14%)",
      "--theme-muted": "hsl(246 22% 36%)",
      "--theme-border": "hsl(246 26% 24% / 0.12)",
      "--theme-accent": "hsl(94 72% 54%)",
      "--theme-accent-2": "hsl(246 72% 48%)",
      "--theme-accent-contrast": "hsl(0 0% 100%)",
      "--theme-ring": "hsl(94 80% 54% / 0.3)",
      "--theme-shadow": "0 14px 34px rgba(14, 26, 48, 0.12)",
      "--theme-grid": "hsl(246 30% 22% / 0.06)",
    }),
  },
  {
    slug: "futuristic-neon-illustration",
    modeLabel: "Futuristic neon illustration",
    pageTitle: "Futuristic illustration with neon light and digital intensity",
    kicker: "Neon glow / cyber-futurist illustration / luminous sci-fi mood",
    summary: "Uses neon glow, luminous edges, and a sci-fi mood to create illustration that feels digital, current, and visually magnetic for tech-forward products or futurist campaigns.",
    audience: "AI products, gaming-lite brands, cyber campaigns, creative tech, and startups seeking futurist energy",
    family: "experimental-loud",
    primaryLanguage: "Neon lighting and digital sci-fi mood",
    supportingTreatments: [
      "controlled glow",
      "purple-blue or cyan-magenta palettes",
      "dark backgrounds to foreground the light"
    ],
    imageryMode: "Illustrations or objects with visible glow, dark backdrops, neon edges, and digital depth",
    avoidList: [
      "muddy blown-out neon",
      "too many competing effects",
      "no clear focal subject"
    ],
    previewBullets: [
      "Feels unmistakably futuristic",
      "Fits technology-forward products",
      "Creates standout hero visuals on dark surfaces"
    ],
    keywords: [
      "futuristic",
      "neon",
      "sci-fi illustration",
      "glow",
      "cyber"
    ],
    featured: false,
    demoAvailable: true,
    vars: vars({
      "--theme-bg": "hsl(20 35% 8%)",
      "--theme-bg-alt": "hsl(58 32% 12%)",
      "--theme-surface": "hsl(20 28% 16% / 0.78)",
      "--theme-surface-strong": "hsl(20 26% 22% / 0.9)",
      "--theme-text": "hsl(214 100% 96%)",
      "--theme-muted": "hsl(220 36% 74%)",
      "--theme-border": "hsl(210 74% 72% / 0.22)",
      "--theme-accent": "hsl(58 96% 66%)",
      "--theme-accent-2": "hsl(210 94% 64%)",
      "--theme-accent-contrast": "hsl(224 40% 10%)",
      "--theme-ring": "hsl(58 86% 66% / 0.36)",
      "--theme-shadow": "0 40px 120px rgba(1, 6, 18, 0.56)",
      "--theme-grid": "hsl(210 70% 80% / 0.08)",
    }),
  },
  {
    slug: "retro-style",
    modeLabel: "Retro style",
    pageTitle: "Digital retro energy with vintage computing and playful nostalgia",
    kicker: "Retro computing / pixel cues / nostalgic digital culture",
    summary: "Channels early-computing visuals, classic digital interfaces, and playful nostalgia for layouts that feel distinctly retro while remaining clean and usable on modern web surfaces.",
    audience: "Creative tools, gaming, education, community projects, and landing pages needing digital nostalgia",
    family: "experimental-loud",
    primaryLanguage: "Digital nostalgia and vintage-computing motifs",
    supportingTreatments: [
      "pixel accents",
      "retro palettes",
      "computing nostalgia"
    ],
    imageryMode: "Vintage computers, pixel cues, retro palettes, and illustrations that evoke early digital culture",
    avoidList: [
      "overly cluttered retro simulation",
      "too much texture that hurts usability",
      "nostalgia overpowering the core message"
    ],
    previewBullets: [
      "Vintage-computing cues create immediate recognition",
      "Playful nostalgia still tuned for modern web use",
      "Well suited to digital-vintage concepts and campaigns"
    ],
    keywords: [
      "retro style",
      "retro computing",
      "digital nostalgia",
      "pixel",
      "vintage computer"
    ],
    featured: false,
    demoAvailable: true,
    vars: vars({
      "--theme-bg": "hsl(250 35% 8%)",
      "--theme-bg-alt": "hsl(288 32% 12%)",
      "--theme-surface": "hsl(250 28% 16% / 0.78)",
      "--theme-surface-strong": "hsl(250 26% 22% / 0.9)",
      "--theme-text": "hsl(214 100% 96%)",
      "--theme-muted": "hsl(220 36% 74%)",
      "--theme-border": "hsl(80 74% 72% / 0.22)",
      "--theme-accent": "hsl(288 96% 66%)",
      "--theme-accent-2": "hsl(80 94% 64%)",
      "--theme-accent-contrast": "hsl(224 40% 10%)",
      "--theme-ring": "hsl(288 86% 66% / 0.36)",
      "--theme-shadow": "0 40px 120px rgba(1, 6, 18, 0.56)",
      "--theme-grid": "hsl(80 70% 80% / 0.08)",
    }),
  },
  {
    slug: "cinemagraphs",
    modeLabel: "Cinemagraphs",
    pageTitle: "Mostly still frames animated by one subtle looping motion",
    kicker: "Looped micro-motion / still-photo drama / cinematic focus",
    summary: "Uses a tiny looping motion inside an otherwise still scene to create cinematic tension, hold attention on the hero longer, and make the brand feel more refined than with a standard static image.",
    audience: "Luxury brands, hospitality, editorial campaigns, premium launches, and microsites needing cinematic mood",
    family: "immersive-premium",
    primaryLanguage: "Still-frame composition with cinematic micro-motion",
    supportingTreatments: [
      "subtle loops",
      "cinematic crops",
      "atmospheric pacing"
    ],
    imageryMode: "Hero scenes that read like still photography with one restrained looping movement",
    avoidList: [
      "loops that feel too obvious",
      "motion distracting from CTA",
      "low-quality GIF treatment that weakens the premium feel"
    ],
    previewBullets: [
      "A single subtle motion keeps attention on the hero",
      "Creates cinematic mood without heavy animation",
      "Great for launch pages or emotionally led visual storytelling"
    ],
    keywords: [
      "cinemagraph",
      "micro motion",
      "loop",
      "cinematic",
      "hero image"
    ],
    featured: false,
    demoAvailable: true,
    vars: vars({
      "--theme-bg": "hsl(334 35% 8%)",
      "--theme-bg-alt": "hsl(12 32% 12%)",
      "--theme-surface": "hsl(334 28% 16% / 0.78)",
      "--theme-surface-strong": "hsl(334 26% 22% / 0.9)",
      "--theme-text": "hsl(214 100% 96%)",
      "--theme-muted": "hsl(220 36% 74%)",
      "--theme-border": "hsl(164 74% 72% / 0.22)",
      "--theme-accent": "hsl(12 96% 66%)",
      "--theme-accent-2": "hsl(164 94% 64%)",
      "--theme-accent-contrast": "hsl(224 40% 10%)",
      "--theme-ring": "hsl(12 86% 66% / 0.36)",
      "--theme-shadow": "0 40px 120px rgba(1, 6, 18, 0.56)",
      "--theme-grid": "hsl(164 70% 80% / 0.08)",
    }),
  },
  {
    slug: "muted-colors",
    modeLabel: "Muted colors",
    pageTitle: "A restrained palette that makes the interface feel calm and refined",
    kicker: "Soft palette / quiet contrast / restrained modern tone",
    summary: "Leans on softer, lower-saturation colors to create a calm, refined, and mature interface. It suits brands that want gentleness and warmth without sacrificing structure or readability.",
    audience: "Wellness, education, creator tools, lifestyle products, and interfaces needing a soft trustworthy tone",
    family: "editorial-typography",
    primaryLanguage: "Muted palette with restrained contrast",
    supportingTreatments: [
      "desaturated accents",
      "soft neutrals",
      "calm contrast"
    ],
    imageryMode: "Illustrations or UI surfaces with quiet hues, gentle light backgrounds, and measured accents",
    avoidList: [
      "palette so pale that hierarchy disappears",
      "missing accent points for guidance",
      "too many flat muted hues creating visual mud"
    ],
    previewBullets: [
      "Muted tones make the interface gentler on the eye",
      "Feels mature, polished, and still highly usable",
      "Well suited to soft, thoughtful, or lightly editorial brands"
    ],
    keywords: [
      "muted colors",
      "soft palette",
      "desaturated",
      "calm ui",
      "restrained color"
    ],
    featured: false,
    demoAvailable: true,
    vars: vars({
      "--theme-bg": "hsl(26 35% 96%)",
      "--theme-bg-alt": "hsl(26 28% 92%)",
      "--theme-surface": "hsl(0 0% 100% / 0.75)",
      "--theme-surface-strong": "hsl(0 0% 100%)",
      "--theme-text": "hsl(64 18% 14%)",
      "--theme-muted": "hsl(64 14% 36%)",
      "--theme-border": "hsl(64 18% 18% / 0.12)",
      "--theme-accent": "hsl(26 34% 28%)",
      "--theme-accent-2": "hsl(216 38% 42%)",
      "--theme-accent-contrast": "hsl(38 62% 94%)",
      "--theme-ring": "hsl(26 28% 28% / 0.22)",
      "--theme-shadow": "0 16px 34px rgba(23, 20, 16, 0.08)",
      "--theme-grid": "hsl(64 18% 20% / 0.06)",
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
  "academia": {
    heroVariant: "scholarly-archive",
    proofVariant: "folio-columns",
    previewSilhouette: "ornament",
    emphasis: "material",
    mediaTreatment: "ornamental",
  },
  "botanical": {
    heroVariant: "earthy-asymmetry",
    proofVariant: "editorial-notes",
    previewSilhouette: "stacked-cards",
    emphasis: "material",
    mediaTreatment: "photographic",
  },
  "catholic-mondrianism": {
    heroVariant: "geometric-grid",
    proofVariant: "comparison-grid",
    previewSilhouette: "tiles",
    emphasis: "grid",
    mediaTreatment: "diagrammatic",
  },
  "cyberpunk": {
    heroVariant: "neon-console",
    proofVariant: "object-spec",
    previewSilhouette: "console",
    emphasis: "material",
    mediaTreatment: "diagrammatic",
  },
  "kinetic": {
    heroVariant: "narrative-reveal",
    proofVariant: "reveal-cards",
    emphasis: "atmosphere",
    mediaTreatment: "ambient",
  },
  "maximalist": {
    heroVariant: "poster-stack",
    proofVariant: "comparison-grid",
    previewSilhouette: "collage",
    emphasis: "poster",
    mediaTreatment: "collaged",
  },
  "newsprint": {
    heroVariant: "scholarly-archive",
    proofVariant: "folio-columns",
    previewSilhouette: "monolith",
    mediaTreatment: "type-led",
  },
  "sketch": {
    heroVariant: "handmade-board",
    proofVariant: "keyword-badges",
    previewSilhouette: "stacked-cards",
    emphasis: "type",
    mediaTreatment: "hand-drawn",
  },
  "skeuomorphic": {
    heroVariant: "soft-stack",
    proofVariant: "keyword-badges",
    ctaVariant: "quiet-links",
    previewSilhouette: "stacked-cards",
    density: "balanced",
    emphasis: "material",
    mediaTreatment: "photographic",
  },
  "terminal": {
    heroVariant: "neon-console",
    proofVariant: "object-spec",
    ctaVariant: "assertive-dual",
    previewSilhouette: "console",
    emphasis: "material",
    mediaTreatment: "diagrammatic",
  },
  "vaporwave": {
    heroVariant: "glossy-badge-cloud",
    proofVariant: "comparison-grid",
    previewSilhouette: "collage",
    emphasis: "material",
    mediaTreatment: "ambient",
  },
  "glassmorphism-mature": {
    heroVariant: "ambient-cloud",
    proofVariant: "keyword-badges",
    previewSilhouette: "orbital",
    emphasis: "atmosphere",
    mediaTreatment: "ambient",
  },
  "neo-brutalism": {
    heroVariant: "poster-stack",
    proofVariant: "signal-cards",
    previewSilhouette: "poster",
    emphasis: "poster",
    mediaTreatment: "photographic",
  },
  "bento-grid": {
    heroVariant: "modular-overview",
    proofVariant: "tile-matrix",
    previewSilhouette: "tiles",
    density: "dense",
    emphasis: "grid",
    mediaTreatment: "diagrammatic",
  },
  "dark-glow-aurora": {
    heroVariant: "control-surface",
    proofVariant: "reveal-cards",
    previewSilhouette: "orbital",
    emphasis: "atmosphere",
    mediaTreatment: "ambient",
  },
  "claymorphism-soft-3d": {
    heroVariant: "soft-stack",
    proofVariant: "soft-bullets",
    previewSilhouette: "stacked-cards",
    emphasis: "material",
    mediaTreatment: "ambient",
  },
  "immersive-3d-product": {
    heroVariant: "object-spotlight",
    proofVariant: "object-spec",
    previewSilhouette: "spotlight",
    emphasis: "object",
    mediaTreatment: "rendered-object",
  },
  "y2k-retro-futurism": {
    heroVariant: "glossy-badge-cloud",
    proofVariant: "comparison-grid",
    previewSilhouette: "collage",
    emphasis: "material",
    mediaTreatment: "ambient",
  },
  "anti-design": {
    heroVariant: "poster-stack",
    proofVariant: "signal-cards",
    previewSilhouette: "collage",
    emphasis: "poster",
    mediaTreatment: "collaged",
  },
  "typography-first": {
    heroVariant: "oversized-type",
    proofVariant: "keyword-badges",
    emphasis: "type",
    mediaTreatment: "type-led",
  },
  "organic-mesh-gradients": {
    heroVariant: "ambient-cloud",
    proofVariant: "keyword-badges",
    previewSilhouette: "orbital",
    emphasis: "atmosphere",
    mediaTreatment: "ambient",
  },
  "premium-monochrome": {
    heroVariant: "ornamental-frame",
    proofVariant: "folio-columns",
    ctaVariant: "luxury-prompt",
    previewSilhouette: "ornament",
    emphasis: "material",
    mediaTreatment: "photographic",
  },
  "motion-led-storytelling": {
    heroVariant: "narrative-reveal",
    proofVariant: "reveal-cards",
    previewSilhouette: "orbital",
    emphasis: "atmosphere",
    mediaTreatment: "ambient",
  },
  "skeuomorphism": {
    heroVariant: "ambient-cloud",
    proofVariant: "soft-bullets",
    ctaVariant: "gentle-invite",
    previewSilhouette: "stacked-cards",
    density: "balanced",
    emphasis: "material",
    mediaTreatment: "photographic",
  },
  "isometric-design": {
    heroVariant: "geometric-grid",
    proofVariant: "tile-matrix",
    previewSilhouette: "tiles",
    emphasis: "grid",
    mediaTreatment: "diagrammatic",
  },
  "canon-grid-editorial": {
    heroVariant: "manifesto-split",
    proofVariant: "keyword-badges",
    previewSilhouette: "monolith",
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

const previewRadiusBySilhouette: Record<PreviewSilhouette, number> = {
  "off-axis": 20,
  "monolith": 16,
  "ornament": 32,
  "tiles": 18,
  "console": 14,
  "spotlight": 24,
  "orbital": 30,
  "collage": 12,
  "stacked-cards": 26,
  "poster": 10,
};

const buttonRadiusByCta: Record<CtaVariant, number> = {
  "assertive-dual": 14,
  "quiet-links": 10,
  "utility-stack": 12,
  "luxury-prompt": 999,
  "gentle-invite": 999,
  "culture-switch": 8,
};

function styleHash(slug: string) {
  let hash = 0;
  for (let index = 0; index < slug.length; index += 1) {
    hash = (hash * 31 + slug.charCodeAt(index)) >>> 0;
  }
  return hash;
}

function deriveStyleVariables(
  style: StyleSeed,
  recipe: StyleRecipe,
): Record<`--${string}`, string> {
  const textSignals = [
    style.slug,
    style.modeLabel,
    style.pageTitle,
    style.primaryLanguage,
    style.imageryMode,
    ...style.keywords,
    ...style.supportingTreatments,
  ]
    .join(" ")
    .toLowerCase();

  const editorialSignal =
    style.family === "editorial-typography" ||
    /editorial|manifesto|serif|newsprint|academia|scholarly|canon|premium monochrome|print/.test(
      textSignals,
    );
  const monoSignal =
    /terminal|console|cyber|glitch|rgb|code|technical|digital|monospace/.test(textSignals) ||
    recipe.mediaTreatment === "diagrammatic";
  const handDrawnSignal =
    /sketch|hand drawn|hand-drawn|lineart|doodle|comic|illustration/.test(textSignals) ||
    recipe.mediaTreatment === "hand-drawn";
  const ornamentalSignal =
    /ornamental|art deco|gold|liturgical|sacred|archive/.test(textSignals) ||
    recipe.mediaTreatment === "ornamental";
  const loudSignal =
    style.family === "experimental-loud" ||
    recipe.emphasis === "poster" ||
    recipe.mediaTreatment === "collaged";
  const terminalSignal = style.slug === "terminal";
  const industrialSkeuoSignal = style.slug === "skeuomorphic";
  const craftedSkeuoSignal = style.slug === "skeuomorphism";

  const hash = styleHash(style.slug);
  const radiusJitter = hash % 5;
  const surfaceRadius = terminalSignal
    ? "8px"
    : industrialSkeuoSignal
      ? "14px"
      : craftedSkeuoSignal
        ? "22px"
    : `${previewRadiusBySilhouette[recipe.previewSilhouette] + radiusJitter}px`;
  const shapeRadius = terminalSignal
    ? "4px"
    : industrialSkeuoSignal
      ? "8px"
      : craftedSkeuoSignal
        ? "14px"
    : `${Math.max(8, previewRadiusBySilhouette[recipe.previewSilhouette] - 4 + (hash % 4))}px`;

  const baseButtonRadius = buttonRadiusByCta[recipe.ctaVariant];
  const buttonRadius = terminalSignal
    ? "4px"
    : industrialSkeuoSignal
      ? "10px"
      : craftedSkeuoSignal
        ? "16px"
    : baseButtonRadius >= 999
      ? "999px"
      : `${Math.max(8, baseButtonRadius + (hash % 3) * 2)}px`;
  const uppercaseButton =
    (recipe.ctaVariant === "assertive-dual" ||
    recipe.ctaVariant === "utility-stack" ||
    recipe.ctaVariant === "culture-switch") &&
    !terminalSignal;

  const buttonLetterSpacing = terminalSignal
    ? "0.04em"
    : industrialSkeuoSignal
      ? "0.03em"
      : craftedSkeuoSignal
        ? "0.02em"
    : uppercaseButton
      ? `${((4 + (hash % 4)) / 100).toFixed(2)}em`
      : `${((1 + (hash % 3)) / 100).toFixed(2)}em`;

  const buttonTextTransform = terminalSignal ? "none" : uppercaseButton ? "uppercase" : "none";
  const buttonFont = terminalSignal
    ? "var(--theme-font-mono)"
    : industrialSkeuoSignal || craftedSkeuoSignal
      ? "var(--theme-font-body)"
    : monoSignal
    ? "var(--theme-font-mono)"
    : editorialSignal || recipe.ctaVariant === "luxury-prompt"
      ? "var(--theme-font-serif)"
      : "var(--theme-font-body)";
  const buttonFontWeight = terminalSignal
    ? "600"
    : industrialSkeuoSignal
      ? "700"
      : craftedSkeuoSignal
        ? "600"
    : recipe.ctaVariant === "assertive-dual" || recipe.ctaVariant === "culture-switch"
      ? "700"
      : recipe.ctaVariant === "quiet-links"
        ? "500"
        : "600";

  let borderStyle = "solid";
  if (!terminalSignal && handDrawnSignal) borderStyle = "dashed";
  if (!terminalSignal && ornamentalSignal) borderStyle = "double";

  const strongOutline =
    terminalSignal ||
    industrialSkeuoSignal ||
    loudSignal ||
    recipe.previewSilhouette === "console" ||
    recipe.mediaTreatment === "diagrammatic" ||
    recipe.emphasis === "grid";

  const outlineWidth = terminalSignal
    ? "1px"
    : industrialSkeuoSignal
      ? "2px"
      : craftedSkeuoSignal
        ? "1px"
        : strongOutline
          ? "2px"
          : "1px";
  const displayFont = terminalSignal
    ? "var(--theme-font-mono)"
    : industrialSkeuoSignal || craftedSkeuoSignal
      ? "var(--theme-font-body)"
    : monoSignal
    ? "var(--theme-font-mono)"
    : editorialSignal || recipe.mediaTreatment === "ornamental"
      ? "var(--theme-font-serif)"
      : "var(--theme-font-body)";
  const bodyFont = terminalSignal
    ? "var(--font-ibm-plex-mono), ui-monospace, monospace"
    : monoSignal && recipe.mediaTreatment === "diagrammatic"
      ? "var(--font-ibm-plex-mono), ui-monospace, monospace"
      : "var(--font-manrope), system-ui, sans-serif";

  const buttonShadow = terminalSignal
    ? "none"
    : industrialSkeuoSignal
      ? "inset 0 1px 0 rgba(255, 255, 255, 0.22), 0 6px 16px rgba(0, 0, 0, 0.34)"
      : craftedSkeuoSignal
        ? "inset 0 1px 1px rgba(255, 255, 255, 0.65), 0 10px 18px rgba(68, 74, 92, 0.2)"
    : recipe.ctaVariant === "quiet-links"
      ? "none"
      : recipe.emphasis === "poster"
        ? "6px 6px 0 rgba(10, 10, 10, 0.88)"
        : "var(--theme-shadow)";

  return {
    "--theme-font-display": displayFont,
    "--theme-font-body": bodyFont,
    "--theme-radius": surfaceRadius,
    "--theme-shape-radius": shapeRadius,
    "--theme-shape-outline-width": outlineWidth,
    "--theme-shape-outline-style": borderStyle,
    "--theme-button-radius": buttonRadius,
    "--theme-button-border-width": outlineWidth,
    "--theme-button-border-style": borderStyle,
    "--theme-button-letter-spacing": buttonLetterSpacing,
    "--theme-button-text-transform": buttonTextTransform,
    "--theme-button-font": buttonFont,
    "--theme-button-font-weight": buttonFontWeight,
    "--theme-button-shadow": buttonShadow,
    "--theme-button-shadow-secondary": recipe.ctaVariant === "luxury-prompt" ? buttonShadow : "none",
  };
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

export const themes: StyleDefinition[] = themeSeeds.map((style) => {
  const recipe = buildRecipe(style);
  const derivedVars: StyleVariables = {
    ...style.vars,
    ...deriveStyleVariables(style, recipe),
  };

  return {
    ...style,
    vars: derivedVars,
    recipe,
  };
});

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
