import { c as createComponent, a as createAstro, m as maybeRenderHead, d as addAttribute, r as renderComponent, b as renderTemplate } from './astro/server_Dp1VJtNq.mjs';
import 'kleur/colors';
import 'html-escaper';
import { jsxs, jsx } from 'react/jsx-runtime';
import { S as Sheet, a as SheetTrigger, B as Button, b as SheetContent, t as trackDownloadRedirect } from './Footer_CPzrBBdI.mjs';
import { Menu, ChevronDown, Download } from 'lucide-react';
import { useState } from 'react';
import { d as dcLogo } from './dc-logo_6kTUD2wC.mjs';

const useCasePages = [
  { name: "File Management", href: "/use-cases/file-management/" },
  { name: "Knowledge Management", href: "/use-cases/knowledge-management/" },
  { name: "Analyze Data", href: "/use-cases/analyze-data/" },
  { name: "Build Prototypes", href: "/use-cases/build-prototype/" },
  { name: "Connect Apps", href: "/use-cases/connect-apps/" }
];
const MobileMenu = () => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [isUseCasesOpen, setIsUseCasesOpen] = useState(false);
  const handleNavClick = () => {
    setIsSheetOpen(false);
  };
  return /* @__PURE__ */ jsxs(Sheet, { open: isSheetOpen, onOpenChange: setIsSheetOpen, children: [
    /* @__PURE__ */ jsx(SheetTrigger, { asChild: true, children: /* @__PURE__ */ jsx(Button, { variant: "ghost", size: "icon", className: "lg:hidden", children: /* @__PURE__ */ jsx(Menu, { className: "h-5 w-5" }) }) }),
    /* @__PURE__ */ jsx(SheetContent, { side: "right", className: "w-[300px] sm:w-[400px]", children: /* @__PURE__ */ jsxs("nav", { className: "flex flex-col gap-4 mt-8", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: () => setIsUseCasesOpen(!isUseCasesOpen),
            className: "w-full flex items-center justify-between text-lg font-medium px-2 py-1 hover:text-primary transition-colors",
            children: [
              /* @__PURE__ */ jsx("span", { children: "Use Cases" }),
              /* @__PURE__ */ jsx(ChevronDown, { className: `h-5 w-5 transition-transform duration-200 ${isUseCasesOpen ? "rotate-180" : ""}` })
            ]
          }
        ),
        isUseCasesOpen && /* @__PURE__ */ jsx("div", { className: "mt-2 ml-4 flex flex-col gap-2", children: useCasePages.map((page) => /* @__PURE__ */ jsx(
          "a",
          {
            href: page.href,
            onClick: handleNavClick,
            className: "text-base text-gray-300 px-2 py-1.5 hover:text-primary transition-colors",
            children: page.name
          },
          page.href
        )) })
      ] }),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "/library",
          onClick: handleNavClick,
          className: "text-lg font-medium px-2 py-1 hover:text-primary transition-colors",
          children: "Prompts"
        }
      ),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "/mcp",
          onClick: handleNavClick,
          className: "text-lg font-medium px-2 py-1 hover:text-primary transition-colors",
          children: "MCP"
        }
      ),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "https://desktopcommander.app/blog/",
          target: "_blank",
          rel: "noopener noreferrer",
          onClick: handleNavClick,
          className: "text-lg font-medium px-2 py-1 hover:text-primary transition-colors",
          children: "Blog"
        }
      ),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "/careers",
          onClick: handleNavClick,
          className: "text-lg font-medium px-2 py-1 hover:text-primary transition-colors",
          children: "Careers"
        }
      ),
      /* @__PURE__ */ jsx(Button, { size: "default", asChild: true, className: "mt-4 bg-blue-600 hover:bg-blue-700 text-white", children: /* @__PURE__ */ jsxs(
        "a",
        {
          href: "/#download",
          className: "flex items-center gap-2",
          onClick: () => {
            trackDownloadRedirect("mobile_menu");
            handleNavClick();
          },
          children: [
            /* @__PURE__ */ jsx(Download, { className: "h-4 w-4" }),
            "Download"
          ]
        }
      ) })
    ] }) })
  ] });
};

