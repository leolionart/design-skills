import type { CSSProperties } from "react";

import { StyleLibrary } from "@/components/shell/style-library";
import { Container } from "@/components/ui/container";
import { styles } from "@/lib/themes";

const libraryVars: CSSProperties & Record<`--${string}`, string> = {
  "--theme-bg": "hsl(34 38% 96%)",
  "--theme-bg-alt": "hsl(34 28% 92%)",
  "--theme-surface": "hsl(0 0% 100% / 0.88)",
  "--theme-surface-strong": "hsl(0 0% 100%)",
  "--theme-text": "hsl(22 24% 13%)",
  "--theme-muted": "hsl(22 12% 38%)",
  "--theme-border": "hsl(22 22% 20% / 0.14)",
  "--theme-accent": "hsl(24 52% 34%)",
  "--theme-accent-2": "hsl(212 42% 40%)",
  "--theme-accent-contrast": "hsl(36 52% 95%)",
  "--theme-ring": "hsl(24 48% 34% / 0.28)",
  "--theme-shadow": "0 16px 34px rgba(31, 23, 18, 0.08)",
  "--theme-grid": "hsl(22 18% 20% / 0.06)",
  "--theme-font-body": "var(--font-manrope), system-ui, sans-serif",
  "--theme-font-display": "var(--font-manrope), system-ui, sans-serif",
  "--theme-font-serif": "var(--font-editorial), Georgia, serif",
  "--theme-font-mono": "var(--font-ibm-plex-mono), ui-monospace, monospace",
  "--theme-radius": "22px",
  "--theme-button-radius": "8px",
  "--theme-button-border-width": "1px",
  "--theme-button-border-style": "solid",
  "--theme-button-letter-spacing": "0.01em",
  "--theme-button-text-transform": "none",
  "--theme-button-font": "var(--font-manrope), system-ui, sans-serif",
  "--theme-button-font-weight": "600",
  "--theme-button-shadow": "0 8px 18px rgba(31, 23, 18, 0.1)",
  "--theme-button-shadow-secondary": "none",
  "--theme-shape-radius": "14px",
  "--theme-shape-outline-width": "1px",
  "--theme-shape-outline-style": "solid",
};

export default function Home() {
  return (
    <main style={libraryVars} className="min-h-screen bg-[var(--theme-bg)] text-[var(--theme-text)]">
      <section id="library" className="py-10 sm:py-16">
        <Container>
          <StyleLibrary styles={styles} />
        </Container>
      </section>
    </main>
  );
}
