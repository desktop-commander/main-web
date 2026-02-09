import { Zap, FolderOpen, Sliders } from "lucide-react";

const PJSolutionSection = () => {
  const features = [
    {
      title: "Batch convert instantly",
      description: "Select a folder with hundreds of PNGs. Desktop Commander converts them all at once — watch your file sizes shrink dramatically.",
      icon: Zap,
      command: '"Convert all PNG files in my Screenshots folder to JPG"',
      result: "142 files converted — saved 1.2GB of space"
    },
    {
      title: "Organize while converting",
      description: "Don't just convert — move to new folders, rename by date, or sort by size. One command handles the entire workflow.",
      icon: FolderOpen,
      command: '"Convert these PNGs to JPG and organize by month"',
      result: "Files sorted into Jan/, Feb/, Mar/ folders"
    },
    {
      title: "Control your quality",
      description: "Need smaller files? Want maximum quality? Just say so. Desktop Commander adjusts compression to match your needs.",
      icon: Sliders,
      command: '"Convert to JPG at 85% quality for web use"',
      result: "Optimized for web — perfect balance of size and quality"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-dc-card/30">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Describe what you want. It handles the rest.
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            No settings to configure. No software to learn. Just tell Desktop Commander what you need in plain English.
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
            aria-label="Desktop Commander converting PNG to JPG - batch conversion demo"
            title="Convert PNG to JPG with natural language - Desktop Commander demo"
          >
            <source src="/videos/file-conversion-demo.mp4" type="video/mp4" />
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

export default PJSolutionSection;
