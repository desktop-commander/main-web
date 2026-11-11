/**
 * Behavior for individual homepage sections:
 *   - install: the "another MCP client" fold and the copy button
 *   - how it works: which step is in view, and the progress rail
 *   - prompts: category tabs
 *   - FAQ: accordion
 */
import { trackEvent } from '@/lib/analytics/tracking';
import type { AllEvents } from '@/lib/analytics/events';

/** Install: expandable row for other MCP clients, and copy-to-clipboard. */
function initInstall() {
  document.querySelectorAll<HTMLElement>('[data-fold]').forEach((fold) => {
    const button = fold.querySelector<HTMLButtonElement>('.hx-fold__button');
    if (!button) return;
    button.addEventListener('click', () => {
      const open = button.getAttribute('aria-expanded') !== 'true';
      button.setAttribute('aria-expanded', String(open));
      fold.classList.toggle('is-open', open);
      if (open) {
        trackEvent('install_any_client_expanded' as AllEvents, {
          button_location: fold.dataset.foldLocation,
        });
      }
    });
  });

  document.querySelectorAll<HTMLButtonElement>('[data-copy]').forEach((button) => {
    const label = button.querySelector<HTMLElement>('[data-copy-label]');
    const idle = label?.textContent ?? '';
    let timer = 0;
    button.addEventListener('click', async () => {
      const value = button.dataset.copy || '';
      try {
        await navigator.clipboard.writeText(value);
      } catch {
        return; // clipboard unavailable, the URL is still selectable
      }
      button.classList.add('is-copied');
      if (label) label.textContent = 'Copied';
      window.clearTimeout(timer);
      timer = window.setTimeout(() => {
        button.classList.remove('is-copied');
        if (label) label.textContent = idle;
      }, 2500);
      trackEvent('install_cta_clicked' as AllEvents, {
        button_text: 'Copy URL',
        button_location: button.dataset.copyLocation,
        client: 'any_mcp_client',
        destination: value,
      });
    });
  });
}

/** How it works: activate the step crossing the middle of the viewport. */
function initHow() {
  const root = document.querySelector<HTMLElement>('[data-how]');
  if (!root) return;
  const steps = Array.from(root.querySelectorAll<HTMLElement>('[data-how-step]'));
  const screens = Array.from(root.querySelectorAll<HTMLElement>('[data-how-screen]'));
  const progress = root.querySelector<HTMLElement>('[data-how-progress]');
  if (!steps.length) return;

  // Wide: one pinned screen that follows the step in view.
  // Narrow: every step has its own screen, which plays once when first seen.
  const wide = window.matchMedia('(min-width: 901px)');

  let active = 0;
  const activate = (index: number) => {
    if (index === active) return;
    active = index;
    steps.forEach((s, i) => s.classList.toggle('is-active', i === index));
    screens.forEach((s, i) => s.classList.toggle('is-active', i === index));
  };

  const seen = new IntersectionObserver(
    (entries) => {
      if (wide.matches) return;
      for (const entry of entries) {
        if (entry.isIntersecting) entry.target.classList.add('is-active');
      }
    },
    { threshold: 0.45 },
  );
  screens.forEach((screen) => seen.observe(screen));

  let ticking = false;
  const update = () => {
    ticking = false;
    if (!wide.matches) return;
    const mid = window.innerHeight / 2;
    // the last step whose top has passed the middle of the screen
    let index = 0;
    steps.forEach((step, i) => {
      if (step.getBoundingClientRect().top <= mid) index = i;
    });
    activate(index);

    if (progress) {
      const first = steps[0].getBoundingClientRect();
      const last = steps[steps.length - 1].getBoundingClientRect();
      const span = last.top + last.height / 2 - (first.top + first.height / 2);
      const p = span > 0 ? (mid - (first.top + first.height / 2)) / span : 0;
      progress.style.setProperty('--p', Math.max(0, Math.min(1, p)).toFixed(4));
    }
  };
  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(update);
  };

  // Only listen while the section is near the viewport.
  new IntersectionObserver(
    (entries) => {
      const near = entries[entries.length - 1].isIntersecting;
      if (near) {
        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', onScroll, { passive: true });
        update();
      } else {
        window.removeEventListener('scroll', onScroll);
        window.removeEventListener('resize', onScroll);
      }
    },
    { rootMargin: '20% 0px 20% 0px' },
  ).observe(root);
}

