import { c as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_Dp1VJtNq.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../../chunks/dc-logo_6kTUD2wC.mjs';
import { P as PostHogInit } from '../../chunks/PostHogInit_DvwonWEB.mjs';
import { D as DownloadButtons, N as NavigationLandingPage } from '../../chunks/DownloadButtons_D1sVK0uh.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { B as Button, t as trackDownloadRedirect, F as Footer } from '../../chunks/Footer_CPzrBBdI.mjs';
import { Shield, Download, ArrowRight, AlertCircle, FolderSearch, FileImage, Folder, Database, MessageSquare, Sparkles, CheckCircle, XCircle, Check, Image, Camera, File, Printer, FileType } from 'lucide-react';
import { W as WaitlistSection } from '../../chunks/WaitlistSection_CPoRbun7.mjs';
/* empty css                                    */
export { renderers } from '../../renderers.mjs';

const FileManagementHero = () => {
  return /* @__PURE__ */ jsx("section", { className: "pt-32 pb-16 md:pt-40 md:pb-20", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto max-w-6xl px-4 sm:px-6", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center text-center space-y-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-dc-surface border border-dc-border text-sm text-muted-foreground", children: [
      /* @__PURE__ */ jsx(Shield, { className: "w-4 h-4 text-primary" }),
      /* @__PURE__ */ jsx("span", { children: "AI Processing • No Random Sites" })
    ] }),
    /* @__PURE__ */ jsxs("h1", { className: "text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight max-w-4xl", children: [
      "Your personal file organizer —",
      " ",
      /* @__PURE__ */ jsx("span", { className: "text-primary", children: "move, edit, convert files in natural language" })
    ] }),
    /* @__PURE__ */ jsx("p", { className: "text-lg sm:text-xl text-muted-foreground max-w-3xl leading-relaxed", children: "Manage files by simply describing what you want. Desktop Commander connects your AI directly to your files—no random conversion websites, no manual workflows." }),
    /* @__PURE__ */ jsx("div", { className: "flex flex-col sm:flex-row gap-4 pt-4", children: /* @__PURE__ */ jsx(
      Button,
      {
        size: "lg",
        asChild: true,
        className: "group",
        children: /* @__PURE__ */ jsxs("a", { href: "#get-started", onClick: () => trackDownloadRedirect("file_management_hero"), children: [
          /* @__PURE__ */ jsx(Download, { className: "w-5 h-5" }),
          "Download App",
          /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4 group-hover:translate-x-1 transition-transform" })
        ] })
      }
    ) }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 text-sm text-muted-foreground pt-2", children: [
      /* @__PURE__ */ jsx("span", { children: "Save time" }),
      /* @__PURE__ */ jsx("span", { className: "w-1 h-1 rounded-full bg-muted-foreground/50" }),
      /* @__PURE__ */ jsx("span", { children: "Keep files safe" }),
      /* @__PURE__ */ jsx("span", { className: "w-1 h-1 rounded-full bg-muted-foreground/50" }),
      /* @__PURE__ */ jsx("span", { children: "Manage all in natural language" })
    ] })
  ] }) }) });
};

const ProblemSection = () => {
  return /* @__PURE__ */ jsx("section", { className: "py-16 md:py-20", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto max-w-5xl px-4 sm:px-6", children: /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-br from-dc-card to-dc-surface rounded-2xl border border-dc-border p-8 md:p-12", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4 mb-6", children: [
      /* @__PURE__ */ jsx("div", { className: "p-3 rounded-xl bg-destructive/10 border border-destructive/20", children: /* @__PURE__ */ jsx(AlertCircle, { className: "w-6 h-6 text-destructive" }) }),
      /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold", children: "You shouldn't have to upload files to random websites to get things done." })
    ] }),
    /* @__PURE__ */ jsx("p", { className: "text-xl text-muted-foreground leading-relaxed", children: "Every time you upload a file to convert it, organize it, or analyze it, you're trusting a random website with your data. Your personal documents, photos, and sensitive files deserve better than sketchy online tools." })
  ] }) }) });
};

