import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CAHeroSection = () => {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-20">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight max-w-4xl">
            Control your apps and services <span className="text-primary">through chat</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl leading-relaxed">
            Connect Desktop Commander to 100+ tools you already use. Manage your CRM, publish content, check analytics, and more — all in natural language.
          </p>

          {/* Tool Integration Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <span className="text-sm text-muted-foreground">Works with:</span>
            <div className="flex flex-wrap items-center justify-center gap-2">
              <span className="px-3 py-1.5 rounded-full bg-dc-surface border border-dc-border text-sm font-medium">
                HubSpot
              </span>
              <span className="px-3 py-1.5 rounded-full bg-dc-surface border border-dc-border text-sm font-medium">
                WordPress
              </span>
              <span className="px-3 py-1.5 rounded-full bg-dc-surface border border-dc-border text-sm font-medium">
                Google Analytics
              </span>
              <span className="px-3 py-1.5 rounded-full bg-dc-surface border border-dc-border text-sm font-medium">
                GitHub
              </span>
              <span className="px-3 py-1.5 rounded-full bg-dc-surface border border-dc-border text-sm font-medium">
                Ahrefs
              </span>
              <span className="px-3 py-1.5 rounded-full bg-dc-surface border border-dc-border text-sm font-medium">
                + 100 more
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
              <a href="/product/early-access/">
                Join the Waitlist
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CAHeroSection;
