import { demoStyles, getStyleBySlug } from "@/lib/themes";

export type StyleComparison = {
  slug: string;
  reason: string;
};

export type StyleIntelligence = {
  thesis: string;
  grammar: string[];
  compare: StyleComparison[];
};

const fallbackStyleIntelligence: StyleIntelligence = {
  thesis: "This style should change layout, type, material depth, and imagery together instead of relying on a palette swap.",
  grammar: ["clear hierarchy", "coherent surface language", "purposeful imagery"],
  compare: [],
};

export const styleIntelligence: Record<string, StyleIntelligence> = {
  "asymmetry-grid-layouts": {
    thesis:
      "A flagship launch direction that wins by breaking centered SaaS rhythm and keeping the page in motion through asymmetry.",
    grammar: ["off-axis hero", "hierarchy swings", "dimensional proof blocks"],
    compare: [
      {
        slug: "bento-grid",
        reason: "Choose this when the brand needs founder energy and off-axis momentum; choose bento grid when feature scanning and modular clarity should dominate.",
      },
    ],
  },
  "glassmorphism-mature": {
    thesis:
      "A restrained glass system where layered translucency signals premium control-surface depth without turning the UI into glow soup.",
    grammar: ["frosted panels", "soft luminous borders", "cool layered depth"],
    compare: [
      {
        slug: "dark-glow-aurora",
        reason: "Glassmorphism gets its depth from panels and blur; aurora gets it from atmosphere and canvas mood.",
      },
    ],
  },
  "neo-brutalism": {
    thesis:
      "A blunt, poster-like interface that uses hard edges and hard shadows to feel loud, confident, and unmistakably opinionated.",
    grammar: ["thick borders", "hard shadows", "blunt headlines"],
    compare: [
      {
        slug: "cute-alism-kawaii-brutalism",
        reason: "Neo-brutalism stays confrontational; kawaii brutalism softens the same weight with charm and mascots.",
      },
    ],
  },
  "editorial-minimalism": {
    thesis:
      "A Swiss-leaning editorial system where white space, hairlines, and measured typography create quiet authority.",
    grammar: ["hairline framing", "reading-first spacing", "serif restraint"],
    compare: [
      {
        slug: "meaningful-minimalism",
        reason: "Editorial minimalism is sharper and more grid-led; meaningful minimalism is calmer and more meditative.",
      },
    ],
  },
  "bento-grid": {
    thesis:
      "A product-story layout that gets its identity from modular tile rhythm rather than from a single hero gesture.",
    grammar: ["variable tiles", "scan-first density", "modular storytelling"],
    compare: [
      {
        slug: "swiss-minimalist",
        reason: "Bento uses varied tile rhythm and modular density; Swiss minimalist keeps structure stricter and typographically restrained.",
      },
    ],
  },
  "dark-glow-aurora": {
    thesis:
      "A cinematic premium-tech direction where darkness and soft luminance create controlled future-facing atmosphere.",
    grammar: ["dark canvas", "aurora fields", "glow-edged surfaces"],
    compare: [
      {
        slug: "cyberpunk",
        reason: "Aurora is premium and controlled; cyberpunk is sharper, louder, and more electrically aggressive.",
      },
    ],
  },
  "claymorphism-soft-3d": {
    thesis:
      "A touchable, molded interface language that makes the product feel friendly through volume, softness, and material form.",
    grammar: ["puffy geometry", "pastel massing", "soft object shadows"],
    compare: [
      {
        slug: "organic-mesh-gradients",
        reason: "Claymorphism feels like shaped material; mesh gradients feel like ambient light in the air.",
      },
    ],
  },
  "immersive-3d-product": {
    thesis:
      "A spectacle-first direction where one rendered object becomes the anchor for the whole landing-page story.",
    grammar: ["hero object staging", "cinematic lighting", "reveal-sequence sections"],
    compare: [
      {
        slug: "motion-led-storytelling",
        reason: "Use this when the object is the star; use motion-led storytelling when scroll pacing should carry the narrative.",
      },
    ],
  },
  "y2k-retro-futurism": {
    thesis:
      "A glossy millennium-era digital language that mixes techno nostalgia, chrome hints, and playful futurist polish.",
    grammar: ["glossy controls", "chrome accents", "techno nostalgia"],
    compare: [
      {
        slug: "vaporwave",
        reason: "Y2K feels shinier and more interface-like; vaporwave is softer, dreamier, and more sunset-synthetic.",
      },
    ],
  },
  "anti-design": {
    thesis:
      "A deliberate refusal of polished template neatness, using broken rhythm and awkward tension as the point.",
    grammar: ["misbehaving spacing", "raw typography", "composed disorder"],
    compare: [
      {
        slug: "brutalist-editorial-zine",
        reason: "Anti-design is broader rule-breaking; zine style is more specifically publication- and collage-coded.",
      },
    ],
  },
  "typography-first": {
    thesis:
      "A type-dominant system where scale, pairing, and text rhythm do the work that imagery usually does.",
    grammar: ["oversized headlines", "expressive pairings", "text as form"],
    compare: [
      {
        slug: "editorial-minimalism",
        reason: "Typography-first turns type into the spectacle; editorial minimalism keeps type refined and quieter.",
      },
    ],
  },
  "organic-mesh-gradients": {
    thesis:
      "A soft-futurist atmosphere built from diffuse color fields rather than from explicit objects or cards.",
    grammar: ["mesh light", "amorphous blobs", "ambient softness"],
    compare: [
      {
        slug: "claymorphism-soft-3d",
        reason: "Organic mesh is atmospheric and airy; claymorphism is tactile and object-heavy.",
      },
    ],
  },
  "premium-monochrome": {
    thesis:
      "A luxury-coded restraint where neutrality, spacing, and exacting typography create expense without decorative noise.",
    grammar: ["neutral palette", "fine borders", "quiet luxury spacing"],
    compare: [
      {
        slug: "meaningful-minimalism",
        reason: "Premium monochrome feels dressier and colder; meaningful minimalism feels calmer and more restorative.",
      },
    ],
  },
  "motion-led-storytelling": {
    thesis:
      "A narrative structure built for reveal and pacing, where the page feels choreographed even without heavy animation.",
    grammar: ["sticky pacing", "reveal rhythm", "story-led sequencing"],
    compare: [
      {
        slug: "immersive-3d-product",
        reason: "Motion-led storytelling is about sequence; immersive 3D is about object spectacle and scene depth.",
      },
    ],
  },
  "iridescent-holographic-chrome": {
    thesis:
      "A reflective-material direction where chrome and holographic sheen carry novelty more than the layout does.",
    grammar: ["iridescent highlights", "reflective surfaces", "fashion-tech polish"],
    compare: [
      {
        slug: "y2k-retro-futurism",
        reason: "Iridescent chrome is material-first; Y2K retro-futurism is interface-nostalgia first.",
      },
    ],
  },
  "meaningful-minimalism": {
    thesis:
      "A slow, calm editorial mode that uses stillness and precision instead of spectacle to feel mature and intentional.",
    grammar: ["quiet spacing", "soft monochrome", "still-life calm"],
    compare: [
      {
        slug: "premium-monochrome",
        reason: "Meaningful minimalism is gentler and more restorative; premium monochrome feels more formal and luxury-coded.",
      },
    ],
  },
  "cute-alism-kawaii-brutalism": {
    thesis:
      "A softened brutalist language that keeps bold geometry but swaps aggression for play, stickers, and character energy.",
    grammar: ["playful blocks", "cute iconography", "friendly contrast"],
    compare: [
      {
        slug: "neo-brutalism",
        reason: "Both are bold, but this one uses warmth and character instead of confrontation.",
      },
    ],
  },
  "brutalist-editorial-zine": {
    thesis:
      "A rough publication language that feels collaged, cut out, and printed rather than digitally polished.",
    grammar: ["cutout layering", "raw type stacking", "zine texture"],
    compare: [
      {
        slug: "anti-design",
        reason: "Zine style feels like an indie publication; anti-design is a wider refusal of neatness.",
      },
    ],
  },
  "academia-classical": {
    thesis:
      "A scholarly editorial mood that borrows from libraries, parchment, and institutional gravitas to create authority.",
    grammar: ["scholarly serif", "archival warmth", "brass-like accents"],
    compare: [
      {
        slug: "editorial-minimalism",
        reason: "Academia leans archival and established; editorial minimalism feels more modern and Swiss.",
      },
    ],
  },
  "cyberpunk-neon": {
    thesis:
      "A high-voltage sci-fi direction that trades premium restraint for electric speed, edge, and glitch energy.",
    grammar: ["neon contrast", "angular surfaces", "glitch cues"],
    compare: [
      {
        slug: "dark-glow-aurora",
        reason: "Cyberpunk is sharper and noisier; aurora is cinematic and controlled.",
      },
    ],
  },
  "maximalism-collage": {
    thesis:
      "A culture-forward excess strategy where abundance, layering, and decorative clash are the point of the composition.",
    grammar: ["layered abundance", "decorative contrast", "sticker-like accents"],
    compare: [
      {
        slug: "brutalist-editorial-zine",
        reason: "Maximalism is fuller and more exuberant; zine style is rougher and more publication-specific.",
      },
    ],
  },
  "professional-corporate": {
    thesis:
      "A trust-first business direction that favors composure, legibility, and buyer confidence over novelty.",
    grammar: ["controlled accents", "crisp cards", "executive clarity"],
    compare: [
      {
        slug: "terminal-interface",
        reason: "Professional is business-facing and polished; terminal interface is more operational and engineering-coded.",
      },
    ],
  },
  "terminal-interface": {
    thesis:
      "A technical console language that feels operational, precise, and credible to developer or infrastructure audiences.",
    grammar: ["monospace rhythm", "console contrast", "system-diagram framing"],
    compare: [
      {
        slug: "web3-orange-ledger",
        reason: "Terminal is pure operational precision; Web3 adds finance heat and protocol spectacle on top of dark surfaces.",
      },
    ],
  },
  "web3-orange-ledger": {
    thesis:
      "A crypto control-surface mood that mixes operational darkness with orange-gold urgency and ledger-like energy.",
    grammar: ["orange luminescence", "network grids", "dark protocol surfaces"],
    compare: [
      {
        slug: "terminal-interface",
        reason: "Web3 is finance- and protocol-coded; terminal is more stripped-down and engineering-coded.",
      },
    ],
  },
  "vaporwave-dreamscape": {
    thesis:
      "A dreamy retro-future mood built from sunset gradients and synthetic nostalgia rather than from hard sci-fi tension.",
    grammar: ["sunset neon", "soft synthetic glow", "dream-state nostalgia"],
    compare: [
      {
        slug: "cyberpunk-neon",
        reason: "Vaporwave is hazier and more surreal; cyberpunk is harder-edged and more aggressive.",
      },
    ],
  },
  "botanical-editorial": {
    thesis:
      "A grounded organic direction where earth tones and natural texture replace tech polish as the premium signal.",
    grammar: ["earth palette", "natural asymmetry", "botanical texture"],
    compare: [
      {
        slug: "meaningful-minimalism",
        reason: "Botanical editorial makes nature visible in the art direction; meaningful minimalism stays calmer and more abstract.",
      },
    ],
  },
  "sketch-wireframe": {
    thesis:
      "A hand-authored concept-board language that keeps roughness visible to feel creative, human, and in-process on purpose.",
    grammar: ["marker lines", "paper-cut accents", "annotated mockup energy"],
    compare: [
      {
        slug: "anti-design",
        reason: "Sketch looks handmade and workshop-like; anti-design looks intentionally unruly and culturally raw.",
      },
    ],
  },
  "bauhaus-geometric": {
    thesis:
      "A modernist graphic system where primary-color geometry and strict framing make the page feel rational and designed.",
    grammar: ["primary color blocks", "strict geometry", "modernist grids"],
    compare: [
      {
        slug: "bento-grid",
        reason: "Bauhaus is graphic and theory-led; bento is product-marketing modularity with softer ergonomics.",
      },
    ],
  },
  "art-deco-luxe": {
    thesis:
      "A cinematic luxury language where symmetry and ornamental linework create invitation-grade glamour.",
    grammar: ["gold geometry", "symmetric framing", "old-world glamour"],
    compare: [
      {
        slug: "premium-monochrome",
        reason: "Art Deco uses ornament and ceremony; premium monochrome uses restraint and precision.",
      },
    ],
  },
};

