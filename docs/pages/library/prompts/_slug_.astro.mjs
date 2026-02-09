import { c as createComponent, a as createAstro, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../../../chunks/astro/server_Dp1VJtNq.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../../../chunks/dc-logo_6kTUD2wC.mjs';
import { P as PostHogInit } from '../../../chunks/PostHogInit_DvwonWEB.mjs';
import { N as NavigationAstro } from '../../../chunks/NavigationAstro_DRR8vbzV.mjs';
import { B as Button, F as Footer } from '../../../chunks/Footer_CPzrBBdI.mjs';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { u as usePostHog, P as PostHogProvider, T as TooltipProvider, B as Badge, S as Separator, E as EngagementMeter, a as Tooltip, b as TooltipTrigger, c as TooltipContent } from '../../../chunks/EngagementMeter_szxW1qD3.mjs';
import { u as useToast, P as Popover, a as PopoverTrigger, b as PopoverContent, g as getLink, T as ToastAction, c as useCasesWithSlugs } from '../../../chunks/useCases_BVUrgz7S.mjs';
import { Zap, Check, Copy, Apple, Monitor, ChevronUp, ChevronDown, ArrowRight, Search, Activity, ArrowRightLeft, RefreshCw, Clock, TestTube, Database, Shield, Archive, FileText, Settings, BarChart3, Code, FolderOpen, FolderSearch, Sparkles, BadgeCheck, User, Info, Share2 } from 'lucide-react';
import { useState, useEffect } from 'react';
/* empty css                                        */
export { renderers } from '../../../renderers.mjs';

const setCookie = (name, value, days = 365) => {
  const expires = /* @__PURE__ */ new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1e3);
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
};
const getCookie = (name) => {
  const nameEQ = name + "=";
  const ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
};
const downloadUrls = {
  "macos-m": "https://github.com/desktop-commander/dc-app-client-releases/releases/latest/download/desktop-commander-mac-arm64.dmg",
  "macos-intel": "https://github.com/desktop-commander/dc-app-client-releases/releases/latest/download/desktop-commander-mac-x64.dmg",
  "windows": "https://github.com/desktop-commander/dc-app-client-releases-windows/releases/latest/download/desktop-commander-win-x64.msi"
};
function RunInDCButton({ promptTitle, prompt, onCopySuccess }) {
  const [hasInstalled, setHasInstalled] = useState(null);
  const [copied, setCopied] = useState(false);
  const [showDownloadSection, setShowDownloadSection] = useState(false);
  const [showOtherOptions, setShowOtherOptions] = useState(false);
  const posthog = usePostHog();
  useEffect(() => {
    const installed = getCookie("dc_installed");
    setHasInstalled(installed === "true");
  }, []);
  const handleRunClick = async () => {
    if (!hasInstalled) {
      setShowDownloadSection(true);
      posthog.capture("prompt_library_run_clicked_no_install", {
        prompt_title: promptTitle,
        action: "show_download_options"
      });
      return;
    }
    try {
      await navigator.clipboard.writeText(prompt);
      setCopied(true);
      posthog.capture("prompt_library_prompt_copied", {
        prompt_title: promptTitle,
        has_dc_installed: true,
        copy_method: "run_button"
      });
      onCopySuccess?.();
      setTimeout(() => setCopied(false), 3e3);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };
  const handleDownloadClick = (platform) => {
    posthog.capture("download_clicked", {
      platform,
      button_location: "prompt_detail_page",
      site_section: "prompt_library",
      prompt_title: promptTitle,
      page_path: window.location.pathname
    });
  };
  const handleAlreadyInstalled = async () => {
    setCookie("dc_installed", "true", 365);
    setHasInstalled(true);
    setShowDownloadSection(false);
    posthog.capture("prompt_library_marked_installed", {
      prompt_title: promptTitle
    });
    try {
      await navigator.clipboard.writeText(prompt);
      setCopied(true);
      onCopySuccess?.();
      setTimeout(() => setCopied(false), 3e3);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };
  const handleMCPClick = () => {
    posthog.capture("prompt_library_mcp_link_clicked", {
      prompt_title: promptTitle,
      source: "prompt_detail_page"
    });
  };
  return /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsx("div", { className: "bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 border border-primary/20 rounded-xl p-6", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row items-center justify-between gap-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsx("div", { className: "p-2 bg-primary/20 rounded-lg", children: /* @__PURE__ */ jsx(Zap, { className: "h-5 w-5 text-primary" }) }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "font-medium text-foreground", children: "Ready to run this prompt?" }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "Copy and paste into Desktop Commander" })
        ] })
      ] }),
      /* @__PURE__ */ jsx(
        Button,
        {
          size: "lg",
          onClick: handleRunClick,
          className: `min-w-[220px] transition-colors ${showDownloadSection ? "bg-muted hover:bg-muted/80 text-muted-foreground" : "dc-button-primary"}`,
          children: copied ? /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsx(Check, { className: "h-5 w-5 mr-2" }),
            "Copied! Paste in DC"
          ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsx(Copy, { className: "h-5 w-5 mr-2" }),
            "Run in Desktop Commander"
          ] })
        }
      )
    ] }) }),
    showDownloadSection && /* @__PURE__ */ jsxs("div", { className: "bg-dc-surface-elevated border border-border rounded-xl p-6 animate-in slide-in-from-top-2 duration-300", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-6", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold mb-2", children: "Get Desktop Commander to run this prompt" }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground max-w-lg mx-auto", children: "Desktop Commander gives AI direct access to your files and system, letting you automate tasks like this in seconds." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center gap-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap justify-center gap-3", children: [
          /* @__PURE__ */ jsx(
            Button,
            {
              size: "lg",
              className: "bg-primary hover:bg-primary/90 text-primary-foreground min-w-[270px] justify-center",
              asChild: true,
              children: /* @__PURE__ */ jsxs(
                "a",
                {
                  href: downloadUrls["macos-m"],
                  onClick: () => handleDownloadClick("macos-m"),
                  children: [
                    /* @__PURE__ */ jsx(Apple, { className: "w-5 h-5 mr-2" }),
                    "Download for Mac (Apple Silicon)"
                  ]
                }
              )
            }
          ),
          /* @__PURE__ */ jsx(
            Button,
            {
              size: "lg",
              className: "bg-primary hover:bg-primary/90 text-primary-foreground min-w-[270px] justify-center",
              asChild: true,
              children: /* @__PURE__ */ jsxs(
                "a",
                {
                  href: downloadUrls["windows"],
                  onClick: () => handleDownloadClick("windows"),
                  children: [
                    /* @__PURE__ */ jsx(Monitor, { className: "w-5 h-5 mr-2" }),
                    "Download for Windows"
                  ]
                }
              )
            }
          )
        ] }),
        /* @__PURE__ */ jsx(
          Button,
          {
            variant: "ghost",
            size: "sm",
            onClick: () => setShowOtherOptions(!showOtherOptions),
            className: "text-muted-foreground hover:text-foreground",
            children: showOtherOptions ? /* @__PURE__ */ jsxs(Fragment, { children: [
              /* @__PURE__ */ jsx(ChevronUp, { className: "h-4 w-4 mr-1" }),
              "Hide other options"
            ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
              /* @__PURE__ */ jsx(ChevronDown, { className: "h-4 w-4 mr-1" }),
              "Other options"
            ] })
          }
        ),
        showOtherOptions && /* @__PURE__ */ jsxs("div", { className: "w-full max-w-md animate-in slide-in-from-top-1 duration-200", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap justify-center items-center gap-x-4 gap-y-2 text-sm", children: [
            /* @__PURE__ */ jsxs(
              "a",
              {
                href: downloadUrls["macos-intel"],
                onClick: () => handleDownloadClick("macos-intel"),
                className: "text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1",
                children: [
                  /* @__PURE__ */ jsx(Apple, { className: "w-4 h-4" }),
                  "Mac (Intel)"
                ]
              }
            ),
            /* @__PURE__ */ jsx("span", { className: "text-muted-foreground/30", children: "|" }),
            /* @__PURE__ */ jsxs(
              "a",
              {
                href: "/mcp",
                onClick: handleMCPClick,
                className: "text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1",
                children: [
                  "MCP for AI clients",
                  /* @__PURE__ */ jsx(ArrowRight, { className: "w-3 h-3" })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsx("div", { className: "mt-4 pt-4 border-t border-border/30 text-center", children: /* @__PURE__ */ jsx(
            "button",
            {
              onClick: handleAlreadyInstalled,
              className: "text-xs text-muted-foreground hover:text-primary transition-colors",
              children: "I already have Desktop Commander installed →"
            }
          ) })
        ] })
      ] })
    ] })
  ] });
}

