import { c as createComponent, a as createAstro, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_Dp1VJtNq.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/dc-logo_6kTUD2wC.mjs';
import { $ as $$Navigation } from '../chunks/Navigation_pMIWtcGP.mjs';
import { P as PostHogInit } from '../chunks/PostHogInit_DvwonWEB.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { B as Button, t as trackDownloadRedirect, c as cn, u as useAnalyticsAstro, d as trackBlogPostClick, F as Footer } from '../chunks/Footer_CPzrBBdI.mjs';
import { Download, ArrowRight, Star, Shield, FileText, Zap, Terminal, Code2, GitCompare, Trash2, Search, Database, Server, BookOpen, Cloud, FolderOpen, Image, BarChart3, Github, ArrowLeft, ExternalLink, Clock } from 'lucide-react';
import * as React from 'react';
import { useState, useRef, useEffect } from 'react';
import { c as CardContent, C as Card } from '../chunks/card_DlHuNq_0.mjs';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import useEmblaCarousel from 'embla-carousel-react';
import posthog from 'posthog-js';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const HeroAstro = () => {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef(null);
  useEffect(() => {
    setIsVisible(true);
  }, []);
  return /* @__PURE__ */ jsx("section", { ref: heroRef, className: "pt-32 pb-24 md:pt-40 md:pb-32", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto max-w-7xl px-4 sm:px-6", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center gap-16 lg:gap-20 lg:grid lg:grid-cols-12 lg:items-center", children: [
    /* @__PURE__ */ jsx("div", { className: `w-full max-w-xl lg:max-w-none lg:col-span-6 lg:order-2 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`, children: /* @__PURE__ */ jsxs("div", { className: "relative mx-auto w-full perspective-1000", children: [
      /* @__PURE__ */ jsx("div", { className: "transform rotate-1 hover:rotate-0 transition-transform duration-500", children: /* @__PURE__ */ jsxs("div", { className: "rounded-xl lg:rounded-2xl border border-dc-border bg-dc-surface shadow-2xl shadow-black/30 overflow-hidden pointer-events-none select-none", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 px-4 py-3 bg-dc-surface/80 border-b border-dc-border", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex gap-1.5", children: [
            /* @__PURE__ */ jsx("div", { className: "w-3 h-3 rounded-full bg-red-500/60" }),
            /* @__PURE__ */ jsx("div", { className: "w-3 h-3 rounded-full bg-yellow-500/60" }),
            /* @__PURE__ */ jsx("div", { className: "w-3 h-3 rounded-full bg-green-500/60" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "flex-1 text-center", children: /* @__PURE__ */ jsx("span", { className: "text-xs text-muted-foreground", children: "Desktop Commander" }) }),
          /* @__PURE__ */ jsx("div", { className: "w-12" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "p-4 sm:p-6 bg-gradient-to-b from-dc-surface to-background", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-4 px-3 py-2 bg-background/50 border border-dc-border rounded-lg w-fit", children: [
            /* @__PURE__ */ jsx("svg", { className: "w-4 h-4 text-muted-foreground", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" }) }),
            /* @__PURE__ */ jsx("span", { className: "text-sm text-foreground", children: "~/Desktop" }),
            /* @__PURE__ */ jsx("svg", { className: "w-3 h-3 text-muted-foreground", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 9l-7 7-7-7" }) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-background border border-dc-border rounded-2xl px-4 py-4 mb-4 flex items-center justify-between", children: [
            /* @__PURE__ */ jsx("span", { className: "text-muted-foreground text-sm sm:text-base", children: "Move all invoices from Downloads to a new folder" }),
            /* @__PURE__ */ jsx("div", { className: "w-8 h-8 bg-dc-accent rounded-full flex items-center justify-center flex-shrink-0 ml-3", children: /* @__PURE__ */ jsx("svg", { className: "w-4 h-4 text-white", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M5 10l7-7m0 0l7 7m-7-7v18" }) }) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-2", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5 px-3 py-1.5 bg-blue-500/10 border border-blue-500/30 rounded-full text-xs sm:text-sm text-blue-400", children: [
              /* @__PURE__ */ jsx("svg", { className: "w-3 h-3", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M4 6h16M4 10h16M4 14h16M4 18h16" }) }),
              "Prompts"
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5 px-3 py-1.5 bg-purple-500/10 border border-purple-500/30 rounded-full text-xs sm:text-sm text-purple-400", children: [
              /* @__PURE__ */ jsx("svg", { className: "w-3 h-3", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" }) }),
              "Apps"
            ] }),
            /* @__PURE__ */ jsx("div", { className: "flex items-center gap-1.5 px-3 py-1.5 bg-dc-surface border border-dc-border rounded-full text-xs sm:text-sm text-muted-foreground", children: "+ Add Knowledge" }),
            /* @__PURE__ */ jsxs("div", { className: "hidden sm:flex items-center gap-1.5 px-3 py-1.5 bg-dc-surface border border-dc-border rounded-full text-xs sm:text-sm text-muted-foreground", children: [
              "claude-sonnet-4",
              /* @__PURE__ */ jsx("svg", { className: "w-3 h-3", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 9l-7 7-7-7" }) })
            ] })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "absolute -top-12 -right-4 sm:-top-16 sm:-right-6 transform rotate-3 hover:rotate-1 transition-transform duration-500 pointer-events-none select-none opacity-90", children: /* @__PURE__ */ jsxs("div", { className: "bg-dc-surface border border-dc-border rounded-lg shadow-xl shadow-black/40 overflow-hidden w-44 sm:w-52", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5 px-3 py-2 bg-background/50 border-b border-dc-border", children: [
          /* @__PURE__ */ jsx("svg", { className: "w-3 h-3 text-muted-foreground", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" }) }),
          /* @__PURE__ */ jsx("span", { className: "text-[10px] text-muted-foreground", children: "~/Desktop" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "p-2 space-y-1 text-xs", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 px-2 py-1 rounded hover:bg-dc-border/30", children: [
            /* @__PURE__ */ jsx("svg", { className: "w-3.5 h-3.5 text-blue-400", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsx("path", { d: "M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" }) }),
            /* @__PURE__ */ jsx("span", { className: "text-foreground", children: "Projects" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 px-2 py-1 rounded hover:bg-dc-border/30", children: [
            /* @__PURE__ */ jsx("svg", { className: "w-3.5 h-3.5 text-blue-400", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsx("path", { d: "M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" }) }),
            /* @__PURE__ */ jsx("span", { className: "text-foreground", children: "Invoices" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 px-2 py-1 rounded hover:bg-dc-border/30", children: [
            /* @__PURE__ */ jsx("svg", { className: "w-3.5 h-3.5 text-red-400", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsx("path", { fillRule: "evenodd", d: "M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z", clipRule: "evenodd" }) }),
            /* @__PURE__ */ jsx("span", { className: "text-foreground", children: "invoice-1.pdf" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 px-2 py-1 rounded hover:bg-dc-border/30", children: [
            /* @__PURE__ */ jsx("svg", { className: "w-3.5 h-3.5 text-green-400", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsx("path", { fillRule: "evenodd", d: "M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z", clipRule: "evenodd" }) }),
            /* @__PURE__ */ jsx("span", { className: "text-foreground", children: "budget.xlsx" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 px-2 py-1 rounded hover:bg-dc-border/30", children: [
            /* @__PURE__ */ jsx("svg", { className: "w-3.5 h-3.5 text-purple-400", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsx("path", { fillRule: "evenodd", d: "M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z", clipRule: "evenodd" }) }),
            /* @__PURE__ */ jsx("span", { className: "text-foreground", children: "photo.jpg" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 px-2 py-1 rounded hover:bg-dc-border/30", children: [
            /* @__PURE__ */ jsx("svg", { className: "w-3.5 h-3.5 text-gray-400", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsx("path", { fillRule: "evenodd", d: "M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z", clipRule: "evenodd" }) }),
            /* @__PURE__ */ jsx("span", { className: "text-foreground", children: "notes.txt" })
          ] })
        ] })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "lg:col-span-6 text-center lg:text-left lg:order-1 w-full", children: [
      /* @__PURE__ */ jsx("h1", { className: `text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-8 md:mb-10 leading-tight transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`, children: "AI that executes" }),
      /* @__PURE__ */ jsx("p", { className: `text-lg sm:text-xl text-muted-foreground mb-10 md:mb-14 max-w-2xl mx-auto lg:mx-0 leading-relaxed transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`, children: "Desktop Commander reads your files, runs commands, and automates workflows — all in natural language." }),
      /* @__PURE__ */ jsx("div", { className: `flex flex-col sm:flex-row gap-3 sm:gap-4 lg:justify-start justify-center items-center mb-6 transition-all duration-1000 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`, children: /* @__PURE__ */ jsx(
        Button,
        {
          variant: "hero",
          size: "lg",
          className: "w-full sm:w-auto flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-dc-accent/20 transform active:scale-95 group",
          asChild: true,
          children: /* @__PURE__ */ jsxs("a", { href: "#download", onClick: () => trackDownloadRedirect("hero_main"), children: [
            /* @__PURE__ */ jsx(Download, { className: "h-5 w-5 transition-transform duration-300 group-hover:rotate-12" }),
            "Download Beta",
            /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" })
          ] })
        }
      ) }),
      /* @__PURE__ */ jsx("div", { className: `mb-10 md:mb-14 transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`, children: /* @__PURE__ */ jsxs(
        "a",
        {
          href: "/mcp",
          className: "text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1 text-sm",
          children: [
            "Looking for MCP?",
            /* @__PURE__ */ jsx(ArrowRight, { className: "h-3 w-3" })
          ]
        }
      ) }),
      /* @__PURE__ */ jsxs("div", { className: `flex flex-col sm:flex-row sm:flex-wrap lg:justify-start justify-center gap-3 transition-all duration-1000 delay-600 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`, children: [
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: "https://www.npmjs.com/package/@wonderwhy-er/desktop-commander",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "flex items-center gap-2 px-3 py-2 bg-dc-surface border border-dc-border rounded-lg text-sm w-full sm:w-auto sm:min-w-[160px] transition-all duration-300 hover:scale-105 hover:bg-dc-surface/80 hover:border-dc-accent/30 hover:shadow-md cursor-pointer group",
            children: [
              /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center w-5 h-5 bg-dc-border rounded-sm transition-colors duration-300 group-hover:bg-dc-accent/20 flex-shrink-0", children: /* @__PURE__ */ jsx(Download, { className: "h-2.5 w-2.5 text-muted-foreground transition-colors duration-300 group-hover:text-dc-accent" }) }),
              /* @__PURE__ */ jsxs("div", { className: "text-left flex-1 min-w-0", children: [
                /* @__PURE__ */ jsx("div", { className: "text-muted-foreground text-xs uppercase tracking-wide transition-colors duration-300 group-hover:text-foreground", children: "Weekly Downloads" }),
                /* @__PURE__ */ jsx("div", { className: "font-semibold text-foreground text-xs", children: "26k+" })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: "https://github.com/wonderwhy-er/DesktopCommanderMCP/",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "flex items-center gap-2 px-3 py-2 bg-dc-surface border border-dc-border rounded-lg text-sm w-full sm:w-auto sm:min-w-[160px] transition-all duration-300 hover:scale-105 hover:bg-dc-surface/80 hover:border-dc-accent/30 hover:shadow-md cursor-pointer group",
            children: [
              /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center w-5 h-5 bg-dc-border rounded-sm transition-colors duration-300 group-hover:bg-dc-accent/20 flex-shrink-0", children: /* @__PURE__ */ jsx(Star, { className: "h-2.5 w-2.5 text-muted-foreground transition-colors duration-300 group-hover:text-dc-accent" }) }),
              /* @__PURE__ */ jsxs("div", { className: "text-left flex-1 min-w-0", children: [
                /* @__PURE__ */ jsx("div", { className: "text-muted-foreground text-xs uppercase tracking-wide transition-colors duration-300 group-hover:text-foreground", children: "GitHub Stars" }),
                /* @__PURE__ */ jsx("div", { className: "font-semibold text-foreground text-xs", children: "5.4k" })
              ] })
            ]
          }
        )
      ] })
    ] })
  ] }) }) });
};

const capabilities = [
  "Build apps and websites without coding",
  "Automate repetitive tasks in plain English",
  "Organize files and folders instantly",
  "Create scripts that run on your machine",
  "Connect and operate any tool you have installed"
];
const CapabilityProof = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: "-50px" }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);
  return /* @__PURE__ */ jsx("section", { ref: sectionRef, className: "py-20 md:py-28", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto max-w-7xl px-4 sm:px-6", children: [
    /* @__PURE__ */ jsx("div", { className: `text-center mb-12 md:mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`, children: /* @__PURE__ */ jsxs("p", { className: "text-xl sm:text-2xl md:text-3xl text-foreground font-medium max-w-4xl mx-auto leading-relaxed", children: [
      "While most AI assistants can discuss what to do,",
      /* @__PURE__ */ jsx("br", { className: "hidden sm:block" }),
      /* @__PURE__ */ jsx("span", { className: "text-primary", children: " Desktop Commander actually executes the tasks." })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: `mb-12 md:mb-16 transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`, children: /* @__PURE__ */ jsx("div", { className: "max-w-4xl mx-auto", children: /* @__PURE__ */ jsx("div", { className: "aspect-video rounded-xl lg:rounded-2xl border border-dc-border bg-dc-surface/50 overflow-hidden shadow-elegant", children: /* @__PURE__ */ jsxs(
      "video",
      {
        className: "w-full h-full object-cover",
        autoPlay: true,
        muted: true,
        loop: true,
        playsInline: true,
        preload: "auto",
        title: "Desktop Commander App Demo - AI executing tasks on your computer",
        children: [
          /* @__PURE__ */ jsx("source", { src: "/videos/desktop-commander-app-demo.mp4", type: "video/mp4" }),
          "Your browser does not support the video tag."
        ]
      }
    ) }) }) }),
    /* @__PURE__ */ jsx("div", { className: `transition-all duration-1000 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`, children: /* @__PURE__ */ jsx("div", { className: "flex flex-wrap justify-center gap-3 md:gap-4 max-w-4xl mx-auto", children: capabilities.map((capability, index) => /* @__PURE__ */ jsxs(
      "div",
      {
        className: "flex items-center gap-2 px-4 py-2 bg-dc-surface border border-dc-border rounded-full text-sm md:text-base text-muted-foreground",
        children: [
          /* @__PURE__ */ jsx("span", { className: "text-primary", children: "•" }),
          capability
        ]
      },
      index
    )) }) })
  ] }) });
};

const UseCases = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "-50px"
      }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);
  const useCases = [
    {
      icon: Shield,
      title: "Manage your files",
      description: "Move, convert, and organize files using natural language.",
      href: "/use-cases/file-management/",
      linkText: "See how it works"
    },
    {
      icon: FileText,
      title: "Build your knowledge base",
      description: "Write and organize markdown files by talking to AI.",
      href: "/use-cases/knowledge-management/",
      linkText: "See how it works"
    },
    {
      icon: Zap,
      title: "Build software without coding",
      description: "Describe what you want—AI writes the code and saves it locally.",
      href: "/use-cases/build-prototype/",
      linkText: "See how it works"
    }
  ];
  return /* @__PURE__ */ jsx("section", { ref: sectionRef, id: "use-cases", className: "py-16 md:py-24 bg-dc-surface/30", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto max-w-7xl px-4 sm:px-6", children: [
    /* @__PURE__ */ jsxs("div", { className: `text-center mb-12 md:mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`, children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 md:mb-6 leading-tight", children: "What you can do" }),
      /* @__PURE__ */ jsx("p", { className: "text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4 sm:px-0", children: "From file operations to deployment pipelines—all through conversation" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3", children: useCases.map((useCase, index) => {
      const IconComponent = useCase.icon;
      const cardContent = /* @__PURE__ */ jsxs(CardContent, { className: "p-6 sm:p-8 h-full flex flex-col", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4 mb-4", children: [
          /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center w-12 h-12 bg-dc-surface border border-dc-border rounded-xl group-hover:border-dc-blue/30 group-hover:bg-dc-blue/5 transition-all duration-300 flex-shrink-0 mx-auto sm:mx-0", children: /* @__PURE__ */ jsx(IconComponent, { className: "h-6 w-6 text-foreground group-hover:text-dc-blue transition-colors duration-300" }) }),
          /* @__PURE__ */ jsx("h3", { className: "text-lg sm:text-xl font-semibold text-foreground text-center sm:text-left leading-tight", children: useCase.title })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed text-center sm:text-left flex-grow", children: useCase.description }),
        useCase.href && useCase.linkText && /* @__PURE__ */ jsx("div", { className: "mt-4 text-center sm:text-left", children: /* @__PURE__ */ jsxs("span", { className: "text-primary text-sm font-medium group-hover:underline inline-flex items-center gap-1", children: [
          useCase.linkText,
          /* @__PURE__ */ jsx(ArrowRight, { className: "h-3 w-3 group-hover:translate-x-1 transition-transform" })
        ] }) })
      ] });
      const cardClasses = `group bg-background/50 border-dc-border hover:border-dc-blue/20 hover:bg-dc-blue/3 transition-all duration-300 hover:shadow-md hover:shadow-dc-blue/5 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${useCase.href ? "cursor-pointer" : ""}`;
      const cardStyle = {
        transitionDelay: isVisible ? `${200 + index * 150}ms` : "0ms"
      };
      if (useCase.href) {
        return /* @__PURE__ */ jsx("a", { href: useCase.href, className: "block h-full", children: /* @__PURE__ */ jsx(Card, { className: `${cardClasses} h-full`, style: cardStyle, children: cardContent }) }, index);
      }
      return /* @__PURE__ */ jsx(
        Card,
        {
          className: cardClasses,
          style: cardStyle,
          children: cardContent
        },
        index
      );
    }) }),
    /* @__PURE__ */ jsxs("div", { className: `text-center mt-12 md:mt-16 transition-all duration-1000 delay-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`, children: [
      /* @__PURE__ */ jsx("p", { className: "text-base sm:text-lg text-muted-foreground mb-6 px-4 sm:px-0", children: "Try these use cases with Desktop Commander" }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center items-center px-4 sm:px-0", children: [
        /* @__PURE__ */ jsx(
          Button,
          {
            variant: "hero",
            size: "lg",
            className: "w-full sm:w-auto transition-all duration-300 hover:scale-105 active:scale-95",
            asChild: true,
            children: /* @__PURE__ */ jsxs(
              "a",
              {
                href: "./#download",
                className: "flex items-center justify-center gap-2",
                onClick: () => trackDownloadRedirect("use_cases_cta"),
                children: [
                  /* @__PURE__ */ jsx(Terminal, { className: "h-5 w-5" }),
                  "Start Building"
                ]
              }
            )
          }
        ),
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "/library",
            rel: "noopener noreferrer",
            className: "w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 border border-dc-border text-foreground rounded-lg font-medium hover:bg-dc-surface/50 transition-all duration-300 hover:scale-105 active:scale-95 text-center",
            children: "Browse 60+ Prompts to use with DC"
          }
        )
      ] })
    ] })
  ] }) });
};

const features = [
  { text: "Model-agnostic", desc: "Use Opus 4.5, GPT-4.5, Gemini 2.5, or any model" },
  { text: "See what's happening", desc: "File changes visualized live" },
  { text: "Built-in markdown editing", desc: "Edit and preview in one place" },
  { text: "Add custom MCPs and context", desc: "Extend with your own tools" }
];
const WhyTheApp = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: "-50px" }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);
  return /* @__PURE__ */ jsx("section", { ref: sectionRef, className: "py-20 md:py-28 bg-gradient-to-b from-dc-surface/50 to-dc-surface/20", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto max-w-7xl px-4 sm:px-6", children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto text-center", children: [
    /* @__PURE__ */ jsxs("div", { className: `mb-10 md:mb-12 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`, children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl sm:text-4xl font-bold text-foreground mb-4", children: "The best way to use Desktop Commander" }),
      /* @__PURE__ */ jsx("p", { className: "text-lg sm:text-xl text-muted-foreground", children: "Your AI Operator — a teammate that can read, write, run, and automate." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: `grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 md:mb-12 transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`, children: features.map((feature, index) => /* @__PURE__ */ jsxs(
      "div",
      {
        className: "flex items-start gap-3 p-4 bg-dc-surface border border-dc-border rounded-lg text-left",
        children: [
          /* @__PURE__ */ jsx("span", { className: "text-primary mt-0.5", children: "•" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "font-medium text-foreground", children: feature.text }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: feature.desc })
          ] })
        ]
      },
      index
    )) }),
    /* @__PURE__ */ jsx("div", { className: `transition-all duration-1000 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`, children: /* @__PURE__ */ jsx(
      Button,
      {
        variant: "hero",
        size: "lg",
        className: "flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-dc-accent/20 transform active:scale-95 group",
        asChild: true,
        children: /* @__PURE__ */ jsxs("a", { href: "#download", onClick: () => trackDownloadRedirect("why_the_app_cta"), children: [
          /* @__PURE__ */ jsx(Download, { className: "h-5 w-5 transition-transform duration-300 group-hover:rotate-12" }),
          "Download App",
          /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" })
        ] })
      }
    ) })
  ] }) }) });
};

const Tabs = TabsPrimitive.Root;
const TabsList = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  TabsPrimitive.List,
  {
    ref,
    className: cn(
      "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
      className
    ),
    ...props
  }
));
TabsList.displayName = TabsPrimitive.List.displayName;
const TabsTrigger = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  TabsPrimitive.Trigger,
  {
    ref,
    className: cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
      className
    ),
    ...props
  }
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;
const TabsContent = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  TabsPrimitive.Content,
  {
    ref,
    className: cn(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className
    ),
    ...props
  }
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

const promptCategories = [
  {
    title: "Explore codebase",
    icon: Search,
    prompts: [
      {
        icon: Code2,
        title: "Explain Codebase or Repository",
        description: "Understand and analyze your codebase structure",
        url: "/library/prompts/explain-codebase-or-repository/"
      },
      {
        icon: GitCompare,
        title: "Compare Config Files to Baseline",
        description: "Compare configuration files against standards",
        url: "/library/prompts/compare-config-files-to-baseline/"
      },
      {
        icon: Trash2,
        title: "Clean Up Unused Code",
        description: "Remove dead code and optimize your project",
        url: "/library/prompts/clean-up-unused-code/"
      }
    ]
  },
  {
    title: "Write documentation",
    icon: BookOpen,
    prompts: [
      {
        icon: FileText,
        title: "Create Project Documentation",
        description: "Generate comprehensive project documentation",
        url: "/library/prompts/create-project-documentation/"
      },
      {
        icon: Database,
        title: "Create Database Schema Diagram",
        description: "Visualize your database structure and relationships",
        url: "/library/prompts/create-database-schema-diagram/"
      },
      {
        icon: Server,
        title: "Document Ansible Configuration",
        description: "Create clear documentation for your Ansible setup",
        url: "/library/prompts/document-ansible-configuration/"
      }
    ]
  },
  {
    title: "Deploy",
    icon: Cloud,
    prompts: [
      {
        icon: Cloud,
        title: "Set Up Cloud Infrastructure",
        description: "Deploy scalable cloud infrastructure from scratch",
        url: "/library/prompts/set-up-cloud-infrastructure/"
      },
      {
        icon: Server,
        title: "Set Up WordPress Environment",
        description: "Configure complete WordPress development environment",
        url: "/library/prompts/set-up-wordpress-environment/"
      },
      {
        icon: Code2,
        title: "Build and Deploy Landing Page",
        description: "Create and deploy a professional landing page",
        url: "/library/prompts/build-and-deploy-landing-page/"
      }
    ]
  },
  {
    title: "Automate tasks",
    icon: Zap,
    prompts: [
      {
        icon: FolderOpen,
        title: "Organise my Downloads folder",
        description: "Sort messy downloads into organized folders",
        url: "/library/prompts/organise-my-downloads-folder/"
      },
      {
        icon: FileText,
        title: "Extract Data from PDFs",
        description: "Pull structured data from PDF documents",
        url: "/library/prompts/extract-data-from-pdfs/"
      },
      {
        icon: Image,
        title: "Convert HEIC to PNG",
        description: "Batch convert image formats efficiently",
        url: "/library/prompts/convert-heic-to-png/"
      }
    ]
  },
  {
    title: "Optimize workflow",
    icon: BarChart3,
    prompts: [
      {
        icon: BookOpen,
        title: "Create Knowledge Base Folder",
        description: "Organize information into searchable knowledge base",
        url: "/library/prompts/create-knowledge-base-folder/"
      },
      {
        icon: Database,
        title: "Consolidate Data Files into One",
        description: "Merge multiple data sources into unified format",
        url: "/library/prompts/consolidate-data-files-into-one/"
      },
      {
        icon: BarChart3,
        title: "Automate Competitor Research",
        description: "Set up automated competitive analysis workflows",
        url: "/library/prompts/automate-competitor-research/"
      }
    ]
  }
];
const PromptLibrary = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("explore-codebase");
  const sectionRef = useRef(null);
  const { trackCustomEvent } = useAnalyticsAstro();
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
  return /* @__PURE__ */ jsx("section", { ref: sectionRef, id: "prompts", className: "py-12 bg-background", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto max-w-7xl px-6", children: [
    /* @__PURE__ */ jsxs("div", { className: `text-center mb-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`, children: [
      /* @__PURE__ */ jsx("h2", { className: "text-4xl font-bold text-foreground mb-4", children: "Explore Prompt Library" }),
      /* @__PURE__ */ jsx("p", { className: "text-lg text-muted-foreground max-w-2xl mx-auto", children: "60+ prompts organized by workflow - from codebase exploration to task automation" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: `max-w-4xl mx-auto mb-8 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`, children: /* @__PURE__ */ jsxs(Tabs, { defaultValue: "explore-codebase", className: "w-full", onValueChange: (value) => {
      setActiveTab(value);
      const category = promptCategories.find(
        (cat) => cat.title.toLowerCase().replace(/\s+/g, "-") === value
      );
      if (category) {
        trackCustomEvent("prompt_category_clicked", {
          button_text: category.title,
          button_location: "prompt_library",
          category_name: category.title,
          category_tab: value,
          total_prompts_in_category: category.prompts.length
        });
      }
    }, children: [
      /* @__PURE__ */ jsx(TabsList, { className: "grid w-full grid-cols-5 mb-8", children: promptCategories.map((category, index) => {
        const CategoryIcon = category.icon;
        const value = category.title.toLowerCase().replace(/\s+/g, "-");
        return /* @__PURE__ */ jsxs(
          TabsTrigger,
          {
            value,
            className: "flex items-center gap-2 text-xs sm:text-sm transition-all duration-300 hover:scale-105 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground",
            children: [
              /* @__PURE__ */ jsx(CategoryIcon, { className: "h-4 w-4 transition-transform duration-300 group-hover:rotate-12" }),
              /* @__PURE__ */ jsx("span", { className: "hidden sm:inline", children: category.title })
            ]
          },
          index
        );
      }) }),
      promptCategories.map((category, index) => {
        const value = category.title.toLowerCase().replace(/\s+/g, "-");
        const isActiveTabContent = activeTab === value;
        return /* @__PURE__ */ jsx(TabsContent, { value, className: "space-y-4", children: category.prompts.map((prompt, promptIndex) => {
          const PromptIcon = prompt.icon;
          return /* @__PURE__ */ jsxs(
            "a",
            {
              href: prompt.url,
              onClick: () => {
                trackCustomEvent("prompt_clicked", {
                  button_text: prompt.title,
                  button_location: "prompt_library",
                  category_name: category.title,
                  prompt_title: prompt.title,
                  prompt_description: prompt.description,
                  prompt_url: prompt.url,
                  prompt_position: promptIndex + 1,
                  total_prompts_in_category: category.prompts.length
                });
              },
              className: `flex items-center gap-4 p-4 rounded-lg border border-border hover:border-primary/40 hover:bg-accent/50 transition-all duration-300 group hover:scale-[1.02] hover:shadow-lg transform ${isVisible && isActiveTabContent ? `opacity-100 translate-y-0 delay-${600 + promptIndex * 100}` : "opacity-0 translate-y-4"}`,
              style: {
                transitionDelay: isVisible && isActiveTabContent ? `${600 + promptIndex * 100}ms` : "0ms"
              },
              children: [
                /* @__PURE__ */ jsx("div", { className: "flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300", children: /* @__PURE__ */ jsx(PromptIcon, { className: "h-5 w-5 text-primary transition-transform duration-300 group-hover:rotate-12" }) }),
                /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0", children: [
                  /* @__PURE__ */ jsx("h4", { className: "font-semibold text-foreground group-hover:text-primary transition-colors duration-300", children: prompt.title }),
                  /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground mt-1 transition-colors duration-300 group-hover:text-foreground", children: prompt.description })
                ] }),
                /* @__PURE__ */ jsx(ArrowRight, { className: "h-5 w-5 text-muted-foreground group-hover:text-primary transition-all duration-300 group-hover:translate-x-2" })
              ]
            },
            promptIndex
          );
        }) }, index);
      })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: `text-center transition-all duration-1000 delay-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`, children: [
      /* @__PURE__ */ jsx(Button, { asChild: true, variant: "hero", size: "lg", className: "transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20 transform active:scale-95", children: /* @__PURE__ */ jsxs(
        "a",
        {
          href: "/library/",
          onClick: () => {
            trackCustomEvent("prompt_library_cta_clicked", {
              button_text: "Browse All Prompts",
              button_location: "prompt_library",
              link_type: "external",
              destination: "prompt_library_main",
              current_active_tab: activeTab
            });
          },
          className: "inline-flex items-center gap-2",
          children: [
            "Browse All Prompts",
            /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" })
          ]
        }
      ) }),
      /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground mt-4 transition-colors duration-300 hover:text-foreground", children: "60+ workflows across development, automation, and optimization" })
    ] })
  ] }) });
};

const TestimonialsStrip = ({ testimonials }) => {
  const TestimonialCard = ({ testimonial, index }) => {
    const rotation = index % 4 === 0 ? "rotate-2" : index % 4 === 1 ? "-rotate-2" : index % 4 === 2 ? "rotate-4" : "-rotate-4";
    const generateAvatarColor = (author) => {
      let hash = 0;
      for (let i = 0; i < author.length; i++) {
        hash = (hash << 5) - hash + author.charCodeAt(i) & 4294967295;
      }
      hash = Math.abs(hash);
      const colors = [
        "bg-slate-600",
        // Muted slate
        "bg-stone-600",
        // Muted stone
        "bg-amber-600",
        // Muted amber
        "bg-emerald-600",
        // Muted emerald
        "bg-teal-600",
        // Muted teal
        "bg-sky-600",
        // Muted sky
        "bg-indigo-600",
        // Muted indigo
        "bg-purple-600",
        // Muted purple
        "bg-pink-600",
        // Muted pink
        "bg-rose-600",
        // Muted rose
        "bg-orange-600",
        // Muted orange
        "bg-cyan-600"
        // Muted cyan
      ];
      return colors[hash % colors.length];
    };
    const generateRandomDate = (author) => {
      let hash = 0;
      for (let i = 0; i < author.length; i++) {
        hash = (hash << 5) - hash + author.charCodeAt(i) & 4294967295;
      }
      hash = hash ^ hash >>> 16;
      hash = Math.abs(hash);
      const months = [
        { month: 4, days: 30 },
        // April
        { month: 5, days: 31 },
        // May  
        { month: 6, days: 30 },
        // June
        { month: 7, days: 31 },
        // July
        { month: 8, days: 31 },
        // August
        { month: 9, days: 30 }
        // September
      ];
      const monthIndex = hash % months.length;
      const selectedMonth = months[monthIndex];
      const day = (hash >>> 3) % selectedMonth.days + 1;
      const hours = (hash >>> 8) % 12 + 10;
      const minutes = (hash >>> 12) % 60;
      const dayStr = day.toString().padStart(2, "0");
      const monthStr = selectedMonth.month.toString().padStart(2, "0");
      const hoursStr = hours.toString().padStart(2, "0");
      const minutesStr = minutes.toString().padStart(2, "0");
      return `${dayStr}/${monthStr}/2025, ${hoursStr}:${minutesStr}`;
    };
    return /* @__PURE__ */ jsx("div", { className: `flex-shrink-0 w-80 p-4 ${rotation} hover:rotate-0 transition-transform duration-300`, children: /* @__PURE__ */ jsxs("div", { className: "bg-gray-800 rounded-lg p-4 shadow-lg h-56 flex flex-col", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-3 flex-shrink-0", children: [
        /* @__PURE__ */ jsx("div", { className: `w-9 h-9 ${generateAvatarColor(testimonial.author)} rounded-full flex items-center justify-center`, children: /* @__PURE__ */ jsx("span", { className: "text-white text-sm font-bold", children: testimonial.author.split(" ").map((n) => n[0]).join("").slice(0, 2) }) }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { className: "text-white font-medium text-sm", children: testimonial.author }),
          /* @__PURE__ */ jsx("div", { className: "text-gray-400 text-xs", children: generateRandomDate(testimonial.author) })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "text-white text-sm leading-relaxed flex-1 overflow-y-auto scrollbar-thin scrollbar-track-gray-700 scrollbar-thumb-gray-500 hover:scrollbar-thumb-gray-400", children: testimonial.quote })
    ] }) });
  };
  return /* @__PURE__ */ jsx("div", { className: "w-full overflow-hidden", children: /* @__PURE__ */ jsx("div", { className: "flex pt-4 pb-4", children: /* @__PURE__ */ jsxs("div", { className: "flex gap-5 animate-marquee-right", children: [
    testimonials.map((testimonial, index) => /* @__PURE__ */ jsx(TestimonialCard, { testimonial, index }, `testimonial-${index}`)),
    testimonials.map((testimonial, index) => /* @__PURE__ */ jsx(TestimonialCard, { testimonial, index: index + testimonials.length }, `testimonial-dup-${index}`))
  ] }) }) });
};

const TrustedBy = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "-50px"
      }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);
  const stats = [
    {
      icon: Star,
      value: "9.52/10",
      label: "User Rating",
      description: "Developer satisfaction"
    },
    {
      icon: Download,
      value: "26k+",
      label: "Weekly Downloads",
      description: "Active installations"
    },
    {
      icon: Github,
      value: "5.2k+",
      label: "GitHub Stars",
      description: "Community trust"
    }
  ];
  const testimonials = [
    {
      quote: "It is a great tool, thank you, I like using it, as it gives claude an ability to do surgical edits, making it more like a human developer.",
      author: "naranbaz",
      role: "Developer",
      company: "Community"
    },
    {
      quote: "Life saver! I was paying for both Claude + Cursor which felt duplicated. This solves that perfectly. With MCP + web search, it writes code with the latest updates. So good when Cursor doesn't work or fast requests run out.",
      author: "play365alltime",
      role: "Developer",
      company: "Community"
    },
    {
      quote: "I had 76 errors in 23 files in my Svelte 5 project. Used desktop-commander, sequentialthinking, and tree-sitter to fix them all. Never resolved type errors this quickly with AI before!",
      author: "dependablecalls",
      role: "Developer",
      company: "Community"
    },
    {
      quote: "I'm the one who is grateful for this, which is the best MCP that exists!",
      author: "Dhiego Pagotto",
      role: "Developer",
      company: "Community"
    },
    {
      quote: "Just joined I absolutely love this thing",
      author: "Uloi",
      role: "Developer",
      company: "Community"
    },
    {
      quote: "happy command coding everyone - god I love this tool",
      author: "Geoff F",
      role: "Developer",
      company: "Community"
    },
    {
      quote: "Wow, I've been building something similar. This makes my project so much easier to build now. I'm truly grateful. Thank you!",
      author: "Creedo",
      role: "Developer",
      company: "Community"
    },
    {
      quote: "btw @DC Dmitry , thanks for such great MCP 🙂 I'm loving it 🙂",
      author: "Damian Pastorini",
      role: "Developer",
      company: "COLY"
    },
    {
      quote: "Switched from Windsurf to Claude MCP and love it! No more token limits or cascade issues. Can code as much as I want without worrying about costs. This is much more than just code editing!",
      author: "jesseburstrom5920",
      role: "Developer",
      company: "Community"
    },
    {
      quote: "Been using this MCP daily for a couple of months now and onboarded a bunch of buddies onto it as well, a go to in my arsenal, great work!!",
      author: "Bjorn Melin",
      role: "Developer",
      company: "Community"
    },
    {
      quote: "Played with DesktopCommander today, replaced FileServer and continued my project. The diff-based editing is awesome - could continue longer in the same chat before hitting limits. Great!",
      author: "eszpee",
      role: "Developer",
      company: "Community"
    }
  ];
  return /* @__PURE__ */ jsxs("section", { ref: sectionRef, className: "py-12 md:py-16 bg-white", children: [
    /* @__PURE__ */ jsxs("div", { className: "container mx-auto max-w-7xl px-4 sm:px-6", children: [
      /* @__PURE__ */ jsx("div", { className: `text-center mb-8 md:mb-12 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`, children: /* @__PURE__ */ jsx("h2", { className: "text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4 md:mb-6 leading-tight", children: "Trusted by the AI community" }) }),
      /* @__PURE__ */ jsx("div", { className: `grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 mb-8 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`, children: stats.map((stat, index) => {
        const IconComponent = stat.icon;
        return /* @__PURE__ */ jsxs(
          "div",
          {
            className: `flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-3 sm:gap-4 group transition-all duration-700 p-4 sm:p-0 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`,
            style: {
              transitionDelay: isVisible ? `${500 + index * 200}ms` : "0ms"
            },
            children: [
              /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center w-12 h-12 bg-dc-blue/10 rounded-xl group-hover:bg-dc-blue/20 group-hover:scale-110 transition-all duration-300 flex-shrink-0", children: /* @__PURE__ */ jsx(IconComponent, { className: "h-6 w-6 text-dc-blue transition-transform duration-300 group-hover:rotate-12" }) }),
              /* @__PURE__ */ jsxs("div", { className: "text-center sm:text-left", children: [
                /* @__PURE__ */ jsx("div", { className: "text-2xl sm:text-3xl font-bold text-slate-900", children: stat.value }),
                /* @__PURE__ */ jsx("div", { className: "text-sm text-slate-600", children: stat.label })
              ] })
            ]
          },
          index
        );
      }) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: `mb-6 transition-all duration-1000 delay-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`, children: /* @__PURE__ */ jsx(TestimonialsStrip, { testimonials }) }),
    /* @__PURE__ */ jsx("div", { className: "container mx-auto max-w-7xl px-4 sm:px-6", children: /* @__PURE__ */ jsxs("div", { className: `text-center transition-all duration-1000 delay-1200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`, children: [
      /* @__PURE__ */ jsx("p", { className: "text-lg sm:text-xl text-slate-600 mb-6 px-4 sm:px-0", children: "Try it out for yourself or browse our prompt library!" }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center items-center px-4 sm:px-0", children: [
        /* @__PURE__ */ jsx(
          Button,
          {
            variant: "hero",
            size: "lg",
            className: "w-full sm:w-auto transition-all duration-300 hover:scale-105 active:scale-95",
            asChild: true,
            children: /* @__PURE__ */ jsxs(
              "a",
              {
                href: "#download",
                className: "flex items-center justify-center gap-2",
                onClick: () => trackDownloadRedirect("trusted_by_cta"),
                children: [
                  /* @__PURE__ */ jsx(Download, { className: "h-5 w-5" }),
                  "Download"
                ]
              }
            )
          }
        ),
        /* @__PURE__ */ jsx(
          Button,
          {
            variant: "outline",
            size: "lg",
            className: "w-full sm:w-auto transition-all duration-300 hover:scale-105 active:scale-95",
            asChild: true,
            children: /* @__PURE__ */ jsx(
              "a",
              {
                href: "/library",
                className: "flex items-center justify-center gap-2",
                children: "Browse Prompt Library"
              }
            )
          }
        )
      ] })
    ] }) })
  ] });
};

