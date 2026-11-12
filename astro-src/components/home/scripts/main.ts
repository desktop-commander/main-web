/**
 * Entry point for the homepage scripts. Loaded once from index.astro.
 *
 * Everything here is progressive: the page is complete server-rendered HTML,
 * and each init() only adds motion or interaction on top of it.
 */
import { initAnalytics } from './analytics';
import { initCounters, initLive, initNav, initReveal } from './effects';
import { initHub } from './hub';
import { initPill } from './pill';
import { initSections } from './sections';
import { initStage } from './stage';

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const safely = (name: string, fn: () => void) => {
  try {
    fn();
  } catch (error) {
    console.error(`[home] ${name} failed`, error);
  }
};

const boot = () => {
  // The inline script in index.astro shows everything if this never runs.
  window.clearTimeout((window as unknown as { __hxFallback?: number }).__hxFallback);

  safely('analytics', initAnalytics);
  safely('nav', initNav);
  safely('reveal', () => initReveal(reduceMotion));
  safely('pill', () => initPill(reduceMotion));
  safely('hub', () => initHub(reduceMotion));
  safely('stage', () => initStage(reduceMotion));
  safely('sections', () => initSections(reduceMotion));
  safely('counters', () => initCounters(reduceMotion));
  safely('live', () => initLive(reduceMotion));
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', boot, { once: true });
} else {
  boot();
}
