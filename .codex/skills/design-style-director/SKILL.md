---
name: design-style-director
description: This skill should be used when UI work needs aesthetic selection, style review, or restyling guidance across landing pages, dashboards, apps, and brand sites.
---

# Design Style Director

Use when the requested UI direction is vague, when multiple aesthetics fit, or when an existing screen must be reviewed or restyled without changing core content.

This skill is aligned to the repo's expanded 31-style catalog, including newer directions such as academia, cyberpunk, maximalism, professional/corporate, terminal, web3, vaporwave, botanical, sketch, bauhaus, and art deco.

## Handle these jobs
- classify a brief into the best family
- pick exemplar styles inside that family
- turn mood words into coding directives
- critique fidelity of existing UI
- translate one UI style into another

## Route first
1. Determine intent: choose, build, review, or convert.
2. Classify the brief with `references/router.md`.
3. Translate the chosen family with `references/coding-axes.md`.
4. If implementation must map into this repo, load `references/repo-implementation-map.md`.
5. For review or conversion tasks, follow `references/review-conversion.md`.
6. If the brief strongly matches a prompt-backed style, prefer that exemplar's coding language and prompt vocabulary.
7. Load the matching family skill when one family is dominant.

## Prefer these family skills
- `family-high-agency`
- `family-editorial-typography`
- `family-grid-product`
- `family-immersive-premium`
- `family-tactile-organic`
- `family-experimental-loud`

## Ask only when missing
Ask brief follow-ups only if the answer changes the family:
- conversion-first or statement-first
- reading-first or scan-first
- calm, premium, playful, or loud
- safe production or deliberate experimentation
- low, medium, or high motion tolerance

## Output contract
Return these blocks in order:
1. Recommended family
2. Best-matching exemplar styles
3. Why this fit works
4. Coding directives
5. Avoid list
6. Next action

## Guardrails
- Pick one primary family and at most one secondary influence.
- Prefer exact exemplar names from this repo when recommending a style, not generic aliases.
- Translate aesthetics into hierarchy, layout, typography, density, surfaces, motion, and component treatment.
- State what to remove, not only what to add.
- Preserve content goals before restyling visuals.
- Stay stack-agnostic unless the user asks for framework-specific implementation.

## Resources
- `references/router.md` for classification
- `references/coding-axes.md` for build translation
- `references/repo-implementation-map.md` for repo-native implementation mapping
- `references/review-conversion.md` for critique and restyling
