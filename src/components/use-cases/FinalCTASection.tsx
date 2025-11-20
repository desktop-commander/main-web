import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Check } from "lucide-react";

const FinalCTASection = () => {

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6">
        <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-transparent rounded-2xl border border-primary/20 p-8 md:p-12 text-center">
          {/* Headline */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Your files are on your computer. <br />
            <span className="text-primary">Managing them should be simple.</span>
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Desktop Commander is the file organizer that works the way you think—through natural 
            language instead of complex commands.
          </p>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
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

          {/* Platform and privacy info */}
          <div className="flex flex-col items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-4">
              <span>Works on Mac</span>
              <span className="w-1 h-1 rounded-full bg-muted-foreground/50" />
              <span>Windows</span>
              <span className="w-1 h-1 rounded-full bg-muted-foreground/50" />
              <span>Linux</span>
            </div>
            <div className="flex items-center gap-2 text-primary">
              <Check className="w-4 h-4" />
              <span>Your files stay private on your machine</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
