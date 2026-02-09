import { c as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_Dp1VJtNq.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../../chunks/dc-logo_6kTUD2wC.mjs';
import { P as PostHogInit } from '../../chunks/PostHogInit_DvwonWEB.mjs';
import { D as DownloadButtons, N as NavigationLandingPage } from '../../chunks/DownloadButtons_D1sVK0uh.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { B as Button, t as trackDownloadRedirect, F as Footer } from '../../chunks/Footer_CPzrBBdI.mjs';
import { Download, ArrowRight, AlertCircle, Database, ShieldCheck, Zap, Search, MessageSquareText, RefreshCw, Table, MessageSquare, Code, Sparkles, HardDrive, Rocket, BarChart3 } from 'lucide-react';
/* empty css                                    */
export { renderers } from '../../renderers.mjs';

const ADHeroSection = () => {
  return /* @__PURE__ */ jsx("section", { className: "pt-32 pb-16 md:pt-40 md:pb-20", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto max-w-6xl px-4 sm:px-6", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center text-center space-y-8", children: [
    /* @__PURE__ */ jsxs("h1", { className: "text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight max-w-4xl", children: [
      "Analyze data ",
      /* @__PURE__ */ jsx("span", { className: "text-primary", children: "in natural language" })
    ] }),
    /* @__PURE__ */ jsx("p", { className: "text-lg sm:text-xl text-muted-foreground max-w-3xl leading-relaxed", children: "Process large files, find patterns, and automate reports—without learning Python or watching AI hallucinate your numbers." }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center justify-center gap-3 pt-2", children: [
      /* @__PURE__ */ jsx("span", { className: "text-sm text-muted-foreground", children: "Works with:" }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center justify-center gap-2", children: [
        /* @__PURE__ */ jsx("span", { className: "px-3 py-1.5 rounded-full bg-dc-surface border border-dc-border text-sm font-medium", children: "CSV" }),
        /* @__PURE__ */ jsx("span", { className: "px-3 py-1.5 rounded-full bg-dc-surface border border-dc-border text-sm font-medium", children: "Excel" }),
        /* @__PURE__ */ jsx("span", { className: "px-3 py-1.5 rounded-full bg-dc-surface border border-dc-border text-sm font-medium", children: "JSON" }),
        /* @__PURE__ */ jsx("span", { className: "px-3 py-1.5 rounded-full bg-dc-surface border border-dc-border text-sm font-medium", children: "Python" }),
        /* @__PURE__ */ jsx("span", { className: "px-3 py-1.5 rounded-full bg-dc-surface border border-dc-border text-sm font-medium", children: "Pandas" })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex flex-col sm:flex-row gap-4 pt-4", children: /* @__PURE__ */ jsx(
      Button,
      {
        size: "lg",
        asChild: true,
        className: "group",
        children: /* @__PURE__ */ jsxs("a", { href: "#get-started", onClick: () => trackDownloadRedirect("analyze_data_hero"), children: [
          /* @__PURE__ */ jsx(Download, { className: "w-5 h-5" }),
          "Download App",
          /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4 group-hover:translate-x-1 transition-transform" })
        ] })
      }
    ) })
  ] }) }) });
};

const ADProblemSection = () => {
  return /* @__PURE__ */ jsx("section", { className: "py-16 md:py-20", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto max-w-5xl px-4 sm:px-6", children: /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-br from-dc-card to-dc-surface rounded-2xl border border-dc-border p-8 md:p-12", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4 mb-6", children: [
      /* @__PURE__ */ jsx("div", { className: "p-3 rounded-xl bg-destructive/10 border border-destructive/20", children: /* @__PURE__ */ jsx(AlertCircle, { className: "w-6 h-6 text-destructive" }) }),
      /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold", children: "Data analysis shouldn't take so much time and effort." })
    ] }),
    /* @__PURE__ */ jsx("p", { className: "text-xl text-muted-foreground leading-relaxed", children: "You have spreadsheets full of answers—but getting them out is painful. Excel breaks on large files. ChatGPT hallucinates when you paste data in. Learning Python and Pandas takes weeks. So you either do it manually, hire someone, or make decisions without the full picture." })
  ] }) }) });
};

