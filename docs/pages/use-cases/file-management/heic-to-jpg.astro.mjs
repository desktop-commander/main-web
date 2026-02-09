import { c as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../../../chunks/astro/server_Dp1VJtNq.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../../../chunks/dc-logo_6kTUD2wC.mjs';
import { P as PostHogInit } from '../../../chunks/PostHogInit_DvwonWEB.mjs';
import { D as DownloadButtons, N as NavigationLandingPage } from '../../../chunks/DownloadButtons_D1sVK0uh.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { B as Button, t as trackDownloadRedirect, F as Footer } from '../../../chunks/Footer_CPzrBBdI.mjs';
import { Download, ArrowRight, AlertCircle, Zap, FolderOpen, Lock, CheckCircle, XCircle, Camera, Briefcase, Users } from 'lucide-react';
import { W as WaitlistSection } from '../../../chunks/WaitlistSection_CPoRbun7.mjs';
/* empty css                                       */
export { renderers } from '../../../renderers.mjs';

const HJHeroSection = () => {
  return /* @__PURE__ */ jsx("section", { className: "pt-32 pb-16 md:pt-40 md:pb-20", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto max-w-6xl px-4 sm:px-6", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center text-center space-y-8", children: [
    /* @__PURE__ */ jsxs("h1", { className: "text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight max-w-4xl", children: [
      "Convert HEIC to JPG ",
      /* @__PURE__ */ jsx("span", { className: "text-primary", children: "instantly" })
    ] }),
    /* @__PURE__ */ jsx("p", { className: "text-lg sm:text-xl text-muted-foreground max-w-3xl leading-relaxed", children: "Batch convert iPhone photos to JPG in seconds. No uploads, no waiting, no privacy concerns. Just tell Desktop Commander what you need, and it handles the rest." }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center justify-center gap-3 pt-2", children: [
      /* @__PURE__ */ jsx("span", { className: "text-sm text-muted-foreground", children: "Converts:" }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center justify-center gap-2", children: [
        /* @__PURE__ */ jsx("span", { className: "px-3 py-1.5 rounded-full bg-dc-surface border border-dc-border text-sm font-medium", children: "HEIC → JPG" }),
        /* @__PURE__ */ jsx("span", { className: "px-3 py-1.5 rounded-full bg-dc-surface border border-dc-border text-sm font-medium", children: "HEIF → JPEG" }),
        /* @__PURE__ */ jsx("span", { className: "px-3 py-1.5 rounded-full bg-dc-surface border border-dc-border text-sm font-medium", children: "Batch Processing" }),
        /* @__PURE__ */ jsx("span", { className: "px-3 py-1.5 rounded-full bg-dc-surface border border-dc-border text-sm font-medium", children: "Preserve Quality" })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex flex-col sm:flex-row gap-4 pt-4", children: /* @__PURE__ */ jsx(
      Button,
      {
        size: "lg",
        asChild: true,
        className: "group",
        children: /* @__PURE__ */ jsxs("a", { href: "#get-started", onClick: () => trackDownloadRedirect("heic_to_jpg_hero"), children: [
          /* @__PURE__ */ jsx(Download, { className: "w-5 h-5" }),
          "Download Free",
          /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4 group-hover:translate-x-1 transition-transform" })
        ] })
      }
    ) }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center justify-center gap-6 pt-4 text-sm text-muted-foreground", children: [
      /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-green-400" }),
        "Batch convert entire folders at once"
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

const HJProblemSection = () => {
  return /* @__PURE__ */ jsx("section", { className: "py-16 md:py-20", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto max-w-5xl px-4 sm:px-6", children: /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-br from-dc-card to-dc-surface rounded-2xl border border-dc-border p-8 md:p-12", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4 mb-6", children: [
      /* @__PURE__ */ jsx("div", { className: "p-3 rounded-xl bg-destructive/10 border border-destructive/20", children: /* @__PURE__ */ jsx(AlertCircle, { className: "w-6 h-6 text-destructive" }) }),
      /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold", children: "iPhone photos won't open anywhere else." })
    ] }),
    /* @__PURE__ */ jsx("p", { className: "text-xl text-muted-foreground leading-relaxed", children: "Apple's HEIC format saves space but creates headaches everywhere else. Windows can't open them. Websites reject them. Email clients show broken images. You're stuck uploading to sketchy online converters or installing bloated apps just to share a photo." })
  ] }) }) });
};

