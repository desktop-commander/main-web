import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Terminal, Copy, Check, MessageSquare } from "lucide-react";
import { useAnalyticsAstro } from "@/hooks/useAnalyticsAstro";
import GptCta from "../GptCta";
import { getAdVariant, useCaseOf, type AdPageKey } from "./adPages";

interface Props {
  page: AdPageKey;
  variant?: string;
}

/**
 * Same two-step setup as the earlier ChatGPT pages (GptSetup): add the plugin,
 * then connect from the steps shown after sign up. Plus the first prompt for
 * the advertised task.
 */
export const AdSetup = ({ page: pageKey, variant: variantKey = "" }: Props) => {
  const { page, variant } = getAdVariant(pageKey, variantKey);
  const useCase = useCaseOf(variant);
  const { trackCustomEvent } = useAnalyticsAstro();
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(variant.firstPrompt);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard blocked: the prompt stays visible to copy by hand */
    }
    trackCustomEvent("mcp_client_first_prompt_copied", { client: "chatgpt", campaign: page.campaign, use_case: useCase });
  };

  const steps = [
    {
      title: "Add the plugin in ChatGPT",
      body: "Open Desktop Commander in the ChatGPT plugin directory, add it to your account, and sign in.",
    },
    page.connectStep,
  ];

  return (
    <section id="setup" className="py-16 md:py-24 scroll-mt-24">
      <div className="container mx-auto max-w-3xl px-4 sm:px-6 text-center">
        <h2 className="text-3xl sm:text-5xl font-bold text-foreground mb-4">Set up in two steps</h2>
        <p className="text-lg text-muted-foreground mb-12">No config files, no API keys. About three minutes.</p>

        <div className="grid sm:grid-cols-2 gap-5 mb-10 text-left">
          {steps.map((step, i) => (
            <Card key={step.title} className="p-7 bg-dc-card border-dc-border relative overflow-hidden">
              <span
                className="absolute -top-4 -right-2 text-[96px] font-bold text-primary/10 leading-none select-none"
                aria-hidden="true"
              >
                {i + 1}
              </span>
              <h3 className="text-xl font-semibold text-foreground mb-3 relative">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed relative">{step.body}</p>
            </Card>
          ))}
        </div>

        <Card className="p-6 sm:p-7 bg-dc-card border-dc-border text-left mb-10">
          <h3 className="text-xl font-semibold text-foreground mb-4">Then give ChatGPT its first task</h3>
          <div className="flex items-start gap-3 rounded-xl bg-dc-surface border border-dc-border px-4 py-3.5">
            <span className="w-7 h-7 rounded-full bg-primary/10 border border-primary/25 flex items-center justify-center flex-shrink-0 mt-0.5">
              <MessageSquare className="h-3.5 w-3.5 text-primary" />
            </span>
            <p className="flex-1 text-base text-foreground leading-relaxed">{variant.firstPrompt}</p>
            <button
              type="button"
              onClick={copy}
              className="flex-shrink-0 inline-flex items-center gap-1.5 rounded-lg border border-dc-border px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors"
            >
              {copied ? <Check className="h-4 w-4 text-primary" /> : <Copy className="h-4 w-4" />}
              {copied ? "Copied" : "Copy"}
            </button>
          </div>
          <p className="text-sm text-muted-foreground mt-3">{page.firstPromptNote}</p>
        </Card>

        <GptCta position="setup" label={page.button} campaign={page.campaign} useCase={useCase} className="text-base px-8" />

        <p className="flex items-center justify-center gap-2 text-sm text-muted-foreground mt-6">
          <Terminal className="h-4 w-4" />
          {page.setupFootnote}
        </p>
      </div>
    </section>
  );
};

/** Closing band with the same button and note as the hero. */
export const AdFinal = ({ page: pageKey, variant: variantKey = "" }: Props) => {
  const { page, variant } = getAdVariant(pageKey, variantKey);
  return (
    <section className="relative py-20 md:py-24 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-primary/10 blur-[130px]" />
      </div>
      <div className="container mx-auto max-w-2xl px-4 sm:px-6 relative text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">{page.finalHeading}</h2>
        <p className="text-muted-foreground mb-8">{page.note}</p>
        <GptCta position="final" label={page.button} campaign={page.campaign} useCase={useCaseOf(variant)} className="text-lg px-10 py-6" />
      </div>
    </section>
  );
};
