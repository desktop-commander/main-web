import { GitBranch, CheckCircle } from "lucide-react";

const KMGitNativeSection = () => {
  const features = [
    "Every change can be committed and tracked",
    "Push to GitHub for backup without proprietary sync",
    "Use existing developer workflows for documentation",
    "Collaborate through pull requests, not permission settings",
    "Roll back changes using Git history, not app-specific versions"
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-dc-card/30">
      <div className="container mx-auto max-w-5xl px-4 sm:px-6">
        <div className="bg-gradient-to-br from-dc-card to-dc-surface rounded-2xl border border-dc-border p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-start gap-6">
            {/* Icon */}
            <div className="p-4 rounded-2xl bg-primary/10 border-2 border-primary/20 shrink-0">
              <GitBranch className="w-10 h-10 text-primary" />
            </div>
            
            {/* Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Git-Native Knowledge Management
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Unlike cloud-based tools, Desktop Commander's markdown approach is Git-friendly:
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KMGitNativeSection;
