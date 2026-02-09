import { c as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../../../chunks/astro/server_Dp1VJtNq.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../../../chunks/dc-logo_6kTUD2wC.mjs';
import { P as PostHogInit } from '../../../chunks/PostHogInit_DvwonWEB.mjs';
import { D as DownloadButtons, N as NavigationLandingPage } from '../../../chunks/DownloadButtons_D1sVK0uh.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { B as Button, t as trackDownloadRedirect, F as Footer } from '../../../chunks/Footer_CPzrBBdI.mjs';
import { Download, ArrowRight, AlertCircle, FileImage, Layers, Settings, CheckCircle, XCircle, Presentation, Briefcase, Share2 } from 'lucide-react';
import { W as WaitlistSection } from '../../../chunks/WaitlistSection_CPoRbun7.mjs';
/* empty css                                       */
export { renderers } from '../../../renderers.mjs';

const PPHeroSection = () => {
  return /* @__PURE__ */ jsx("section", { className: "pt-32 pb-16 md:pt-40 md:pb-20", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto max-w-6xl px-4 sm:px-6", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center text-center space-y-8", children: [
    /* @__PURE__ */ jsxs("h1", { className: "text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight max-w-4xl", children: [
      "Convert PDF to PNG ",
      /* @__PURE__ */ jsx("span", { className: "text-primary", children: "images" })
    ] }),
    /* @__PURE__ */ jsx("p", { className: "text-lg sm:text-xl text-muted-foreground max-w-3xl leading-relaxed", children: "Extract pages from PDFs as high-quality PNG images. Perfect for presentations, social media, or when you need individual pages as images. All conversion happens locally on your computer." }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center justify-center gap-3 pt-2", children: [
      /* @__PURE__ */ jsx("span", { className: "text-sm text-muted-foreground", children: "Features:" }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center justify-center gap-2", children: [
        /* @__PURE__ */ jsx("span", { className: "px-3 py-1.5 rounded-full bg-dc-surface border border-dc-border text-sm font-medium", children: "PDF → PNG" }),
        /* @__PURE__ */ jsx("span", { className: "px-3 py-1.5 rounded-full bg-dc-surface border border-dc-border text-sm font-medium", children: "All Pages at Once" }),
        /* @__PURE__ */ jsx("span", { className: "px-3 py-1.5 rounded-full bg-dc-surface border border-dc-border text-sm font-medium", children: "High Resolution" }),
        /* @__PURE__ */ jsx("span", { className: "px-3 py-1.5 rounded-full bg-dc-surface border border-dc-border text-sm font-medium", children: "Batch Processing" })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex flex-col sm:flex-row gap-4 pt-4", children: /* @__PURE__ */ jsx(
      Button,
      {
        size: "lg",
        asChild: true,
        className: "group",
        children: /* @__PURE__ */ jsxs("a", { href: "#get-started", onClick: () => trackDownloadRedirect("pdf_to_png_hero"), children: [
          /* @__PURE__ */ jsx(Download, { className: "w-5 h-5" }),
          "Download Free",
          /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4 group-hover:translate-x-1 transition-transform" })
        ] })
      }
    ) }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center justify-center gap-6 pt-4 text-sm text-muted-foreground", children: [
      /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-green-400" }),
        "Extract any page"
      ] }),
      /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-green-400" }),
        "Works offline"
      ] }),
      /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-green-400" }),
        "Mac & Windows"
      ] })
    ] })
  ] }) }) });
};

const PPProblemSection = () => {
  return /* @__PURE__ */ jsx("section", { className: "py-16 md:py-20", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto max-w-5xl px-4 sm:px-6", children: /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-br from-dc-card to-dc-surface rounded-2xl border border-dc-border p-8 md:p-12", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4 mb-6", children: [
      /* @__PURE__ */ jsx("div", { className: "p-3 rounded-xl bg-destructive/10 border border-destructive/20", children: /* @__PURE__ */ jsx(AlertCircle, { className: "w-6 h-6 text-destructive" }) }),
      /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold", children: "You just need one page as an image. Why is that so hard?" })
    ] }),
    /* @__PURE__ */ jsx("p", { className: "text-xl text-muted-foreground leading-relaxed", children: "You have a PDF with a chart, diagram, or page you need as an image. Maybe for a presentation, social media post, or to paste into another document. Online converters add watermarks, limit pages, or require you to upload sensitive documents to their servers. Built-in screenshot tools give you low-quality results." })
  ] }) }) });
};

