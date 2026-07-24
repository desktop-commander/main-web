import { useEffect, useRef, useState } from "react";
import { FolderOpen, Terminal, Check } from "lucide-react";
import CuCta from "./CuCta";

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

/* Animated Cursor agent chat: files beyond the workspace */
const FilesDemo = ({ visible }: { visible: boolean }) => {
  const step = `transition-all duration-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`;
  const d = (ms: number) => ({ transitionDelay: `${ms}ms` });

  return (
    <div
      className={`relative transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <div
        className="absolute -inset-4 rounded-2xl bg-white/8 blur-2xl opacity-70"
        aria-hidden="true"
      />
      <div className="relative rounded-2xl overflow-hidden shadow-elegant bg-white text-[#1a1a1a]">
        <div className="flex items-center gap-2 px-4 py-3 border-b border-black/[0.08]">
          <img src="/cursor-mark.png" alt="" className="w-5 h-5 object-contain" />
          <span className="text-sm font-semibold">Agent</span>
        </div>
        <div className="px-4 py-4 space-y-3 min-h-[230px] text-left">
          <div className={`ml-auto max-w-[92%] w-fit rounded-xl bg-[#f0f0f0] px-4 py-2.5 text-sm leading-relaxed ${step}`} style={d(200)}>
            Read the database config from my other project in ~/work and apply the same
            settings here
          </div>
          <div className={`inline-flex items-center gap-2 text-xs text-[#6b6b6b] border border-black/[0.08] rounded-lg px-2.5 py-1.5 bg-[#fafafa] ${step}`} style={d(800)}>
            <img src="/favicon-512x512.png" alt="" className="w-3.5 h-3.5 rounded-[3px]" />
            Desktop Commander · reading ~/work/api-service
          </div>
          <div className={`text-sm leading-relaxed ${step}`} style={d(1400)}>
            Found the config. Applying the same pool settings to this project:
          </div>
          <div className={`font-mono text-[13px] text-[#525252] bg-[#fafafa] border border-black/[0.08] rounded-lg px-3 py-2 ${step}`} style={d(1900)}>
            pool_size: 20
            <br />
            timeout_ms: 5000
            <br />
            ssl: required
          </div>
          <div className={`text-sm leading-relaxed ${step}`} style={d(2400)}>
            Updated config/database.ts to match. Both projects are consistent now.
          </div>
        </div>
      </div>
    </div>
  );
};

/* Animated terminal mockup */
const TerminalDemo = ({ visible }: { visible: boolean }) => {
  const lines = [
    { prompt: true, text: "docker compose up -d db && npm run migrate" },
    { prompt: false, text: "Container acme-db started" },
    { prompt: false, text: "Applied 4 migrations in 2.1s" },
    { prompt: true, text: "npm run dev" },
    { prompt: false, text: "Server listening on :3000" },
    { prompt: false, text: "✦ Cursor: watching the logs, I will flag errors as they appear." },
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

const CuCapabilities = () => {
  const files = useVisible();
  const term = useVisible();

  return (
    <section id="capabilities" className="py-16 md:py-24 scroll-mt-24">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-5xl font-bold text-foreground mb-4">
            This Cursor plugin will enable you to
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Cursor knows your workspace. Desktop Commander gives it the rest of your
            machine.
          </p>
        </div>

        {/* Capability 1: files beyond the workspace */}
        <div ref={files.ref} className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-center mb-20">
          <div>
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-5">
              <FolderOpen className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Work with files beyond your workspace
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Any folder on your disk: other repos, documents, downloads, datasets. Read,
              write, search, and organize across your whole machine without opening a new
              window.
            </p>
            <ul className="space-y-2.5">
              {[
                "Cross project work: read one repo, apply to another",
                "Search thousands of files outside the workspace in seconds",
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
              Start containers, run migrations, watch logs, and manage background
              processes that outlive a single agent turn.
            </p>
            <ul className="space-y-2.5">
              {[
                "Real shell on your machine, with your tools and env",
                "Keeps processes running and reads their output",
                "Manages background jobs Cursor's own terminal loses",
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
          <CuCta position="capabilities" label="Try it in Cursor" />
        </div>
      </div>
    </section>
  );
};

export default CuCapabilities;
