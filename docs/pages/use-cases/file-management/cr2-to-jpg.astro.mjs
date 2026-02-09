import { c as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../../../chunks/astro/server_Dp1VJtNq.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../../../chunks/dc-logo_6kTUD2wC.mjs';
import { P as PostHogInit } from '../../../chunks/PostHogInit_DvwonWEB.mjs';
import { D as DownloadButtons, N as NavigationLandingPage } from '../../../chunks/DownloadButtons_D1sVK0uh.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { B as Button, t as trackDownloadRedirect, F as Footer } from '../../../chunks/Footer_CPzrBBdI.mjs';
import { Download, ArrowRight, AlertCircle, Zap, FolderOpen, Camera, CheckCircle, XCircle, Briefcase, Heart } from 'lucide-react';
import { W as WaitlistSection } from '../../../chunks/WaitlistSection_CPoRbun7.mjs';
/* empty css                                       */
export { renderers } from '../../../renderers.mjs';

const CRHeroSection = () => {
  return /* @__PURE__ */ jsx("section", { className: "pt-32 pb-16 md:pt-40 md:pb-20", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto max-w-6xl px-4 sm:px-6", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center text-center space-y-8", children: [
    /* @__PURE__ */ jsxs("h1", { className: "text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight max-w-4xl", children: [
      "Convert CR2 to JPG ",
      /* @__PURE__ */ jsx("span", { className: "text-primary", children: "in seconds" })
    ] }),
    /* @__PURE__ */ jsx("p", { className: "text-lg sm:text-xl text-muted-foreground max-w-3xl leading-relaxed", children: "Batch convert Canon RAW photos to shareable JPG instantly. No complex editing software, no uploads to random websites. Just tell Desktop Commander what you need." }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center justify-center gap-3 pt-2", children: [
      /* @__PURE__ */ jsx("span", { className: "text-sm text-muted-foreground", children: "Converts:" }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center justify-center gap-2", children: [
        /* @__PURE__ */ jsx("span", { className: "px-3 py-1.5 rounded-full bg-dc-surface border border-dc-border text-sm font-medium", children: "CR2 → JPG" }),
        /* @__PURE__ */ jsx("span", { className: "px-3 py-1.5 rounded-full bg-dc-surface border border-dc-border text-sm font-medium", children: "Canon RAW" }),
        /* @__PURE__ */ jsx("span", { className: "px-3 py-1.5 rounded-full bg-dc-surface border border-dc-border text-sm font-medium", children: "Batch Processing" }),
        /* @__PURE__ */ jsx("span", { className: "px-3 py-1.5 rounded-full bg-dc-surface border border-dc-border text-sm font-medium", children: "Preserve Metadata" })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex flex-col sm:flex-row gap-4 pt-4", children: /* @__PURE__ */ jsx(
      Button,
      {
        size: "lg",
        asChild: true,
        className: "group",
        children: /* @__PURE__ */ jsxs("a", { href: "#get-started", onClick: () => trackDownloadRedirect("cr2_to_jpg_hero"), children: [
          /* @__PURE__ */ jsx(Download, { className: "w-5 h-5" }),
          "Download Free",
          /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4 group-hover:translate-x-1 transition-transform" })
        ] })
      }
    ) }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center justify-center gap-6 pt-4 text-sm text-muted-foreground", children: [
      /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-green-400" }),
        "Process entire photo shoots at once"
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

const CRProblemSection = () => {
  return /* @__PURE__ */ jsx("section", { className: "py-16 md:py-20", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto max-w-5xl px-4 sm:px-6", children: /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-br from-dc-card to-dc-surface rounded-2xl border border-dc-border p-8 md:p-12", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4 mb-6", children: [
      /* @__PURE__ */ jsx("div", { className: "p-3 rounded-xl bg-destructive/10 border border-destructive/20", children: /* @__PURE__ */ jsx(AlertCircle, { className: "w-6 h-6 text-destructive" }) }),
      /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold", children: "Your Canon RAW files are trapped." })
    ] }),
    /* @__PURE__ */ jsx("p", { className: "text-xl text-muted-foreground leading-relaxed", children: "You shot hundreds of photos on your Canon camera, but now you can't share them. CR2 files won't open on most devices, social media rejects them, and email clients choke on the file size. You're stuck opening Lightroom or Photoshop just to export a few JPGs — or worse, uploading your personal photos to sketchy online converters." })
  ] }) }) });
};

