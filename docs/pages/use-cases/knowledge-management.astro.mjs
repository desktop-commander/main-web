import { c as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_Dp1VJtNq.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../../chunks/dc-logo_6kTUD2wC.mjs';
import { P as PostHogInit } from '../../chunks/PostHogInit_DvwonWEB.mjs';
import { D as DownloadButtons, N as NavigationLandingPage } from '../../chunks/DownloadButtons_D1sVK0uh.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { B as Button, t as trackDownloadRedirect, F as Footer } from '../../chunks/Footer_CPzrBBdI.mjs';
import { Download, ArrowRight, AlertCircle, FolderOpen, MessageSquare, Command, Sparkles, FileEdit, Move, BookOpen, RefreshCw, FolderTree, Network, XCircle, CheckCircle, GitBranch, Code, Briefcase, Users, Check } from 'lucide-react';
import { useRef, useEffect } from 'react';
import { W as WaitlistSection } from '../../chunks/WaitlistSection_CPoRbun7.mjs';
/* empty css                                    */
export { renderers } from '../../renderers.mjs';

const KnowledgeManagementHero = () => {
  return /* @__PURE__ */ jsx("section", { className: "pt-32 pb-16 md:pt-40 md:pb-20", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto max-w-6xl px-4 sm:px-6", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center text-center space-y-8", children: [
    /* @__PURE__ */ jsxs("h1", { className: "text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight max-w-4xl", children: [
      "Your AI knowledge assistant —",
      " ",
      /* @__PURE__ */ jsx("span", { className: "text-primary", children: "organize your knowledge in local filesystem by talking with AI" })
    ] }),
    /* @__PURE__ */ jsx("p", { className: "text-lg sm:text-xl text-muted-foreground max-w-3xl leading-relaxed", children: "Keep your knowledge base up-to-date automatically by directly managing your markdown files, documentation, and notes." }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center justify-center gap-3 pt-2", children: [
      /* @__PURE__ */ jsx("span", { className: "text-sm text-muted-foreground", children: "Works with:" }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center justify-center gap-2", children: [
        /* @__PURE__ */ jsx("span", { className: "px-3 py-1.5 rounded-full bg-dc-surface border border-dc-border text-sm font-medium", children: "Obsidian" }),
        /* @__PURE__ */ jsx("span", { className: "px-3 py-1.5 rounded-full bg-dc-surface border border-dc-border text-sm font-medium", children: "Google Drive" }),
        /* @__PURE__ */ jsx("span", { className: "px-3 py-1.5 rounded-full bg-dc-surface border border-dc-border text-sm font-medium", children: "VS Code" }),
        /* @__PURE__ */ jsx("span", { className: "px-3 py-1.5 rounded-full bg-dc-surface border border-dc-border text-sm font-medium", children: "Local Files" })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex flex-col sm:flex-row gap-4 pt-4", children: /* @__PURE__ */ jsx(
      Button,
      {
        size: "lg",
        asChild: true,
        className: "group",
        children: /* @__PURE__ */ jsxs("a", { href: "#get-started", onClick: () => trackDownloadRedirect("knowledge_management_hero"), children: [
          /* @__PURE__ */ jsx(Download, { className: "w-5 h-5" }),
          "Download App",
          /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4 group-hover:translate-x-1 transition-transform" })
        ] })
      }
    ) })
  ] }) }) });
};

const KMProblemSection = () => {
  return /* @__PURE__ */ jsx("section", { className: "py-16 md:py-20", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto max-w-5xl px-4 sm:px-6", children: /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-br from-dc-card to-dc-surface rounded-2xl border border-dc-border p-8 md:p-12", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4 mb-6", children: [
      /* @__PURE__ */ jsx("div", { className: "p-3 rounded-xl bg-destructive/10 border border-destructive/20", children: /* @__PURE__ */ jsx(AlertCircle, { className: "w-6 h-6 text-destructive" }) }),
      /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold", children: "Without organized context, AI tools can't deliver their full value." })
    ] }),
    /* @__PURE__ */ jsx("p", { className: "text-xl text-muted-foreground leading-relaxed", children: "Each AI conversation could build on the last. Instead, insights disappear when tabs close. Documentation goes stale. The same questions get asked repeatedly because the context that would make AI truly powerful remains fragmented across tools." })
  ] }) }) });
};

