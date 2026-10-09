import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Terminal, Copy, Check, MessageSquare } from "lucide-react";
import GptCta from "./GptCta";
import { getCampaign, type CampaignKey } from "./campaigns";
import { useAnalyticsAstro } from "@/hooks/useAnalyticsAstro";

/** Campaign pages: the exact first prompt to try once connected, with a copy button. */
const FirstPrompt = ({ campaign }: { campaign: CampaignKey }) => {
  const c = getCampaign(campaign)!;
  const [copied, setCopied] = useState(false);
  const { trackCustomEvent } = useAnalyticsAstro();
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(c.firstPrompt.prompt);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard blocked: the prompt stays visible to copy by hand */
    }
    trackCustomEvent("mcp_client_first_prompt_copied", { client: "chatgpt", campaign });
  };
  return (
    <Card className="p-6 sm:p-7 bg-dc-card border-dc-border text-left mb-10">
      <h3 className="text-xl font-semibold text-foreground mb-4">{c.firstPrompt.title}</h3>
      <div className="flex items-start gap-3 rounded-xl bg-dc-surface border border-dc-border px-4 py-3.5">
        <span className="w-7 h-7 rounded-full bg-primary/10 border border-primary/25 flex items-center justify-center flex-shrink-0 mt-0.5">
          <MessageSquare className="h-3.5 w-3.5 text-primary" />
        </span>
        <p className="flex-1 text-base text-foreground leading-relaxed">{c.firstPrompt.prompt}</p>
        <button
          type="button"
          onClick={copy}
          className="flex-shrink-0 inline-flex items-center gap-1.5 rounded-lg border border-dc-border px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors"
        >
          {copied ? <Check className="h-4 w-4 text-primary" /> : <Copy className="h-4 w-4" />}
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <p className="text-sm text-muted-foreground mt-3">{c.firstPrompt.note}</p>
    </Card>
  );
};

const GptSetup = ({ campaign }: { campaign?: CampaignKey }) => {
  return (
    <section id="setup" className="py-16 md:py-24 scroll-mt-24">
      <div className="container mx-auto max-w-3xl px-4 sm:px-6 text-center">
        <h2 className="text-3xl sm:text-5xl font-bold text-foreground mb-4">
          Set up in two steps
        </h2>
        <p className="text-lg text-muted-foreground mb-12">
          No config files, no API keys. About three minutes.
        </p>

        <div className="grid sm:grid-cols-2 gap-5 mb-10 text-left">
          <Card className="p-7 bg-dc-card border-dc-border relative overflow-hidden">
            <span
              className="absolute -top-4 -right-2 text-[96px] font-bold text-primary/10 leading-none select-none"
              aria-hidden="true"
            >
              1
            </span>
            <h3 className="text-xl font-semibold text-foreground mb-3 relative">
              Add the plugin in ChatGPT
            </h3>
            <p className="text-muted-foreground leading-relaxed relative">
              Open Desktop Commander in the ChatGPT plugin directory and add it to your
              account.
            </p>
          </Card>
          <Card className="p-7 bg-dc-card border-dc-border relative overflow-hidden">
            <span
              className="absolute -top-4 -right-2 text-[96px] font-bold text-primary/10 leading-none select-none"
              aria-hidden="true"
            >
              2
            </span>
            <h3 className="text-xl font-semibold text-foreground mb-3 relative">
              Connect your machine
            </h3>
            <p className="text-muted-foreground leading-relaxed relative">
              Follow the instructions shown right in ChatGPT. You will run one command in
              your computer's terminal and your machine appears in the chat.
            </p>
          </Card>
        </div>

        {campaign && <FirstPrompt campaign={campaign} />}

        <GptCta position="setup" className="text-base px-8" campaign={campaign} />

        <p className="flex items-center justify-center gap-2 text-sm text-muted-foreground mt-6">
          <Terminal className="h-4 w-4" />
          Requires running one command in your computer's terminal. Works on macOS and
          Windows. Disconnect any time.
        </p>
      </div>
    </section>
  );
};

export default GptSetup;
