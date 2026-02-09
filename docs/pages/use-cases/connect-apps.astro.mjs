import { c as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_Dp1VJtNq.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../../chunks/dc-logo_6kTUD2wC.mjs';
import { P as PostHogInit } from '../../chunks/PostHogInit_DvwonWEB.mjs';
import { D as DownloadButtons, N as NavigationLandingPage } from '../../chunks/DownloadButtons_D1sVK0uh.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { B as Button, t as trackDownloadRedirect, F as Footer } from '../../chunks/Footer_CPzrBBdI.mjs';
import { Download, ArrowRight, AlertCircle, Zap, Clock, Workflow, Sparkles, Info, Users, FileText, BarChart3, GitBranch, CheckCircle, XCircle, Terminal, Rocket, Megaphone, Code } from 'lucide-react';
/* empty css                                    */
export { renderers } from '../../renderers.mjs';

const CAHeroSection = () => {
  return /* @__PURE__ */ jsx("section", { className: "pt-32 pb-16 md:pt-40 md:pb-20", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto max-w-6xl px-4 sm:px-6", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center text-center space-y-8", children: [
    /* @__PURE__ */ jsxs("h1", { className: "text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight max-w-4xl", children: [
      "Stop learning interfaces. ",
      /* @__PURE__ */ jsx("span", { className: "text-primary", children: "Start describing outcomes." })
    ] }),
    /* @__PURE__ */ jsx("p", { className: "text-lg sm:text-xl text-muted-foreground max-w-3xl leading-relaxed", children: "Your tools are just databases wrapped in complicated UIs. Desktop Commander lets AI talk directly to them — so you describe what you want, and it happens." }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center justify-center gap-3 pt-2", children: [
      /* @__PURE__ */ jsx("span", { className: "text-sm text-muted-foreground", children: "Works with:" }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center justify-center gap-2", children: [
        /* @__PURE__ */ jsx("span", { className: "px-3 py-1.5 rounded-full bg-dc-surface border border-dc-border text-sm font-medium", children: "HubSpot" }),
        /* @__PURE__ */ jsx("span", { className: "px-3 py-1.5 rounded-full bg-dc-surface border border-dc-border text-sm font-medium", children: "WordPress" }),
        /* @__PURE__ */ jsx("span", { className: "px-3 py-1.5 rounded-full bg-dc-surface border border-dc-border text-sm font-medium", children: "Google Analytics" }),
        /* @__PURE__ */ jsx("span", { className: "px-3 py-1.5 rounded-full bg-dc-surface border border-dc-border text-sm font-medium", children: "GitHub" }),
        /* @__PURE__ */ jsx("span", { className: "px-3 py-1.5 rounded-full bg-dc-surface border border-dc-border text-sm font-medium", children: "Slack" }),
        /* @__PURE__ */ jsx("span", { className: "px-3 py-1.5 rounded-full bg-dc-surface border border-dc-border text-sm font-medium", children: "+ 100 more" })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex flex-col sm:flex-row gap-4 pt-4", children: /* @__PURE__ */ jsx(
      Button,
      {
        size: "lg",
        asChild: true,
        className: "group",
        children: /* @__PURE__ */ jsxs("a", { href: "#get-started", onClick: () => trackDownloadRedirect("connect_apps_hero"), children: [
          /* @__PURE__ */ jsx(Download, { className: "w-5 h-5" }),
          "Download App",
          /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4 group-hover:translate-x-1 transition-transform" })
        ] })
      }
    ) })
  ] }) }) });
};

const CAProblemSection = () => {
  return /* @__PURE__ */ jsx("section", { className: "py-16 md:py-20", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto max-w-5xl px-4 sm:px-6", children: /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-br from-dc-card to-dc-surface rounded-2xl border border-dc-border p-8 md:p-12", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4 mb-6", children: [
      /* @__PURE__ */ jsx("div", { className: "p-3 rounded-xl bg-destructive/10 border border-destructive/20", children: /* @__PURE__ */ jsx(AlertCircle, { className: "w-6 h-6 text-destructive" }) }),
      /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold", children: "You're spending more time in dashboards than doing actual work." })
    ] }),
    /* @__PURE__ */ jsx("p", { className: "text-xl text-muted-foreground leading-relaxed", children: "Every tool has its own interface to learn, its own menus to navigate. You spend hours clicking through settings, switching tabs, and copying data between platforms. The tools meant to help you are slowing you down." })
  ] }) }) });
};

