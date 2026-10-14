import { ArrowRight, Workflow } from "lucide-react";

const CAWorkflowChainsSection = () => {
  const workflowSteps = [
    { tool: "Help desk API", action: "Fetch last week's tickets with your API key" },
    { tool: "Python", action: "Group the tickets by topic" },
    { tool: "GitHub CLI", action: "Find matching issues with gh" },
    { tool: "Your notes", action: "Save the summary as a markdown file" },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto max-w-5xl px-4 sm:px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
            <Workflow className="w-4 h-4" />
            Several steps, one message
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Chain actions across your tools
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Describe a task that spans several tools. ChatGPT or Claude runs each step in your
            terminal and passes the result to the next one, in the same conversation.
          </p>
        </div>

        {/* Workflow visualization */}
        <div className="p-8 md:p-12 rounded-2xl bg-gradient-to-br from-dc-card to-dc-surface border border-dc-border">
          {/* The prompt */}
          <div className="mb-8 p-4 rounded-xl bg-dc-surface border border-dc-border">
            <p className="text-sm text-muted-foreground mb-2">You say:</p>
            <p className="font-mono text-sm md:text-base">
              "Get last week's support tickets from our help desk API, group them by topic, check our GitHub repo for matching bug reports, and save a summary to my Notes folder."
            </p>
          </div>

          {/* Flow visualization */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-2">
            {workflowSteps.map((step, index) => (
              <div key={index} className="flex flex-col md:flex-row items-center gap-2">
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
              One summary with tickets, matching issues and links, written to your Notes folder in one conversation.
            </p>
          </div>
        </div>

        {/* Additional examples */}
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <div className="p-6 rounded-xl border border-dc-border bg-dc-card">
            <p className="font-mono text-sm mb-3">
              "Write a script that pulls yesterday's orders from our shop API into orders.csv, then run it."
            </p>
            <p className="text-sm text-muted-foreground">
              The script is saved in your project folder. Ask it to run again whenever you need fresh numbers.
            </p>
          </div>
          <div className="p-6 rounded-xl border border-dc-border bg-dc-card">
            <p className="font-mono text-sm mb-3">
              "Check the server logs for errors since yesterday's deploy, then compare them with the commits in git log."
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
