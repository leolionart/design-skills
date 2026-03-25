import { familyOrder } from "@/lib/style-families";
import { styles } from "@/lib/themes";

export const productName = "Frame Atlas";

const demoCount = styles.filter((style) => style.demoAvailable !== false).length;

export const sharedContent = {
  eyebrow: "UI style catalog / 2021–2026",
  intro:
    "A fictional product used to compare the same brand story across the most recognizable visual systems of 2021–2026.",
  headline:
    "Turn one product story into a full catalog of radically different landing page directions.",
  description:
    "This site demonstrates how the same product can be art directed through very different visual styles — from editorial, glass, bento, and dark glow to anti-design and tactile soft 3D.",
  metrics: [
    { label: "Styles", value: String(styles.length) },
    { label: "Families", value: String(familyOrder.length) },
    { label: "Live demos", value: String(demoCount) },
  ],
  features: [
    {
      title: "Style-aware storytelling",
      description:
        "The same message set is restructured through layout, type scale, surface treatment, and narrative rhythm that change from one family and style to another.",
    },
    {
      title: "Renderer families underneath",
      description:
        "Under the catalog sits a renderer-family system, so multiple styles can reuse a skeleton while still feeling clearly different in visual language.",
    },
    {
      title: "Visible design trade-offs",
      description:
        "Each route makes the trade-offs between clarity, materiality, density, novelty, and conversion feel explicit instead of merely swapping palettes.",
    },
  ],
  quotes: [
    "A useful style gallery does not stop at palette swaps — it changes hierarchy, density and reading rhythm.",
    "The same product can feel editorial, technical, cinematic, tactile, loud or luxurious depending on composition choices.",
  ],
};
