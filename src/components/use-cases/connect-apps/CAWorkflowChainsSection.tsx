import { ArrowRight, Sparkles } from "lucide-react";

const CAWorkflowChainsSection = () => {
  const workflowSteps = [
    { tool: "Slack", action: "Read messages from #product-feedback" },
    { tool: "Notion", action: "Summarize issues into a document" },
    { tool: "Analytics", action: "Find supporting traffic data" },
    { tool: "Drive", action: "Cross-reference with customer interviews" },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto max-w-5xl px-4 sm:px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            The real power
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Chain actions across your entire stack
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            This isn't just about controlling one tool at a time. Describe a workflow that spans multiple services — Desktop Commander handles it all in one conversation.
          </p>
        </div>

        {/* Workflow visualization */}
        <div className="p-8 md:p-12 rounded-2xl bg-gradient-to-br from-dc-card to-dc-surface border border-dc-border">
          {/* The prompt */}
          <div className="mb-8 p-4 rounded-xl bg-dc-surface border border-dc-border">
            <p className="text-sm text-muted-foreground mb-2">You say:</p>
            <p className="font-mono text-sm md:text-base">
              "Read my Slack from last week, summarize the issues I brought up in Notion, find supporting data from website traffic, and cross-reference with customer interviews in my Drive folder."
            </p>
          </div>

          {/* Flow visualization */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-2">
            {workflowSteps.map((step, index) => (
              <div key={index} className="flex items-center gap-2 md:gap-2">
                <div className="p-4 rounded-xl bg-dc-card border border-dc-border text-center min-w-[140px]">
                  <p className="text-primary font-semibold mb-1">{step.tool}</p>
                  <p className="text-xs text-muted-foreground">{step.action}</p>
                </div>
                {index < workflowSteps.length - 1 && (
                  <ArrowRight className="w-5 h-5 text-primary shrink-0 rotate-90 md:rotate-0" />
                )}
              </div>
            ))}
          </div>

          {/* Result */}
          <div className="mt-8 p-4 rounded-xl bg-primary/5 border border-primary/20 text-center">
            <p className="text-sm text-muted-foreground mb-1">Result:</p>
            <p className="text-foreground font-medium">
              A complete report with data from 4 different tools — created in one conversation.
            </p>
          </div>
        </div>

        {/* Additional examples */}
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <div className="p-6 rounded-xl border border-dc-border bg-dc-card">
            <p className="font-mono text-sm mb-3">
              "When a new lead comes in to HubSpot, create a task in Notion and ping me on Slack."
            </p>
            <p className="text-sm text-muted-foreground">
              Describe it once. Runs automatically.
            </p>
          </div>
          <div className="p-6 rounded-xl border border-dc-border bg-dc-card">
            <p className="font-mono text-sm mb-3">
              "Check my analytics for traffic drops, then search my error logs for any related issues."
            </p>
            <p className="text-sm text-muted-foreground">
              Debug across systems without switching tabs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CAWorkflowChainsSection;
