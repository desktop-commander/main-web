import { c as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_Dp1VJtNq.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/dc-logo_6kTUD2wC.mjs';
import { $ as $$Navigation } from '../chunks/Navigation_pMIWtcGP.mjs';
import { P as PostHogInit } from '../chunks/PostHogInit_DvwonWEB.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { B as Button, c as cn, u as useAnalyticsAstro, t as trackDownloadRedirect, F as Footer } from '../chunks/Footer_CPzrBBdI.mjs';
import { ArrowRight, Github, Download, Star, TrendingUp, ChevronDown, Check, Copy, ChevronRight, FolderOpen, Terminal, FileEdit, Search, Settings, GitBranch, ExternalLink } from 'lucide-react';
import * as React from 'react';
import { useState, useEffect, useRef } from 'react';
import { C as Card } from '../chunks/card_DlHuNq_0.mjs';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { D as Dialog, e as DialogTrigger, a as DialogContent, b as DialogHeader, c as DialogTitle } from '../chunks/dialog_DpqKOEJ7.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const MCPHero = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
  }, []);
  return /* @__PURE__ */ jsx("section", { className: "pt-32 pb-16 md:pt-40 md:pb-24", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto max-w-7xl px-4 sm:px-6", children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto text-center", children: [
    /* @__PURE__ */ jsx("div", { className: `mb-6 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`, children: /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-2 px-4 py-1.5 bg-green-500/10 border border-green-500/20 rounded-full text-sm text-green-400", children: [
      /* @__PURE__ */ jsx("span", { className: "w-2 h-2 bg-green-400 rounded-full animate-pulse" }),
      "Free & Open Source"
    ] }) }),
    /* @__PURE__ */ jsxs("h1", { className: `text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight transition-all duration-1000 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`, children: [
      "Desktop Commander",
      /* @__PURE__ */ jsx("span", { className: "block text-primary", children: "MCP Server" })
    ] }),
    /* @__PURE__ */ jsx("p", { className: `text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`, children: "Give Claude and other AI assistants direct access to your file system, terminal, and development tools." }),
    /* @__PURE__ */ jsxs("div", { className: `flex flex-col sm:flex-row gap-3 justify-center mb-10 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`, children: [
      /* @__PURE__ */ jsx(
        Button,
        {
          variant: "hero",
          size: "lg",
          className: "flex items-center justify-center gap-2 group",
          asChild: true,
          children: /* @__PURE__ */ jsxs("a", { href: "#installation", children: [
            "Get Started",
            /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-1" })
          ] })
        }
      ),
      /* @__PURE__ */ jsx(
        Button,
        {
          variant: "outline",
          size: "lg",
          className: "flex items-center justify-center gap-2 border-dc-border hover:bg-dc-surface",
          asChild: true,
          children: /* @__PURE__ */ jsxs(
            "a",
            {
              href: "https://github.com/wonderwhy-er/DesktopCommanderMCP",
              target: "_blank",
              rel: "noopener noreferrer",
              children: [
                /* @__PURE__ */ jsx(Github, { className: "h-4 w-4" }),
                "View on GitHub"
              ]
            }
          )
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: `flex flex-wrap justify-center gap-6 transition-all duration-1000 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`, children: [
      /* @__PURE__ */ jsxs(
        "a",
        {
          href: "https://www.npmjs.com/package/@wonderwhy-er/desktop-commander",
          target: "_blank",
          rel: "noopener noreferrer",
          className: "flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors",
          children: [
            /* @__PURE__ */ jsx(Download, { className: "h-4 w-4" }),
            "26k+ weekly downloads"
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        "a",
        {
          href: "https://github.com/wonderwhy-er/DesktopCommanderMCP",
          target: "_blank",
          rel: "noopener noreferrer",
          className: "flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors",
          children: [
            /* @__PURE__ */ jsx(Star, { className: "h-4 w-4" }),
            "5.2k GitHub stars"
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        "a",
        {
          href: "https://smithery.ai/server/@wonderwhy-er/desktop-commander",
          target: "_blank",
          rel: "noopener noreferrer",
          className: "flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors",
          children: [
            /* @__PURE__ */ jsx(TrendingUp, { className: "h-4 w-4" }),
            "Top Ranked on Smithery"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: `mt-12 pt-8 border-t border-dc-border transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`, children: [
      /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground mb-3", children: "Want a full-featured app with visual UI and model flexibility?" }),
      /* @__PURE__ */ jsxs(
        "a",
        {
          href: "/",
          className: "inline-flex items-center gap-1 text-sm text-primary hover:underline",
          children: [
            "Try Desktop Commander App",
            /* @__PURE__ */ jsx(ArrowRight, { className: "h-3 w-3" })
          ]
        }
      )
    ] })
  ] }) }) });
};

const Accordion = AccordionPrimitive.Root;
const AccordionItem = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(AccordionPrimitive.Item, { ref, className: cn("border-b", className), ...props }));
AccordionItem.displayName = "AccordionItem";
const AccordionTrigger = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsx(AccordionPrimitive.Header, { className: "flex", children: /* @__PURE__ */ jsxs(
  AccordionPrimitive.Trigger,
  {
    ref,
    className: cn(
      "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsx(ChevronDown, { className: "h-4 w-4 shrink-0 transition-transform duration-200" })
    ]
  }
) }));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;
const AccordionContent = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsx(
  AccordionPrimitive.Content,
  {
    ref,
    className: "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
    ...props,
    children: /* @__PURE__ */ jsx("div", { className: cn("pb-4 pt-0", className), children })
  }
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

const requirements = [
  { text: "Node.js version >= v18.0.0", downloadUrl: "https://nodejs.org/en/download" },
  { text: "Claude Desktop", downloadUrl: "https://claude.ai/download" }
];
const installationOptions = [
  {
    platform: ["MacOS"],
    method: "Bash Install",
    description: "Run this in Terminal:",
    command: "curl -fsSL https://raw.githubusercontent.com/wonderwhy-er/DesktopCommanderMCP/refs/heads/main/install.sh | bash",
    available: true
  },
  {
    platform: ["Windows", "MacOS"],
    method: "NPX Install",
    description: "Run this in Terminal/Command Prompt:",
    command: "npx @wonderwhy-er/desktop-commander@latest setup",
    available: true
  }
];
const MCPInstallation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [openModal, setOpenModal] = useState(null);
  const [copiedCommand, setCopiedCommand] = useState(null);
  const sectionRef = useRef(null);
  const { trackCustomEvent } = useAnalyticsAstro();
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1, rootMargin: "-50px" }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);
  const copyCommand = (command, method) => {
    navigator.clipboard.writeText(command);
    setCopiedCommand(method);
    setTimeout(() => setCopiedCommand(null), 2e3);
    trackCustomEvent("mcp_install_clicked", {
      button_location: "mcp_installation",
      installation_method: method,
      command
    });
  };
  const trackInstallClick = (method, url) => {
    trackCustomEvent("mcp_install_clicked", {
      button_location: "mcp_installation",
      installation_method: method,
      url
    });
  };
  const moreOptions = [
    {
      name: "Install via Smithery",
      description: "One-click install through Smithery",
      content: /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Install via the Smithery web interface:" }),
        /* @__PURE__ */ jsxs("ol", { className: "space-y-3 text-sm", children: [
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsx("span", { className: "flex-shrink-0 w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-xs font-bold text-primary", children: "1" }),
            /* @__PURE__ */ jsxs("div", { children: [
              "Visit ",
              /* @__PURE__ */ jsx("a", { href: "https://smithery.ai/server/@wonderwhy-er/desktop-commander", target: "_blank", rel: "noopener noreferrer", onClick: () => trackInstallClick("Smithery", "https://smithery.ai/server/@wonderwhy-er/desktop-commander"), className: "text-primary hover:underline", children: "smithery.ai/server/@wonderwhy-er/desktop-commander" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsx("span", { className: "flex-shrink-0 w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-xs font-bold text-primary", children: "2" }),
            /* @__PURE__ */ jsx("div", { children: "Login to Smithery and select your client (Claude Desktop)" })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsx("span", { className: "flex-shrink-0 w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-xs font-bold text-primary", children: "3" }),
            /* @__PURE__ */ jsx("div", { children: "Install with the provided key, then restart Claude Desktop" })
          ] })
        ] })
      ] })
    },
    {
      name: "Install in Cursor",
      description: "One-click setup for Cursor IDE",
      content: /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Install Desktop Commander in Cursor with one click:" }),
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: "cursor://anysphere.cursor-deeplink/mcp/install?name=desktop-commander&config=eyJjb21tYW5kIjoibnB4IC15IEB3b25kZXJ3aHktZXIvZGVza3RvcC1jb21tYW5kZXJAbGF0ZXN0In0%3D",
            onClick: () => trackInstallClick("Cursor", "cursor://anysphere.cursor-deeplink/mcp/install"),
            className: "inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium",
            children: [
              "Install in Cursor",
              /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
            ]
          }
        ),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "Make sure Cursor IDE is installed before clicking." })
      ] })
    },
    {
      name: "Install using Docker",
      description: "Sandboxed container deployment",
      content: /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Run in a sandboxed Docker container — no Node.js required:" }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "text-sm font-medium text-foreground mb-2", children: "macOS/Linux:" }),
            /* @__PURE__ */ jsxs("div", { className: "bg-background border border-dc-border rounded-lg p-3 font-mono text-xs relative", children: [
              /* @__PURE__ */ jsx("code", { className: "text-primary break-all pr-8 block", children: "bash <(curl -fsSL https://raw.githubusercontent.com/wonderwhy-er/DesktopCommanderMCP/refs/heads/main/install-docker.sh)" }),
              /* @__PURE__ */ jsx(Button, { variant: "ghost", size: "sm", className: "absolute top-2 right-2 h-5 w-5 p-0", onClick: () => copyCommand("bash <(curl -fsSL https://raw.githubusercontent.com/wonderwhy-er/DesktopCommanderMCP/refs/heads/main/install-docker.sh)", "Docker macOS"), children: /* @__PURE__ */ jsx(Copy, { className: "h-3 w-3" }) })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "text-sm font-medium text-foreground mb-2", children: "Windows PowerShell:" }),
            /* @__PURE__ */ jsxs("div", { className: "bg-background border border-dc-border rounded-lg p-3 font-mono text-xs relative", children: [
              /* @__PURE__ */ jsx("code", { className: "text-primary break-all pr-8 block", children: "iex ((New-Object System.Net.WebClient).DownloadString('https://raw.githubusercontent.com/wonderwhy-er/DesktopCommanderMCP/refs/heads/main/install-docker.ps1'))" }),
              /* @__PURE__ */ jsx(Button, { variant: "ghost", size: "sm", className: "absolute top-2 right-2 h-5 w-5 p-0", onClick: () => copyCommand("iex ((New-Object System.Net.WebClient).DownloadString('https://raw.githubusercontent.com/wonderwhy-er/DesktopCommanderMCP/refs/heads/main/install-docker.ps1'))", "Docker Windows"), children: /* @__PURE__ */ jsx(Copy, { className: "h-3 w-3" }) })
            ] })
          ] })
        ] })
      ] })
    },
    {
      name: "Manual configuration",
      description: "Add to claude_desktop_config.json",
      content: /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Add this to your claude_desktop_config.json:" }),
        /* @__PURE__ */ jsxs("div", { className: "bg-background border border-dc-border rounded-lg p-3 font-mono text-xs relative overflow-x-auto", children: [
          /* @__PURE__ */ jsx("code", { className: "text-primary whitespace-pre block", children: `{
  "mcpServers": {
    "desktop-commander": {
      "command": "npx",
      "args": ["-y", "@wonderwhy-er/desktop-commander@latest"]
    }
  }
}` }),
          /* @__PURE__ */ jsx(Button, { variant: "ghost", size: "sm", className: "absolute top-2 right-2 h-5 w-5 p-0", onClick: () => copyCommand(`{"mcpServers":{"desktop-commander":{"command":"npx","args":["-y","@wonderwhy-er/desktop-commander@latest"]}}}`, "Manual"), children: /* @__PURE__ */ jsx(Copy, { className: "h-3 w-3" }) })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "Restart Claude Desktop after adding the configuration." })
      ] })
    },
    {
      name: "Local development",
      description: "Clone and build from source",
      content: /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Clone and build locally:" }),
        /* @__PURE__ */ jsxs("div", { className: "bg-background border border-dc-border rounded-lg p-3 font-mono text-xs relative", children: [
          /* @__PURE__ */ jsx("code", { className: "text-primary whitespace-pre block", children: `git clone https://github.com/wonderwhy-er/DesktopCommanderMCP
cd DesktopCommanderMCP
npm run setup` }),
          /* @__PURE__ */ jsx(Button, { variant: "ghost", size: "sm", className: "absolute top-2 right-2 h-5 w-5 p-0", onClick: () => copyCommand("git clone https://github.com/wonderwhy-er/DesktopCommanderMCP\ncd DesktopCommanderMCP\nnpm run setup", "Local"), children: /* @__PURE__ */ jsx(Copy, { className: "h-3 w-3" }) })
        ] })
      ] })
    }
  ];
  return /* @__PURE__ */ jsx("section", { ref: sectionRef, id: "installation", className: "py-16 md:py-24 bg-dc-surface/30 scroll-mt-24", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto max-w-7xl px-4 sm:px-6", children: [
    /* @__PURE__ */ jsxs("div", { className: `text-center mb-10 transition-all duration-800 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`, children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl sm:text-4xl font-bold text-foreground mb-3", children: "Installation" }),
      /* @__PURE__ */ jsx("p", { className: "text-lg text-muted-foreground", children: "Choose your preferred installation method" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: `mb-8 transition-all duration-800 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`, children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto px-4", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-sm font-medium text-muted-foreground mb-3 uppercase tracking-wide", children: "Requirements" }),
      /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-4", children: requirements.map((req, i) => /* @__PURE__ */ jsxs("a", { href: req.downloadUrl, target: "_blank", rel: "noopener noreferrer", className: "flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors", children: [
        /* @__PURE__ */ jsx(Check, { className: "h-4 w-4 text-green-500" }),
        req.text
      ] }, i)) })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: `grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto mb-8 transition-all duration-800 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`, children: installationOptions.map((option, index) => /* @__PURE__ */ jsxs(Card, { className: "p-6 bg-dc-card border-2 border-primary/30 hover:border-primary/50 transition-all duration-300", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-4", children: [
        /* @__PURE__ */ jsx("h4", { className: "text-xl font-semibold text-foreground mb-2", children: option.method }),
        /* @__PURE__ */ jsxs("div", { className: "flex gap-2 justify-center flex-wrap", children: [
          option.platform.map((p, i) => /* @__PURE__ */ jsx("span", { className: "px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary", children: p }, i)),
          /* @__PURE__ */ jsx("span", { className: "px-3 py-1 rounded-full text-sm font-medium bg-green-500/10 text-green-400 border border-green-500/20", children: "Claude Desktop" })
        ] })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mb-4 text-center text-sm", children: option.description }),
      /* @__PURE__ */ jsxs("div", { className: "bg-background border border-dc-border rounded-lg p-4 font-mono text-sm relative", children: [
        /* @__PURE__ */ jsx("code", { className: "text-primary break-all pr-8 block", children: option.command }),
        /* @__PURE__ */ jsx(Button, { variant: "ghost", size: "sm", className: "absolute top-3 right-2 h-6 w-6 p-0 hover:bg-muted", onClick: () => copyCommand(option.command, option.method), children: copiedCommand === option.method ? /* @__PURE__ */ jsx(Check, { className: "h-3 w-3 text-green-500" }) : /* @__PURE__ */ jsx(Copy, { className: "h-3 w-3" }) })
      ] })
    ] }, index)) }),
    /* @__PURE__ */ jsx("div", { className: `max-w-4xl mx-auto mb-8 transition-all duration-800 delay-600 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`, children: /* @__PURE__ */ jsx(Card, { className: "p-4 bg-primary/5 border-primary/20", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
      /* @__PURE__ */ jsx("div", { className: "flex-shrink-0 w-6 h-6 bg-primary/10 rounded-lg flex items-center justify-center", children: /* @__PURE__ */ jsx(ArrowRight, { className: "h-3 w-3 text-primary" }) }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h3", { className: "text-base font-semibold text-foreground mb-1", children: "Getting Started" }),
        /* @__PURE__ */ jsxs("p", { className: "text-sm text-muted-foreground", children: [
          "Ask Claude: ",
          /* @__PURE__ */ jsx("span", { className: "font-semibold text-foreground", children: '"What can I do with Desktop Commander?"' })
        ] })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx("div", { className: "max-w-4xl mx-auto", children: /* @__PURE__ */ jsxs(Accordion, { type: "single", collapsible: true, className: "space-y-3", children: [
      /* @__PURE__ */ jsxs(AccordionItem, { value: "more-options", className: "border border-dc-border rounded-lg bg-dc-card", children: [
        /* @__PURE__ */ jsx(AccordionTrigger, { className: "px-4 py-3 hover:no-underline", children: /* @__PURE__ */ jsx("h3", { className: "text-base font-semibold text-foreground", children: "More installation options" }) }),
        /* @__PURE__ */ jsx(AccordionContent, { className: "px-4 pb-4", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2", children: moreOptions.map((option, index) => /* @__PURE__ */ jsxs(Dialog, { open: openModal === option.name, onOpenChange: (open) => setOpenModal(open ? option.name : null), children: [
          /* @__PURE__ */ jsx(DialogTrigger, { asChild: true, children: /* @__PURE__ */ jsxs(Button, { variant: "outline", className: "h-auto p-4 text-left justify-between items-center border-dc-border hover:bg-dc-surface/50", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ jsx("div", { className: "font-medium text-sm", children: option.name }),
              /* @__PURE__ */ jsx("div", { className: "text-xs text-muted-foreground mt-1", children: option.description })
            ] }),
            /* @__PURE__ */ jsx(ChevronRight, { className: "h-4 w-4 text-muted-foreground flex-shrink-0 ml-3" })
          ] }) }),
          /* @__PURE__ */ jsxs(DialogContent, { className: "max-w-2xl", children: [
            /* @__PURE__ */ jsx(DialogHeader, { children: /* @__PURE__ */ jsx(DialogTitle, { children: option.name }) }),
            /* @__PURE__ */ jsx("div", { className: "space-y-4", children: option.content })
          ] })
        ] }, index)) }) })
      ] }),
      /* @__PURE__ */ jsxs(AccordionItem, { value: "uninstall", className: "border border-dc-border rounded-lg bg-dc-card", children: [
        /* @__PURE__ */ jsx(AccordionTrigger, { className: "px-4 py-3 hover:no-underline", children: /* @__PURE__ */ jsx("h3", { className: "text-base font-semibold text-foreground", children: "Uninstall" }) }),
        /* @__PURE__ */ jsx(AccordionContent, { className: "px-4 pb-4", children: /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm", children: "Run this command in terminal:" }),
          /* @__PURE__ */ jsxs("div", { className: "bg-background border border-dc-border rounded-lg p-3 font-mono text-sm relative", children: [
            /* @__PURE__ */ jsx("code", { className: "text-primary pr-8 block", children: "npx @wonderwhy-er/desktop-commander@latest remove" }),
            /* @__PURE__ */ jsx(Button, { variant: "ghost", size: "sm", className: "absolute top-2 right-2 h-5 w-5 p-0", onClick: () => copyCommand("npx @wonderwhy-er/desktop-commander@latest remove", "Uninstall"), children: /* @__PURE__ */ jsx(Copy, { className: "h-3 w-3" }) })
          ] })
        ] }) })
      ] })
    ] }) })
  ] }) });
};

