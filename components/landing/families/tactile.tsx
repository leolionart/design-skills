import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Surface } from "@/components/ui/surface";
import { productName, sharedContent } from "@/lib/landing-content";
import { styles, type ThemeDefinition } from "@/lib/themes";
import type { CSSProperties } from "react";

function getSiblingStyle(theme: ThemeDefinition) {
  return styles.find((style) => style.family === theme.family && style.slug !== theme.slug);
}

function keycapButtonClass(variant: "primary" | "secondary", isIndustrialSkeuo: boolean, isCraftedSkeuo: boolean) {
  if (!isIndustrialSkeuo && !isCraftedSkeuo) return "";

  if (isIndustrialSkeuo) {
    if (variant === "primary") {
      return "rounded-[10px] border border-[var(--theme-border)] shadow-[inset_0_1px_0_rgba(255,255,255,0.24),inset_0_-1px_0_rgba(0,0,0,0.36),0_10px_18px_rgba(0,0,0,0.42)]";
    }
    return "rounded-[10px] border border-[var(--theme-border)] bg-[linear-gradient(180deg,rgba(255,255,255,0.12),rgba(36,46,62,0.94))] shadow-[inset_0_1px_0_rgba(255,255,255,0.2),inset_0_-1px_0_rgba(0,0,0,0.32),0_8px_14px_rgba(0,0,0,0.34)]";
  }

  if (variant === "primary") {
    return "rounded-[16px] border border-[var(--theme-border)] shadow-[inset_0_1px_0_rgba(255,255,255,0.95),-5px_-5px_12px_rgba(255,255,255,0.84),6px_8px_14px_rgba(156,165,184,0.34)]";
  }
  return "rounded-[16px] border border-[var(--theme-border)] bg-[linear-gradient(180deg,rgba(255,255,255,0.94),rgba(237,241,248,0.92))] shadow-[inset_0_1px_0_rgba(255,255,255,0.94),-4px_-4px_10px_rgba(255,255,255,0.78),5px_7px_12px_rgba(160,170,190,0.28)]";
}

