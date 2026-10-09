import { useEffect, useRef, useState } from "react";
import { FolderOpen, Terminal, Check, FileCode2 } from "lucide-react";
import GptCta from "./GptCta";
import { getCampaign, type CampaignKey } from "./campaigns";

/* ---------- shared visibility hook ---------- */
const useVisible = (threshold = 0.2) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries[0].isIntersecting && setVisible(true),
      { threshold, rootMargin: "-40px" }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, visible };
};

/* ---------- real demo video (files) ---------- */
const FilesDemo = ({ visible }: { visible: boolean }) => {
  return (
    <div
      className={`relative transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <div
        className="absolute -inset-4 rounded-2xl bg-primary/15 blur-2xl opacity-70"
        aria-hidden="true"
      />
      <div className="relative rounded-xl border border-dc-border bg-dc-surface overflow-hidden shadow-elegant">
        <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-dc-border bg-dc-card">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
          <span className="ml-3 text-xs text-muted-foreground truncate">
            Live demo: ChatGPT organizing local files
          </span>
        </div>
        <video
          className="w-full h-auto block"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          title="Demo: ChatGPT organizes files on a real computer through Desktop Commander"
        >
          <source src="/videos/remote-mcp-fileorg-chatgpt.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

/* ---------- animated terminal mockup ---------- */
const TerminalDemo = ({ visible }: { visible: boolean }) => {
  const lines = [
    { prompt: true, text: "git clone github.com/acme/api && cd api" },
    { prompt: false, text: "Cloning into 'api'... done." },
    { prompt: true, text: "npm install && npm test" },
    { prompt: false, text: "added 312 packages in 9s" },
    { prompt: false, text: "Tests: 47 passed, 1 failed" },
    { prompt: false, text: "✦ ChatGPT: the failing test expects a UTC date. Fixing utils/date.ts now." },
  ];
  return (
    <div className="rounded-xl border border-dc-border bg-[#0c0f14] overflow-hidden shadow-elegant font-mono">
      <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-dc-border bg-dc-card">
        <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-3 text-xs text-muted-foreground font-sans">your-machine ~ zsh</span>
      </div>
      <div className="p-4 space-y-1.5 text-[13px] leading-relaxed">
        {lines.map((line, i) => (
          <div
            key={i}
            className={`transition-all duration-400 ${
              visible ? "opacity-100" : "opacity-0"
            } ${
              line.text.startsWith("✦")
                ? "text-primary"
                : line.prompt
                  ? "text-foreground"
                  : "text-muted-foreground"
            }`}
            style={{ transitionDelay: `${300 + i * 400}ms` }}
          >
            {line.prompt && <span className="text-green-400 mr-2">$</span>}
            {line.text}
          </div>
        ))}
        <div
          className={`w-2 h-4 bg-primary/80 animate-pulse transition-opacity duration-300 ${
            visible ? "opacity-100" : "opacity-0"
          }`}
          style={{ transitionDelay: "2800ms" }}
        />
      </div>
    </div>
  );
};

/* ---------- animated file edit mockup (codebase campaign) ---------- */
const EditDemo = ({ visible }: { visible: boolean }) => {
  const lines: { kind: "ctx" | "add"; text: string }[] = [
    { kind: "ctx", text: "body {" },
    { kind: "ctx", text: "  background: white;" },
    { kind: "ctx", text: "  color: black;" },
    { kind: "ctx", text: "}" },
    { kind: "add", text: "body.dark {" },
    { kind: "add", text: "  background: black;" },
    { kind: "add", text: "  color: white;" },
    { kind: "add", text: "}" },
  ];
  return (
    <div className="rounded-xl border border-dc-border bg-[#0c0f14] overflow-hidden shadow-elegant font-mono">
      <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-dc-border bg-dc-card">
        <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-3 text-xs text-muted-foreground font-sans">my-site / styles.css</span>
      </div>
      <div className="p-4 space-y-1 text-[11px] sm:text-[12.5px] leading-relaxed overflow-x-auto">
        {lines.map((line, i) => (
          <div
            key={i}
            className={`whitespace-pre transition-all duration-500 ${visible ? "opacity-100" : "opacity-0"} ${
              line.kind === "add"
                ? "bg-green-500/10 text-green-300 -mx-4 px-4 w-max min-w-[calc(100%+2rem)]"
                : "text-muted-foreground"
            }`}
            style={{ transitionDelay: `${300 + i * 220}ms` }}
          >
            <span className="select-none mr-2 text-muted-foreground/60">{line.kind === "add" ? "+" : " "}</span>
            {line.text}
          </div>
        ))}
        <div
          className={`pt-3 font-sans text-[13px] text-primary transition-opacity duration-500 ${visible ? "opacity-100" : "opacity-0"}`}
          style={{ transitionDelay: "2400ms" }}
        >
          ✦ ChatGPT: added dark colors to styles.css and a switch to Header.tsx.
        </div>
      </div>
    </div>
  );
};

type Block = { kind: "files" | "edit" | "terminal"; title: string; body: string; bullets: string[] };

/* The base page's two blocks, unchanged copy */
const BASE_BLOCKS: Block[] = [
  {
    kind: "files",
    title: "Work with files on your computer",
    body: "Read, write, search, and organize real files on your disk. Projects, documents, photos, datasets. No uploading, no size limits, and nothing leaves your machine without you seeing it.",
    bullets: [
      "Full read and write access to any folder you allow",
      "Search across thousands of files in seconds",
      "Batch operations: rename, move, convert, dedupe",
    ],
  },
  {
    kind: "terminal",
    title: "Work in your machine's terminal",
    body: "Run commands, scripts, and long running processes in your real terminal. Install packages, run builds, manage git, start servers, and automate anything you could type yourself.",
    bullets: [
      "Real shell on your machine, not a cloud sandbox",
      "Keeps processes running and reads their output",
      "Uses the tools you already have installed",
    ],
  },
];

const ICONS = { files: FolderOpen, edit: FileCode2, terminal: Terminal };

const CapabilityBlock = ({ block, flip }: { block: Block; flip: boolean }) => {
  const { ref, visible } = useVisible();
  const Icon = ICONS[block.kind];
  return (
    <div ref={ref} className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-center mb-20">
      <div className={flip ? "lg:order-2" : undefined}>
        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-5">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">{block.title}</h3>
        <p className="text-lg text-muted-foreground leading-relaxed mb-6">{block.body}</p>
        <ul className="space-y-2.5">
          {block.bullets.map((item, i) => (
            <li key={i} className="flex items-start gap-2.5 text-muted-foreground">
              <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className={flip ? "lg:order-1" : undefined}>
        {block.kind === "files" && <FilesDemo visible={visible} />}
        {block.kind === "terminal" && <TerminalDemo visible={visible} />}
        {block.kind === "edit" && <EditDemo visible={visible} />}
      </div>
    </div>
  );
};

const GptCapabilities = ({ campaign }: { campaign?: CampaignKey }) => {
  const c = getCampaign(campaign);
  const blocks = c?.capabilities.blocks ?? BASE_BLOCKS;

  return (
    <section id="capabilities" className="py-16 md:py-24 scroll-mt-24">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-5xl font-bold text-foreground mb-4">
            {c ? c.capabilities.heading : "This ChatGPT plugin will enable you to"}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {c
              ? c.capabilities.sub
              : "Two superpowers ChatGPT does not have on its own: your files and your terminal."}
          </p>
        </div>

        {blocks.map((block, i) => (
          <CapabilityBlock key={block.kind} block={block} flip={i % 2 === 1} />
        ))}

        <div className="text-center">
          <GptCta position="capabilities" label="Try it in ChatGPT" campaign={campaign} />
        </div>
      </div>
    </section>
  );
};

export default GptCapabilities;
