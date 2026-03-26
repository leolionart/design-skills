import { StyleHeroVisual } from "@/components/landing/style-image";
import {
  getCompareLabel,
  getHeroStatement,
  getQuoteLabel,
  getSiblingStyle,
} from "@/components/landing/theme-recipe-copy";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Surface } from "@/components/ui/surface";
import { productName, sharedContent } from "@/lib/landing-content";
import { getStyleImagery } from "@/lib/style-imagery";
import type { ThemeDefinition } from "@/lib/themes";

const pricingPlans = [
  {
    name: "Starter",
    price: "$29",
    cadence: "/month",
    items: ["1 brand workspace", "Core style presets", "Email support"],
  },
  {
    name: "Growth",
    price: "$99",
    cadence: "/month",
    items: ["Unlimited style demos", "Prompt + export workflow", "Priority support"],
    featured: true,
  },
  {
    name: "Scale",
    price: "Custom",
    cadence: "",
    items: ["Enterprise governance", "Design system integration", "Dedicated success manager"],
  },
];

const blogPosts = [
  {
    title: "How to compare styles without losing product clarity",
    tag: "Design operations",
  },
  {
    title: "When to choose editorial vs grid-product landing architecture",
    tag: "Style strategy",
  },
  {
    title: "Building a reusable style demo system for launch teams",
    tag: "Implementation",
  },
];

const faqs = [
  {
    q: "Can I keep the same copy across all styles?",
    a: "Yes. This demo intentionally keeps messaging stable so visual language differences are easier to evaluate.",
  },
  {
    q: "Do all styles use the same section sequence?",
    a: "Yes. The structure is fixed so comparisons focus on hierarchy, typography, surfaces, and motion personality.",
  },
  {
    q: "Can these demos be production-ready pages?",
    a: "They are designed as high-fidelity references. Production rollout should tune content depth, accessibility, and analytics.",
  },
  {
    q: "Can I switch style family without rebuilding the page?",
    a: "Yes. The same page structure can be restyled through family tokens and component treatment changes.",
  },
];

