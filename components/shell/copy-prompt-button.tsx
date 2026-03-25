"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

type CopyPromptButtonProps = {
  promptId: string;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

type PromptResponse = {
  id: string;
  name: string;
  description: string;
  mode: "light" | "dark";
  fontType: "sans-serif" | "serif" | "mono";
  content: string;
  fullPrompt: string;
  sourceUrl: string;
};

const lightReaderTone = {
  shellBg: "#f6f1e8",
  shellText: "#181412",
  shellMuted: "#645a52",
  shellBorder: "rgba(24, 20, 18, 0.14)",
  panelBg: "#fffdf8",
  codeBg: "#efe7da",
};

const darkReaderTone = {
  shellBg: "#0f131a",
  shellText: "#f4f7fb",
  shellMuted: "#aab4c3",
  shellBorder: "rgba(244, 247, 251, 0.12)",
  panelBg: "#171c25",
  codeBg: "#0b0f15",
};

const variantClasses: Record<NonNullable<CopyPromptButtonProps["variant"]>, string> = {
  primary:
    "bg-[var(--theme-accent)] text-[var(--theme-accent-contrast)] shadow-[var(--theme-shadow)] hover:-translate-y-0.5 hover:opacity-95",
  secondary:
    "border border-[var(--theme-border)] bg-[var(--theme-surface-strong)] text-[var(--theme-text)] hover:-translate-y-0.5 hover:bg-[var(--theme-bg-alt)]",
  ghost:
    "border border-transparent bg-transparent text-[var(--theme-text)] hover:border-[var(--theme-border)] hover:bg-[var(--theme-surface)]",
};

async function copyToClipboard(value: string) {
  try {
    await navigator.clipboard.writeText(value);
    return true;
  } catch {
    const textarea = document.createElement("textarea");
    textarea.value = value;
    textarea.setAttribute("readonly", "true");
    textarea.style.position = "absolute";
    textarea.style.left = "-9999px";
    document.body.appendChild(textarea);
    textarea.select();

    const copied = document.execCommand("copy");
    document.body.removeChild(textarea);

    return copied;
  }
}

export function CopyPromptButton({
  promptId,
  variant = "secondary",
  className = "",
}: CopyPromptButtonProps) {
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [prompt, setPrompt] = useState<PromptResponse | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function handleKeydown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    window.addEventListener("keydown", handleKeydown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeydown);
    };
  }, [open]);

  async function handleOpen() {
    setOpen(true);

    if (prompt || loading) {
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`/api/design-prompts/${promptId}`);

      if (!response.ok) {
        throw new Error(`Failed to fetch prompt: ${response.status}`);
      }

      const payload = (await response.json()) as PromptResponse;
      setPrompt(payload);
    } catch {
      setError("Prompt unavailable right now.");
    } finally {
      setLoading(false);
    }
  }

  async function handleCopy() {
    if (!prompt) {
      return;
    }

    const didCopy = await copyToClipboard(prompt.fullPrompt);

    if (!didCopy) {
      setError("Clipboard copy failed.");
      return;
    }

    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  }

  const readerTone = prompt?.mode === "dark" ? darkReaderTone : lightReaderTone;

  return (
    <>
      <button
        type="button"
        onClick={handleOpen}
        className={[
          "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold tracking-[0.02em] transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--theme-ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--theme-bg)] disabled:cursor-wait disabled:opacity-70",
          variantClasses[variant],
          className,
        ].join(" ")}
        disabled={loading}
        aria-live="polite"
      >
        {loading ? "Loading prompt..." : "View prompt"}
      </button>

      {mounted && open
        ? createPortal(
            <div className="fixed inset-0 z-[120] p-4 sm:p-6">
              <button
                type="button"
                aria-label="Close prompt dialog"
                className="absolute inset-0 bg-black/55 backdrop-blur-sm"
                onClick={() => setOpen(false)}
              />

              <div className="relative mx-auto flex h-full w-full max-w-5xl items-center justify-center">
                <div
                  className="flex max-h-[88vh] w-full flex-col overflow-hidden rounded-[32px] shadow-[var(--theme-shadow)]"
                  style={{
                    backgroundColor: readerTone.shellBg,
                    color: readerTone.shellText,
                    border: `1px solid ${readerTone.shellBorder}`,
                  }}
                >
                  <div
                    className="flex items-start justify-between gap-4 px-6 py-5"
                    style={{ borderBottom: `1px solid ${readerTone.shellBorder}` }}
                  >
                    <div>
                      <p
                        className="text-xs font-semibold uppercase tracking-[0.24em]"
                        style={{ color: readerTone.shellMuted }}
                      >
                        Prompt preview
                      </p>
                      <h3
                        className="mt-3 text-2xl font-semibold tracking-[-0.04em]"
                        style={{ color: readerTone.shellText }}
                      >
                        {prompt?.name ?? "Loading prompt"}
                      </h3>
                      <p
                        className="mt-2 max-w-3xl text-sm leading-6"
                        style={{ color: readerTone.shellMuted }}
                      >
                        {prompt?.description ??
                          (error ? error : "Fetching the prompt from the linked design catalog.")}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setOpen(false)}
                      className="rounded-full px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] transition hover:border-[var(--theme-accent)]"
                      style={{
                        color: readerTone.shellMuted,
                        border: `1px solid ${readerTone.shellBorder}`,
                      }}
                    >
                      Close
                    </button>
                  </div>

                  <div className="min-h-0 flex-1 overflow-y-auto px-6 py-5">
                    {prompt ? (
                      <div className="space-y-4">
                        <div className="flex flex-wrap gap-2">
                          <span
                            className="rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em]"
                            style={{
                              color: readerTone.shellText,
                              backgroundColor: readerTone.panelBg,
                              border: `1px solid ${readerTone.shellBorder}`,
                            }}
                          >
                            {prompt.mode} mode
                          </span>
                          <span
                            className="rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em]"
                            style={{
                              color: readerTone.shellText,
                              backgroundColor: readerTone.panelBg,
                              border: `1px solid ${readerTone.shellBorder}`,
                            }}
                          >
                            {prompt.fontType}
                          </span>
                        </div>

                        <div
                          className="overflow-hidden rounded-[24px]"
                          style={{
                            backgroundColor: readerTone.panelBg,
                            border: `1px solid ${readerTone.shellBorder}`,
                          }}
                        >
                          <div
                            className="px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em]"
                            style={{
                              color: readerTone.shellMuted,
                              borderBottom: `1px solid ${readerTone.shellBorder}`,
                            }}
                          >
                            Full prompt
                          </div>
                          <pre
                            className="max-h-[52vh] overflow-auto px-4 py-4 text-xs leading-6 whitespace-pre-wrap"
                            style={{
                              color: readerTone.shellText,
                              backgroundColor: readerTone.codeBg,
                            }}
                          >
                            {prompt.fullPrompt}
                          </pre>
                        </div>
                      </div>
                    ) : (
                      <div
                        className="rounded-[24px] px-5 py-6 text-sm leading-6"
                        style={{
                          color: readerTone.shellMuted,
                          backgroundColor: readerTone.panelBg,
                          border: `1px solid ${readerTone.shellBorder}`,
                        }}
                      >
                        {error ?? "Loading prompt..."}
                      </div>
                    )}
                  </div>

                  <div
                    className="flex flex-wrap items-center justify-between gap-3 px-6 py-4"
                    style={{ borderTop: `1px solid ${readerTone.shellBorder}` }}
                  >
                    <p className="text-xs leading-5" style={{ color: readerTone.shellMuted }}>
                      {copied
                        ? "Prompt copied to clipboard."
                        : prompt
                          ? "Review the prompt here, then copy the full prompt when ready."
                          : "Prompt preview will appear here as soon as it loads."}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {prompt?.sourceUrl ? (
                        <a
                          href={prompt.sourceUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold transition"
                          style={{
                            color: readerTone.shellText,
                            backgroundColor: readerTone.panelBg,
                            border: `1px solid ${readerTone.shellBorder}`,
                          }}
                        >
                          Source bundle
                        </a>
                      ) : null}
                      <button
                        type="button"
                        onClick={handleCopy}
                        disabled={!prompt}
                        className="inline-flex items-center justify-center rounded-full bg-[var(--theme-accent)] px-5 py-2.5 text-sm font-semibold text-[var(--theme-accent-contrast)] shadow-[var(--theme-shadow)] transition hover:-translate-y-0.5 hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-60"
                      >
                        {copied ? "Copied" : "Copy prompt"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>,
            document.body,
          )
        : null}
    </>
  );
}