const CASolutionSection = () => {
  const features = [
    {
      title: "Skip the UI entirely",
      description: "AI speaks directly to the service in its data language. No menus, no clicks, no learning curve.",
      icon: Zap
    },
    {
      title: "Describe outcomes, not steps",
      description: `"Extract leads from last week's conference" — you say what you want, not how to get it.`,
      icon: Clock
    },
    {
      title: "Chain actions across tools",
      description: "Read Slack → summarize in Notion → pull supporting analytics → all in one conversation.",
      icon: Workflow
    }
  ];
  const exampleCommands = [
    "Extract leads I added to my CRM after last week's conference.",
    "Send a branded email to this contact segment.",
    "Find any traffic spikes in the last 30 days."
  ];
  return /* @__PURE__ */ jsx("section", { className: "py-16 md:py-24 bg-gradient-to-b from-background to-dc-card/30", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto max-w-6xl px-4 sm:px-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-16", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl lg:text-5xl font-bold mb-6", children: "One conversation. All your tools." }),
      /* @__PURE__ */ jsx("p", { className: "text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto", children: "Desktop Commander connects to your services and lets you control them in plain English." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-8 mb-16", children: features.map((feature, index) => /* @__PURE__ */ jsxs(
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
    /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto mb-16", children: [
      /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground text-center mb-4", children: "Just say things like:" }),
      /* @__PURE__ */ jsx("div", { className: "space-y-3", children: exampleCommands.map((command, index) => /* @__PURE__ */ jsxs(
        "div",
        {
          className: "p-4 rounded-xl bg-dc-surface border border-dc-border font-mono text-sm md:text-base text-center",
          children: [
            '"',
            command,
            '"'
          ]
        },
        index
      )) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "relative aspect-video rounded-xl border border-dc-border bg-dc-surface overflow-hidden max-w-4xl mx-auto shadow-lg", children: /* @__PURE__ */ jsxs(
      "video",
      {
        className: "w-full h-full object-cover",
        autoPlay: true,
        loop: true,
        muted: true,
        playsInline: true,
        "aria-label": "Desktop Commander connect apps demo - showing how to control HubSpot, WordPress, and other services using natural language",
        title: "Control your apps through chat - Desktop Commander demo",
        children: [
          /* @__PURE__ */ jsx("source", { src: "/videos/connect-apps-demo.mov", type: "video/quicktime" }),
          /* @__PURE__ */ jsx("source", { src: "/videos/connect-apps-demo.mov", type: "video/mp4" }),
          /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground", children: [
            "Your browser does not support the video tag. ",
            /* @__PURE__ */ jsx("a", { href: "/videos/connect-apps-demo.mov", className: "text-primary hover:underline", children: "Download the demo video" })
          ] })
        ]
      }
    ) })
  ] }) });
};