const SolutionSection = () => {
  const features = [
    {
      title: "Find and organize files by describing them",
      description: '"Find all invoices from Q3 and move them to my accounting folder" → Desktop Commander locates them and organizes them for you.',
      icon: FolderSearch,
      videoPlaceholder: "Demo: Organizing files by natural language"
    },
    {
      title: "Convert any file format instantly",
      description: '"Convert these HEIC photos to JPG" → Done instantly, without uploading to random websites or installing bloatware. Works with HEIC to JPG, PDF to Word, image formats, and more.',
      icon: FileImage,
      videoPlaceholder: "Demo: Converting HEIC to JPG"
    },
    {
      title: "Clean up folders with simple instructions",
      description: `"Organize my downloads folder by file type" → Your files are sorted exactly how you'd like them.`,
      icon: Folder,
      videoPlaceholder: "Demo: Auto-organizing downloads"
    },
    {
      title: "Analyze data files directly",
      description: '"Show me the trends in this CSV" or "What are the totals in this Excel file?" → Desktop Commander reads and analyzes spreadsheets, data files, and documents without opening multiple programs.',
      icon: Database,
      videoPlaceholder: "Demo: Analyzing CSV data"
    }
  ];
  return /* @__PURE__ */ jsx("section", { className: "py-16 md:py-24 bg-gradient-to-b from-background to-dc-card/30", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto max-w-6xl px-4 sm:px-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-16", children: [
      /* @__PURE__ */ jsx("div", { className: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary mb-6", children: /* @__PURE__ */ jsx("span", { children: "70% of our users save 3+ hours per week" }) }),
      /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl lg:text-5xl font-bold mb-6", children: "Work with your files directly" }),
      /* @__PURE__ */ jsx("p", { className: "text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto", children: "Desktop Commander connects your AI assistant directly to files on your computer. Files are processed through your trusted AI provider—no random third-party conversion sites, no downloading and re-uploading." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "space-y-12", children: features.map((feature, index) => /* @__PURE__ */ jsxs(
      "div",
      {
        className: "grid lg:grid-cols-2 gap-8 items-center",
        children: [
          /* @__PURE__ */ jsxs("div", { className: `space-y-4 ${index % 2 === 1 ? "lg:order-2" : ""}`, children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsx("div", { className: "p-2.5 rounded-lg bg-primary/10 border border-primary/20", children: /* @__PURE__ */ jsx(feature.icon, { className: "w-5 h-5 text-primary" }) }),
              /* @__PURE__ */ jsx("h3", { className: "text-2xl font-semibold", children: feature.title })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-lg text-muted-foreground leading-relaxed", children: feature.description })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: `${index % 2 === 1 ? "lg:order-1" : ""}`, children: [
            /* @__PURE__ */ jsx("div", { className: "relative aspect-video rounded-xl border border-dc-border bg-dc-surface overflow-hidden group", children: index === 0 ? (
              // First feature: Move files video
              /* @__PURE__ */ jsxs(
                "video",
                {
                  className: "w-full h-full object-cover",
                  autoPlay: true,
                  loop: true,
                  muted: true,
                  playsInline: true,
                  controls: true,
                  children: [
                    /* @__PURE__ */ jsx("source", { src: "/videos/move-files-demo.mp4", type: "video/mp4" }),
                    "Your browser doesn't support video playback."
                  ]
                }
              )
            ) : index === 1 ? (
              // Second feature: Convert files video
              /* @__PURE__ */ jsxs(
                "video",
                {
                  className: "w-full h-full object-cover",
                  autoPlay: true,
                  loop: true,
                  muted: true,
                  playsInline: true,
                  controls: true,
                  children: [
                    /* @__PURE__ */ jsx("source", { src: "/videos/convert-files-demo.mp4", type: "video/mp4" }),
                    "Your browser doesn't support video playback."
                  ]
                }
              )
            ) : index === 2 ? (
              // Third feature: Organize downloads video
              /* @__PURE__ */ jsxs(
                "video",
                {
                  className: "w-full h-full object-cover",
                  autoPlay: true,
                  loop: true,
                  muted: true,
                  playsInline: true,
                  controls: true,
                  children: [
                    /* @__PURE__ */ jsx("source", { src: "/videos/organize-downloads-demo.mp4", type: "video/mp4" }),
                    "Your browser doesn't support video playback."
                  ]
                }
              )
            ) : (
              // Fourth feature: Analyze data video
              /* @__PURE__ */ jsxs(
                "video",
                {
                  className: "w-full h-full object-cover",
                  autoPlay: true,
                  loop: true,
                  muted: true,
                  playsInline: true,
                  controls: true,
                  children: [
                    /* @__PURE__ */ jsx("source", { src: "/videos/analyze-data-demo.mp4", type: "video/mp4" }),
                    "Your browser doesn't support video playback."
                  ]
                }
              )
            ) }),
            /* @__PURE__ */ jsxs("div", { className: "mt-4 p-4 rounded-lg bg-dc-surface border border-dc-border", children: [
              /* @__PURE__ */ jsx("p", { className: "text-xs font-medium text-muted-foreground mb-2", children: "Try this command in Desktop Commander app:" }),
              /* @__PURE__ */ jsx("p", { className: "text-sm font-mono text-foreground", children: index === 0 ? '"Find all invoices from Q3 and move them to my accounting folder"' : index === 1 ? '"Convert these HEIC photos to JPG"' : index === 2 ? '"Organize my downloads folder by file type"' : '"Show me the trends in this CSV"' })
            ] })
          ] })
        ]
      },
      index
    )) }),
    /* @__PURE__ */ jsxs("div", { className: "mt-24 pt-12 border-t border-dc-border", children: [
      /* @__PURE__ */ jsx("div", { className: "text-center mb-12", children: /* @__PURE__ */ jsx("h3", { className: "text-2xl md:text-3xl font-bold", children: "The smarter way to manage your files" }) }),
      /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-3 gap-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "p-8 rounded-2xl bg-gradient-to-b from-dc-surface to-dc-card border-2 border-dc-border hover:border-primary/50 transition-colors text-center", children: [
          /* @__PURE__ */ jsx("div", { className: "w-16 h-16 rounded-full bg-primary/10 border-2 border-primary/20 flex items-center justify-center mx-auto mb-6", children: /* @__PURE__ */ jsx("span", { className: "text-3xl", children: "⚡" }) }),
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold mb-3", children: "Save time" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "70% users save 3+ hours per week using DC" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "p-8 rounded-2xl bg-gradient-to-b from-dc-surface to-dc-card border-2 border-dc-border hover:border-primary/50 transition-colors text-center", children: [
          /* @__PURE__ */ jsx("div", { className: "w-16 h-16 rounded-full bg-primary/10 border-2 border-primary/20 flex items-center justify-center mx-auto mb-6", children: /* @__PURE__ */ jsx("span", { className: "text-3xl", children: "🔒" }) }),
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold mb-3", children: "Keep files secure" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Do not use random websites to work with your files" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "p-8 rounded-2xl bg-gradient-to-b from-dc-surface to-dc-card border-2 border-dc-border hover:border-primary/50 transition-colors text-center", children: [
          /* @__PURE__ */ jsx("div", { className: "w-16 h-16 rounded-full bg-primary/10 border-2 border-primary/20 flex items-center justify-center mx-auto mb-6", children: /* @__PURE__ */ jsx("span", { className: "text-3xl", children: "🎯" }) }),
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold mb-3", children: "Do it all in one app" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Manage all file operations - from converting to moving files with AI" })
        ] })
      ] })
    ] })
  ] }) });
};

