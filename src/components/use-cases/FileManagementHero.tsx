import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Download } from "lucide-react";

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
            <span>100% Private • Files Never Leave Your Computer</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight max-w-4xl">
            Your personal file organizer —{" "}
            <span className="text-primary">move, edit, convert files in natural language</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl leading-relaxed">
            Manage files by simply describing what you want—no sketchy websites, no uploading, 
            everything stays privately on your computer.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button 
              size="lg" 
              asChild
              className="group"
            >
              <a href="#get-started">
                <Download className="w-5 h-5" />
                Download Desktop Commander
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>

          {/* Platform badges */}
          <div className="flex items-center gap-4 text-sm text-muted-foreground pt-2">
            <span>Works on Mac</span>
            <span className="w-1 h-1 rounded-full bg-muted-foreground/50" />
            <span>Windows</span>
            <span className="w-1 h-1 rounded-full bg-muted-foreground/50" />
            <span>Linux</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FileManagementHero;