const KMSolutionSection = () => {
  const videoRef = useRef(null);
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch(() => {
            });
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.5 }
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);
  const steps = [
    {
      icon: Download,
      title: "Install Desktop Commander",
      description: "Download the app and connect your preferred AI model (Claude, GPT-4, etc.)"
    },
    {
      icon: FolderOpen,
      title: "Point to your project folder",
      description: "Tell it where your files live—Obsidian vault, codebase, or any local folder"
    },
    {
      icon: MessageSquare,
      title: "Work naturally with your AI",
      description: "Ask questions, discuss ideas, get help—just like normal chat"
    },
    {
      icon: Command,
      title: "Use simple commands to manage your knowledge",
      description: '"Save this to my notes" • "Organize by topic" • "Update the README"'
    }
  ];
  const features = [
    {
      title: "Turn conversations into permanent knowledge",
      command: "Save this explanation to my notes",
      icon: BookOpen
    },
    {
      title: "Keep documentation synchronized",
      command: "Update the README based on our changes",
      icon: RefreshCw
    },
    {
      title: "Organize without manual filing",
      command: "Move meeting notes to Q4 folder",
      icon: FolderTree
    },
    {
      title: "Build living knowledge bases",
      command: "Create a technical spec from our discussion",
      icon: Network
    }
  ];
  const benefits = [
    {
      icon: Sparkles,
      title: "Never lose valuable insights",
      description: "Every useful answer can be instantly saved to your knowledge base"
    },
    {
      icon: FileEdit,
      title: "Self-maintaining documentation",
      description: "Your notes and docs update themselves based on your work"
    },
    {
      icon: Move,
      title: "End context switching",
      description: "Work with your AI and your files in one unified flow"
    }
  ];
  return /* @__PURE__ */ jsx("section", { className: "py-16 md:py-24 bg-gradient-to-b from-background to-dc-card/30", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto max-w-6xl px-4 sm:px-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-16", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl lg:text-5xl font-bold mb-6", children: "How Desktop Commander Solves It" }),
      /* @__PURE__ */ jsx("p", { className: "text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto", children: "Desktop Commander doesn't just read your files—it writes, edits, and organizes them directly." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16", children: steps.map((step, index) => /* @__PURE__ */ jsxs("div", { className: "relative flex flex-col items-center text-center", children: [
      /* @__PURE__ */ jsx("div", { className: "w-16 h-16 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center mb-4", children: /* @__PURE__ */ jsx(step.icon, { className: "w-8 h-8 text-primary" }) }),
      /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-1/2 translate-x-4 -translate-y-1 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xs", children: index + 1 }),
      /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold mb-2", children: step.title }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm", children: step.description })
    ] }, index)) }),
    /* @__PURE__ */ jsx("div", { className: "flex justify-center mt-10", children: /* @__PURE__ */ jsx(DownloadButtons, { location: "knowledge_management" }) }),
    /* @__PURE__ */ jsxs("div", { className: "my-16 text-center", children: [
      /* @__PURE__ */ jsx("div", { className: "w-16 h-px bg-dc-border mx-auto mb-8" }),
      /* @__PURE__ */ jsx("h3", { className: "text-2xl md:text-3xl font-bold mb-4", children: "What you get" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-6 mb-20", children: benefits.map((benefit, index) => /* @__PURE__ */ jsxs(
      "div",
      {
        className: "p-6 rounded-2xl bg-gradient-to-b from-dc-surface to-dc-card border-2 border-dc-border hover:border-primary/50 transition-colors text-center",
        children: [
          /* @__PURE__ */ jsx("div", { className: "w-14 h-14 rounded-full bg-primary/10 border-2 border-primary/20 flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsx(benefit.icon, { className: "w-7 h-7 text-primary" }) }),
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold mb-2", children: benefit.title }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm", children: benefit.description })
        ]
      },
      index
    )) }),
    /* @__PURE__ */ jsxs("div", { className: "mb-20", children: [
      /* @__PURE__ */ jsx("div", { className: "text-center mb-8", children: /* @__PURE__ */ jsx("h3", { className: "text-2xl md:text-3xl font-bold", children: "See it in action" }) }),
      /* @__PURE__ */ jsx("div", { className: "relative aspect-video w-full rounded-2xl border-2 border-dc-border bg-dc-card overflow-hidden", children: /* @__PURE__ */ jsxs(
        "video",
        {
          ref: videoRef,
          className: "w-full h-full object-cover",
          controls: true,
          muted: true,
          loop: true,
          preload: "metadata",
          playsInline: true,
          title: "Desktop Commander Knowledge Management Demo - Create and organize notes with AI",
          "aria-label": "Video demonstration of Desktop Commander creating and managing knowledge base notes using natural language commands",
          children: [
            /* @__PURE__ */ jsx("source", { src: "/videos/knowledge-management-demo.mp4", type: "video/mp4" }),
            "Your browser does not support the video tag."
          ]
        }
      ) }),
      /* @__PURE__ */ jsx("p", { className: "text-center text-sm text-muted-foreground mt-4", children: "Create, update, and organize your knowledge base with simple commands" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-6 max-w-4xl mx-auto", children: features.map((feature, index) => /* @__PURE__ */ jsx(
      "div",
      {
        className: "p-6 rounded-xl bg-dc-surface border border-dc-border hover:border-primary/30 transition-colors",
        children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4", children: [
          /* @__PURE__ */ jsx("div", { className: "p-2 rounded-lg bg-primary/10 border border-primary/20", children: /* @__PURE__ */ jsx(feature.icon, { className: "w-5 h-5 text-primary" }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold mb-2", children: feature.title }),
            /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground font-mono text-sm", children: [
              '"',
              feature.command,
              '"'
            ] })
          ] })
        ] })
      },
      index
    )) })
  ] }) });
};

