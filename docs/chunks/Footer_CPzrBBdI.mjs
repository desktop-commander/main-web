import { jsx, jsxs } from 'react/jsx-runtime';
import * as SheetPrimitive from '@radix-ui/react-dialog';
import { cva } from 'class-variance-authority';
import { X, Github, MessageCircle, Play, Package } from 'lucide-react';
import * as React from 'react';
import { useEffect, useCallback } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-elegant",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-dc-border bg-background hover:bg-dc-surface hover:text-foreground hover:border-primary/50",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-dc-surface hover:text-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        hero: "bg-blue-600 text-white hover:bg-blue-500 shadow-lg hover:shadow-xl font-semibold",
        subtle: "bg-dc-surface text-foreground hover:bg-dc-border border border-dc-border/50"
      },
      size: {
        default: "h-11 px-6 py-3",
        sm: "h-9 rounded-lg px-4",
        lg: "h-14 rounded-lg px-10 text-base",
        icon: "h-11 w-11"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsx(Comp, { className: cn(buttonVariants({ variant, size, className })), ref, ...props });
  }
);
Button.displayName = "Button";

const Sheet = SheetPrimitive.Root;
const SheetTrigger = SheetPrimitive.Trigger;
const SheetPortal = SheetPrimitive.Portal;
const SheetOverlay = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SheetPrimitive.Overlay,
  {
    className: cn(
      "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props,
    ref
  }
));
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName;
const sheetVariants = cva(
  "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
        right: "inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
      }
    },
    defaultVariants: {
      side: "right"
    }
  }
);
const SheetContent = React.forwardRef(
  ({ side = "right", className, children, ...props }, ref) => /* @__PURE__ */ jsxs(SheetPortal, { children: [
    /* @__PURE__ */ jsx(SheetOverlay, {}),
    /* @__PURE__ */ jsxs(SheetPrimitive.Content, { ref, className: cn(sheetVariants({ side }), className), ...props, children: [
      children,
      /* @__PURE__ */ jsxs(SheetPrimitive.Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity data-[state=open]:bg-secondary hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none", children: [
        /* @__PURE__ */ jsx(X, { className: "h-4 w-4" }),
        /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Close" })
      ] })
    ] })
  ] })
);
SheetContent.displayName = SheetPrimitive.Content.displayName;
const SheetTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(SheetPrimitive.Title, { ref, className: cn("text-lg font-semibold text-foreground", className), ...props }));
SheetTitle.displayName = SheetPrimitive.Title.displayName;
const SheetDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(SheetPrimitive.Description, { ref, className: cn("text-sm text-muted-foreground", className), ...props }));
SheetDescription.displayName = SheetPrimitive.Description.displayName;

const PAGE_EVENTS = {
  PAGE_VIEW: "page_view"};
const INTERACTION_EVENTS = {
  // Download and CTA events (High Priority)
  DOWNLOAD_CLICKED: "download_clicked",
  CTA_CLICKED: "cta_clicked",
  // Community link events (High Priority)
  GITHUB_CLICKED: "github_clicked",
  DISCORD_CLICKED: "discord_clicked",
  YOUTUBE_CLICKED: "youtube_clicked",
  // User engagement events
  SCROLL_DEPTH: "scroll_depth"};
const BLOG_EVENTS = {
  BLOG_POST_CLICKED: "blog_post_clicked"};

const isPostHogReady = () => {
  return !!window.posthog && !!window.posthog.__loaded;
};
const isGtagReady = () => {
  return typeof window !== "undefined" && typeof window.gtag === "function";
};
const trackEvent = (eventName, properties) => {
  if (isPostHogReady()) {
    try {
      window.posthog.capture(eventName, {
        ...properties,
        timestamp: (/* @__PURE__ */ new Date()).toISOString()
      });
      console.log("✅ Event sent to PostHog:", eventName);
    } catch (error) {
      console.error("❌ Error tracking event to PostHog:", eventName, error);
    }
  } else {
    console.warn("PostHog not ready, event logged locally only:", eventName);
  }
  if (isGtagReady()) {
    try {
      window.gtag("event", eventName, properties);
      console.log("✅ Event sent to Google Analytics:", eventName);
    } catch (error) {
      console.error("❌ Error tracking event to Google Analytics:", eventName, error);
    }
  }
};
const trackPageView = (properties) => {
  trackEvent(PAGE_EVENTS.PAGE_VIEW, properties);
};
const trackDownloadClick = (properties) => {
  trackEvent(INTERACTION_EVENTS.DOWNLOAD_CLICKED, properties);
};
const trackDownloadRedirect = (location) => {
  trackEvent(INTERACTION_EVENTS.DOWNLOAD_CLICKED, {
    platform: "redirect_to_section",
    button_location: location,
    page_path: typeof window !== "undefined" ? window.location.pathname : "",
    action_type: "redirect"
  });
};
const trackCommunityLink = (properties) => {
  const eventMap = {
    github: INTERACTION_EVENTS.GITHUB_CLICKED,
    discord: INTERACTION_EVENTS.DISCORD_CLICKED,
    youtube: INTERACTION_EVENTS.YOUTUBE_CLICKED
  };
  trackEvent(eventMap[properties.platform], properties);
};
const trackCtaClick = (buttonText, location, additionalProps) => {
  trackEvent(INTERACTION_EVENTS.CTA_CLICKED, {
    button_text: buttonText,
    button_location: location,
    ...additionalProps
  });
};
const trackScrollDepth = (properties) => {
  trackEvent(INTERACTION_EVENTS.SCROLL_DEPTH, properties);
};
const trackBlogPostClick = (properties) => {
  trackEvent(BLOG_EVENTS.BLOG_POST_CLICKED, properties);
};

