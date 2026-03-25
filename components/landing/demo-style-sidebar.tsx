"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

import { Surface } from "@/components/ui/surface";
import { familyOrder, styleFamilies, type StyleFamily } from "@/lib/style-families";

type DemoStyleNavItem = {
  slug: string;
  modeLabel: string;
  family: StyleFamily;
};

function groupStyles(styles: DemoStyleNavItem[]) {
  return familyOrder
    .map((family) => ({
      family,
      label: styleFamilies[family].label,
      styles: styles.filter((style) => style.family === family),
    }))
    .filter((group) => group.styles.length > 0);
}

function SidebarContent({
  currentSlug,
  styles,
  onNavigate,
}: {
  currentSlug: string;
  styles: DemoStyleNavItem[];
  onNavigate?: () => void;
}) {
  const groups = useMemo(() => groupStyles(styles), [styles]);
  const current = styles.find((style) => style.slug === currentSlug);

  return (
    <Surface className="overflow-hidden">
      <div className="border-b border-[var(--theme-border)] px-5 py-4">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--theme-muted)]">
          Demo navigator
        </p>
        <p className="mt-3 text-lg font-semibold tracking-[-0.03em] text-[var(--theme-text)]">
          {current?.modeLabel ?? "Browse styles"}
        </p>
        <p className="mt-2 text-sm leading-6 text-[var(--theme-muted)]">
          Switch quickly between live demo styles without returning to the library.
        </p>
      </div>

      <div className="max-h-[calc(100vh-12rem)] overflow-y-auto px-3 py-3">
        {groups.map((group) => (
          <div key={group.family} className="mb-4 last:mb-0">
            <p className="px-2 pb-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--theme-muted)]">
              {group.label}
            </p>
            <div className="space-y-1">
              {group.styles.map((style) => {
                const active = style.slug === currentSlug;

                return (
                  <Link
                    key={style.slug}
                    href={`/styles/${style.slug}`}
                    onClick={onNavigate}
                    className={[
                      "block rounded-2xl border px-3 py-3 transition",
                      active
                        ? "border-[var(--theme-accent)] bg-[var(--theme-surface-strong)] shadow-[var(--theme-shadow)]"
                        : "border-transparent bg-transparent hover:border-[var(--theme-border)] hover:bg-[var(--theme-surface-strong)]",
                    ].join(" ")}
                  >
                    <span className="block text-sm font-semibold text-[var(--theme-text)]">
                      {style.modeLabel}
                    </span>
                    <span className="mt-1 block text-xs uppercase tracking-[0.18em] text-[var(--theme-muted)]">
                      {styleFamilies[style.family].label}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </Surface>
  );
}

export function DemoStyleSidebar({
  currentSlug,
  styles,
}: {
  currentSlug: string;
  styles: DemoStyleNavItem[];
}) {
  return (
    <aside id="demo-style-sidebar" className="hidden lg:block lg:sticky lg:top-6 lg:self-start">
      <SidebarContent currentSlug={currentSlug} styles={styles} />
    </aside>
  );
}

export function DemoStyleSidebarDrawer({
  currentSlug,
  styles,
}: {
  currentSlug: string;
  styles: DemoStyleNavItem[];
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex items-center justify-center rounded-full border border-[var(--theme-border)] bg-[var(--theme-surface-strong)] px-5 py-3 text-sm font-semibold tracking-[0.02em] text-[var(--theme-text)] transition hover:-translate-y-0.5 hover:bg-[var(--theme-bg-alt)] lg:hidden"
      >
        Styles
      </button>

      {open ? (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button
            type="button"
            aria-label="Close style navigator"
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
          <div className="absolute inset-y-0 right-0 w-full max-w-sm p-3">
            <div className="flex h-full flex-col rounded-[32px] border border-[var(--theme-border)] bg-[var(--theme-bg)] shadow-[var(--theme-shadow)]">
              <div className="flex items-center justify-between border-b border-[var(--theme-border)] px-5 py-4">
                <p className="text-sm font-semibold text-[var(--theme-text)]">Switch style</p>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="rounded-full border border-[var(--theme-border)] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--theme-muted)]"
                >
                  Close
                </button>
              </div>
              <div className="min-h-0 flex-1 p-2">
                <SidebarContent
                  currentSlug={currentSlug}
                  styles={styles}
                  onNavigate={() => setOpen(false)}
                />
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
