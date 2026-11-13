/**
 * The prompt at the bottom of the hero window (ChatWindow.astro).
 *
 * The example prompts are typed one after another: type, hold, erase, next.
 * Where sending opens the prompt in the client (ChatGPT, Claude), the send
 * link, its label and the destination in its analytics event follow the
 * prompt that is showing, so a click always sends what the visitor sees.
 *
 * The page arrives with the first prompt written out, and it stays like that
 * for prefers-reduced-motion. Typing waits while the window is off screen or
 * the tab is in the background.
 */
const TYPE_MS = 38;
const HOLD_MS = 1600;
const ERASE_MS = 14;

export function initComposer(reduceMotion: boolean) {
  document.querySelectorAll<HTMLElement>('[data-composer]').forEach((root) => {
    const field = root.querySelector<HTMLElement>('[data-composer-text]');
    const send = root.querySelector<HTMLAnchorElement>('[data-composer-send]');
    if (!field) return;

    let prompts: string[] = [];
    try {
      prompts = JSON.parse(root.dataset.prompts || '[]');
    } catch {
      return;
    }
    if (prompts.length < 2 || reduceMotion) return;

    const base = root.dataset.sendBase;
    const target = root.dataset.sendTarget;

    /** Points the send link at a prompt. Links with one fixed destination are left alone. */
    const point = (prompt: string) => {
      if (!send || !base) return;
      const href = `${base}${encodeURIComponent(prompt)}`;
      send.href = href;
      send.setAttribute('aria-label', `Send "${prompt}" to ${target}`);
      try {
        send.dataset.evProps = JSON.stringify({
          ...JSON.parse(send.dataset.evProps || '{}'),
          destination: href,
        });
      } catch {
        /* keep the previous properties */
      }
    };

    let index = 0;
    let seen = true;
    let held: (() => void) | null = null;

    const awake = () => seen && !document.hidden;
    /** Runs the next step after a pause, or keeps it for when the window is seen again. */
    const later = (step: () => void, ms: number) => {
      window.setTimeout(() => {
        if (awake()) step();
        else held = step;
      }, ms);
    };
    const resume = () => {
      if (!held || !awake()) return;
      const step = held;
      held = null;
      step();
    };

    const type = (count: number) => {
      const prompt = prompts[index];
      field.textContent = prompt.slice(0, count);
      if (count < prompt.length) later(() => type(count + 1), TYPE_MS);
      else later(() => erase(prompt.length), HOLD_MS);
    };
    const erase = (count: number) => {
      field.textContent = prompts[index].slice(0, count);
      if (count > 0) {
        later(() => erase(count - 1), ERASE_MS);
        return;
      }
      index = (index + 1) % prompts.length;
      point(prompts[index]);
      type(0);
    };

    new IntersectionObserver((entries) => {
      seen = entries[entries.length - 1].isIntersecting;
      resume();
    }).observe(root);
    document.addEventListener('visibilitychange', resume);

    // the first prompt is already on the page: hold it, then carry on
    later(() => erase(prompts[0].length), HOLD_MS);
  });
}
