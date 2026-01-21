import { Button } from "@/components/ui/button";
import { Download, ArrowRight } from "lucide-react";
import { trackDownloadRedirect } from '@/lib/analytics/tracking';

const KnowledgeManagementHero = () => {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-20">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight max-w-4xl">
            Your AI knowledge assistant —{" "}
            <span className="text-primary">organize your knowledge in local filesystem by talking with AI</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl leading-relaxed">
            Keep your knowledge base up-to-date automatically by directly managing your markdown files, documentation, and notes.
          </p>

          {/* Tool Integration Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <span className="text-sm text-muted-foreground">Works with:</span>
            <div className="flex flex-wrap items-center justify-center gap-2">
              <span className="px-3 py-1.5 rounded-full bg-dc-surface border border-dc-border text-sm font-medium">
                Obsidian
              </span>
              <span className="px-3 py-1.5 rounded-full bg-dc-surface border border-dc-border text-sm font-medium">
                Google Drive
              </span>
              <span className="px-3 py-1.5 rounded-full bg-dc-surface border border-dc-border text-sm font-medium">
                VS Code
              </span>
              <span className="px-3 py-1.5 rounded-full bg-dc-surface border border-dc-border text-sm font-medium">
                Local Files
              </span>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button 
              size="lg" 
              asChild
              className="group"
            >
              <a href="#get-started" onClick={() => trackDownloadRedirect('knowledge_management_hero')}>
                <Download className="w-5 h-5" />
                Download App
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>


        </div>
      </div>
    </section>
  );
};

export default KnowledgeManagementHero;
