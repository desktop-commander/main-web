/**
 * Plays the example sessions on the hero stage (HeroStage.astro).
 *
 * One session = prompt typed in the chat, tool calls sent over the wire, the
 * terminal running them, results returning, the answer, then a short hold.
 * Sessions advance on their own, pause when the stage is off screen or the
 * tab is hidden, and can be picked or paused by the visitor.
 *
 * The very first session opens with its prompt already sent, so the first
 * thing a visitor sees is Desktop Commander at work rather than typing.
 *
 * With prefers-reduced-motion the stage does not play: it shows the finished
 * state of a session and the buttons switch between finished states.
 */
import { SCENARIOS, type Scenario, type TermLine, type ToolStep } from './scenarios';

const CLIENT_NAME: Record<Scenario['client'], string> = { chatgpt: 'ChatGPT', claude: 'Claude' };

/** All timings in ms. duration() below mirrors play(), keep them in step. */
const T = {
  start: 500,
  opening: 1300, // first session: wait for the hero entrance to finish
  typeChar: 26,
  beforeSend: 420,
  afterSend: 200,
  thinking: 760,
  toolIn: 260,
  wire: 430,
  hit: 190,
  cmdChar: 13,
  afterCmd: 170,
  line: 120,
  afterRun: 240,
  toolDone: 300,
  word: 36,
  beforeChips: 260,
  chip: 150,
  hold: 3800,
};

const linesTime = (lines: TermLine[]) =>
  lines.reduce((t, l) => t + (l.k === 'cmd' ? l.s.length * T.cmdChar + T.afterCmd : T.line), 0);

const stepTime = (s: ToolStep) =>
  T.toolIn + T.wire + T.hit + linesTime(s.term) + T.afterRun + T.wire + T.hit + T.toolDone;

const duration = (s: Scenario, opening: boolean) =>
  (opening ? T.opening : T.start + s.prompt.length * T.typeChar + T.beforeSend + T.afterSend) +
  T.thinking +
  s.steps.reduce((t, st) => t + stepTime(st), 0) +
  s.answer.split(' ').length * T.word +
  T.beforeChips +
  s.chips.length * T.chip +
  T.hold;

const el = <K extends keyof HTMLElementTagNameMap>(tag: K, className?: string, text?: string) => {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
};

const clamp = (v: number, min: number, max: number) => Math.max(min, Math.min(max, v));

