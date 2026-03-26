# Design Trending Style

A Next.js-built UI style library covering visual directions from 2021–2026. The homepage works as a searchable catalog with illustrated previews and links to live landing page demos, making it easy to compare the same product story across very different art directions.

## Stack

- Next.js App Router
- React + TypeScript
- Tailwind CSS v4
- `next/font` for family- and style-aware typography

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Routes

- `/` — searchable style library
- `/styles/[style]` — canonical route for each live landing page demo
- `/themes/[theme]` — legacy route that redirects to the canonical style route

## Available styles

All 20 styles now have live demo pages:

- `default-high-agency`
- `glassmorphism-mature`
- `neo-brutalism`
- `editorial-minimalism`
- `bento-grid`
- `dark-glow-aurora`
- `claymorphism-soft-3d`
- `immersive-3d-product`
- `y2k-retro-futurism`
- `anti-design`
- `typography-first`
- `organic-mesh-gradients`
- `premium-monochrome`
- `motion-led-storytelling`
- `iridescent-holographic-chrome`
- `meaningful-minimalism`
- `cute-alism-kawaii-brutalism`
- `brutalist-editorial-zine`

## Renderer families

The catalog is grouped into 6 families so it can scale without copy-pasting a separate page for every style:

- `high-agency`
- `editorial-typography`
- `grid-product`
- `immersive-premium`
- `tactile-organic`
- `experimental-loud`

## Key structure

- `app/page.tsx` — homepage style library with search and family grouping
- `app/styles/[style]/page.tsx` — canonical route for each live style demo
- `app/themes/[theme]/page.tsx` — compatibility route for older slugs
- `components/shell/style-library.tsx` — client-side catalog search and filtering
- `components/shell/style-preview.tsx` — small illustrated previews for each style card
- `components/landing/families/registry.ts` — `family -> renderer` mapping
- `components/landing/themes/*` + `components/landing/families/*` — family renderers
- `lib/themes.ts` — central style catalog with keywords, tokens, audience, and preview metadata
- `lib/style-families.ts` — metadata for each renderer family
- `lib/style-aliases.ts` — maps legacy `/themes/*` routes to canonical slugs

## Design note

This project intentionally keeps one shared product story, then changes the visual direction through:

- layout system
- typographic voice
- surface depth
- section rhythm
- information density
- imagery mode

That makes it easier to see the difference between visual style, renderer family, and the trade-offs of each art-direction direction rather than looking at palette swaps alone.

## Structural style recipes

Styles are no longer differentiated only by semantic copy and CSS tokens.

Each entry in `lib/themes.ts` is enriched with a `recipe` layer that defines:

- hero variant
- rhythm + density
- proof pattern
- CTA mode
- preview silhouette
- emphasis mode
- media treatment
- section sequence

The system now works in two layers:

1. **Family grammar** in `lib/style-families.ts`
   - defines the broad visual language and constrains which recipe variants are legal for each family
2. **Per-style recipe** in `lib/themes.ts`
   - gives each style a more specific structural signature so sibling styles within the same family do not collapse into the same silhouette

This same recipe data is used by:

- landing renderers
- catalog preview cards
- structural search keywords
- style intelligence panels

## Adding a new style

To add a new style:

1. Add the style seed in `lib/themes.ts`
2. Choose the appropriate `family`
3. Add or rely on a `styleRecipeOverrides` entry so the style gets the right structural signature
4. Make sure the recipe passes the family constraints in `lib/style-families.ts`
5. Verify the preview card, structural search terms, and live demo route all reflect the intended silhouette

This keeps the catalog scalable without creating a separate page component for every style.