const CAWorkflowChainsSection = () => {
  const workflowSteps = [
    { tool: "Slack", action: "Read messages from #product-feedback" },
    { tool: "Notion", action: "Summarize issues into a document" },
    { tool: "Analytics", action: "Find supporting traffic data" },
    { tool: "Drive", action: "Cross-reference with customer interviews" }
  ];
  return /* @__PURE__ */ jsx("section", { className: "py-16 md:py-24", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto max-w-5xl px-4 sm:px-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6", children: [
        /* @__PURE__ */ jsx(Sparkles, { className: "w-4 h-4" }),
        "The real power"
      ] }),
      /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl lg:text-5xl font-bold mb-6", children: "Chain actions across your entire stack" }),
      /* @__PURE__ */ jsx("p", { className: "text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto", children: "This isn't just about controlling one tool at a time. Describe a workflow that spans multiple services — Desktop Commander handles it all in one conversation." })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "p-8 md:p-12 rounded-2xl bg-gradient-to-br from-dc-card to-dc-surface border border-dc-border", children: [
      /* @__PURE__ */ jsxs("div", { className: "mb-8 p-4 rounded-xl bg-dc-surface border border-dc-border", children: [
        /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground mb-2", children: "You say:" }),
        /* @__PURE__ */ jsx("p", { className: "font-mono text-sm md:text-base", children: '"Read my Slack from last week, summarize the issues I brought up in Notion, find supporting data from website traffic, and cross-reference with customer interviews in my Drive folder."' })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex flex-col md:flex-row items-center justify-center gap-4 md:gap-2", children: workflowSteps.map((step, index) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 md:gap-2", children: [
        /* @__PURE__ */ jsxs("div", { className: "p-4 rounded-xl bg-dc-card border border-dc-border text-center min-w-[140px]", children: [
          /* @__PURE__ */ jsx("p", { className: "text-primary font-semibold mb-1", children: step.tool }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: step.action })
        ] }),
        index < workflowSteps.length - 1 && /* @__PURE__ */ jsx(ArrowRight, { className: "w-5 h-5 text-primary shrink-0 rotate-90 md:rotate-0" })
      ] }, index)) }),
      /* @__PURE__ */ jsxs("div", { className: "mt-8 p-4 rounded-xl bg-primary/5 border border-primary/20 text-center", children: [
        /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground mb-1", children: "Result:" }),
        /* @__PURE__ */ jsx("p", { className: "text-foreground font-medium", children: "A complete report with data from 4 different tools — created in one conversation." })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-12 grid md:grid-cols-2 gap-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "p-6 rounded-xl border border-dc-border bg-dc-card", children: [
        /* @__PURE__ */ jsx("p", { className: "font-mono text-sm mb-3", children: '"When a new lead comes in to HubSpot, create a task in Notion and ping me on Slack."' }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "Describe it once. Runs automatically." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "p-6 rounded-xl border border-dc-border bg-dc-card", children: [
        /* @__PURE__ */ jsx("p", { className: "font-mono text-sm mb-3", children: '"Check my analytics for traffic drops, then search my error logs for any related issues."' }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "Debug across systems without switching tabs." })
      ] })
    ] })
  ] }) });
};

const CAExamplesSection = () => {
  const examples = [
    {
      title: "Manage your CRM without opening HubSpot",
      description: "Create contacts, update deals, pull reports — all from chat.",
      command: "Show me all deals closing this month over $10k",
      icon: Users
    },
    {
      title: "Publish content without touching WordPress",
      description: "Write, edit, and publish — without navigating the admin panel.",
      command: "Publish my draft post about product updates and schedule it for Monday 9am",
      icon: FileText
    },
    {
      title: "Get analytics insights without the dashboards",
      description: "Ask questions about your data instead of building reports.",
      command: "What were my top 5 traffic sources last week?",
      icon: BarChart3
    },
    {
      title: "Version control without learning Git commands",
      description: "Commit, branch, and push — in plain English.",
      command: "Commit these changes with message 'Fixed pricing page' and push to main",
      icon: GitBranch
    }
  ];
  return /* @__PURE__ */ jsx("section", { className: "py-16 md:py-24 bg-gradient-to-b from-dc-card/30 to-background", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto max-w-4xl px-4 sm:px-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl lg:text-5xl font-bold mb-4", children: "What You Can Do" }),
      /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-dc-surface border border-dc-border text-sm text-muted-foreground", children: [
        /* @__PURE__ */ jsx(Info, { className: "w-4 h-4" }),
        /* @__PURE__ */ jsx("span", { children: "Install an integration, then control it through chat" })
      ] })
    ] }),
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
          "Explore More Commands",
          /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4 group-hover:translate-x-1 transition-transform" })
        ] })
      }
    ) })
  ] }) });
};

