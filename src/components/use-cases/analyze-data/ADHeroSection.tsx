import { Button } from "@/components/ui/button";
import { Download, ArrowRight } from "lucide-react";
import { trackDownloadRedirect } from '@/lib/analytics/tracking';

const ADHeroSection = () => {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-20">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight max-w-4xl">
            Analyze data <span className="text-primary">in natural language</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl leading-relaxed">
            Process large files, find patterns, and automate reports—without learning Python or watching AI hallucinate your numbers.
          </p>

          {/* Tool Integration Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <span className="text-sm text-muted-foreground">Works with:</span>
            <div className="flex flex-wrap items-center justify-center gap-2">
              <span className="px-3 py-1.5 rounded-full bg-dc-surface border border-dc-border text-sm font-medium">
                CSV
              </span>
              <span className="px-3 py-1.5 rounded-full bg-dc-surface border border-dc-border text-sm font-medium">
                Excel
              </span>
              <span className="px-3 py-1.5 rounded-full bg-dc-surface border border-dc-border text-sm font-medium">
                JSON
              </span>
              <span className="px-3 py-1.5 rounded-full bg-dc-surface border border-dc-border text-sm font-medium">
                Python
              </span>
              <span className="px-3 py-1.5 rounded-full bg-dc-surface border border-dc-border text-sm font-medium">
                Pandas
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
              <a href="#get-started" onClick={() => trackDownloadRedirect('analyze_data_hero')}>
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

export default ADHeroSection;
