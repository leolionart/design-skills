#!/usr/bin/env bash

set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
CLAUDE_SKILLS_DIR="$ROOT_DIR/.claude/skills"
CODEX_SKILLS_DIR="$ROOT_DIR/.codex/skills"

if [[ ! -d "$CLAUDE_SKILLS_DIR" ]]; then
  echo "Missing source skills directory: $CLAUDE_SKILLS_DIR" >&2
  exit 1
fi

mkdir -p "$CODEX_SKILLS_DIR"

while IFS= read -r source_dir; do
  skill_name="$(basename "$source_dir")"
  target_dir="$CODEX_SKILLS_DIR/$skill_name"

  rm -rf "$target_dir"
  mkdir -p "$target_dir"
  rsync -a "$source_dir/" "$target_dir/"
  echo "Synced $skill_name"
done < <(find "$CLAUDE_SKILLS_DIR" -mindepth 1 -maxdepth 1 -type d | sort)
