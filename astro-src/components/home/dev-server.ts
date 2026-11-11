/**
 * True only inside `astro dev`, the dev server.
 *
 * Used for the two things that must exist on the dev server and nowhere else:
 * the hero comparison pages (pages/preview/[hero].astro) and the switch between
 * them (DevHeroSwitch.astro).
 *
 * import.meta.env.DEV is not used for this on purpose. It follows NODE_ENV, so
 * it is false when the dev server is started from a shell that sets
 * NODE_ENV=production (Desktop Commander's does), and true in
 * `astro build --mode development`. The command the Astro CLI was started with
 * is right in both cases.
 *
 * Server side only: page frontmatter and getStaticPaths.
 */
const argv = (globalThis as { process?: { argv?: string[] } }).process?.argv ?? [];

export const isDevServer = argv[2] === 'dev';