const HowItWorksFlowSection = () => {
  const steps = [
    {
      icon: Download,
      title: "Install and open Desktop Commander",
      description: "One-time setup takes less than a minute"
    },
    {
      icon: MessageSquare,
      title: "Ask in natural language what you need",
      description: "Just describe what you want in plain English"
    },
    {
      icon: Sparkles,
      title: "See everything done automatically on your computer",
      description: "Files organized, converted, or analyzed—instantly"
    }
  ];
  return /* @__PURE__ */ jsx("section", { className: "py-16 md:py-24", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto max-w-6xl px-4 sm:px-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-16", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl lg:text-5xl font-bold mb-4", children: "How It Works" }),
      /* @__PURE__ */ jsx("p", { className: "text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto", children: "Three simple steps to manage your files" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-8 relative", children: steps.map((step, index) => /* @__PURE__ */ jsx("div", { className: "relative", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center text-center", children: [
      /* @__PURE__ */ jsx("div", { className: "w-20 h-20 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center mb-6", children: /* @__PURE__ */ jsx(step.icon, { className: "w-10 h-10 text-primary" }) }),
      /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm", children: index + 1 }),
      /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-3", children: step.title }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: step.description })
    ] }) }, index)) }),
    /* @__PURE__ */ jsx("div", { className: "flex justify-center mt-12", children: /* @__PURE__ */ jsx(DownloadButtons, { location: "file_management" }) })
  ] }) });
};