const PPSolutionSection = () => {
  const features = [
    {
      title: "Extract any page as an image",
      description: "Get specific pages, a range, or the entire document as individual PNG files. Just describe which pages you need.",
      icon: FileImage,
      command: '"Convert page 3 of this PDF to a PNG image"',
      result: "report-page-3.png created at full quality"
    },
    {
      title: "Convert entire PDFs at once",
      description: "Need every page as a separate image? Convert them all in one command. Perfect for presentations, slideshows, or archiving.",
      icon: Layers,
      command: '"Convert this 50-page PDF to PNG images"',
      result: "50 PNG files created in seconds"
    },
    {
      title: "Control quality and resolution",
      description: "Get high-resolution images perfect for printing or presentations. Specify DPI or let Desktop Commander optimize for your use case.",
      icon: Settings,
      command: '"Convert this PDF to high-res PNGs for printing"',
      result: "300 DPI images ready for print"
    }
  ];
  return /* @__PURE__ */ jsx("section", { className: "py-16 md:py-24 bg-gradient-to-b from-background to-dc-card/30", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto max-w-6xl px-4 sm:px-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-16", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl lg:text-5xl font-bold mb-6", children: "Just describe what you need." }),
      /* @__PURE__ */ jsx("p", { className: "text-xl text-muted-foreground max-w-3xl mx-auto", children: "No complicated settings. No figuring out which tool to use. Just tell Desktop Commander what you want in plain English." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "space-y-8", children: features.map((feature, index) => /* @__PURE__ */ jsx(
      "div",
      {
        className: "p-8 rounded-2xl bg-gradient-to-b from-dc-surface to-dc-card border border-dc-border",
        children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col lg:flex-row lg:items-start gap-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
            /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4", children: /* @__PURE__ */ jsx(feature.icon, { className: "w-6 h-6 text-primary" }) }),
            /* @__PURE__ */ jsx("h3", { className: "text-2xl font-semibold mb-3", children: feature.title }),
            /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed mb-4", children: feature.description })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "lg:w-96 space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "p-4 rounded-lg bg-dc-surface border border-dc-border", children: [
              /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground mb-1", children: "You say:" }),
              /* @__PURE__ */ jsx("p", { className: "font-mono text-sm text-primary", children: feature.command })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "p-4 rounded-lg bg-green-500/5 border border-green-500/20", children: [
              /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground mb-1", children: "Result:" }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-green-400", children: feature.result })
            ] })
          ] })
        ] })
      },
      index
    )) })
  ] }) });
};

const PPComparisonSection = () => {
  const withDC = [
    "Convert specific pages or entire PDFs",
    "High-resolution output for any use",
    "100% local — sensitive docs stay private",
    "No watermarks, no limits",
    "Free, no account required"
  ];
  const withoutDC = [
    "Limited pages per document",
    "Watermarks on free versions",
    "Upload confidential documents to servers",
    "Low-resolution output",
    "Pay for premium or deal with ads"
  ];
  return /* @__PURE__ */ jsx("section", { className: "py-16 md:py-24 bg-gradient-to-b from-background to-dc-card/30", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto max-w-6xl px-4 sm:px-6", children: [
    /* @__PURE__ */ jsx("div", { className: "text-center mb-16", children: /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl lg:text-5xl font-bold mb-4", children: "Desktop Commander vs. Online Converters" }) }),
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
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-4 text-red-400", children: "Online Converters" }),
          /* @__PURE__ */ jsx("ul", { className: "space-y-3 text-muted-foreground", children: withoutDC.map((item, index) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsx(XCircle, { className: "w-4 h-4 text-red-400 mt-1 shrink-0" }),
            /* @__PURE__ */ jsx("span", { children: item })
          ] }, index)) })
        ] })
      ] })
    ] })
  ] }) });
};