export function StandardLanding({ theme }: { theme: ThemeDefinition }) {
  const imagery = getStyleImagery(theme.slug);
  const heroStatement = getHeroStatement(theme);
  const siblingStyle = getSiblingStyle(theme);
  const compareLabel = getCompareLabel(theme);
  const quoteLabel = getQuoteLabel(theme);
  const isBackgroundHero = theme.family === "immersive-premium" || theme.family === "experimental-loud";
  const isEditorialHero = theme.family === "editorial-typography";
  const heroVisualVariant =
    theme.family === "immersive-premium"
      ? "spotlight"
      : theme.family === "tactile-organic"
        ? "ambient"
        : theme.family === "experimental-loud"
          ? "material"
          : "default";

  return (
    <>
      <section className="relative overflow-hidden py-8 sm:py-12">
        <Container>
          {isBackgroundHero ? (
            <Surface className="group relative isolate overflow-hidden p-8 shadow-[var(--theme-shadow)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_36px_90px_color-mix(in_srgb,var(--theme-accent)_28%,transparent)] sm:p-12 lg:p-14">
              <StyleHeroVisual
                imagery={imagery}
                variant={heroVisualVariant}
                className="absolute inset-0 -z-10 !aspect-auto h-full w-full rounded-none transition duration-700 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 -z-10 bg-[linear-gradient(120deg,rgba(15,12,10,0.58),rgba(15,12,10,0.22)_55%,rgba(15,12,10,0.68))]" />
              <div className="max-w-4xl transition duration-500 group-hover:translate-y-[-2px]">
                <p className="text-xs font-semibold uppercase tracking-[0.26em] text-white/80">{theme.kicker}</p>
                <h1 className="mt-5 font-[family-name:var(--theme-font-display)] text-5xl leading-[0.9] tracking-[-0.06em] text-white sm:text-7xl">
                  {heroStatement}
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-white/85">{theme.summary}</p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button href="/">Back to style library</Button>
                  {siblingStyle && compareLabel ? (
                    <Button href={`/styles/${siblingStyle.slug}`} variant="secondary">
                      {compareLabel}
                    </Button>
                  ) : null}
                </div>
              </div>
            </Surface>
          ) : isEditorialHero ? (
            <Surface className="group relative isolate overflow-hidden p-8 shadow-[var(--theme-shadow)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_36px_90px_color-mix(in_srgb,var(--theme-accent)_24%,transparent)] sm:p-12 lg:p-14">
              <StyleHeroVisual
                imagery={imagery}
                variant={heroVisualVariant}
                className="absolute inset-0 -z-10 !aspect-auto h-full w-full rounded-none transition duration-700 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 -z-10 bg-[linear-gradient(108deg,rgba(245,239,230,0.95),rgba(245,239,230,0.84)_58%,rgba(245,239,230,0.62))]" />
              <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
                <div className="max-w-4xl">
                  <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[var(--theme-muted)]">{theme.kicker}</p>
                  <h1 className="mt-5 font-[family-name:var(--theme-font-display)] text-5xl leading-[0.9] tracking-[-0.06em] text-[var(--theme-text)] sm:text-7xl">
                    {heroStatement}
                  </h1>
                  <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--theme-muted)]">{theme.summary}</p>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <Button href="/">Back to style library</Button>
                    {siblingStyle && compareLabel ? (
                      <Button href={`/styles/${siblingStyle.slug}`} variant="secondary">
                        {compareLabel}
                      </Button>
                    ) : null}
                  </div>
                </div>
                <Surface className="max-w-xs p-5 transition duration-500 hover:-translate-y-1 hover:border-[color:var(--theme-accent)]">
                  <p className="text-xs uppercase tracking-[0.22em] text-[var(--theme-muted)]">Style language</p>
                  <p className="mt-3 text-lg font-semibold text-[var(--theme-text)]">{theme.primaryLanguage}</p>
                </Surface>
              </div>
            </Surface>
          ) : (
            <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[var(--theme-muted)]">{theme.kicker}</p>
                <h1 className="mt-5 max-w-4xl font-[family-name:var(--theme-font-display)] text-5xl leading-[0.92] tracking-[-0.06em] text-[var(--theme-text)] sm:text-7xl">
                  {heroStatement}
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--theme-muted)]">{theme.summary}</p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button href="/">Back to style library</Button>
                  {siblingStyle && compareLabel ? (
                    <Button href={`/styles/${siblingStyle.slug}`} variant="secondary">
                      {compareLabel}
                    </Button>
                  ) : null}
                </div>
              </div>
              <StyleHeroVisual
                imagery={imagery}
                variant={heroVisualVariant}
                className="shadow-[var(--theme-shadow)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_28px_72px_color-mix(in_srgb,var(--theme-accent)_24%,transparent)]"
              />
            </div>
          )}
        </Container>
      </section>

      <section className="py-10 sm:py-14">
        <Container>
          <SectionHeading
            eyebrow="Services"
            title="A consistent service block to compare each style's visual language."
            description="Same content, different treatment. This is where hierarchy, spacing, and surface behavior become easy to contrast."
          />
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {sharedContent.features.map((feature) => (
              <Surface className="group p-6 shadow-[var(--theme-shadow)] transition duration-300 hover:-translate-y-1 hover:border-[color:var(--theme-accent)] hover:shadow-[0_24px_58px_color-mix(in_srgb,var(--theme-accent)_22%,transparent)]" key={feature.title}>
                <h3 className="text-2xl font-semibold tracking-[-0.03em] text-[var(--theme-text)]">{feature.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[var(--theme-muted)] transition duration-300 group-hover:text-[var(--theme-text)]">
                  {feature.description}
                </p>
              </Surface>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-10 sm:py-14">
        <Container>
          <SectionHeading
            eyebrow="Pricing"
            title="Standard package grid for conversion flow comparison."
            description="Every style uses the same 3-tier pricing model so CTA emphasis and card personality are clearly visible."
          />
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {pricingPlans.map((plan) => (
              <Surface
                key={plan.name}
                className={`group p-6 shadow-[var(--theme-shadow)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_68px_color-mix(in_srgb,var(--theme-accent)_24%,transparent)] ${plan.featured ? "border-2 border-[var(--theme-accent)]" : "hover:border-[color:var(--theme-accent)]"}`}
              >
                <p className="text-xs uppercase tracking-[0.22em] text-[var(--theme-muted)]">{plan.name}</p>
                <p className="mt-4 font-[family-name:var(--theme-font-display)] text-4xl tracking-[-0.04em] text-[var(--theme-text)]">
                  {plan.price}
                  <span className="ml-1 text-base font-normal tracking-normal text-[var(--theme-muted)] transition duration-300 group-hover:text-[var(--theme-text)]">
                    {plan.cadence}
                  </span>
                </p>
                <ul className="mt-5 space-y-3 text-sm text-[var(--theme-text)]">
                  {plan.items.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
                <Button href="#cta" className="mt-6 w-full" variant={plan.featured ? "primary" : "secondary"}>
                  Choose {plan.name}
                </Button>
              </Surface>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-10 sm:py-14">
        <Container>
          <SectionHeading
            eyebrow="Blog"
            title="Editorial block for storytelling and SEO content cadence."
            description="A fixed blog preview section helps compare how each style handles denser content and reading rhythm."
          />
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {blogPosts.map((post, index) => (
                <Surface className="group p-6 shadow-[var(--theme-shadow)] transition duration-300 hover:-translate-y-1 hover:border-[color:var(--theme-accent-2)] hover:shadow-[0_24px_58px_color-mix(in_srgb,var(--theme-accent-2)_24%,transparent)]" key={post.title}>
                  <p className="text-xs uppercase tracking-[0.22em] text-[var(--theme-muted)]">{post.tag}</p>
                  <h3 className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-[var(--theme-text)]">{post.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-[var(--theme-muted)] transition duration-300 group-hover:text-[var(--theme-text)]">
                    Learn how {productName} applies this pattern in a reusable design system. Article {index + 1}.
                  </p>
                </Surface>
              ))}
          </div>
        </Container>
      </section>

      <section className="py-10 sm:py-16">
        <Container>
          <Surface className="p-8 shadow-[var(--theme-shadow)] sm:p-10">
            <p className="text-xs uppercase tracking-[0.24em] text-[var(--theme-muted)]">{quoteLabel}</p>
            <blockquote className="mt-6 max-w-4xl font-[family-name:var(--theme-font-display)] text-4xl leading-tight tracking-[-0.05em] text-[var(--theme-text)] sm:text-5xl">
              “{sharedContent.quotes[0]}”
            </blockquote>
            <p className="mt-6 text-sm leading-7 text-[var(--theme-muted)]">— Product design lead, {theme.modeLabel}</p>
          </Surface>
        </Container>
      </section>

      <section className="py-10 sm:py-14">
        <Container>
          <SectionHeading
            eyebrow="FAQ"
            title="Common implementation questions"
            description="This section is intentionally identical across demos to make style differences visible through component treatment only."
          />
          <div className="mt-8 space-y-4">
            {faqs.map((item) => (
              <Surface className="group p-6 shadow-[var(--theme-shadow)] transition duration-300 hover:border-[color:var(--theme-accent)] hover:shadow-[0_20px_52px_color-mix(in_srgb,var(--theme-accent)_20%,transparent)]" key={item.q}>
                <details>
                  <summary className="cursor-pointer text-lg font-semibold text-[var(--theme-text)] transition duration-300 group-hover:tracking-[0.01em]">
                    {item.q}
                  </summary>
                  <p className="mt-4 text-sm leading-7 text-[var(--theme-muted)] transition duration-300 group-hover:text-[var(--theme-text)]">
                    {item.a}
                  </p>
                </details>
              </Surface>
            ))}
          </div>
        </Container>
      </section>

      <footer className="border-t border-[var(--theme-border)] py-10">
        <Container className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-sm font-semibold text-[var(--theme-text)]">{productName}</p>
            <p className="mt-3 text-sm text-[var(--theme-muted)]">A style comparison system for modern landing pages.</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-[var(--theme-muted)]">Product</p>
            <ul className="mt-3 space-y-2 text-sm text-[var(--theme-text)]">
              <li>Features</li>
              <li>Pricing</li>
              <li>Integrations</li>
            </ul>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-[var(--theme-muted)]">Resources</p>
            <ul className="mt-3 space-y-2 text-sm text-[var(--theme-text)]">
              <li>Blog</li>
              <li>Documentation</li>
              <li>Support</li>
            </ul>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-[var(--theme-muted)]">Company</p>
            <ul className="mt-3 space-y-2 text-sm text-[var(--theme-text)]">
              <li>About</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>
        </Container>
      </footer>
    </>
  );
}