const ADSolutionSection = () => {
  const features = [
    {
      title: "Analyze files of any size",
      description: "Process thousands of rows without crashes or context limits—DC runs Python locally, not in a chat window.",
      icon: Database
    },
    {
      title: "Get accurate results, not hallucinations",
      description: "DC reads the actual file and runs real calculations on your machine—no guessing, no summarizing, no truncated data.",
      icon: ShieldCheck
    },
    {
      title: "Skip the Python learning curve",
      description: "Describe what you want to know. DC writes and runs the code for you.",
      icon: Zap
    }
  ];
  return /* @__PURE__ */ jsx("section", { className: "py-16 md:py-24 bg-gradient-to-b from-background to-dc-card/30", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto max-w-6xl px-4 sm:px-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-16", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl lg:text-5xl font-bold mb-6", children: "Desktop Commander turns plain English into accurate data analysis." }),
      /* @__PURE__ */ jsx("p", { className: "text-xl text-muted-foreground max-w-3xl mx-auto", children: "Describe what you want to know—DC writes Python scripts, runs them on your actual files, and returns real results." })
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
    /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center justify-center gap-3 md:gap-4 mb-12 p-6 rounded-xl bg-dc-surface border border-dc-border", children: [
      /* @__PURE__ */ jsx("span", { className: "text-lg font-medium", children: "Describe what you want" }),
      /* @__PURE__ */ jsx("span", { className: "text-primary text-xl", children: "→" }),
      /* @__PURE__ */ jsx("span", { className: "text-lg font-medium", children: "DC writes Python" }),
      /* @__PURE__ */ jsx("span", { className: "text-primary text-xl", children: "→" }),
      /* @__PURE__ */ jsx("span", { className: "text-lg font-medium", children: "Runs it on your actual file" }),
      /* @__PURE__ */ jsx("span", { className: "text-primary text-xl", children: "→" }),
      /* @__PURE__ */ jsx("span", { className: "text-lg font-medium text-primary", children: "Returns real results" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "relative aspect-video rounded-xl border border-dc-border bg-dc-surface overflow-hidden max-w-4xl mx-auto shadow-lg mb-12", children: /* @__PURE__ */ jsxs(
      "video",
      {
        className: "w-full h-full object-cover",
        autoPlay: true,
        loop: true,
        muted: true,
        playsInline: true,
        "aria-label": "Desktop Commander analyzing CSV data - showing how to get insights from spreadsheets using natural language",
        title: "Analyze CSV and Excel data with natural language - Desktop Commander demo",
        children: [
          /* @__PURE__ */ jsx("source", { src: "/videos/analyze-data-csv-demo.mp4", type: "video/mp4" }),
          /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground", children: [
            "Your browser does not support the video tag. ",
            /* @__PURE__ */ jsx("a", { href: "/videos/analyze-data-csv-demo.mp4", className: "text-primary hover:underline", children: "Download the demo video" })
          ] })
        ]
      }
    ) }),
    /* @__PURE__ */ jsx("div", { className: "text-center p-6 rounded-xl bg-primary/5 border border-primary/20", children: /* @__PURE__ */ jsxs("p", { className: "text-xl md:text-2xl font-medium", children: [
      /* @__PURE__ */ jsx("span", { className: "text-primary font-bold", children: "70% of users" }),
      " save 3+ hours per week with Desktop Commander"
    ] }) })
  ] }) });
};

const ADExamplesSection = () => {
  const examples = [
    {
      title: "Explore your data instantly",
      description: "Understand what you're working with before diving deep.",
      command: "Analyze the sales data in /Downloads/q4_sales.csv — show me the columns, data types, and any obvious patterns",
      icon: Search
    },
    {
      title: "Answer specific business questions",
      description: "Get the numbers you need without writing formulas.",
      command: "From this customer spreadsheet, show me which regions have the highest churn rate and break it down by plan type",
      icon: MessageSquareText
    },
    {
      title: "Automate recurring reports",
      description: "Build analysis you can run again and again.",
      command: "Create a Python script that generates a weekly summary from my transaction logs — totals by category, top 10 vendors, and month-over-month comparison",
      icon: RefreshCw
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

const ADComparisonSection = () => {
  const approaches = [
    {
      icon: Table,
      name: "Excel / Google Sheets",
      problem: "Slow and manual. Requires learning formulas, pivot tables, and navigating endless sheets.",
      color: "red"
    },
    {
      icon: MessageSquare,
      name: "Paste data into AI chat",
      problem: 'Context limits force you to truncate. AI "summarizes" instead of calculating. Hallucinated numbers.',
      color: "red"
    },
    {
      icon: Code,
      name: "Learn Python yourself",
      problem: "Weeks of tutorials before you're productive. Easy to make mistakes.",
      color: "red"
    },
    {
      icon: Sparkles,
      name: "Desktop Commander",
      problem: "Describe what you want → DC writes Python → runs it on your actual file → returns real results.",
      color: "green"
    }
  ];
  return /* @__PURE__ */ jsx("section", { className: "py-16 md:py-24", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto max-w-4xl px-4 sm:px-6", children: [
    /* @__PURE__ */ jsx("div", { className: "text-center mb-12", children: /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl lg:text-5xl font-bold mb-4", children: "Why This Approach Is Different" }) }),
    /* @__PURE__ */ jsx("div", { className: "space-y-4", children: approaches.map((approach, index) => /* @__PURE__ */ jsx(
      "div",
      {
        className: `p-6 rounded-xl border-2 ${approach.color === "green" ? "bg-green-500/5 border-green-500/30" : "bg-dc-card border-dc-border"}`,
        children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4", children: [
          /* @__PURE__ */ jsx("div", { className: `p-2.5 rounded-lg shrink-0 ${approach.color === "green" ? "bg-green-500/20" : "bg-dc-surface border border-dc-border"}`, children: /* @__PURE__ */ jsx(approach.icon, { className: `w-5 h-5 ${approach.color === "green" ? "text-green-400" : "text-muted-foreground"}` }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: `text-lg font-semibold mb-1 ${approach.color === "green" ? "text-green-400" : ""}`, children: approach.name }),
            /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: approach.problem })
          ] })
        ] })
      },
      index
    )) })
  ] }) });
};

