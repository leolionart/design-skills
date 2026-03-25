import { styleFamilies } from "@/lib/style-families";
import type { ThemeDefinition } from "@/lib/themes";

export function StylePreview({ theme }: { theme: ThemeDefinition }) {
  const family = styleFamilies[theme.family];
  const previewKind = theme.previewKind ?? theme.slug;

  const hasCustomPreview = [
    "chrome-iridescent",
    "zen-editorial",
    "kawaii-brutalism",
    "zine-collage",
    "inclusive-contrast",
  ].includes(previewKind);

  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-[calc(var(--theme-radius)-10px)] border border-[var(--theme-border)] bg-[var(--theme-bg)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--theme-accent)_0%,transparent_42%)] opacity-15" />

      {previewKind === "chrome-iridescent" ? (
        <>
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.9),rgba(156,125,255,0.22),rgba(112,223,255,0.22),rgba(255,255,255,0.9))]" />
          <div className="absolute left-6 top-6 h-24 w-24 rounded-full border border-white/50 bg-white/30 backdrop-blur-xl" />
          <div className="absolute right-6 top-8 h-14 w-32 rounded-full border border-white/60 bg-white/35 shadow-[var(--theme-shadow)]" />
          <div className="absolute bottom-8 left-10 right-10 h-16 rounded-full border border-white/50 bg-[linear-gradient(90deg,rgba(255,255,255,0.9),rgba(156,125,255,0.25),rgba(112,223,255,0.28),rgba(255,255,255,0.9))]" />
        </>
      ) : null}

      {previewKind === "zen-editorial" ? (
        <>
          <div className="absolute left-8 top-8 h-px w-16 bg-[var(--theme-border)]" />
          <div className="absolute left-8 top-14 text-5xl font-[family-name:var(--theme-font-display)] leading-none text-[var(--theme-text)]/90">
            静
          </div>
          <div className="absolute right-8 top-10 h-24 w-20 rounded-[20px] bg-[var(--theme-bg-alt)]/70" />
          <div className="absolute bottom-7 left-8 right-8 h-12 rounded-full border border-[var(--theme-border)] bg-[var(--theme-surface-strong)]" />
        </>
      ) : null}

      {previewKind === "kawaii-brutalism" ? (
        <>
          <div className="absolute left-5 top-5 h-18 w-22 -rotate-3 rounded-[18px] border-2 border-[var(--theme-border)] bg-[var(--theme-accent)]/80" />
          <div className="absolute right-6 top-7 h-20 w-20 rounded-full border-2 border-[var(--theme-border)] bg-[var(--theme-surface-strong)]" />
          <div className="absolute right-[72px] top-[54px] h-2 w-2 rounded-full bg-[var(--theme-text)]" />
          <div className="absolute right-[48px] top-[54px] h-2 w-2 rounded-full bg-[var(--theme-text)]" />
          <div className="absolute right-[46px] top-[72px] h-5 w-7 rounded-b-full border-b-2 border-[var(--theme-border)]" />
          <div className="absolute bottom-6 left-7 h-14 w-36 rounded-[18px] border-2 border-[var(--theme-border)] bg-[var(--theme-bg-alt)] shadow-[var(--theme-shadow)]" />
        </>
      ) : null}

      {previewKind === "zine-collage" ? (
        <>
          <div className="absolute left-6 top-6 h-20 w-24 -rotate-6 rounded-[8px] border-2 border-[var(--theme-border)] bg-[var(--theme-surface-strong)]" />
          <div className="absolute left-20 top-16 h-24 w-28 rotate-3 rounded-[8px] bg-[var(--theme-accent)]/80" />
          <div className="absolute right-8 top-8 text-3xl font-black uppercase tracking-[-0.08em] text-[var(--theme-text)]">
            ZINE
          </div>
          <div className="absolute bottom-6 right-10 h-12 w-32 -rotate-2 rounded-[8px] border-2 border-[var(--theme-border)] bg-[var(--theme-bg-alt)]" />
          <div className="absolute bottom-10 left-8 h-px w-24 bg-[var(--theme-text)]" />
          <div className="absolute bottom-16 left-8 h-px w-16 bg-[var(--theme-text)]/70" />
        </>
      ) : null}

      {previewKind === "inclusive-contrast" ? (
        <>
          <div className="absolute inset-x-5 top-5 h-14 rounded-[18px] bg-[var(--theme-text)] text-[var(--theme-bg)]" />
          <div className="absolute left-8 top-9 h-3 w-28 rounded-full bg-[var(--theme-bg)]/90" />
          <div className="absolute left-5 top-24 grid w-[calc(100%-2.5rem)] grid-cols-2 gap-3">
            <div className="h-16 rounded-[18px] border border-[var(--theme-border)] bg-[var(--theme-surface-strong)]" />
            <div className="h-16 rounded-[18px] bg-[var(--theme-bg-alt)]" />
            <div className="col-span-2 h-12 rounded-[18px] border border-[var(--theme-border)] bg-[var(--theme-surface)]" />
          </div>
        </>
      ) : null}

      {!hasCustomPreview && theme.family === "high-agency" ? (
        <>
          <div className="absolute left-4 top-4 h-20 w-20 rounded-[22px] bg-[var(--theme-accent)]/85" />
          <div className="absolute left-24 top-10 h-10 w-28 rounded-full bg-[var(--theme-text)]/12" />
          <div className="absolute right-4 top-4 h-32 w-24 rounded-[26px] border border-[var(--theme-border)] bg-[var(--theme-surface-strong)]" />
          <div className="absolute bottom-4 left-4 right-10 h-24 rounded-[26px] border border-[var(--theme-border)] bg-[var(--theme-surface)]" />
        </>
      ) : null}

      {!hasCustomPreview && theme.family === "editorial-typography" ? (
        <>
          <div className="absolute left-5 top-5 h-px w-14 bg-[var(--theme-border)]" />
          <div className="absolute left-5 top-10 font-[family-name:var(--theme-font-display)] text-6xl leading-none text-[var(--theme-text)]/90">
            A
          </div>
          <div className="absolute right-5 top-8 h-3 w-28 rounded-full bg-[var(--theme-text)]/12" />
          <div className="absolute right-5 top-16 h-3 w-20 rounded-full bg-[var(--theme-text)]/10" />
          <div className="absolute bottom-5 left-5 right-5 h-20 border-t border-[var(--theme-border)]" />
        </>
      ) : null}

      {!hasCustomPreview && theme.family === "grid-product" ? (
        <>
          <div className="absolute left-4 top-4 grid w-[calc(100%-2rem)] grid-cols-3 gap-3">
            <div className="col-span-2 h-20 rounded-[22px] bg-[var(--theme-surface-strong)]" />
            <div className="h-20 rounded-[22px] bg-[var(--theme-accent)]/18" />
            <div className="h-16 rounded-[20px] bg-[var(--theme-text)]/8" />
            <div className="h-16 rounded-[20px] bg-[var(--theme-surface-strong)]" />
            <div className="h-16 rounded-[20px] bg-[var(--theme-accent-2)]/16" />
          </div>
        </>
      ) : null}

      {!hasCustomPreview && theme.family === "immersive-premium" ? (
        <>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,var(--theme-accent)_0%,transparent_38%)] opacity-30" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,var(--theme-accent-2)_0%,transparent_32%)] opacity-25" />
          <div className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-[var(--theme-surface-strong)]/60 shadow-[var(--theme-shadow)]" />
          <div className="absolute bottom-5 left-5 right-5 h-12 rounded-full border border-[var(--theme-border)] bg-[var(--theme-surface)]" />
        </>
      ) : null}

      {!hasCustomPreview && theme.family === "tactile-organic" ? (
        <>
          <div className="absolute left-5 top-5 h-24 w-24 rounded-full bg-[var(--theme-accent)]/35 blur-xl" />
          <div className="absolute right-5 top-8 h-20 w-28 rounded-[28px] bg-[var(--theme-surface-strong)] shadow-[var(--theme-shadow)]" />
          <div className="absolute bottom-6 left-6 h-16 w-36 rounded-full bg-[var(--theme-accent-2)]/20 shadow-[var(--theme-shadow)]" />
          <div className="absolute bottom-6 right-6 h-16 w-16 rounded-full bg-[var(--theme-surface-strong)] shadow-[var(--theme-shadow)]" />
        </>
      ) : null}

      {!hasCustomPreview && theme.family === "experimental-loud" ? (
        <>
          <div className="absolute left-5 top-5 h-16 w-20 -rotate-3 rounded-[16px] border-2 border-[var(--theme-border)] bg-[var(--theme-accent)]/65" />
          <div className="absolute right-5 top-8 h-20 w-24 rotate-3 rounded-[16px] border-2 border-[var(--theme-border)] bg-[var(--theme-surface-strong)]" />
          <div className="absolute bottom-5 left-8 h-14 w-32 -rotate-2 rounded-[14px] border-2 border-[var(--theme-border)] bg-[var(--theme-bg-alt)]" />
          <div className="absolute bottom-8 right-8 text-4xl font-black uppercase tracking-[-0.06em] text-[var(--theme-text)]/90">
            UI
          </div>
        </>
      ) : null}

      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between rounded-full border border-[var(--theme-border)] bg-[var(--theme-surface-strong)]/90 px-3 py-2 backdrop-blur-sm">
        <span className="truncate text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--theme-muted)]">
          {family.label}
        </span>
        <span className="ml-3 truncate text-xs font-semibold text-[var(--theme-text)]">{theme.modeLabel}</span>
      </div>
    </div>
  );
}
