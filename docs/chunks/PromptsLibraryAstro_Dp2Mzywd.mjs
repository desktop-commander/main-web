import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import * as React from 'react';
import { useState, useRef, useEffect, useMemo } from 'react';
import { d as categories, r as roles, u as useToast, s as sessionTypeExplanations, P as Popover, a as PopoverTrigger, b as PopoverContent, T as ToastAction, g as getLink, c as useCasesWithSlugs } from './useCases_BVUrgz7S.mjs';
import { C as Card, a as CardHeader, b as CardTitle, c as CardContent, d as CardDescription } from './card_DlHuNq_0.mjs';
import { u as usePostHog, B as Badge, E as EngagementMeter, T as TooltipProvider, S as Separator, a as Tooltip, b as TooltipTrigger, c as TooltipContent } from './EngagementMeter_szxW1qD3.mjs';
import { Search, Activity, ArrowRightLeft, RefreshCw, Clock, TestTube, Database, Shield, Archive, FileText, Settings, BarChart3, Code, FolderOpen, FolderSearch, Zap, ChevronDown, ChevronUp, Check, X, Plus, ExternalLink, Circle, MessageSquare, Terminal, Copy, Sparkles, BadgeCheck, Info, User, Share2, Rocket } from 'lucide-react';
import * as SelectPrimitive from '@radix-ui/react-select';
import { c as cn, B as Button } from './Footer_CPzrBBdI.mjs';
import { D as Dialog, a as DialogContent, b as DialogHeader, c as DialogTitle, d as DialogDescription } from './dialog_DpqKOEJ7.mjs';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import * as LabelPrimitive from '@radix-ui/react-label';
import { cva } from 'class-variance-authority';
import * as ProgressPrimitive from '@radix-ui/react-progress';
import { toast } from 'sonner';

const iconMap$1 = {
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
const isNewPrompt$1 = (dateAdded) => {
  if (!dateAdded) return false;
  const addedDate = new Date(dateAdded);
  const today = /* @__PURE__ */ new Date();
  const diffTime = Math.abs(today.getTime() - addedDate.getTime());
  const diffDays = Math.ceil(diffTime / (1e3 * 60 * 60 * 24));
  return diffDays <= 14;
};
function PromptCard({ useCase, onVote: _onVote, onOpen }) {
  const IconComponent = iconMap$1[useCase.icon] || Code;
  const showNewBadge = isNewPrompt$1(useCase.dateAdded);
  const posthog = usePostHog();
  const getSessionTypeDisplay = (sessionType) => {
    switch (sessionType) {
      case "Instant output":
        return { text: "Instant", icon: Zap };
      case "Step-by-step flow":
        return { text: "Step-by-Step", icon: null };
      default:
        return { text: sessionType, icon: null };
    }
  };
  const promptUrl = `/library/prompts/${useCase.slug}/`;
  const handleClick = (e) => {
    posthog.capture("prompt_clicked", {
      prompt_id: useCase.id,
      prompt_title: useCase.title,
      prompt_slug: useCase.slug,
      prompt_categories: useCase.categories,
      prompt_session_type: useCase.sessionType,
      source: "library_grid",
      source_page: "prompts_library"
    });
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
          className: "h-full flex flex-col cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/50 relative group bg-card/50 border-border/40 hover:border-primary/30 hover:bg-card/80 transition-all duration-200",
          role: "button",
          tabIndex: -1,
          children: [
            /* @__PURE__ */ jsx(CardHeader, { className: "pb-2 pt-4 px-4", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ jsx("div", { className: "p-1.5 bg-primary/10 rounded-md shrink-0", children: /* @__PURE__ */ jsx(IconComponent, { className: "h-4 w-4 text-primary" }) }),
              /* @__PURE__ */ jsx("div", { className: "flex-1 min-w-0", children: /* @__PURE__ */ jsx(CardTitle, { className: "text-base leading-snug line-clamp-2", children: useCase.title }) }),
              showNewBadge && /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "text-[10px] px-1.5 py-0 bg-primary/10 text-primary border-primary/20 shrink-0", children: "New" })
            ] }) }),
            /* @__PURE__ */ jsxs(CardContent, { className: "flex-1 flex flex-col pt-0 px-4 pb-4", children: [
              /* @__PURE__ */ jsx(CardDescription, { className: "text-sm leading-relaxed line-clamp-1 text-muted-foreground/80", children: useCase.description }),
              /* @__PURE__ */ jsxs("div", { className: "mt-auto pt-3 flex items-center justify-between", children: [
                /* @__PURE__ */ jsxs(Badge, { variant: "outline", className: "text-[10px] px-1.5 py-0 font-normal border-border/30 bg-transparent text-muted-foreground/70", children: [
                  sessionDisplay.icon && /* @__PURE__ */ jsx(sessionDisplay.icon, { className: "h-3 w-3 mr-1" }),
                  sessionDisplay.text
                ] }),
                /* @__PURE__ */ jsx(EngagementMeter, { count: useCase.gaClicks || 0, size: "sm", showLabel: false })
              ] })
            ] })
          ]
        }
      )
    }
  );
}

const Select = SelectPrimitive.Root;
const SelectValue = SelectPrimitive.Value;
const SelectTrigger = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(
  SelectPrimitive.Trigger,
  {
    ref,
    className: cn(
      "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsx(SelectPrimitive.Icon, { asChild: true, children: /* @__PURE__ */ jsx(ChevronDown, { className: "h-4 w-4 opacity-50" }) })
    ]
  }
));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;
const SelectScrollUpButton = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SelectPrimitive.ScrollUpButton,
  {
    ref,
    className: cn("flex cursor-default items-center justify-center py-1", className),
    ...props,
    children: /* @__PURE__ */ jsx(ChevronUp, { className: "h-4 w-4" })
  }
));
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;
const SelectScrollDownButton = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SelectPrimitive.ScrollDownButton,
  {
    ref,
    className: cn("flex cursor-default items-center justify-center py-1", className),
    ...props,
    children: /* @__PURE__ */ jsx(ChevronDown, { className: "h-4 w-4" })
  }
));
SelectScrollDownButton.displayName = SelectPrimitive.ScrollDownButton.displayName;
const SelectContent = React.forwardRef(({ className, children, position = "popper", ...props }, ref) => /* @__PURE__ */ jsx(SelectPrimitive.Portal, { children: /* @__PURE__ */ jsxs(
  SelectPrimitive.Content,
  {
    ref,
    className: cn(
      "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
      className
    ),
    position,
    ...props,
    children: [
      /* @__PURE__ */ jsx(SelectScrollUpButton, {}),
      /* @__PURE__ */ jsx(
        SelectPrimitive.Viewport,
        {
          className: cn(
            "p-1",
            position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
          ),
          children
        }
      ),
      /* @__PURE__ */ jsx(SelectScrollDownButton, {})
    ]
  }
) }));
SelectContent.displayName = SelectPrimitive.Content.displayName;
const SelectLabel = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(SelectPrimitive.Label, { ref, className: cn("py-1.5 pl-8 pr-2 text-sm font-semibold", className), ...props }));
SelectLabel.displayName = SelectPrimitive.Label.displayName;
const SelectItem = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(
  SelectPrimitive.Item,
  {
    ref,
    className: cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsx(SelectPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx(Check, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ jsx(SelectPrimitive.ItemText, { children })
    ]
  }
));
SelectItem.displayName = SelectPrimitive.Item.displayName;
const SelectSeparator = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(SelectPrimitive.Separator, { ref, className: cn("-mx-1 my-1 h-px bg-muted", className), ...props }));
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;