const KMWhyDifferentSection = () => {
  const traditionalSteps = [
    "Upload or paste context files every session",
    "Re-explain project background each time",
    "Copy valuable answers before tab closes",
    'Manually maintain what the AI should "remember"',
    "Start from zero in the next conversation"
  ];
  const dcSteps = [
    'Point to knowledge base folder once: "Use ~/Documents/ProjectContext"',
    "AI automatically finds relevant context for each question",
    "Answers build on existing knowledge",
    "Updates context files as work progresses",
    "Every conversation starts where the last one ended"
  ];
  return /* @__PURE__ */ jsx("section", { className: "py-16 md:py-24", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto max-w-6xl px-4 sm:px-6", children: [
    /* @__PURE__ */ jsx("div", { className: "text-center mb-16", children: /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl lg:text-5xl font-bold mb-4", children: "Why Desktop Commander is Different" }) }),
    /* @__PURE__ */ jsxs("div", { className: "mb-12", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-2xl md:text-3xl font-bold text-center mb-8", children: "Context That Persists Across Conversations" }),
      /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4 p-6 rounded-xl bg-red-500/5 border-2 border-red-500/20", children: [
          /* @__PURE__ */ jsx("div", { className: "shrink-0 w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center", children: /* @__PURE__ */ jsx(XCircle, { className: "w-6 h-6 text-red-400" }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h4", { className: "text-xl font-semibold mb-4 text-red-400", children: "Traditional AI Chat" }),
            /* @__PURE__ */ jsx("ul", { className: "space-y-3 text-muted-foreground", children: traditionalSteps.map((step, index) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
              /* @__PURE__ */ jsxs("span", { className: "text-red-400 font-mono text-sm mt-0.5", children: [
                index + 1,
                "."
              ] }),
              /* @__PURE__ */ jsx("span", { children: step })
            ] }, index)) })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4 p-6 rounded-xl bg-green-500/5 border-2 border-green-500/20", children: [
          /* @__PURE__ */ jsx("div", { className: "shrink-0 w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center", children: /* @__PURE__ */ jsx(CheckCircle, { className: "w-6 h-6 text-green-400" }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h4", { className: "text-xl font-semibold mb-4 text-green-400", children: "With Desktop Commander" }),
            /* @__PURE__ */ jsx("ul", { className: "space-y-3 text-muted-foreground", children: dcSteps.map((step, index) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
              /* @__PURE__ */ jsxs("span", { className: "text-green-400 font-mono text-sm mt-0.5", children: [
                index + 1,
                "."
              ] }),
              /* @__PURE__ */ jsx("span", { children: step })
            ] }, index)) })
          ] })
        ] })
      ] })
    ] })
  ] }) });
};

