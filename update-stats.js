/**
 * Refreshes the weekly npm downloads number the site shows.
 *
 * The number lives in src/data/site-stats.json and reaches every page through
 * STATS in src/components/home-mcp/links.ts. This script runs as part of
 * `npm run commit-static`, right before the build, so the number is refreshed
 * when the site is deployed and nobody has to edit it by hand. A plain
 * `npm run build` or `npm run dev` never calls it.
 *
 *   node update-stats.js             refresh, if the stored number is old enough
 *   node update-stats.js --force     refresh now
 *   node update-stats.js --dry-run   print what would change, write nothing
 *
 * What is shown: npm's own "weekly downloads", the last 7 days, rounded down
 * (943,514 becomes "940k+", 1,054,923 becomes "1M+", 1,254,000 becomes
 * "1.2M+"). It is the number on the npm page the label links to.
 *
 * For this package that figure swings a lot (713k, 943k and 1.05M within
 * three days in November 2026: a release can triple a day), so the label can
 * go down as well as up from one deploy to the next. That was chosen knowingly
 * on 2026-11-13. For a calmer number, set WEEKS to 4: the average week of the
 * last four weeks (686k on the same day).
 *
 * npm's daily data sometimes has empty days that are filled in later. If one
 * of the last 7 days is empty, the week is not complete and the stored number
 * stays.
 *
 * Why the label changes at most every 14 days: it is part of a JavaScript
 * file (links.<hash>.js) whose name changes with it. If a label came back
 * within days, so would the old file name, and Cloudflare may still have that
 * name cached as "not found" (see astro.config.mjs and "Deploying" in
 * AGENTS.md). The asset name check before a deploy remains the safety net.
 *
 * This script never fails a build: on any problem the stored number stays.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const FILE = path.join(ROOT, 'src/data/site-stats.json');

const PACKAGE = '@wonderwhy-er/desktop-commander';
/** DC_STATS_NPM_URL is for tests only. */
const NPM_URL =
  process.env.DC_STATS_NPM_URL || `https://api.npmjs.org/downloads/range/last-month/${PACKAGE}`;

/** 1 shows npm's last 7 days. 4 shows the average week of the last four. */
const WEEKS = 1;
const MIN_DAYS_BETWEEN_CHANGES = 14;
const TIMEOUT_MS = 10_000;
/** A new number below this share of the stored one is treated as bad data. */
const MAX_DROP = 0.5;

const args = new Set(process.argv.slice(2));
const force = args.has('--force');
const dryRun = args.has('--dry-run');

const say = (text) => console.log(`[stats] ${text}`);
const number = (n) => n.toLocaleString('en-US');

/** 943514 -> "940k+", 1054923 -> "1M+", 1254000 -> "1.2M+" */
export function downloadsLabel(n) {
  if (n >= 1_000_000) {
    const tenths = Math.floor(n / 100_000);
    return `${tenths % 10 === 0 ? tenths / 10 : (tenths / 10).toFixed(1)}M+`;
  }
  if (n >= 10_000) return `${Math.floor(n / 10_000) * 10}k+`;
  if (n >= 1_000) return `${Math.floor(n / 1_000)}k+`;
  return `${n}+`;
}

const today = () => new Date().toISOString().slice(0, 10);
const daysBetween = (from, to) => Math.floor((Date.parse(to) - Date.parse(from)) / 86_400_000);

async function weeklyDownloads() {
  const response = await fetch(NPM_URL, {
    signal: AbortSignal.timeout(TIMEOUT_MS),
    headers: { accept: 'application/json' },
  });
  if (!response.ok) throw new Error(`npm answered ${response.status}`);
  const data = await response.json();
  const days = Array.isArray(data?.downloads) ? data.downloads : [];
  const wanted = WEEKS * 7;
  if (days.length < wanted) throw new Error(`npm returned ${days.length} days, ${wanted} needed`);

  const window = days.slice(-wanted);
  if (!window.every((d) => Number.isInteger(d?.downloads) && d.downloads >= 0)) {
    throw new Error('npm returned a day without a download count');
  }
  const total = window.reduce((sum, d) => sum + d.downloads, 0);
  if (total <= 0) throw new Error('npm returned no downloads');

  const empty = window.slice(-7).filter((d) => d.downloads === 0);
  if (empty.length) {
    throw new Error(`npm has no numbers yet for ${empty.map((d) => d.day).join(', ')}`);
  }

  return {
    weekly: Math.round(total / WEEKS),
    period: `${window[0].day} to ${window[window.length - 1].day}`,
  };
}

async function main() {
  const stats = JSON.parse(fs.readFileSync(FILE, 'utf8'));
  const current = stats.weeklyDownloads;
  const changed = stats.weeklyDownloadsChanged;

  if (!force && changed) {
    const age = daysBetween(changed, today());
    if (age < MIN_DAYS_BETWEEN_CHANGES) {
      say(`weekly downloads stay at ${current}: changed ${age} days ago, refreshed every ${MIN_DAYS_BETWEEN_CHANGES} days at most`);
      return;
    }
  }

  const { weekly, period } = await weeklyDownloads();

  const before = stats.weeklyDownloadsNumber;
  if (!force && Number.isFinite(before) && weekly < before * MAX_DROP) {
    say(`weekly downloads stay at ${current}: npm reports ${number(weekly)}, less than half of the ${number(before)} stored. Looks like missing data. Run with --force to accept it.`);
    return;
  }

  const label = downloadsLabel(weekly);
  if (label === current) {
    say(`weekly downloads stay at ${current} (${number(weekly)}, ${period})`);
    return;
  }

  say(`weekly downloads: ${current} becomes ${label} (${number(weekly)}, ${period})`);
  if (dryRun) {
    say('dry run, nothing written');
    return;
  }

  const next = {
    ...stats,
    weeklyDownloads: label,
    weeklyDownloadsNumber: weekly,
    weeklyDownloadsPeriod: period,
    weeklyDownloadsChanged: today(),
  };
  fs.writeFileSync(FILE, `${JSON.stringify(next, null, 2)}\n`);
}

// Only when run directly, so the label rule can be imported and tested.
if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  main().catch((error) => {
    say(`weekly downloads not refreshed, the stored number stays (${error?.message || error})`);
  });
}
