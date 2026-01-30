import { Download } from "lucide-react";
import DownloadButtons from "@/components/shared/DownloadButtons";

const WJFinalCTASection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6">
        <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-transparent rounded-2xl border border-primary/20 p-8 md:p-12 text-center">
          
          {/* Headline */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Convert WebP images the easy way.
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            No uploads, no waiting, no limits. Just instant local conversion to JPG or any format you need.
          </p>

          {/* Download Label */}
          <div className="flex items-center justify-center gap-2 mb-4">
            <Download className="w-5 h-5 text-primary" />
            <span className="text-lg font-semibold">Download Desktop Commander</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <DownloadButtons variant="hero" location="webp_to_jpg" />
          </div>

          {/* Supporting Info */}
          <div className="flex flex-col items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-4">
              <span>Free forever</span>
              <span className="w-1 h-1 rounded-full bg-muted-foreground/50" />
              <span>No account needed</span>
              <span className="w-1 h-1 rounded-full bg-muted-foreground/50" />
              <span>Mac & Windows</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WJFinalCTASection;
