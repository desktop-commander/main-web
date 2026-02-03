import { Button } from "@/components/ui/button";
import { Download, ArrowRight } from "lucide-react";
import { trackDownloadRedirect } from '@/lib/analytics/tracking';

const PPHeroSection = () => {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-20">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight max-w-4xl">
            Convert PDF to PNG <span className="text-primary">images</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl leading-relaxed">
            Extract pages from PDFs as high-quality PNG images. Perfect for presentations, social media, or when you need individual pages as images. All conversion happens locally on your computer.
          </p>

          {/* Format Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <span className="text-sm text-muted-foreground">Features:</span>
            <div className="flex flex-wrap items-center justify-center gap-2">
              <span className="px-3 py-1.5 rounded-full bg-dc-surface border border-dc-border text-sm font-medium">
                PDF → PNG
              </span>
              <span className="px-3 py-1.5 rounded-full bg-dc-surface border border-dc-border text-sm font-medium">
                All Pages at Once
              </span>
              <span className="px-3 py-1.5 rounded-full bg-dc-surface border border-dc-border text-sm font-medium">
                High Resolution
              </span>
              <span className="px-3 py-1.5 rounded-full bg-dc-surface border border-dc-border text-sm font-medium">
                Batch Processing
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
              <a href="#get-started" onClick={() => trackDownloadRedirect('pdf_to_png_hero')}>
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
              Extract any page
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

export default PPHeroSection;