const CAComparisonSection = () => {
  const withDC = [
    "One conversation to control all your tools",
    "Ask for data in plain English",
    "Save 3+ hours every week on dashboard navigation",
    "Automate across services without code",
    "No UI to learn, no tabs to manage"
  ];
  const withoutDC = [
    "Switch between 10+ dashboards daily",
    "Click through menus to find what you need",
    "Export/import data between tools manually",
    "Learn each platform's interface separately"
  ];
  return /* @__PURE__ */ jsx("section", { className: "py-16 md:py-24 bg-gradient-to-b from-background to-dc-card/30", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto max-w-6xl px-4 sm:px-6", children: [
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

const CAHowItWorksSection = () => {
  const steps = [
    {
      number: "1",
      title: "Download Desktop Commander",
      description: "One-time setup on your Mac or Windows computer. No accounts required to start."
    },
    {
      number: "2",
      title: "Ask Desktop Commander to connect your tools",
      description: "Just tell it what you want to connect. Desktop Commander handles the setup — installing MCP servers, configuring APIs, or connecting via terminal. You don't need to know how it works.",
      subPoints: [
        '"Connect my HubSpot account"',
        '"Set up Google Analytics integration"',
        '"I want to control WordPress from here"'
      ]
    },
    {
      number: "3",
      title: "Describe what you want done",
      description: "Once connected, just talk to your tools. Ask questions, give commands, chain actions across services — all in natural language."
    }
  ];
  return /* @__PURE__ */ jsx("section", { id: "get-started", className: "py-16 md:py-24 bg-dc-card/30 scroll-mt-20", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto max-w-5xl px-4 sm:px-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-16", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl lg:text-5xl font-bold mb-4", children: "How It Works" }),
      /* @__PURE__ */ jsx("p", { className: "text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto", children: "Three steps to control your entire stack" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "space-y-8 md:space-y-12", children: steps.map((step, index) => /* @__PURE__ */ jsxs("div", { className: "flex gap-6 items-start", children: [
      /* @__PURE__ */ jsx("div", { className: "shrink-0 w-14 h-14 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center", children: /* @__PURE__ */ jsx("span", { className: "text-2xl font-bold text-primary", children: step.number }) }),
      /* @__PURE__ */ jsxs("div", { className: "flex-1 pt-2", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-2xl font-semibold mb-3", children: step.title }),
        /* @__PURE__ */ jsx("p", { className: "text-lg text-muted-foreground leading-relaxed mb-4", children: step.description }),
        step.subPoints && /* @__PURE__ */ jsx("div", { className: "space-y-2 mb-4", children: step.subPoints.map((point, i) => /* @__PURE__ */ jsx(
          "div",
          {
            className: "inline-block mr-3 mb-2 px-3 py-1.5 rounded-lg bg-dc-surface border border-dc-border font-mono text-sm",
            children: point
          },
          i
        )) }),
        index === 0 && /* @__PURE__ */ jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsx(DownloadButtons, { location: "connect_apps" }) }),
        index === 1 && /* @__PURE__ */ jsx("div", { className: "mt-4 p-4 rounded-xl bg-dc-surface border border-dc-border", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ jsx(Terminal, { className: "w-5 h-5 text-primary mt-0.5 shrink-0" }),
          /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("p", { className: "text-sm text-muted-foreground", children: [
            /* @__PURE__ */ jsx("span", { className: "text-foreground font-medium", children: "Under the hood:" }),
            " Desktop Commander uses MCP (Model Context Protocol), terminal integrations, and API connections. But you don't need to configure any of this manually — just ask, and it sets everything up."
          ] }) })
        ] }) })
      ] })
    ] }, index)) })
  ] }) });
};

