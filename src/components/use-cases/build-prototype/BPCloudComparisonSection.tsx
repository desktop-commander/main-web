import { Monitor, Cog, FolderOpen, MessageSquare } from "lucide-react";

const BPCloudComparisonSection = () => {
  const comparisonRows = [
    {
      aspect: "Where it runs",
      cloud: "Cloud servers with queues and usage limits",
      dc: "Directly on your machine—instant, unlimited"
    },
    {
      aspect: "What you get",
      cloud: "Generated code",
      dc: "Working result—dependencies installed, servers running"
    },
    {
      aspect: "Project context",
      cloud: "Copy-paste into each chat, re-explain every time",
      dc: "Sees your local files, picks up where you left off"
    },
    {
      aspect: "Interface",
      cloud: "Different tools for code, terminal, files",
      dc: "One chat for everything"
    }
  ];

  const cards = [
    {
      icon: Monitor,
      title: "Runs on your machine",
      description: "No cloud servers, no waiting, no limits. Start locally, deploy when ready."
    },
    {
      icon: Cog,
      title: "From idea to working result",
      description: "Installs dependencies, runs commands, shows results. Recipe vs. dinner."
    },
    {
      icon: FolderOpen,
      title: "Your files, always connected",
      description: "DC sees your files and picks up where you left off."
    },
    {
      icon: MessageSquare,
      title: "Just describe what you need",
      description: "Plain English for all technical tasks. No syntax to learn."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-dc-card/30">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3">
            DC vs. Cloud AI Builders
          </h2>
          <p className="text-xl text-muted-foreground">
            Build faster with full system access.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="mb-16 overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="p-4 text-left font-semibold border-b border-dc-border"></th>
                <th className="p-4 text-left font-semibold border-b border-dc-border text-muted-foreground">Cloud AI Builders</th>
                <th className="p-4 text-left font-semibold border-b border-dc-border text-primary">Desktop Commander</th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row, index) => (
                <tr key={index} className="border-b border-dc-border/50">
                  <td className="p-4 font-medium">{row.aspect}</td>
                  <td className="p-4 text-muted-foreground">{row.cloud}</td>
                  <td className="p-4 text-foreground">{row.dc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <div 
              key={index}
              className="p-5 rounded-xl border border-dc-border bg-dc-card hover:border-primary/30 transition-all"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-3">
                <card.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BPCloudComparisonSection;