function getBasePath() {
  if (typeof window === "undefined") {
    return process.env.BASE_PATH || "/";
  }
  const { hostname, pathname } = window.location;
  if (hostname.includes("github.io")) {
    const match = pathname.match(/^\/([^/]+)/);
    return match ? `/${match[1]}` : "/";
  }
  return "/";
}
function getAssetPath(path) {
  const base = getBasePath();
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;
  const fullPath = `${base}/${cleanPath}`;
  return fullPath.replace(/\/+/g, "/");
}

const CarouselContext = React.createContext(null);
function useCarousel() {
  const context = React.useContext(CarouselContext);
  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }
  return context;
}
const Carousel = React.forwardRef(
  ({ orientation = "horizontal", opts, setApi, plugins, className, children, ...props }, ref) => {
    const [carouselRef, api] = useEmblaCarousel(
      {
        ...opts,
        axis: orientation === "horizontal" ? "x" : "y"
      },
      plugins
    );
    const [canScrollPrev, setCanScrollPrev] = React.useState(false);
    const [canScrollNext, setCanScrollNext] = React.useState(false);
    const onSelect = React.useCallback((api2) => {
      if (!api2) {
        return;
      }
      setCanScrollPrev(api2.canScrollPrev());
      setCanScrollNext(api2.canScrollNext());
    }, []);
    const scrollPrev = React.useCallback(() => {
      api?.scrollPrev();
    }, [api]);
    const scrollNext = React.useCallback(() => {
      api?.scrollNext();
    }, [api]);
    const handleKeyDown = React.useCallback(
      (event) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          scrollPrev();
        } else if (event.key === "ArrowRight") {
          event.preventDefault();
          scrollNext();
        }
      },
      [scrollPrev, scrollNext]
    );
    React.useEffect(() => {
      if (!api || !setApi) {
        return;
      }
      setApi(api);
    }, [api, setApi]);
    React.useEffect(() => {
      if (!api) {
        return;
      }
      onSelect(api);
      api.on("reInit", onSelect);
      api.on("select", onSelect);
      return () => {
        api?.off("select", onSelect);
      };
    }, [api, onSelect]);
    return /* @__PURE__ */ jsx(
      CarouselContext.Provider,
      {
        value: {
          carouselRef,
          api,
          opts,
          orientation: orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
          scrollPrev,
          scrollNext,
          canScrollPrev,
          canScrollNext
        },
        children: /* @__PURE__ */ jsx(
          "div",
          {
            ref,
            onKeyDownCapture: handleKeyDown,
            className: cn("relative", className),
            role: "region",
            "aria-roledescription": "carousel",
            ...props,
            children
          }
        )
      }
    );
  }
);
Carousel.displayName = "Carousel";
const CarouselContent = React.forwardRef(
  ({ className, ...props }, ref) => {
    const { carouselRef, orientation } = useCarousel();
    return /* @__PURE__ */ jsx("div", { ref: carouselRef, className: "overflow-hidden", children: /* @__PURE__ */ jsx(
      "div",
      {
        ref,
        className: cn("flex", orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col", className),
        ...props
      }
    ) });
  }
);
CarouselContent.displayName = "CarouselContent";
const CarouselItem = React.forwardRef(
  ({ className, ...props }, ref) => {
    const { orientation } = useCarousel();
    return /* @__PURE__ */ jsx(
      "div",
      {
        ref,
        role: "group",
        "aria-roledescription": "slide",
        className: cn("min-w-0 shrink-0 grow-0 basis-full", orientation === "horizontal" ? "pl-4" : "pt-4", className),
        ...props
      }
    );
  }
);
CarouselItem.displayName = "CarouselItem";
const CarouselPrevious = React.forwardRef(
  ({ className, variant = "outline", size = "icon", ...props }, ref) => {
    const { orientation, scrollPrev, canScrollPrev } = useCarousel();
    return /* @__PURE__ */ jsxs(
      Button,
      {
        ref,
        variant,
        size,
        className: cn(
          "absolute h-8 w-8 rounded-full",
          orientation === "horizontal" ? "-left-12 top-1/2 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
          className
        ),
        disabled: !canScrollPrev,
        onClick: scrollPrev,
        ...props,
        children: [
          /* @__PURE__ */ jsx(ArrowLeft, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Previous slide" })
        ]
      }
    );
  }
);
CarouselPrevious.displayName = "CarouselPrevious";
const CarouselNext = React.forwardRef(
  ({ className, variant = "outline", size = "icon", ...props }, ref) => {
    const { orientation, scrollNext, canScrollNext } = useCarousel();
    return /* @__PURE__ */ jsxs(
      Button,
      {
        ref,
        variant,
        size,
        className: cn(
          "absolute h-8 w-8 rounded-full",
          orientation === "horizontal" ? "-right-12 top-1/2 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
          className
        ),
        disabled: !canScrollNext,
        onClick: scrollNext,
        ...props,
        children: [
          /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Next slide" })
        ]
      }
    );
  }
);
CarouselNext.displayName = "CarouselNext";

const blogPostsData = [
  {
    id: 1,
    title: "Build a Google Analytics AI Assistant in 10 Minutes",
    description: "In my previous article, I explained how our Desktop Commander team uses CLIs and AI agents to automate various workflows — from BigQuery data analysis to CRM integrations to task management.",
    thumbnail: "b5.png",
    youtubeUrl: "https://wonderwhy-er.medium.com/build-a-google-analytics-ai-assistant-in-10-minutes-a19f0971d4b6",
    duration: "Read",
    date: "Oct 6, 2025",
    badge: "new"
  },
  {
    id: 2,
    title: "Why I Went From REST APIs to MCPs to CLIs and Ended Up with Self-Improving AI",
    description: "In recent months, I noticed something strange about my workflow. Instead of looking for MCPs to give to AI, I started asking for CLIs instead.",
    thumbnail: "meetup-poster.png",
    youtubeUrl: "https://medium.com/@wonderwhy-er/why-i-went-from-rest-apis-to-mcps-to-clis-and-ended-up-with-self-improving-ai-8b492631f565",
    duration: "Read",
    date: "September 12, 2025"
  },
  {
    id: 3,
    title: "Why I Went From REST APIs to MCPs to CLIs and ended up with Self-Improving AI",
    description: "Exploring the evolution from traditional REST APIs to MCPs and CLIs, and how this journey led to building self-improving AI systems.",
    thumbnail: "b1.png",
    youtubeUrl: "https://www.youtube.com/watch?v=xNlSt-4vTTo",
    duration: "23:20",
    date: "Sep 8, 2025"
  },
  {
    id: 4,
    title: "Vibe Coding With Desktop Commander: Code Documentation + Obsidian + GitHub",
    description: "Live coding session showcasing Desktop Commander's integration with Obsidian and GitHub for enhanced development workflows.",
    thumbnail: "b2.png",
    youtubeUrl: "https://www.youtube.com/watch?v=523coCdL8ZI&t=4s",
    duration: "1:00:13",
    date: "Sep 10, 2025"
  },
  {
    id: 5,
    title: "Claude with MCPs Replaced Cursor & Windsurf — How Did That Happen?",
    description: "Discover how Claude with MCP integration became a powerful alternative to popular development tools like Cursor and Windsurf.",
    thumbnail: "b3.png",
    youtubeUrl: "https://youtu.be/ly3bed99Dy8?si=pMrEbYD7ePOA3cRA",
    duration: "44:44",
    date: "Mar 19, 2025"
  },
  {
    id: 6,
    title: "This Developer Ditched Windsurf, Cursor Using Claude with MCPs",
    description: "A developer's journey from popular IDEs to Claude with MCP integration, showcasing the power and flexibility of this new approach.",
    thumbnail: "b4.png",
    youtubeUrl: "https://wonderwhy-er.medium.com/claude-with-mcps-replaced-cursor-windsurf-how-did-that-happen-c1d1e2795e96",
    duration: "Read",
    date: "December 1, 2024"
  }
];
const Blog = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const blogPosts = blogPostsData.map((post) => ({
    ...post,
    thumbnail: getAssetPath(post.thumbnail)
  }));
  const handleBlogPostClick = (post, index) => {
    trackBlogPostClick({
      post_title: post.title,
      post_url: post.youtubeUrl,
      post_type: post.duration === "Read" ? "article" : "video",
      post_position: index + 1,
      post_date: post.date,
      has_badge: post.badge
    });
  };
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);
  return /* @__PURE__ */ jsx("section", { ref: sectionRef, id: "blog", className: "py-20 bg-dc-surface/30", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto max-w-7xl px-4 sm:px-6", children: [
    /* @__PURE__ */ jsxs("div", { className: `text-center mb-12 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`, children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl sm:text-4xl font-bold text-foreground mb-4", children: "Hear from our founders" }),
      /* @__PURE__ */ jsx("p", { className: "text-lg text-muted-foreground max-w-3xl mx-auto", children: "Follow our team on YouTube and Medium" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: `max-w-6xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`, children: /* @__PURE__ */ jsxs(Carousel, { opts: { align: "start", loop: false }, className: "w-full", children: [
      /* @__PURE__ */ jsx(CarouselContent, { className: "-ml-3 md:-ml-4", children: blogPosts.map((post, index) => /* @__PURE__ */ jsx(
        CarouselItem,
        {
          className: `pl-3 md:pl-4 sm:basis-full md:basis-1/2 lg:basis-1/3 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`,
          style: { transitionDelay: isVisible ? `${500 + index * 150}ms` : "0ms" },
          children: /* @__PURE__ */ jsx(Card, { className: "group cursor-pointer hover:shadow-xl transition-all duration-300 bg-dc-card border border-dc-border h-full hover:scale-[1.02] hover:border-dc-accent/30", children: /* @__PURE__ */ jsxs(
            "a",
            {
              href: post.youtubeUrl,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "block h-full",
              onClick: () => handleBlogPostClick(post, index),
              children: [
                /* @__PURE__ */ jsxs("div", { className: "relative overflow-hidden rounded-t-lg", children: [
                  /* @__PURE__ */ jsx(
                    "img",
                    {
                      src: post.thumbnail,
                      alt: post.title,
                      className: "w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    }
                  ),
                  /* @__PURE__ */ jsx("div", { className: "absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded", children: post.duration }),
                  post.badge === "new" && /* @__PURE__ */ jsx("div", { className: "absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full font-semibold", children: "✨ New" }),
                  post.id === 3 && /* @__PURE__ */ jsx("div", { className: "absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full font-semibold", children: "🔥 Hot" })
                ] }),
                /* @__PURE__ */ jsxs(CardContent, { className: "p-5 flex flex-col h-[calc(100%-12rem)]", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between mb-2", children: [
                    /* @__PURE__ */ jsx("h3", { className: "text-base font-semibold text-foreground group-hover:text-primary transition-colors leading-tight line-clamp-2", children: post.title }),
                    /* @__PURE__ */ jsx(ExternalLink, { className: "w-4 h-4 text-muted-foreground group-hover:text-primary transition-all flex-shrink-0 mt-1 ml-2" })
                  ] }),
                  /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground mb-3", children: post.date }),
                  /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm leading-relaxed line-clamp-3 flex-1", children: post.description })
                ] })
              ]
            }
          ) })
        },
        post.id
      )) }),
      /* @__PURE__ */ jsx(CarouselPrevious, { className: "hidden md:flex" }),
      /* @__PURE__ */ jsx(CarouselNext, { className: "hidden md:flex" })
    ] }) })
  ] }) });
};

