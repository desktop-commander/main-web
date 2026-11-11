/**
 * Hero ranking pill: cycles through the directory rankings.
 *
 * Every ranking sits in the same grid cell. The active one slides in from
 * below while the previous one leaves through the top, and the pill width
 * follows the active ranking. Rotation pauses on hover and keyboard focus and
 * is off for prefers-reduced-motion (the first ranking stays).
 */
const INTERVAL_MS = 3500;

export function initPill(reduceMotion: boolean) {
  const pill = document.querySelector<HTMLAnchorElement>('[data-pill]');
  if (!pill) return;
  const viewport = pill.querySelector<HTMLElement>('.hx-pill__viewport');
  const items = Array.from(pill.querySelectorAll<HTMLElement>('.hx-pill__item'));
  if (!viewport || items.length < 2) return;

  let active = 0;
  let paused = false;

  const measure = () => {
    viewport.style.width = `${items[active].offsetWidth}px`;
  };

  const show = (index: number) => {
    const count = items.length;
    active = index;
    items.forEach((item, i) => {
      item.dataset.state =
        i === active ? 'active' : i === (active - 1 + count) % count ? 'prev' : 'next';
    });
    const item = items[active];
    pill.href = item.dataset.href || pill.href;
    pill.setAttribute('aria-label', item.dataset.describe || '');
    pill.dataset.evProps = JSON.stringify({
      ranking: item.dataset.ranking,
      button_location: 'home_hero',
      destination: item.dataset.href,
    });
    measure();
  };

  measure();
  document.fonts?.ready.then(measure);
  window.addEventListener('resize', measure, { passive: true });

  if (reduceMotion) return;

  pill.addEventListener('mouseenter', () => (paused = true));
  pill.addEventListener('mouseleave', () => (paused = false));
  pill.addEventListener('focus', () => (paused = true));
  pill.addEventListener('blur', () => (paused = false));

  window.setInterval(() => {
    if (paused || document.hidden) return;
    show((active + 1) % items.length);
  }, INTERVAL_MS);
}
