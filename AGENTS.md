<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Style feedback auto-documentation contract

When a user gives feedback about a demo style (e.g. "style X chưa đúng"), every implementation update must also update style documentation in the same change set.

## Mandatory update surfaces

1. Runtime/style definition in code
- `lib/themes.ts` (if style semantics, positioning, or active catalog changed)
- Relevant renderer in `components/landing/**`

2. Skill documentation source of truth
- `.claude/skills/design-style-director/references/router.md`
- Family recipe/exemplar docs under `.claude/skills/family-*/references/**`

3. Validation gate
- Run `npm run check:style-skill-sync` before commit whenever style catalog or style docs change.
- If the check fails, do not commit until docs and catalog are synchronized.

## Commit policy for style changes

- Do not ship style visual changes without matching `.claude/skills` updates.
- Do not remove a style slug from `lib/themes.ts` without removing/updating related exemplar references in `.claude/skills`.
- Keep wording focused on differentiating signals (layout grammar, surface language, hierarchy rhythm), not only colors/fonts.
