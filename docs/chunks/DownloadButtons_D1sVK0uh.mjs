import { jsxs, jsx } from 'react/jsx-runtime';
import { c as cn, u as useAnalyticsAstro, B as Button, S as Sheet, a as SheetTrigger, b as SheetContent, t as trackDownloadRedirect } from './Footer_CPzrBBdI.mjs';
import * as React from 'react';
import { useState } from 'react';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { ChevronRight, Check, Circle, ChevronDown, ExternalLink, Download, ArrowRight, Menu, Apple } from 'lucide-react';
import { d as dcLogo } from './dc-logo_6kTUD2wC.mjs';
import posthog from 'posthog-js';

const DropdownMenu = DropdownMenuPrimitive.Root;
const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
const DropdownMenuSubTrigger = React.forwardRef(({ className, inset, children, ...props }, ref) => /* @__PURE__ */ jsxs(
  DropdownMenuPrimitive.SubTrigger,
  {
    ref,
    className: cn(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[state=open]:bg-accent focus:bg-accent",
      inset && "pl-8",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsx(ChevronRight, { className: "ml-auto h-4 w-4" })
    ]
  }
));
DropdownMenuSubTrigger.displayName = DropdownMenuPrimitive.SubTrigger.displayName;
const DropdownMenuSubContent = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  DropdownMenuPrimitive.SubContent,
  {
    ref,
    className: cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    ),
    ...props
  }
));
DropdownMenuSubContent.displayName = DropdownMenuPrimitive.SubContent.displayName;
const DropdownMenuContent = React.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsx(DropdownMenuPrimitive.Portal, { children: /* @__PURE__ */ jsx(
  DropdownMenuPrimitive.Content,
  {
    ref,
    sideOffset,
    className: cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    ),
    ...props
  }
) }));
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;
const DropdownMenuItem = React.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ jsx(
  DropdownMenuPrimitive.Item,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
      inset && "pl-8",
      className
    ),
    ...props
  }
));
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;
const DropdownMenuCheckboxItem = React.forwardRef(({ className, children, checked, ...props }, ref) => /* @__PURE__ */ jsxs(
  DropdownMenuPrimitive.CheckboxItem,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
      className
    ),
    checked,
    ...props,
    children: [
      /* @__PURE__ */ jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsx(DropdownMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx(Check, { className: "h-4 w-4" }) }) }),
      children
    ]
  }
));
DropdownMenuCheckboxItem.displayName = DropdownMenuPrimitive.CheckboxItem.displayName;
const DropdownMenuRadioItem = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(
  DropdownMenuPrimitive.RadioItem,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsx(DropdownMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx(Circle, { className: "h-2 w-2 fill-current" }) }) }),
      children
    ]
  }
));
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;
const DropdownMenuLabel = React.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ jsx(
  DropdownMenuPrimitive.Label,
  {
    ref,
    className: cn("px-2 py-1.5 text-sm font-semibold", inset && "pl-8", className),
    ...props
  }
));
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName;
const DropdownMenuSeparator = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(DropdownMenuPrimitive.Separator, { ref, className: cn("-mx-1 my-1 h-px bg-muted", className), ...props }));
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;