const KMToolsSection = () => {
  const tools = [
    {
      name: "Obsidian",
      icon: "📓",
      features: [
        "Writes new notes directly to your vault",
        "Updates existing notes with new information",
        "Creates backlinks and tags automatically"
      ]
    },
    {
      name: "VS Code & Codebases",
      icon: "💻",
      features: [
        "Generates documentation from code",
        "Updates README files automatically",
        "Creates architecture notes from your codebase"
      ]
    },
    {
      name: "Google Drive",
      icon: "☁️",
      features: [
        "Edits documents in place",
        "Organizes files across folders",
        "Creates summary documents"
      ]
    },
    {
      name: "Local Markdown Files",
      icon: "📁",
      features: [
        "Complete privacy—everything stays on your machine",
        "Works with any markdown-based system",
        "Git-friendly for version control"
      ]
    }
  ];
  return /* @__PURE__ */ jsx("section", { className: "py-16 md:py-24", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto max-w-6xl px-4 sm:px-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-16", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl lg:text-5xl font-bold mb-4", children: "Works With Your Existing Tools" }),
      /* @__PURE__ */ jsx("p", { className: "text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto", children: "Desktop Commander enhances the tools you already use, without replacing them" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-6", children: tools.map((tool, index) => /* @__PURE__ */ jsxs(
      "div",
      {
        className: "p-6 rounded-2xl border border-dc-border bg-dc-card hover:border-primary/30 transition-all",
        children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
            /* @__PURE__ */ jsx("span", { className: "text-3xl", children: tool.icon }),
            /* @__PURE__ */ jsxs("h3", { className: "text-xl font-bold", children: [
              "With ",
              tool.name
            ] })
          ] }),
          /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: tool.features.map((feature, fIndex) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2 text-muted-foreground", children: [
            /* @__PURE__ */ jsx(CheckCircle, { className: "w-4 h-4 text-primary mt-1 shrink-0" }),
            /* @__PURE__ */ jsx("span", { children: feature })
          ] }, fIndex)) })
        ]
      },
      index
    )) })
  ] }) });
};

const KMWhyMarkdownSection = () => {
  return /* @__PURE__ */ jsx("section", { className: "py-16 md:py-24", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto max-w-4xl px-4 sm:px-6", children: /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl lg:text-5xl font-bold mb-8", children: "Why Markdown Files?" }),
    /* @__PURE__ */ jsx("p", { className: "text-lg md:text-xl text-muted-foreground leading-relaxed", children: "Markdown is the only format that's native to both AI and humans. Large language models don't need to parse proprietary formats or guess at structure—they read and write markdown fluently. And unlike database entries or app-specific notes, your knowledge stays in plain text files you can open anywhere, on any device, decades from now." })
  ] }) }) });
};

const KMGitNativeSection = () => {
  const features = [
    "Every change can be committed and tracked",
    "Push to GitHub for backup without proprietary sync",
    "Use existing developer workflows for documentation",
    "Collaborate through pull requests, not permission settings",
    "Roll back changes using Git history, not app-specific versions"
  ];
  return /* @__PURE__ */ jsx("section", { className: "py-16 md:py-24 bg-gradient-to-b from-background to-dc-card/30", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto max-w-5xl px-4 sm:px-6", children: /* @__PURE__ */ jsx("div", { className: "bg-gradient-to-br from-dc-card to-dc-surface rounded-2xl border border-dc-border p-8 md:p-12", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row items-start gap-6", children: [
    /* @__PURE__ */ jsx("div", { className: "p-4 rounded-2xl bg-primary/10 border-2 border-primary/20 shrink-0", children: /* @__PURE__ */ jsx(GitBranch, { className: "w-10 h-10 text-primary" }) }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold mb-4", children: "Git-Native Knowledge Management" }),
      /* @__PURE__ */ jsx("p", { className: "text-lg text-muted-foreground mb-6", children: "Unlike cloud-based tools, Desktop Commander's markdown approach is Git-friendly:" }),
      /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-2 gap-4", children: features.map((feature, index) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
        /* @__PURE__ */ jsx(CheckCircle, { className: "w-5 h-5 text-primary mt-0.5 shrink-0" }),
        /* @__PURE__ */ jsx("span", { className: "text-foreground", children: feature })
      ] }, index)) })
    ] })
  ] }) }) }) });
};