export function TactileLanding({ theme }: { theme: ThemeDefinition }) {
  const siblingStyle = getSiblingStyle(theme);
  const isMesh = theme.slug === "organic-mesh-gradients";
  const isIndustrialSkeuo = theme.slug === "skeuomorphic";
  const isCraftedSkeuo = theme.slug === "skeuomorphism";
  const isSkeuo = isIndustrialSkeuo || isCraftedSkeuo;

  // Mesh-specific glass surface classes
  const surfaceClass = isMesh
    ? "backdrop-blur-xl bg-white/40 border border-white/40 shadow-[var(--theme-shadow)]"
    : isIndustrialSkeuo
      ? "bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(0,0,0,0.18))] border-[rgba(255,255,255,0.2)] shadow-[0_14px_24px_rgba(0,0,0,0.35)]"
      : isCraftedSkeuo
        ? "bg-[linear-gradient(180deg,rgba(255,255,255,0.95),rgba(243,239,230,0.88))] shadow-[0_14px_24px_rgba(72,78,96,0.16)]"
        : "shadow-[var(--theme-shadow)]";

  const keycapStyle: CSSProperties | undefined = isIndustrialSkeuo
    ? {
        background:
          "linear-gradient(180deg, rgba(255, 255, 255, 0.16) 0%, rgba(35, 44, 58, 0.96) 100%)",
        boxShadow:
          "inset 0 1px 0 rgba(255, 255, 255, 0.24), inset 0 -1px 0 rgba(0, 0, 0, 0.36), 0 10px 18px rgba(0, 0, 0, 0.42)",
      }
    : isCraftedSkeuo
      ? {
          background:
            "linear-gradient(180deg, rgba(255, 255, 255, 0.98) 0%, rgba(236, 240, 248, 0.94) 100%)",
          boxShadow:
            "inset 0 1px 0 rgba(255, 255, 255, 0.96), -5px -5px 12px rgba(255, 255, 255, 0.86), 6px 8px 14px rgba(156, 165, 184, 0.34)",
        }
      : undefined;

  const wellStyle: CSSProperties | undefined = isIndustrialSkeuo
    ? {
        background: "linear-gradient(180deg, rgba(7, 12, 20, 0.34), rgba(255, 255, 255, 0.03))",
        boxShadow:
          "inset 0 1px 0 rgba(255, 255, 255, 0.08), inset 0 -1px 0 rgba(0, 0, 0, 0.42), 0 1px 0 rgba(255, 255, 255, 0.06)",
      }
    : isCraftedSkeuo
      ? {
          background:
            "linear-gradient(180deg, rgba(233, 236, 244, 0.84) 0%, rgba(246, 248, 251, 0.94) 100%)",
          boxShadow:
            "inset 2px 2px 6px rgba(170, 176, 192, 0.32), inset -2px -2px 6px rgba(255, 255, 255, 0.9)",
        }
      : undefined;

  const keycapClass = isIndustrialSkeuo
    ? "rounded-[10px] border border-[var(--theme-border)]"
    : isCraftedSkeuo
      ? "rounded-[16px] border border-[var(--theme-border)]"
      : "";

  const wellClass = isIndustrialSkeuo
    ? "rounded-[calc(var(--theme-radius)-8px)] border border-[var(--theme-border)] p-3"
    : isCraftedSkeuo
      ? "rounded-[calc(var(--theme-radius)-8px)] border border-[var(--theme-border)] p-3"
      : "";

  const buttonPrimaryClass = keycapButtonClass("primary", isIndustrialSkeuo, isCraftedSkeuo);
  const buttonSecondaryClass = keycapButtonClass("secondary", isIndustrialSkeuo, isCraftedSkeuo);

  const heroDescription = isIndustrialSkeuo
    ? `${productName} is shaped like an operator control board, where modules feel like physical keys rising from a machine base with clear tactile hierarchy.`
    : isCraftedSkeuo
      ? `${productName} is art directed as a refined material interface where cards and controls read like raised keycaps sitting above a soft crafted base.`
      : `${productName} is pulled toward a softer, more touchable, and more approachable feel through oversized rounding, gentle depth, and a friendlier section rhythm.`;

  const sectionHeading = isIndustrialSkeuo
    ? {
        eyebrow: "Hardware keycap structure",
        title: "Depth should feel like physical controls rising from a base panel.",
        description:
          "Use a base well plus raised keycap modules, clear edge highlights, and controlled shadows so tactility feels functional, not decorative.",
      }
    : isCraftedSkeuo
      ? {
          eyebrow: "Crafted keycap realism",
          title: "Material depth comes from raised controls, not from blur or blobs.",
          description:
            "Keep surfaces clean and premium, then build tactile realism with subtle bevel highlights and consistent keycap elevation across modules.",
        }
      : {
          eyebrow: "Soft structure",
          title: "Tactility here comes from surface treatment, not just from switching to pastel colors.",
          description:
            "Claymorphism and organic mesh gradients live in the same family because both prioritize softness and approachability, but one leans toward raised material forms while the other leans toward atmosphere and color environment.",
        };

  return (
    <>
      <section className="relative overflow-hidden py-8 sm:py-14">
        {isMesh ? (
          <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
            {/* Rich mesh background for organic-mesh-gradients */}
            <div className="absolute inset-0 bg-[var(--theme-bg)]" />
            <div
              className="absolute -top-[10%] -left-[10%] h-[50vh] w-[50vh] rounded-full mix-blend-multiply filter blur-[80px] opacity-70 animate-blob"
              style={{ background: "var(--theme-accent-2)" }}
            />
            <div
              className="absolute top-[20%] -right-[10%] h-[60vh] w-[60vh] rounded-full mix-blend-multiply filter blur-[80px] opacity-70 animate-blob animation-delay-2000"
              style={{ background: "var(--theme-accent)" }}
            />
            <div
              className="absolute -bottom-[20%] left-[20%] h-[50vh] w-[50vh] rounded-full mix-blend-multiply filter blur-[80px] opacity-70 animate-blob animation-delay-4000"
              style={{ background: "#a5b4fc" }} // Additional indigo tone
            />
            <div
              className="absolute bottom-[10%] right-[10%] h-[40vh] w-[40vh] rounded-full mix-blend-multiply filter blur-[60px] opacity-60"
              style={{ background: "#e879f9" }} // Additional pink tone
            />
          </div>
        ) : (
          <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
            <div
              className="absolute -left-10 top-6 h-52 w-52 rounded-full opacity-30 blur-3xl"
              style={{ background: "var(--theme-accent)" }}
            />
            <div
              className="absolute right-0 top-20 h-64 w-64 rounded-full opacity-25 blur-3xl"
              style={{ background: "var(--theme-accent-2)" }}
            />
            <div
              className="absolute bottom-0 left-1/3 h-56 w-56 rounded-full opacity-20 blur-3xl"
              style={{ background: "var(--theme-bg-alt)" }}
            />
          </div>
        )}

        <Container>
          <div className="grid gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
            <div>
              <p
                style={isSkeuo ? keycapStyle : undefined}
                className={`inline-flex px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--theme-muted)] ${isMesh ? 'rounded-full bg-white/50 border border-white/50 backdrop-blur-md' : isSkeuo ? `${keycapClass}` : 'rounded-full border border-[var(--theme-border)] bg-[var(--theme-surface-strong)] shadow-[var(--theme-shadow)]'}`}
              >
                {theme.kicker}
              </p>
              <h1 className="mt-6 max-w-4xl font-[family-name:var(--theme-font-display)] text-5xl leading-[0.92] tracking-[-0.06em] text-[var(--theme-text)] sm:text-7xl lg:text-[6rem]">
                {theme.pageTitle}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--theme-muted)] sm:text-xl">
                {heroDescription}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/" className={buttonPrimaryClass}>
                  Back to style catalog
                </Button>
                {siblingStyle ? (
                  <Button href={`/styles/${siblingStyle.slug}`} variant="secondary" className={buttonSecondaryClass}>
                    Compare {siblingStyle.modeLabel}
                  </Button>
                ) : null}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-[1.1fr_0.9fr]">
              <Surface className={`p-6 sm:p-7 ${surfaceClass}`}>
                <p className="text-xs uppercase tracking-[0.24em] text-[var(--theme-muted)]">
                  Material feel
                </p>
                <div
                  style={isSkeuo ? wellStyle : undefined}
                  className={`mt-4 ${wellClass}`}
                >
                  <div style={isSkeuo ? keycapStyle : undefined} className={`p-4 ${isSkeuo ? keycapClass : ""}`}>
                    <p className="text-3xl font-semibold tracking-[-0.04em] text-[var(--theme-text)]">
                      {theme.primaryLanguage}
                    </p>
                    <p className="mt-4 text-sm leading-7 text-[var(--theme-muted)]">{theme.summary}</p>
                  </div>
                </div>
              </Surface>
              <Surface className={`${isSkeuo ? "" : "translate-y-4 sm:mt-10"} p-6 ${surfaceClass}`}>
                <p className="text-xs uppercase tracking-[0.24em] text-[var(--theme-muted)]">
                  Supporting treatments
                </p>
                <ul
                  style={isSkeuo ? wellStyle : undefined}
                  className={`mt-4 space-y-3 text-sm leading-6 text-[var(--theme-text)] ${wellClass}`}
                >
                  {theme.supportingTreatments.map((item) => (
                    <li
                      key={item}
                      style={isSkeuo ? keycapStyle : undefined}
                      className={`px-4 py-2 ${isMesh ? 'rounded-full bg-white/40' : isSkeuo ? `${keycapClass}` : 'rounded-full bg-[var(--theme-bg)]'}`}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </Surface>
              <Surface className={`p-6 sm:col-span-2 ${surfaceClass}`}>
                <p className="text-xs uppercase tracking-[0.24em] text-[var(--theme-muted)]">
                  Preview cues
                </p>
                <div
                  style={isSkeuo ? wellStyle : undefined}
                  className={`mt-5 grid gap-3 sm:grid-cols-3 ${wellClass}`}
                >
                  {theme.previewBullets.map((bullet, index) => (
                    <div
                      key={bullet}
                      style={isSkeuo ? keycapStyle : undefined}
                      className={`p-4 ${
                        !isSkeuo && (index === 1 ? "sm:-translate-y-4" : index === 2 ? "sm:translate-y-4" : "")
                      } ${isMesh ? 'rounded-[calc(var(--theme-radius)-10px)] bg-white/40 border border-white/30 backdrop-blur-sm' : isSkeuo ? `${keycapClass}` : 'rounded-[calc(var(--theme-radius)-10px)] border border-[var(--theme-border)] bg-[var(--theme-surface-strong)]'}`}
                    >
                      <p className="text-xs uppercase tracking-[0.2em] text-[var(--theme-muted)]">
                        0{index + 1}
                      </p>
                      <p className="mt-3 text-sm leading-6 text-[var(--theme-text)]">{bullet}</p>
                    </div>
                  ))}
                </div>
              </Surface>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-10 sm:py-14">
        <Container className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
          <SectionHeading
            eyebrow={sectionHeading.eyebrow}
            title={sectionHeading.title}
            description={sectionHeading.description}
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {sharedContent.features.map((feature, index) => (
              <Surface
                key={feature.title}
                className={`p-6 ${surfaceClass} ${
                  index === 0 ? "sm:translate-y-6" : index === 2 ? "sm:col-span-2" : ""
                }`}
              >
                <div style={isSkeuo ? wellStyle : undefined} className={wellClass}>
                  <div style={isSkeuo ? keycapStyle : undefined} className={`p-4 ${isSkeuo ? keycapClass : ""}`}>
                    <p className="text-xs uppercase tracking-[0.22em] text-[var(--theme-muted)]">
                      {isSkeuo ? "control block" : "soft block"} 0{index + 1}
                    </p>
                    <h2 className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-[var(--theme-text)]">
                      {feature.title}
                    </h2>
                    <p className="mt-4 text-sm leading-7 text-[var(--theme-muted)]">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </Surface>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-10 sm:py-16">
        <Container>
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <Surface className={`p-8 sm:p-10 ${surfaceClass}`}>
              <p className="text-xs uppercase tracking-[0.24em] text-[var(--theme-muted)]">
                Emotional read
              </p>
              <div style={isSkeuo ? wellStyle : undefined} className={`mt-6 ${wellClass}`}>
                <blockquote
                  style={isSkeuo ? keycapStyle : undefined}
                  className={`max-w-4xl p-4 font-[family-name:var(--theme-font-display)] text-4xl leading-tight tracking-[-0.05em] text-[var(--theme-text)] sm:text-5xl ${isSkeuo ? keycapClass : ""}`}
                >
                  “{sharedContent.quotes[1]}”
                </blockquote>
              </div>
            </Surface>
            <Surface className={`p-8 ${surfaceClass}`}>
              <p className="text-xs uppercase tracking-[0.24em] text-[var(--theme-muted)]">Keywords</p>
              <div
                style={isSkeuo ? wellStyle : undefined}
                className={`mt-5 flex flex-wrap gap-3 ${wellClass}`}
              >
                {theme.keywords.slice(0, 6).map((keyword) => (
                  <span
                    key={keyword}
                    style={isSkeuo ? keycapStyle : undefined}
                    className={`px-4 py-2 text-sm text-[var(--theme-text)] ${isMesh ? 'rounded-full bg-white/50 border border-white/50' : isSkeuo ? `${keycapClass}` : 'rounded-full border border-[var(--theme-border)] bg-[var(--theme-surface-strong)]'}`}
                  >
                    {keyword}
                  </span>
                ))}
              </div>
              <p className="mt-6 text-sm leading-7 text-[var(--theme-muted)]">
                Audience fit: {theme.audience}
              </p>
            </Surface>
          </div>
        </Container>
      </section>
    </>
  );
}