const $$Astro = createAstro();
const $$Navigation = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Navigation;
  const useCasePages = [
    { name: "File Management", href: "/use-cases/file-management/", description: "Organize, rename, and convert files" },
    { name: "Knowledge Management", href: "/use-cases/knowledge-management/", description: "Build searchable knowledge bases" },
    { name: "Analyze Data", href: "/use-cases/analyze-data/", description: "Process CSVs, logs, and datasets" },
    { name: "Build Prototypes", href: "/use-cases/build-prototype/", description: "Rapid app and tool development" },
    { name: "Connect Apps", href: "/use-cases/connect-apps/", description: "Automate cross-app workflows" }
  ];
  return renderTemplate`${maybeRenderHead()}<nav class="fixed left-0 right-0 z-50 border-b border-dc-border bg-background/80 backdrop-blur-md transition-all duration-300" style="top: var(--banner-height, 0px);"> <div class="container mx-auto max-w-7xl px-4 sm:px-6 py-4"> <div class="flex items-center justify-between"> <div class="flex items-center gap-8"> <a href="https://desktopcommander.app" class="hover:opacity-80 transition-opacity flex-shrink-0"> <img${addAttribute(dcLogo.src, "src")} alt="Desktop Commander" class="h-7 sm:h-8 w-auto min-w-[270px]" width="200" height="32"> </a> <!-- Desktop Navigation --> <div class="hidden lg:flex items-center gap-6"> <!-- Use Cases Dropdown --> <div class="relative group"> <button class="flex items-center gap-1 text-white hover:text-white/80 font-medium text-sm px-3 py-2 rounded-md hover:bg-white/10 transition-colors"> <span>Use Cases</span> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 transition-transform duration-200 group-hover:rotate-180"> <polyline points="6 9 12 15 18 9"></polyline> </svg> </button> <!-- Dropdown Menu --> <div class="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50"> <div class="bg-[#1a1a2e] border border-dc-border rounded-lg shadow-xl py-2 min-w-[280px]"> ${useCasePages.map((page) => renderTemplate`<a${addAttribute(page.href, "href")} class="block px-4 py-3 hover:bg-white/10 transition-colors"> <div class="text-white font-medium text-sm">${page.name}</div> <div class="text-gray-400 text-xs mt-0.5">${page.description}</div> </a>`)} </div> </div> </div> <a href="/library" class="text-white hover:text-white/80 font-medium text-sm px-3 py-2 rounded-md hover:bg-white/10 transition-colors">
Prompts
</a> <a href="/mcp" class="text-white hover:text-white/80 font-medium text-sm px-3 py-2 rounded-md hover:bg-white/10 transition-colors">
MCP
</a> <a href="https://desktopcommander.app/blog/" target="_blank" rel="noopener noreferrer" class="text-white hover:text-white/80 font-medium text-sm px-3 py-2 rounded-md hover:bg-white/10 transition-colors">
Blog
</a> <a href="/careers" class="text-white hover:text-white/80 font-medium text-sm px-3 py-2 rounded-md hover:bg-white/10 transition-colors">
Careers
</a> </div> </div> <!-- Desktop CTA --> <div class="hidden lg:flex items-center gap-3"> <a href="/#download" class="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-medium text-sm transition-colors"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4"> <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path> <polyline points="7 10 12 15 17 10"></polyline> <line x1="12" y1="15" x2="12" y2="3"></line> </svg>
Download
</a> </div> <!-- Mobile Menu (React for interactivity) --> ${renderComponent($$result, "MobileMenu", MobileMenu, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/rk/DC/main-web/src/components/MobileMenu", "client:component-export": "default" })} </div> </div> </nav>`;
}, "/Users/rk/DC/main-web/astro-src/components/Navigation.astro", void 0);

export { $$Navigation as $ };