const PrivacyDiagramSection = () => {
  return /* @__PURE__ */ jsx("section", { className: "py-16 md:py-24 bg-gradient-to-b from-background to-dc-card/30", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto max-w-6xl px-4 sm:px-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-16", children: [
      /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary mb-6", children: [
        /* @__PURE__ */ jsx(Shield, { className: "w-4 h-4" }),
        /* @__PURE__ */ jsx("span", { children: "AI Processing • No Random Sites" })
      ] }),
      /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl lg:text-5xl font-bold mb-4", children: "Connect AI to Your Files" }),
      /* @__PURE__ */ jsx("p", { className: "text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto", children: "Desktop Commander connects your AI assistant directly to your files. File processing happens through your trusted AI provider—no sketchy third-party websites." })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-8 lg:gap-12 items-center", children: [
      /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4 p-6 rounded-xl bg-green-500/5 border-2 border-green-500/20", children: [
          /* @__PURE__ */ jsx("div", { className: "shrink-0 w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center", children: /* @__PURE__ */ jsx(CheckCircle, { className: "w-6 h-6 text-green-400" }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-2 text-green-400", children: "With Desktop Commander" }),
            /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-muted-foreground", children: [
              /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                /* @__PURE__ */ jsx(CheckCircle, { className: "w-4 h-4 text-green-400 mt-1 shrink-0" }),
                /* @__PURE__ */ jsx("span", { children: "Direct access to files on your computer" })
              ] }),
              /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                /* @__PURE__ */ jsx(CheckCircle, { className: "w-4 h-4 text-green-400 mt-1 shrink-0" }),
                /* @__PURE__ */ jsx("span", { children: "Processed by Claude, ChatGPT, Gemini, or Qwen" })
              ] }),
              /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                /* @__PURE__ */ jsx(CheckCircle, { className: "w-4 h-4 text-green-400 mt-1 shrink-0" }),
                /* @__PURE__ */ jsx("span", { children: "No random third-party conversion websites" })
              ] }),
              /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                /* @__PURE__ */ jsx(CheckCircle, { className: "w-4 h-4 text-green-400 mt-1 shrink-0" }),
                /* @__PURE__ */ jsx("span", { children: "You control what files your AI accesses" })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4 p-6 rounded-xl bg-red-500/5 border-2 border-red-500/20", children: [
          /* @__PURE__ */ jsx("div", { className: "shrink-0 w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center", children: /* @__PURE__ */ jsx(XCircle, { className: "w-6 h-6 text-red-400" }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-2 text-red-400", children: "Random Online Tools" }),
            /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-muted-foreground", children: [
              /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                /* @__PURE__ */ jsx(XCircle, { className: "w-4 h-4 text-red-400 mt-1 shrink-0" }),
                /* @__PURE__ */ jsx("span", { children: "Files uploaded to unknown third-party servers" })
              ] }),
              /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                /* @__PURE__ */ jsx(XCircle, { className: "w-4 h-4 text-red-400 mt-1 shrink-0" }),
                /* @__PURE__ */ jsx("span", { children: "Sketchy websites with malware risks" })
              ] }),
              /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                /* @__PURE__ */ jsx(XCircle, { className: "w-4 h-4 text-red-400 mt-1 shrink-0" }),
                /* @__PURE__ */ jsx("span", { children: "Unknown data handling and privacy policies" })
              ] }),
              /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                /* @__PURE__ */ jsx(XCircle, { className: "w-4 h-4 text-red-400 mt-1 shrink-0" }),
                /* @__PURE__ */ jsx("span", { children: "Manual download and re-upload workflows" })
              ] })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "relative", children: /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-br from-dc-card to-dc-surface rounded-2xl border border-dc-border p-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center mb-8", children: [
          /* @__PURE__ */ jsx("div", { className: "inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 border-2 border-primary mb-4", children: /* @__PURE__ */ jsx("span", { className: "text-4xl", children: "💻" }) }),
          /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold", children: "Your Computer" }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground mb-6", children: "Desktop Commander accesses files here" }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-3 gap-3", children: [
            /* @__PURE__ */ jsx("div", { className: "text-center", children: /* @__PURE__ */ jsx("div", { className: "w-14 h-14 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mx-auto", children: /* @__PURE__ */ jsx("span", { className: "text-2xl", children: "📄" }) }) }),
            /* @__PURE__ */ jsx("div", { className: "text-center", children: /* @__PURE__ */ jsx("div", { className: "w-14 h-14 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mx-auto", children: /* @__PURE__ */ jsx("span", { className: "text-2xl", children: "🖼️" }) }) }),
            /* @__PURE__ */ jsx("div", { className: "text-center", children: /* @__PURE__ */ jsx("div", { className: "w-14 h-14 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center justify-center mx-auto", children: /* @__PURE__ */ jsx("span", { className: "text-2xl", children: "📊" }) }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "relative py-6 mb-8", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 flex items-center", children: /* @__PURE__ */ jsx("div", { className: "w-full border-t-2 border-dashed border-primary/30" }) }),
          /* @__PURE__ */ jsx("div", { className: "relative flex justify-center", children: /* @__PURE__ */ jsx("div", { className: "bg-dc-card px-4 py-2 rounded-full border-2 border-primary flex items-center gap-2", children: /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold text-primary", children: "Directly Processed By" }) }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsx("div", { className: "relative inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 border-2 border-primary mb-3", children: /* @__PURE__ */ jsx("span", { className: "text-3xl", children: "🤖" }) }),
          /* @__PURE__ */ jsx("p", { className: "text-sm font-medium mb-2", children: "Your AI Provider" }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap justify-center gap-2 text-xs text-muted-foreground", children: [
            /* @__PURE__ */ jsx("span", { className: "px-2 py-1 rounded bg-dc-surface border border-dc-border", children: "Claude" }),
            /* @__PURE__ */ jsx("span", { className: "px-2 py-1 rounded bg-dc-surface border border-dc-border", children: "ChatGPT" }),
            /* @__PURE__ */ jsx("span", { className: "px-2 py-1 rounded bg-dc-surface border border-dc-border", children: "Gemini" }),
            /* @__PURE__ */ jsx("span", { className: "px-2 py-1 rounded bg-dc-surface border border-dc-border", children: "Qwen" })
          ] })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-16 p-6 md:p-8 rounded-2xl bg-primary/5 border border-primary/20", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4", children: [
      /* @__PURE__ */ jsx("div", { className: "p-2 rounded-lg bg-primary/10 shrink-0", children: /* @__PURE__ */ jsx(Shield, { className: "w-5 h-5 text-primary" }) }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "text-lg font-medium mb-2", children: "How data is handled" }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Desktop Commander connects your AI directly to files on your computer. Your files are processed by your chosen AI provider (Claude, ChatGPT, Gemini, or Qwen)—not random third-party websites. You get AI-powered file management without the risk." })
      ] })
    ] }) })
  ] }) });
};

