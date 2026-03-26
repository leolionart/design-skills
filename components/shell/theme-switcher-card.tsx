import { CopyPromptButton } from "@/components/shell/copy-prompt-button";
import { StylePreview } from "@/components/shell/style-preview";
import { Button } from "@/components/ui/button";
import { Surface } from "@/components/ui/surface";
import { styleFamilies } from "@/lib/style-families";
import { getStyleIntelligence } from "@/lib/style-intelligence";
import type { ThemeDefinition } from "@/lib/themes";

export function ThemeSwitcherCard({ theme }: { theme: ThemeDefinition }) {
  const family = styleFamilies[theme.family];
  const hasDemo = theme.demoAvailable !== false;
  const conciseAudience = theme.audience.split(",")[0]?.trim() || theme.audience;

  return (
    <Surface className="overflow-hidden p-4 shadow-[var(--theme-shadow)] sm:p-5">
      <div className="grid gap-5 lg:grid-cols-[280px_minmax(0,1fr)] lg:items-start">
        <div>
          <StylePreview theme={theme} useThemeVars={false} />
          <div className="mt-3 flex flex-wrap gap-2">
            {hasDemo ? <Button href={`/styles/${theme.slug}`}>View demo</Button> : null}
            {theme.designPromptId ? (
              <CopyPromptButton
                promptId={theme.designPromptId}
                variant={hasDemo ? "secondary" : "primary"}
              />
            ) : null}
          </div>
        </div>

        <div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full border border-[var(--theme-border)] bg-[var(--theme-bg)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--theme-muted)]">
              {family.label}
            </span>
            <span className="rounded-full border border-[var(--theme-border)] bg-[var(--theme-surface-strong)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--theme-text)]">
              {hasDemo ? "Live demo" : "Illustrated only"}
            </span>
            <span className="rounded-full border border-[var(--theme-border)] bg-[var(--theme-surface)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--theme-muted)]">
              {theme.recipe.previewSilhouette.replace(/-/g, " ")}
            </span>
          </div>

          <h3 className="mt-4 font-[family-name:var(--theme-font-display)] text-3xl leading-tight tracking-[-0.04em] text-[var(--theme-text)]">
            {theme.modeLabel}
          </h3>
          <p className="mt-2 max-w-3xl text-base leading-7 text-[var(--theme-muted)]">{theme.pageTitle}</p>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--theme-muted)]">
                Structural grammar
              </p>
              <p className="mt-2 text-sm text-[var(--theme-text)]">
                {theme.recipe.structuralSignature.hero} · {theme.recipe.structuralSignature.rhythm}
              </p>
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--theme-muted)]">
                Audience fit
              </p>
              <p className="mt-2 text-sm text-[var(--theme-text)]">{conciseAudience}</p>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {theme.previewBullets.slice(0, 3).map((bullet) => (
              <span
                key={bullet}
                className="rounded-full border border-[var(--theme-border)] bg-[var(--theme-bg)] px-3 py-1.5 text-xs text-[var(--theme-muted)]"
              >
                {bullet}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Surface>
  );
}
