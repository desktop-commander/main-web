import { useEffect, useRef, useState } from "react";
import {
  FolderOpen,
  Image,
  FileText,
  Code2,
  ServerCog,
  MessageSquare,
} from "lucide-react";

const CATEGORIES = [
  {
    key: "files",
    label: "Files & folders",
    icon: FolderOpen,
    prompts: [
      "Organize my Downloads folder by file type and month",
      "Find every invoice PDF and rename it by date and vendor",
      "Clean out duplicate files in my Documents",
    ],
  },
  {
    key: "media",
    label: "Photos & media",
    icon: Image,
    prompts: [
      "Convert all HEIC photos on my Desktop to JPG",
      "Resize every image in this folder for the web",
      "Compress these videos so they fit in an email",
    ],
  },
  {
    key: "data",
    label: "Documents & data",
    icon: FileText,
    prompts: [
      "Extract totals from every invoice into one spreadsheet",
      "Merge these 8 spreadsheets into one clean file",
      "Read sales.csv and chart revenue by month",
    ],
  },
  {
    key: "dev",
    label: "Code & dev",
    icon: Code2,
    prompts: [
      "Check my system's health and tell me what needs attention",
      "Install all dependencies for this project",
      "Launch my local server and watch the logs",
    ],
  },
  {
    key: "automation",
    label: "Automation",
    icon: ServerCog,
    prompts: [
      "Connect this tool to my chat through its API",
      "Create a script that tidies my Desktop every Friday",
      "Schedule a nightly backup of my project folder",
    ],
  },
];

const ROTATE_MS = 4500;

/**
 * Interactive prompt showcase: category rail on the left, three readable
 * prompt cards on the right. Auto advances, pauses on hover, click to pin.
 */
const GptPromptShowcase = () => {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries[0].isIntersecting && setVisible(true),
      { threshold: 0.2, rootMargin: "-40px" }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible || paused) return;
    const id = setInterval(() => setActive((a) => (a + 1) % CATEGORIES.length), ROTATE_MS);
    return () => clearInterval(id);
  }, [visible, paused]);

  const category = CATEGORIES[active];

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-20 border-y border-dc-border/60 bg-dc-surface/30"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
            Desktop Commander lets you do this with ChatGPT
          </h2>
          <p className="text-lg text-muted-foreground">
            Pick a category and see what a single prompt can do.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-6 lg:gap-10 items-start max-w-5xl mx-auto">
          {/* Category rail */}
          <div className="lg:col-span-4 flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 -mx-4 px-4 lg:mx-0 lg:px-0">
            {CATEGORIES.map((cat, i) => {
              const Icon = cat.icon;
              const isActive = i === active;
              return (
                <button
                  key={cat.key}
                  onClick={() => setActive(i)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl border text-left whitespace-nowrap lg:whitespace-normal transition-all duration-300 flex-shrink-0 lg:flex-shrink ${
                    isActive
                      ? "bg-primary/10 border-primary/40 text-foreground"
                      : "bg-dc-card border-dc-border text-muted-foreground hover:border-primary/25 hover:text-foreground"
                  }`}
                >
                  <span
                    className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${
                      isActive ? "bg-primary/20" : "bg-muted/40"
                    }`}
                  >
                    <Icon className={`h-4.5 w-4.5 h-5 w-5 ${isActive ? "text-primary" : ""}`} />
                  </span>
                  <span className="font-medium">{cat.label}</span>
                  {isActive && (
                    <span
                      className="ml-auto hidden lg:block w-1.5 h-1.5 rounded-full bg-primary"
                      aria-hidden="true"
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Prompts panel */}
          <div className="lg:col-span-8">
            <div
              key={category.key}
              className="rounded-2xl border border-dc-border bg-dc-card p-5 md:p-7 shadow-elegant"
            >
              <div className="space-y-3">
                {category.prompts.map((prompt, i) => (
                  <div
                    key={`${category.key}-${i}`}
                    className="flex items-start gap-3 rounded-xl bg-dc-surface border border-dc-border px-4 py-3.5 animate-in fade-in slide-in-from-bottom-2"
                    style={{
                      animationDelay: `${i * 120}ms`,
                      animationFillMode: "both",
                      animationDuration: "500ms",
                    }}
                  >
                    <span className="w-7 h-7 rounded-full bg-primary/10 border border-primary/25 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <MessageSquare className="h-3.5 w-3.5 text-primary" />
                    </span>
                    <p className="text-base text-foreground leading-relaxed">{prompt}</p>
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground mt-5">
                Type it in ChatGPT. Desktop Commander does it on your computer.
              </p>
            </div>

            {/* Progress dots */}
            <div className="flex items-center justify-center gap-2 mt-5" aria-hidden="true">
              {CATEGORIES.map((cat, i) => (
                <button
                  key={cat.key}
                  onClick={() => setActive(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === active ? "w-6 bg-primary" : "w-1.5 bg-dc-border hover:bg-primary/40"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GptPromptShowcase;
