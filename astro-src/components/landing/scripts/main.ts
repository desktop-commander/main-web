/**
 * Entry point for the client landing pages. Loaded once from LandingPage.astro.
 *
 * Everything here is progressive: the page is complete server-rendered HTML,
 * and each init() only adds motion or interaction on top of it. Analytics,
 * reveals, the navigation, the ranking pill and the FAQ are the homepage's
 * own modules.
 */
import { initAnalytics } from '../../home/scripts/analytics';
import { initLive, initNav, initReveal } from '../../home/scripts/effects';
import { initPill } from '../../home/scripts/pill';
import { initFaq } from '../../home/scripts/sections';
import { initComposer } from './composer';
import { initCopy } from './copy';
import { initShowcase } from './showcase';

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const safely = (name: string, fn: () => void) => {
  try {
    fn();
  } catch (error) {
    console.error(`[landing] ${name} failed`, error);
  }
};

const boot = () => {
  // The inline script in LandingPage.astro shows everything if this never runs.
  window.clearTimeout((window as unknown as { __hxFallback?: number }).__hxFallback);

  safely('analytics', initAnalytics);
  safely('nav', initNav);
  safely('reveal', () => initReveal(reduceMotion));
  safely('pill', () => initPill(reduceMotion));
  safely('composer', () => initComposer(reduceMotion));
  safely('showcase', () => initShowcase(reduceMotion));
  safely('faq', initFaq);
  safely('copy', initCopy);
  safely('live', () => initLive(reduceMotion));
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', boot, { once: true });
} else {
  boot();
}
