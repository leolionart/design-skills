import Image from "next/image";
import type { CSSProperties } from "react";
import { getPhotoUrl, type ImageryConfig } from "@/lib/style-imagery";

type VisualVariant = "default" | "spotlight" | "ambient" | "material";

type StyleImageProps = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  style?: CSSProperties;
  fallbackGradient?: string;
  variant?: VisualVariant;
};

const imageTreatmentByVariant: Record<VisualVariant, string> = {
  default: "mix-blend-overlay opacity-58 saturate-[0.82] contrast-[0.92]",
  spotlight: "mix-blend-soft-light opacity-64 saturate-[0.92] contrast-[0.96]",
  ambient: "mix-blend-soft-light opacity-52 saturate-[0.78] contrast-[0.9]",
  material: "mix-blend-multiply opacity-62 saturate-[1.05] contrast-[0.96]",
};

const atmosphereByVariant: Record<VisualVariant, CSSProperties> = {
  default: {
    background:
      "radial-gradient(circle at 20% 18%, color-mix(in srgb, var(--theme-accent) 20%, transparent) 0, transparent 48%), radial-gradient(circle at 82% 28%, color-mix(in srgb, var(--theme-accent-2) 18%, transparent) 0, transparent 46%)",
  },
  spotlight: {
    background:
      "radial-gradient(circle at 50% 34%, color-mix(in srgb, var(--theme-accent) 26%, transparent) 0, transparent 54%), radial-gradient(circle at 18% 82%, color-mix(in srgb, var(--theme-accent-2) 16%, transparent) 0, transparent 44%)",
  },
  ambient: {
    background:
      "radial-gradient(circle at 26% 22%, color-mix(in srgb, var(--theme-accent) 18%, transparent) 0, transparent 58%), radial-gradient(circle at 78% 16%, color-mix(in srgb, var(--theme-accent-2) 16%, transparent) 0, transparent 52%)",
  },
  material: {
    background:
      "radial-gradient(circle at 22% 20%, color-mix(in srgb, var(--theme-accent) 22%, transparent) 0, transparent 44%), linear-gradient(140deg, color-mix(in srgb, var(--theme-accent-2) 16%, transparent) 0%, transparent 52%)",
  },
};

/**
 * Style-aware image component with atmospheric overlays,
 * so photos support (not overpower) family motion/background language.
 */
export function StyleImage({
  src,
  alt,
  width = 1200,
  height = 800,
  className = "",
  priority = false,
  style = {},
  fallbackGradient,
  variant = "default",
}: StyleImageProps) {
  const containerStyle: CSSProperties = fallbackGradient
    ? {
        background: fallbackGradient,
        ...style,
      }
    : style;

  return (
    <div className={`relative isolate overflow-hidden rounded-[var(--theme-radius)] ${className}`} style={containerStyle}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        className={`h-full w-full object-cover ${imageTreatmentByVariant[variant]}`}
        unoptimized
      />

      <div className="pointer-events-none absolute inset-0" style={atmosphereByVariant[variant]} />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.2),transparent_42%,rgba(0,0,0,0.16))]" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.32)_0.7px, transparent_0.7px), radial-gradient(rgba(0,0,0,0.14)_0.7px, transparent_0.7px)",
          backgroundPosition: "0 0, 10px 10px",
          backgroundSize: "20px 20px",
        }}
      />
    </div>
  );
}

type StyleHeroVisualProps = {
  imagery: ImageryConfig;
  variant?: VisualVariant;
  className?: string;
};

/**
 * Hero visual adapted to different style variants
 */
export function StyleHeroVisual({ imagery, variant = "default", className = "" }: StyleHeroVisualProps) {
  const variantClasses = {
    default: "aspect-[4/3]",
    spotlight: "aspect-[3/2]",
    ambient: "aspect-[16/9]",
    material: "aspect-square",
  };

  const heroUrl = getPhotoUrl("hero", imagery);

  return (
    <StyleImage
      src={heroUrl}
      alt="Hero visual"
      width={1200}
      height={800}
      priority
      variant={variant}
      className={`${variantClasses[variant]} ${className}`}
      fallbackGradient={imagery.fallbackGradient}
    />
  );
}

type StyleFeatureVisualProps = {
  imagery: ImageryConfig;
  size?: "sm" | "md" | "lg";
  className?: string;
};

/**
 * Feature section visuals
 */
export function StyleFeatureVisual({ imagery, size = "md", className = "" }: StyleFeatureVisualProps) {
  const sizeConfig = {
    sm: { width: 400, height: 300, aspect: "aspect-[4/3]" },
    md: { width: 600, height: 400, aspect: "aspect-[3/2]" },
    lg: { width: 800, height: 600, aspect: "aspect-[4/3]" },
  };

  const config = sizeConfig[size];
  const featureUrl = getPhotoUrl("feature", imagery);

  return (
    <StyleImage
      src={featureUrl}
      alt="Feature visual"
      width={config.width}
      height={config.height}
      variant="ambient"
      className={`${config.aspect} ${className}`}
      fallbackGradient={imagery.fallbackGradient}
    />
  );
}
