import { jsx, jsxs } from 'react/jsx-runtime';
import { u as useAnalyticsAstro, B as Button, t as trackDownloadRedirect, S as Sheet, a as SheetTrigger, b as SheetContent } from './Footer_CPzrBBdI.mjs';
import { ChevronDown, Download, Menu } from 'lucide-react';
import { d as dcLogo } from './dc-logo_6kTUD2wC.mjs';
import { useState } from 'react';

const useCasePages = [
  { name: "File Management", href: "/use-cases/file-management/", description: "Organize, rename, and convert files" },
  { name: "Knowledge Management", href: "/use-cases/knowledge-management/", description: "Build searchable knowledge bases" },
  { name: "Analyze Data", href: "/use-cases/analyze-data/", description: "Process CSVs, logs, and datasets" },
  { name: "Build Prototypes", href: "/use-cases/build-prototype/", description: "Rapid app and tool development" },
  { name: "Connect Apps", href: "/use-cases/connect-apps/", description: "Automate cross-app workflows" }
];
const NavigationAstro = ({ hideInstall = false }) => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [isMobileUseCasesOpen, setIsMobileUseCasesOpen] = useState(false);
  const [isUseCasesOpen, setIsUseCasesOpen] = useState(false);
  const { trackNavigation } = useAnalyticsAstro();
  const handleMobileNavClick = (linkText, destination, linkType = "internal") => {
    trackNavigation(linkText, destination, linkType);
    setIsSheetOpen(false);
  };
  const handleMobileDownloadClick = () => {
    trackDownloadRedirect("nav_mobile");
    setIsSheetOpen(false);
  };
  return /* @__PURE__ */ jsx("nav", { className: "fixed left-0 right-0 z-50 border-b border-dc-border bg-background/80 backdrop-blur-md transition-all duration-300", style: { top: "var(--banner-height, 0px)" }, children: /* @__PURE__ */ jsx("div", { className: "container mx-auto max-w-7xl px-4 sm:px-6 py-4", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-8", children: [
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "https://desktopcommander.app",
          className: "hover:opacity-80 transition-opacity flex-shrink-0",
          children: /* @__PURE__ */ jsx("img", { src: dcLogo.src, alt: "Desktop Commander", className: "h-7 sm:h-8 w-auto min-w-[270px]", width: "200", height: "32" })
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "hidden lg:flex items-center gap-6", children: [
        /* @__PURE__ */ jsxs(
          "div",
          {
            className: "relative",
            onMouseEnter: () => setIsUseCasesOpen(true),
            onMouseLeave: () => setIsUseCasesOpen(false),
            children: [
              /* @__PURE__ */ jsxs("button", { className: "flex items-center gap-1 text-white hover:text-white/80 font-medium text-sm px-3 py-2 rounded-md hover:bg-accent transition-colors", children: [
                /* @__PURE__ */ jsx("span", { children: "Use Cases" }),
                /* @__PURE__ */ jsx(ChevronDown, { className: `h-4 w-4 transition-transform duration-200 ${isUseCasesOpen ? "rotate-180" : ""}` })
              ] }),
              isUseCasesOpen && /* @__PURE__ */ jsx("div", { className: "absolute left-0 top-full pt-2 z-50", children: /* @__PURE__ */ jsxs("div", { className: "bg-[#1a1a2e] border border-dc-border rounded-lg shadow-xl py-2 min-w-[280px]", children: [
                useCasePages.map((page) => /* @__PURE__ */ jsxs(
                  "a",
                  {
                    href: page.href,
                    onClick: () => trackNavigation(page.name, page.href, "internal"),
                    className: "block px-4 py-3 hover:bg-white/10 transition-colors",
                    children: [
                      /* @__PURE__ */ jsx("div", { className: "text-white font-medium text-sm", children: page.name }),
                      /* @__PURE__ */ jsx("div", { className: "text-gray-400 text-xs mt-0.5", children: page.description })
                    ]
                  },
                  page.href
                )),
                /* @__PURE__ */ jsx("div", { className: "border-t border-dc-border mt-2 pt-2", children: /* @__PURE__ */ jsx(
                  "a",
                  {
                    href: "/use-cases/",
                    onClick: () => trackNavigation("All Use Cases", "/use-cases/", "internal"),
                    className: "block px-4 py-2 text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors",
                    children: "View all use cases →"
                  }
                ) })
              ] }) })
            ]
          }
        ),
        /* @__PURE__ */ jsx(Button, { variant: "ghost", size: "sm", asChild: true, children: /* @__PURE__ */ jsx(
          "a",
          {
            href: "/library",
            className: "text-white hover:text-white/80 font-medium",
            onClick: () => trackNavigation("Prompts", "/library", "internal"),
            children: "Prompts"
          }
        ) }),
        /* @__PURE__ */ jsx(Button, { variant: "ghost", size: "sm", asChild: true, children: /* @__PURE__ */ jsx(
          "a",
          {
            href: "/mcp",
            className: "text-white hover:text-white/80 font-medium",
            onClick: () => trackNavigation("MCP", "/mcp", "internal"),
            children: "MCP"
          }
        ) }),
        /* @__PURE__ */ jsx(Button, { variant: "ghost", size: "sm", asChild: true, children: /* @__PURE__ */ jsx(
          "a",
          {
            href: "https://desktopcommander.app/blog/",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "text-white hover:text-white/80 font-medium",
            onClick: () => trackNavigation("Blog", "https://desktopcommander.app/blog/", "external"),
            children: "Blog"
          }
        ) }),
        /* @__PURE__ */ jsx(Button, { variant: "ghost", size: "sm", asChild: true, children: /* @__PURE__ */ jsx(
          "a",
          {
            href: "/careers",
            className: "text-white hover:text-white/80 font-medium",
            onClick: () => trackNavigation("Careers", "/careers", "internal"),
            children: "Careers"
          }
        ) })
      ] })
    ] }),
    !hideInstall && /* @__PURE__ */ jsx("div", { className: "hidden lg:flex items-center gap-3", children: /* @__PURE__ */ jsx(Button, { size: "default", asChild: true, className: "bg-blue-600 hover:bg-blue-700 text-white px-6 py-2", children: /* @__PURE__ */ jsxs(
      "a",
      {
        href: "/#download",
        className: "flex items-center gap-2",
        onClick: () => trackDownloadRedirect("nav_desktop"),
        children: [
          /* @__PURE__ */ jsx(Download, { className: "h-4 w-4" }),
          "Download"
        ]
      }
    ) }) }),
    /* @__PURE__ */ jsxs(Sheet, { open: isSheetOpen, onOpenChange: setIsSheetOpen, children: [
      /* @__PURE__ */ jsx(SheetTrigger, { asChild: true, children: /* @__PURE__ */ jsx(Button, { variant: "ghost", size: "icon", className: "lg:hidden", children: /* @__PURE__ */ jsx(Menu, { className: "h-5 w-5" }) }) }),
      /* @__PURE__ */ jsx(SheetContent, { side: "right", className: "w-[300px] sm:w-[400px]", children: /* @__PURE__ */ jsxs("nav", { className: "flex flex-col gap-4 mt-8", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs(
            "button",
            {
              onClick: () => setIsMobileUseCasesOpen(!isMobileUseCasesOpen),
              className: "w-full flex items-center justify-between text-lg font-medium px-2 py-1 hover:text-primary transition-colors",
              children: [
                /* @__PURE__ */ jsx("span", { children: "Use Cases" }),
                /* @__PURE__ */ jsx(ChevronDown, { className: `h-5 w-5 transition-transform ${isMobileUseCasesOpen ? "rotate-180" : ""}` })
              ]
            }
          ),
          isMobileUseCasesOpen && /* @__PURE__ */ jsxs("div", { className: "mt-2 ml-4 flex flex-col gap-2", children: [
            useCasePages.map((page) => /* @__PURE__ */ jsx(
              "a",
              {
                href: page.href,
                onClick: () => handleMobileNavClick(page.name, page.href),
                className: "text-base text-gray-300 px-2 py-1.5 hover:text-primary transition-colors",
                children: page.name
              },
              page.href
            )),
            /* @__PURE__ */ jsx(
              "a",
              {
                href: "/use-cases/",
                onClick: () => handleMobileNavClick("All Use Cases", "/use-cases/"),
                className: "text-base text-blue-400 px-2 py-1.5 hover:text-blue-300 transition-colors",
                children: "View all →"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "/library",
            onClick: () => handleMobileNavClick("Prompts", "/library"),
            className: "text-lg font-medium px-2 py-1 hover:text-primary transition-colors",
            children: "Prompts"
          }
        ),
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "/mcp",
            onClick: () => handleMobileNavClick("MCP", "/mcp"),
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
            onClick: () => handleMobileNavClick("Blog", "https://desktopcommander.app/blog/", "external"),
            className: "text-lg font-medium px-2 py-1 hover:text-primary transition-colors",
            children: "Blog"
          }
        ),
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "/careers",
            onClick: () => handleMobileNavClick("Careers", "/careers"),
            className: "text-lg font-medium px-2 py-1 hover:text-primary transition-colors",
            children: "Careers"
          }
        ),
        !hideInstall && /* @__PURE__ */ jsx(Button, { size: "default", asChild: true, className: "mt-4 bg-blue-600 hover:bg-blue-700 text-white", children: /* @__PURE__ */ jsxs(
          "a",
          {
            href: "/#download",
            className: "flex items-center gap-2",
            onClick: handleMobileDownloadClick,
            children: [
              /* @__PURE__ */ jsx(Download, { className: "h-4 w-4" }),
              "Download"
            ]
          }
        ) })
      ] }) })
    ] })
  ] }) }) });
};

export { NavigationAstro as N };
