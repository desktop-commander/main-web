import { c as createComponent, a as createAstro, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_Dp1VJtNq.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../../chunks/dc-logo_6kTUD2wC.mjs';
import { P as PostHogInit } from '../../chunks/PostHogInit_DvwonWEB.mjs';
import { N as NavigationAstro } from '../../chunks/NavigationAstro_DRR8vbzV.mjs';
import { B as Button, F as Footer } from '../../chunks/Footer_CPzrBBdI.mjs';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { u as usePostHog, B as Badge, E as EngagementMeter, P as PostHogProvider, T as TooltipProvider, S as Separator } from '../../chunks/EngagementMeter_szxW1qD3.mjs';
import { useTheme } from 'next-themes';
import { Toaster as Toaster$1, toast } from 'sonner';
import { Zap, Check, Copy, Apple, ChevronUp, ChevronDown, Monitor, ArrowRight, Search, Activity, ArrowRightLeft, RefreshCw, Clock, TestTube, Database, Shield, Archive, FileText, Settings, BarChart3, Code, FolderOpen, FolderSearch, Sparkles, Timer, Users, ArrowLeft, BadgeCheck, User, Share2 } from 'lucide-react';
import { C as Card, a as CardHeader, b as CardTitle, c as CardContent, d as CardDescription } from '../../chunks/card_DlHuNq_0.mjs';
/* empty css                                       */
export { renderers } from '../../renderers.mjs';

const Toaster = ({ ...props }) => {
  const { theme = "system" } = useTheme();
  return /* @__PURE__ */ jsx(
    Toaster$1,
    {
      theme,
      className: "toaster group",
      toastOptions: {
        classNames: {
          toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
        }
      },
      ...props
    }
  );
};

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
const detectAppleSilicon = () => {
  if (typeof window === "undefined") return true;
  const ua = navigator.userAgent.toLowerCase();
  const platform = navigator.userAgentData?.platform?.toLowerCase() || navigator.platform?.toLowerCase() || "";
  const isMac = platform.includes("mac") || ua.includes("macintosh") || ua.includes("mac os");
  if (!isMac) return true;
  if (ua.includes("arm64") || ua.includes("aarch64")) return true;
  if (navigator.userAgentData?.architecture === "arm") return true;
  try {
    const canvas = document.createElement("canvas");
    const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
    if (gl) {
      const debugInfo = gl.getExtension("WEBGL_debug_renderer_info");
      if (debugInfo) {
        const renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
        if (renderer && renderer.toLowerCase().includes("apple")) return true;
      }
    }
  } catch (e) {
  }
  return true;
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
  const [isAppleSilicon, setIsAppleSilicon] = useState(true);
  const posthog = usePostHog();
  useEffect(() => {
    const installed = getCookie("dc_installed");
    setHasInstalled(installed === "true");
    setIsAppleSilicon(detectAppleSilicon());
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
      page_path: typeof window !== "undefined" ? window.location.pathname : ""
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
  const primaryDownload = isAppleSilicon ? { url: downloadUrls["macos-m"], label: "Download for Mac", platform: "macos-m" } : { url: downloadUrls["macos-intel"], label: "Download for Mac (Intel)", platform: "macos-intel" };
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
          className: "dc-button-primary min-w-[220px]",
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
        /* @__PURE__ */ jsx(
          Button,
          {
            size: "lg",
            className: "bg-primary hover:bg-primary/90 text-primary-foreground min-w-[240px]",
            asChild: true,
            children: /* @__PURE__ */ jsxs(
              "a",
              {
                href: primaryDownload.url,
                onClick: () => handleDownloadClick(primaryDownload.platform),
                children: [
                  /* @__PURE__ */ jsx(Apple, { className: "w-5 h-5 mr-2" }),
                  primaryDownload.label
                ]
              }
            )
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: handleAlreadyInstalled,
            className: "text-sm text-primary hover:text-primary/80 font-medium transition-colors",
            children: "I already have Desktop Commander installed →"
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "w-full max-w-sm pt-4 border-t border-border/30", children: [
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => setShowOtherOptions(!showOtherOptions),
              className: "w-full text-xs text-muted-foreground hover:text-foreground transition-colors flex items-center justify-center gap-1",
              children: showOtherOptions ? /* @__PURE__ */ jsxs(Fragment, { children: [
                /* @__PURE__ */ jsx(ChevronUp, { className: "h-3 w-3" }),
                "Hide other options"
              ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
                /* @__PURE__ */ jsx(ChevronDown, { className: "h-3 w-3" }),
                "Other download options"
              ] })
            }
          ),
          showOtherOptions && /* @__PURE__ */ jsxs("div", { className: "mt-3 space-y-2 text-center animate-in slide-in-from-top-1 duration-200", children: [
            /* @__PURE__ */ jsxs(
              "a",
              {
                href: isAppleSilicon ? downloadUrls["macos-intel"] : downloadUrls["macos-m"],
                onClick: () => handleDownloadClick(isAppleSilicon ? "macos-intel" : "macos-m"),
                className: "text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1",
                children: [
                  /* @__PURE__ */ jsx(Apple, { className: "w-3 h-3" }),
                  isAppleSilicon ? "Mac (Intel)" : "Mac (Apple Silicon)"
                ]
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "text-muted-foreground/50", children: "·" }),
            /* @__PURE__ */ jsxs(
              "a",
              {
                href: downloadUrls["windows"],
                onClick: () => handleDownloadClick("windows"),
                className: "text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1",
                children: [
                  /* @__PURE__ */ jsx(Monitor, { className: "w-3 h-3" }),
                  "Windows"
                ]
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "text-muted-foreground/50", children: "·" }),
            /* @__PURE__ */ jsxs(
              "a",
              {
                href: "/mcp",
                onClick: handleMCPClick,
                className: "text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1",
                children: [
                  "Using your own AI client? Get MCP",
                  /* @__PURE__ */ jsx(ArrowRight, { className: "w-3 h-3" })
                ]
              }
            )
          ] })
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
const getEstimatedTime = (sessionType) => {
  return sessionType === "Instant output" ? "< 1 min" : "2-5 min";
};
function PromptCardV2({ useCase, onVote: _onVote, onOpen }) {
  const IconComponent = iconMap[useCase.icon] || Code;
  const showNewBadge = isNewPrompt(useCase.dateAdded);
  const estimatedTime = getEstimatedTime(useCase.sessionType);
  const getSessionTypeDisplay = (sessionType) => {
    switch (sessionType) {
      case "Instant output":
        return { text: "Instant", icon: Zap, color: "text-green-500" };
      case "Step-by-step flow":
        return { text: "Guided", icon: null, color: "text-blue-500" };
      default:
        return { text: sessionType, icon: null, color: "text-muted-foreground" };
    }
  };
  const promptUrl = `/library/prompts/${useCase.slug}/`;
  const handleClick = (e) => {
    if (onOpen) {
      onOpen(useCase);
    }
  };
  const sessionDisplay = getSessionTypeDisplay(useCase.sessionType);
  return /* @__PURE__ */ jsx(
    "a",
    {
      href: promptUrl,
      className: "block h-full no-underline",
      onClick: handleClick,
      children: /* @__PURE__ */ jsxs(
        Card,
        {
          className: "dc-card h-full flex flex-col cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/50 relative group hover:border-primary/40 transition-all duration-200",
          role: "button",
          tabIndex: -1,
          children: [
            /* @__PURE__ */ jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ jsx("div", { className: "p-2 bg-dc-surface-elevated rounded-lg flex-shrink-0", children: /* @__PURE__ */ jsx(IconComponent, { className: "h-5 w-5 text-primary" }) }),
              /* @__PURE__ */ jsx("div", { className: "flex-1 min-w-0", children: /* @__PURE__ */ jsxs(CardTitle, { className: "text-lg leading-snug flex items-start gap-2", children: [
                /* @__PURE__ */ jsx("span", { className: "line-clamp-2", children: useCase.title }),
                showNewBadge && /* @__PURE__ */ jsxs(Badge, { variant: "outline", className: "text-xs bg-primary/10 text-primary border-primary/20 flex-shrink-0", children: [
                  /* @__PURE__ */ jsx(Sparkles, { className: "h-3 w-3 mr-1" }),
                  "New"
                ] })
              ] }) })
            ] }) }),
            /* @__PURE__ */ jsxs(CardContent, { className: "flex-1 flex flex-col pt-0", children: [
              /* @__PURE__ */ jsx(CardDescription, { className: "text-sm leading-relaxed mb-4 line-clamp-3", children: useCase.description }),
              /* @__PURE__ */ jsxs("div", { className: "mt-auto pt-3 border-t border-border/50", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between text-xs text-muted-foreground", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                    /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1", children: [
                      /* @__PURE__ */ jsx(Timer, { className: "h-3.5 w-3.5" }),
                      estimatedTime
                    ] }),
                    /* @__PURE__ */ jsxs("span", { className: `flex items-center gap-1 ${sessionDisplay.color}`, children: [
                      sessionDisplay.icon && /* @__PURE__ */ jsx(sessionDisplay.icon, { className: "h-3.5 w-3.5" }),
                      sessionDisplay.text
                    ] })
                  ] }),
                  /* @__PURE__ */ jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ jsx(EngagementMeter, { count: useCase.votes, size: "sm" }) })
                ] }),
                useCase.targetRoles.length > 0 && /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5 mt-2 flex-wrap", children: [
                  /* @__PURE__ */ jsx(Users, { className: "h-3 w-3 text-muted-foreground flex-shrink-0" }),
                  /* @__PURE__ */ jsxs("span", { className: "text-xs text-muted-foreground", children: [
                    useCase.targetRoles.slice(0, 2).join(", "),
                    useCase.targetRoles.length > 2 && ` +${useCase.targetRoles.length - 2}`
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "absolute bottom-3 right-3 text-xs text-muted-foreground/50 opacity-0 group-hover:opacity-100 transition-opacity", children: "View prompt →" })
            ] })
          ]
        }
      )
    }
  );
}

