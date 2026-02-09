import { c as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_Dp1VJtNq.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../../chunks/dc-logo_6kTUD2wC.mjs';
import { P as PostHogInit } from '../../chunks/PostHogInit_DvwonWEB.mjs';
import { D as DownloadButtons, N as NavigationLandingPage } from '../../chunks/DownloadButtons_D1sVK0uh.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { B as Button, t as trackDownloadRedirect, F as Footer } from '../../chunks/Footer_CPzrBBdI.mjs';
import { Download, ArrowRight, AlertCircle, Code, Link, Rocket, Globe, Terminal, Server, HardDrive, GitBranch, Lightbulb, CheckCircle, XCircle, Monitor, Cog, FolderOpen, MessageSquare, Briefcase, Palette } from 'lucide-react';
import { W as WaitlistSection } from '../../chunks/WaitlistSection_CPoRbun7.mjs';
/* empty css                                    */
export { renderers } from '../../renderers.mjs';

const BPHeroSection = () => {
  return /* @__PURE__ */ jsx("section", { className: "pt-32 pb-16 md:pt-40 md:pb-20", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto max-w-6xl px-4 sm:px-6", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center text-center space-y-8", children: [
    /* @__PURE__ */ jsxs("h1", { className: "text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight max-w-4xl", children: [
      "Build software ",
      /* @__PURE__ */ jsx("span", { className: "text-primary", children: "without learning how to code" })
    ] }),
    /* @__PURE__ */ jsx("p", { className: "text-lg sm:text-xl text-muted-foreground max-w-3xl leading-relaxed", children: "Describe what you want to build—AI writes the code, saves it locally, and you own every file." }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center justify-center gap-3 pt-2", children: [
      /* @__PURE__ */ jsx("span", { className: "text-sm text-muted-foreground", children: "Works with:" }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center justify-center gap-2", children: [
        /* @__PURE__ */ jsx("span", { className: "px-3 py-1.5 rounded-full bg-dc-surface border border-dc-border text-sm font-medium", children: "Python" }),
        /* @__PURE__ */ jsx("span", { className: "px-3 py-1.5 rounded-full bg-dc-surface border border-dc-border text-sm font-medium", children: "JavaScript" }),
        /* @__PURE__ */ jsx("span", { className: "px-3 py-1.5 rounded-full bg-dc-surface border border-dc-border text-sm font-medium", children: "HTML/CSS" }),
        /* @__PURE__ */ jsx("span", { className: "px-3 py-1.5 rounded-full bg-dc-surface border border-dc-border text-sm font-medium", children: "Git" }),
        /* @__PURE__ */ jsx("span", { className: "px-3 py-1.5 rounded-full bg-dc-surface border border-dc-border text-sm font-medium", children: "Terminal" })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex flex-col sm:flex-row gap-4 pt-4", children: /* @__PURE__ */ jsx(
      Button,
      {
        size: "lg",
        asChild: true,
        className: "group",
        children: /* @__PURE__ */ jsxs("a", { href: "#get-started", onClick: () => trackDownloadRedirect("build_prototype_hero"), children: [
          /* @__PURE__ */ jsx(Download, { className: "w-5 h-5" }),
          "Download App",
          /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4 group-hover:translate-x-1 transition-transform" })
        ] })
      }
    ) })
  ] }) }) });
};

const BPProblemSection = () => {
  return /* @__PURE__ */ jsx("section", { className: "py-16 md:py-20", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto max-w-5xl px-4 sm:px-6", children: /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-br from-dc-card to-dc-surface rounded-2xl border border-dc-border p-8 md:p-12", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4 mb-6", children: [
      /* @__PURE__ */ jsx("div", { className: "p-3 rounded-xl bg-destructive/10 border border-destructive/20", children: /* @__PURE__ */ jsx(AlertCircle, { className: "w-6 h-6 text-destructive" }) }),
      /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold", children: "Technical barriers shouldn't stop you from building stuff." })
    ] }),
    /* @__PURE__ */ jsx("p", { className: "text-xl text-muted-foreground leading-relaxed", children: "Every founder has automation ideas, app concepts, and workflows that could save hours. But CLIs feel cryptic, deployment seems scary, and hiring a developer for a quick script doesn't make sense. So the ideas stay ideas." })
  ] }) }) });
};