const HJSolutionSection = () => {
  const features = [
    {
      title: "Batch convert in seconds",
      description: "Select a folder with HEIC files. Desktop Commander converts them all at once — no clicking through dialogs or waiting for uploads.",
      icon: Zap,
      command: '"Convert all HEIC files in my Photos folder to JPG"',
      result: "All files converted successfully"
    },
    {
      title: "Organize as you convert",
      description: "Don't just convert — sort into folders, rename with dates, or move to specific locations. One command does it all.",
      icon: FolderOpen,
      command: '"Convert my vacation photos to JPG and organize by month"',
      result: "Photos sorted into June/, July/, August/ folders"
    },
    {
      title: "Your photos stay private",
      description: "Unlike online converters, nothing leaves your computer. No uploads, no cloud processing, no data collection. Just local conversion.",
      icon: Lock,
      command: '"Convert these family photos to JPG"',
      result: "Converted locally — zero data sent anywhere"
    }
  ];
  return /* @__PURE__ */ jsx("section", { className: "py-16 md:py-24 bg-gradient-to-b from-background to-dc-card/30", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto max-w-6xl px-4 sm:px-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-16", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl lg:text-5xl font-bold mb-6", children: "Just tell it what you need. It handles the rest." }),
      /* @__PURE__ */ jsx("p", { className: "text-xl text-muted-foreground max-w-3xl mx-auto", children: "No menus. No settings. No figuring out which app to use. Just describe what you want in plain English." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "relative aspect-video rounded-xl border border-dc-border bg-dc-surface overflow-hidden max-w-4xl mx-auto shadow-lg mb-16", children: /* @__PURE__ */ jsxs(
      "video",
      {
        className: "w-full h-full object-cover",
        autoPlay: true,
        loop: true,
        muted: true,
        playsInline: true,
        "aria-label": "Desktop Commander converting HEIC photos to JPG - batch conversion demo",
        title: "Convert HEIC to JPG with natural language - Desktop Commander demo",
        children: [
          /* @__PURE__ */ jsx("source", { src: "/videos/heic-to-jpg-demo.mp4", type: "video/mp4" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Your browser does not support the video tag." })
        ]
      }
    ) }),
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

const HJComparisonSection = () => {
  const withDC = [
    "Convert entire folders in one command",
    "100% local — photos never leave your device",
    "Batch rename and organize while converting",
    "Works offline, no internet required",
    "Free plans available, works with any AI model"
  ];
  const withoutDC = [
    "Upload photos to unknown servers",
    "Convert one file at a time",
    "Download and re-organize manually",
    "Wait for slow uploads and processing",
    "Pay for premium features or deal with ads"
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

const HJPersonasSection = () => {
  const personas = [
    {
      icon: Camera,
      title: "iPhone Users & Photographers",
      color: "blue",
      useCases: [
        "Convert years of iPhone photos for sharing",
        "Prepare images for websites and portfolios",
        "Batch process event photos"
      ]
    },
    {
      icon: Briefcase,
      title: "Professionals & Remote Workers",
      color: "purple",
      useCases: [
        "Convert screenshots and photos for documents",
        "Prepare images for presentations",
        "Share compatible files with Windows colleagues"
      ]
    },
    {
      icon: Users,
      title: "Families & Everyday Users",
      color: "green",
      useCases: [
        "Convert photos to share with relatives",
        "Prepare images for printing services",
        "Organize and convert photo libraries"
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

const HJFinalCTASection = () => {
  return /* @__PURE__ */ jsx("section", { className: "py-16 md:py-24", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto max-w-4xl px-4 sm:px-6", children: /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-br from-primary/10 via-primary/5 to-transparent rounded-2xl border border-primary/20 p-8 md:p-12 text-center", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl lg:text-5xl font-bold mb-6", children: "Stop uploading your photos to strangers." }),
    /* @__PURE__ */ jsx("p", { className: "text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto", children: "Convert HEIC to JPG locally, instantly, and privately. No uploads, no waiting, no limits." }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-2 mb-4", children: [
      /* @__PURE__ */ jsx(Download, { className: "w-5 h-5 text-primary" }),
      /* @__PURE__ */ jsx("span", { className: "text-lg font-semibold", children: "Download Desktop Commander" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex flex-col sm:flex-row gap-4 justify-center mb-8", children: /* @__PURE__ */ jsx(DownloadButtons, { variant: "hero", location: "heic_to_jpg" }) }),
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
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Convert HEIC to JPG Instantly | Free Local Converter | Desktop Commander", "description": "Batch convert iPhone HEIC photos to JPG locally and privately. No uploads, no waiting \u2014 just instant conversion on your Mac or Windows PC. Free forever." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "PostHogInit", PostHogInit, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/rk/DC/main-web/src/components/PostHogInit", "client:component-export": "default" })} ${maybeRenderHead()}<div class="min-h-screen bg-background"> ${renderComponent($$result2, "NavigationLandingPage", NavigationLandingPage, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/rk/DC/main-web/src/components/NavigationLandingPage", "client:component-export": "default" })} <main> ${renderComponent($$result2, "HJHeroSection", HJHeroSection, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/rk/DC/main-web/src/components/use-cases/file-management/heic-to-jpg/HJHeroSection", "client:component-export": "default" })} ${renderComponent($$result2, "HJProblemSection", HJProblemSection, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/rk/DC/main-web/src/components/use-cases/file-management/heic-to-jpg/HJProblemSection", "client:component-export": "default" })} ${renderComponent($$result2, "HJSolutionSection", HJSolutionSection, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/rk/DC/main-web/src/components/use-cases/file-management/heic-to-jpg/HJSolutionSection", "client:component-export": "default" })} ${renderComponent($$result2, "HJComparisonSection", HJComparisonSection, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/rk/DC/main-web/src/components/use-cases/file-management/heic-to-jpg/HJComparisonSection", "client:component-export": "default" })} ${renderComponent($$result2, "WaitlistSection", WaitlistSection, { "useCase": "heic_to_jpg", "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/rk/DC/main-web/src/components/use-cases/WaitlistSection", "client:component-export": "default" })} ${renderComponent($$result2, "HJPersonasSection", HJPersonasSection, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/rk/DC/main-web/src/components/use-cases/file-management/heic-to-jpg/HJPersonasSection", "client:component-export": "default" })} ${renderComponent($$result2, "HJFinalCTASection", HJFinalCTASection, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/rk/DC/main-web/src/components/use-cases/file-management/heic-to-jpg/HJFinalCTASection", "client:component-export": "default" })} </main> ${renderComponent($$result2, "Footer", Footer, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/rk/DC/main-web/src/components/Footer", "client:component-export": "default" })} </div> ` })} `;
}, "/Users/rk/DC/main-web/astro-src/pages/use-cases/file-management/heic-to-jpg/index.astro", void 0);

const $$file = "/Users/rk/DC/main-web/astro-src/pages/use-cases/file-management/heic-to-jpg/index.astro";
const $$url = "/use-cases/file-management/heic-to-jpg/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
