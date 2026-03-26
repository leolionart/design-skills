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
  const hasPrompt = Boolean(theme.designPromptId);
  const intelligence = getStyleIntelligence(theme.slug);

  return (
    <div style={theme.vars}>
      <Surface className="overflow-hidden p-4 shadow-[var(--theme-shadow)] sm:p-5">
        <div className="grid gap-5 lg:grid-cols-[280px_minmax(0,1fr)_auto] lg:items-center">
          <StylePreview theme={theme} />

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
            <p className="mt-2 text-base font-semibold text-[var(--theme-text)]">{theme.pageTitle}</p>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-[var(--theme-muted)]">{theme.summary}</p>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-[var(--theme-text)]">{intelligence.thesis}</p>

            <div className="mt-5 grid gap-4 sm:grid-cols-3">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--theme-muted)]">
                  Hero
                </p>
                <p className="mt-2 text-sm text-[var(--theme-text)]">{theme.recipe.structuralSignature.hero}</p>
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--theme-muted)]">
                  Rhythm
                </p>
                <p className="mt-2 text-sm text-[var(--theme-text)]">{theme.recipe.structuralSignature.rhythm}</p>
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--theme-muted)]">
                  Proof
                </p>
                <p className="mt-2 text-sm text-[var(--theme-text)]">{theme.recipe.structuralSignature.proof}</p>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {theme.recipe.structuralTags.slice(0, 6).map((keyword) => (
                <span
                  key={keyword}
                  className="rounded-full border border-[var(--theme-border)] bg-[var(--theme-bg)] px-3 py-1.5 text-xs text-[var(--theme-muted)]"
                >
                  {keyword}
                </span>
              ))}
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {intelligence.grammar.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[var(--theme-border)] bg-[var(--theme-surface-strong)] px-3 py-1.5 text-xs text-[var(--theme-text)]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3 lg:min-w-[180px] lg:items-end">
            {hasDemo ? <Button href={`/styles/${theme.slug}`}>View demo</Button> : null}
            {theme.designPromptId ? (
              <CopyPromptButton
                promptId={theme.designPromptId}
                variant={hasDemo ? "secondary" : "primary"}
              />
            ) : null}
            <p className="max-w-[180px] text-right text-xs leading-6 text-[var(--theme-muted)]">
              {hasDemo
                ? hasPrompt
                  ? `${theme.kicker} · prompt available`
                  : theme.kicker
                : hasPrompt
                  ? `${theme.kicker} · prompt available even without a dedicated demo`
                  : `${theme.kicker} · no dedicated landing demo yet`}
            </p>
          </div>
        </div>
      </Surface>
    </div>
  );
}