const TestimonialsSection = () => {
  const useCases = [
    {
      title: "Organizing years of accumulated files",
      description: "Sort 3 years of downloads by file type and date in under a minute"
    },
    {
      title: "Converting image formats without extra software",
      description: "Transform 200+ HEIC photos to JPG locally while working on something else—no uploading to sketchy websites"
    },
    {
      title: "Finding scattered documents",
      description: "Locate all Q1 invoices across different folders and consolidate them before tax time—find 47+ documents in seconds"
    },
    {
      title: "Working with unfamiliar formats",
      description: "Convert EDOC files to DOC format instantly so you can keep working without installing extra software"
    },
    {
      title: "Converting PDFs to editable formats",
      description: "Transform PDF reports to Word to edit actual text instead of retyping everything"
    },
    {
      title: "Analyzing data files quickly",
      description: "Process CSV files with thousands of rows to show top products and monthly trends in 2 minutes instead of spending an hour in Excel"
    }
  ];
  return /* @__PURE__ */ jsx("section", { className: "py-16 md:py-24", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto max-w-7xl px-4 sm:px-6", children: [
    /* @__PURE__ */ jsx("div", { className: "text-center mb-16", children: /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl lg:text-5xl font-bold mb-4", children: "What Our Users Do with Desktop Commander" }) }),
    /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6", children: useCases.map((useCase, index) => /* @__PURE__ */ jsxs(
      "div",
      {
        className: "p-6 rounded-xl border border-dc-border bg-dc-card hover:border-primary/30 transition-all group",
        children: [
          /* @__PURE__ */ jsx("div", { className: "mb-3", children: /* @__PURE__ */ jsx("h3", { className: "text-sm font-semibold text-primary uppercase tracking-wider", children: useCase.title }) }),
          /* @__PURE__ */ jsx("p", { className: "text-foreground leading-relaxed", children: useCase.description })
        ]
      },
      index
    )) })
  ] }) });
};

