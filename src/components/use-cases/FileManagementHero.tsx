import { Button } from "@/components/ui/button";
import { ArrowRight, Shield } from "lucide-react";

const FileManagementHero = () => {
  const handleInstallClick = () => {
    // Navigate to installation section
    const installSection = document.getElementById('installation');
    if (installSection) {
      installSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-20">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-dc-surface border border-dc-border text-sm text-muted-foreground">
            <Shield className="w-4 h-4 text-primary" />
            <span>AI Processing • No Random Sites</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight max-w-4xl">
            Your personal file organizer —{" "}
            <span className="text-primary">move, edit, convert files in natural language</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl leading-relaxed">
            Manage files by simply describing what you want. Desktop Commander connects your AI directly to your files—no random conversion websites, no manual workflows.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button 
              size="lg" 
              asChild
              className="group"
            >
              <a href="/product/early-access/">
                Join the Waitlist
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>

          {/* Value points */}
          <div className="flex items-center gap-4 text-sm text-muted-foreground pt-2">
            <span>Save time</span>
            <span className="w-1 h-1 rounded-full bg-muted-foreground/50" />
            <span>Keep files safe</span>
            <span className="w-1 h-1 rounded-full bg-muted-foreground/50" />
            <span>Manage all in natural language</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FileManagementHero;
