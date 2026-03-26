"use client";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { sharedContent } from "@/lib/landing-content";
import type { ThemeDefinition } from "@/lib/themes";

// Full-height section for scroll storytelling
function StorySection({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`relative min-h-screen py-20 sm:py-32 ${className}`}>
      {children}
    </section>
  );
}

// Chapter marker
function ChapterMarker({ number, title }: { number: string; title: string }) {
  return (
    <div className="mb-8 flex items-center gap-4">
      <span className="flex h-12 w-12 items-center justify-center rounded-full border border-[var(--theme-accent)] font-mono text-sm text-[var(--theme-accent)]">
        {number}
      </span>
      <span className="text-sm uppercase tracking-[0.3em] text-[var(--theme-muted)]">
        {title}
      </span>
    </div>
  );
}

// Fade-in reveal block (simulates motion with CSS)
function RevealBlock({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <div
      className="animate-fade-in-up"
      style={{ animationDelay: `${delay}ms`, animationFillMode: "backwards" }}
    >
      {children}
    </div>
  );
}

// Progress indicator
function StoryProgress({ current, total }: { current: number; total: number }) {
  return (
    <div className="fixed right-8 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-3 lg:flex">
      {Array.from({ length: total }).map((_, i) => (
        <div
          key={i}
          className={`h-8 w-1 rounded-full transition-all duration-500 ${
            i <= current
              ? "bg-[var(--theme-accent)]"
              : "bg-[var(--theme-border)]"
          }`}
        />
      ))}
    </div>
  );
}

export function MotionLanding({ theme }: { theme: ThemeDefinition }) {
  return (
    <>
      {/* Add keyframes for fade-in animation */}
      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out;
        }
      `}</style>

      <StoryProgress current={0} total={4} />

      {/* Chapter 1: Opening */}
      <StorySection className="flex items-center">
        <Container>
          <RevealBlock>
            <ChapterMarker number="01" title="The Beginning" />
          </RevealBlock>
          <RevealBlock delay={200}>
            <h1 className="max-w-4xl text-5xl font-bold leading-[1.1] tracking-tight sm:text-7xl lg:text-8xl">
              <span className="text-[var(--theme-muted)]">Stories are told</span>
              <br />
              <span className="text-[var(--theme-accent)]">through motion</span>
            </h1>
          </RevealBlock>
          <RevealBlock delay={400}>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-[var(--theme-muted)]">
              {theme.kicker}. This page demonstrates how narrative pacing and 
              scroll choreography can transform a landing page into an immersive journey.
            </p>
          </RevealBlock>
          <RevealBlock delay={600}>
            <div className="mt-12 flex flex-wrap gap-4">
              <Button href="/" className="bg-[var(--theme-accent)] text-[var(--theme-accent-contrast)]">
                Back to gallery
              </Button>
              <Button href="/styles/dark-glow-aurora" variant="ghost">
                Compare glow style
              </Button>
            </div>
          </RevealBlock>
        </Container>
      </StorySection>

      {/* Chapter 2: The Journey */}
      <StorySection>
        <Container>
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <ChapterMarker number="02" title="The Journey" />
              <h2 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
                Each scroll reveals
                <br />
                <span className="text-[var(--theme-accent-2)]">a new chapter</span>
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-[var(--theme-muted)]">
                Motion-led design treats the page as a timeline. Sections unfold 
                like scenes in a film, guiding users through a carefully crafted 
                narrative experience.
              </p>
            </div>

            {/* Stacked cards suggesting depth/layers */}
            <div className="relative h-80">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="absolute inset-x-0 rounded-2xl border border-[var(--theme-border)] bg-[var(--theme-surface-strong)] p-8"
                  style={{
                    top: `${i * 20}px`,
                    left: `${i * 20}px`,
                    right: `${(2 - i) * 20}px`,
                    zIndex: 3 - i,
                    opacity: 1 - i * 0.2,
                  }}
                >
                  {i === 0 && (
                    <>
                      <p className="text-sm uppercase tracking-widest text-[var(--theme-accent)]">
                        Layer {i + 1}
                      </p>
                      <p className="mt-4 text-xl font-semibold">
                        Content reveals as you scroll
                      </p>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </StorySection>

      {/* Chapter 3: Features as story beats */}
      <StorySection className="bg-[var(--theme-bg-alt)]">
        <Container>
          <ChapterMarker number="03" title="Key Moments" />
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Story <span className="text-[var(--theme-accent)]">beats</span>
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-[var(--theme-muted)]">
            In motion design, features become narrative beats—each one building 
            on the last to create momentum.
          </p>

          <div className="mt-16 space-y-24">
            {sharedContent.features.map((feature, index) => (
              <div
                key={feature.title}
                className={`grid gap-8 lg:grid-cols-2 lg:items-center ${
                  index % 2 === 1 ? "lg:grid-flow-dense" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="flex items-center gap-4">
                    <span className="text-6xl font-bold text-[var(--theme-accent)]/20">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-2xl font-bold">{feature.title}</h3>
                  </div>
                  <p className="mt-4 text-lg leading-relaxed text-[var(--theme-muted)]">
                    {feature.description}
                  </p>
                </div>
                <div
                  className={`h-64 rounded-2xl border border-[var(--theme-border)] bg-gradient-to-br from-[var(--theme-accent)]/10 to-[var(--theme-accent-2)]/10 ${
                    index % 2 === 1 ? "lg:col-start-1" : ""
                  }`}
                />
              </div>
            ))}
          </div>
        </Container>
      </StorySection>

      {/* Chapter 4: The Resolution */}
      <StorySection className="flex items-center">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <ChapterMarker number="04" title="The Resolution" />
            <blockquote className="text-3xl font-bold leading-snug tracking-tight sm:text-5xl">
              "{sharedContent.quotes[0]}"
            </blockquote>
            <div className="mt-12 flex flex-wrap justify-center gap-6">
              <div className="rounded-xl border border-[var(--theme-border)] bg-[var(--theme-surface)] px-6 py-4">
                <p className="text-sm text-[var(--theme-muted)]">Primary</p>
                <p className="mt-1 font-semibold text-[var(--theme-accent)]">
                  {theme.primaryLanguage}
                </p>
              </div>
              <div className="rounded-xl border border-[var(--theme-border)] bg-[var(--theme-surface)] px-6 py-4">
                <p className="text-sm text-[var(--theme-muted)]">Imagery</p>
                <p className="mt-1 font-semibold text-[var(--theme-accent-2)]">
                  {theme.imageryMode}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </StorySection>
    </>
  );
}
