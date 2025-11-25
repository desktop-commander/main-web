import { BookOpen, RefreshCw, FolderTree, Network, Sparkles, FileEdit, Move, Download, FolderOpen, MessageSquare, Command, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";

const KMSolutionSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch(() => {
              // Autoplay may be blocked by browser, that's ok
            });
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(video);

    return () => observer.disconnect();
  }, []);

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

  const features = [
    {
      title: "Turn conversations into permanent knowledge",
      command: "Save this explanation to my notes",
      icon: BookOpen
    },
    {
      title: "Keep documentation synchronized",
      command: "Update the README based on our changes",
      icon: RefreshCw
    },
    {
      title: "Organize without manual filing",
      command: "Move meeting notes to Q4 folder",
      icon: FolderTree
    },
    {
      title: "Build living knowledge bases",
      command: "Create a technical spec from our discussion",
      icon: Network
    }
  ];

  const benefits = [
    {
      icon: Sparkles,
      title: "Never lose valuable insights",
      description: "Every useful answer can be instantly saved to your knowledge base"
    },
    {
      icon: FileEdit,
      title: "Self-maintaining documentation",
      description: "Your notes and docs update themselves based on your work"
    },
    {
      icon: Move,
      title: "End context switching",
      description: "Work with your AI and your files in one unified flow"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-dc-card/30">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            How Desktop Commander Solves It
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Desktop Commander doesn't just read your files—it writes, edits, and organizes them directly.
          </p>
        </div>

        {/* 4 Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="relative flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center mb-4">
                <step.icon className="w-8 h-8 text-primary" />
              </div>
              <div className="absolute top-0 left-1/2 translate-x-4 -translate-y-1 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xs">
                {index + 1}
              </div>
              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
              <p className="text-muted-foreground text-sm">{step.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-10">
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

        {/* Divider + Benefits Header */}
        <div className="my-16 text-center">
          <div className="w-16 h-px bg-dc-border mx-auto mb-8" />
          <h3 className="text-2xl md:text-3xl font-bold mb-4">What you get</h3>
        </div>

        {/* Key Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="p-6 rounded-2xl bg-gradient-to-b from-dc-surface to-dc-card border-2 border-dc-border hover:border-primary/50 transition-colors text-center"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 border-2 border-primary/20 flex items-center justify-center mx-auto mb-4">
                <benefit.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Video Section */}
        <div className="mb-20">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold">
              See it in action
            </h3>
          </div>
          <div className="relative aspect-video w-full rounded-2xl border-2 border-dc-border bg-dc-card overflow-hidden">
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              controls
              muted
              loop
              preload="metadata"
              playsInline
              title="Desktop Commander Knowledge Management Demo - Create and organize notes with AI"
              aria-label="Video demonstration of Desktop Commander creating and managing knowledge base notes using natural language commands"
            >
              <source src="/videos/knowledge-management-demo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <p className="text-center text-sm text-muted-foreground mt-4">
            Create, update, and organize your knowledge base with simple commands
          </p>
        </div>

        {/* Features - 2x2 Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="p-6 rounded-xl bg-dc-surface border border-dc-border hover:border-primary/30 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
                  <feature.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground font-mono text-sm">"{feature.command}"</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KMSolutionSection;
