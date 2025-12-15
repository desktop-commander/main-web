import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const ADFinalCTASection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6">
        <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-transparent rounded-2xl border border-primary/20 p-8 md:p-12 text-center">
          
          {/* Headline */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Your spreadsheets have answers. Start asking questions.
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Desktop Commander gives you Python's power without Python's learning curve.
          </p>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" asChild className="group">
              <a href="/product/early-access/">
                Join the Waitlist
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>

          {/* Supporting Info */}
          <div className="flex flex-col items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-4">
              <span>Analyze locally</span>
              <span className="w-1 h-1 rounded-full bg-muted-foreground/50" />
              <span>Get accurate results</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ADFinalCTASection;