export function initStage(reduceMotion: boolean) {
  const stage = document.querySelector<HTMLElement>('[data-stage]');
  if (!stage) return;

  const grid = stage.querySelector<HTMLElement>('.hx-stage__grid')!;
  const chat = stage.querySelector<HTMLElement>('[data-chat]')!;
  const term = stage.querySelector<HTMLElement>('[data-term]')!;
  const result = stage.querySelector<HTMLElement>('[data-result]')!;
  const composer = stage.querySelector<HTMLElement>('[data-composer]')!;
  const composerText = stage.querySelector<HTMLElement>('[data-composer-text]')!;
  const pulse = stage.querySelector<HTMLElement>('[data-pulse]')!;
  const core = stage.querySelector<HTMLElement>('[data-core]')!;
  const deviceName = stage.querySelector<HTMLElement>('[data-device]')!;
  const clientName = stage.querySelector<HTMLElement>('[data-client-name]')!;
  const tabs = Array.from(stage.querySelectorAll<HTMLButtonElement>('[data-tab]'));
  const toggle = stage.querySelector<HTMLButtonElement>('[data-stage-toggle]');
  const chatWin = stage.querySelector<HTMLElement>('.hx-win--chat')!;
  const machineWin = stage.querySelector<HTMLElement>('.hx-win--machine')!;
  const wide = window.matchMedia('(min-width: 981px)');

  // ---- session clock ----
  // `elapsed` only advances while the stage is running (on screen, tab visible,
  // not paused). A session is a chain of wait() calls; `due` is where that
  // chain has got to on the same clock. Waiting against a running total rather
  // than frame by frame keeps a session on time on a slow device: a frame that
  // took long simply plays several steps at once.
  type Waiter = { at: number; done: () => void };
  const waiters = new Set<Waiter>();
  let visible = false;
  let userPaused = false;
  let elapsed = 0;
  let due = 0;
  let last = performance.now();
  let current = 0;
  let total = duration(SCENARIOS[0], true);

  // pointer position over the hero, eased, for the slight parallax of the windows
  const look = { x: 0, y: 0, tx: 0, ty: 0 };

  const running = () => visible && !userPaused && !document.hidden;

  const wait = (ms: number) =>
    new Promise<void>((done) => {
      due += ms;
      if (due <= elapsed) done();
      else waiters.add({ at: due, done });
    });

  const frame = (now: number) => {
    // Real elapsed time, so a slow device drops frames instead of playing in
    // slow motion. The cap only guards against one huge step after a stall.
    const dt = Math.min(now - last, 250);
    last = now;
    if (running()) {
      elapsed += dt;
      for (const w of waiters) {
        if (elapsed >= w.at) {
          waiters.delete(w);
          w.done();
        }
      }
      tabs[current]?.style.setProperty('--p', Math.min(elapsed / total, 1).toFixed(4));
    }
    if (Math.abs(look.tx - look.x) > 0.001 || Math.abs(look.ty - look.y) > 0.001) {
      look.x += (look.tx - look.x) * 0.07;
      look.y += (look.ty - look.y) * 0.07;
      grid.style.setProperty('--look-x', look.x.toFixed(4));
      grid.style.setProperty('--look-y', look.y.toFixed(4));
    }
    requestAnimationFrame(frame);
  };

  // ---- drawing helpers ----

  /** Keeps the newest content in view, like a chat or a terminal does. */
  const follow = (box: HTMLElement) => {
    const overflow = box.scrollHeight - box.clientHeight;
    box.scrollTop = Math.max(0, overflow);
    box.classList.toggle('is-scrolled', overflow > 0);
  };

  const termLine = (line: TermLine, ps1: string) => {
    const row = el('div', 'hx-term__line');
    row.dataset.k = line.k;
    if (line.k === 'cmd') row.append(el('span', 'hx-term__ps1', ps1));
    row.append(document.createTextNode(line.s));
    return row;
  };

  const toolRow = (step: ToolStep, done: boolean) => {
    const row = el('div', done ? 'hx-tool is-done' : 'hx-tool');
    row.append(
      el('i', 'hx-tool__state'),
      el('span', 'hx-tool__name', step.tool),
      el('span', 'hx-tool__arg', step.arg),
      el('span', 'hx-tool__res', step.result),
    );
    return row;
  };

  const toolsBox = (count: number) => {
    const box = el('div', 'hx-tools');
    const head = el('div', 'hx-tools__head');
    const img = el('img');
    img.src = '/favicon-32x32.png';
    img.alt = '';
    img.width = 16;
    img.height = 16;
    head.append(img, document.createTextNode('Desktop Commander'), el('span', '', `${count} tool calls`));
    box.append(head);
    return box;
  };

  const chips = (s: Scenario, on: boolean) => {
    result.replaceChildren(
      ...s.chips.map((c) => {
        const chip = el('div', on ? 'hx-result__chip is-on' : 'hx-result__chip');
        chip.append(el('span', 'hx-result__v', c.v), el('span', 'hx-result__l', c.l));
        return chip;
      }),
    );
  };

  const setChrome = (s: Scenario, index: number) => {
    stage.dataset.client = s.client;
    clientName.textContent = CLIENT_NAME[s.client];
    deviceName.textContent = s.device;
    tabs.forEach((t, i) => {
      t.setAttribute('aria-pressed', i === index ? 'true' : 'false');
      t.style.setProperty('--p', '0');
    });
  };

  /** Finished state of a session, used without motion and as the no-JS markup. */
  const renderFinal = (index: number) => {
    const s = SCENARIOS[index];
    current = index;
    setChrome(s, index);
    composer.classList.remove('is-typing', 'is-ready', 'is-sent');
    composerText.textContent = '';
    const bot = el('div', 'hx-msg hx-msg--bot');
    const box = toolsBox(s.steps.length);
    s.steps.forEach((st) => box.append(toolRow(st, true)));
    bot.append(box, el('p', 'hx-answer', s.answer));
    chat.replaceChildren(el('div', 'hx-msg hx-msg--user', s.prompt), bot);
    term.replaceChildren(...s.steps.flatMap((st) => st.term.map((l) => termLine(l, s.ps1))));
    chips(s, true);
    tabs[index]?.style.setProperty('--p', '1');
    follow(chat);
    follow(term);
  };

  const flash = (node: HTMLElement, className: string) => {
    node.classList.remove(className);
    void node.offsetWidth; // restart the animation
    node.classList.add(className);
  };

  /** A signal crosses the wire: the core rings, then the receiving window lights up. */
  const sendPulse = async (dir: 'out' | 'back') => {
    pulse.classList.remove('is-out', 'is-back');
    flash(pulse, dir === 'out' ? 'is-out' : 'is-back');
    await wait(T.wire * 0.5);
    flash(core, 'is-hit');
    await wait(T.wire * 0.5);
    flash(dir === 'out' ? machineWin : chatWin, 'is-ping');
    await wait(T.hit);
  };

  /** A prompt with a blinking cursor: the terminal waiting for its next command. */
  const idlePrompt = (ps1: string) => {
    const row = el('div', 'hx-term__line');
    row.dataset.k = 'cmd';
    row.dataset.idle = '';
    row.append(el('span', 'hx-term__ps1', ps1), document.createTextNode(''), el('span', 'hx-term__cursor'));
    term.append(row);
    follow(term);
  };

  /** Types a command into the waiting prompt, then leaves it as a normal line. */
  const typeCommand = async (line: TermLine, ps1: string) => {
    let row = term.querySelector<HTMLElement>('[data-idle]');
    if (!row) {
      idlePrompt(ps1);
      row = term.querySelector<HTMLElement>('[data-idle]')!;
    }
    delete row.dataset.idle;
    const text = row.childNodes[1] as Text;
    for (const ch of line.s) {
      text.data += ch;
      await wait(T.cmdChar);
    }
    await wait(T.afterCmd);
    row.querySelector('.hx-term__cursor')?.remove();
  };

  // ---- one session ----
  const play = async (index: number, opening = false) => {
    const s = SCENARIOS[index];
    waiters.clear(); // drops whatever the previous session was waiting on
    current = index;
    elapsed = 0;
    due = 0;
    total = duration(s, opening);

    setChrome(s, index);
    chat.replaceChildren();
    term.replaceChildren();
    follow(chat);
    idlePrompt(s.ps1);
    chips(s, false);
    composer.classList.remove('is-typing', 'is-ready', 'is-sent');
    composerText.textContent = '';

    if (opening) {
      await wait(T.opening);
      chat.append(el('div', 'hx-msg hx-msg--user', s.prompt));
    } else {
      await wait(T.start);
      // the prompt is typed into the composer, then sent
      composer.classList.add('is-typing');
      for (const ch of s.prompt) {
        composerText.textContent += ch;
        await wait(T.typeChar);
      }
      composer.classList.add('is-ready');
      await wait(T.beforeSend);
      composer.classList.add('is-sent');
      composer.classList.remove('is-typing', 'is-ready');
      composerText.textContent = '';
      chat.append(el('div', 'hx-msg hx-msg--user', s.prompt));
      await wait(T.afterSend);
      composer.classList.remove('is-sent');
    }

    const bot = el('div', 'hx-msg hx-msg--bot');
    const thinking = el('span', 'hx-thinking');
    thinking.append(el('i'), el('i'), el('i'));
    bot.append(thinking);
    chat.append(bot);
    follow(chat);
    await wait(T.thinking);

    // tool calls go to the machine and come back
    const box = toolsBox(s.steps.length);
    thinking.replaceWith(box);
    for (const step of s.steps) {
      const row = toolRow(step, false);
      box.append(row);
      follow(chat);
      await wait(T.toolIn);
      await sendPulse('out');
      for (const line of step.term) {
        if (line.k === 'cmd') {
          await typeCommand(line, s.ps1);
        } else {
          term.querySelector('[data-idle]')?.remove();
          term.append(termLine(line, s.ps1));
          follow(term);
          await wait(T.line);
        }
      }
      idlePrompt(s.ps1);
      await wait(T.afterRun);
      await sendPulse('back');
      row.classList.add('is-done');
      await wait(T.toolDone);
    }

    // the answer streams in
    const answer = el('p', 'hx-answer');
    bot.append(answer);
    for (const word of s.answer.split(' ')) {
      answer.append(el('span', 'hx-wd', word), document.createTextNode(' '));
      follow(chat);
      await wait(T.word);
    }
    await wait(T.beforeChips);

    const chipEls = Array.from(result.children) as HTMLElement[];
    for (const chip of chipEls) {
      chip.classList.add('is-on');
      await wait(T.chip);
    }

    await wait(T.hold);
    void play((index + 1) % SCENARIOS.length);
  };

  // ---- controls ----
  tabs.forEach((tab, i) =>
    tab.addEventListener('click', () => {
      if (reduceMotion) renderFinal(i);
      else void play(i);
    }),
  );

  if (reduceMotion) {
    toggle?.remove();
    follow(chat);
    follow(term);
    return;
  }

  toggle?.addEventListener('click', () => {
    userPaused = !userPaused;
    toggle.setAttribute('aria-pressed', String(userPaused));
    toggle.setAttribute('aria-label', userPaused ? 'Play the demo' : 'Pause the demo');
  });

  new IntersectionObserver(
    (entries) => {
      visible = entries[entries.length - 1].isIntersecting;
    },
    { threshold: 0.15 },
  ).observe(stage);

  // The windows start tilted back and settle flat over the first half screen of scroll.
  let ticking = false;
  const setTilt = () => {
    ticking = false;
    const p = Math.min(window.scrollY / (window.innerHeight * 0.55), 1);
    stage.style.setProperty('--tilt', wide.matches ? (1 - p * (2 - p)).toFixed(4) : '0');
  };
  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(setTilt);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });
  setTilt();

  // The windows lean a little toward the pointer (wide screens with a mouse only).
  if (window.matchMedia('(hover: hover)').matches) {
    const hero = stage.closest<HTMLElement>('[data-hero]') ?? stage;
    hero.addEventListener(
      'pointermove',
      (e) => {
        if (e.pointerType === 'touch' || !wide.matches) return;
        const r = stage.getBoundingClientRect();
        look.tx = clamp(((e.clientX - r.left) / r.width - 0.5) * 2, -1, 1);
        look.ty = clamp(((e.clientY - r.top) / r.height - 0.5) * 2, -1, 1);
      },
      { passive: true },
    );
    hero.addEventListener('pointerleave', () => {
      look.tx = 0;
      look.ty = 0;
    });
  }

  requestAnimationFrame((now) => {
    last = now;
    requestAnimationFrame(frame);
  });
  void play(0, true);
}