const useScrollTracking = (resetDependency) => {
  useEffect(() => {
    let maxScrollDepth = 0;
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollTop = window.pageYOffset;
          const docHeight = document.documentElement.scrollHeight - window.innerHeight;
          const scrollPercent = Math.round(scrollTop / docHeight * 100);
          const milestones = [25, 50, 75, 90];
          const currentMilestone = milestones.find(
            (milestone) => scrollPercent >= milestone && maxScrollDepth < milestone
          );
          if (currentMilestone) {
            maxScrollDepth = currentMilestone;
            trackScrollDepth({
              depth_percentage: currentMilestone,
              page_url: window.location.href,
              max_scroll_reached: scrollPercent
            });
          }
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [resetDependency]);
};
const useTrackingFunctions = () => {
  const trackDownload = useCallback((buttonText, location, additionalProps) => {
    trackDownloadClick({
      button_text: buttonText,
      button_location: location,
      ...additionalProps
    });
  }, []);
  const trackCommunity = useCallback((platform, linkLocation, linkText) => {
    trackCommunityLink({
      platform,
      link_location: linkLocation,
      link_text: linkText
    });
  }, []);
  const trackCTA = useCallback((buttonText, location, additionalProps) => {
    trackCtaClick(buttonText, location, additionalProps);
  }, []);
  const trackCustomEvent = useCallback((eventName, properties) => {
    trackEvent(eventName, properties);
  }, []);
  const trackNavigation = useCallback((linkText, destination, linkType = "internal") => {
    trackEvent("navigation_clicked", {
      link_text: linkText,
      destination,
      link_type: linkType
    });
  }, []);
  const trackPageViewManual = useCallback((pageTitle, additionalProps) => {
    trackPageView({
      page_title: pageTitle || document.title || "Desktop Commander",
      page_url: window.location.href,
      referrer: document.referrer || void 0,
      ...additionalProps
    });
  }, []);
  return {
    trackDownload,
    trackCommunity,
    trackCTA,
    trackCustomEvent,
    trackNavigation,
    trackPageView: trackPageViewManual
  };
};

const useAnalyticsAstro = () => {
  useScrollTracking();
  return useTrackingFunctions();
};

const dcLogo = new Proxy({"src":"/assets/dc-logo-dark.Dl5fbme8.png","width":512,"height":576,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/rk/DC/main-web/src/assets/dc-logo-dark.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/rk/DC/main-web/src/assets/dc-logo-dark.png");
							return target[name];
						}
					});

