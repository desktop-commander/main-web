import { Button } from "@/components/ui/button";
import { Download, ArrowRight } from "lucide-react";
import { trackDownloadRedirect } from '@/lib/analytics/tracking';

const PJHeroSection = () => {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-20">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight max-w-4xl">
            Convert PNG to JPG <span className="text-primary">in seconds</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl leading-relaxed">
            Batch convert PNG files to smaller JPG images instantly. Reduce file sizes for web, email, and sharing without uploading to sketchy online tools.
          </p>

          {/* Format Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <span className="text-sm text-muted-foreground">Converts:</span>
            <div className="flex flex-wrap items-center justify-center gap-2">
              <span className="px-3 py-1.5 rounded-full bg-dc-surface border border-dc-border text-sm font-medium">
                PNG → JPG
              </span>
              <span className="px-3 py-1.5 rounded-full bg-dc-surface border border-dc-border text-sm font-medium">
                Batch Processing
              </span>
              <span className="px-3 py-1.5 rounded-full bg-dc-surface border border-dc-border text-sm font-medium">
                Quality Control
              </span>
              <span className="px-3 py-1.5 rounded-full bg-dc-surface border border-dc-border text-sm font-medium">
                Size Reduction
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
              <a href="#get-started" onClick={() => trackDownloadRedirect('png_to_jpg_hero')}>
                <Download className="w-5 h-5" />
                Download Free
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>

          {/* Value Props */}
          <div className="flex flex-wrap items-center justify-center gap-6 pt-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
              Reduce file sizes up to 80%
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
              Works offline
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
              Mac & Windows
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PJHeroSection;