const CRSolutionSection = () => {
  const features = [
    {
      title: "Batch convert entire shoots",
      description: "Point Desktop Commander at a folder of CR2 files and convert them all at once. No clicking through dialogs, no waiting for imports.",
      icon: Zap,
      command: '"Convert all CR2 files in my Canon photos folder to JPG"',
      result: "All 847 photos converted in 3 minutes"
    },
    {
      title: "Organize as you convert",
      description: "Don't just convert — sort into folders by date, rename with meaningful names, or move to specific locations. One command does it all.",
      icon: FolderOpen,
      command: '"Convert my wedding shoot to JPG and organize by date"',
      result: "Photos sorted into 2024-06-15/, 2024-06-16/ folders"
    },
    {
      title: "Preserve what matters",
      description: "Keep your EXIF data, camera settings, and timestamps intact. Your JPGs retain all the metadata photographers care about.",
      icon: Camera,
      command: '"Convert these CR2 files to JPG and keep the metadata"',
      result: "Converted with EXIF data preserved"
    }
  ];
  return /* @__PURE__ */ jsx("section", { className: "py-16 md:py-24 bg-gradient-to-b from-background to-dc-card/30", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto max-w-6xl px-4 sm:px-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-16", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl lg:text-5xl font-bold mb-6", children: "Just describe what you need. It handles the rest." }),
      /* @__PURE__ */ jsx("p", { className: "text-xl text-muted-foreground max-w-3xl mx-auto", children: "No Lightroom license. No complex export settings. Just tell Desktop Commander what you want in plain English." })
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

const CRComparisonSection = () => {
  const withDC = [
    "Convert entire photo shoots in one command",
    "100% local — your photos never leave your device",
    "Batch rename and organize while converting",
    "Works offline, no internet required",
    "No subscription to Lightroom or Photoshop needed"
  ];
  const withoutDC = [
    "Pay for Adobe Creative Cloud subscription",
    "Import, export, click through endless dialogs",
    "Upload personal photos to unknown servers",
    "Wait for slow processing and downloads",
    "Learn complex editing software just to convert files"
  ];
  return /* @__PURE__ */ jsx("section", { className: "py-16 md:py-24 bg-gradient-to-b from-background to-dc-card/30", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto max-w-6xl px-4 sm:px-6", children: [
    /* @__PURE__ */ jsx("div", { className: "text-center mb-16", children: /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl lg:text-5xl font-bold mb-4", children: "Desktop Commander vs. Traditional Workflow" }) }),
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
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-4 text-red-400", children: "Traditional Workflow" }),
          /* @__PURE__ */ jsx("ul", { className: "space-y-3 text-muted-foreground", children: withoutDC.map((item, index) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsx(XCircle, { className: "w-4 h-4 text-red-400 mt-1 shrink-0" }),
            /* @__PURE__ */ jsx("span", { children: item })
          ] }, index)) })
        ] })
      ] })
    ] })
  ] }) });
};

