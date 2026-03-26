import { StyleLibrary } from "@/components/shell/style-library";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { styles } from "@/lib/themes";

export default function Home() {
  return (
    <main style={styles[0]?.vars} className="min-h-screen bg-[var(--theme-bg)] text-[var(--theme-text)]">
      <section className="border-b border-[var(--theme-border)] py-8 sm:py-10">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-4 rounded-[var(--theme-radius)] border border-[var(--theme-border)] bg-[var(--theme-surface)] p-5 sm:p-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--theme-muted)]">
                New showcase
              </p>
              <h1 className="mt-3 max-w-3xl text-2xl font-semibold tracking-[-0.04em] text-[var(--theme-text)] sm:text-3xl">
                Hero section references are now live.
              </h1>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-[var(--theme-muted)] sm:text-base">
                Open a curated gallery of 10 hero references mapped to style families, with direct links to
                live demos for each visual direction.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button href="/hero-references">Open hero references</Button>
              <Button href="/styles/bento-grid" variant="secondary">
                View bento demo
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <section id="library" className="py-10 sm:py-16">
        <Container>
          <StyleLibrary styles={styles} />
        </Container>
      </section>
    </main>
  );
}