const BPSolutionSection = () => {
  const features = [
    {
      title: "Build without learning to code",
      description: "Create functional apps, sites, and scripts—skip the technical learning curve and just build.",
      icon: Code
    },
    {
      title: "Connect the services you need",
      description: "Integrate APIs, databases, and third-party apps—just describe what should talk to what.",
      icon: Link
    },
    {
      title: "Deploy without the complexity",
      description: "Track changes in Git, deploy to GitHub Pages or anywhere else—no commands to memorize.",
      icon: Rocket
    }
  ];
  return /* @__PURE__ */ jsx("section", { className: "py-16 md:py-24 bg-gradient-to-b from-background to-dc-card/30", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto max-w-6xl px-4 sm:px-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-16", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl lg:text-5xl font-bold mb-6", children: "Desktop Commander turns plain English into working code on your machine." }),
      /* @__PURE__ */ jsx("p", { className: "text-xl text-muted-foreground max-w-3xl mx-auto", children: "It fills the gaps in your technical skills and lets you build like a full-stack developer." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-8 mb-12", children: features.map((feature, index) => /* @__PURE__ */ jsxs(
      "div",
      {
        className: "p-8 rounded-2xl bg-gradient-to-b from-dc-surface to-dc-card border-2 border-dc-border hover:border-primary/50 transition-colors text-center",
        children: [
          /* @__PURE__ */ jsx("div", { className: "w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-6", children: /* @__PURE__ */ jsx(feature.icon, { className: "w-8 h-8 text-primary" }) }),
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-3", children: feature.title }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed", children: feature.description })
        ]
      },
      index
    )) }),
    /* @__PURE__ */ jsx("div", { className: "text-center mb-16 p-6 rounded-xl bg-primary/5 border border-primary/20", children: /* @__PURE__ */ jsxs("p", { className: "text-xl md:text-2xl font-medium", children: [
      /* @__PURE__ */ jsx("span", { className: "text-primary font-bold", children: "70% of users" }),
      " save 3+ hours per week with Desktop Commander"
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "relative aspect-video rounded-xl border border-dc-border bg-dc-surface overflow-hidden max-w-4xl mx-auto shadow-lg", children: /* @__PURE__ */ jsxs(
      "video",
      {
        className: "w-full h-full object-cover",
        autoPlay: true,
        loop: true,
        muted: true,
        playsInline: true,
        "aria-label": "Desktop Commander build prototype demo - showing how to create software using natural language",
        title: "Build software with natural language - Desktop Commander demo",
        children: [
          /* @__PURE__ */ jsx("source", { src: "/videos/build-prototype-demo.mov", type: "video/quicktime" }),
          /* @__PURE__ */ jsx("source", { src: "/videos/build-prototype-demo.mov", type: "video/mp4" }),
          /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground", children: [
            "Your browser does not support the video tag. ",
            /* @__PURE__ */ jsx("a", { href: "/videos/build-prototype-demo.mov", className: "text-primary hover:underline", children: "Download the demo video" })
          ] })
        ]
      }
    ) })
  ] }) });
};

