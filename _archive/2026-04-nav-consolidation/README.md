# Archive — 2026-04 nav consolidation

Files moved here during audit item #4 (mega-menu nav rollout). Kept for reference, not part of the build.

## `src-components/`
- **NavigationAstro.tsx** — old React nav used by Astro pages before consolidation.
- **NavigationLandingPage.tsx** — old React nav variant used on landing/use-case pages.
  Both superseded by `astro-src/components/Navigation.astro` (server-rendered, reads `astro-src/data/navigation.ts`).
- **\*.tsx.bak / \*.tsx.bak2** — editor backups from Nov 2025 cleanup pass. Safe to delete later.

## `nested-main-web/`
Contents of the stale `main-web/main-web/` nested duplicate (astro-src / docs / src from an older checkout). Not wired into the build. Kept here until we're sure nothing references it.

The empty `main-web/main-web/` directory at repo root couldn't be removed from the sandbox (permission error) — safe to `rmdir` locally.