const ADWhyDifferentSection = () => {
  const points = [
    {
      icon: HardDrive,
      title: "Files stay on your machine",
      description: "No uploading spreadsheets to websites. DC reads your files locally and runs Python scripts right on your computer—no context window limits."
    },
    {
      icon: Code,
      title: "Real code, real calculations",
      description: "DC doesn't guess at your data—it writes Python scripts that run actual computations. You can see the code, verify the logic, and reuse it."
    }
  ];
  return /* @__PURE__ */ jsx("section", { className: "py-16 md:py-24 bg-gradient-to-b from-dc-card/30 to-background", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto max-w-4xl px-4 sm:px-6", children: /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-8", children: points.map((point, index) => /* @__PURE__ */ jsxs(
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
  )) }) }) });
};

const ADWaitlistSection = () => {
  const steps = [
    {
      number: "1",
      title: "Download Desktop Commander",
      description: "One-time setup on your Mac or Windows computer. No accounts, no subscriptions required to start."
    },
    {
      number: "2",
      title: "Describe what you need",
      description: '"Analyze this CSV and find the top trends" or "Create a weekly report from my sales data" — just type it naturally.'
    },
    {
      number: "3",
      title: "Done",
      description: "Desktop Commander writes and runs Python scripts on your actual files. Real calculations, accurate results — all privately on your machine."
    }
  ];
  return /* @__PURE__ */ jsx("section", { id: "get-started", className: "py-16 md:py-24 bg-dc-card/30 scroll-mt-20", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto max-w-5xl px-4 sm:px-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-16", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl lg:text-5xl font-bold mb-4", children: "How It Works" }),
      /* @__PURE__ */ jsx("p", { className: "text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto", children: "Desktop Commander makes data analysis as simple as asking a question" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "space-y-8 md:space-y-12", children: steps.map((step, index) => /* @__PURE__ */ jsxs("div", { className: "flex gap-6 items-start", children: [
      /* @__PURE__ */ jsx("div", { className: "shrink-0 w-14 h-14 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center", children: /* @__PURE__ */ jsx("span", { className: "text-2xl font-bold text-primary", children: step.number }) }),
      /* @__PURE__ */ jsxs("div", { className: "flex-1 pt-2", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-2xl font-semibold mb-3", children: step.title }),
        /* @__PURE__ */ jsx("p", { className: "text-lg text-muted-foreground leading-relaxed mb-4", children: step.description }),
        index === 0 && /* @__PURE__ */ jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsx(DownloadButtons, { location: "analyze_data" }) })
      ] })
    ] }, index)) })
  ] }) });
};

