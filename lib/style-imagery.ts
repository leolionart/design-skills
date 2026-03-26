/**
 * Style-aware imagery system with Unsplash API integration
 * Uses specific photo queries for each design style
 */

export type ImageryConfig = {
  heroQuery: string;
  featureQuery: string;
  proofQuery: string;
  fallbackGradient: string;
  fallbackHeroUrl?: string; // For SSR/build time
  fallbackFeatureUrl?: string;
};

/**
 * Fallback to Unsplash Source during build/SSR
 */
const unsplashSource = (width: number, height: number, query: string) =>
  `https://source.unsplash.com/${width}x${height}/?${query}`;

export const styleImagery: Record<string, ImageryConfig> = {
  "iridescent-holographic-chrome": {
    heroQuery: "holographic iridescent chrome reflective metallic",
    featureQuery: "glossy metallic fashion tech",
    proofQuery: "abstract colorful gradient spectrum",
    fallbackGradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    fallbackHeroUrl: unsplashSource(1200, 800, "holographic,chrome,iridescent"),
    fallbackFeatureUrl: unsplashSource(600, 400, "metallic,glossy"),
  },
  "meaningful-minimalism": {
    heroQuery: "minimal zen calm architecture white space",
    featureQuery: "still life minimal editorial clean",
    proofQuery: "simple white minimal",
    fallbackGradient: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
    fallbackHeroUrl: unsplashSource(1200, 800, "minimal,zen,calm"),
    fallbackFeatureUrl: unsplashSource(600, 400, "still-life,minimal"),
  },
  "cute-alism-kawaii-brutalism": {
    heroQuery: "playful colorful geometric fun vibrant",
    featureQuery: "cute character illustration playful",
    proofQuery: "bold shapes bright colors",
    fallbackGradient: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)",
    fallbackHeroUrl: unsplashSource(1200, 800, "playful,colorful,geometric"),
    fallbackFeatureUrl: unsplashSource(600, 400, "cute,colorful"),
  },
  "brutalist-editorial-zine": {
    heroQuery: "magazine editorial collage raw print",
    featureQuery: "zine typography print editorial",
    proofQuery: "paper texture rough analog",
    fallbackGradient: "linear-gradient(135deg, #f3eee6 0%, #d84a2a 100%)",
    fallbackHeroUrl: unsplashSource(1200, 800, "magazine,editorial,collage"),
    fallbackFeatureUrl: unsplashSource(600, 400, "zine,typography"),
  },
  "inclusive-accessibility-first": {
    heroQuery: "diverse people accessible inclusive community",
    featureQuery: "inclusive community people diverse",
    proofQuery: "diagram clear contrast simple",
    fallbackGradient: "linear-gradient(135deg, #f7f5ee 0%, #0f5fff 100%)",
    fallbackHeroUrl: unsplashSource(1200, 800, "people,diverse,accessible"),
    fallbackFeatureUrl: unsplashSource(600, 400, "inclusive,community"),
  },
  "glassmorphism-mature": {
    heroQuery: "glass translucent modern tech interface",
    featureQuery: "frosted blur premium minimal",
    proofQuery: "interface clean blue gradient",
    fallbackGradient: "linear-gradient(135deg, #e6eef8 0%, #4d84f3 100%)",
    fallbackHeroUrl: unsplashSource(1200, 800, "glass,translucent,modern"),
    fallbackFeatureUrl: unsplashSource(600, 400, "frosted,blur"),
  },
  "neo-brutalism": {
    heroQuery: "bold brutalist geometry raw concrete",
    featureQuery: "graphic strong blocky shapes",
    proofQuery: "minimal shapes contrast geometric",
    fallbackGradient: "linear-gradient(135deg, #fff5d6 0%, #111111 100%)",
    fallbackHeroUrl: unsplashSource(1200, 800, "bold,brutalist,geometry"),
    fallbackFeatureUrl: unsplashSource(600, 400, "graphic,strong"),
  },
  "dark-glow-aurora": {
    heroQuery: "dark glow neon cinematic night",
    featureQuery: "aurora luminous night sky",
    proofQuery: "dark glow abstract light",
    fallbackGradient: "linear-gradient(135deg, #1a1625 0%, #5b6fff 100%)",
    fallbackHeroUrl: unsplashSource(1200, 800, "dark,glow,neon"),
    fallbackFeatureUrl: unsplashSource(600, 400, "aurora,luminous"),
  },
  "claymorphism-soft-3d": {
    heroQuery: "soft clay 3d tactile pastel",
    featureQuery: "rounded pastel friendly soft",
    proofQuery: "soft minimal colors smooth",
    fallbackGradient: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)",
    fallbackHeroUrl: unsplashSource(1200, 800, "soft,clay,3d"),
    fallbackFeatureUrl: unsplashSource(600, 400, "rounded,pastel"),
  },
  "y2k-retro-futurism": {
    heroQuery: "y2k retro futuristic glossy chrome",
    featureQuery: "chrome nostalgic 90s metallic",
    proofQuery: "metallic bright fun colors",
    fallbackGradient: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
    fallbackHeroUrl: unsplashSource(1200, 800, "y2k,retro,futuristic"),
    fallbackFeatureUrl: unsplashSource(600, 400, "chrome,nostalgic"),
  },
  "editorial-minimalism": {
    heroQuery: "editorial minimal typography white clean",
    featureQuery: "magazine clean layout white",
    proofQuery: "minimal elegant space simple",
    fallbackGradient: "linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%)",
    fallbackHeroUrl: unsplashSource(1200, 800, "editorial,minimal,typography"),
    fallbackFeatureUrl: unsplashSource(600, 400, "magazine,clean"),
  },
  "bento-grid": {
    heroQuery: "dashboard grid modular ui tiles",
    featureQuery: "tiles organized product dashboard",
    proofQuery: "grid clean scan organized",
    fallbackGradient: "linear-gradient(135deg, #f7f8fa 0%, #dfe6f0 100%)",
    fallbackHeroUrl: unsplashSource(1200, 800, "dashboard,grid,modular"),
    fallbackFeatureUrl: unsplashSource(600, 400, "tiles,organized"),
  },
  "anti-design": {
    heroQuery: "chaotic experimental bold raw art",
    featureQuery: "unconventional culture art bold",
    proofQuery: "collage mixed loud colors",
    fallbackGradient: "linear-gradient(135deg, #fff 0%, #ff0000 100%)",
    fallbackHeroUrl: unsplashSource(1200, 800, "chaotic,experimental,bold"),
    fallbackFeatureUrl: unsplashSource(600, 400, "unconventional,culture"),
  },
  "clean-saas-gradient": {
    heroQuery: "saas modern clean gradient interface",
    featureQuery: "product interface smooth gradient",
    proofQuery: "dashboard blue professional clean",
    fallbackGradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    fallbackHeroUrl: unsplashSource(1200, 800, "saas,modern,clean"),
    fallbackFeatureUrl: unsplashSource(600, 400, "product,interface"),
  },
  "typography-first": {
    heroQuery: "typography text bold editorial letters",
    featureQuery: "type letters design font",
    proofQuery: "font minimal clean text",
    fallbackGradient: "linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%)",
    fallbackHeroUrl: unsplashSource(1200, 800, "typography,text,bold"),
    fallbackFeatureUrl: unsplashSource(600, 400, "type,letters"),
  },
  "organic-mesh-gradients": {
    heroQuery: "organic fluid gradient soft flowing",
    featureQuery: "mesh flowing colors abstract",
    proofQuery: "abstract smooth blend gradient",
    fallbackGradient: "linear-gradient(135deg, #d299c2 0%, #fef9d7 100%)",
    fallbackHeroUrl: unsplashSource(1200, 800, "organic,fluid,gradient"),
    fallbackFeatureUrl: unsplashSource(600, 400, "mesh,flowing"),
  },
  "premium-monochrome": {
    heroQuery: "luxury monochrome elegant minimal black white",
    featureQuery: "black white premium sophisticated",
    proofQuery: "minimal contrast clean monochrome",
    fallbackGradient: "linear-gradient(135deg, #000000 0%, #434343 100%)",
    fallbackHeroUrl: unsplashSource(1200, 800, "luxury,monochrome,elegant"),
    fallbackFeatureUrl: unsplashSource(600, 400, "black-white,premium"),
  },
  "motion-led-storytelling": {
    heroQuery: "cinematic narrative dynamic story dramatic",
    featureQuery: "motion sequence reveal cinematic",
    proofQuery: "dramatic scene atmosphere cinematic",
    fallbackGradient: "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)",
    fallbackHeroUrl: unsplashSource(1200, 800, "cinematic,narrative,dynamic"),
    fallbackFeatureUrl: unsplashSource(600, 400, "motion,sequence"),
  },
  "immersive-3d-product": {
    heroQuery: "3d product render spotlight premium",
    featureQuery: "object staged premium product",
    proofQuery: "product render clean 3d",
    fallbackGradient: "linear-gradient(135deg, #232526 0%, #414345 100%)",
    fallbackHeroUrl: unsplashSource(1200, 800, "3d,product,render"),
    fallbackFeatureUrl: unsplashSource(600, 400, "object,staged"),
  },
  "default-high-agency": {
    heroQuery: "abstract geometric modern asymmetric design",
    featureQuery: "design contemporary bold modern",
    proofQuery: "shapes muted clean geometric",
    fallbackGradient: "linear-gradient(135deg, #f7f1e8 0%, #c76434 100%)",
    fallbackHeroUrl: unsplashSource(1200, 800, "abstract,geometric,modern"),
    fallbackFeatureUrl: unsplashSource(600, 400, "design,contemporary"),
  },
};

/**
 * Get imagery configuration for a given style slug
 */
export function getStyleImagery(slug: string): ImageryConfig {
  return (
    styleImagery[slug] || {
      heroQuery: "abstract design modern",
      featureQuery: "minimal modern clean",
      proofQuery: "clean simple minimal",
      fallbackGradient: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
      fallbackHeroUrl: unsplashSource(1200, 800, "abstract,design"),
      fallbackFeatureUrl: unsplashSource(600, 400, "minimal,modern"),
    }
  );
}

/**
 * Get image URL via local API redirect (more reliable than source.unsplash.com).
 */
export function getPhotoUrl(type: "hero" | "feature" | "proof", config: ImageryConfig): string {
  if (!config) {
    console.error("getPhotoUrl received undefined config for type:", type);
    return "";
  }
  const query = type === "hero" ? config.heroQuery : type === "feature" ? config.featureQuery : config.proofQuery;
  if (query) {
    return `/api/unsplash?mode=image&query=${encodeURIComponent(query)}`;
  }
  if (type === "hero") {
    return config.fallbackHeroUrl || "";
  } else if (type === "feature") {
    return config.fallbackFeatureUrl || "";
  }
  return "";
}
