/**
 * Analytics for the welcome page (post-install page, Remote MCP pitch).
 *
 * Funnel, all in PostHog (and GA4 when consented), all tagged
 * experiment = 'lp-welcome-remote':
 *
 *   page_view            once, with welcome_page and mcp_client
 *   section_view         first time each section is half in view:
 *                        hero, want_more, uses, how_it_works, faq, final
 *   prompt_clicked       a first prompt was copied (home/scripts/sections.ts)
 *   install_cta_clicked  Add to ChatGPT / Add to Claude (client: chatgpt|claude)
 *   remote_mcp_cta_clicked  sign-in link and closing button (to the platform)
 *   prompt_library_cta_clicked  More prompts / Browse prompts
 *   faq_opened           a question was opened (question, index)
 *   scroll_depth         25/50/75/90 % (home/scripts/analytics.ts)
 *
 * Clicks are sent by [data-ev] (home/scripts/analytics.ts). This script adds
 * the page-level events and registers session properties, so every event in
 * this session, clicks included, carries:
 *   welcome_page        'welcome' or 'welcome_v2', from the URL
 *   welcome_experiment  'lp-welcome-remote'
 *   welcome_mcp_client  utm_source from the installer (the client the local
 *                       MCP was installed into), or 'unknown'
 *
 * PostHog only starts after Cookiebot statistics consent (PostHogInit.tsx).
 * Page-level events wait for it, up to two minutes, so a visitor who accepts
 * the banner a little later is still counted; without consent nothing is sent.
 */
import { trackEvent } from '@/lib/analytics/tracking';
import type { AllEvents, EventProperties } from '@/lib/analytics/events';
import { WELCOME_EXPERIMENT } from '../../data/welcome';

type PostHogLike = {
  __loaded?: boolean;
  register_for_session?: (props: Record<string, unknown>) => void;
};

const page = window.location.pathname.replace(/\//g, '').replace(/-/g, '_') || 'welcome';
const mcpClient = new URLSearchParams(window.location.search).get('utm_source') || 'unknown';
const context = { welcome_page: page, experiment: WELCOME_EXPERIMENT, mcp_client: mcpClient };

const posthog = () => (window as unknown as { posthog?: PostHogLike }).posthog;
const ready = () => Boolean(posthog()?.__loaded);

const queue: Array<[AllEvents, EventProperties]> = [];
let registered = false;

const flush = () => {
  if (!registered) {
    posthog()?.register_for_session?.({
      welcome_page: page,
      welcome_experiment: WELCOME_EXPERIMENT,
      welcome_mcp_client: mcpClient,
    });
    registered = true;
  }
  while (queue.length) {
    const [name, props] = queue.shift()!;
    trackEvent(name, props);
  }
};

/** Send now if PostHog is up, otherwise hold until it is. */
const send = (name: AllEvents, props: EventProperties = {}) => {
  queue.push([name, { ...context, ...props }]);
  if (ready()) flush();
};

const started = Date.now();
const wait = window.setInterval(() => {
  if (ready()) {
    window.clearInterval(wait);
    flush();
  } else if (Date.now() - started > 120_000) {
    window.clearInterval(wait);
  }
}, 500);

send('page_view' as AllEvents, {
  page_title: document.title,
  page_url: window.location.href,
  referrer: document.referrer || undefined,
});

/* Sections reached */
const sections: Array<[string, string]> = [
  ['hero', '.hx-welcome-hero'],
  ['want_more', '#more'],
  ['uses', '#uses'],
  ['how_it_works', '#how-it-works'],
  ['faq', '#faq'],
  ['final', '.hx-final'],
];
const seen = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      const section = (entry.target as HTMLElement).dataset.welcomeSection;
      send('section_view' as AllEvents, { section });
      seen.unobserve(entry.target);
    }
  },
  { threshold: 0.4 },
);
for (const [name, selector] of sections) {
  const el = document.querySelector<HTMLElement>(selector);
  if (!el) continue;
  el.dataset.welcomeSection = name;
  seen.observe(el);
}

/* FAQ questions opened (the toggle itself lives in home/scripts/sections.ts) */
document.querySelectorAll<HTMLButtonElement>('.hx-faq__q').forEach((button, index) => {
  button.addEventListener('click', () => {
    // sections.ts flips aria-expanded on the same click; read it afterwards
    window.setTimeout(() => {
      if (button.getAttribute('aria-expanded') !== 'true') return;
      send('faq_opened' as AllEvents, { question: button.textContent?.trim() || '', index });
    }, 0);
  });
});
