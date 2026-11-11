/**
 * Plays the hero hub (HeroHub.astro): AI clients on top, Desktop Commander in
 * the middle, your computer below.
 *
 * One request = a prompt is typed above a client, a signal runs down its wire
 * to Desktop Commander, a tool call appears next to the core, the signal goes
 * on to the part of the computer that does the work (files, terminal or
 * processes), that part shows the work, and the result travels back up to the
 * client, which answers. Then the next client takes its turn.
 *
 * Requests advance on their own, pause while the hub is off screen or the tab
 * is hidden, and can be paused by the visitor. Resting the pointer on a
 * client (or focusing it) plays that client's request straight away.
 *
 * The wires are measured from the real layout, so they meet the clients, the
 * core and the computer at any width.
 *
 * With prefers-reduced-motion nothing plays: the hub shows the finished state
 * of a request, and pointing at a client switches to that client's request.
 */
import {
  HUB_FILES,
  HUB_FILE_TOTAL,
  HUB_PROCESSES,
  HUB_REQUESTS,
  HUB_TERMINAL,
  type HubPart,
  type HubRequest,
} from './hub-scenarios';

/** All timings in ms. */
const T = {
  firstDraw: 1250, // wires start drawing this long after the page began loading
  firstSend: 2700, // and the first request leaves at this point
  swap: 230, // the bubble moves to the next client
  start: 120,
  typeChar: 21,
  beforeSend: 260,
  toCore: 560,
  think: 250,
  toPart: 480,
  afterWork: 360,
  relay: 110,
  hold: 1800, // the answer stays up
  dwell: 150, // the pointer rests on a client this long before it takes over
  jitter: 1500, // how often the process bars move a little
};

const PARTS: HubPart[] = ['files', 'terminal', 'processes'];

/**
 * Lengths in px of the dashes that make up a signal, all ending at its head:
 * a wide soft bloom, then a long faint tail, a shorter brighter one, and the
 * white tip (see .hx-hub__comet in home-hub.css).
 */
const TAIL = [54, 120, 62, 20];

const clamp = (v: number, min: number, max: number) => Math.max(min, Math.min(max, v));
const ease = (p: number) => 0.5 - 0.5 * Math.cos(Math.PI * p);
const round = (v: number) => Math.round(v * 10) / 10;

const el = <K extends keyof HTMLElementTagNameMap>(tag: K, className?: string, text?: string) => {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
};

/** Restarts a CSS animation that is tied to a class. */
const flash = (node: HTMLElement, className: string) => {
  node.classList.remove(className);
  void node.offsetWidth;
  node.classList.add(className);
};

type Wire = {
  group: SVGGElement;
  paths: SVGPathElement[];
  line: SVGPathElement;
  ports: SVGCircleElement[];
};

