import { Server, MessageSquare, Check } from "lucide-react";
import type { VisualKind } from "./adPages";

/**
 * Hero visuals for the ChatGPT Ads pages. They follow the ad creatives: flat
 * charcoal, one or two large monospace results, nothing dense. Illustrative,
 * not recorded output.
 */

const RED = "text-[#ff6b6b]";
const GREEN = "text-[#4ade80]";

const Frame = ({ children, label }: { children: React.ReactNode; label: string }) => (
  <div className="relative mx-auto w-full max-w-[440px]">
    <div className="absolute -inset-6 rounded-[2rem] bg-primary/15 blur-3xl opacity-60" aria-hidden="true" />
    <div
      role="img"
      aria-label={label}
      className="relative aspect-square rounded-3xl border border-white/10 bg-[#121419] shadow-elegant overflow-hidden flex flex-col justify-center px-8 sm:px-10 font-mono"
    >
      {children}
    </div>
  </div>
);

const Divider = () => <div className="my-7 h-px bg-white/10" />;

const Pytest = () => (
  <Frame label="pytest output: FAILED, then 23 passed">
    <p className={`${RED} text-5xl sm:text-6xl font-bold tracking-tight`}>FAILED</p>
    <p className="text-xs sm:text-sm text-white/40 mt-3 truncate">tests/test_cart.py::test_discount_rounding</p>
    <Divider />
    <p className={`${GREEN} text-5xl sm:text-6xl font-bold tracking-tight`}>23 passed</p>
    <p className="text-xs sm:text-sm text-white/40 mt-3">pytest -q</p>
  </Frame>
);

const TypeScript = () => (
  <Frame label="A TypeScript error, then tsc and ESLint passing">
    <p className={`${RED} text-3xl sm:text-4xl font-bold`}>error TS2322</p>
    <p className="text-xs sm:text-sm text-white/40 mt-3">src/api/user.ts:14</p>
    <Divider />
    <p className={`${GREEN} text-5xl sm:text-6xl font-bold`}>tsc ✓</p>
    <p className={`${GREEN} text-5xl sm:text-6xl font-bold mt-4`}>ESLint ✓</p>
  </Frame>
);

const Git = () => (
  <Frame label="A Git branch graph with one highlighted branch, a diff and a check">
    <svg viewBox="0 0 320 210" className="w-full" aria-hidden="true">
      <line x1="16" y1="160" x2="304" y2="160" stroke="rgba(255,255,255,0.18)" strokeWidth="4" strokeLinecap="round" />
      {[40, 100, 170, 240].map((x) => (
        <circle key={x} cx={x} cy="160" r="9" fill="#121419" stroke="rgba(255,255,255,0.3)" strokeWidth="4" />
      ))}
      <path d="M100 160 C 130 160, 130 70, 170 70 L 290 70" fill="none" stroke="hsl(var(--primary))" strokeWidth="5" strokeLinecap="round" />
      {[200, 260].map((x) => (
        <circle key={x} cx={x} cy="70" r="10" fill="hsl(var(--primary))" />
      ))}
      <text x="124" y="40" fill="hsl(var(--primary))" fontSize="14" fontFamily="ui-monospace, monospace">feature/checkout-copy</text>
      <text x="16" y="196" fill="rgba(255,255,255,0.4)" fontSize="14" fontFamily="ui-monospace, monospace">main</text>
    </svg>
    <div className="mt-6 flex items-center gap-4">
      <span className="rounded-lg border border-white/10 px-3 py-1.5 text-lg">
        <span className={GREEN}>+1</span> <span className={RED}>−1</span>
      </span>
      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#4ade80]/15">
        <Check className="h-6 w-6 text-[#4ade80]" />
      </span>
      <span className="text-sm text-white/40">12 tests passed</span>
    </div>
  </Frame>
);