const WindowsIcon = ({ className }) => /* @__PURE__ */ jsx("svg", { className, viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ jsx("path", { d: "M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801" }) });
const DownloadSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: "-50px" }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);
  const handleDownload = (platform, url) => {
    posthog.capture("download_clicked", {
      platform,
      url,
      button_location: "download_section",
      page_path: window.location.pathname
    });
  };
  return /* @__PURE__ */ jsx("section", { ref: sectionRef, id: "download", className: "py-24 md:py-32 scroll-mt-24 bg-gradient-to-b from-dc-accent/5 via-dc-accent/10 to-dc-accent/5 border-y border-dc-accent/20", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto max-w-7xl px-4 sm:px-6", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto", children: [
    /* @__PURE__ */ jsxs("div", { className: `text-center mb-12 md:mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`, children: [
      /* @__PURE__ */ jsx("div", { className: "flex items-center gap-3 justify-center mb-4", children: /* @__PURE__ */ jsx("span", { className: "px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-dc-accent/20 text-dc-accent border border-dc-accent/30 rounded-full", children: "Beta" }) }),
      /* @__PURE__ */ jsx("h2", { className: "text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4", children: "Download Desktop Commander" }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-2 text-sm text-muted-foreground", children: [
        /* @__PURE__ */ jsx(Clock, { className: "h-4 w-4 text-dc-accent" }),
        /* @__PURE__ */ jsx("span", { children: "84% of users save 3+ hours every week" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: `flex flex-col sm:flex-row gap-4 justify-center items-start mb-8 transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`, children: [
      /* @__PURE__ */ jsx(
        Button,
        {
          variant: "hero",
          size: "lg",
          className: "min-w-[180px] transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-dc-accent/20",
          asChild: true,
          children: /* @__PURE__ */ jsxs(
            "a",
            {
              href: "https://github.com/desktop-commander/dc-app-client-releases/releases/latest/download/desktop-commander-mac-arm64.dmg",
              onClick: () => handleDownload("macos-m", "https://github.com/desktop-commander/dc-app-client-releases/releases/latest/download/desktop-commander-mac-arm64.dmg"),
              className: "flex items-center justify-center gap-2",
              children: [
                /* @__PURE__ */ jsx(Download, { className: "h-4 w-4" }),
                "macOS M Chip"
              ]
            }
          )
        }
      ),
      /* @__PURE__ */ jsx(
        Button,
        {
          variant: "hero",
          size: "lg",
          className: "min-w-[180px] transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-dc-accent/20",
          asChild: true,
          children: /* @__PURE__ */ jsxs(
            "a",
            {
              href: "https://github.com/desktop-commander/dc-app-client-releases/releases/latest/download/desktop-commander-mac-x64.dmg",
              onClick: () => handleDownload("macos-intel", "https://github.com/desktop-commander/dc-app-client-releases/releases/latest/download/desktop-commander-mac-x64.dmg"),
              className: "flex items-center justify-center gap-2",
              children: [
                /* @__PURE__ */ jsx(Download, { className: "h-4 w-4" }),
                "macOS Intel"
              ]
            }
          )
        }
      ),
      /* @__PURE__ */ jsx(
        Button,
        {
          variant: "hero",
          size: "lg",
          className: "min-w-[180px] transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-dc-accent/20",
          asChild: true,
          children: /* @__PURE__ */ jsxs(
            "a",
            {
              href: "https://github.com/desktop-commander/dc-app-client-releases-windows/releases/latest/download/desktop-commander-win-x64.msi",
              onClick: () => handleDownload("windows", "https://github.com/desktop-commander/dc-app-client-releases-windows/releases/latest/download/desktop-commander-win-x64.msi"),
              className: "flex items-center justify-center gap-2",
              children: [
                /* @__PURE__ */ jsx(WindowsIcon, { className: "h-4 w-4" }),
                "Windows"
              ]
            }
          )
        }
      )
    ] }),
    /* @__PURE__ */ jsx("div", { className: `text-center transition-all duration-1000 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`, children: /* @__PURE__ */ jsxs(
      "a",
      {
        href: "/mcp",
        className: "text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1 text-sm",
        children: [
          "Looking for MCP?",
          /* @__PURE__ */ jsx(ArrowRight, { className: "h-3 w-3" })
        ]
      }
    ) })
  ] }) }) });
};

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Desktop Commander - AI that executes", "description": "Desktop Commander reads your files, runs commands, and automates workflows \u2014 all in natural language." }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "PostHogInit", PostHogInit, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/rk/DC/main-web/src/components/PostHogInit", "client:component-export": "default" })} ${maybeRenderHead()}<div class="min-h-screen bg-background"> ${renderComponent($$result2, "Navigation", $$Navigation, {})} <main> ${renderComponent($$result2, "HeroAstro", HeroAstro, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/rk/DC/main-web/src/components/HeroAstro", "client:component-export": "default" })} ${renderComponent($$result2, "CapabilityProof", CapabilityProof, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/rk/DC/main-web/src/components/CapabilityProof", "client:component-export": "default" })} ${renderComponent($$result2, "UseCases", UseCases, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/rk/DC/main-web/src/components/UseCases", "client:component-export": "default" })} ${renderComponent($$result2, "WhyTheApp", WhyTheApp, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/rk/DC/main-web/src/components/WhyTheApp", "client:component-export": "default" })} ${renderComponent($$result2, "PromptLibrary", PromptLibrary, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/rk/DC/main-web/src/components/PromptLibrary", "client:component-export": "default" })} ${renderComponent($$result2, "TrustedBy", TrustedBy, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/rk/DC/main-web/src/components/TrustedBy", "client:component-export": "default" })} ${renderComponent($$result2, "Blog", Blog, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/rk/DC/main-web/src/components/Blog", "client:component-export": "default" })} ${renderComponent($$result2, "DownloadSection", DownloadSection, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/rk/DC/main-web/src/components/DownloadSection", "client:component-export": "default" })} </main> ${renderComponent($$result2, "Footer", Footer, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/rk/DC/main-web/src/components/Footer", "client:component-export": "default" })} </div> ` })} `;
}, "/Users/rk/DC/main-web/astro-src/pages/index.astro", void 0);

const $$file = "/Users/rk/DC/main-web/astro-src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
