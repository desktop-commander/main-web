import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Copy, ExternalLink, AlertCircle } from "lucide-react";
import { useState } from "react";
import { useAnalyticsAstro } from "@/hooks/useAnalyticsAstro";

interface SetupStep {
  title: string;
  body: string;
  command?: string;
  link?: { label: string; href: string };
}

interface Props {
  slug: string;
  transport: "remote" | "local";
  requirements: string[];
  steps: SetupStep[];
  limitations: string[];
}

const ClientSetupSteps = ({ slug, transport, requirements, steps, limitations }: Props) => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const { trackCustomEvent } = useAnalyticsAstro();

  const copyCommand = (command: string, index: number) => {
    navigator.clipboard.writeText(command);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
    trackCustomEvent("mcp_client_setup_command_copied", { client: slug, step: index + 1 });
  };

  return (
    <section id="setup" className="py-14 md:py-20 bg-muted/30 scroll-mt-24">
      <div className="container mx-auto max-w-3xl px-4 sm:px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">Set it up</h2>
          <p className="text-lg text-muted-foreground">
            {transport === "remote"
              ? "A few minutes, no config files."
              : "One command, fully local."}
          </p>
        </div>

        {/* Requirements */}
        <Card className="p-5 bg-dc-card border-dc-border mb-8">
          <p className="text-sm font-semibold text-foreground mb-3">You’ll need</p>
          <div className="space-y-2">
            {requirements.map((req, i) => (
              <div key={i} className="flex items-start gap-2.5">
                <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-sm text-muted-foreground">{req}</p>
              </div>
            ))}
          </div>
        </Card>

        {/* Steps */}
        <div className="space-y-6 mb-10">
          {steps.map((step, i) => (
            <div key={i} className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-sm font-bold text-primary">
                {i + 1}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-semibold text-foreground mb-1">{step.title}</h3>
                <p className="text-muted-foreground mb-3">{step.body}</p>
                {step.command && (
                  <div className="relative group">
                    <pre className="bg-dc-surface border border-dc-border rounded-lg px-4 py-3 pr-12 text-sm text-foreground overflow-x-auto whitespace-pre-wrap break-all">
                      {step.command}
                    </pre>
                    <button
                      onClick={() => copyCommand(step.command!, i)}
                      className="absolute top-2.5 right-2.5 p-1.5 rounded-md bg-muted hover:bg-muted/70 transition-colors"
                      aria-label="Copy command"
                    >
                      {copiedIndex === i ? (
                        <Check className="h-4 w-4 text-primary" />
                      ) : (
                        <Copy className="h-4 w-4 text-muted-foreground" />
                      )}
                    </button>
                  </div>
                )}
                {step.link && (
                  <Button variant="outline" size="sm" asChild>
                    <a
                      href={step.link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() =>
                        trackCustomEvent("mcp_client_page_cta_clicked", {
                          client: slug,
                          transport,
                          cta_position: `setup_step_${i + 1}`,
                          destination: step.link!.href,
                        })
                      }
                    >
                      {step.link.label}
                      <ExternalLink className="h-3.5 w-3.5 ml-1.5" />
                    </a>
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Good to know */}
        {limitations.length > 0 && (
          <Card className="p-5 bg-dc-card border-dc-border">
            <p className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
              <AlertCircle className="h-4 w-4 text-primary" />
              Good to know
            </p>
            <div className="space-y-2">
              {limitations.map((item, i) => (
                <p key={i} className="text-sm text-muted-foreground">
                  {item}
                </p>
              ))}
            </div>
          </Card>
        )}
      </div>
    </section>
  );
};

export default ClientSetupSteps;