const Docker = () => (
  <Frame label="A Docker Compose file with one added service, now running">
    <div className="text-sm sm:text-base leading-7">
      <p className="text-white/45">services:</p>
      <p className="text-white/45">&nbsp;&nbsp;web:</p>
      <p className="text-white/45">&nbsp;&nbsp;&nbsp;&nbsp;image: nginx:1.27</p>
      <div className="mt-1 -mx-3 rounded-lg bg-primary/15 px-3 py-1 text-primary">
        <p>+ uptime-kuma:</p>
        <p>+&nbsp;&nbsp;&nbsp;image: louislam/uptime-kuma:1</p>
        <p>+&nbsp;&nbsp;&nbsp;ports: ["3001:3001"]</p>
      </div>
    </div>
    <Divider />
    <p className={`${GREEN} text-4xl sm:text-5xl font-bold`}>✓ running</p>
  </Frame>
);

const Operations = () => (
  <Frame label="Three connected machines, one selected from chat">
    <div className="flex justify-center mb-4">
      <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/15">
        <MessageSquare className="h-7 w-7 text-primary" />
      </span>
    </div>
    <div className="mx-auto mb-4 h-10 w-px bg-gradient-to-b from-primary to-amber-400" aria-hidden="true" />
    <div className="grid grid-cols-3 gap-3 sm:gap-4">
      {[
        { name: "nas-01", active: false },
        { name: "web-01", active: true },
        { name: "homelab", active: false },
      ].map((m) => (
        <div
          key={m.name}
          className={`flex flex-col items-center gap-3 rounded-2xl border-2 py-6 ${
            m.active ? "border-amber-400 bg-amber-400/10 shadow-[0_0_40px_-8px_rgba(251,191,36,0.5)]" : "border-white/10 opacity-50"
          }`}
        >
          <Server className={`h-9 w-9 ${m.active ? "text-amber-400" : "text-white/50"}`} />
          <span className={`text-xs sm:text-sm ${m.active ? "text-amber-300" : "text-white/50"}`}>{m.name}</span>
        </div>
      ))}
    </div>
  </Frame>
);

const Logs = () => (
  <Frame label="A log excerpt with one error line">
    <div className="absolute top-7 right-7">
      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15">
        <MessageSquare className="h-5 w-5 text-primary" />
      </span>
    </div>
    <div className="space-y-3 text-xs sm:text-sm">
      <p className="text-white/40">app-1  | connecting to database</p>
      <div className="-mx-3 rounded-xl border border-[#ff6b6b]/40 bg-[#ff6b6b]/10 px-3 py-3">
        <p className={`${RED} text-lg sm:text-2xl font-bold leading-snug`}>Error: getaddrinfo ENOTFOUND postgres</p>
      </div>
      <p className="text-white/40">app-1 exited with code 1</p>
      <p className="text-white/40">photos-app-1  Restarting (1)</p>
    </div>
  </Frame>
);

const CodeGeneral = () => (
  <Frame label="Checks on a repo: pytest passed, tsc and ESLint passed, and a small diff">
    <div className="space-y-5 text-lg sm:text-2xl">
      {[
        { k: "pytest", v: "23 passed ✓" },
        { k: "tsc", v: "✓" },
        { k: "ESLint", v: "✓" },
      ].map((r) => (
        <div key={r.k} className="flex items-baseline justify-between gap-4">
          <span className="text-white/50">{r.k}</span>
          <span className={`${GREEN} font-bold`}>{r.v}</span>
        </div>
      ))}
      <div className="flex items-baseline justify-between gap-4">
        <span className="text-white/50">git diff</span>
        <span className="font-bold">
          <span className={GREEN}>+1</span> <span className={RED}>−1</span>
        </span>
      </div>
    </div>
  </Frame>
);

const VISUALS: Record<VisualKind, () => JSX.Element> = {
  "code-general": CodeGeneral,
  pytest: Pytest,
  typescript: TypeScript,
  git: Git,
  docker: Docker,
  operations: Operations,
  logs: Logs,
};

const AdVisual = ({ kind }: { kind: VisualKind }) => {
  const V = VISUALS[kind];
  return <V />;
};

export default AdVisual;
