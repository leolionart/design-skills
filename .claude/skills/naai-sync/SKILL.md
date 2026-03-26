---
name: naai-sync
description: Utility skill to sync NAAI design styles into this repo.
---

# naai-sync

This skill syncs design styles from NAAI into this repo as the single source of truth.

It uses `scripts/sync.ts` to:
- fetch NAAI styles from API
- regenerate `lib/themes.ts` style seeds
- sync legacy alias redirects in `lib/style-aliases.ts`
- update style router and family recipe docs under `.claude/skills/**`
- generate `naai-sync-report.json`