const KMPersonasSection = () => {
  const personas = [
    {
      icon: Code,
      title: "Developers",
      color: "blue",
      useCases: [
        "Generate documentation from codebases",
        "Update README files after code changes",
        "Create architecture notes from existing code",
        "Maintain technical specs alongside development"
      ]
    },
    {
      icon: Briefcase,
      title: "Knowledge Workers",
      color: "purple",
      useCases: [
        "Build and maintain project context documents",
        "Transform meeting notes into actionable documentation",
        "Create knowledge bases from scattered information",
        "Organize Obsidian vaults and markdown files automatically"
      ]
    },
    {
      icon: Users,
      title: "Teams",
      color: "green",
      useCases: [
        "Keep shared documentation current",
        "Synchronize knowledge across tools",
        "Create project overviews from scattered files",
        "Maintain decision logs from discussions"
      ]
    }
  ];
  const getColorClasses = (color) => {
    switch (color) {
      case "blue":
        return {
          bg: "bg-blue-500/10",
          border: "border-blue-500/30",
          iconBg: "bg-blue-500/20",
          iconColor: "text-blue-400",
          titleColor: "text-blue-400"
        };
      case "purple":
        return {
          bg: "bg-purple-500/10",
          border: "border-purple-500/30",
          iconBg: "bg-purple-500/20",
          iconColor: "text-purple-400",
          titleColor: "text-purple-400"
        };
      case "green":
        return {
          bg: "bg-green-500/10",
          border: "border-green-500/30",
          iconBg: "bg-green-500/20",
          iconColor: "text-green-400",
          titleColor: "text-green-400"
        };
      default:
        return {
          bg: "bg-primary/10",
          border: "border-primary/30",
          iconBg: "bg-primary/20",
          iconColor: "text-primary",
          titleColor: "text-primary"
        };
    }
  };
  return /* @__PURE__ */ jsx("section", { className: "py-16 md:py-24 bg-gradient-to-b from-background to-dc-card/30", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto max-w-6xl px-4 sm:px-6", children: [
    /* @__PURE__ */ jsx("div", { className: "text-center mb-16", children: /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl lg:text-5xl font-bold mb-4", children: "What Our Users Do with Desktop Commander" }) }),
    /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-6", children: personas.map((persona, index) => {
      const colors = getColorClasses(persona.color);
      return /* @__PURE__ */ jsxs(
        "div",
        {
          className: `p-6 rounded-2xl ${colors.bg} border-2 ${colors.border} transition-all hover:scale-[1.02]`,
          children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
              /* @__PURE__ */ jsx("div", { className: `w-12 h-12 rounded-full ${colors.iconBg} flex items-center justify-center`, children: /* @__PURE__ */ jsx(persona.icon, { className: `w-6 h-6 ${colors.iconColor}` }) }),
              /* @__PURE__ */ jsx("h3", { className: `text-xl font-bold ${colors.titleColor}`, children: persona.title })
            ] }),
            /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: persona.useCases.map((useCase, uIndex) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2 text-foreground", children: [
              /* @__PURE__ */ jsx("span", { className: `${colors.iconColor} mt-1.5`, children: "•" }),
              /* @__PURE__ */ jsx("span", { children: useCase })
            ] }, uIndex)) })
          ]
        },
        index
      );
    }) })
  ] }) });
};

