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

Live demo styles:

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
- `clean-saas-gradient`
- `typography-first`
- `organic-mesh-gradients`
- `premium-monochrome`
- `motion-led-storytelling`

Illustrated-only catalog styles:

- `iridescent-holographic-chrome`
- `meaningful-minimalism`
- `cute-alism-kawaii-brutalism`
- `brutalist-editorial-zine`
- `inclusive-accessibility-first`

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
