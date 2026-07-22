import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import {
  FolderOpen,
  Terminal,
  Check,
  FileText,
  Image,
  Database,
  Trash2,
  Code2,
  ServerCog,
} from "lucide-react";
import GptCta from "./GptCta";

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

/* ---------- animated chat mockup (files) ---------- */
const FilesDemo = ({ visible }: { visible: boolean }) => {
  const steps = [
    "Scanning your Downloads folder",
    "Found 1,248 files in 14 formats",
    "Created 12 folders by type and month",
    "Moved 1,248 files, freed 3.2 GB of duplicates",
  ];
  return (
    <div className="rounded-xl border border-dc-border bg-dc-surface overflow-hidden shadow-elegant">
      <div className="px-4 py-2.5 border-b border-dc-border bg-dc-card text-xs text-muted-foreground">
        ChatGPT
      </div>
      <div className="p-4 space-y-3">
        <div
          className={`ml-auto max-w-[85%] rounded-2xl rounded-tr-sm bg-primary/15 border border-primary/20 px-4 py-2.5 text-sm text-foreground transition-all duration-500 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
          }`}
        >
          Organize my Downloads folder. Group by file type, then by month.
        </div>
        <div className="space-y-2">
          {steps.map((step, i) => (
            <div
              key={i}
              className={`flex items-center gap-2.5 text-sm text-muted-foreground transition-all duration-500 ${
                visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-3"
              }`}
              style={{ transitionDelay: `${400 + i * 350}ms` }}
            >
              <span className="w-5 h-5 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center flex-shrink-0">
                <Check className="w-3 h-3 text-green-400" />
              </span>
              {step}
            </div>
          ))}
        </div>
        <div
          className={`max-w-[85%] rounded-2xl rounded-tl-sm bg-dc-card border border-dc-border px-4 py-2.5 text-sm text-foreground transition-all duration-500 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
          }`}
          style={{ transitionDelay: "1900ms" }}
        >
          Done. Your Downloads folder is now 12 tidy folders. Want a summary of what moved
          where?
        </div>
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

/* ---------- use case grid ---------- */
const USE_CASES = [
  {
    icon: FolderOpen,
    title: "Tame messy folders",
    prompts: [
      "Organize my Desktop into folders by project",
      "Rename 400 scans by the date inside each document",
    ],
  },
  {
    icon: Image,
    title: "Convert anything",
    prompts: [
      "Convert every HEIC in this folder to JPG",
      "Compress these videos so they fit in an email",
    ],
  },
  {
    icon: Database,
    title: "Analyze your data",
    prompts: [
      "Read sales.csv and chart revenue by month",
      "Merge these 8 spreadsheets into one clean file",
    ],
  },
  {
    icon: FileText,
    title: "Work documents over",
    prompts: [
      "Extract totals from every invoice PDF into a table",
      "Turn my meeting notes into a formatted report",
    ],
  },
  {
    icon: Code2,
    title: "Build and fix code",
    prompts: [
      "Run the tests and fix whatever fails",
      "Set up this project and start the dev server",
    ],
  },
  {
    icon: ServerCog,
    title: "Automate your machine",
    prompts: [
      "Back up my photos folder to the external drive",
      "Watch this log file and alert me on errors",
    ],
  },
];

const GptCapabilities = () => {
  const files = useVisible();
  const term = useVisible();
  const grid = useVisible(0.1);

  return (
    <section id="capabilities" className="py-16 md:py-24 scroll-mt-24">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-5xl font-bold text-foreground mb-4">
            This ChatGPT plugin will enable you to
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Two superpowers ChatGPT does not have on its own: your files and your terminal.
          </p>
        </div>

        {/* Capability 1: files */}
        <div ref={files.ref} className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-center mb-20">
          <div>
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-5">
              <FolderOpen className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Work with files on your computer
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Read, write, search, and organize real files on your disk. Projects,
              documents, photos, datasets. No uploading, no size limits, and nothing
              leaves your machine without you seeing it.
            </p>
            <ul className="space-y-2.5">
              {[
                "Full read and write access to any folder you allow",
                "Search across thousands of files in seconds",
                "Batch operations: rename, move, convert, dedupe",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 text-muted-foreground">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <FilesDemo visible={files.visible} />
        </div>

        {/* Capability 2: terminal */}
        <div ref={term.ref} className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-center mb-20">
          <div className="lg:order-2">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-5">
              <Terminal className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Work in your machine's terminal
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Run commands, scripts, and long running processes in your real terminal.
              Install packages, run builds, manage git, start servers, and automate
              anything you could type yourself.
            </p>
            <ul className="space-y-2.5">
              {[
                "Real shell on your machine, not a cloud sandbox",
                "Keeps processes running and reads their output",
                "Uses the tools you already have installed",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 text-muted-foreground">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:order-1">
            <TerminalDemo visible={term.visible} />
          </div>
        </div>

        {/* Use case grid */}
        <div ref={grid.ref}>
          <h3 className="text-2xl sm:text-3xl font-bold text-foreground text-center mb-10">
            People use it every day to
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 mb-12">
            {USE_CASES.map((useCase, i) => {
              const Icon = useCase.icon;
              return (
                <Card
                  key={useCase.title}
                  className={`p-6 bg-dc-card border-dc-border hover:border-primary/40 hover:-translate-y-1 hover:shadow-elegant transition-all duration-300 ${
                    grid.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                  }`}
                  style={{ transitionDelay: grid.visible ? `${i * 90}ms` : "0ms" }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <h4 className="font-semibold text-foreground">{useCase.title}</h4>
                  </div>
                  <div className="space-y-2">
                    {useCase.prompts.map((prompt, j) => (
                      <p
                        key={j}
                        className="text-sm text-muted-foreground bg-muted/40 border border-dc-border rounded-lg px-3 py-2"
                      >
                        <span className="text-primary mr-1.5 select-none">›</span>
                        {prompt}
                      </p>
                    ))}
                  </div>
                </Card>
              );
            })}
          </div>
          <div className="text-center">
            <GptCta position="capabilities" label="Try it in ChatGPT" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GptCapabilities;
