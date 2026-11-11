/**
 * Analytics for the homepage sections, which are plain HTML rather than
 * React islands.
 *
 * Any element with data-ev="event_name" sends that event on click, with the
 * JSON in data-ev-props as its properties. It goes through the same
 * trackEvent() the React components use, so events reach PostHog and Google
 * Analytics exactly as before and keep their names and properties.
 *
 * Scroll depth uses the same guard key as useScrollTracking(), so whichever
 * registers first (this, or a React island such as the mobile menu) is the
 * only one that reports.
 */
import { trackEvent, trackScrollDepth } from '@/lib/analytics/tracking';
import type { AllEvents, EventProperties } from '@/lib/analytics/events';

export function initAnalytics() {
  document.addEventListener('click', (e) => {
    const target = (e.target as HTMLElement | null)?.closest<HTMLElement>('[data-ev]');
    if (!target?.dataset.ev) return;
    let props: EventProperties | undefined;
    try {
      props = target.dataset.evProps ? JSON.parse(target.dataset.evProps) : undefined;
    } catch {
      props = undefined;
    }
    trackEvent(target.dataset.ev as AllEvents, props);
  });

  const w = window as unknown as { __dcScrollTrackingKey?: string };
  const pageKey = `${window.location.pathname}|`;
  if (w.__dcScrollTrackingKey === pageKey) return;
  w.__dcScrollTrackingKey = pageKey;

  let maxDepth = 0;
  let ticking = false;
  window.addEventListener(
    'scroll',
    () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const percent = Math.round((window.pageYOffset / docHeight) * 100);
        const milestone = [25, 50, 75, 90].find((m) => percent >= m && maxDepth < m);
        if (milestone) {
          maxDepth = milestone;
          trackScrollDepth({
            depth_percentage: milestone,
            page_url: window.location.href,
            max_scroll_reached: percent,
          });
        }
        ticking = false;
      });
    },
    { passive: true },
  );
}