export function initHub(reduceMotion: boolean) {
  const hub = document.querySelector<HTMLElement>('[data-hub]');
  if (!hub) return;

  const get = <E extends Element>(selector: string) => hub.querySelector<E>(selector)!;
  const plane = get<HTMLElement>('[data-hub-plane]');
  const say = get<HTMLElement>('.hx-hub__say');
  const bubble = get<HTMLElement>('[data-bubble]');
  const question = get<HTMLElement>('[data-q]');
  const answer = get<HTMLElement>('[data-a]');
  const tiles = Array.from(hub.querySelectorAll<HTMLElement>('[data-hub-client]'));
  const core = get<HTMLElement>('[data-core]');
  const call = get<HTMLElement>('[data-call]');
  const toolName = get<HTMLElement>('[data-tool]');
  const detail = get<HTMLElement>('[data-detail]');
  const machine = get<HTMLElement>('[data-machine]');
  const parts = PARTS.map((p) => get<HTMLElement>(`[data-part="${p}"]`));
  const tabs = parts.map((p) => p.querySelector<HTMLElement>('.hx-hub__tab')!);
  const files = get<HTMLElement>('[data-files]');
  const term = get<HTMLElement>('[data-term]');
  const procs = Array.from(hub.querySelectorAll<HTMLElement>('.hx-hub__proc'));
  const svg = get<SVGSVGElement>('[data-wires]');
  const comet = get<SVGGElement>('[data-comet]');
  const cometPaths = Array.from(comet.querySelectorAll('path'));
  const cometDots = Array.from(comet.querySelectorAll('circle'));
  const toggle = hub.querySelector<HTMLButtonElement>('[data-hub-toggle]');
  const wide = window.matchMedia('(min-width: 981px)');

  const wire = (id: string): Wire => {
    const group = svg.querySelector<SVGGElement>(`[data-wire="${id}"]`)!;
    return {
      group,
      paths: Array.from(group.querySelectorAll('path')),
      line: group.querySelector<SVGPathElement>('.hx-hub__wire-line')!,
      ports: Array.from(group.querySelectorAll('circle')),
    };
  };
  const clientWires = tiles.map((_, i) => wire(`c${i}`));
  const partWires = parts.map((_, i) => wire(`p${i}`));

  let current = 0; // request (and client) on show
  let busy = false; // its signal is still on the way

  // ---- geometry ----

  /** Position of a node inside the plane in layout pixels, which transforms do not affect. */
  const box = (node: HTMLElement) => {
    let x = 0;
    let y = 0;
    let n: HTMLElement | null = node;
    while (n && n !== plane) {
      x += n.offsetLeft;
      y += n.offsetTop;
      const parent = n.offsetParent as HTMLElement | null;
      if (parent && parent !== plane) {
        x += parent.clientLeft;
        y += parent.clientTop;
      }
      n = parent;
    }
    return { x, y, w: node.offsetWidth, h: node.offsetHeight };
  };

  /** A wire that leaves and arrives vertically, with a port at each end. */
  const route = (w: Wire, x0: number, y0: number, x1: number, y1: number) => {
    const k = (y1 - y0) * 0.62;
    const d = `M${round(x0)} ${round(y0)}C${round(x0)} ${round(y0 + k)} ${round(x1)} ${round(y1 - k)} ${round(x1)} ${round(y1)}`;
    w.paths.forEach((p) => p.setAttribute('d', d));
    w.ports[0].setAttribute('cx', String(round(x0)));
    w.ports[0].setAttribute('cy', String(round(y0)));
    w.ports[1].setAttribute('cx', String(round(x1)));
    w.ports[1].setAttribute('cy', String(round(y1)));
  };

  /** The bubble sits above the client on show, kept inside the hub. */
  const placeBubble = () => {
    const tile = box(tiles[current]);
    const center = tile.x + tile.w / 2;
    const width = bubble.offsetWidth;
    const left = clamp(center - width / 2, 0, Math.max(0, plane.offsetWidth - width));
    say.style.setProperty('--x', `${round(left)}px`);
    say.style.setProperty('--tail-x', `${round(center)}px`);
  };

  const layout = () => {
    const width = plane.offsetWidth;
    const height = plane.offsetHeight;
    if (!width || !height) return;
    svg.setAttribute('viewBox', `0 0 ${width} ${height}`);

    const c = box(core);
    const cx = c.x + c.w / 2;
    const top = box(machine).y;
    // the wires spread a little where they meet the core, like pins on a chip
    const stepIn = c.w * 0.19;
    const stepOut = c.w * 0.25;

    tiles.forEach((tile, i) => {
      const t = box(tile);
      route(clientWires[i], t.x + t.w / 2, t.y + t.h, cx + (i - (tiles.length - 1) / 2) * stepIn, c.y);
    });
    tabs.forEach((tab, i) => {
      const t = box(tab);
      route(partWires[i], cx + (i - (tabs.length - 1) / 2) * stepOut, c.y + c.h, t.x + t.w / 2, top);
    });

    placeBubble();
    hub.classList.add('is-wired');
  };

  // ---- state of the pieces ----

  const setClient = (index: number) => {
    current = index;
    tiles.forEach((tile, i) => {
      tile.classList.toggle('is-active', i === index);
      tile.classList.remove('is-done');
    });
  };

  /** Lights the wires a request uses: client to core, core to part. -1 for none. */
  const setRoute = (client: number, part: number) => {
    clientWires.forEach((w, i) => w.group.classList.toggle('is-on', i === client));
    partWires.forEach((w, i) => w.group.classList.toggle('is-on', i === part));
  };

  /** Which part of the computer is working, and whether the others step back. */
  const setPart = (part: number, working: boolean) => {
    parts.forEach((p, i) => p.classList.toggle('is-on', i === part));
    machine.classList.toggle('is-busy', working);
    if (part >= 0) machine.dataset.show = PARTS[part];
  };

  /**
   * Puts a request in the bubble. The swap happens with transitions off, so
   * the previous answer does not cross-fade into the new question.
   */
  const setBubble = (r: HubRequest, typed: boolean) => {
    bubble.classList.add('is-still');
    bubble.dataset.state = 'ask';
    answer.textContent = r.answer;
    if (typed) question.replaceChildren(...Array.from(r.prompt, (ch) => el('span', 'hx-hub__ch', ch)));
    else question.textContent = r.prompt;
    placeBubble();
    void bubble.offsetWidth;
    bubble.classList.remove('is-still');
  };

  // ---- the computer ----

  const fileRow = (kind: 'file' | 'folder' | 'path', name: string, i: number, count?: number) => {
    const row = el('li', 'hx-hub__row');
    row.dataset.kind = kind;
    row.style.setProperty('--i', String(i));
    row.append(el('span', 'hx-hub__row-name', name));
    if (count !== undefined) row.append(el('b', '', String(count)));
    return row;
  };
  const showLoose = () => {
    files.dataset.view = 'loose';
    files.replaceChildren(...HUB_FILES.loose.map((name, i) => fileRow('file', name, i)));
  };
  const showFolders = (counted: boolean) => {
    files.dataset.view = 'folders';
    files.replaceChildren(
      ...HUB_FILES.folders.map((f, i) => fileRow('folder', f.name, i, counted ? f.count : 0)),
    );
  };
  const showFound = () => {
    const { path, files: names, match } = HUB_FILES.found;
    files.dataset.view = 'found';
    files.replaceChildren(
      fileRow('path', path, 0),
      ...names.map((name, i) => {
        const row = fileRow('file', name, i + 1);
        if (i === match) row.dataset.match = '';
        else row.dataset.dim = '';
        return row;
      }),
    );
  };

  const termLine = (k: string, s: string) => {
    const row = el('div', 'hx-term__line', s);
    row.dataset.k = k;
    return row;
  };
  /** A prompt with a blinking cursor: the terminal waiting for its command. */
  const termIdle = () => {
    const row = el('div', 'hx-term__line');
    row.dataset.k = 'cmd';
    row.append(
      el('span', 'hx-term__ps1', HUB_TERMINAL.ps1),
      document.createTextNode(''),
      el('span', 'hx-term__cursor'),
    );
    term.replaceChildren(row);
  };
  const termDone = () => {
    const cmd = el('div', 'hx-term__line');
    cmd.dataset.k = 'cmd';
    cmd.append(el('span', 'hx-term__ps1', HUB_TERMINAL.ps1), document.createTextNode(HUB_TERMINAL.cmd));
    term.replaceChildren(cmd, ...HUB_TERMINAL.lines.map((l) => termLine(l.k, l.s)));
  };

  const setProc = (row: HTMLElement, cpu: number) => {
    row.style.setProperty('--v', (cpu / 100).toFixed(3));
    row.querySelector('b')!.textContent = `${Math.round(cpu)}%`;
  };
  let listing = false; // the process list is being read, leave the bars alone
  /** The machine is alive: the bars move a little while nothing else happens. */
  const jitter = () => {
    if (listing) return;
    procs.forEach((row, i) => {
      const base = HUB_PROCESSES[i].cpu;
      setProc(row, clamp(base + (Math.random() - 0.5) * Math.max(3, base * 0.14), 1, 99));
    });
  };

  // ---- session clock ----
  // `elapsed` only advances while the hub is running (on screen, tab visible,
  // not paused). A request is a chain of wait() and tween() calls; `due` is
  // where that chain has got to on the same clock. Waiting against a running
  // total rather than frame by frame keeps a request on time on a slow device.
  type Waiter = { at: number; done: () => void };
  type Tween = { from: number; to: number; step: (p: number) => void; done: () => void };
  const waiters = new Set<Waiter>();
  const tweens = new Set<Tween>();
  let visible = false;
  let userPaused = false;
  let elapsed = 0;
  let due = 0;
  let idle = 0;
  let last = 0;
  let raf = 0;

  // pointer position over the hero, eased, for the slight lean of the plane
  const look = { x: 0, y: 0, tx: 0, ty: 0 };

  const running = () => visible && !userPaused && !document.hidden;

  const wait = (ms: number) =>
    new Promise<void>((done) => {
      due += ms;
      if (due <= elapsed) done();
      else waiters.add({ at: due, done });
    });

  /** Calls step with 0 to 1 over `ms`, on the same clock. */
  const tween = (ms: number, step: (p: number) => void) =>
    new Promise<void>((done) => {
      const from = due;
      due += ms;
      tweens.add({ from, to: due, step, done });
    });

  const frame = (now: number) => {
    raf = 0;
    const dt = Math.min(now - last, 250);
    last = now;
    if (running()) {
      elapsed += dt;
      for (const t of tweens) {
        if (elapsed < t.from) continue;
        const p = Math.min((elapsed - t.from) / (t.to - t.from), 1);
        t.step(p);
        if (p >= 1) {
          tweens.delete(t);
          t.done();
        }
      }
      for (const w of waiters) {
        if (elapsed >= w.at) {
          waiters.delete(w);
          w.done();
        }
      }
      idle += dt;
      if (idle >= T.jitter) {
        idle = 0;
        jitter();
      }
    }
    const leaning = Math.abs(look.tx - look.x) > 0.001 || Math.abs(look.ty - look.y) > 0.001;
    if (leaning) {
      look.x += (look.tx - look.x) * 0.07;
      look.y += (look.ty - look.y) * 0.07;
      plane.style.setProperty('--look-x', look.x.toFixed(4));
      plane.style.setProperty('--look-y', look.y.toFixed(4));
    }
    if (running() || leaning) raf = requestAnimationFrame(frame);
  };

  /** Starts the frame loop if it is not going. It stops by itself when there is nothing to do. */
  const kick = () => {
    if (raf) return;
    last = performance.now();
    raf = requestAnimationFrame(frame);
  };

  // ---- the signal ----

  /** Sends the signal along a wire: "out" follows the wire, "back" returns along it. */
  const send = (w: Wire, dir: 'out' | 'back', ms: number) => {
    const d = w.line.getAttribute('d') || '';
    const length = d ? w.line.getTotalLength() : 0;
    if (!length) return wait(ms); // not measured yet: keep the timing, skip the drawing
    cometPaths.forEach((p, k) => {
      p.setAttribute('d', d);
      p.style.strokeDasharray = `${TAIL[k]} ${length + TAIL[k] * 2 + 20}`;
    });
    comet.dataset.dir = dir;
    return tween(ms, (p) => {
      const travelled = ease(p) * length;
      const at = dir === 'out' ? travelled : length - travelled;
      // each dash ends at the head and trails behind it
      cometPaths.forEach((path, k) => {
        path.style.strokeDashoffset = String(round(dir === 'out' ? TAIL[k] - travelled : -at));
      });
      const point = w.line.getPointAtLength(at);
      cometDots.forEach((dot) => {
        dot.setAttribute('cx', String(round(point.x)));
        dot.setAttribute('cy', String(round(point.y)));
      });
      comet.style.opacity = String(clamp(Math.min(p * 7, (1 - p) * 5), 0, 1));
    });
  };

  const hitCore = (dir: 'out' | 'back') => {
    core.dataset.dir = dir;
    flash(core, 'is-hit');
  };

  // ---- what each request does on the computer ----
  // start(): the part as it is before the work. run(): the work, animated.
  // finish(): the part once the work is done (also used without motion).
  type Action = { start: () => void; run: () => Promise<void>; finish: () => void };
  const ACTIONS: Record<HubRequest['action'], Action> = {
    // loose files leave one by one, folders take their place and fill up
    sort: {
      start: () => {
        if (files.dataset.view !== 'loose') showLoose();
      },
      run: async () => {
        for (const row of Array.from(files.children)) {
          row.classList.add('is-out');
          await wait(75);
        }
        await wait(150);
        showFolders(false);
        const counts = Array.from(files.querySelectorAll('b'));
        await tween(720, (p) => {
          const done = 1 - Math.pow(1 - p, 3);
          counts.forEach((b, i) => {
            b.textContent = String(Math.round(HUB_FILES.folders[i].count * done));
          });
          detail.textContent = `${Math.round(HUB_FILE_TOTAL * done)} of ${HUB_FILE_TOTAL}`;
        });
      },
      finish: () => showFolders(true),
    },
    // the command is typed, the output arrives line by line
    test: {
      start: termIdle,
      run: async () => {
        const row = term.firstElementChild as HTMLElement;
        const text = row.childNodes[1] as Text;
        for (const ch of HUB_TERMINAL.cmd) {
          text.data += ch;
          await wait(36);
        }
        await wait(180);
        row.querySelector('.hx-term__cursor')?.remove();
        for (const line of HUB_TERMINAL.lines) {
          term.append(termLine(line.k, line.s));
          await wait(130);
        }
      },
      finish: termDone,
    },
    // the list is read top to bottom, then the busy one is marked
    cpu: {
      start: () => {
        procs.forEach((row) => row.classList.remove('is-hot', 'is-scan'));
      },
      run: async () => {
        listing = true;
        for (const row of procs) {
          flash(row, 'is-scan');
          await wait(100);
        }
        await wait(140);
        procs.forEach((row, i) => setProc(row, HUB_PROCESSES[i].cpu));
        procs[0].classList.add('is-hot');
        await wait(420);
        listing = false;
      },
      finish: () => {
        procs.forEach((row, i) => {
          setProc(row, HUB_PROCESSES[i].cpu);
          row.classList.toggle('is-hot', i === 0);
        });
      },
    },
    // a sweep over the folders, then the match
    find: {
      start: () => {
        if (files.dataset.view !== 'folders') showFolders(true);
      },
      run: async () => {
        const body = files.parentElement as HTMLElement;
        flash(body, 'is-scanning');
        await wait(700);
        body.classList.remove('is-scanning');
        showFound();
        await wait(440);
      },
      finish: showFound,
    },
  };

  /** Finished state of a request: what the page shows without motion, or while paused. */
  const renderFinal = (index: number) => {
    const r = HUB_REQUESTS[index];
    const part = PARTS.indexOf(r.part);
    setClient(index);
    setBubble(r, false);
    bubble.classList.add('is-in');
    setRoute(index, part);
    toolName.textContent = r.tool;
    detail.textContent = r.result;
    call.classList.add('is-on', 'is-done');
    ACTIONS[r.action].finish();
    setPart(part, false);
  };

  // ---- one request ----
  const play = async (index: number, opening = false) => {
    const r = HUB_REQUESTS[index];
    const part = PARTS.indexOf(r.part);
    const action = ACTIONS[r.action];

    // drop whatever the previous request was waiting on, and what it left behind
    waiters.clear();
    tweens.clear();
    elapsed = 0;
    due = 0;
    busy = true;
    listing = false;
    comet.style.opacity = '0';
    call.classList.remove('is-on', 'is-new'); // fades out as it is; reset when the next call appears
    files.parentElement?.classList.remove('is-scanning');
    setRoute(-1, -1);
    setPart(-1, false);

    if (opening) {
      // The page arrives with the first prompt already asked, so the first
      // thing a visitor sees move is the request on its way.
      setClient(index);
      setBubble(r, false);
      bubble.classList.add('is-in');
      action.start();
      await wait(Math.max(700, T.firstSend - performance.now()));
    } else {
      bubble.classList.remove('is-in');
      await wait(T.swap);
      setClient(index);
      setBubble(r, true);
      action.start();
      bubble.classList.add('is-in');
      await wait(T.start);
      const letters = Array.from(question.children);
      for (const [i, letter] of letters.entries()) {
        letters[i - 1]?.classList.remove('is-caret');
        letter.classList.add('is-on', 'is-caret');
        await wait(T.typeChar);
      }
      await wait(T.beforeSend);
      letters[letters.length - 1]?.classList.remove('is-caret');
    }

    // client to Desktop Commander
    clientWires[index].group.classList.add('is-on');
    await send(clientWires[index], 'out', T.toCore);
    hitCore('out');
    toolName.textContent = r.tool;
    detail.textContent = r.arg;
    call.classList.remove('is-done');
    call.classList.add('is-on');
    flash(call, 'is-new');
    await wait(T.think);

    // Desktop Commander to the computer, where the work happens
    partWires[part].group.classList.add('is-on');
    await send(partWires[part], 'out', T.toPart);
    setPart(part, true);
    await action.run();
    await wait(T.afterWork);

    // and the result all the way back
    await send(partWires[part], 'back', T.toPart);
    hitCore('back');
    detail.textContent = r.result;
    call.classList.add('is-done');
    machine.classList.remove('is-busy');
    await wait(T.relay);
    await send(clientWires[index], 'back', T.toCore);
    tiles[index].classList.add('is-done');
    bubble.dataset.state = 'answer';
    busy = false;

    await wait(T.hold);
    void play((index + 1) % HUB_REQUESTS.length);
  };

  // ---- start ----

  layout();
  new ResizeObserver(layout).observe(plane);
  document.fonts?.ready.then(layout).catch(() => {
    /* the first measurement stands */
  });

  let parked = false; // paused, and showing a finished request the visitor picked

  /** A visitor points at a client: its request takes over. */
  const choose = (index: number) => {
    if (reduceMotion) {
      renderFinal(index);
    } else if (userPaused) {
      // nothing moves while paused: drop the request in flight and show the picked one finished
      waiters.clear();
      tweens.clear();
      comet.style.opacity = '0';
      busy = false;
      parked = true;
      renderFinal(index);
    } else if (index !== current || !busy) {
      void play(index);
    }
  };
  /** Keyboard focus only: a click also focuses the link, and that is not a request to replay. */
  const byKeyboard = (tile: HTMLElement) => {
    try {
      return tile.matches(':focus-visible');
    } catch {
      return true; // browsers without :focus-visible
    }
  };
  tiles.forEach((tile, i) => {
    let timer = 0;
    tile.addEventListener('pointerenter', (e) => {
      if (e.pointerType === 'touch') return;
      timer = window.setTimeout(() => choose(i), T.dwell);
    });
    tile.addEventListener('pointerleave', () => window.clearTimeout(timer));
    tile.addEventListener('focus', () => {
      if (byKeyboard(tile)) choose(i);
    });
  });

  if (reduceMotion) {
    toggle?.remove();
    setRoute(0, PARTS.indexOf(HUB_REQUESTS[0].part));
    hub.classList.add('is-drawn');
    return;
  }

  // The wires draw themselves in once the hero has made its entrance.
  hub.style.setProperty('--draw', `${Math.max(0, Math.round(T.firstDraw - performance.now()))}ms`);
  requestAnimationFrame(() => requestAnimationFrame(() => hub.classList.add('is-drawn')));

  toggle?.addEventListener('click', () => {
    userPaused = !userPaused;
    hub.classList.toggle('is-paused', userPaused);
    toggle.setAttribute('aria-pressed', String(userPaused));
    toggle.setAttribute('aria-label', userPaused ? 'Play the animation' : 'Pause the animation');
    if (!userPaused && parked) {
      // a request was picked while paused: carry on with the one after it
      parked = false;
      void play((current + 1) % HUB_REQUESTS.length);
    }
    kick();
  });

  new IntersectionObserver(
    (entries) => {
      visible = entries[entries.length - 1].isIntersecting;
      kick();
    },
    { threshold: 0.2 },
  ).observe(hub);
  document.addEventListener('visibilitychange', kick);

  // The plane leans a little toward the pointer (wide screens with a mouse only).
  if (window.matchMedia('(hover: hover)').matches) {
    const hero = hub.closest<HTMLElement>('[data-hero]') ?? hub;
    hero.addEventListener(
      'pointermove',
      (e) => {
        if (e.pointerType === 'touch' || !wide.matches) return;
        const r = hub.getBoundingClientRect();
        look.tx = clamp((e.clientX - (r.left + r.width / 2)) / 640, -1, 1);
        look.ty = clamp((e.clientY - (r.top + r.height / 2)) / 460, -1, 1);
        kick();
      },
      { passive: true },
    );
    hero.addEventListener('pointerleave', () => {
      look.tx = 0;
      look.ty = 0;
      kick();
    });
  }

  hub.classList.add('is-playing');
  void play(0, true);
}