const ADPersonasSection = () => {
  const personas = [
    {
      icon: Rocket,
      title: "Business operators & founders",
      color: "blue",
      useCases: [
        "Analyze customer data without waiting for engineering",
        "Get answers from spreadsheets in minutes, not days",
        "Make data-backed decisions without hiring analysts"
      ]
    },
    {
      icon: BarChart3,
      title: "Analysts hitting tool limits",
      color: "purple",
      useCases: [
        "Process files too large for Excel",
        "Automate repetitive report generation",
        "Skip the copy-paste-into-AI workflow"
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
      }
    };
    return colors[color] || colors.blue;
  };
  return /* @__PURE__ */ jsx("section", { className: "py-16 md:py-24 bg-gradient-to-b from-background to-dc-card/30", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto max-w-4xl px-4 sm:px-6", children: [
    /* @__PURE__ */ jsx("div", { className: "text-center mb-16", children: /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl lg:text-5xl font-bold mb-4", children: "Who This Is For" }) }),
    /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-8", children: personas.map((persona, index) => {
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

const ADFinalCTASection = () => {
  return /* @__PURE__ */ jsx("section", { className: "py-16 md:py-24", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto max-w-4xl px-4 sm:px-6", children: /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-br from-primary/10 via-primary/5 to-transparent rounded-2xl border border-primary/20 p-8 md:p-12 text-center", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl lg:text-5xl font-bold mb-6", children: "Your spreadsheets have answers. Start asking questions." }),
    /* @__PURE__ */ jsx("p", { className: "text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto", children: "Desktop Commander gives you Python's power without Python's learning curve." }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-2 mb-4", children: [
      /* @__PURE__ */ jsx(Download, { className: "w-5 h-5 text-primary" }),
      /* @__PURE__ */ jsx("span", { className: "text-lg font-semibold", children: "Download Desktop Commander" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex flex-col sm:flex-row gap-4 justify-center mb-8", children: /* @__PURE__ */ jsx(DownloadButtons, { variant: "hero", location: "analyze_data" }) }),
    /* @__PURE__ */ jsx("div", { className: "flex flex-col items-center gap-4 text-sm text-muted-foreground", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
      /* @__PURE__ */ jsx("span", { children: "Analyze locally" }),
      /* @__PURE__ */ jsx("span", { className: "w-1 h-1 rounded-full bg-muted-foreground/50" }),
      /* @__PURE__ */ jsx("span", { children: "Get accurate results" })
    ] }) })
  ] }) }) });
};

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Analyze Data in Natural Language | Desktop Commander", "description": "Process large files, find patterns, and automate reports without learning Python. Get accurate insights from CSV, Excel, and JSON files of any size." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "PostHogInit", PostHogInit, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/rk/DC/main-web/src/components/PostHogInit", "client:component-export": "default" })} ${maybeRenderHead()}<div class="min-h-screen bg-background"> ${renderComponent($$result2, "NavigationLandingPage", NavigationLandingPage, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/rk/DC/main-web/src/components/NavigationLandingPage", "client:component-export": "default" })} <main> ${renderComponent($$result2, "ADHeroSection", ADHeroSection, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/rk/DC/main-web/src/components/use-cases/analyze-data/ADHeroSection", "client:component-export": "default" })} ${renderComponent($$result2, "ADProblemSection", ADProblemSection, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/rk/DC/main-web/src/components/use-cases/analyze-data/ADProblemSection", "client:component-export": "default" })} ${renderComponent($$result2, "ADSolutionSection", ADSolutionSection, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/rk/DC/main-web/src/components/use-cases/analyze-data/ADSolutionSection", "client:component-export": "default" })} ${renderComponent($$result2, "ADExamplesSection", ADExamplesSection, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/rk/DC/main-web/src/components/use-cases/analyze-data/ADExamplesSection", "client:component-export": "default" })} ${renderComponent($$result2, "ADComparisonSection", ADComparisonSection, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/rk/DC/main-web/src/components/use-cases/analyze-data/ADComparisonSection", "client:component-export": "default" })} ${renderComponent($$result2, "ADWhyDifferentSection", ADWhyDifferentSection, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/rk/DC/main-web/src/components/use-cases/analyze-data/ADWhyDifferentSection", "client:component-export": "default" })} ${renderComponent($$result2, "ADWaitlistSection", ADWaitlistSection, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/rk/DC/main-web/src/components/use-cases/analyze-data/ADWaitlistSection", "client:component-export": "default" })} ${renderComponent($$result2, "ADPersonasSection", ADPersonasSection, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/rk/DC/main-web/src/components/use-cases/analyze-data/ADPersonasSection", "client:component-export": "default" })} ${renderComponent($$result2, "ADFinalCTASection", ADFinalCTASection, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/rk/DC/main-web/src/components/use-cases/analyze-data/ADFinalCTASection", "client:component-export": "default" })} </main> ${renderComponent($$result2, "Footer", Footer, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/rk/DC/main-web/src/components/Footer", "client:component-export": "default" })} </div> ` })} `;
}, "/Users/rk/DC/main-web/astro-src/pages/use-cases/analyze-data/index.astro", void 0);

const $$file = "/Users/rk/DC/main-web/astro-src/pages/use-cases/analyze-data/index.astro";
const $$url = "/use-cases/analyze-data/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