const PPPersonasSection = () => {
  const personas = [
    {
      icon: Presentation,
      title: "Presenters & Speakers",
      color: "blue",
      useCases: [
        "Extract slides as images for social media",
        "Pull charts and graphs for presentations",
        "Create thumbnails from PDF reports"
      ]
    },
    {
      icon: Briefcase,
      title: "Business Professionals",
      color: "purple",
      useCases: [
        "Share single pages without the full document",
        "Extract contracts pages for review",
        "Archive important documents as images"
      ]
    },
    {
      icon: Share2,
      title: "Content Creators",
      color: "green",
      useCases: [
        "Convert ebooks to shareable images",
        "Extract infographics from reports",
        "Create visual content from PDF sources"
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
    /* @__PURE__ */ jsx("div", { className: "text-center mb-16", children: /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl lg:text-5xl font-bold mb-4", children: "Who Uses This" }) }),
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

const PPFinalCTASection = () => {
  return /* @__PURE__ */ jsx("section", { className: "py-16 md:py-24", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto max-w-4xl px-4 sm:px-6", children: /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-br from-primary/10 via-primary/5 to-transparent rounded-2xl border border-primary/20 p-8 md:p-12 text-center", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl lg:text-5xl font-bold mb-6", children: "Turn PDFs into shareable images." }),
    /* @__PURE__ */ jsx("p", { className: "text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto", children: "Extract any page as a high-quality PNG. No uploads, no watermarks, no limits." }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-2 mb-4", children: [
      /* @__PURE__ */ jsx(Download, { className: "w-5 h-5 text-primary" }),
      /* @__PURE__ */ jsx("span", { className: "text-lg font-semibold", children: "Download Desktop Commander" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex flex-col sm:flex-row gap-4 justify-center mb-8", children: /* @__PURE__ */ jsx(DownloadButtons, { variant: "hero", location: "pdf_to_png" }) }),
    /* @__PURE__ */ jsx("div", { className: "flex flex-col items-center gap-4 text-sm text-muted-foreground", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
      /* @__PURE__ */ jsx("span", { children: "Free forever" }),
      /* @__PURE__ */ jsx("span", { className: "w-1 h-1 rounded-full bg-muted-foreground/50" }),
      /* @__PURE__ */ jsx("span", { children: "No account needed" }),
      /* @__PURE__ */ jsx("span", { className: "w-1 h-1 rounded-full bg-muted-foreground/50" }),
      /* @__PURE__ */ jsx("span", { children: "Mac & Windows" })
    ] }) })
  ] }) }) });
};

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Convert PDF to PNG Images | Free PDF Page Extractor | Desktop Commander", "description": "Extract PDF pages as high-quality PNG images. Convert single pages or entire documents locally. No uploads, no watermarks. Free for Mac and Windows." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "PostHogInit", PostHogInit, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/rk/DC/main-web/src/components/PostHogInit", "client:component-export": "default" })} ${maybeRenderHead()}<div class="min-h-screen bg-background"> ${renderComponent($$result2, "NavigationLandingPage", NavigationLandingPage, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/rk/DC/main-web/src/components/NavigationLandingPage", "client:component-export": "default" })} <main> ${renderComponent($$result2, "PPHeroSection", PPHeroSection, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/rk/DC/main-web/src/components/use-cases/file-management/pdf-to-png/PPHeroSection", "client:component-export": "default" })} ${renderComponent($$result2, "PPProblemSection", PPProblemSection, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/rk/DC/main-web/src/components/use-cases/file-management/pdf-to-png/PPProblemSection", "client:component-export": "default" })} ${renderComponent($$result2, "PPSolutionSection", PPSolutionSection, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/rk/DC/main-web/src/components/use-cases/file-management/pdf-to-png/PPSolutionSection", "client:component-export": "default" })} ${renderComponent($$result2, "PPComparisonSection", PPComparisonSection, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/rk/DC/main-web/src/components/use-cases/file-management/pdf-to-png/PPComparisonSection", "client:component-export": "default" })} ${renderComponent($$result2, "WaitlistSection", WaitlistSection, { "useCase": "pdf_to_png", "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/rk/DC/main-web/src/components/use-cases/WaitlistSection", "client:component-export": "default" })} ${renderComponent($$result2, "PPPersonasSection", PPPersonasSection, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/rk/DC/main-web/src/components/use-cases/file-management/pdf-to-png/PPPersonasSection", "client:component-export": "default" })} ${renderComponent($$result2, "PPFinalCTASection", PPFinalCTASection, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/rk/DC/main-web/src/components/use-cases/file-management/pdf-to-png/PPFinalCTASection", "client:component-export": "default" })} </main> ${renderComponent($$result2, "Footer", Footer, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/rk/DC/main-web/src/components/Footer", "client:component-export": "default" })} </div> ` })} `;
}, "/Users/rk/DC/main-web/astro-src/pages/use-cases/file-management/pdf-to-png/index.astro", void 0);

const $$file = "/Users/rk/DC/main-web/astro-src/pages/use-cases/file-management/pdf-to-png/index.astro";
const $$url = "/use-cases/file-management/pdf-to-png/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