const BPExamplesSection = () => {
  const examples = [
    {
      title: "Build apps and webpages without coding",
      description: "Desktop Commander writes the HTML, CSS, and JavaScript, saves it locally, and you can preview it immediately.",
      command: "Create a simple landing page for my newsletter with an email signup form",
      icon: Globe
    },
    {
      title: "Write scripts that automate your workflow",
      description: "Working automation in seconds, not hours of Stack Overflow.",
      command: "Write a Python script that renames all my client folders to include today's date",
      icon: Terminal
    },
    {
      title: "Connect third-party services",
      description: "Integrate APIs, databases, and analytics without reading documentation.",
      command: "Add Google Analytics tracking to my project",
      icon: Link
    },
    {
      title: "Deploy and manage without DevOps knowledge",
      description: "Complex technical setup becomes a simple request.",
      command: "Set up a local development server for this project",
      icon: Server
    }
  ];
  return /* @__PURE__ */ jsx("section", { className: "py-16 md:py-24", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto max-w-4xl px-4 sm:px-6", children: [
    /* @__PURE__ */ jsx("div", { className: "space-y-8", children: examples.map((example, index) => /* @__PURE__ */ jsxs(
      "div",
      {
        className: "p-8 rounded-2xl border border-dc-border bg-dc-card",
        children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
            /* @__PURE__ */ jsx("div", { className: "p-2.5 rounded-lg bg-primary/10 border border-primary/20", children: /* @__PURE__ */ jsx(example.icon, { className: "w-5 h-5 text-primary" }) }),
            /* @__PURE__ */ jsx("h3", { className: "text-2xl font-semibold", children: example.title })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-lg text-muted-foreground mb-6", children: example.description }),
          /* @__PURE__ */ jsxs("div", { className: "p-4 rounded-lg bg-dc-surface border border-dc-border font-mono text-sm", children: [
            '"',
            example.command,
            '"'
          ] })
        ]
      },
      index
    )) }),
    /* @__PURE__ */ jsx("div", { className: "text-center pt-12", children: /* @__PURE__ */ jsx(
      Button,
      {
        variant: "outline",
        size: "lg",
        asChild: true,
        className: "group",
        children: /* @__PURE__ */ jsxs("a", { href: "/library/", children: [
          "Explore More Prompts",
          /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4 group-hover:translate-x-1 transition-transform" })
        ] })
      }
    ) })
  ] }) });
};

const BPWhyDifferentSection = () => {
  const points = [
    {
      icon: HardDrive,
      title: "Build locally, deploy anywhere",
      description: "Everything runs on your machine first. No cloud IDE, no vendor lock-in. When you're ready, connect to databases, APIs, or deploy to any hosting service. Local-first means faster iteration and complete ownership of your code."
    },
    {
      icon: GitBranch,
      title: "Save and undo without learning Git",
      description: "Want to track your changes? Just ask. Desktop Commander handles Git for you—save your progress, roll back mistakes, or restore earlier versions using natural language."
    },
    {
      icon: Lightbulb,
      title: "Learn by doing",
      description: "Watch how your requests become real code. Over time, you'll understand what's happening—without needing to learn first."
    }
  ];
  return /* @__PURE__ */ jsx("section", { className: "py-16 md:py-24 bg-gradient-to-b from-dc-card/30 to-background", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto max-w-6xl px-4 sm:px-6", children: [
    /* @__PURE__ */ jsx("div", { className: "text-center mb-16", children: /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl lg:text-5xl font-bold mb-4", children: "Why This Approach is Different" }) }),
    /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-8", children: points.map((point, index) => /* @__PURE__ */ jsxs(
      "div",
      {
        className: "p-6 rounded-xl border border-dc-border bg-dc-card hover:border-primary/30 transition-all",
        children: [
          /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4", children: /* @__PURE__ */ jsx(point.icon, { className: "w-6 h-6 text-primary" }) }),
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-3", children: point.title }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed", children: point.description })
        ]
      },
      index
    )) })
  ] }) });
};