const NavigationLandingPage = () => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const { trackNavigation } = useAnalyticsAstro();
  const handleMobileNavClick = (linkText, destination, linkType = "internal") => {
    trackNavigation(linkText, destination, linkType);
    setIsSheetOpen(false);
  };
  const handleDownloadClick = () => {
    trackDownloadRedirect("landing_page_nav");
  };
  const handleMobileDownloadClick = () => {
    trackDownloadRedirect("landing_page_nav_mobile");
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
        /* @__PURE__ */ jsx(Button, { variant: "ghost", size: "sm", asChild: true, children: /* @__PURE__ */ jsx(
          "a",
          {
            href: "/library/",
            className: "text-white hover:text-white/80 font-medium",
            onClick: () => trackNavigation("Prompts", "/library/", "internal"),
            children: "Prompts"
          }
        ) }),
        /* @__PURE__ */ jsxs(DropdownMenu, { children: [
          /* @__PURE__ */ jsx(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsxs(Button, { variant: "ghost", size: "sm", className: "text-white hover:text-white/80 font-medium", children: [
            "Community",
            /* @__PURE__ */ jsx(ChevronDown, { className: "ml-1 h-4 w-4" })
          ] }) }),
          /* @__PURE__ */ jsxs(DropdownMenuContent, { align: "start", className: "bg-dc-card border-dc-border", children: [
            /* @__PURE__ */ jsx(DropdownMenuItem, { asChild: true, children: /* @__PURE__ */ jsxs(
              "a",
              {
                href: "https://discord.gg/desktop-commander",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "flex items-center justify-between cursor-pointer",
                onClick: () => trackNavigation("Discord", "https://discord.gg/desktop-commander", "external"),
                children: [
                  "Discord",
                  /* @__PURE__ */ jsx(ExternalLink, { className: "ml-2 h-3 w-3" })
                ]
              }
            ) }),
            /* @__PURE__ */ jsx(DropdownMenuItem, { asChild: true, children: /* @__PURE__ */ jsxs(
              "a",
              {
                href: "https://www.reddit.com/r/DesktopCommander/",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "flex items-center justify-between cursor-pointer",
                onClick: () => trackNavigation("Reddit", "https://www.reddit.com/r/DesktopCommander/", "external"),
                children: [
                  "Reddit",
                  /* @__PURE__ */ jsx(ExternalLink, { className: "ml-2 h-3 w-3" })
                ]
              }
            ) })
          ] })
        ] }),
        /* @__PURE__ */ jsxs(DropdownMenu, { children: [
          /* @__PURE__ */ jsx(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsxs(Button, { variant: "ghost", size: "sm", className: "text-white hover:text-white/80 font-medium", children: [
            "Resources",
            /* @__PURE__ */ jsx(ChevronDown, { className: "ml-1 h-4 w-4" })
          ] }) }),
          /* @__PURE__ */ jsxs(DropdownMenuContent, { align: "start", className: "bg-dc-card border-dc-border", children: [
            /* @__PURE__ */ jsx(DropdownMenuItem, { asChild: true, children: /* @__PURE__ */ jsxs(
              "a",
              {
                href: "https://github.com/desktop-commander/desktop-commander",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "flex items-center justify-between cursor-pointer",
                onClick: () => trackNavigation("GitHub", "https://github.com/desktop-commander/desktop-commander", "external"),
                children: [
                  "GitHub",
                  /* @__PURE__ */ jsx(ExternalLink, { className: "ml-2 h-3 w-3" })
                ]
              }
            ) }),
            /* @__PURE__ */ jsx(DropdownMenuItem, { asChild: true, children: /* @__PURE__ */ jsx(
              "a",
              {
                href: "/careers/",
                className: "cursor-pointer",
                onClick: () => trackNavigation("Careers", "/careers/", "internal"),
                children: "Careers"
              }
            ) })
          ] })
        ] }),
        /* @__PURE__ */ jsx(Button, { variant: "ghost", size: "sm", asChild: true, children: /* @__PURE__ */ jsx(
          "a",
          {
            href: "https://desktopcommander.app/blog",
            className: "text-white hover:text-white/80 font-medium",
            onClick: () => trackNavigation("Blog", "https://desktopcommander.app/blog", "internal"),
            children: "Blog"
          }
        ) }),
        /* @__PURE__ */ jsx(Button, { variant: "ghost", size: "sm", asChild: true, children: /* @__PURE__ */ jsx(
          "a",
          {
            href: "https://blog.desktopcommander.app/about/",
            className: "text-white hover:text-white/80 font-medium",
            onClick: () => trackNavigation("About", "https://blog.desktopcommander.app/about/", "internal"),
            children: "About"
          }
        ) })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "hidden lg:flex items-center gap-3", children: /* @__PURE__ */ jsx(
      Button,
      {
        size: "sm",
        className: "shadow-lg shadow-primary/20 group",
        asChild: true,
        children: /* @__PURE__ */ jsxs(
          "a",
          {
            href: "#get-started",
            onClick: handleDownloadClick,
            children: [
              /* @__PURE__ */ jsx(Download, { className: "w-4 h-4" }),
              "Download",
              /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4 group-hover:translate-x-1 transition-transform" })
            ]
          }
        )
      }
    ) }),
    /* @__PURE__ */ jsx("div", { className: "lg:hidden", children: /* @__PURE__ */ jsxs(Sheet, { open: isSheetOpen, onOpenChange: setIsSheetOpen, children: [
      /* @__PURE__ */ jsx(SheetTrigger, { asChild: true, children: /* @__PURE__ */ jsx(Button, { variant: "ghost", size: "sm", children: /* @__PURE__ */ jsx(Menu, { className: "h-5 w-5" }) }) }),
      /* @__PURE__ */ jsx(SheetContent, { side: "right", className: "w-full sm:w-[400px] bg-dc-card border-dc-border", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-4 mt-8", children: [
        /* @__PURE__ */ jsx(Button, { variant: "ghost", size: "sm", asChild: true, children: /* @__PURE__ */ jsx(
          "a",
          {
            href: "/library/",
            className: "text-white hover:text-white/80 font-medium justify-start",
            onClick: () => handleMobileNavClick("Prompts", "/library/", "internal"),
            children: "Prompts"
          }
        ) }),
        /* @__PURE__ */ jsxs("div", { className: "border-t border-dc-border pt-4", children: [
          /* @__PURE__ */ jsx("p", { className: "text-sm font-medium text-muted-foreground mb-2 px-3", children: "Community" }),
          /* @__PURE__ */ jsx(Button, { variant: "ghost", size: "sm", asChild: true, children: /* @__PURE__ */ jsxs(
            "a",
            {
              href: "https://discord.gg/desktop-commander",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "text-white hover:text-white/80 font-medium justify-start w-full",
              onClick: () => handleMobileNavClick("Discord", "https://discord.gg/desktop-commander", "external"),
              children: [
                "Discord",
                /* @__PURE__ */ jsx(ExternalLink, { className: "ml-2 h-3 w-3" })
              ]
            }
          ) }),
          /* @__PURE__ */ jsx(Button, { variant: "ghost", size: "sm", asChild: true, children: /* @__PURE__ */ jsxs(
            "a",
            {
              href: "https://www.reddit.com/r/DesktopCommander/",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "text-white hover:text-white/80 font-medium justify-start w-full",
              onClick: () => handleMobileNavClick("Reddit", "https://www.reddit.com/r/DesktopCommander/", "external"),
              children: [
                "Reddit",
                /* @__PURE__ */ jsx(ExternalLink, { className: "ml-2 h-3 w-3" })
              ]
            }
          ) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "border-t border-dc-border pt-4", children: [
          /* @__PURE__ */ jsx("p", { className: "text-sm font-medium text-muted-foreground mb-2 px-3", children: "Resources" }),
          /* @__PURE__ */ jsx(Button, { variant: "ghost", size: "sm", asChild: true, children: /* @__PURE__ */ jsxs(
            "a",
            {
              href: "https://github.com/desktop-commander/desktop-commander",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "text-white hover:text-white/80 font-medium justify-start w-full",
              onClick: () => handleMobileNavClick("GitHub", "https://github.com/desktop-commander/desktop-commander", "external"),
              children: [
                "GitHub",
                /* @__PURE__ */ jsx(ExternalLink, { className: "ml-2 h-3 w-3" })
              ]
            }
          ) }),
          /* @__PURE__ */ jsx(Button, { variant: "ghost", size: "sm", asChild: true, children: /* @__PURE__ */ jsx(
            "a",
            {
              href: "/careers/",
              className: "text-white hover:text-white/80 font-medium justify-start w-full",
              onClick: () => handleMobileNavClick("Careers", "/careers/", "internal")
            }
          ) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "border-t border-dc-border pt-4", children: [
          /* @__PURE__ */ jsx(Button, { variant: "ghost", size: "sm", asChild: true, children: /* @__PURE__ */ jsx(
            "a",
            {
              href: "https://desktopcommander.app/blog",
              className: "text-white hover:text-white/80 font-medium justify-start w-full",
              onClick: () => handleMobileNavClick("Blog", "https://desktopcommander.app/blog", "internal"),
              children: "Blog"
            }
          ) }),
          /* @__PURE__ */ jsx(Button, { variant: "ghost", size: "sm", asChild: true, children: /* @__PURE__ */ jsx(
            "a",
            {
              href: "https://blog.desktopcommander.app/about/",
              className: "text-white hover:text-white/80 font-medium justify-start w-full",
              onClick: () => handleMobileNavClick("About", "https://blog.desktopcommander.app/about/", "internal"),
              children: "About"
            }
          ) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "border-t border-dc-border pt-4 mt-4", children: /* @__PURE__ */ jsx(
          Button,
          {
            size: "lg",
            className: "w-full shadow-lg shadow-primary/20 group",
            asChild: true,
            children: /* @__PURE__ */ jsxs(
              "a",
              {
                href: "#get-started",
                onClick: handleMobileDownloadClick,
                children: [
                  /* @__PURE__ */ jsx(Download, { className: "w-4 h-4" }),
                  "Download",
                  /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4 group-hover:translate-x-1 transition-transform" })
                ]
              }
            )
          }
        ) })
      ] }) })
    ] }) })
  ] }) }) });
};