const Input = React.forwardRef(
  ({ className, type, ...props }, ref) => {
    return /* @__PURE__ */ jsx(
      "input",
      {
        type,
        className: cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Input.displayName = "Input";

function MultiSelect({
  options,
  selected,
  onChange,
  placeholder = "Select options...",
  className
}) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  const toggleOption = (value) => {
    if (selected.includes(value)) {
      onChange(selected.filter((item) => item !== value));
    } else {
      onChange([...selected, value]);
    }
  };
  const removeOption = (value, e) => {
    e.stopPropagation();
    onChange(selected.filter((item) => item !== value));
  };
  const displayValue = selected.length === 0 ? placeholder : selected.length === 1 ? selected[0] : `${selected.length} selected`;
  const handleKeyDown = (e) => {
    if (e.key === "Escape" && selected.length > 0) {
      e.preventDefault();
      onChange([]);
      setIsOpen(false);
    }
  };
  return /* @__PURE__ */ jsxs("div", { ref: containerRef, className: cn("relative", className), children: [
    /* @__PURE__ */ jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsxs(
        Button,
        {
          variant: "outline",
          onClick: () => setIsOpen(!isOpen),
          onKeyDown: handleKeyDown,
          className: "w-full justify-between h-9 font-normal",
          children: [
            /* @__PURE__ */ jsx("span", { className: "truncate", children: displayValue }),
            /* @__PURE__ */ jsx(ChevronDown, { className: cn(
              "ml-2 h-4 w-4 shrink-0 transition-transform",
              isOpen && "rotate-180"
            ) })
          ]
        }
      ),
      selected.includes("DevOps") && /* @__PURE__ */ jsx(Badge, { className: "absolute -top-2 -right-2 bg-primary hover:bg-primary text-primary-foreground text-xs px-1.5 py-0.5 h-5 min-w-[2rem] rounded-full border-2 border-background pointer-events-none", children: "New" })
    ] }),
    isOpen && /* @__PURE__ */ jsx("div", { className: "absolute z-50 mt-1 w-full min-w-[200px] rounded-md border bg-popover text-popover-foreground shadow-md outline-none", children: /* @__PURE__ */ jsxs("div", { className: "py-1", children: [
      /* @__PURE__ */ jsxs(
        "button",
        {
          onClick: () => onChange([]),
          className: cn(
            "flex w-full items-center rounded-sm px-2 py-1.5 text-sm hover:bg-accent hover:text-accent-foreground mx-1 w-[calc(100%-8px)]",
            selected.length === 0 && "bg-accent/50"
          ),
          children: [
            /* @__PURE__ */ jsx("span", { className: "flex-1 text-left", children: placeholder }),
            selected.length === 0 && /* @__PURE__ */ jsx("span", { className: "ml-2 text-xs", children: "✓" })
          ]
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "my-1 h-px bg-border mx-2" }),
      /* @__PURE__ */ jsx("div", { className: "max-h-[300px] overflow-y-auto overflow-x-hidden custom-scrollbar", children: options.map((option) => {
        const optionObj = typeof option === "string" ? { value: option } : option;
        const isSelected = selected.includes(optionObj.value);
        return /* @__PURE__ */ jsxs("div", { className: "relative mx-1 w-[calc(100%-8px)]", children: [
          /* @__PURE__ */ jsxs(
            "button",
            {
              onClick: () => toggleOption(optionObj.value),
              className: cn(
                "flex w-full items-center rounded-sm px-2 py-1.5 text-sm hover:bg-accent hover:text-accent-foreground",
                isSelected && "bg-accent/50"
              ),
              children: [
                /* @__PURE__ */ jsx("span", { className: "flex-1 text-left truncate", children: optionObj.label || optionObj.value }),
                isSelected && /* @__PURE__ */ jsx("span", { className: "ml-2 text-xs shrink-0", children: "✓" })
              ]
            }
          ),
          optionObj.tag && optionObj.tagColor === "new" && /* @__PURE__ */ jsx(
            Badge,
            {
              className: "absolute -top-2 -right-2 bg-primary hover:bg-primary text-primary-foreground text-xs px-1.5 py-0.5 h-5 min-w-[2rem] rounded-full border-2 border-background pointer-events-none",
              children: optionObj.tag
            }
          )
        ] }, optionObj.value);
      }) })
    ] }) }),
    selected.length > 0 && /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-1 mt-2", children: selected.map((value) => {
      const optionObj = options.find(
        (opt) => typeof opt === "string" ? opt === value : opt.value === value
      );
      const displayName = typeof optionObj === "string" ? optionObj : optionObj?.label || optionObj?.value || value;
      return /* @__PURE__ */ jsxs(
        Badge,
        {
          variant: "secondary",
          className: "text-xs",
          children: [
            displayName,
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: (e) => removeOption(value, e),
                className: "ml-1 hover:text-destructive",
                children: /* @__PURE__ */ jsx(X, { className: "h-3 w-3" })
              }
            )
          ]
        },
        value
      );
    }) })
  ] });
}

