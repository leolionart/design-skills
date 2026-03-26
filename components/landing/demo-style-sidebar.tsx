"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";

import { StylePreview, type StylePreviewTheme } from "@/components/shell/style-preview";
import { Surface } from "@/components/ui/surface";
import { familyOrder, styleFamilies, type StyleFamily } from "@/lib/style-families";

type DemoStyleNavItem = StylePreviewTheme & {
  slug: string;
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
  scrollContainerRef,
}: {
  currentSlug: string;
  styles: DemoStyleNavItem[];
  onNavigate?: () => void;
  scrollContainerRef?: React.RefObject<HTMLDivElement | null>;
}) {
  const groups = useMemo(() => groupStyles(styles), [styles]);
  const current = styles.find((style) => style.slug === currentSlug);
  const activeRef = useRef<HTMLAnchorElement>(null);

  // Auto-scroll to active item on mount
  useEffect(() => {
    if (activeRef.current && scrollContainerRef?.current) {
      const container = scrollContainerRef.current;
      const activeEl = activeRef.current;
      
      // Calculate position to center the active item
      const containerRect = container.getBoundingClientRect();
      const activeRect = activeEl.getBoundingClientRect();
      const scrollTop = activeEl.offsetTop - container.offsetTop - (containerRect.height / 2) + (activeRect.height / 2);
      
      container.scrollTo({
        top: Math.max(0, scrollTop),
        behavior: "instant",
      });
    }
  }, [currentSlug, scrollContainerRef]);

  return (
    <>
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

      <div 
        ref={scrollContainerRef}
        className="flex-1 overflow-y-auto px-3 py-3"
      >
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
                    ref={active ? activeRef : undefined}
                    href={`/styles/${style.slug}`}
                    onClick={onNavigate}
                    className={[
                      "block rounded-2xl border p-2 transition",
                      active
                        ? "border-[var(--theme-accent)] bg-[var(--theme-surface-strong)] shadow-[var(--theme-shadow)]"
                        : "border-transparent bg-transparent hover:border-[var(--theme-border)] hover:bg-[var(--theme-surface-strong)]",
                    ].join(" ")}
                  >
                    <span className="flex items-center gap-3">
                      <span className="h-11 w-14 shrink-0">
                        <StylePreview theme={style} compact className="rounded-[12px]" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block truncate text-sm font-semibold text-[var(--theme-text)]">
                          {style.modeLabel}
                        </span>
                        <span className="mt-1 block truncate text-xs uppercase tracking-[0.18em] text-[var(--theme-muted)]">
                          {styleFamilies[style.family].label}
                        </span>
                      </span>
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export function DemoStyleSidebar({
  currentSlug,
  styles,
}: {
  currentSlug: string;
  styles: DemoStyleNavItem[];
}) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  return (
    <aside 
      id="demo-style-sidebar" 
      className="fixed left-0 top-0 z-40 hidden h-screen w-[280px] border-r border-[var(--theme-border)] bg-[var(--theme-bg)] lg:flex lg:flex-col"
    >
      <Surface className="flex h-full flex-col overflow-hidden rounded-none border-0">
        <SidebarContent 
          currentSlug={currentSlug} 
          styles={styles} 
          scrollContainerRef={scrollContainerRef}
        />
      </Surface>
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
  const scrollContainerRef = useRef<HTMLDivElement>(null);

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
              <div className="flex min-h-0 flex-1 flex-col p-2">
                <Surface className="flex flex-1 flex-col overflow-hidden">
                  <SidebarContent
                    currentSlug={currentSlug}
                    styles={styles}
                    onNavigate={() => setOpen(false)}
                    scrollContainerRef={scrollContainerRef}
                  />
                </Surface>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