const samplePrompt = {
  id: "8",
  title: "Organise my Downloads folder",
  slug: "organise-my-downloads-folder",
  description: "Organise messy downloads folder into relevant subfolders.",
  prompt: "Analyze my Downloads folder and organize all files into subfolders by type (Documents, Images, Videos, Archives, etc.). Show me what you're doing and create a summary of what was organized. Open the new folder when you are done.",
  sessionType: "Instant output",
  targetRoles: ["Vibe Coders", "Content makers", "Data analysts", "Professionals", "Developers"],
  categories: ["Organize files"],
  votes: 66,
  gaClicks: 66,
  icon: "RefreshCw",
  author: "DC team",
  verified: true,
  dateAdded: "2024-12-01"
};
const samplePrompt2 = {
  id: "2",
  title: "Build A Feature from Scratch",
  slug: "build-a-feature-from-scratch",
  description: "Build a new feature for your app based on your existing codebase.",
  prompt: "# Feature Development Assistant...",
  sessionType: "Step-by-step flow",
  targetRoles: ["Developers", "Vibe Coders"],
  categories: ["Build features and products"],
  votes: 51,
  gaClicks: 51,
  icon: "Settings",
  author: "DC team",
  verified: true
};
const samplePrompt3 = {
  id: "3",
  title: "Analyze My Data File",
  slug: "analyze-my-data-file",
  description: "Make sense of a data file that you have.",
  prompt: "Look for the file called 'filename' in my [folder]. Analyze this file and tell me...",
  sessionType: "Instant output",
  targetRoles: ["Professionals", "Data analysts"],
  categories: ["Analyze data"],
  votes: 27,
  gaClicks: 27,
  icon: "TestTube",
  author: "DC team",
  verified: true,
  dateAdded: "2025-01-10"
};
function PromptDetailTestPage() {
  const [copied, setCopied] = useState(false);
  const useCase = samplePrompt;
  const handleCopyPrompt = async () => {
    try {
      await navigator.clipboard.writeText(useCase.prompt);
      setCopied(true);
      toast.success("Prompt copied to clipboard!");
      setTimeout(() => setCopied(false), 3e3);
    } catch (err) {
      toast.error("Failed to copy prompt");
    }
  };
  const handleCopySuccess = () => {
    toast.success("Prompt copied! Now paste it in Desktop Commander to run.");
  };
  return /* @__PURE__ */ jsx(PostHogProvider, { children: /* @__PURE__ */ jsxs(TooltipProvider, { children: [
    /* @__PURE__ */ jsx(Toaster, { position: "top-center" }),
    /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 py-8 max-w-6xl", children: [
      /* @__PURE__ */ jsxs("div", { className: "mb-8 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-lg font-bold text-yellow-600 mb-2", children: "🧪 CTA Test Page v2" }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "Updated layout: Expanded description → Prompt → Run CTA at the bottom" })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold mb-4", children: "Card Design (V2)" }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mb-6", children: "Cleaner cards with time estimate and target roles" }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: [
          /* @__PURE__ */ jsx(PromptCardV2, { useCase: samplePrompt }),
          /* @__PURE__ */ jsx(PromptCardV2, { useCase: samplePrompt2 }),
          /* @__PURE__ */ jsx(PromptCardV2, { useCase: samplePrompt3 })
        ] })
      ] }),
      /* @__PURE__ */ jsx(Separator, { className: "my-12" }),
      /* @__PURE__ */ jsxs("section", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold mb-4", children: "Prompt Detail Page Layout (V2)" }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mb-6", children: "Description → Prompt → CTA flow" }),
        /* @__PURE__ */ jsxs("div", { className: "border border-border rounded-xl p-6 sm:p-8 bg-dc-surface-elevated/30", children: [
          /* @__PURE__ */ jsxs(
            Button,
            {
              variant: "ghost",
              className: "mb-6 -ml-2 text-muted-foreground hover:text-foreground",
              children: [
                /* @__PURE__ */ jsx(ArrowLeft, { className: "h-4 w-4 mr-2" }),
                "Back to Library"
              ]
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4 mb-8", children: [
            /* @__PURE__ */ jsx("div", { className: "p-3 bg-dc-surface-elevated rounded-lg flex-shrink-0", children: /* @__PURE__ */ jsx(RefreshCw, { className: "h-6 w-6 text-primary" }) }),
            /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
              /* @__PURE__ */ jsx("h1", { className: "text-2xl sm:text-3xl font-bold mb-3", children: useCase.title }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 flex-wrap text-sm", children: [
                useCase.verified && /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1 text-xs rounded-full border border-primary/20 bg-primary/10 text-primary px-2.5 py-1", children: [
                  /* @__PURE__ */ jsx(BadgeCheck, { className: "h-3.5 w-3.5" }),
                  "Verified by DC team"
                ] }),
                /* @__PURE__ */ jsxs(Badge, { variant: "outline", className: "text-xs", children: [
                  /* @__PURE__ */ jsx(Zap, { className: "h-3 w-3 mr-1" }),
                  useCase.sessionType
                ] }),
                useCase.categories.map((cat, i) => /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "text-xs", children: cat }, i))
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mb-10", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold mb-4", children: "What this prompt does" }),
            /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-base leading-relaxed mb-6", children: "This prompt automatically organizes your messy Downloads folder into clean subfolders by file type — documents, images, videos, archives, and more. No manual sorting required." }),
            /* @__PURE__ */ jsxs("div", { className: "mb-6", children: [
              /* @__PURE__ */ jsx("h3", { className: "text-sm font-medium text-foreground mb-3", children: "How it works" }),
              /* @__PURE__ */ jsxs("ol", { className: "space-y-2 text-sm text-muted-foreground", children: [
                /* @__PURE__ */ jsxs("li", { className: "flex gap-3", children: [
                  /* @__PURE__ */ jsx("span", { className: "text-primary font-medium", children: "1." }),
                  /* @__PURE__ */ jsx("span", { children: "Run this prompt in Desktop Commander" })
                ] }),
                /* @__PURE__ */ jsxs("li", { className: "flex gap-3", children: [
                  /* @__PURE__ */ jsx("span", { className: "text-primary font-medium", children: "2." }),
                  /* @__PURE__ */ jsx("span", { children: "AI scans your Downloads folder and identifies all file types" })
                ] }),
                /* @__PURE__ */ jsxs("li", { className: "flex gap-3", children: [
                  /* @__PURE__ */ jsx("span", { className: "text-primary font-medium", children: "3." }),
                  /* @__PURE__ */ jsx("span", { children: "Creates organized subfolders and moves files automatically" })
                ] }),
                /* @__PURE__ */ jsxs("li", { className: "flex gap-3", children: [
                  /* @__PURE__ */ jsx("span", { className: "text-primary font-medium", children: "4." }),
                  /* @__PURE__ */ jsx("span", { children: "Opens the folder and shows you a summary of what was organized" })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("p", { className: "text-sm text-muted-foreground border-l-2 border-primary/30 pl-4", children: [
              /* @__PURE__ */ jsx("span", { className: "text-foreground", children: "Why Desktop Commander?" }),
              " Unlike regular AI chatbots, Desktop Commander can actually access your files and execute tasks on your computer — turning this prompt into real action in seconds."
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
                  children: copied ? /* @__PURE__ */ jsxs(Fragment, { children: [
                    /* @__PURE__ */ jsx(Check, { className: "h-4 w-4 mr-2" }),
                    "Copied"
                  ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
                    /* @__PURE__ */ jsx(Copy, { className: "h-4 w-4 mr-2" }),
                    "Copy text"
                  ] })
                }
              )
            ] }),
            /* @__PURE__ */ jsx("div", { className: "p-5 bg-background rounded-lg border border-border", children: /* @__PURE__ */ jsx("pre", { className: "text-sm whitespace-pre-wrap font-mono text-foreground/90 leading-relaxed", children: useCase.prompt }) })
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
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-sm text-muted-foreground", children: [
              /* @__PURE__ */ jsx(User, { className: "h-4 w-4" }),
              "Created by ",
              useCase.author
            ] }),
            /* @__PURE__ */ jsxs(Button, { variant: "ghost", size: "sm", children: [
              /* @__PURE__ */ jsx(Share2, { className: "h-4 w-4 mr-2" }),
              "Share"
            ] })
          ] })
        ] })
      ] })
    ] })
  ] }) });
}

const $$Astro = createAstro();
const $$CtaTest = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CtaTest;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "CTA Test - Desktop Commander", "description": "Testing new CTA flow for prompt library" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "PostHogInit", PostHogInit, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/rk/DC/main-web/src/components/PostHogInit", "client:component-export": "default" })} ${maybeRenderHead()}<div class="min-h-screen bg-background"> ${renderComponent($$result2, "NavigationAstro", NavigationAstro, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/rk/DC/main-web/src/components/NavigationAstro", "client:component-export": "default" })} <main class="pt-20"> ${renderComponent($$result2, "PromptDetailTestPage", PromptDetailTestPage, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/rk/DC/main-web/src/components/library/v2/PromptDetailTestPage", "client:component-export": "default" })} </main> ${renderComponent($$result2, "Footer", Footer, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/rk/DC/main-web/src/components/Footer", "client:component-export": "default" })} </div> ` })} `;
}, "/Users/rk/DC/main-web/astro-src/pages/library/cta-test.astro", void 0);

const $$file = "/Users/rk/DC/main-web/astro-src/pages/library/cta-test.astro";
const $$url = "/library/cta-test/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$CtaTest,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