const WindowsIcon = ({ className }) => /* @__PURE__ */ jsx("svg", { className, viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ jsx("path", { d: "M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801" }) });
const downloadUrls = {
  "macos-m": "https://github.com/desktop-commander/dc-app-client-releases/releases/latest/download/desktop-commander-mac-arm64.dmg",
  "macos-intel": "https://github.com/desktop-commander/dc-app-client-releases/releases/latest/download/desktop-commander-mac-x64.dmg",
  "windows": "https://github.com/desktop-commander/dc-app-client-releases-windows/releases/latest/download/desktop-commander-win-x64.msi"
};
const DownloadButtons = ({ variant = "default", location = "unknown" }) => {
  const trackDownload = (platform, url) => {
    posthog.capture("download_clicked", {
      platform,
      url,
      button_location: location,
      page_path: window.location.pathname
    });
  };
  const buttonClass = variant === "hero" ? "bg-primary hover:bg-primary/90 text-primary-foreground" : "bg-black hover:bg-black/90 text-white border-2 border-white/20 hover:border-primary/50";
  const size = variant === "compact" ? "default" : "lg";
  return /* @__PURE__ */ jsx("div", { className: "flex flex-col items-center gap-3", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-3 justify-center items-start", children: [
    /* @__PURE__ */ jsx(
      Button,
      {
        size,
        className: buttonClass,
        asChild: true,
        children: /* @__PURE__ */ jsxs(
          "a",
          {
            href: downloadUrls["macos-m"],
            onClick: () => trackDownload("macos-m", downloadUrls["macos-m"]),
            children: [
              /* @__PURE__ */ jsx(Apple, { className: "w-5 h-5" }),
              "macOS M Chip"
            ]
          }
        )
      }
    ),
    /* @__PURE__ */ jsx(
      Button,
      {
        size,
        className: buttonClass,
        asChild: true,
        children: /* @__PURE__ */ jsxs(
          "a",
          {
            href: downloadUrls["macos-intel"],
            onClick: () => trackDownload("macos-intel", downloadUrls["macos-intel"]),
            children: [
              /* @__PURE__ */ jsx(Apple, { className: "w-5 h-5" }),
              "macOS Intel"
            ]
          }
        )
      }
    ),
    /* @__PURE__ */ jsx(
      Button,
      {
        size,
        className: buttonClass,
        asChild: true,
        children: /* @__PURE__ */ jsxs(
          "a",
          {
            href: downloadUrls["windows"],
            onClick: () => trackDownload("windows", downloadUrls["windows"]),
            children: [
              /* @__PURE__ */ jsx(WindowsIcon, { className: "w-5 h-5" }),
              "Windows"
            ]
          }
        )
      }
    )
  ] }) });
};

export { DownloadButtons as D, NavigationLandingPage as N };
