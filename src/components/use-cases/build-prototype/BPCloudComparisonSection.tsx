import { FolderOpen, Cog, RefreshCw, MessageSquare } from "lucide-react";

const BPCloudComparisonSection = () => {
  const comparisonRows = [
    {
      aspect: "Your project",
      cloud: "Lives inside the builder's own workspace",
      dc: "A regular project folder on your Mac or Windows PC"
    },
    {
      aspect: "What you get",
      cloud: "A preview inside their platform",
      dc: "Your real app: dependencies installed, dev server running in your terminal"
    },
    {
      aspect: "Project context",
      cloud: "Works best on projects started inside the tool",
      dc: "Reads your existing project files and picks up where you left off"
    },
    {
      aspect: "Your tools",
      cloud: "Their editor and their hosting by default",
      dc: "Your editor, your Git, your terminal, any hosting"
    },
    {
      aspect: "Interface",
      cloud: "Another app to learn",
      dc: "The ChatGPT or Claude chat you already use, on the web or your phone"
    }
  ];

  const cards = [
    {
      icon: FolderOpen,
      title: "Your real project files",
      description: "It works in a normal folder on your Mac or Windows PC. Open the same files in your own editor any time."
    },
    {
      icon: Cog,
      title: "From idea to working result",
      description: "Installs dependencies, runs commands, starts the dev server. Recipe vs. dinner."
    },
    {
      icon: RefreshCw,
      title: "Picks up where you left off",
      description: "It reads the project as it is now, including changes you made by hand."
    },
    {
      icon: MessageSquare,
      title: "In the chat you already use",
      description: "Ask in ChatGPT or Claude, on the web or your phone. No new app to learn."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-dc-card/30">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3">
            Desktop Commander vs. Cloud AI App Builders
          </h2>
          <p className="text-xl text-muted-foreground">
            Work on your real project and your real dev server, from the chat you already use.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="mb-16 overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="p-4 text-left font-semibold border-b border-dc-border"></th>
                <th className="p-4 text-left font-semibold border-b border-dc-border text-muted-foreground">Cloud AI App Builders</th>
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