const BPComparisonSection = () => {
  const withDC = [
    "Describe what you want in plain English",
    "Get working code in minutes",
    'Iterate instantly—"make the button blue," "add a login page"',
    'Git tracking and rollback—"commit this version," "roll back to yesterday"',
    'Connect tools and services—"set up Google Analytics for my project"',
    "Build locally, deploy when ready"
  ];
  const withoutDC = [
    "Learn syntax, frameworks, and CLI commands first",
    "Hours of tutorials and writing code manually",
    "Copy-paste from Stack Overflow and pray it works",
    "Manual Git commands (or no version control at all)"
  ];
  return /* @__PURE__ */ jsx("section", { className: "py-16 md:py-24", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto max-w-6xl px-4 sm:px-6", children: [
    /* @__PURE__ */ jsx("div", { className: "text-center mb-16", children: /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl lg:text-5xl font-bold mb-4", children: "With Desktop Commander vs. Without" }) }),
    /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4 p-6 rounded-xl bg-green-500/5 border-2 border-green-500/20", children: [
        /* @__PURE__ */ jsx("div", { className: "shrink-0 w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center", children: /* @__PURE__ */ jsx(CheckCircle, { className: "w-6 h-6 text-green-400" }) }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-4 text-green-400", children: "With Desktop Commander" }),
          /* @__PURE__ */ jsx("ul", { className: "space-y-3 text-muted-foreground", children: withDC.map((item, index) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsx(CheckCircle, { className: "w-4 h-4 text-green-400 mt-1 shrink-0" }),
            /* @__PURE__ */ jsx("span", { children: item })
          ] }, index)) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4 p-6 rounded-xl bg-red-500/5 border-2 border-red-500/20", children: [
        /* @__PURE__ */ jsx("div", { className: "shrink-0 w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center", children: /* @__PURE__ */ jsx(XCircle, { className: "w-6 h-6 text-red-400" }) }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-4 text-red-400", children: "Without Desktop Commander" }),
          /* @__PURE__ */ jsx("ul", { className: "space-y-3 text-muted-foreground", children: withoutDC.map((item, index) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsx(XCircle, { className: "w-4 h-4 text-red-400 mt-1 shrink-0" }),
            /* @__PURE__ */ jsx("span", { children: item })
          ] }, index)) })
        ] })
      ] })
    ] })
  ] }) });
};

const BPCloudComparisonSection = () => {
  const comparisonRows = [
    {
      aspect: "Where it runs",
      cloud: "Cloud servers with queues and usage limits",
      dc: "Directly on your machine—instant, unlimited"
    },
    {
      aspect: "What you get",
      cloud: "Generated code",
      dc: "Working result—dependencies installed, servers running"
    },
    {
      aspect: "Project context",
      cloud: "Copy-paste into each chat, re-explain every time",
      dc: "Sees your local files, picks up where you left off"
    },
    {
      aspect: "Interface",
      cloud: "Different tools for code, terminal, files",
      dc: "One chat for everything"
    }
  ];
  const cards = [
    {
      icon: Monitor,
      title: "Runs on your machine",
      description: "No cloud servers, no waiting, no limits. Start locally, deploy when ready."
    },
    {
      icon: Cog,
      title: "From idea to working result",
      description: "Installs dependencies, runs commands, shows results. Recipe vs. dinner."
    },
    {
      icon: FolderOpen,
      title: "Your files, always connected",
      description: "DC sees your files and picks up where you left off."
    },
    {
      icon: MessageSquare,
      title: "Just describe what you need",
      description: "Plain English for all technical tasks. No syntax to learn."
    }
  ];
  return /* @__PURE__ */ jsx("section", { className: "py-16 md:py-24 bg-gradient-to-b from-background to-dc-card/30", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto max-w-6xl px-4 sm:px-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl lg:text-5xl font-bold mb-3", children: "DC vs. Cloud AI Builders" }),
      /* @__PURE__ */ jsx("p", { className: "text-xl text-muted-foreground", children: "Build faster with full system access." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mb-16 overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "w-full border-collapse", children: [
      /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { children: [
        /* @__PURE__ */ jsx("th", { className: "p-4 text-left font-semibold border-b border-dc-border" }),
        /* @__PURE__ */ jsx("th", { className: "p-4 text-left font-semibold border-b border-dc-border text-muted-foreground", children: "Cloud AI Builders" }),
        /* @__PURE__ */ jsx("th", { className: "p-4 text-left font-semibold border-b border-dc-border text-primary", children: "Desktop Commander" })
      ] }) }),
      /* @__PURE__ */ jsx("tbody", { children: comparisonRows.map((row, index) => /* @__PURE__ */ jsxs("tr", { className: "border-b border-dc-border/50", children: [
        /* @__PURE__ */ jsx("td", { className: "p-4 font-medium", children: row.aspect }),
        /* @__PURE__ */ jsx("td", { className: "p-4 text-muted-foreground", children: row.cloud }),
        /* @__PURE__ */ jsx("td", { className: "p-4 text-foreground", children: row.dc })
      ] }, index)) })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-4 gap-6", children: cards.map((card, index) => /* @__PURE__ */ jsxs(
      "div",
      {
        className: "p-5 rounded-xl border border-dc-border bg-dc-card hover:border-primary/30 transition-all",
        children: [
          /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-3", children: /* @__PURE__ */ jsx(card.icon, { className: "w-5 h-5 text-primary" }) }),
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold mb-2", children: card.title }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: card.description })
        ]
      },
      index
    )) })
  ] }) });
};

