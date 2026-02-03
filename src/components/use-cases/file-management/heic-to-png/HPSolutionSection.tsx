import { Zap, FolderOpen, Sparkles } from "lucide-react";

const HPSolutionSection = () => {
  const features = [
    {
      title: "Lossless conversion in seconds",
      description: "Get PNG files with full quality preserved. No compression artifacts, no quality loss — just clean, crisp images ready for any use.",
      icon: Zap,
      command: '"Convert all HEIC files in my Screenshots folder to PNG"',
      result: "All files converted with original quality preserved"
    },
    {
      title: "Batch convert and organize",
      description: "Convert hundreds of photos at once while organizing them into folders. Sort by date, rename by project, or move to specific directories — all in one command.",
      icon: FolderOpen,
      command: '"Convert my product photos to PNG and put them in the Marketing folder"',
      result: "Photos converted and organized into Marketing/"
    },
    {
      title: "Perfect for creative work",
      description: "PNG supports transparency and is universally compatible with design tools, web platforms, and editing software. Get your iPhone photos ready for Figma, Photoshop, or your website.",
      icon: Sparkles,
      command: '"Convert these app screenshots to PNG for the website"',
      result: "Screenshots ready for web use"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-dc-card/30">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Just describe what you need. Done.
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            No settings to configure. No apps to learn. Just tell Desktop Commander what you want in plain English.
          </p>
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

export default HPSolutionSection;