/** Prompts: ARIA tabs with a sliding highlight. */
function initPromptTabs() {
  const list = document.querySelector<HTMLElement>('[data-ptabs]');
  if (!list) return;
  const tabs = Array.from(list.querySelectorAll<HTMLButtonElement>('[role="tab"]'));
  const pill = list.querySelector<HTMLElement>('.hx-ptabs__pill');
  const cta = document.querySelector<HTMLElement>('[data-ptabs-cta]');

  const movePill = (tab: HTMLElement) => {
    if (!pill) return;
    pill.style.width = `${tab.offsetWidth}px`;
    pill.style.height = `${tab.offsetHeight}px`;
    pill.style.transform = `translate(${tab.offsetLeft}px, ${tab.offsetTop}px)`;
    pill.classList.add('is-ready');
  };

  const select = (tab: HTMLButtonElement, byUser: boolean) => {
    if (tab.getAttribute('aria-selected') === 'true' && byUser) return;
    tabs.forEach((t) => {
      const on = t === tab;
      t.setAttribute('aria-selected', String(on));
      t.tabIndex = on ? 0 : -1;
      const panel = document.getElementById(t.getAttribute('aria-controls') || '');
      if (panel) panel.hidden = !on;
    });
    movePill(tab);
    if (!byUser) return;

    tab.scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'smooth' });
    trackEvent('prompt_category_clicked' as AllEvents, {
      button_text: tab.dataset.title,
      button_location: 'prompt_library',
      category_name: tab.dataset.title,
      category_tab: tab.dataset.value,
      total_prompts_in_category: Number(tab.dataset.total),
    });
    if (cta?.dataset.evProps) {
      try {
        cta.dataset.evProps = JSON.stringify({
          ...JSON.parse(cta.dataset.evProps),
          current_active_tab: tab.dataset.value,
        });
      } catch {
        /* keep the previous props */
      }
    }
  };

  tabs.forEach((tab, i) => {
    tab.addEventListener('click', () => select(tab, true));
    tab.addEventListener('keydown', (e) => {
      const step =
        e.key === 'ArrowRight' || e.key === 'ArrowDown' ? 1 : e.key === 'ArrowLeft' || e.key === 'ArrowUp' ? -1 : 0;
      let next = -1;
      if (step) next = (i + step + tabs.length) % tabs.length;
      else if (e.key === 'Home') next = 0;
      else if (e.key === 'End') next = tabs.length - 1;
      if (next < 0) return;
      e.preventDefault();
      tabs[next].focus();
      select(tabs[next], true);
    });
  });

  const current = () => tabs.find((t) => t.getAttribute('aria-selected') === 'true') || tabs[0];
  const place = () => movePill(current());
  place();
  document.fonts?.ready.then(place);
  window.addEventListener('resize', place, { passive: true });
}

/** FAQ: one answer open at a time. */
function initFaq() {
  const list = document.querySelector<HTMLElement>('[data-faq]');
  if (!list) return;
  const items = Array.from(list.querySelectorAll<HTMLElement>('.hx-faq__item'));
  const setOpen = (item: HTMLElement, open: boolean) => {
    item.classList.toggle('is-open', open);
    item.querySelector('.hx-faq__q')?.setAttribute('aria-expanded', String(open));
  };
  list.classList.add('is-ready'); // answers collapse only once this is set
  items.forEach((item) => {
    item.querySelector('.hx-faq__q')?.addEventListener('click', () => {
      const open = !item.classList.contains('is-open');
      items.forEach((other) => setOpen(other, false));
      setOpen(item, open);
    });
  });
  if (items[0]) setOpen(items[0], true);
}

export function initSections(_reduceMotion: boolean) {
  initInstall();
  initHow();
  initPromptTabs();
  initFaq();
}
