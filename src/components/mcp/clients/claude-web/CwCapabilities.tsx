import { useEffect, useRef, useState } from "react";
import { FolderOpen, Terminal, Check } from "lucide-react";
import CwCta from "./CwCta";
import ClaudeChatWindow from "./ClaudeChatWindow";

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

/* Animated Claude chat: file work */
const FilesDemo = ({ visible }: { visible: boolean }) => {
  const step = (delay: number) =>
    `transition-all duration-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`;
  const d = (ms: number) => ({ transitionDelay: `${ms}ms` });

  return (
    <div
      className={`relative transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <div
        className="absolute -inset-4 rounded-2xl bg-[#C96442]/12 blur-2xl opacity-70"
        aria-hidden="true"
      />
      <ClaudeChatWindow title="Invoice cleanup" minHeightClass="min-h-[230px]">
        <div className={`ml-auto max-w-[92%] w-fit rounded-2xl bg-[#F0EEE6] px-4 py-2.5 text-sm leading-relaxed ${step(0)}`} style={d(200)}>
          Find every invoice PDF in my Documents and rename them by date and vendor
        </div>
        <div className={`inline-flex items-center gap-2 text-xs text-[#8a877d] border border-black/[0.07] rounded-lg px-2.5 py-1.5 bg-white ${step(0)}`} style={d(800)}>
          <img src="/favicon-512x512.png" alt="" className="w-3.5 h-3.5 rounded-[3px]" />
          Desktop Commander · searching 4,120 files
        </div>
        <div className={`font-serif text-[15px] leading-relaxed ${step(0)}`} style={d(1400)}>
          Found 87 invoices. Renamed them like this:
        </div>
        <div className={`font-mono text-[13px] text-[#5c594e] bg-white border border-black/[0.07] rounded-lg px-3 py-2 ${step(0)}`} style={d(1900)}>
          2026-06-14_AWS_invoice.pdf
          <br />
          2026-06-02_Figma_invoice.pdf
          <br />
          2026-05-28_Notion_invoice.pdf
        </div>
        <div className={`font-serif text-[15px] leading-relaxed ${step(0)}`} style={d(2400)}>
          All 87 are renamed and sorted into folders by year. Want a spreadsheet with the
          totals next?
        </div>
      </ClaudeChatWindow>
    </div>
  );
};

/* Animated terminal mockup */
const TerminalDemo = ({ visible }: { visible: boolean }) => {
  const lines = [
    { prompt: true, text: "git clone github.com/acme/api && cd api" },
    { prompt: false, text: "Cloning into 'api'... done." },
    { prompt: true, text: "npm install && npm test" },
    { prompt: false, text: "added 312 packages in 9s" },
    { prompt: false, text: "Tests: 47 passed, 1 failed" },
    { prompt: false, text: "✦ Claude: the failing test expects a UTC date. Fixing utils/date.ts now." },
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
            className={`transition-all duration-400 ${visible ? "opacity-100" : "opacity-0"} ${
              line.text.startsWith("✦")
                ? "text-[#e08b6d]"
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
          className={`w-2 h-4 bg-[#C96442]/80 animate-pulse transition-opacity duration-300 ${
            visible ? "opacity-100" : "opacity-0"
          }`}
          style={{ transitionDelay: "2800ms" }}
        />
      </div>
    </div>
  );
};

const CwCapabilities = () => {
  const files = useVisible();
  const term = useVisible();

  return (
    <section id="capabilities" className="py-16 md:py-24 scroll-mt-24">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-5xl font-bold text-foreground mb-4">
            This Claude connector will enable you to
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Two superpowers Claude does not have on its own: your files and your terminal.
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

        <div className="text-center">
          <CwCta position="capabilities" label="Try it in Claude" />
        </div>
      </div>
    </section>
  );
};

export default CwCapabilities;
