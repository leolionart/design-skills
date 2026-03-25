import type { ComponentType } from "react";

import { ExperimentalLanding } from "@/components/landing/families/experimental";
import { TactileLanding } from "@/components/landing/families/tactile";
import { EditorialLanding } from "@/components/landing/themes/editorial";
import { HighAgencyLanding } from "@/components/landing/themes/high-agency";
import { PremiumLanding } from "@/components/landing/themes/premium";
import { TechnicalLanding } from "@/components/landing/themes/technical";
import type { StyleFamily } from "@/lib/style-families";
import type { ThemeDefinition } from "@/lib/themes";

export type FamilyRenderer = ComponentType<{ theme: ThemeDefinition }>;

export const familyRenderers: Record<StyleFamily, FamilyRenderer> = {
  "high-agency": HighAgencyLanding,
  "editorial-typography": EditorialLanding,
  "grid-product": TechnicalLanding,
  "immersive-premium": PremiumLanding,
  "tactile-organic": TactileLanding,
  "experimental-loud": ExperimentalLanding,
};
