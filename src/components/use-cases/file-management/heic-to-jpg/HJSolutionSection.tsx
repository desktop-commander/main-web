import { Zap, FolderOpen, Lock } from "lucide-react";

const HJSolutionSection = () => {
  const features = [
    {
      title: "Batch convert in seconds",
      description: "Select a folder with HEIC files. Desktop Commander converts them all at once — no clicking through dialogs or waiting for uploads.",
      icon: Zap,
      command: '"Convert all HEIC files in my Photos folder to JPG"',
      result: "All files converted successfully"
    },
    {
      title: "Organize as you convert",
      description: "Don't just convert — sort into folders, rename with dates, or move to specific locations. One command does it all.",
      icon: FolderOpen,
      command: '"Convert my vacation photos to JPG and organize by month"',
      result: "Photos sorted into June/, July/, August/ folders"
    },
    {
      title: "Your photos stay private",
      description: "Unlike online converters, nothing leaves your computer. No uploads, no cloud processing, no data collection. Just local conversion.",
      icon: Lock,
      command: '"Convert these family photos to JPG"',
      result: "Converted locally — zero data sent anywhere"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-dc-card/30">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Just tell it what you need. It handles the rest.
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            No menus. No settings. No figuring out which app to use. Just describe what you want in plain English.
          </p>
        </div>

        {/* Video Demo */}
        <div className="relative aspect-video rounded-xl border border-dc-border bg-dc-surface overflow-hidden max-w-4xl mx-auto shadow-lg mb-16">
          <video
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            aria-label="Desktop Commander converting HEIC photos to JPG - batch conversion demo"
            title="Convert HEIC to JPG with natural language - Desktop Commander demo"
          >
            <source src="/videos/heic-to-jpg-demo.mp4" type="video/mp4" />
            <p className="text-muted-foreground">Your browser does not support the video tag.</p>
          </video>
        </div>

        {/* Features */}
        <div className="space-y-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="p-8 rounded-2xl bg-gradient-to-b from-dc-surface to-dc-card border border-dc-border"
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                <div className="flex-1">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {feature.description}
                  </p>
                </div>
                <div className="lg:w-96 space-y-3">
                  <div className="p-4 rounded-lg bg-dc-surface border border-dc-border">
                    <p className="text-sm text-muted-foreground mb-1">You say:</p>
                    <p className="font-mono text-sm text-primary">{feature.command}</p>
                  </div>
                  <div className="p-4 rounded-lg bg-green-500/5 border border-green-500/20">
                    <p className="text-sm text-muted-foreground mb-1">Result:</p>
                    <p className="text-sm text-green-400">{feature.result}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HJSolutionSection;