const Footer = () => {
  const { trackCustomEvent } = useAnalyticsAstro();
  return /* @__PURE__ */ jsx("footer", { className: "border-t border-dc-border bg-dc-surface/50", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto max-w-7xl px-4 sm:px-6 py-12 md:py-16", children: [
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "col-span-1 sm:col-span-2", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
          /* @__PURE__ */ jsx("img", { src: dcLogo.src, alt: "Desktop Commander", className: "h-8 w-8", loading: "lazy" }),
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-foreground", children: "Desktop Commander" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mb-6 max-w-sm leading-relaxed", children: "AI that executes. Read files, run commands, and automate workflows — all in natural language." }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [
          /* @__PURE__ */ jsx(Button, { variant: "ghost", size: "icon", asChild: true, children: /* @__PURE__ */ jsx("a", { href: "https://github.com/wonderwhy-er/DesktopCommanderMCP", target: "_blank", rel: "noopener noreferrer", title: "GitHub", children: /* @__PURE__ */ jsx(Github, { className: "h-5 w-5" }) }) }),
          /* @__PURE__ */ jsx(Button, { variant: "ghost", size: "icon", asChild: true, children: /* @__PURE__ */ jsx("a", { href: "https://discord.gg/kQ27sNnZr7", target: "_blank", rel: "noopener noreferrer", title: "Discord", children: /* @__PURE__ */ jsx(MessageCircle, { className: "h-5 w-5" }) }) }),
          /* @__PURE__ */ jsx(Button, { variant: "ghost", size: "icon", asChild: true, children: /* @__PURE__ */ jsx("a", { href: "https://www.youtube.com/@EduardsRuzga", target: "_blank", rel: "noopener noreferrer", title: "YouTube", children: /* @__PURE__ */ jsx(Play, { className: "h-5 w-5" }) }) }),
          /* @__PURE__ */ jsx(Button, { variant: "ghost", size: "icon", asChild: true, children: /* @__PURE__ */ jsx("a", { href: "https://x.com/DCommander_MCP", target: "_blank", rel: "noopener noreferrer", title: "X (Twitter)", children: /* @__PURE__ */ jsx("svg", { className: "h-5 w-5", fill: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" }) }) }) }),
          /* @__PURE__ */ jsx(Button, { variant: "ghost", size: "icon", asChild: true, children: /* @__PURE__ */ jsx("a", { href: "https://www.npmjs.com/package/@wonderwhy-er/desktop-commander", target: "_blank", rel: "noopener noreferrer", title: "NPM", children: /* @__PURE__ */ jsx(Package, { className: "h-5 w-5" }) }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "col-span-1", children: [
        /* @__PURE__ */ jsx("h4", { className: "font-semibold text-foreground mb-4", children: "Product" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-3", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
            "a",
            {
              href: "/#download",
              className: "text-muted-foreground hover:text-primary transition-smooth text-sm",
              onClick: () => trackDownloadRedirect("footer"),
              children: "Download App"
            }
          ) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
            "a",
            {
              href: "/mcp",
              className: "text-muted-foreground hover:text-primary transition-smooth text-sm",
              onClick: () => trackCustomEvent("navigation_clicked", {
                button_text: "MCP Server",
                button_location: "footer",
                link_type: "internal",
                section: "mcp"
              }),
              children: "MCP Server"
            }
          ) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
            "a",
            {
              href: "/library",
              className: "text-muted-foreground hover:text-primary transition-smooth text-sm",
              onClick: () => trackCustomEvent("navigation_clicked", {
                button_text: "Prompt Library",
                button_location: "footer",
                link_type: "internal",
                section: "prompts"
              }),
              children: "Prompt Library"
            }
          ) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
            "a",
            {
              href: "/#use-cases",
              className: "text-muted-foreground hover:text-primary transition-smooth text-sm",
              onClick: () => trackCustomEvent("navigation_clicked", {
                button_text: "Use Cases",
                button_location: "footer",
                link_type: "internal",
                section: "use-cases"
              }),
              children: "Use Cases"
            }
          ) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "col-span-1", children: [
        /* @__PURE__ */ jsx("h4", { className: "font-semibold text-foreground mb-4", children: "Resources" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-3", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
            "a",
            {
              href: "/#blog",
              className: "text-muted-foreground hover:text-primary transition-smooth text-sm",
              onClick: () => trackCustomEvent("navigation_clicked", {
                button_text: "Blog",
                button_location: "footer",
                link_type: "internal",
                section: "blog"
              }),
              children: "Blog"
            }
          ) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
            "a",
            {
              href: "/mcp#faq",
              className: "text-muted-foreground hover:text-primary transition-smooth text-sm",
              onClick: () => trackCustomEvent("navigation_clicked", {
                button_text: "FAQ",
                button_location: "footer",
                link_type: "internal",
                section: "faq"
              }),
              children: "FAQ"
            }
          ) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "border-t border-dc-border mt-8 md:mt-12 pt-6 md:pt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4", children: [
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm", children: "© 2025 Desktop Commander." }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 text-sm text-muted-foreground", children: [
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "https://legal.desktopcommander.app",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "hover:text-primary transition-smooth",
            children: "Terms"
          }
        ),
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "https://legal.desktopcommander.app",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "hover:text-primary transition-smooth",
            children: "Privacy"
          }
        ),
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "#",
            onClick: (e) => {
              e.preventDefault();
              if (typeof window !== "undefined" && window.Cookiebot) {
                window.Cookiebot.renew();
              }
            },
            className: "hover:text-primary transition-smooth",
            children: "Cookie Settings"
          }
        )
      ] })
    ] })
  ] }) });
};

export { Button as B, Footer as F, Sheet as S, SheetTrigger as a, SheetContent as b, cn as c, trackBlogPostClick as d, trackDownloadRedirect as t, useAnalyticsAstro as u };
