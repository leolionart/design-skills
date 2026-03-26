import { styles, type ThemeDefinition } from "@/lib/themes";

export function getSiblingStyle(theme: ThemeDefinition) {
  return styles.find((style) => style.family === theme.family && style.slug !== theme.slug);
}

export function getHeroStatement(theme: ThemeDefinition) {
  switch (theme.recipe.heroVariant) {
    case "manifesto-split":
      return "A calmer landing page can still feel deeply intentional.";
    case "oversized-type":
      return "When typography leads, the interface stops acting like support material and becomes the spectacle.";
    case "ornamental-frame":
      return "Luxury can arrive through framing, restraint, and ceremony instead of louder effects.";
    case "scholarly-archive":
      return "Authority can come from editorial scholarship, not just from corporate polish.";
    case "modular-overview":
      return "Make the information architecture part of the aesthetic.";
    case "boardroom-brief":
      return "Clarity earns trust when the page reads like a decision-ready brief.";
    case "geometric-grid":
      return "Geometry can make a product page feel authored before color even enters the frame.";
    case "control-surface":
      return "Give the same product a more cinematic point of arrival.";
    case "object-spotlight":
      return "One object can carry the whole product story when the hero is staged like a reveal.";
    case "narrative-reveal":
      return "Sequence can become the aesthetic when the page is built around reveal and pacing.";
    case "neon-console":
      return "A technical page can feel alive when the interface behaves like a live control surface.";
    case "soft-stack":
      return "Softness should reshape the layout, not stop at color and border radius.";
    case "ambient-cloud":
      return "Atmosphere can lead the product story when the page is built like a field of light.";
    case "earthy-asymmetry":
      return "Natural materials can guide hierarchy just as strongly as high-tech spectacle.";
    case "poster-stack":
      return "The page can act like a statement poster instead of a polite marketing template.";
    case "glossy-badge-cloud":
      return "Nostalgia works best when the interface feels like a pile of glossy artifacts, not a safe template.";
    case "handmade-board":
      return "A hand-drawn rhythm can feel more authored than polished.";
    case "launch-swing":
    default:
      return "Build a launch page that feels designed, not generated.";
  }
}

export function getRhythmDescription(theme: ThemeDefinition) {
  switch (theme.recipe.rhythm) {
    case "reading":
      return "This version behaves more like a manifesto than a product deck.";
    case "scan":
      return "The page is intentionally denser, but scanability stays in front.";
    case "reveal":
      return "The page is sequenced like a reveal, so each section escalates rather than merely repeats.";
    case "flow":
      return "Softness here comes from rhythm and spacing, not just from rounded corners.";
    case "collision":
      return "Experimental does not mean disorganized; it means tension is doing part of the storytelling.";
    case "swing":
    default:
      return "The layout keeps changing, so the page never collapses into a predictable template.";
  }
}

export function getRhythmEyebrow(theme: ThemeDefinition) {
  switch (theme.recipe.rhythm) {
    case "reading":
      return "Reading rhythm";
    case "scan":
      return "Structured technical explainer";
    case "reveal":
      return "Reveal pacing";
    case "flow":
      return "Soft structure";
    case "collision":
      return "Disruption with intent";
    case "swing":
    default:
      return "What makes it feel flagship";
  }
}

export function getProofLabel(theme: ThemeDefinition) {
  switch (theme.recipe.proofVariant) {
    case "metric-band":
      return "Material stack";
    case "editorial-notes":
      return "Editorial notes";
    case "folio-columns":
      return "Folio spread";
    case "tile-matrix":
      return "Module matrix";
    case "comparison-grid":
      return "Comparison grid";
    case "object-spec":
      return "Object spec";
    case "reveal-cards":
      return "Reveal sequence";
    case "soft-bullets":
      return "Preview cues";
    case "signal-cards":
      return "Signal stack";
    case "keyword-badges":
    default:
      return "Style payload";
  }
}

export function getQuoteLabel(theme: ThemeDefinition) {
  switch (theme.recipe.emphasis) {
    case "type":
      return "Editorial read";
    case "grid":
      return "Structured read";
    case "object":
      return "Object read";
    case "material":
      return "Material read";
    case "atmosphere":
      return "Atmospheric read";
    case "poster":
    default:
      return "Style payload";
  }
}

export function getCompareLabel(theme: ThemeDefinition) {
  const sibling = getSiblingStyle(theme);

  return sibling ? `Compare ${sibling.modeLabel}` : undefined;
}
