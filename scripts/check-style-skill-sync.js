#!/usr/bin/env node

const fs = require("node:fs");
const path = require("node:path");

const repoRoot = process.cwd();
const themesPath = path.join(repoRoot, "lib/themes.ts");
const routerPath = path.join(
  repoRoot,
  ".claude/skills/design-style-director/references/router.md",
);
const skillsRoot = path.join(repoRoot, ".claude/skills");

function read(filePath) {
  return fs.readFileSync(filePath, "utf8");
}

function extractMatches(content, regex) {
  const out = [];
  let match;
  while ((match = regex.exec(content)) !== null) {
    out.push(match[1]);
  }
  return out;
}

function listMarkdownFiles(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...listMarkdownFiles(fullPath));
      continue;
    }
    if (entry.isFile() && entry.name.endsWith(".md")) {
      files.push(fullPath);
    }
  }
  return files;
}

function setDiff(a, b) {
  return [...a].filter((x) => !b.has(x));
}

const themesContent = read(themesPath);
const activeSlugs = new Set(extractMatches(themesContent, /slug:\s*"([^"]+)"/g));
const familyNames = new Set(extractMatches(themesContent, /family:\s*"([^"]+)"/g));

const routerContent = read(routerPath);
const routerFamilyLines = routerContent
  .split("\n")
  .filter((line) => line.trim().startsWith("- ") && line.includes("->"));
const routerCatalog = new Set();
for (const line of routerFamilyLines) {
  const slugs = extractMatches(line, /`([^`]+)`/g);
  for (const slug of slugs) routerCatalog.add(slug);
}

const missingInRouter = setDiff(activeSlugs, routerCatalog);
const staleInRouter = setDiff(routerCatalog, activeSlugs);

const markdownFiles = listMarkdownFiles(skillsRoot);
const backtickedSlugLike = new Set();
for (const file of markdownFiles) {
  const content = read(file);
  const tokens = extractMatches(content, /`([^`]+)`/g);
  for (const token of tokens) {
    if (/^[a-z0-9]+(?:-[a-z0-9]+)+$/.test(token)) {
      backtickedSlugLike.add(token);
    }
  }
}

const invalidSkillRefs = [...backtickedSlugLike].filter(
  (token) =>
    !token.startsWith("family-") &&
    !activeSlugs.has(token) &&
    !familyNames.has(token),
);

let hasError = false;

if (missingInRouter.length || staleInRouter.length) {
  hasError = true;
  console.error("\n[style-sync] Router catalog is out of sync with lib/themes.ts");
  if (missingInRouter.length) {
    console.error("- Missing in router:", missingInRouter.sort().join(", "));
  }
  if (staleInRouter.length) {
    console.error("- Stale in router:", staleInRouter.sort().join(", "));
  }
}

if (invalidSkillRefs.length) {
  hasError = true;
  console.error("\n[style-sync] Stale/invalid style references found in .claude/skills:");
  console.error("- " + invalidSkillRefs.sort().join(", "));
}

if (hasError) {
  console.error(
    "\nFix docs under .claude/skills to match active styles in lib/themes.ts before merge.",
  );
  process.exit(1);
}

console.log("[style-sync] OK: style catalog and skill docs are in sync.");