const quickFilterCategories = [
  "Organize files",
  "Write documentation",
  "Explore codebase",
  "Build features and products"
];
function FilterControls({
  searchTerm,
  selectedCategories,
  selectedRoles,
  sortBy,
  onSearchChange,
  onCategoriesChange,
  onRolesChange,
  onSortChange,
  onClearFilters,
  totalResults
}) {
  const hasActiveFilters = selectedCategories.length > 0 || selectedRoles.length > 0 || searchTerm.length > 0;
  selectedCategories.length + selectedRoles.length + (searchTerm.length > 0 ? 1 : 0);
  const handleQuickFilterClick = (category) => {
    if (selectedCategories.includes(category)) {
      onCategoriesChange(selectedCategories.filter((c) => c !== category));
    } else {
      onCategoriesChange([...selectedCategories, category]);
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
      /* @__PURE__ */ jsx("span", { className: "text-sm text-muted-foreground mr-1", children: "Quick filters:" }),
      quickFilterCategories.map((category) => {
        const isActive = selectedCategories.includes(category);
        return /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => handleQuickFilterClick(category),
            className: `
                px-3 py-1.5 text-sm rounded-full border transition-all duration-200
                ${isActive ? "bg-primary text-primary-foreground border-primary" : "bg-background hover:bg-accent hover:border-accent-foreground/20 border-border text-foreground"}
              `,
            children: category
          },
          category
        );
      })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "p-3 bg-card rounded-md border space-y-3", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex gap-3", children: [
        /* @__PURE__ */ jsxs("div", { className: "relative flex-1", children: [
          /* @__PURE__ */ jsx(Search, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" }),
          /* @__PURE__ */ jsx(
            Input,
            {
              placeholder: "Search prompts...",
              value: searchTerm,
              onChange: (e) => onSearchChange(e.target.value),
              className: "pl-10 h-9"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs(Select, { value: sortBy, onValueChange: onSortChange, children: [
          /* @__PURE__ */ jsx(SelectTrigger, { className: "h-9 w-[160px]", children: /* @__PURE__ */ jsx(SelectValue, {}) }),
          /* @__PURE__ */ jsxs(SelectContent, { children: [
            /* @__PURE__ */ jsx(SelectItem, { value: "popularity", children: "Most Popular" }),
            /* @__PURE__ */ jsx(SelectItem, { value: "alphabetical", children: "Alphabetical" }),
            /* @__PURE__ */ jsx(SelectItem, { value: "recent", children: "Recently Added" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsx(
          MultiSelect,
          {
            options: categories,
            selected: selectedCategories,
            onChange: onCategoriesChange,
            placeholder: "All Categories"
          }
        ),
        /* @__PURE__ */ jsx(
          MultiSelect,
          {
            options: roles,
            selected: selectedRoles,
            onChange: onRolesChange,
            placeholder: "All Roles"
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 ml-auto", children: [
          hasActiveFilters && onClearFilters && /* @__PURE__ */ jsxs(
            Button,
            {
              variant: "ghost",
              size: "sm",
              onClick: onClearFilters,
              className: "h-8 px-2 text-muted-foreground hover:text-foreground",
              children: [
                /* @__PURE__ */ jsx(X, { className: "h-4 w-4 mr-1" }),
                "Clear"
              ]
            }
          ),
          totalResults !== void 0 && /* @__PURE__ */ jsxs("span", { className: "text-sm text-muted-foreground whitespace-nowrap", children: [
            totalResults,
            " prompt",
            totalResults !== 1 ? "s" : ""
          ] })
        ] })
      ] })
    ] })
  ] });
}

function SubmitPromptButton({
  variant = "default",
  size = "default",
  className = "",
  showIcon = true,
  text = "Submit Your Prompt"
}) {
  const posthog = usePostHog();
  const handleClick = () => {
    posthog.capture("submit_prompt_clicked", {
      button_variant: variant,
      button_size: size,
      button_text: text,
      source_page: window.location.pathname
    });
    window.open("https://tally.so/r/m6BbEN", "_blank", "noopener,noreferrer");
  };
  return /* @__PURE__ */ jsxs(
    Button,
    {
      onClick: handleClick,
      variant,
      size,
      className: `${variant === "default" ? "dc-button-primary" : ""} ${className}`,
      title: "Submit your prompt via our form",
      children: [
        showIcon && /* @__PURE__ */ jsx(Plus, { className: "h-4 w-4 mr-2" }),
        text,
        /* @__PURE__ */ jsx(ExternalLink, { className: "h-3 w-3 ml-1.5 opacity-70" })
      ]
    }
  );
}

const RadioGroup = React.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ jsx(RadioGroupPrimitive.Root, { className: cn("grid gap-2", className), ...props, ref });
});
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;
const RadioGroupItem = React.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ jsx(
    RadioGroupPrimitive.Item,
    {
      ref,
      className: cn(
        "aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsx(RadioGroupPrimitive.Indicator, { className: "flex items-center justify-center", children: /* @__PURE__ */ jsx(Circle, { className: "h-2.5 w-2.5 fill-current text-current" }) })
    }
  );
});
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

const labelVariants = cva("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70");
const Label = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(LabelPrimitive.Root, { ref, className: cn(labelVariants(), className), ...props }));
Label.displayName = LabelPrimitive.Root.displayName;

const Progress = React.forwardRef(({ className, value, ...props }, ref) => /* @__PURE__ */ jsx(
  ProgressPrimitive.Root,
  {
    ref,
    className: cn("relative h-4 w-full overflow-hidden rounded-full bg-secondary", className),
    ...props,
    children: /* @__PURE__ */ jsx(
      ProgressPrimitive.Indicator,
      {
        className: "h-full w-full flex-1 bg-primary transition-all",
        style: { transform: `translateX(-${100 - (value || 0)}%)` }
      }
    )
  }
));
Progress.displayName = ProgressPrimitive.Root.displayName;

