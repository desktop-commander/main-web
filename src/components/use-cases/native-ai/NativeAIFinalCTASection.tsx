"use client";

import { Download } from "lucide-react";
import DownloadButtons from "@/components/shared/DownloadButtons";

const NativeAIFinalCTASection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6">
        <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-transparent rounded-2xl border border-primary/20 p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            The abstraction era is over
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Software built to protect you from complexity now protects your data from AI. Desktop Commander gives you a new foundation — local files, Git versioning, AI operations.
          </p>
          <p className="text-xl font-semibold text-primary mb-8">
            Work at the speed of AI. Not the speed of dashboards.
          </p>
          
          {/* Download Label */}
          <div className="flex items-center justify-center gap-2 mb-4">
            <Download className="w-5 h-5 text-primary" />
            <span className="text-lg font-semibold">Download Desktop Commander</span>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <DownloadButtons variant="hero" location="native_ai_final_cta" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NativeAIFinalCTASection;
