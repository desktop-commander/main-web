import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Terminal, FileText, Zap, Shield, ArrowRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const UseCases = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Intersection Observer for scroll-triggered animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '-50px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const useCases = [
    {
      icon: Shield,
      title: "Manage your files",
      description: "Move, convert, and organize files using natural language.",
      href: "/use-cases/file-management/",
      linkText: "See how it works"
    },
    {
      icon: FileText,
      title: "Build your knowledge base",
      description: "Write and organize markdown files by talking to AI.",
      href: "/use-cases/knowledge-management/",
      linkText: "See how it works"
    },
    {
      icon: Zap,
      title: "Build software without coding",
      description: "Describe what you want—AI writes the code and saves it locally.",
      href: "/use-cases/build-prototype/",
      linkText: "See how it works"
    }
  ];

  return (
    <section ref={sectionRef} id="use-cases" className="py-16 md:py-24 bg-dc-surface/30">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        {/* Header - Mobile optimized */}
        <div className={`text-center mb-12 md:mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 md:mb-6 leading-tight">
            What you can do
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            From file operations to deployment pipelines—all through conversation
          </p>
        </div>

        {/* Use Cases Grid - Mobile responsive */}
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {useCases.map((useCase, index) => {
            const IconComponent = useCase.icon;
            const cardContent = (
              <CardContent className="p-6 sm:p-8 h-full flex flex-col">
                {/* Mobile: Vertical layout, Desktop: Horizontal with icon */}
                <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4 mb-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-dc-surface border border-dc-border rounded-xl group-hover:border-dc-blue/30 group-hover:bg-dc-blue/5 transition-all duration-300 flex-shrink-0 mx-auto sm:mx-0">
                    <IconComponent className="h-6 w-6 text-foreground group-hover:text-dc-blue transition-colors duration-300" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground text-center sm:text-left leading-tight">
                    {useCase.title}
                  </h3>
                </div>
                
                <p className="text-muted-foreground leading-relaxed text-center sm:text-left flex-grow">
                  {useCase.description}
                </p>

                {useCase.href && useCase.linkText && (
                  <div className="mt-4 text-center sm:text-left">
                    <span className="text-primary text-sm font-medium group-hover:underline inline-flex items-center gap-1">
                      {useCase.linkText}
                      <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                )}
              </CardContent>
            );

            const cardClasses = `group bg-background/50 border-dc-border hover:border-dc-blue/20 hover:bg-dc-blue/3 transition-all duration-300 hover:shadow-md hover:shadow-dc-blue/5 ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            } ${useCase.href ? 'cursor-pointer' : ''}`;

            const cardStyle = {
              transitionDelay: isVisible ? `${200 + index * 150}ms` : '0ms'
            };

            if (useCase.href) {
              return (
                <a key={index} href={useCase.href} className="block h-full">
                  <Card className={`${cardClasses} h-full`} style={cardStyle}>
                    {cardContent}
                  </Card>
                </a>
              );
            }

            return (
              <Card 
                key={index} 
                className={cardClasses}
                style={cardStyle}
              >
                {cardContent}
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA - Mobile optimized */}
        <div className={`text-center mt-12 md:mt-16 transition-all duration-1000 delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <p className="text-base sm:text-lg text-muted-foreground mb-6 px-4 sm:px-0">
            Try these use cases with Desktop Commander
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4 sm:px-0">
            <Button 
              variant="hero" 
              size="lg" 
              className="w-full sm:w-auto transition-all duration-300 hover:scale-105 active:scale-95" 
              asChild
            >
              <a href="./#installation" className="flex items-center justify-center gap-2">
                <Terminal className="h-5 w-5" />
                Start Building
              </a>
            </Button>
            <a 
              href="/library"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 border border-dc-border text-foreground rounded-lg font-medium hover:bg-dc-surface/50 transition-all duration-300 hover:scale-105 active:scale-95 text-center"
            >
              Browse 60+ Prompts to use with DC
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default UseCases;