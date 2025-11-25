import { FolderOpen, MessageSquare, Command, ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const KMHowItWorksSection = () => {
  const steps = [
    {
      icon: Download,
      title: "Install Desktop Commander",
      description: "Download the app and connect your preferred AI model (Claude, GPT-4, etc.)"
    },
    {
      icon: FolderOpen,
      title: "Point to your project folder",
      description: "Tell it where your files live—Obsidian vault, codebase, or any local folder"
    },
    {
      icon: MessageSquare,
      title: "Work naturally with your AI",
      description: "Ask questions, discuss ideas, get help—just like normal chat"
    },
    {
      icon: Command,
      title: "Use simple commands to manage your knowledge",
      description: '"Save this to my notes" • "Organize by topic" • "Update the README"'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-dc-card/30">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            How It Works
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Four simple steps to automated knowledge management
          </p>
        </div>

        {/* Flow Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
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

export default KMHowItWorksSection;
