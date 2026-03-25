import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Surface } from "@/components/ui/surface";
import { productName, sharedContent } from "@/lib/landing-content";
import type { ThemeDefinition } from "@/lib/themes";

export function EditorialLanding({ theme }: { theme: ThemeDefinition }) {
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
                <Button href="/styles/clean-saas-gradient" variant="ghost">
                  Compare clean SaaS
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
