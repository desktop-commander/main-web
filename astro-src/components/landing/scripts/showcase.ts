/**
 * Prompt showcase (LandingShowcase.astro): category tabs that take turns.
 *
 * The tabs follow the ARIA tabs pattern. While the section is on screen the
 * next category is shown every few seconds. The timing is the CSS animation
 * of the line on the active tab (lp-tab-time in landing.css): when it ends,
 * the next tab is selected, and pausing the animation pauses the rotation.
 * It waits while the section is off screen, under the pointer, or holds
 * keyboard focus. It stops for good once the visitor picks a category, so
 * what they chose stays put while they read it, and it is off for
 * prefers-reduced-motion.
 *
 * Choosing a category (click or keyboard) sends
 * mcp_client_showcase_category_clicked, as the page did before.
 */
import { trackEvent } from '@/lib/analytics/tracking';
import type { AllEvents } from '@/lib/analytics/events';

export function initShowcase(reduceMotion: boolean) {
  const root = document.querySelector<HTMLElement>('[data-showcase]');
  if (!root) return;
  const list = root.querySelector<HTMLElement>('[role="tablist"]');
  const tabs = Array.from(root.querySelectorAll<HTMLButtonElement>('[role="tab"]'));
  if (!list || !tabs.length) return;
  const panels = tabs.map((tab) => document.getElementById(tab.getAttribute('aria-controls') || ''));
  const client = root.dataset.client;

  const current = () => Math.max(0, tabs.findIndex((tab) => tab.getAttribute('aria-selected') === 'true'));

  const select = (index: number, byUser: boolean) => {
    tabs.forEach((tab, i) => {
      const on = i === index;
      tab.setAttribute('aria-selected', String(on));
      tab.tabIndex = on ? 0 : -1;
      panels[i]?.classList.toggle('is-active', on);
    });

    // On small screens the tabs are one row that scrolls sideways: keep the
    // active one in view. Only the row moves, never the page.
    const tab = tabs[index];
    if (list.scrollWidth > list.clientWidth) {
      list.scrollTo({
        left: tab.offsetLeft - (list.clientWidth - tab.offsetWidth) / 2,
        behavior: reduceMotion ? 'auto' : 'smooth',
      });
    }

    if (byUser) {
      root.classList.remove('is-auto'); // the visitor has taken over
      trackEvent('mcp_client_showcase_category_clicked' as AllEvents, {
        client,
        category: tab.dataset.key,
      });
    }
  };

  tabs.forEach((tab, i) => {
    tab.addEventListener('click', () => select(i, true));
    tab.addEventListener('keydown', (e) => {
      const step =
        e.key === 'ArrowDown' || e.key === 'ArrowRight' ? 1 : e.key === 'ArrowUp' || e.key === 'ArrowLeft' ? -1 : 0;
      let next = -1;
      if (step) next = (i + step + tabs.length) % tabs.length;
      else if (e.key === 'Home') next = 0;
      else if (e.key === 'End') next = tabs.length - 1;
      if (next < 0) return;
      e.preventDefault();
      tabs[next].focus({ preventScroll: true });
      select(next, true);
    });
  });

  if (reduceMotion) return;

  // Taking turns
  root.classList.add('is-auto', 'is-waiting');
  root.addEventListener('animationend', (e) => {
    if (e.animationName !== 'lp-tab-time' || !root.classList.contains('is-auto')) return;
    select((current() + 1) % tabs.length, false);
  });

  let seen = false;
  let hover = false;
  let focus = false;
  const sync = () => root.classList.toggle('is-waiting', !seen || hover || focus);

  new IntersectionObserver(
    (entries) => {
      seen = entries[entries.length - 1].isIntersecting;
      sync();
    },
    { threshold: 0.2 },
  ).observe(root);

  // hover only means something with a mouse; a tap must not freeze the rotation
  root.addEventListener('pointerenter', (e) => {
    if (e.pointerType !== 'mouse') return;
    hover = true;
    sync();
  });
  root.addEventListener('pointerleave', () => {
    hover = false;
    sync();
  });
  root.addEventListener('focusin', (e) => {
    // focus that arrives from the keyboard, not from a click or tap
    focus = (e.target as HTMLElement).matches(':focus-visible');
    sync();
  });
  root.addEventListener('focusout', () => {
    focus = false;
    sync();
  });
}
