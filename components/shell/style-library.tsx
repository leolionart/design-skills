"use client";

import { useMemo, useState } from "react";

import { ThemeSwitcherCard } from "@/components/shell/theme-switcher-card";
import { Surface } from "@/components/ui/surface";
import { familyOrder, styleFamilies } from "@/lib/style-families";
import { getStyleIntelligence } from "@/lib/style-intelligence";
import type { ThemeDefinition } from "@/lib/themes";

function normalize(value: string) {
  return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

function getSearchableText(style: ThemeDefinition) {
  const intelligence = getStyleIntelligence(style.slug);

  return normalize(
    [
      style.slug,
      style.modeLabel,
      style.pageTitle,
      style.kicker,
      style.summary,
      style.audience,
      style.primaryLanguage,
      style.imageryMode,
      style.family,
      ...style.supportingTreatments,
      ...style.avoidList,
      ...style.previewBullets,
      ...style.keywords,
      intelligence.thesis,
      ...intelligence.grammar,
      ...intelligence.compare.map((item) => item.reason),
    ].join(" "),
  );
}

const quickKeywords = [
  "glass",
  "editorial",
  "bento",
  "dark",
  "3d",
  "saas",
  "typography",
  "motion",
  "cyberpunk",
  "terminal",
  "vaporwave",
  "art deco",
];

export function StyleLibrary({ styles }: { styles: ThemeDefinition[] }) {
  const [query, setQuery] = useState("");
  const normalizedQuery = normalize(query.trim());

  const filteredStyles = useMemo(() => {
    if (!normalizedQuery) {
      return styles;
    }

    return styles.filter((style) => getSearchableText(style).includes(normalizedQuery));
  }, [styles, normalizedQuery]);

  const groupedStyles = useMemo(
    () =>
      familyOrder
        .map((family) => ({
          family,
          styles: filteredStyles.filter((style) => style.family === family),
        }))
        .filter((group) => group.styles.length > 0),
    [filteredStyles],
  );

  return (
    <div className="grid gap-8 lg:grid-cols-[320px_minmax(0,1fr)]">
      <aside className="lg:sticky lg:top-6 lg:self-start">
        <Surface className="p-5 sm:p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--theme-muted)]">
            Search the library
          </p>
          <label htmlFor="style-search" className="mt-5 block text-sm font-semibold text-[var(--theme-text)]">
            Search by keyword, family, mood, or use case
          </label>
          <input
            id="style-search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Try: glass, luxury, saas, dark, 3d..."
            className="mt-3 w-full rounded-2xl border border-[var(--theme-border)] bg-[var(--theme-surface-strong)] px-4 py-3 text-sm text-[var(--theme-text)] outline-none transition focus:border-[var(--theme-accent)] focus:ring-2 focus:ring-[var(--theme-ring)]"
          />

          <div className="mt-4 flex flex-wrap gap-2">
            {quickKeywords.map((keyword) => (
              <button
                key={keyword}
                type="button"
                onClick={() => setQuery(keyword)}
                className="rounded-full border border-[var(--theme-border)] bg-[var(--theme-bg)] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--theme-muted)] transition hover:border-[var(--theme-accent)] hover:text-[var(--theme-text)]"
              >
                {keyword}
              </button>
            ))}
            {query ? (
              <button
                type="button"
                onClick={() => setQuery("")}
                className="rounded-full border border-[var(--theme-border)] bg-[var(--theme-surface-strong)] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--theme-text)]"
              >
                Clear
              </button>
            ) : null}
          </div>

          <div className="mt-6 rounded-[24px] border border-[var(--theme-border)] bg-[var(--theme-bg)] p-4">
            <p className="text-xs uppercase tracking-[0.22em] text-[var(--theme-muted)]">Results</p>
            <p className="mt-2 text-3xl font-semibold tracking-[-0.05em] text-[var(--theme-text)]">
              {filteredStyles.length}
            </p>
            <p className="mt-2 text-sm leading-6 text-[var(--theme-muted)]">
              {normalizedQuery
                ? `Matching keyword “${query}”.`
                : "Showing the full style library."}
            </p>
          </div>

          <nav className="mt-6 space-y-2">
            {familyOrder.map((family) => {
              const count = filteredStyles.filter((style) => style.family === family).length;
              const meta = styleFamilies[family];

              return (
                <a
                  key={family}
                  href={`#family-${family}`}
                  className="flex items-center justify-between rounded-[20px] border border-[var(--theme-border)] bg-[var(--theme-surface)] px-4 py-3 transition hover:border-[var(--theme-accent)]"
                >
                  <span>
                    <span className="block text-sm font-semibold text-[var(--theme-text)]">{meta.label}</span>
                    <span className="mt-1 block text-xs text-[var(--theme-muted)]">{meta.description}</span>
                  </span>
                  <span className="ml-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--theme-muted)]">
                    {count}
                  </span>
                </a>
              );
            })}
          </nav>
        </Surface>
      </aside>

      <div className="space-y-10">
        {groupedStyles.length === 0 ? (
          <Surface className="p-8 sm:p-10">
            <p className="text-xs uppercase tracking-[0.24em] text-[var(--theme-muted)]">No match</p>
            <h3 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-[var(--theme-text)]">
              No matching style found.
            </h3>
            <p className="mt-4 max-w-2xl text-base leading-7 text-[var(--theme-muted)]">
              Try keywords like glass, bento, luxury, motion, editorial, or 3d to widen the results.
            </p>
          </Surface>
        ) : (
          groupedStyles.map((group) => {
            const family = styleFamilies[group.family];

            return (
              <section key={group.family} id={`family-${group.family}`} className="scroll-mt-6">
                <div className="mb-5 flex flex-wrap items-end justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--theme-muted)]">
                      {family.label}
                    </p>
                    <h3 className="mt-2 text-3xl font-semibold tracking-[-0.05em] text-[var(--theme-text)]">
                      {group.styles.length} styles in this family
                    </h3>
                    <p className="mt-3 max-w-3xl text-sm leading-7 text-[var(--theme-muted)]">
                      {family.description}
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  {group.styles.map((style) => (
                    <ThemeSwitcherCard key={style.slug} theme={style} />
                  ))}
                </div>
              </section>
            );
          })
        )}
      </div>
    </div>
  );
}