const KMFinalCTASection = () => {
  return /* @__PURE__ */ jsx("section", { className: "py-16 md:py-24", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto max-w-4xl px-4 sm:px-6", children: /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-br from-primary/10 via-primary/5 to-transparent rounded-2xl border border-primary/20 p-8 md:p-12 text-center", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl lg:text-5xl font-bold mb-6", children: "Your knowledge deserves better than copy-paste." }),
    /* @__PURE__ */ jsx("p", { className: "text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto", children: "Desktop Commander transforms AI conversations into permanent, organized knowledge. Stop losing valuable insights to closed browser tabs—build a knowledge base that maintains itself." }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-2 mb-4", children: [
      /* @__PURE__ */ jsx(Download, { className: "w-5 h-5 text-primary" }),
      /* @__PURE__ */ jsx("span", { className: "text-lg font-semibold", children: "Download Desktop Commander" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex flex-col sm:flex-row gap-4 justify-center mb-8", children: /* @__PURE__ */ jsx(DownloadButtons, { variant: "hero", location: "knowledge_management" }) }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center gap-4 text-sm text-muted-foreground", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center justify-center gap-2", children: [
        /* @__PURE__ */ jsx("span", { children: "Works with:" }),
        /* @__PURE__ */ jsx("span", { className: "px-2 py-1 rounded bg-dc-surface border border-dc-border", children: "Obsidian" }),
        /* @__PURE__ */ jsx("span", { className: "px-2 py-1 rounded bg-dc-surface border border-dc-border", children: "Google Drive" }),
        /* @__PURE__ */ jsx("span", { className: "px-2 py-1 rounded bg-dc-surface border border-dc-border", children: "VS Code" }),
        /* @__PURE__ */ jsx("span", { className: "px-2 py-1 rounded bg-dc-surface border border-dc-border", children: "Local Files" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-primary", children: [
        /* @__PURE__ */ jsx(Check, { className: "w-4 h-4" }),
        /* @__PURE__ */ jsx("span", { children: "Turn conversations into knowledge. Automatically." })
      ] })
    ] })
  ] }) }) });
};

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Knowledge Management Made Simple | Desktop Commander", "description": "Write, edit, and organize markdown files in natural language. Turn AI conversations into permanent knowledge. Works with Obsidian, Google Drive, VS Code, and local files." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "PostHogInit", PostHogInit, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/rk/DC/main-web/src/components/PostHogInit", "client:component-export": "default" })} ${maybeRenderHead()}<div class="min-h-screen bg-background"> ${renderComponent($$result2, "NavigationLandingPage", NavigationLandingPage, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/rk/DC/main-web/src/components/NavigationLandingPage", "client:component-export": "default" })} <main> ${renderComponent($$result2, "KnowledgeManagementHero", KnowledgeManagementHero, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/rk/DC/main-web/src/components/use-cases/knowledge-management/KnowledgeManagementHero", "client:component-export": "default" })} ${renderComponent($$result2, "KMProblemSection", KMProblemSection, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/rk/DC/main-web/src/components/use-cases/knowledge-management/KMProblemSection", "client:component-export": "default" })} ${renderComponent($$result2, "KMSolutionSection", KMSolutionSection, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/rk/DC/main-web/src/components/use-cases/knowledge-management/KMSolutionSection", "client:component-export": "default" })} ${renderComponent($$result2, "KMWhyDifferentSection", KMWhyDifferentSection, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/rk/DC/main-web/src/components/use-cases/knowledge-management/KMWhyDifferentSection", "client:component-export": "default" })} ${renderComponent($$result2, "KMWhyMarkdownSection", KMWhyMarkdownSection, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/rk/DC/main-web/src/components/use-cases/knowledge-management/KMWhyMarkdownSection", "client:component-export": "default" })} ${renderComponent($$result2, "KMToolsSection", KMToolsSection, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/rk/DC/main-web/src/components/use-cases/knowledge-management/KMToolsSection", "client:component-export": "default" })} ${renderComponent($$result2, "KMGitNativeSection", KMGitNativeSection, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/rk/DC/main-web/src/components/use-cases/knowledge-management/KMGitNativeSection", "client:component-export": "default" })} ${renderComponent($$result2, "KMPersonasSection", KMPersonasSection, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/rk/DC/main-web/src/components/use-cases/knowledge-management/KMPersonasSection", "client:component-export": "default" })} ${renderComponent($$result2, "WaitlistSection", WaitlistSection, { "useCase": "knowledge_management", "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/rk/DC/main-web/src/components/use-cases/WaitlistSection", "client:component-export": "default" })} ${renderComponent($$result2, "KMFinalCTASection", KMFinalCTASection, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/rk/DC/main-web/src/components/use-cases/knowledge-management/KMFinalCTASection", "client:component-export": "default" })} </main> ${renderComponent($$result2, "Footer", Footer, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/rk/DC/main-web/src/components/Footer", "client:component-export": "default" })} </div> ` })} `;
}, "/Users/rk/DC/main-web/astro-src/pages/use-cases/knowledge-management/index.astro", void 0);

const $$file = "/Users/rk/DC/main-web/astro-src/pages/use-cases/knowledge-management/index.astro";
const $$url = "/use-cases/knowledge-management/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