const CAPersonasSection = () => {
  const personas = [
    {
      icon: Rocket,
      title: "Founders & Operators",
      color: "blue",
      useCases: [
        "Manage CRM, analytics, and content from one place",
        "Get quick answers without building reports",
        "Save hours on repetitive admin work"
      ]
    },
    {
      icon: Megaphone,
      title: "Marketers & Content Creators",
      color: "purple",
      useCases: [
        "Publish and schedule without dashboard fatigue",
        "Pull performance data instantly",
        "Connect content tools to analytics"
      ]
    },
    {
      icon: Code,
      title: "Developers & Technical Teams",
      color: "green",
      useCases: [
        "Git operations without CLI memorization",
        "Quick deploys and status checks",
        "Integrate dev tools with project management"
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
  return /* @__PURE__ */ jsx("section", { className: "py-16 md:py-24 bg-gradient-to-b from-dc-card/30 to-background", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto max-w-6xl px-4 sm:px-6", children: [
    /* @__PURE__ */ jsx("div", { className: "text-center mb-16", children: /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl lg:text-5xl font-bold mb-4", children: "Who This Is For" }) }),
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

const CAFinalCTASection = () => {
  return /* @__PURE__ */ jsx("section", { className: "py-16 md:py-24", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto max-w-4xl px-4 sm:px-6", children: /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-br from-primary/10 via-primary/5 to-transparent rounded-2xl border border-primary/20 p-8 md:p-12 text-center", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl lg:text-5xl font-bold mb-6", children: "Stop switching tabs. Start saving hours." }),
    /* @__PURE__ */ jsx("p", { className: "text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto", children: "70% of Desktop Commander users save 3+ hours per week. Connect your tools and control your entire stack through conversation." }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-2 mb-4", children: [
      /* @__PURE__ */ jsx(Download, { className: "w-5 h-5 text-primary" }),
      /* @__PURE__ */ jsx("span", { className: "text-lg font-semibold", children: "Download Desktop Commander" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex flex-col sm:flex-row gap-4 justify-center mb-8", children: /* @__PURE__ */ jsx(DownloadButtons, { variant: "hero", location: "connect_apps" }) }),
    /* @__PURE__ */ jsx("div", { className: "flex flex-col items-center gap-4 text-sm text-muted-foreground", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
      /* @__PURE__ */ jsx("span", { children: "One chat" }),
      /* @__PURE__ */ jsx("span", { className: "w-1 h-1 rounded-full bg-muted-foreground/50" }),
      /* @__PURE__ */ jsx("span", { children: "All your tools" })
    ] }) })
  ] }) }) });
};

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Stop Learning Interfaces. Start Describing Outcomes | Desktop Commander", "description": "Your tools are just databases wrapped in complicated UIs. Desktop Commander lets AI talk directly to them \u2014 HubSpot, WordPress, Google Analytics, and 100+ more. Describe what you want, and it happens." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "PostHogInit", PostHogInit, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/rk/DC/main-web/src/components/PostHogInit", "client:component-export": "default" })} ${maybeRenderHead()}<div class="min-h-screen bg-background"> ${renderComponent($$result2, "NavigationLandingPage", NavigationLandingPage, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/rk/DC/main-web/src/components/NavigationLandingPage", "client:component-export": "default" })} <main> ${renderComponent($$result2, "CAHeroSection", CAHeroSection, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/rk/DC/main-web/src/components/use-cases/connect-apps/CAHeroSection", "client:component-export": "default" })} ${renderComponent($$result2, "CAProblemSection", CAProblemSection, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/rk/DC/main-web/src/components/use-cases/connect-apps/CAProblemSection", "client:component-export": "default" })} ${renderComponent($$result2, "CASolutionSection", CASolutionSection, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/rk/DC/main-web/src/components/use-cases/connect-apps/CASolutionSection", "client:component-export": "default" })} ${renderComponent($$result2, "CAWorkflowChainsSection", CAWorkflowChainsSection, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/rk/DC/main-web/src/components/use-cases/connect-apps/CAWorkflowChainsSection", "client:component-export": "default" })} ${renderComponent($$result2, "CAExamplesSection", CAExamplesSection, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/rk/DC/main-web/src/components/use-cases/connect-apps/CAExamplesSection", "client:component-export": "default" })} ${renderComponent($$result2, "CAComparisonSection", CAComparisonSection, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/rk/DC/main-web/src/components/use-cases/connect-apps/CAComparisonSection", "client:component-export": "default" })} ${renderComponent($$result2, "CAHowItWorksSection", CAHowItWorksSection, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/rk/DC/main-web/src/components/use-cases/connect-apps/CAHowItWorksSection", "client:component-export": "default" })} ${renderComponent($$result2, "CAPersonasSection", CAPersonasSection, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/rk/DC/main-web/src/components/use-cases/connect-apps/CAPersonasSection", "client:component-export": "default" })} ${renderComponent($$result2, "CAFinalCTASection", CAFinalCTASection, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/rk/DC/main-web/src/components/use-cases/connect-apps/CAFinalCTASection", "client:component-export": "default" })} </main> ${renderComponent($$result2, "Footer", Footer, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/rk/DC/main-web/src/components/Footer", "client:component-export": "default" })} </div> ` })} `;
}, "/Users/rk/DC/main-web/astro-src/pages/use-cases/connect-apps/index.astro", void 0);

const $$file = "/Users/rk/DC/main-web/astro-src/pages/use-cases/connect-apps/index.astro";
const $$url = "/use-cases/connect-apps/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
