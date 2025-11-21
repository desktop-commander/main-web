import { Download, MessageSquare, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HowItWorksFlowSection = () => {
  const steps = [
    {
      icon: Download,
      title: "Install and open Desktop Commander",
      description: "One-time setup takes less than a minute"
    },
    {
      icon: MessageSquare,
      title: "Ask in natural language what you need",
      description: "Just describe what you want in plain English"
    },
    {
      icon: Sparkles,
      title: "See everything done automatically on your computer",
      description: "Files organized, converted, or analyzed—instantly"
    }
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            How It Works
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Three simple steps to manage your files
          </p>
        </div>

        {/* Flow Steps */}
        <div className="grid md:grid-cols-3 gap-8 relative">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Step Card */}
              <div className="flex flex-col items-center text-center">
                {/* Icon */}
                <div className="w-20 h-20 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center mb-6">
                  <step.icon className="w-10 h-10 text-primary" />
                </div>

                {/* Number */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                  {index + 1}
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-3">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground">
                  {step.description}
                </p>
              </div>


            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-12">
          <Button 
            size="lg" 
            asChild
            className="group"
          >
            <a href="#get-started">
              <Download className="w-5 h-5" />
              Get Started Now
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksFlowSection;