const features = [
  {
    icon: FolderOpen,
    title: "File System Access",
    description: "Read, write, move, and organize files and directories with full path control."
  },
  {
    icon: Terminal,
    title: "Terminal Commands",
    description: "Execute shell commands, run scripts, and manage processes directly."
  },
  {
    icon: FileEdit,
    title: "Code Editing",
    description: "Make surgical edits to code files with precise find-and-replace operations."
  },
  {
    icon: Search,
    title: "File Search",
    description: "Search file contents and names across your entire project structure."
  },
  {
    icon: Settings,
    title: "Configurable",
    description: "Set allowed directories, blocked commands, and custom shell preferences."
  },
  {
    icon: GitBranch,
    title: "Process Management",
    description: "Start, monitor, and interact with long-running processes and REPLs."
  }
];
const MCPFeatures = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1, rootMargin: "-50px" }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);
  return /* @__PURE__ */ jsx("section", { ref: sectionRef, className: "py-16 md:py-24", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto max-w-7xl px-4 sm:px-6", children: [
    /* @__PURE__ */ jsxs("div", { className: `text-center mb-12 transition-all duration-800 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`, children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl sm:text-4xl font-bold text-foreground mb-3", children: "What MCP can do" }),
      /* @__PURE__ */ jsx("p", { className: "text-lg text-muted-foreground max-w-2xl mx-auto", children: "Desktop Commander MCP gives AI assistants powerful tools to work with your local system." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto", children: features.map((feature, index) => {
      const Icon = feature.icon;
      return /* @__PURE__ */ jsxs(
        "div",
        {
          className: `p-6 bg-dc-surface border border-dc-border rounded-xl transition-all duration-500 hover:border-dc-accent/30 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`,
          style: { transitionDelay: isVisible ? `${200 + index * 100}ms` : "0ms" },
          children: [
            /* @__PURE__ */ jsx("div", { className: "w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4", children: /* @__PURE__ */ jsx(Icon, { className: "h-5 w-5 text-primary" }) }),
            /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-foreground mb-2", children: feature.title }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: feature.description })
          ]
        },
        index
      );
    }) }),
    /* @__PURE__ */ jsx("div", { className: `mt-12 text-center transition-all duration-800 delay-600 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`, children: /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "Works with Claude Desktop, Cursor, Windsurf, and any MCP-compatible client." }) })
  ] }) });
};