const FinalCTASection = () => {
  return /* @__PURE__ */ jsx("section", { className: "py-16 md:py-24", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto max-w-4xl px-4 sm:px-6", children: /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-br from-primary/10 via-primary/5 to-transparent rounded-2xl border border-primary/20 p-8 md:p-12 text-center", children: [
    /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-4xl lg:text-5xl font-bold mb-6", children: [
      "Your files are on your computer. ",
      /* @__PURE__ */ jsx("br", {}),
      /* @__PURE__ */ jsx("span", { className: "text-primary", children: "Managing them should be simple." })
    ] }),
    /* @__PURE__ */ jsx("p", { className: "text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto", children: "Desktop Commander is the file organizer that works the way you think—through natural language instead of complex commands." }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-2 mb-4", children: [
      /* @__PURE__ */ jsx(Download, { className: "w-5 h-5 text-primary" }),
      /* @__PURE__ */ jsx("span", { className: "text-lg font-semibold", children: "Download Desktop Commander" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex flex-col sm:flex-row gap-4 justify-center mb-8", children: /* @__PURE__ */ jsx(DownloadButtons, { variant: "hero", location: "file_management" }) }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center gap-4 text-sm text-muted-foreground", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
        /* @__PURE__ */ jsx("span", { children: "Works on Mac" }),
        /* @__PURE__ */ jsx("span", { className: "w-1 h-1 rounded-full bg-muted-foreground/50" }),
        /* @__PURE__ */ jsx("span", { children: "Windows" }),
        /* @__PURE__ */ jsx("span", { className: "w-1 h-1 rounded-full bg-muted-foreground/50" }),
        /* @__PURE__ */ jsx("span", { children: "Linux" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-primary", children: [
        /* @__PURE__ */ jsx(Check, { className: "w-4 h-4" }),
        /* @__PURE__ */ jsx("span", { children: "Direct file access • No sketchy websites" })
      ] })
    ] })
  ] }) }) });
};

