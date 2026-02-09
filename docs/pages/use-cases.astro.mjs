import { c as createComponent, a as createAstro, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_Dp1VJtNq.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/dc-logo_6kTUD2wC.mjs';
import { P as PostHogInit } from '../chunks/PostHogInit_DvwonWEB.mjs';
import { N as NavigationAstro } from '../chunks/NavigationAstro_DRR8vbzV.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { Folder, Database, Hammer, Link, BookOpen, ArrowRight } from 'lucide-react';
import { F as Footer } from '../chunks/Footer_CPzrBBdI.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const UseCasesHub = () => {
  const categories = [
    {
      title: "File Management",
      description: "Organize, convert, and manage files efficiently",
      icon: Folder,
      href: "/use-cases/file-management/",
      color: "text-blue-500"
    },
    {
      title: "Data Analysis",
      description: "Process and analyze CSV, JSON, and log files",
      icon: Database,
      href: "/use-cases/analyze-data/",
      color: "text-green-500"
    },
    {
      title: "Build Prototypes",
      description: "Rapidly prototype and build software projects",
      icon: Hammer,
      href: "/use-cases/build-prototype/",
      color: "text-purple-500"
    },
    {
      title: "Connect Apps",
      description: "Integrate and automate between different applications",
      icon: Link,
      href: "/use-cases/connect-apps/",
      color: "text-yellow-500"
    },
    {
      title: "Knowledge Management",
      description: "Organize notes, documentation, and research",
      icon: BookOpen,
      href: "/use-cases/knowledge-management/",
      color: "text-pink-500"
    }
  ];
  return /* @__PURE__ */ jsx("section", { className: "pt-32 pb-16 md:pt-40 md:pb-24", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto max-w-7xl px-4 sm:px-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-16 max-w-3xl mx-auto", children: [
      /* @__PURE__ */ jsxs("h1", { className: "text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6", children: [
        "What can Desktop Commander",
        " ",
        /* @__PURE__ */ jsx("span", { className: "text-primary", children: "help you with?" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-lg sm:text-xl text-muted-foreground", children: "From file management to development workflows, discover how Desktop Commander can simplify your daily tasks with AI-powered automation." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6", children: categories.map((category, index) => /* @__PURE__ */ jsxs(
      "a",
      {
        href: category.href,
        className: "group relative p-8 rounded-2xl border border-dc-border bg-dc-card hover:border-primary/50 hover:bg-dc-surface transition-all",
        children: [
          /* @__PURE__ */ jsx("div", { className: "mb-4", children: /* @__PURE__ */ jsx("div", { className: "inline-flex p-3 rounded-xl bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors", children: /* @__PURE__ */ jsx(category.icon, { className: `w-6 h-6 ${category.color} group-hover:scale-110 transition-transform` }) }) }),
          /* @__PURE__ */ jsx("h3", { className: "text-2xl font-semibold mb-3 group-hover:text-primary transition-colors", children: category.title }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mb-4", children: category.description }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center text-primary text-sm font-medium", children: [
            /* @__PURE__ */ jsx("span", { children: "Explore" }),
            /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" })
          ] })
        ]
      },
      index
    )) })
  ] }) });
};

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Use Cases | Desktop Commander - AI-Powered Automation", "description": "Discover how Desktop Commander can help with file management, data analysis, development, automation, content creation, and DevOps tasks." }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "PostHogInit", PostHogInit, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/rk/DC/main-web/src/components/PostHogInit", "client:component-export": "default" })} ${maybeRenderHead()}<div class="min-h-screen bg-background"> ${renderComponent($$result2, "NavigationAstro", NavigationAstro, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/rk/DC/main-web/src/components/NavigationAstro", "client:component-export": "default" })} <main> ${renderComponent($$result2, "UseCasesHub", UseCasesHub, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/rk/DC/main-web/src/components/use-cases/UseCasesHub", "client:component-export": "default" })} </main> ${renderComponent($$result2, "Footer", Footer, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/rk/DC/main-web/src/components/Footer", "client:component-export": "default" })} </div> ` })} `;
}, "/Users/rk/DC/main-web/astro-src/pages/use-cases/index.astro", void 0);

const $$file = "/Users/rk/DC/main-web/astro-src/pages/use-cases/index.astro";
const $$url = "/use-cases/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