for (const slug of Object.keys(styleIntelligence)) {
  if (!getStyleBySlug(slug)) {
    delete styleIntelligence[slug];
  }
}

function toGrammarTokens(styleSlug: string) {
  const style = getStyleBySlug(styleSlug);
  if (!style) return fallbackStyleIntelligence.grammar;

  return [
    style.primaryLanguage,
    ...style.supportingTreatments,
    style.imageryMode,
  ]
    .map((item) => item.trim())
    .filter(Boolean)
    .slice(0, 3);
}

function toCompare(styleSlug: string): StyleComparison[] {
  const style = getStyleBySlug(styleSlug);
  if (!style) return [];

  const sibling = demoStyles.find(
    (candidate) => candidate.family === style.family && candidate.slug !== style.slug,
  );

  if (!sibling) return [];

  return [
    {
      slug: sibling.slug,
      reason: `${style.modeLabel} prioritizes "${style.primaryLanguage.toLowerCase()}"; ${sibling.modeLabel} gives a different read within the same family.`,
    },
  ];
}

function buildDerivedIntelligence(slug: string): StyleIntelligence {
  const style = getStyleBySlug(slug);
  if (!style) return fallbackStyleIntelligence;

  return {
    thesis: style.summary || fallbackStyleIntelligence.thesis,
    grammar: toGrammarTokens(slug),
    compare: toCompare(slug),
  };
}

export function getStyleIntelligence(slug: string): StyleIntelligence {
  return styleIntelligence[slug] ?? buildDerivedIntelligence(slug);
}