const MCPFAQ = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  const faqs = [
    {
      question: "What is Desktop Commander MCP?",
      answer: "Desktop Commander MCP is an open-source MCP (Model Context Protocol) server that allows Claude Desktop and other MCP clients to access and control your computer's file system and terminal. It enables LLMs to explore, read, and write files, execute commands, and manage processes - expanding their capabilities beyond just conversation."
    },
    {
      question: "What is the Desktop Commander App?",
      answer: "Desktop Commander is now also available as a standalone desktop application! The app gives you a complete AI-powered interface with access to local files and terminal, letting you automate tasks using natural language. You can choose your preferred AI model (Claude, GPT, Gemini, and more) and work without needing to configure MCP manually. It's the easiest way to get started with Desktop Commander."
    },
    {
      question: "What is an MCP?",
      answer: "MCP stands for Model Context Protocol. It's a framework developed by Anthropic that allows AI language models like Claude to interact with external tools and services. MCPs give Claude the ability to perform actions in the real world - in this case, to read and write files, execute terminal commands, and manage processes on your computer."
    },
    {
      question: "How does Desktop Commander differ from coding tools like Cursor or Windsurf?",
      answer: "Unlike tools like Cursor or Windsurf which are primarily designed as coding IDEs, Desktop Commander provides a more flexible, solution-centric approach. It's not confined to a coding box - it can handle coding tasks but also excels at exploring codebases, drawing diagrams, running automation processes, organizing files, and working with multiple projects simultaneously."
    },
    {
      question: "How much does it cost?",
      answer: "Desktop Commander MCP is completely free and open-source. To use it with Claude Desktop, you need a Claude Pro subscription ($20/month). The Desktop Commander App is currently in beta and free to use - you just need API access to your preferred AI model."
    },
    {
      question: "Which operating systems are supported?",
      answer: "Both the MCP server and the Desktop Commander App work on Windows, macOS, and Linux, with ongoing improvements for better cross-platform support."
    },
    {
      question: "Is it safe to give AI access to my file system?",
      answer: "Desktop Commander operates within safety boundaries - it typically only works with files you direct it to, can only perform actions your user account has permission for, and processes files locally on your machine. No file data is sent to external servers beyond your AI provider conversations."
    },
    {
      question: "How does Desktop Commander collect feedback and usage data?",
      answer: "The MCP has three systems: local usage analytics (always active, stays on your machine), anonymous telemetry (can be disabled), and optional feedback system (user controlled)."
    },
    {
      question: "I'm having trouble with the MCP. Where can I get help?",
      answer: "Join our Discord server for community support, check the GitHub issues for known problems, or review our comprehensive FAQ for troubleshooting tips. If you encounter a new issue, please consider opening a GitHub issue with details about your problem."
    }
  ];
  return /* @__PURE__ */ jsx("section", { ref: sectionRef, id: "faq", className: "py-20 bg-muted/30", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
    /* @__PURE__ */ jsxs("div", { className: `text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`, children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold mb-4", children: "Frequently Asked Questions" }),
      /* @__PURE__ */ jsx("p", { className: "text-xl text-muted-foreground max-w-2xl mx-auto", children: "Everything you need to know about Desktop Commander MCP and the App." })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: `max-w-3xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`, children: [
      /* @__PURE__ */ jsx(Accordion, { type: "single", collapsible: true, className: "space-y-4", children: faqs.map((faq, index) => /* @__PURE__ */ jsxs(
        AccordionItem,
        {
          value: `item-${index}`,
          className: `bg-background border rounded-lg px-6 py-2 transition-all duration-700 hover:shadow-lg hover:scale-[1.01] transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`,
          style: {
            transitionDelay: isVisible ? `${500 + index * 100}ms` : "0ms"
          },
          children: [
            /* @__PURE__ */ jsx(AccordionTrigger, { className: "text-left hover:no-underline transition-colors duration-300 hover:text-primary", children: /* @__PURE__ */ jsx("span", { className: "font-semibold", children: faq.question }) }),
            /* @__PURE__ */ jsx(AccordionContent, { className: "text-muted-foreground leading-relaxed", children: faq.answer })
          ]
        },
        index
      )) }),
      /* @__PURE__ */ jsxs("div", { className: `mt-12 grid gap-6 md:grid-cols-2 transition-all duration-1000 delay-1200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`, children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-background border rounded-lg p-6 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] transform", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold mb-2", children: "Need More Details?" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mb-4 text-sm", children: "View our comprehensive FAQ document on GitHub for detailed troubleshooting guides." }),
          /* @__PURE__ */ jsxs(
            "a",
            {
              href: "https://github.com/wonderwhy-er/DesktopCommanderMCP/blob/main/FAQ.md",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "inline-flex items-center gap-2 text-primary hover:underline font-medium transition-all duration-300 hover:scale-105 group",
              children: [
                "Complete FAQ on GitHub",
                /* @__PURE__ */ jsx(ExternalLink, { className: "h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-dc-surface border border-dc-border rounded-lg p-6 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] transform", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold mb-2", children: "Try the Desktop App" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mb-4 text-sm", children: "Get started faster with the Desktop Commander App - no MCP configuration needed." }),
          /* @__PURE__ */ jsx(Button, { variant: "hero", size: "sm", asChild: true, children: /* @__PURE__ */ jsxs(
            "a",
            {
              href: "/#download",
              className: "inline-flex items-center gap-2",
              onClick: () => trackDownloadRedirect("mcp_faq_cta"),
              children: [
                /* @__PURE__ */ jsx(Download, { className: "h-4 w-4" }),
                "Download App"
              ]
            }
          ) })
        ] })
      ] })
    ] })
  ] }) });
};

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Desktop Commander MCP - Free & Open Source", "description": "Give Claude and other AI assistants direct access to your system. Free, open-source MCP server with 26k+ weekly downloads." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "PostHogInit", PostHogInit, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/rk/DC/main-web/src/components/PostHogInit", "client:component-export": "default" })} ${maybeRenderHead()}<div class="min-h-screen bg-background"> ${renderComponent($$result2, "Navigation", $$Navigation, {})} <main> ${renderComponent($$result2, "MCPHero", MCPHero, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/rk/DC/main-web/src/components/mcp/MCPHero", "client:component-export": "default" })} ${renderComponent($$result2, "MCPInstallation", MCPInstallation, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/rk/DC/main-web/src/components/mcp/MCPInstallation", "client:component-export": "default" })} ${renderComponent($$result2, "MCPFeatures", MCPFeatures, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/rk/DC/main-web/src/components/mcp/MCPFeatures", "client:component-export": "default" })} ${renderComponent($$result2, "MCPFAQ", MCPFAQ, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/rk/DC/main-web/src/components/mcp/MCPFAQ", "client:component-export": "default" })} </main> ${renderComponent($$result2, "Footer", Footer, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/rk/DC/main-web/src/components/Footer", "client:component-export": "default" })} </div> ` })} `;
}, "/Users/rk/DC/main-web/astro-src/pages/mcp/index.astro", void 0);

const $$file = "/Users/rk/DC/main-web/astro-src/pages/mcp/index.astro";
const $$url = "/mcp/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