const CRPersonasSection = () => {
  const personas = [
    {
      icon: Camera,
      title: "Photographers",
      color: "blue",
      useCases: [
        "Convert client photo shoots for delivery",
        "Prepare images for portfolio websites",
        "Batch process event and wedding photos"
      ]
    },
    {
      icon: Briefcase,
      title: "Professionals & Creatives",
      color: "purple",
      useCases: [
        "Convert product photos for e-commerce",
        "Prepare images for marketing materials",
        "Share high-quality photos with clients"
      ]
    },
    {
      icon: Heart,
      title: "Hobbyists & Enthusiasts",
      color: "green",
      useCases: [
        "Convert vacation and travel photos",
        "Share photos with family and friends",
        "Prepare images for printing services"
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

const CRFinalCTASection = () => {
  return /* @__PURE__ */ jsx("section", { className: "py-16 md:py-24", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto max-w-4xl px-4 sm:px-6", children: /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-br from-primary/10 via-primary/5 to-transparent rounded-2xl border border-primary/20 p-8 md:p-12 text-center", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl lg:text-5xl font-bold mb-6", children: "Stop fighting with your RAW files." }),
    /* @__PURE__ */ jsx("p", { className: "text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto", children: "Convert CR2 to JPG locally, instantly, and privately. No subscriptions, no uploads, no limits." }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-2 mb-4", children: [
      /* @__PURE__ */ jsx(Download, { className: "w-5 h-5 text-primary" }),
      /* @__PURE__ */ jsx("span", { className: "text-lg font-semibold", children: "Download Desktop Commander" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex flex-col sm:flex-row gap-4 justify-center mb-8", children: /* @__PURE__ */ jsx(DownloadButtons, { variant: "hero", location: "cr2_to_jpg" }) }),
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
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Convert CR2 to JPG Instantly | Free Canon RAW Converter | Desktop Commander", "description": "Batch convert Canon CR2 RAW photos to JPG locally. Process entire photo shoots in seconds. Free, fast, and works offline on Mac & Windows." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "PostHogInit", PostHogInit, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/rk/DC/main-web/src/components/PostHogInit", "client:component-export": "default" })} ${maybeRenderHead()}<div class="min-h-screen bg-background"> ${renderComponent($$result2, "NavigationLandingPage", NavigationLandingPage, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/rk/DC/main-web/src/components/NavigationLandingPage", "client:component-export": "default" })} <main> ${renderComponent($$result2, "CRHeroSection", CRHeroSection, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/rk/DC/main-web/src/components/use-cases/file-management/cr2-to-jpg/CRHeroSection", "client:component-export": "default" })} ${renderComponent($$result2, "CRProblemSection", CRProblemSection, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/rk/DC/main-web/src/components/use-cases/file-management/cr2-to-jpg/CRProblemSection", "client:component-export": "default" })} ${renderComponent($$result2, "CRSolutionSection", CRSolutionSection, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/rk/DC/main-web/src/components/use-cases/file-management/cr2-to-jpg/CRSolutionSection", "client:component-export": "default" })} ${renderComponent($$result2, "CRComparisonSection", CRComparisonSection, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/rk/DC/main-web/src/components/use-cases/file-management/cr2-to-jpg/CRComparisonSection", "client:component-export": "default" })} ${renderComponent($$result2, "WaitlistSection", WaitlistSection, { "useCase": "cr2_to_jpg", "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/rk/DC/main-web/src/components/use-cases/WaitlistSection", "client:component-export": "default" })} ${renderComponent($$result2, "CRPersonasSection", CRPersonasSection, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/rk/DC/main-web/src/components/use-cases/file-management/cr2-to-jpg/CRPersonasSection", "client:component-export": "default" })} ${renderComponent($$result2, "CRFinalCTASection", CRFinalCTASection, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/rk/DC/main-web/src/components/use-cases/file-management/cr2-to-jpg/CRFinalCTASection", "client:component-export": "default" })} </main> ${renderComponent($$result2, "Footer", Footer, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/rk/DC/main-web/src/components/Footer", "client:component-export": "default" })} </div> ` })} `;
}, "/Users/rk/DC/main-web/astro-src/pages/use-cases/file-management/cr2-to-jpg/index.astro", void 0);

const $$file = "/Users/rk/DC/main-web/astro-src/pages/use-cases/file-management/cr2-to-jpg/index.astro";
const $$url = "/use-cases/file-management/cr2-to-jpg/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
