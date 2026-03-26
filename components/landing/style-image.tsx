import Image from "next/image";
import type { CSSProperties } from "react";
import { getPhotoUrl, type ImageryConfig } from "@/lib/style-imagery";

type StyleImageProps = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  style?: CSSProperties;
  fallbackGradient?: string;
};

/**
 * Style-aware image component with gradient fallback
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
}: StyleImageProps) {
  const containerStyle: CSSProperties = fallbackGradient
    ? {
        background: fallbackGradient,
        ...style,
      }
    : style;

  return (
    <div
      className={`relative overflow-hidden rounded-[var(--theme-radius)] ${className}`}
      style={containerStyle}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        className="h-full w-full object-cover mix-blend-multiply opacity-80"
        unoptimized // For external Unsplash URLs
      />
    </div>
  );
}

type StyleHeroVisualProps = {
  imagery: ImageryConfig;
  variant?: "default" | "spotlight" | "ambient" | "material";
  className?: string;
};

/**
 * Hero visual adapted to different style variants
 */
export function StyleHeroVisual({
  imagery,
  variant = "default",
  className = "",
}: StyleHeroVisualProps) {
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
export function StyleFeatureVisual({
  imagery,
  size = "md",
  className = "",
}: StyleFeatureVisualProps) {
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
      className={`${config.aspect} ${className}`}
      fallbackGradient={imagery.fallbackGradient}
    />
  );
}