const BPPersonasSection = () => {
  const personas = [
    {
      icon: Rocket,
      title: "Founders & Indie Builders",
      color: "blue",
      useCases: [
        "Landing pages and marketing sites",
        "MVPs to validate ideas before hiring developers",
        "Internal tools to run their business",
        "Automations that save hours each week"
      ]
    },
    {
      icon: Briefcase,
      title: "Multi-Hat Professionals",
      color: "purple",
      useCases: [
        "Scripts to automate repetitive tasks",
        "Data processing tools for reports",
        "Custom utilities for their workflow",
        "Quick prototypes to pitch ideas"
      ]
    },
    {
      icon: Palette,
      title: "Creators & Makers",
      color: "green",
      useCases: [
        "Portfolio sites and personal projects",
        "Tools to support their content workflow",
        "Experiments and side projects",
        "Learning projects to build technical skills"
      ]
    }
  ];
  const getColorClasses = (color) => {
    const colors = {
      blue: {
        bg: "bg-blue-500/5",
        border: "border-blue-500/30",
        iconBg: "bg-blue-500/20",
        iconColor: "text-blue-400",
        titleColor: "text-blue-400"
      },
      purple: {
        bg: "bg-purple-500/5",
        border: "border-purple-500/30",
        iconBg: "bg-purple-500/20",
        iconColor: "text-purple-400",
        titleColor: "text-purple-400"
      },
      green: {
        bg: "bg-green-500/5",
        border: "border-green-500/30",
        iconBg: "bg-green-500/20",
        iconColor: "text-green-400",
        titleColor: "text-green-400"
      }
    };
    return colors[color] || colors.blue;
  };
  return /* @__PURE__ */ jsx("section", { className: "py-16 md:py-24 bg-gradient-to-b from-background to-dc-card/30", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto max-w-6xl px-4 sm:px-6", children: [
    /* @__PURE__ */ jsx("div", { className: "text-center mb-16", children: /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl lg:text-5xl font-bold mb-4", children: "What Our Users Build with Desktop Commander" }) }),
    /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-8", children: personas.map((persona, index) => {
      const colors = getColorClasses(persona.color);
      return /* @__PURE__ */ jsxs(
        "div",
        {
          className: `p-6 rounded-xl ${colors.bg} border-2 ${colors.border}`,
          children: [
            /* @__PURE__ */ jsx("div", { className: `w-12 h-12 rounded-xl ${colors.iconBg} flex items-center justify-center mb-4`, children: /* @__PURE__ */ jsx(persona.icon, { className: `w-6 h-6 ${colors.iconColor}` }) }),
            /* @__PURE__ */ jsx("h3", { className: `text-xl font-semibold mb-4 ${colors.titleColor}`, children: persona.title }),
            /* @__PURE__ */ jsx("ul", { className: "space-y-2 text-muted-foreground", children: persona.useCases.map((useCase, ucIndex) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
              /* @__PURE__ */ jsx("span", { className: `w-1.5 h-1.5 rounded-full ${colors.iconBg} mt-2 shrink-0` }),
              /* @__PURE__ */ jsx("span", { children: useCase })
            ] }, ucIndex)) })
          ]
        },
        index
      );
    }) })
  ] }) });
};

