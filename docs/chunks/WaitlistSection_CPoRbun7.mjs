import { jsx, jsxs } from 'react/jsx-runtime';
import { D as DownloadButtons } from './DownloadButtons_D1sVK0uh.mjs';

const WaitlistSection = ({ useCase = "unknown" }) => {
  const steps = [
    {
      number: "1",
      title: "Download Desktop Commander",
      description: "One-time setup on your Mac or Windows PC. No accounts, no subscriptions required to start."
    },
    {
      number: "2",
      title: "Describe what you need",
      description: '"Organize my Downloads by file type" or "Create a markdown summary of this folder" — just type it naturally.'
    },
    {
      number: "3",
      title: "Done",
      description: "Desktop Commander handles it instantly. Your files are organized, converted, or found — all privately on your machine."
    }
  ];
  return /* @__PURE__ */ jsx("section", { id: "get-started", className: "py-16 md:py-24 bg-dc-card/30 scroll-mt-20", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto max-w-5xl px-4 sm:px-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-16", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl lg:text-5xl font-bold mb-4", children: "How It Works" }),
      /* @__PURE__ */ jsx("p", { className: "text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto", children: "Desktop Commander makes file management as simple as having a conversation" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "space-y-8 md:space-y-12", children: steps.map((step, index) => /* @__PURE__ */ jsxs("div", { className: "flex gap-6 items-start", children: [
      /* @__PURE__ */ jsx("div", { className: "shrink-0 w-14 h-14 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center", children: /* @__PURE__ */ jsx("span", { className: "text-2xl font-bold text-primary", children: step.number }) }),
      /* @__PURE__ */ jsxs("div", { className: "flex-1 pt-2", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-2xl font-semibold mb-3", children: step.title }),
        /* @__PURE__ */ jsx("p", { className: "text-lg text-muted-foreground leading-relaxed mb-4", children: step.description }),
        index === 0 && /* @__PURE__ */ jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsx(DownloadButtons, { location: useCase }) })
      ] })
    ] }, index)) })
  ] }) });
};

export { WaitlistSection as W };
