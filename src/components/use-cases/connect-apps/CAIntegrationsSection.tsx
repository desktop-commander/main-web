import { FileText, BarChart3, Users, GitBranch, Search, Plus } from "lucide-react";

const CAIntegrationsSection = () => {
  const integrations = [
    {
      name: "WordPress",
      description: "Publish posts, edit themes, manage plugins — without touching the admin panel.",
      icon: FileText,
    },
    {
      name: "Google Analytics",
      description: "Get traffic insights and reports in plain English — no dashboard navigation.",
      icon: BarChart3,
    },
    {
      name: "HubSpot",
      description: "Manage contacts, deals, and pipelines through conversation.",
      icon: Users,
    },
    {
      name: "GitHub",
      description: "Commits, branches, PRs — version control without CLI commands.",
      icon: GitBranch,
    },
    {
      name: "Ahrefs",
      description: "Check rankings, analyze competitors, pull SEO data — just ask.",
      icon: Search,
    },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Featured Integrations
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Connect once, control forever. Here are some of the most popular integrations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {integrations.map((integration, index) => (
            <div 
              key={index}
              className="p-6 rounded-xl border border-dc-border bg-dc-card hover:border-primary/30 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                <integration.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{integration.name}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {integration.description}
              </p>
            </div>
          ))}

          {/* More integrations card */}
          <div 
            className="p-6 rounded-xl border-2 border-dashed border-dc-border bg-dc-card/50 hover:border-primary/30 transition-all flex flex-col items-center justify-center text-center"
          >
            <div className="w-12 h-12 rounded-xl bg-dc-surface border border-dc-border flex items-center justify-center mb-4">
              <Plus className="w-6 h-6 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-2">+ 100 more</h3>
            <p className="text-muted-foreground leading-relaxed">
              Connect the tools you already use.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CAIntegrationsSection;