const BPFinalCTASection = () => {
  return /* @__PURE__ */ jsx("section", { className: "py-16 md:py-24", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto max-w-4xl px-4 sm:px-6", children: /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-br from-primary/10 via-primary/5 to-transparent rounded-2xl border border-primary/20 p-8 md:p-12 text-center", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl lg:text-5xl font-bold mb-6", children: "Build things you never thought you could." }),
    /* @__PURE__ */ jsx("p", { className: "text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto", children: "Desktop Commander removes the technical barriers between your concepts and working software." }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-2 mb-4", children: [
      /* @__PURE__ */ jsx(Download, { className: "w-5 h-5 text-primary" }),
      /* @__PURE__ */ jsx("span", { className: "text-lg font-semibold", children: "Download Desktop Commander" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex flex-col sm:flex-row gap-4 justify-center mb-8", children: /* @__PURE__ */ jsx(DownloadButtons, { variant: "hero", location: "build_prototype" }) }),
    /* @__PURE__ */ jsx("div", { className: "flex flex-col items-center gap-4 text-sm text-muted-foreground", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
      /* @__PURE__ */ jsx("span", { children: "Build locally" }),
      /* @__PURE__ */ jsx("span", { className: "w-1 h-1 rounded-full bg-muted-foreground/50" }),
      /* @__PURE__ */ jsx("span", { children: "Ship anywhere" })
    ] }) })
  ] }) }) });
};

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Build Software in Natural Language | Desktop Commander", "description": "Build apps, scripts, and MVPs without learning to code. Describe what you want, get working code on your machine. Works with Python, JavaScript, HTML/CSS, Git, and Terminal." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "PostHogInit", PostHogInit, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/rk/DC/main-web/src/components/PostHogInit", "client:component-export": "default" })} ${maybeRenderHead()}<div class="min-h-screen bg-background"> ${renderComponent($$result2, "NavigationLandingPage", NavigationLandingPage, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/rk/DC/main-web/src/components/NavigationLandingPage", "client:component-export": "default" })} <main> ${renderComponent($$result2, "BPHeroSection", BPHeroSection, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/rk/DC/main-web/src/components/use-cases/build-prototype/BPHeroSection", "client:component-export": "default" })} ${renderComponent($$result2, "BPProblemSection", BPProblemSection, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/rk/DC/main-web/src/components/use-cases/build-prototype/BPProblemSection", "client:component-export": "default" })} ${renderComponent($$result2, "BPSolutionSection", BPSolutionSection, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/rk/DC/main-web/src/components/use-cases/build-prototype/BPSolutionSection", "client:component-export": "default" })} ${renderComponent($$result2, "BPExamplesSection", BPExamplesSection, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/rk/DC/main-web/src/components/use-cases/build-prototype/BPExamplesSection", "client:component-export": "default" })} ${renderComponent($$result2, "BPWhyDifferentSection", BPWhyDifferentSection, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/rk/DC/main-web/src/components/use-cases/build-prototype/BPWhyDifferentSection", "client:component-export": "default" })} ${renderComponent($$result2, "BPCloudComparisonSection", BPCloudComparisonSection, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/rk/DC/main-web/src/components/use-cases/build-prototype/BPCloudComparisonSection", "client:component-export": "default" })} ${renderComponent($$result2, "BPComparisonSection", BPComparisonSection, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/rk/DC/main-web/src/components/use-cases/build-prototype/BPComparisonSection", "client:component-export": "default" })} ${renderComponent($$result2, "WaitlistSection", WaitlistSection, { "useCase": "build_prototype", "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/rk/DC/main-web/src/components/use-cases/WaitlistSection", "client:component-export": "default" })} ${renderComponent($$result2, "BPPersonasSection", BPPersonasSection, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/rk/DC/main-web/src/components/use-cases/build-prototype/BPPersonasSection", "client:component-export": "default" })} ${renderComponent($$result2, "BPFinalCTASection", BPFinalCTASection, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/rk/DC/main-web/src/components/use-cases/build-prototype/BPFinalCTASection", "client:component-export": "default" })} </main> ${renderComponent($$result2, "Footer", Footer, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/rk/DC/main-web/src/components/Footer", "client:component-export": "default" })} </div> ` })} `;
}, "/Users/rk/DC/main-web/astro-src/pages/use-cases/build-prototype/index.astro", void 0);

const $$file = "/Users/rk/DC/main-web/astro-src/pages/use-cases/build-prototype/index.astro";
const $$url = "/use-cases/build-prototype/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
