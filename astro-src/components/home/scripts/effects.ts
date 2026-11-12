/**
 * Page-wide effects for the homepage: scroll reveals, the glass state of the
 * navigation, number counters, and switching looping visuals on only while
 * they are on screen. Nothing here follows the pointer.
 */

const GLYPHS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789/<>_';

/**
 * Section labels resolve out of random characters when they appear. The font
 * is monospace and the length never changes, so nothing shifts while it runs.
 */
function decode(node: HTMLElement) {
  const label = node.textContent || '';
  if (!label.trim()) return;
  // assistive tech gets the real label; the animated copy is hidden from it
  const spoken = document.createElement('span');
  spoken.className = 'hx-sr';
  spoken.textContent = label;
  node.before(spoken);
  node.setAttribute('aria-hidden', 'true');
  const duration = 700;
  const t0 = performance.now();
  const step = (now: number) => {
    const p = Math.min((now - t0) / duration, 1);
    const settled = Math.floor(p * label.length);
    let out = '';
    for (let i = 0; i < label.length; i++) {
      const ch = label[i];
      out += i < settled || ch === ' ' ? ch : GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
    }
    node.textContent = out;
    if (p < 1) requestAnimationFrame(step);
    else node.textContent = label;
  };
  requestAnimationFrame(step);
}

/** Adds .is-in to [data-reveal] elements when they scroll into view (once). */
export function initReveal(reduceMotion: boolean) {
  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add('is-in');
        io.unobserve(entry.target);
        if (!reduceMotion) {
          const label = entry.target.querySelector<HTMLElement>('.hx-eyebrow__text');
          if (label) decode(label);
        }
      }
    },
    { rootMargin: '0px 0px -7% 0px', threshold: 0.06 },
  );
  document.querySelectorAll('[data-reveal]').forEach((node) => io.observe(node));
}

/** The navigation is transparent over the hero and turns to glass on scroll. */
export function initNav() {
  const nav = document.querySelector<HTMLElement>('.dc-nav');
  if (!nav) return;
  const set = () => nav.classList.toggle('is-scrolled', window.scrollY > 12);
  window.addEventListener('scroll', set, { passive: true });
  set();
}

/** Counts [data-count] numbers up from zero the first time they are seen. */
export function initCounters(reduceMotion: boolean) {
  const nodes = document.querySelectorAll<HTMLElement>('[data-count]');
  if (reduceMotion || !nodes.length) return;

  const run = (node: HTMLElement) => {
    const end = parseFloat(node.dataset.count || '0');
    const decimals = parseInt(node.dataset.decimals || '0', 10);
    const duration = 1600;
    const t0 = performance.now();
    const step = (now: number) => {
      const p = Math.min((now - t0) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 4);
      node.textContent = (end * eased).toFixed(decimals);
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        run(entry.target as HTMLElement);
        io.unobserve(entry.target);
      }
    },
    { threshold: 0.6 },
  );
  nodes.forEach((node) => {
    node.textContent = (0).toFixed(parseInt(node.dataset.decimals || '0', 10));
    io.observe(node);
  });
}

/**
 * Looping visuals carry [data-live]. They get .is-live only while on screen,
 * and their CSS animations are paused otherwise, so nothing animates unseen.
 * Videos inside play and pause the same way.
 */
export function initLive(reduceMotion: boolean) {
  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        const node = entry.target as HTMLElement;
        node.classList.toggle('is-live', entry.isIntersecting && !reduceMotion);
        node.querySelectorAll('video').forEach((video) => {
          if (entry.isIntersecting && !reduceMotion) {
            video.play().catch(() => {
              /* autoplay blocked: the poster and controls remain */
            });
          } else {
            video.pause();
          }
        });
      }
    },
    { threshold: 0.2 },
  );
  document.querySelectorAll('[data-live]').forEach((node) => io.observe(node));
}