const iconMap = {
  FolderSearch,
  FolderOrganize: FolderOpen,
  Code,
  BarChart3,
  Settings,
  FileText,
  Archive,
  Shield,
  Database,
  TestTube,
  Clock,
  RefreshCw,
  ArrowRightLeft,
  Activity,
  Search
};
const isNewPrompt = (dateAdded) => {
  if (!dateAdded) return false;
  const addedDate = new Date(dateAdded);
  const today = /* @__PURE__ */ new Date();
  const diffTime = Math.abs(today.getTime() - addedDate.getTime());
  const diffDays = Math.ceil(diffTime / (1e3 * 60 * 60 * 24));
  return diffDays <= 14;
};
const getDefaultHowItWorks = (title) => [
  "Run this prompt in Desktop Commander",
  "AI analyzes your request and gathers context",
  "Executes the necessary actions on your system",
  "Shows you the results and any relevant output"
];
const getDefaultWhyDC = () => "Unlike regular AI chatbots, Desktop Commander can actually access your files and execute tasks on your computer — turning this prompt into real action in seconds.";
const PromptDetailPage = ({ useCase }) => {
  const [hasVoted, setHasVoted] = useState(false);
  const [showSessionTypeExplainer, setShowSessionTypeExplainer] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const [copiedPrompt, setCopiedPrompt] = useState(false);
  const { toast } = useToast();
  const [exactUses, setExactUses] = useState(0);
  const posthog = usePostHog();
  useEffect(() => {
    if (!useCase) return;
    const key = `useCase_uses_${useCase.id}`;
    const raw = localStorage.getItem(key);
    const value = raw ? Number(raw) : 0;
    setExactUses(Number.isFinite(value) ? value : 0);
    posthog.capture("prompt_page_viewed", {
      prompt_id: useCase.id,
      prompt_title: useCase.title,
      prompt_slug: useCase.slug,
      prompt_categories: useCase.categories,
      prompt_session_type: useCase.sessionType,
      source_page: "direct_url",
      url_type: "seo_friendly"
    });
  }, [useCase?.id, posthog]);
  const incrementUses = () => {
    if (!useCase) return;
    const key = `useCase_uses_${useCase.id}`;
    setExactUses((prev) => {
      const next = prev + 1;
      localStorage.setItem(key, String(next));
      return next;
    });
  };
  if (!useCase) return null;
  const IconComponent = iconMap[useCase.icon] || Code;
  const showNewBadge = isNewPrompt(useCase.dateAdded);
  const displayDescription = useCase.extendedDescription || useCase.description;
  const howItWorks = useCase.howItWorks || getDefaultHowItWorks(useCase.title);
  const whyDC = useCase.whyDC || getDefaultWhyDC();
  const handleClose = () => {
    window.location.href = getLink("/library/prompts");
  };
  const handleCopyPrompt = async () => {
    try {
      await navigator.clipboard.writeText(useCase.prompt);
      setCopiedPrompt(true);
      posthog.capture("prompt_library_prompt_copied", {
        prompt_id: useCase.id,
        prompt_title: useCase.title,
        copy_method: "copy_text_button"
      });
      setTimeout(() => setCopiedPrompt(false), 3e3);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };
  const handleCopySuccess = () => {
    incrementUses();
    toast({
      title: "Prompt copied!",
      description: "Now paste it in Desktop Commander to run."
    });
  };
  const getShareUrl = (shareSource = "share_button") => {
    const url = new URL(getLink(`/library/prompts/${useCase.slug}`), window.location.origin);
    url.searchParams.set("utm_source", "desktop_commander");
    url.searchParams.set("utm_medium", shareSource);
    url.searchParams.set("utm_campaign", "prompt_sharing");
    url.searchParams.set("utm_content", useCase.slug || "");
    url.searchParams.set("shared_at", Date.now().toString());
    return url.toString();
  };
  const handleShare = async () => {
    const isMobile = typeof navigator !== "undefined" && (/(Mobi|Android|iPhone|iPad|iPod)/i.test(navigator.userAgent) || typeof window !== "undefined" && window.matchMedia && window.matchMedia("(pointer: coarse)").matches);
    const shareSource = isMobile && navigator.share ? "native_share" : "clipboard_copy";
    const shareUrl = getShareUrl(shareSource);
    const title = `Prompt: ${useCase.title}`;
    posthog.capture("share_button_clicked", {
      prompt_id: useCase.id,
      prompt_title: useCase.title,
      share_method: shareSource,
      source_page: "prompt_detail_page"
    });
    try {
      if (isMobile && navigator.share) {
        await navigator.share({
          title,
          text: "Check out this Desktop Commander prompt",
          url: shareUrl
        });
        return;
      }
      await navigator.clipboard.writeText(shareUrl);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 1500);
      toast({
        title: "Link copied",
        description: "Share it with your team.",
        action: /* @__PURE__ */ jsx(ToastAction, { altText: "Open link", onClick: () => window.open(shareUrl, "_blank", "noopener,noreferrer"), children: "Open" })
      });
    } catch {
      toast({
        title: "Share failed",
        description: "Could not share or copy the link.",
        variant: "destructive"
      });
    }
  };
  return /* @__PURE__ */ jsx(PostHogProvider, { children: /* @__PURE__ */ jsx(TooltipProvider, { children: /* @__PURE__ */ jsx("div", { className: "min-h-screen bg-background mt-20", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 py-8 max-w-4xl", children: [
    /* @__PURE__ */ jsxs(
      Button,
      {
        variant: "ghost",
        onClick: handleClose,
        className: "mb-6 -ml-2 text-muted-foreground hover:text-foreground",
        children: [
          /* @__PURE__ */ jsx("svg", { className: "h-4 w-4 mr-2", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M15 19l-7-7 7-7" }) }),
          "Explore all prompts"
        ]
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4 mb-8", children: [
      /* @__PURE__ */ jsx("div", { className: "p-3 bg-dc-surface-elevated rounded-lg flex-shrink-0", children: /* @__PURE__ */ jsx(IconComponent, { className: "h-6 w-6 text-primary" }) }),
      /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0", children: [
        /* @__PURE__ */ jsxs("h1", { className: "text-2xl sm:text-3xl font-bold mb-3 break-words flex items-start gap-2", children: [
          useCase.title,
          showNewBadge && /* @__PURE__ */ jsxs(Badge, { variant: "outline", className: "text-xs bg-primary/10 text-primary border-primary/20 flex-shrink-0", children: [
            /* @__PURE__ */ jsx(Sparkles, { className: "h-3 w-3 mr-1" }),
            "New"
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 flex-wrap", children: [
          useCase.verified && /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1 text-xs rounded-full border border-primary/20 bg-primary/10 text-primary px-2.5 py-1", children: [
            /* @__PURE__ */ jsx(BadgeCheck, { className: "h-3.5 w-3.5" }),
            "Verified by DC team"
          ] }),
          /* @__PURE__ */ jsxs(
            Badge,
            {
              variant: "outline",
              className: "text-xs flex items-center gap-1",
              children: [
                /* @__PURE__ */ jsx(Zap, { className: "h-3 w-3" }),
                useCase.sessionType
              ]
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-1", children: useCase.categories.map((category, index) => /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "text-xs", children: category }, index)) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mb-10", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold mb-4", children: "What this prompt does" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-base leading-relaxed mb-6", children: displayDescription }),
      /* @__PURE__ */ jsxs("div", { className: "mb-6", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-sm font-medium text-foreground mb-3", children: "How it works" }),
        /* @__PURE__ */ jsx("ol", { className: "space-y-2 text-sm text-muted-foreground", children: howItWorks.map((step, index) => /* @__PURE__ */ jsxs("li", { className: "flex gap-3", children: [
          /* @__PURE__ */ jsxs("span", { className: "text-primary font-medium", children: [
            index + 1,
            "."
          ] }),
          /* @__PURE__ */ jsx("span", { children: step })
        ] }, index)) })
      ] }),
      /* @__PURE__ */ jsxs("p", { className: "text-sm text-muted-foreground border-l-2 border-primary/30 pl-4", children: [
        /* @__PURE__ */ jsx("span", { className: "text-foreground", children: "Why Desktop Commander?" }),
        " ",
        whyDC
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mb-10", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-sm font-medium text-muted-foreground mb-3", children: "Best for" }),
      /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: useCase.targetRoles.map((role) => /* @__PURE__ */ jsx(Badge, { variant: "secondary", className: "text-xs", children: role }, role)) })
    ] }),
    /* @__PURE__ */ jsx(Separator, { className: "my-10" }),
    /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-4", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold", children: "The Prompt" }),
        /* @__PURE__ */ jsx(
          Button,
          {
            variant: "ghost",
            size: "sm",
            onClick: handleCopyPrompt,
            className: "text-muted-foreground hover:text-foreground",
            children: copiedPrompt ? /* @__PURE__ */ jsxs(Fragment, { children: [
              /* @__PURE__ */ jsx(Check, { className: "h-4 w-4 mr-2" }),
              "Copied"
            ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
              /* @__PURE__ */ jsx(Copy, { className: "h-4 w-4 mr-2" }),
              "Copy text"
            ] })
          }
        )
      ] }),
      /* @__PURE__ */ jsx("div", { className: "p-5 bg-dc-surface-elevated rounded-lg border border-border max-h-96 overflow-y-auto", children: /* @__PURE__ */ jsx("pre", { className: "text-sm whitespace-pre-wrap font-mono text-foreground/90 leading-relaxed", children: useCase.prompt }) })
    ] }),
    /* @__PURE__ */ jsx(
      RunInDCButton,
      {
        promptTitle: useCase.title,
        prompt: useCase.prompt,
        onCopySuccess: handleCopySuccess
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mt-8 pt-6 border-t border-border/50", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsx(User, { className: "h-4 w-4" }),
          "Created by ",
          useCase.author
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ jsx(EngagementMeter, { count: useCase.votes + (hasVoted ? 1 : 0) }),
          /* @__PURE__ */ jsxs(Popover, { children: [
            /* @__PURE__ */ jsx(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ jsx(
              "button",
              {
                type: "button",
                "aria-label": `Exact uses: ${useCase.votes} (all-time)`,
                className: "inline-flex items-center justify-center text-muted-foreground hover:text-foreground",
                children: /* @__PURE__ */ jsx(Info, { className: "h-4 w-4" })
              }
            ) }),
            /* @__PURE__ */ jsxs(PopoverContent, { align: "end", side: "bottom", children: [
              "Exact uses: ",
              useCase.votes,
              " (all-time)"
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs(Tooltip, { children: [
        /* @__PURE__ */ jsx(TooltipTrigger, { asChild: true, children: /* @__PURE__ */ jsxs(
          Button,
          {
            variant: "ghost",
            size: "sm",
            onClick: handleShare,
            "aria-label": "Share this prompt",
            className: "flex items-center gap-2",
            children: [
              /* @__PURE__ */ jsx(Share2, { className: "h-4 w-4" }),
              /* @__PURE__ */ jsx("span", { children: copiedLink ? "Copied" : "Share" })
            ]
          }
        ) }),
        /* @__PURE__ */ jsx(TooltipContent, { children: "Copy link to share" })
      ] })
    ] })
  ] }) }) }) });
};