const CLIENT_OPTIONS = [
  { value: "claude-desktop", label: "Claude Desktop", icon: MessageSquare },
  { value: "cursor", label: "Cursor", icon: Terminal },
  { value: "vscode", label: "VS Code", icon: Terminal },
  { value: "claude-code", label: "Claude Code", icon: Terminal },
  { value: "other", label: "Other", icon: Terminal }
];
const getClientInstructions = (client) => {
  switch (client) {
    case "claude-desktop":
      return "Paste this prompt in Claude Desktop's chat window where Desktop Commander is installed.";
    case "cursor":
      return "Open Cursor's composer (Cmd+K) and paste this prompt where Desktop Commander is configured.";
    case "vscode":
      return "Open VS Code's integrated terminal and paste this prompt with Desktop Commander active.";
    case "claude-code":
      return "Run this prompt in Claude Code where Desktop Commander is set up.";
    default:
      return "Paste this prompt in your LLM interface where Desktop Commander is installed.";
  }
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
function UsePromptWizard({ isOpen, onClose, prompt, promptTitle }) {
  const [step, setStep] = useState(1);
  const [hasInstalled, setHasInstalled] = useState(null);
  const [selectedClient, setSelectedClient] = useState(null);
  const [copied, setCopied] = useState(false);
  const posthog = usePostHog();
  const handleWizardClose = () => {
    if (window.wizardOpenTime) {
      const timeInWizard = Math.round(((/* @__PURE__ */ new Date()).getTime() - window.wizardOpenTime) / 1e3);
      const visitCount = parseInt(localStorage.getItem("style_scout_visit_count") || "0");
      const viralSession = localStorage.getItem("style_scout_viral_session");
      const viralInfo = viralSession ? JSON.parse(viralSession) : null;
      if (!copied) {
        posthog.capture("use_prompt_wizard_abandoned", {
          prompt_title: promptTitle,
          abandoned_at_step: step,
          time_before_abandon_seconds: timeInWizard,
          has_dc_installed: hasInstalled,
          selected_client: selectedClient,
          abandon_reason: step === 1 ? "before_installation_check" : step === 2 ? "before_client_selection" : step === 3 ? "before_copy" : "unknown",
          // Phase 3: Enhanced context
          visit_count: visitCount,
          is_returning_user: visitCount > 1,
          is_viral_session: !!viralInfo,
          conversion_funnel_step: "wizard_abandoned"
        });
      }
    }
    onClose();
  };
  useEffect(() => {
    if (isOpen) {
      window.wizardOpenTime = (/* @__PURE__ */ new Date()).getTime();
      const installed = getCookie("dc_installed");
      const client = getCookie("dc_client");
      const visitCount = parseInt(localStorage.getItem("style_scout_visit_count") || "0");
      const viralSession = localStorage.getItem("style_scout_viral_session");
      const viralInfo = viralSession ? JSON.parse(viralSession) : null;
      let initialStep = 1;
      if (installed === "true") {
        setHasInstalled(true);
        if (client) {
          setSelectedClient(client);
          setStep(3);
          initialStep = 3;
        } else {
          setStep(2);
          initialStep = 2;
        }
      } else {
        setStep(1);
        initialStep = 1;
      }
      posthog.capture("use_prompt_wizard_opened", {
        prompt_title: promptTitle,
        initial_step: initialStep,
        has_dc_installed: installed === "true",
        known_client: client,
        user_type: installed === "true" ? "returning_dc_user" : "new_dc_user",
        // Phase 3: Enhanced context
        visit_count: visitCount,
        is_returning_user: visitCount > 1,
        is_viral_session: !!viralInfo,
        viral_entry_prompt: viralInfo?.prompt_id,
        wizard_entry_source: "prompt_modal"
      });
    }
  }, [isOpen, promptTitle, posthog]);
  const handleInstallationResponse = (installed) => {
    setHasInstalled(installed);
    const visitCount = parseInt(localStorage.getItem("style_scout_visit_count") || "0");
    const viralSession = localStorage.getItem("style_scout_viral_session");
    const viralInfo = viralSession ? JSON.parse(viralSession) : null;
    const timeInWizard = window.wizardOpenTime ? Math.round(((/* @__PURE__ */ new Date()).getTime() - window.wizardOpenTime) / 1e3) : 0;
    if (installed) {
      setCookie("dc_installed", "true", 365);
      setStep(2);
      posthog.capture("dc_installation_confirmed", {
        prompt_title: promptTitle,
        wizard_step: 1,
        time_to_confirm_seconds: timeInWizard,
        user_action: "has_dc_installed",
        // Phase 3: Enhanced context
        visit_count: visitCount,
        is_returning_user: visitCount > 1,
        is_viral_session: !!viralInfo,
        conversion_funnel_step: "installation_confirmed"
      });
    } else {
      posthog.capture("dc_installation_needed", {
        prompt_title: promptTitle,
        wizard_step: 1,
        time_to_redirect_seconds: timeInWizard,
        user_action: "needs_dc_install",
        redirect_url: "https://desktopcommander.app/#installation",
        // Phase 3: Enhanced context
        visit_count: visitCount,
        is_returning_user: visitCount > 1,
        is_viral_session: !!viralInfo,
        conversion_funnel_step: "installation_redirect"
      });
      window.open("https://desktopcommander.app/#installation", "_blank");
      onClose();
    }
  };
  const handleClientSelection = () => {
    if (selectedClient) {
      setCookie("dc_client", selectedClient, 365);
      setStep(3);
      const visitCount = parseInt(localStorage.getItem("style_scout_visit_count") || "0");
      const viralSession = localStorage.getItem("style_scout_viral_session");
      const viralInfo = viralSession ? JSON.parse(viralSession) : null;
      const timeInWizard = window.wizardOpenTime ? Math.round(((/* @__PURE__ */ new Date()).getTime() - window.wizardOpenTime) / 1e3) : 0;
      posthog.capture("dc_platform_selected", {
        prompt_title: promptTitle,
        wizard_step: 2,
        selected_client: selectedClient,
        time_to_select_seconds: timeInWizard,
        platform_category: selectedClient === "claude-desktop" ? "claude" : selectedClient === "other" ? "other" : "ide",
        // Phase 3: Enhanced context
        visit_count: visitCount,
        is_returning_user: visitCount > 1,
        is_viral_session: !!viralInfo,
        conversion_funnel_step: "platform_selected"
      });
    }
  };
  const handleCopyPrompt = async () => {
    try {
      await navigator.clipboard.writeText(prompt);
      setCopied(true);
      const visitCount = parseInt(localStorage.getItem("style_scout_visit_count") || "0");
      const viralSession = localStorage.getItem("style_scout_viral_session");
      const viralInfo = viralSession ? JSON.parse(viralSession) : null;
      const timeInWizard = window.wizardOpenTime ? Math.round(((/* @__PURE__ */ new Date()).getTime() - window.wizardOpenTime) / 1e3) : 0;
      posthog.capture("prompt_copied_to_clipboard", {
        prompt_title: promptTitle,
        wizard_step: 3,
        selected_client: selectedClient || "unknown",
        time_to_copy_seconds: timeInWizard,
        prompt_length_chars: prompt.length,
        platform_category: selectedClient === "claude-desktop" ? "claude" : selectedClient === "other" ? "other" : "ide",
        // Phase 3: Enhanced context
        visit_count: visitCount,
        is_returning_user: visitCount > 1,
        is_viral_session: !!viralInfo,
        conversion_funnel_step: "prompt_copied"
      });
      posthog.capture("use_prompt_wizard_completed", {
        prompt_title: promptTitle,
        completion_type: "copy_to_clipboard",
        total_time_seconds: timeInWizard,
        final_client: selectedClient || "unknown",
        steps_completed: 3,
        // Phase 3: Enhanced context
        visit_count: visitCount,
        is_returning_user: visitCount > 1,
        is_viral_session: !!viralInfo,
        conversion_funnel_step: "wizard_completed"
      });
      toast.success("Prompt copied to clipboard!");
      setTimeout(() => {
        onClose();
        setCopied(false);
        setStep(1);
      }, 1500);
    } catch (err) {
      toast.error("Failed to copy prompt");
      console.error("Failed to copy:", err);
    }
  };
  const getProgressValue = () => {
    return step / 3 * 100;
  };
  return /* @__PURE__ */ jsx(Dialog, { open: isOpen, onOpenChange: handleWizardClose, children: /* @__PURE__ */ jsxs(DialogContent, { className: "w-[95vw] max-w-md mx-auto max-h-[85vh] flex flex-col", children: [
    /* @__PURE__ */ jsxs("div", { className: "space-y-1 pr-10 sm:pr-8 flex-shrink-0 min-w-0", children: [
      /* @__PURE__ */ jsx(Progress, { value: getProgressValue(), className: "h-1 w-full" }),
      /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-[9px] sm:text-xs text-muted-foreground/60 min-w-0", children: [
        /* @__PURE__ */ jsx("span", { className: `truncate ${step >= 1 ? "text-muted-foreground" : ""}`, children: "1. Install" }),
        /* @__PURE__ */ jsx("span", { className: `truncate ${step >= 2 ? "text-muted-foreground" : ""}`, children: "2. Client" }),
        /* @__PURE__ */ jsx("span", { className: `truncate ${step >= 3 ? "text-muted-foreground" : ""}`, children: "3. Copy" })
      ] })
    ] }),
    step === 1 && /* @__PURE__ */ jsxs("div", { className: "space-y-3 mt-3 sm:mt-4 flex-1 min-h-0 min-w-0", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center space-y-1.5", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-base sm:text-lg font-semibold leading-tight", children: "Have you installed Desktop Commander?" }),
        /* @__PURE__ */ jsx("p", { className: "text-xs sm:text-sm text-muted-foreground px-1 break-words", children: "To use this prompt, you'll need Desktop Commander installed." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2.5 mt-4 min-w-0", children: [
        /* @__PURE__ */ jsx(
          Button,
          {
            onClick: () => handleInstallationResponse(true),
            className: "w-full h-11 min-w-0",
            size: "lg",
            children: /* @__PURE__ */ jsx("span", { className: "truncate", children: "Yes, I have it" })
          }
        ),
        /* @__PURE__ */ jsxs(
          Button,
          {
            onClick: () => handleInstallationResponse(false),
            variant: "outline",
            className: "w-full h-11 min-w-0",
            size: "lg",
            children: [
              /* @__PURE__ */ jsx("span", { className: "truncate", children: "No, take me to installation" }),
              /* @__PURE__ */ jsx(ExternalLink, { className: "ml-2 h-4 w-4 flex-shrink-0" })
            ]
          }
        )
      ] })
    ] }),
    step === 2 && /* @__PURE__ */ jsxs("div", { className: "space-y-3 mt-3 sm:mt-4 flex-1 min-h-0 min-w-0 overflow-y-auto", children: [
      /* @__PURE__ */ jsx("div", { className: "text-center space-y-1.5", children: /* @__PURE__ */ jsx("h3", { className: "text-base sm:text-lg font-semibold leading-tight", children: "Which client are you using?" }) }),
      /* @__PURE__ */ jsx(RadioGroup, { value: selectedClient || "", onValueChange: (value) => setSelectedClient(value), className: "mt-3 space-y-2", children: CLIENT_OPTIONS.map((option) => {
        const Icon = option.icon;
        return /* @__PURE__ */ jsxs(
          Label,
          {
            htmlFor: option.value,
            className: "flex items-center space-x-3 p-3 sm:p-3 rounded-lg hover:bg-accent transition-colors cursor-pointer border border-transparent hover:border-border min-h-[48px] sm:min-h-auto min-w-0",
            children: [
              /* @__PURE__ */ jsx(RadioGroupItem, { value: option.value, id: option.value, className: "mt-0.5 flex-shrink-0" }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 flex-1 min-w-0", children: [
                /* @__PURE__ */ jsx(Icon, { className: "h-4 w-4 flex-shrink-0" }),
                /* @__PURE__ */ jsx("span", { className: "text-sm sm:text-base truncate", children: option.label })
              ] })
            ]
          },
          option.value
        );
      }) }),
      /* @__PURE__ */ jsx(
        Button,
        {
          onClick: handleClientSelection,
          disabled: !selectedClient,
          className: "w-full h-11 mt-3 min-w-0",
          size: "lg",
          children: /* @__PURE__ */ jsx("span", { className: "truncate", children: "Continue" })
        }
      )
    ] }),
    step === 3 && /* @__PURE__ */ jsxs("div", { className: "space-y-3 mt-3 sm:mt-4 flex-1 min-h-0 min-w-0", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center space-y-1.5", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-base sm:text-lg font-semibold leading-tight", children: "Ready to use your prompt!" }),
        /* @__PURE__ */ jsx("p", { className: "text-xs sm:text-sm text-muted-foreground px-1 break-words", children: selectedClient && getClientInstructions(selectedClient) })
      ] }),
      /* @__PURE__ */ jsx(
        Button,
        {
          onClick: handleCopyPrompt,
          className: "w-full h-11 mt-4 min-w-0",
          size: "lg",
          disabled: copied,
          children: copied ? /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsx(Check, { className: "mr-2 h-4 w-4 flex-shrink-0" }),
            /* @__PURE__ */ jsx("span", { className: "truncate", children: "Copied! Closing..." })
          ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsx(Copy, { className: "mr-2 h-4 w-4 flex-shrink-0" }),
            /* @__PURE__ */ jsx("span", { className: "truncate", children: "Copy Prompt & Use" })
          ] })
        }
      )
    ] })
  ] }) });
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
function PromptDetailModal({ useCase, isOpen, onClose, onVote, isFullPage = false }) {
  const [hasVoted, setHasVoted] = useState(false);
  const [showSessionTypeExplainer, setShowSessionTypeExplainer] = useState(false);
  const [showWizard, setShowWizard] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const { toast } = useToast();
  const [exactUses, setExactUses] = useState(0);
  const posthog = usePostHog();
  const [textSelected, setTextSelected] = useState(false);
  const [selectionDetails, setSelectionDetails] = useState({
    selectedText: "",
    selectionLength: 0,
    isFullPrompt: false,
    selectionTime: null
  });
  useEffect(() => {
    if (isOpen && useCase) {
      window.promptOpenTime = (/* @__PURE__ */ new Date()).getTime();
      const visitCount = parseInt(localStorage.getItem("style_scout_visit_count") || "0");
      const viralSession = localStorage.getItem("style_scout_viral_session");
      const viralInfo = viralSession ? JSON.parse(viralSession) : null;
      posthog.capture("prompt_modal_opened", {
        prompt_id: useCase.id,
        prompt_title: useCase.title,
        prompt_categories: useCase.categories,
        prompt_difficulty: useCase.difficulty,
        prompt_author: useCase.author,
        target_roles: useCase.targetRoles,
        // Phase 3: Enhanced tracking
        visit_count: visitCount,
        is_returning_user: visitCount > 1,
        is_viral_session: !!viralInfo,
        viral_entry_prompt: viralInfo?.prompt_id,
        time_since_page_load: Math.round(((/* @__PURE__ */ new Date()).getTime() - (window.pageLoadTime || (/* @__PURE__ */ new Date()).getTime())) / 1e3)
      });
    }
  }, [isOpen, useCase, posthog]);
  const handleTextSelection = () => {
    const selection = window.getSelection();
    if (selection && selection.toString().length > 0) {
      const selectedText = selection.toString();
      const selectionLength = selectedText.length;
      const promptLength = useCase.prompt.length;
      const isFullPrompt = selectionLength > promptLength * 0.9;
      setTextSelected(true);
      setSelectionDetails({
        selectedText: selectedText.substring(0, 100),
        // First 100 chars for logging
        selectionLength,
        isFullPrompt,
        selectionTime: (/* @__PURE__ */ new Date()).getTime()
      });
      const timeInModal = window.promptOpenTime ? Math.round(((/* @__PURE__ */ new Date()).getTime() - window.promptOpenTime) / 1e3) : 0;
      const visitCount = parseInt(localStorage.getItem("style_scout_visit_count") || "0");
      const viralSession = localStorage.getItem("style_scout_viral_session");
      const viralInfo = viralSession ? JSON.parse(viralSession) : null;
      posthog.capture("prompt_text_selected", {
        prompt_id: useCase.id,
        prompt_title: useCase.title,
        selection_length: selectionLength,
        prompt_length: promptLength,
        selection_percentage: Math.round(selectionLength / promptLength * 100),
        is_full_prompt_selected: isFullPrompt,
        time_before_selection_seconds: timeInModal,
        // Phase 3: Enhanced context
        visit_count: visitCount,
        is_returning_user: visitCount > 1,
        is_viral_session: !!viralInfo,
        copy_intent: "text_selection"
      });
    } else if (textSelected) {
      const timeInModal = window.promptOpenTime ? Math.round(((/* @__PURE__ */ new Date()).getTime() - window.promptOpenTime) / 1e3) : 0;
      const visitCount = parseInt(localStorage.getItem("style_scout_visit_count") || "0");
      const viralSession = localStorage.getItem("style_scout_viral_session");
      const viralInfo = viralSession ? JSON.parse(viralSession) : null;
      posthog.capture("prompt_text_deselected", {
        prompt_id: useCase.id,
        prompt_title: useCase.title,
        previous_selection_length: selectionDetails.selectionLength,
        was_full_prompt_selected: selectionDetails.isFullPrompt,
        selection_duration_seconds: selectionDetails.selectionTime ? Math.round(((/* @__PURE__ */ new Date()).getTime() - selectionDetails.selectionTime) / 1e3) : null,
        time_before_deselection_seconds: timeInModal,
        // Phase 3: Enhanced context
        visit_count: visitCount,
        is_returning_user: visitCount > 1,
        is_viral_session: !!viralInfo,
        abandoned_copy_intent: true
      });
      setTextSelected(false);
    }
  };
  const handleManualCopy = (method) => {
    const timeInModal = window.promptOpenTime ? Math.round(((/* @__PURE__ */ new Date()).getTime() - window.promptOpenTime) / 1e3) : 0;
    const visitCount = parseInt(localStorage.getItem("style_scout_visit_count") || "0");
    const viralSession = localStorage.getItem("style_scout_viral_session");
    const viralInfo = viralSession ? JSON.parse(viralSession) : null;
    posthog.capture("prompt_manual_copy_attempt", {
      prompt_id: useCase.id,
      prompt_title: useCase.title,
      copy_method: method,
      had_text_selected: textSelected,
      selected_length: selectionDetails.selectionLength,
      is_full_prompt_selected: selectionDetails.isFullPrompt,
      time_from_selection_to_copy: selectionDetails.selectionTime ? Math.round(((/* @__PURE__ */ new Date()).getTime() - selectionDetails.selectionTime) / 1e3) : null,
      time_before_copy_seconds: timeInModal,
      bypass_wizard: true,
      // User avoided official flow
      // Phase 3: Enhanced context
      visit_count: visitCount,
      is_returning_user: visitCount > 1,
      is_viral_session: !!viralInfo,
      conversion_funnel_step: "manual_copy_bypass"
    });
  };
  const handleKeyboardShortcut = (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === "c") {
      if (textSelected) {
        handleManualCopy("keyboard");
      }
    }
  };
  const handleContextMenu = (e) => {
    if (textSelected) {
      const timeInModal = window.promptOpenTime ? Math.round(((/* @__PURE__ */ new Date()).getTime() - window.promptOpenTime) / 1e3) : 0;
      const visitCount = parseInt(localStorage.getItem("style_scout_visit_count") || "0");
      const viralSession = localStorage.getItem("style_scout_viral_session");
      const viralInfo = viralSession ? JSON.parse(viralSession) : null;
      posthog.capture("prompt_right_click_detected", {
        prompt_id: useCase.id,
        prompt_title: useCase.title,
        had_text_selected: textSelected,
        selected_length: selectionDetails.selectionLength,
        is_full_prompt_selected: selectionDetails.isFullPrompt,
        time_before_right_click_seconds: timeInModal,
        // Phase 3: Enhanced context
        visit_count: visitCount,
        is_returning_user: visitCount > 1,
        is_viral_session: !!viralInfo,
        copy_intent: "context_menu"
      });
      setTimeout(() => handleManualCopy("context_menu"), 100);
    }
  };
  useEffect(() => {
    if (isOpen) {
      const handleKeyDown = (e) => handleKeyboardShortcut(e);
      document.addEventListener("keydown", handleKeyDown);
      return () => document.removeEventListener("keydown", handleKeyDown);
    }
  }, [isOpen, textSelected]);
  useEffect(() => {
    if (!useCase) return;
    const key = `useCase_uses_${useCase.id}`;
    const raw = localStorage.getItem(key);
    const value = raw ? Number(raw) : 0;
    setExactUses(Number.isFinite(value) ? value : 0);
  }, [useCase?.id]);
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
  const handleUsePrompt = () => {
    const timeInModal = window.promptOpenTime ? Math.round(((/* @__PURE__ */ new Date()).getTime() - window.promptOpenTime) / 1e3) : 0;
    const visitCount = parseInt(localStorage.getItem("style_scout_visit_count") || "0");
    const viralSession = localStorage.getItem("style_scout_viral_session");
    const viralInfo = viralSession ? JSON.parse(viralSession) : null;
    posthog.capture("use_prompt_button_clicked", {
      prompt_id: useCase.id,
      prompt_title: useCase.title,
      prompt_categories: useCase.categories,
      prompt_difficulty: useCase.difficulty,
      prompt_author: useCase.author,
      time_before_use_seconds: timeInModal,
      engagement_level: timeInModal > 30 ? "high" : timeInModal > 10 ? "medium" : "low",
      // Phase 3: Enhanced context
      visit_count: visitCount,
      is_returning_user: visitCount > 1,
      is_viral_session: !!viralInfo,
      viral_entry_prompt: viralInfo?.prompt_id,
      conversion_funnel_step: "prompt_to_wizard"
    });
    setShowWizard(true);
    incrementUses();
  };
  const handleModalClose = () => {
    if (window.promptOpenTime) {
      const timeInModal = Math.round(((/* @__PURE__ */ new Date()).getTime() - window.promptOpenTime) / 1e3);
      const visitCount = parseInt(localStorage.getItem("style_scout_visit_count") || "0");
      const viralSession = localStorage.getItem("style_scout_viral_session");
      const viralInfo = viralSession ? JSON.parse(viralSession) : null;
      posthog.capture("prompt_modal_closed", {
        prompt_id: useCase.id,
        prompt_title: useCase.title,
        prompt_categories: useCase.categories,
        time_in_modal_seconds: timeInModal,
        engagement_level: timeInModal > 30 ? "high" : timeInModal > 10 ? "medium" : "low",
        // Phase 3: Enhanced tracking context
        visit_count: visitCount,
        is_returning_user: visitCount > 1,
        is_viral_session: !!viralInfo,
        viral_entry_prompt: viralInfo?.prompt_id,
        close_method: "manual"
        // vs 'escape' or 'backdrop'
      });
    }
    onClose();
  };
  const getSessionTypeClass = (sessionType) => {
    switch (sessionType) {
      case "Instant output":
        return "session-instant-output";
      case "Step-by-step flow":
        return "session-step-by-step-flow";
      default:
        return "session-instant-output";
    }
  };
  const getShareUrl = (shareSource = "share_button") => {
    const url = new URL(getLink(`/library/prompts/${useCase.slug}`), window.location.origin);
    url.searchParams.set("utm_source", "desktop_commander");
    url.searchParams.set("utm_medium", shareSource);
    url.searchParams.set("utm_campaign", "prompt_sharing");
    url.searchParams.set("utm_content", useCase.slug);
    url.searchParams.set("shared_at", Date.now().toString());
    return url.toString();
  };
  const handleShare = async () => {
    const isMobile = typeof navigator !== "undefined" && (/(Mobi|Android|iPhone|iPad|iPod)/i.test(navigator.userAgent) || typeof window !== "undefined" && window.matchMedia && window.matchMedia("(pointer: coarse)").matches);
    const shareSource = isMobile && navigator.share ? "native_share" : "clipboard_copy";
    const shareUrl = getShareUrl(shareSource);
    const title = `Prompt: ${useCase.title}`;
    const visitCount = parseInt(localStorage.getItem("style_scout_visit_count") || "0");
    const viralSession = localStorage.getItem("style_scout_viral_session");
    const viralInfo = viralSession ? JSON.parse(viralSession) : null;
    posthog.capture("share_button_clicked", {
      prompt_id: useCase.id,
      prompt_title: useCase.title,
      prompt_categories: useCase.categories,
      prompt_difficulty: useCase.difficulty,
      prompt_author: useCase.author,
      target_roles: useCase.targetRoles,
      device_type: isMobile ? "mobile" : "desktop",
      share_url: shareUrl,
      share_method: shareSource,
      // NEW: Track intended share method
      source_page: "prompt_modal",
      // Phase 3: Enhanced viral and visitor tracking
      visit_count: visitCount,
      is_returning_user: visitCount > 1,
      is_viral_session: !!viralInfo,
      viral_chain_length: viralInfo ? 1 : 0,
      // User is creating a viral chain
      original_viral_prompt: viralInfo?.prompt_id,
      time_on_prompt_seconds: Math.round(((/* @__PURE__ */ new Date()).getTime() - (window.promptOpenTime || (/* @__PURE__ */ new Date()).getTime())) / 1e3)
    });
    try {
      if (isMobile && navigator.share) {
        await navigator.share({
          title,
          text: "Check out this Desktop Commander prompt",
          url: shareUrl
        });
        posthog.capture("share_native_completed", {
          prompt_id: useCase.id,
          prompt_title: useCase.title,
          device_type: "mobile",
          share_method: "native_share"
        });
        return;
      }
      await navigator.clipboard.writeText(shareUrl);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 1500);
      posthog.capture("share_link_copied", {
        prompt_id: useCase.id,
        prompt_title: useCase.title,
        device_type: isMobile ? "mobile" : "desktop",
        share_method: "clipboard_copy"
      });
      toast({
        title: "Link copied",
        description: "Share it with your team.",
        action: /* @__PURE__ */ jsx(ToastAction, { altText: "Open link", onClick: () => window.open(shareUrl, "_blank", "noopener,noreferrer"), children: "Open" })
      });
    } catch {
      try {
        await navigator.clipboard.writeText(shareUrl);
        setCopiedLink(true);
        setTimeout(() => setCopiedLink(false), 1500);
        toast({
          title: "Link copied",
          description: "Share it with your team.",
          action: /* @__PURE__ */ jsx(ToastAction, { altText: "Open link", onClick: () => window.open(shareUrl, "_blank", "noopener,noreferrer"), children: "Open" })
        });
      } catch {
        posthog.capture("share_failed", {
          prompt_id: useCase.id,
          prompt_title: useCase.title,
          device_type: isMobile ? "mobile" : "desktop",
          error_type: "clipboard_fallback_failed"
        });
        toast({
          title: "Share failed",
          description: "Could not share or copy the link.",
          variant: "destructive"
        });
      }
    }
  };
  return /* @__PURE__ */ jsxs(Dialog, { open: isOpen, onOpenChange: (open) => {
    if (!open) onClose();
  }, children: [
    /* @__PURE__ */ jsx(TooltipProvider, { children: /* @__PURE__ */ jsxs(DialogContent, { className: "w-[95vw] sm:max-w-2xl lg:max-w-4xl max-h-[90vh] mx-auto flex flex-col", children: [
      /* @__PURE__ */ jsx(DialogHeader, { className: "flex-shrink-0", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3 sm:gap-4 pr-8 sm:pr-12 min-w-0", children: [
        /* @__PURE__ */ jsx("div", { className: "p-2 sm:p-3 bg-dc-surface-elevated rounded-lg flex-shrink-0", children: /* @__PURE__ */ jsx(IconComponent, { className: "h-5 w-5 sm:h-6 sm:w-6 text-primary" }) }),
        /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ jsxs(DialogTitle, { className: "text-lg sm:text-2xl leading-tight mb-2 sm:mb-3 break-words flex items-start gap-2", children: [
            useCase.title,
            showNewBadge && /* @__PURE__ */ jsxs(Badge, { variant: "outline", className: "text-xs bg-primary/10 text-primary border-primary/20 flex-shrink-0", children: [
              /* @__PURE__ */ jsx(Sparkles, { className: "h-3 w-3 mr-1" }),
              "New"
            ] })
          ] }),
          /* @__PURE__ */ jsx(DialogDescription, { className: "sr-only", children: "Detailed information and actions for this prompt." }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 sm:gap-3 flex-wrap min-w-0", children: [
            useCase.verified && /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1 text-xs rounded-full border border-primary/20 bg-primary/10 text-primary px-2 py-0.5", children: [
              /* @__PURE__ */ jsx(BadgeCheck, { className: "h-3 w-3" }),
              "Verified by DC team"
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "relative inline-block", children: [
              /* @__PURE__ */ jsxs(
                Badge,
                {
                  className: `difficulty-badge ${getSessionTypeClass(useCase.sessionType)} text-xs flex items-center gap-1 cursor-pointer hover:opacity-90 transition-opacity`,
                  onClick: () => setShowSessionTypeExplainer(!showSessionTypeExplainer),
                  children: [
                    /* @__PURE__ */ jsx("span", { children: useCase.sessionType }),
                    /* @__PURE__ */ jsx(Info, { className: "h-3 w-3" })
                  ]
                }
              ),
              showSessionTypeExplainer && /* @__PURE__ */ jsxs(Fragment, { children: [
                /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: "fixed inset-0 z-40",
                    onClick: () => setShowSessionTypeExplainer(false)
                  }
                ),
                /* @__PURE__ */ jsxs("div", { className: "absolute top-full left-0 mt-2 z-50 w-72 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg p-3 animate-in fade-in-0 zoom-in-95 duration-200", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2", children: [
                    /* @__PURE__ */ jsx("div", { className: "w-2 h-2 rounded-full bg-blue-500 mt-1 flex-shrink-0" }),
                    /* @__PURE__ */ jsx("div", { className: "flex-1", children: /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-700 dark:text-gray-300 leading-relaxed", children: sessionTypeExplanations[useCase.sessionType] }) }),
                    /* @__PURE__ */ jsx(
                      "button",
                      {
                        onClick: (e) => {
                          e.stopPropagation();
                          setShowSessionTypeExplainer(false);
                        },
                        className: "text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors",
                        children: "✕"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsx("div", { className: "absolute -top-2 left-4 w-4 h-4 bg-white dark:bg-gray-800 border-l border-t border-gray-200 dark:border-gray-700 rotate-45" })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-1", children: useCase.categories.map((category, index) => /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "text-xs", children: category }, index)) }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1 text-xs sm:text-sm text-muted-foreground", children: [
              /* @__PURE__ */ jsx(User, { className: "h-3 w-3 sm:h-4 sm:w-4" }),
              /* @__PURE__ */ jsx("span", { className: "truncate", children: useCase.author })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "shrink-0 hidden sm:flex items-center gap-2", "aria-label": "All-time engagement", children: [
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
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-4 sm:space-y-6 overflow-y-auto min-h-0 flex-1 pr-2", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "text-base sm:text-lg font-semibold mb-1.5 sm:mb-2", children: "Description" }),
          /* @__PURE__ */ jsx("p", { className: "text-sm sm:text-base text-muted-foreground leading-relaxed break-words", children: useCase.description })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "text-base sm:text-lg font-semibold mb-2 sm:mb-3", children: "Target Roles" }),
          /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-1.5 sm:gap-2 min-w-0", children: useCase.targetRoles.map((role) => /* @__PURE__ */ jsx(Badge, { variant: "secondary", className: "role-tag text-xs", children: role }, role)) })
        ] }),
        /* @__PURE__ */ jsx(Separator, {}),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { className: "mb-3 sm:mb-4", children: /* @__PURE__ */ jsx("h3", { className: "text-base sm:text-lg font-semibold", children: "Complete Prompt" }) }),
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "p-3 sm:p-4 bg-dc-surface-elevated rounded-lg border min-w-0",
              onMouseUp: handleTextSelection,
              onKeyUp: handleTextSelection,
              onContextMenu: handleContextMenu,
              children: /* @__PURE__ */ jsx("pre", { className: "text-xs sm:text-sm text-foreground whitespace-pre-wrap font-mono leading-relaxed select-text break-words overflow-wrap-anywhere min-w-0", children: useCase.prompt })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex-shrink-0 border-t pt-4 mt-4", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row justify-end gap-2 sm:gap-3 min-w-0", children: [
        /* @__PURE__ */ jsx(Button, { variant: "outline", onClick: handleModalClose, className: "order-3 sm:order-1 min-w-0", children: /* @__PURE__ */ jsx("span", { className: "truncate", children: "Close" }) }),
        /* @__PURE__ */ jsxs(Tooltip, { children: [
          /* @__PURE__ */ jsx(TooltipTrigger, { asChild: true, children: /* @__PURE__ */ jsxs(
            Button,
            {
              variant: "outline",
              onClick: handleShare,
              "aria-label": "Share this prompt",
              className: "flex items-center gap-2 order-2 min-w-0",
              children: [
                /* @__PURE__ */ jsx(Share2, { className: "h-4 w-4 flex-shrink-0" }),
                /* @__PURE__ */ jsx("span", { className: "truncate", children: copiedLink ? "Copied" : "Share" })
              ]
            }
          ) }),
          /* @__PURE__ */ jsx(TooltipContent, { children: "Copy link to share" })
        ] }),
        /* @__PURE__ */ jsxs(
          Button,
          {
            className: "dc-button-primary flex items-center gap-2 order-1 sm:order-3 min-w-0",
            onClick: handleUsePrompt,
            children: [
              /* @__PURE__ */ jsx(Rocket, { className: "h-4 w-4 flex-shrink-0" }),
              /* @__PURE__ */ jsx("span", { className: "truncate", children: "Use Prompt" })
            ]
          }
        )
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsx(
      UsePromptWizard,
      {
        isOpen: showWizard,
        onClose: () => setShowWizard(false),
        prompt: useCase.prompt,
        promptTitle: useCase.title
      }
    )
  ] });
}

function PromptsLibrary({ initialPromptId }) {
  const initialRoleFilter = useMemo(() => {
    if (typeof window === "undefined") return [];
    const params = new URLSearchParams(window.location.search);
    const roleParam = params.get("role");
    return roleParam ? [roleParam] : [];
  }, []);
  const [useCases, setUseCases] = useState(useCasesWithSlugs);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedRoles, setSelectedRoles] = useState(initialRoleFilter);
  const [selectedSessionTypes, setSelectedSessionTypes] = useState([]);
  const [sortBy, setSortBy] = useState("popularity");
  const featuredPromptIds = ["86", "8", "59", "2", "84", "53", "82", "78", "4", "43"];
  const initialSelected = useMemo(() => {
    if (!initialPromptId) return null;
    return useCasesWithSlugs.find((u) => u.id === initialPromptId) || null;
  }, [initialPromptId]);
  const [selectedUseCase, setSelectedUseCase] = useState(initialSelected);
  const [isModalOpen, setIsModalOpen] = useState(!!initialSelected);
  useEffect(() => {
    if (initialPromptId && initialSelected && !isModalOpen) {
      setSelectedUseCase(initialSelected);
      setIsModalOpen(true);
    }
  }, [initialPromptId, initialSelected, isModalOpen]);
  const filteredAndSortedUseCases = useMemo(() => {
    let filtered = useCases;
    if (searchTerm) {
      const lowerSearch = searchTerm.toLowerCase();
      filtered = filtered.filter(
        (uc) => uc.title.toLowerCase().includes(lowerSearch) || uc.description.toLowerCase().includes(lowerSearch) || uc.prompt.toLowerCase().includes(lowerSearch) || uc.categories.some((cat) => cat.toLowerCase().includes(lowerSearch)) || uc.targetRoles.some((role) => role.toLowerCase().includes(lowerSearch))
      );
    }
    if (selectedCategories.length > 0) {
      filtered = filtered.filter(
        (uc) => selectedCategories.some((cat) => uc.categories.includes(cat))
      );
    }
    if (selectedRoles.length > 0) {
      filtered = filtered.filter(
        (uc) => selectedRoles.some((role) => uc.targetRoles.includes(role))
      );
    }
    if (selectedSessionTypes.length > 0) {
      filtered = filtered.filter(
        (uc) => selectedSessionTypes.includes(uc.sessionType)
      );
    }
    const sorted = [...filtered];
    switch (sortBy) {
      case "popularity":
        sorted.sort((a, b) => (b.gaClicks || 0) - (a.gaClicks || 0));
        break;
      case "newest":
        sorted.sort((a, b) => {
          const dateA = new Date(a.dateAdded || "1970-01-01").getTime();
          const dateB = new Date(b.dateAdded || "1970-01-01").getTime();
          return dateB - dateA;
        });
        break;
      case "alphabetical":
        sorted.sort((a, b) => a.title.localeCompare(b.title));
        break;
    }
    if (!searchTerm && selectedCategories.length === 0 && selectedRoles.length === 0 && selectedSessionTypes.length === 0 && sortBy !== "popularity") {
      const featured = sorted.filter((uc) => featuredPromptIds.includes(uc.id));
      const rest = sorted.filter((uc) => !featuredPromptIds.includes(uc.id));
      return [...featured, ...rest];
    }
    return sorted;
  }, [useCases, searchTerm, selectedCategories, selectedRoles, selectedSessionTypes, sortBy]);
  const handlePromptClick = (useCase) => {
    const slug = useCase.slug || useCase.id;
    window.location.href = getLink(`/library/prompts/${slug}`);
  };
  const handleVote = (id) => {
    console.log("Vote for prompt:", id);
  };
  return /* @__PURE__ */ jsxs(TooltipProvider, { children: [
    /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 py-12 mt-20", children: [
      /* @__PURE__ */ jsxs("div", { className: "mb-10", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h1", { className: "text-4xl font-bold mb-2", children: "Prompt Library" }),
            /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground", children: [
              "Discover ",
              useCases.length,
              "+ curated prompts for Desktop Commander"
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "flex gap-3", children: /* @__PURE__ */ jsx(SubmitPromptButton, {}) })
        ] }),
        /* @__PURE__ */ jsx(
          FilterControls,
          {
            searchTerm,
            onSearchChange: setSearchTerm,
            selectedCategories,
            onCategoriesChange: setSelectedCategories,
            selectedRoles,
            onRolesChange: setSelectedRoles,
            selectedSessionTypes,
            onSessionTypesChange: setSelectedSessionTypes,
            sortBy,
            onSortChange: setSortBy,
            totalResults: filteredAndSortedUseCases.length
          }
        )
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5", children: filteredAndSortedUseCases.map((useCase) => /* @__PURE__ */ jsx(
        PromptCard,
        {
          useCase,
          onOpen: handlePromptClick,
          onVote: handleVote
        },
        useCase.id
      )) }),
      filteredAndSortedUseCases.length === 0 && /* @__PURE__ */ jsxs("div", { className: "text-center py-12", children: [
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-lg", children: "No prompts found matching your filters." }),
        /* @__PURE__ */ jsx(
          Button,
          {
            variant: "outline",
            className: "mt-4",
            onClick: () => {
              setSearchTerm("");
              setSelectedCategories([]);
              setSelectedRoles([]);
              setSelectedSessionTypes([]);
            },
            children: "Clear Filters"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsx(
      PromptDetailModal,
      {
        useCase: selectedUseCase,
        isOpen: isModalOpen,
        onClose: () => setIsModalOpen(false),
        onVote: handleVote
      }
    )
  ] });
}

export { PromptsLibrary as P };
