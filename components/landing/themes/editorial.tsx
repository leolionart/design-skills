import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Surface } from "@/components/ui/surface";
import { productName, sharedContent } from "@/lib/landing-content";
import type { ThemeDefinition } from "@/lib/themes";

// 1. Minimalist Variant (Original, Asymmetric)
function MinimalistVariant({ theme }: { theme: ThemeDefinition }) {
  return (
    <>
      <section className="py-10 sm:py-16">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="space-y-6 lg:pt-12">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--theme-muted)]">
                {theme.kicker}
              </p>
              <div className="h-px w-24 bg-[var(--theme-border)]" />
              <p className="max-w-sm text-sm leading-7 text-[var(--theme-muted)]">
                {sharedContent.intro}
              </p>
            </div>
            <div>
              <h1 className="max-w-4xl font-[family-name:var(--theme-font-display)] text-5xl leading-[0.94] tracking-[-0.05em] text-[var(--theme-text)] sm:text-7xl lg:text-[6rem]">
                A calmer landing page can still feel deeply intentional.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--theme-muted)]">
                {productName} becomes an editorial statement here: restrained, spacious and built to let typography carry the emotional weight.
              </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button href="/" variant="secondary">
                    Return to gallery
                  </Button>
                  <Button href="/styles/swiss-minimalist" variant="ghost">
                    Compare swiss
                  </Button>
                </div>
              </div>
          </div>
        </Container>
      </section>

      <section className="py-8 sm:py-12">
        <Container className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
          <SectionHeading
            eyebrow="Reading rhythm"
            title="This version behaves more like a manifesto than a product deck."
            description="The wider section spacing, finer chrome, and restrained pacing make the whole page feel closer to reading than to component demoing."
          />
          <div className="grid gap-6 border-t border-[var(--theme-border)] pt-8 sm:grid-cols-2">
            {sharedContent.features.map((feature) => (
              <article key={feature.title} className="space-y-4 border-b border-[var(--theme-border)] pb-6">
                <p className="text-xs uppercase tracking-[0.26em] text-[var(--theme-muted)]">
                  editorial note
                </p>
                <h3 className="font-[family-name:var(--theme-font-display)] text-3xl leading-tight tracking-[-0.04em] text-[var(--theme-text)]">
                  {feature.title}
                </h3>
                <p className="text-base leading-8 text-[var(--theme-muted)]">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>
      
      {/* Quote section shared or specific if needed */}
       <section className="py-8 sm:py-14">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
            <blockquote className="max-w-4xl font-[family-name:var(--theme-font-display)] text-4xl leading-tight tracking-[-0.04em] text-[var(--theme-text)] sm:text-6xl">
              “{sharedContent.quotes[1]}”
            </blockquote>
            <Surface className="p-6">
              <p className="text-xs uppercase tracking-[0.26em] text-[var(--theme-muted)]">
                Direction summary
              </p>
              <dl className="mt-6 space-y-5 text-sm leading-7">
                <div>
                  <dt className="font-semibold text-[var(--theme-text)]">Primary language</dt>
                  <dd className="text-[var(--theme-muted)]">{theme.primaryLanguage}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-[var(--theme-text)]">Imagery mode</dt>
                  <dd className="text-[var(--theme-muted)]">{theme.imageryMode}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-[var(--theme-text)]">Audience</dt>
                  <dd className="text-[var(--theme-muted)]">{theme.audience}</dd>
                </div>
              </dl>
            </Surface>
          </div>
        </Container>
      </section>
    </>
  );
}

// 2. Monochrome Variant (Centered, Bold, High Contrast)
function MonochromeVariant({ theme }: { theme: ThemeDefinition }) {
  return (
    <>
      <section className="py-16 sm:py-24 border-b border-[var(--theme-border)]">
        <Container className="text-center flex flex-col items-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--theme-text)] border border-[var(--theme-text)] px-4 py-2 inline-block mb-8">
            {theme.kicker}
          </p>
          <h1 className="max-w-5xl font-[family-name:var(--theme-font-display)] text-6xl leading-[0.9] tracking-[-0.04em] text-[var(--theme-text)] sm:text-8xl lg:text-[7rem] uppercase">
            Luxury in <br/><span className="italic normal-case font-serif tracking-normal">Silence</span>
          </h1>
          <p className="mt-8 max-w-2xl text-xl leading-relaxed text-[var(--theme-muted)]">
            {productName} stripped to its essence. No color, no noise—just pure signal and structure.
          </p>
           <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button href="/" className="bg-[var(--theme-text)] text-[var(--theme-bg)] hover:bg-[var(--theme-muted)] rounded-none px-8">
              View Collection
            </Button>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24 border-b border-[var(--theme-border)]">
        <Container>
          <div className="grid gap-12 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[var(--theme-border)] border-[var(--theme-border)] border-t sm:border-t-0">
            {sharedContent.features.slice(0, 3).map((feature, i) => (
              <div key={feature.title} className={`pt-8 sm:pt-0 ${i > 0 ? 'sm:pl-8' : ''} ${i < 2 ? 'pb-8 sm:pb-0' : ''}`}>
                <p className="text-4xl font-[family-name:var(--theme-font-display)] text-[var(--theme-text)] mb-4">0{i+1}</p>
                <h3 className="text-lg font-bold uppercase tracking-widest text-[var(--theme-text)] mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm leading-7 text-[var(--theme-muted)]">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-32 bg-[var(--theme-text)] text-[var(--theme-bg)]">
         <Container className="text-center">
            <blockquote className="font-[family-name:var(--theme-font-display)] text-3xl sm:text-5xl leading-tight tracking-tight">
              “{sharedContent.quotes[0]}”
            </blockquote>
            <p className="mt-8 text-xs uppercase tracking-[0.2em] opacity-60">
              The Philosophy of Less
            </p>
         </Container>
      </section>
    </>
  );
}

// 3. Academia Variant (Bookish, Serif, Ornamental)
function AcademiaVariant({ theme }: { theme: ThemeDefinition }) {
  return (
    <>
      <section className="py-12 sm:py-20 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')]">
        <Container className="max-w-4xl border-x border-double border-[var(--theme-border)] px-8 sm:px-16 py-12 min-h-[80vh] flex flex-col bg-[var(--theme-bg)] relative">
          {/* Decorative corners */}
          <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-[var(--theme-text)] opacity-30"/>
          <div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-[var(--theme-text)] opacity-30"/>
          <div className="absolute bottom-4 left-4 w-4 h-4 border-b border-l border-[var(--theme-text)] opacity-30"/>
          <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-[var(--theme-text)] opacity-30"/>

          <div className="text-center mb-16 pt-8">
            <p className="font-serif italic text-[var(--theme-muted)] mb-4 text-lg">Est. 2024</p>
            <h1 className="font-[family-name:var(--theme-font-display)] text-5xl sm:text-7xl text-[var(--theme-text)] leading-none mb-6">
              The {productName} <br/>Compendium
            </h1>
            <div className="w-16 h-1 bg-[var(--theme-text)] mx-auto mb-6"/>
            <p className="text-xl font-serif text-[var(--theme-muted)] max-w-lg mx-auto leading-relaxed">
              An archival approach to interface design, prioritizing reading clarity, historical weight, and institutional trust.
            </p>
          </div>

          <div className="flex justify-center gap-6 mb-16 font-serif">
             <a href="/" className="underline underline-offset-4 decoration-[var(--theme-muted)] hover:text-[var(--theme-accent)] transition-colors">Index</a>
             <span className="text-[var(--theme-muted)]">•</span>
             <a href="/styles/swiss-minimalist" className="underline underline-offset-4 decoration-[var(--theme-muted)] hover:text-[var(--theme-accent)] transition-colors">Compare</a>
           </div>

          <div className="space-y-12">
            <h2 className="text-center font-[family-name:var(--theme-font-display)] text-2xl uppercase tracking-widest border-b border-[var(--theme-border)] pb-4 mb-8">
              Table of Contents
            </h2>
            
            {sharedContent.features.map((feature, i) => (
              <div key={feature.title} className="flex gap-4 items-baseline group cursor-default">
                <span className="font-[family-name:var(--theme-font-display)] text-[var(--theme-muted)] text-xl w-8">
                  {['I', 'II', 'III', 'IV'][i] || i+1}.
                </span>
                <div className="flex-1">
                  <div className="flex items-baseline justify-between border-b border-dotted border-[var(--theme-border)] pb-1 mb-2">
                    <h3 className="font-serif text-xl font-semibold text-[var(--theme-text)]">
                      {feature.title}
                    </h3>
                    <span className="text-sm text-[var(--theme-muted)] font-serif italic">p. {10 + i*4}</span>
                  </div>
                  <p className="font-serif text-[var(--theme-muted)] text-sm leading-relaxed max-w-xl">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-auto pt-16 text-center">
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--theme-muted)]">
              Volume 1 • Edition 1
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}

export function EditorialLanding({ theme }: { theme: ThemeDefinition }) {
  if (theme.slug === "premium-monochrome") {
    return <MonochromeVariant theme={theme} />;
  }
  
  if (theme.slug === "academia") {
    return <AcademiaVariant theme={theme} />;
  }

  // Default to Minimalist
  return <MinimalistVariant theme={theme} />;
}
