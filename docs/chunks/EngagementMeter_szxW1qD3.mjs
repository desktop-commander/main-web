import { jsx, jsxs } from 'react/jsx-runtime';
import * as React from 'react';
import { createContext, useContext } from 'react';
import posthog from 'posthog-js';
import { cva } from 'class-variance-authority';
import { c as cn } from './Footer_CPzrBBdI.mjs';
import * as SeparatorPrimitive from '@radix-ui/react-separator';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';

const PostHogContext = createContext(posthog);
function PostHogProvider({ children }) {
  return /* @__PURE__ */ jsx(PostHogContext.Provider, { value: posthog, children });
}
const usePostHog = () => {
  return useContext(PostHogContext);
};

const TooltipProvider = TooltipPrimitive.Provider;
const Tooltip = TooltipPrimitive.Root;
const TooltipTrigger = TooltipPrimitive.Trigger;
const TooltipContent = React.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsx(
  TooltipPrimitive.Content,
  {
    ref,
    sideOffset,
    className: cn(
      "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    ),
    ...props
  }
));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function Badge({ className, variant, ...props }) {
  return /* @__PURE__ */ jsx("div", { className: cn(badgeVariants({ variant }), className), ...props });
}

const Separator = React.forwardRef(({ className, orientation = "horizontal", decorative = true, ...props }, ref) => /* @__PURE__ */ jsx(
  SeparatorPrimitive.Root,
  {
    ref,
    decorative,
    orientation,
    className: cn("shrink-0 bg-border", orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]", className),
    ...props
  }
));
Separator.displayName = SeparatorPrimitive.Root.displayName;

function getEngagementTier(count) {
  if (count >= 200) return { level: 5, label: "Hot" };
  if (count >= 100) return { level: 4, label: "Popular" };
  if (count >= 30) return { level: 3, label: "Growing" };
  if (count >= 10) return { level: 2, label: "Emerging" };
  return { level: 1, label: "New" };
}
const EngagementMeter = ({
  count,
  size = "md",
  showLabel = true,
  className
}) => {
  const tier = getEngagementTier(Math.max(0, count || 0));
  const barH = size === "sm" ? "h-1.5" : "h-2";
  const barW = size === "sm" ? "w-3.5" : "w-4";
  const gap = size === "sm" ? "gap-1" : "gap-1.5";
  const labelClass = size === "sm" ? "text-[10px]" : "text-xs";
  const content = /* @__PURE__ */ jsxs("div", { className: cn("flex items-center", className), "aria-label": `All-time engagement: ${tier.label}`, children: [
    /* @__PURE__ */ jsx("div", { className: cn("flex items-center", gap), children: Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ jsx(
      "span",
      {
        className: cn(
          "rounded-full transition-colors",
          barH,
          barW,
          i < tier.level ? "bg-primary" : "bg-muted"
        )
      },
      i
    )) }),
    showLabel && /* @__PURE__ */ jsx("span", { className: cn("ml-2 text-muted-foreground", labelClass), children: tier.label })
  ] });
  return /* @__PURE__ */ jsxs(Tooltip, { children: [
    /* @__PURE__ */ jsx(TooltipTrigger, { asChild: true, children: content }),
    /* @__PURE__ */ jsxs(TooltipContent, { children: [
      "All-time engagement: ",
      tier.label
    ] })
  ] });
};

export { Badge as B, EngagementMeter as E, PostHogProvider as P, Separator as S, TooltipProvider as T, Tooltip as a, TooltipTrigger as b, TooltipContent as c, usePostHog as u };