const FMPopularConversions = () => {
  const conversions = [
    {
      title: "HEIC to JPG",
      description: "Convert iPhone photos to universally compatible JPG format. Batch process entire folders with one command.",
      href: "/use-cases/file-management/heic-to-jpg/",
      icon: Image,
      badge: "Most Popular"
    },
    {
      title: "PNG to JPG",
      description: "Reduce PNG file sizes by converting to JPG. Perfect for web uploads, email attachments, and saving storage space.",
      href: "/use-cases/file-management/png-to-jpg/",
      icon: FileImage,
      badge: "New"
    },
    {
      title: "CR2 to JPG",
      description: "Convert Canon RAW photos to shareable JPG format. Batch process entire photo shoots in seconds.",
      href: "/use-cases/file-management/cr2-to-jpg/",
      icon: Camera,
      badge: "New"
    },
    {
      title: "HEIC to PNG",
      description: "Convert iPhone HEIC photos to PNG with lossless quality and transparency support. Perfect for creative work.",
      href: "/use-cases/file-management/heic-to-png/",
      icon: Image
    },
    {
      title: "PDF to PNG",
      description: "Extract pages from PDFs as high-quality PNG images. Perfect for presentations and social media sharing.",
      href: "/use-cases/file-management/pdf-to-png/",
      icon: File
    },
    {
      title: "TIFF to JPG",
      description: "Convert TIFF files from scanners and print workflows to universally compatible JPG format.",
      href: "/use-cases/file-management/tiff-to-jpg/",
      icon: Printer,
      badge: "New"
    },
    {
      title: "JFIF to JPG",
      description: "Convert confusing JFIF files to standard JPG instantly. JFIF is just JPEG with a different extension.",
      href: "/use-cases/file-management/jfif-to-jpg/",
      icon: FileType
    },
    {
      title: "WebP to JPG",
      description: "Convert WebP images downloaded from the web into JPG for easy sharing and editing.",
      href: "/use-cases/file-management/webp-to-jpg/",
      icon: FileImage
    },
    {
      title: "AVIF to JPG",
      description: "Convert next-gen AVIF images to widely supported JPG format when you need maximum compatibility.",
      href: "/use-cases/file-management/avif-to-jpg/",
      icon: Sparkles
    }
  ];
  return /* @__PURE__ */ jsx("section", { className: "py-16 md:py-24 bg-gradient-to-b from-dc-card/30 to-background", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto max-w-6xl px-4 sm:px-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold mb-4", children: "Popular File Conversions" }),
      /* @__PURE__ */ jsx("p", { className: "text-lg text-muted-foreground max-w-2xl mx-auto", children: "Step-by-step guides for common file management tasks" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-6", children: conversions.map((conversion, index) => /* @__PURE__ */ jsxs(
      "a",
      {
        href: conversion.href,
        className: "group relative p-6 rounded-2xl border border-dc-border bg-dc-card hover:border-primary/50 hover:bg-dc-surface transition-all",
        children: [
          conversion.badge && /* @__PURE__ */ jsx("span", { className: "absolute top-4 right-4 px-2 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20", children: conversion.badge }),
          /* @__PURE__ */ jsx("div", { className: "mb-4", children: /* @__PURE__ */ jsx("div", { className: "inline-flex p-3 rounded-xl bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors", children: /* @__PURE__ */ jsx(conversion.icon, { className: "w-6 h-6 text-primary group-hover:scale-110 transition-transform" }) }) }),
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-2 group-hover:text-primary transition-colors", children: conversion.title }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm mb-4 leading-relaxed", children: conversion.description }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center text-primary text-sm font-medium", children: [
            /* @__PURE__ */ jsx("span", { children: "View guide" }),
            /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" })
          ] })
        ]
      },
      index
    )) })
  ] }) });
};

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "File Management Made Simple | Desktop Commander", "description": "Organize, convert, and manage files using natural language. No uploading, everything stays on your computer. Works with HEIC, PDF, CSV, and more." }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "PostHogInit", PostHogInit, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/rk/DC/main-web/src/components/PostHogInit", "client:component-export": "default" })} ${maybeRenderHead()}<div class="min-h-screen bg-background"> ${renderComponent($$result2, "NavigationLandingPage", NavigationLandingPage, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/rk/DC/main-web/src/components/NavigationLandingPage", "client:component-export": "default" })} <main> <!-- Hero Section --> ${renderComponent($$result2, "FileManagementHero", FileManagementHero, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/rk/DC/main-web/src/components/use-cases/FileManagementHero", "client:component-export": "default" })} <!-- Popular Conversions - High visibility for SEO --> ${renderComponent($$result2, "FMPopularConversions", FMPopularConversions, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/rk/DC/main-web/src/components/use-cases/file-management/FMPopularConversions", "client:component-export": "default" })} <!-- Problem Section --> ${renderComponent($$result2, "ProblemSection", ProblemSection, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/rk/DC/main-web/src/components/use-cases/ProblemSection", "client:component-export": "default" })} <!-- Solution Section with Features --> ${renderComponent($$result2, "SolutionSection", SolutionSection, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/rk/DC/main-web/src/components/use-cases/SolutionSection", "client:component-export": "default" })} <!-- How It Works Flow --> ${renderComponent($$result2, "HowItWorksSimple", HowItWorksFlowSection, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/rk/DC/main-web/src/components/use-cases/HowItWorksSimple", "client:component-export": "default" })} <!-- Privacy Diagram --> ${renderComponent($$result2, "PrivacyDiagramSection", PrivacyDiagramSection, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/rk/DC/main-web/src/components/use-cases/PrivacyDiagramSection", "client:component-export": "default" })} <!-- Testimonials --> ${renderComponent($$result2, "TestimonialsSection", TestimonialsSection, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/rk/DC/main-web/src/components/use-cases/TestimonialsSection", "client:component-export": "default" })} <!-- How It Works / Waitlist --> ${renderComponent($$result2, "WaitlistSection", WaitlistSection, { "useCase": "file_management", "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/rk/DC/main-web/src/components/use-cases/WaitlistSection", "client:component-export": "default" })} <!-- Final CTA --> ${renderComponent($$result2, "FinalCTASection", FinalCTASection, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/rk/DC/main-web/src/components/use-cases/FinalCTASection", "client:component-export": "default" })} </main> ${renderComponent($$result2, "Footer", Footer, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/rk/DC/main-web/src/components/Footer", "client:component-export": "default" })} </div> ` })} `;
}, "/Users/rk/DC/main-web/astro-src/pages/use-cases/file-management/index.astro", void 0);

const $$file = "/Users/rk/DC/main-web/astro-src/pages/use-cases/file-management/index.astro";
const $$url = "/use-cases/file-management/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
