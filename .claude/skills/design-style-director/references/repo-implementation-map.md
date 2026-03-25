# Repo Implementation Map

## Purpose
Use this file when a style decision must be translated into this repo's actual implementation model instead of staying stack-agnostic.

## Core mapping spine
- family taxonomy -> `lib/style-families.ts`
- exemplar inventory and token payload -> `lib/themes.ts`
- family renderer selection -> `components/landing/families/registry.ts`
- runtime application of `theme.vars` and `theme-family-*` shell classes -> `components/landing/landing-page-renderer.tsx`
- family shell atmosphere -> `app/globals.css`
- shared primitive execution -> `components/ui/button.tsx`, `container.tsx`, `surface.tsx`, `section-heading.tsx`

## Express family choice here
Use `StyleFamily` in `lib/style-families.ts` when the work is about the dominant visual family.

Current families:
- `high-agency`
- `editorial-typography`
- `grid-product`
- `immersive-premium`
- `tactile-organic`
- `experimental-loud`

Use `styleFamilies` labels and descriptions when wording or categorization needs to stay aligned with the repo.

## Express exemplar choice here
Use `themes` in `lib/themes.ts` when the work is about a specific style slug or when guidance must map to:
- `summary`
- `audience`
- `primaryLanguage`
- `supportingTreatments`
- `imageryMode`
- `avoidList`
- `previewBullets`
- `keywords`
- `designPromptId`
- `vars`

Do not invent alternate slug names. Match exemplar file names and router references to the exact `slug` in `lib/themes.ts`.

## Express token decisions here
Use `theme.vars` in `lib/themes.ts` when the direction affects:
- palette
- contrast
- borders
- shadows
- radius
- accent color
- font tokens
- background and surface feel

Common token levers already used in the repo:
- `--theme-bg`
- `--theme-bg-alt`
- `--theme-surface`
- `--theme-surface-strong`
- `--theme-text`
- `--theme-muted`
- `--theme-border`
- `--theme-accent`
- `--theme-accent-2`
- `--theme-accent-contrast`
- `--theme-ring`
- `--theme-shadow`
- `--theme-grid`
- `--theme-radius`
- `--theme-font-display`
- `--theme-font-body`
- `--theme-font-mono`

## Express family structure here
Use `familyRenderers` in `components/landing/families/registry.ts` when the direction changes the dominant page grammar.

Current mapping:
- `high-agency` -> `HighAgencyLanding`
- `editorial-typography` -> `EditorialLanding`
- `grid-product` -> `TechnicalLanding`
- `immersive-premium` -> `PremiumLanding`
- `tactile-organic` -> `TactileLanding`
- `experimental-loud` -> `ExperimentalLanding`

If the brief changes how the whole page should compose, start at the family renderer layer before touching local components.

## Express prompt-backed implementation here
Use the prompt-backed path when the user wants a restyle prompt, AI prompt copy, or design-system export:
- prompt lookup and parsing -> `lib/design-prompt-service.ts`
- API route for prompt retrieval -> `app/api/design-prompts/[id]/route.ts`
- client copy action -> `components/shell/copy-prompt-button.tsx`

Use `designPromptId` on a theme when the exemplar should map to a live prompt from `designprompts.dev`.
Do not invent prompt ids; match the exact prompt key used by the remote source.

## Express runtime shell behavior here
Use `components/landing/landing-page-renderer.tsx` as the example of how style is applied at runtime:
- `style={theme.vars}` injects exemplar token payload
- `theme-shell theme-family-${theme.family}` applies family atmosphere classes
- prompt CTA in the page header is the runtime example for prompt-backed exemplars

Use `app/globals.css` when the change is about family-level shell mood such as:
- ambient background fields
- grid texture
- family-specific radial glow or organic softness
- atmospheric backdrop that should apply across the page shell

Do not move exemplar-specific token logic into `globals.css` unless it truly belongs at family-shell level.

## Prefer shared primitives
When turning style guidance into code, prefer adapting the repo's existing primitives before inventing new ones:
- `Button` for CTA hierarchy and surface feel
- `Container` for width and horizontal rhythm
- `Surface` for card/panel shell treatment
- `SectionHeading` for heading cadence and supporting copy rhythm
- `CopyPromptButton` for prompt-backed CTA behavior in the library and demo pages

Use these primitives to carry style changes through theme vars and class treatment whenever possible.

## Family-specific implementation cues
- `high-agency` -> prioritize hierarchy shifts, hero asymmetry, CTA/proof weight before adding decorative effects
- `editorial-typography` -> prioritize spacing, type rhythm, restrained surfaces, and reading cadence before adding accents
- `grid-product` -> prioritize module grouping, tile hierarchy, proof placement, and scan speed
- `immersive-premium` -> prioritize one focal scene, readable depth, and controlled spectacle
- `tactile-organic` -> prioritize rounded grouping, warm surfaces, and softness with contrast discipline
- `experimental-loud` -> prioritize one disruptive move, visible hierarchy spine, and controlled tension

## Guardrails
- Do not invent a parallel theme system outside `lib/themes.ts`.
- Do not create new family names when existing `StyleFamily` values already fit.
- Do not add prompt copy behavior outside the prompt service and prompt API route unless the interaction model truly changes.
- Do not bypass shared primitives unless the brief clearly demands a new UI pattern.
- Keep family-shell atmosphere in `app/globals.css` and exemplar-specific token nuance in `lib/themes.ts`.
- If a style request is still generic, stay in the skill/reference layer first and only map to repo files when implementation is explicitly needed.