const $$Astro = createAstro();
async function getStaticPaths() {
  return useCasesWithSlugs.map((useCase) => ({
    params: { slug: useCase.slug },
    props: { useCase }
  }));
}
const $$slug = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  const { useCase } = Astro2.props;
  if (!useCase) {
    return Astro2.redirect("/library/prompts", 302);
  }
  useCase.id;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${useCase.title} - Desktop Commander`, "description": useCase.description }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "PostHogInit", PostHogInit, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/rk/DC/main-web/src/components/PostHogInit", "client:component-export": "default" })} ${maybeRenderHead()}<div class="min-h-screen bg-background"> ${renderComponent($$result2, "NavigationAstro", NavigationAstro, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/rk/DC/main-web/src/components/NavigationAstro", "client:component-export": "default" })} ${renderComponent($$result2, "PromptDetailPage", PromptDetailPage, { "client:load": true, "useCase": useCase, "client:component-hydration": "load", "client:component-path": "/Users/rk/DC/main-web/src/components/library/PromptDetailPage", "client:component-export": "default" })} ${renderComponent($$result2, "Footer", Footer, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/rk/DC/main-web/src/components/Footer", "client:component-export": "default" })} </div> ` })} `;
}, "/Users/rk/DC/main-web/astro-src/pages/library/prompts/[slug].astro", void 0);

const $$file = "/Users/rk/DC/main-web/astro-src/pages/library/prompts/[slug].astro";
const $$url = "/library/prompts/[slug]/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
