import { Check, Download } from "lucide-react";
import DownloadButtons from "@/components/shared/DownloadButtons";

const KMFinalCTASection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6">
        <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-transparent rounded-2xl border border-primary/20 p-8 md:p-12 text-center">
          {/* Headline */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Your knowledge deserves better than copy-paste.
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Desktop Commander transforms AI conversations into permanent, organized knowledge. 
            Stop losing valuable insights to closed browser tabs—build a knowledge base that maintains itself.
          </p>

          {/* Download Label */}
          <div className="flex items-center justify-center gap-2 mb-4">
            <Download className="w-5 h-5 text-primary" />
            <span className="text-lg font-semibold">Download Desktop Commander</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <DownloadButtons variant="hero" location="knowledge_management" />
          </div>

          {/* Tool badges */}
          <div className="flex flex-col items-center gap-4 text-sm text-muted-foreground">
            <div className="flex flex-wrap items-center justify-center gap-2">
              <span>Works with:</span>
              <span className="px-2 py-1 rounded bg-dc-surface border border-dc-border">Obsidian</span>
              <span className="px-2 py-1 rounded bg-dc-surface border border-dc-border">Google Drive</span>
              <span className="px-2 py-1 rounded bg-dc-surface border border-dc-border">VS Code</span>
              <span className="px-2 py-1 rounded bg-dc-surface border border-dc-border">Local Files</span>
            </div>
            <div className="flex items-center gap-2 text-primary">
              <Check className="w-4 h-4" />
              <span>Turn conversations into knowledge. Automatically.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KMFinalCTASection;
