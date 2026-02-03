import { Zap, FolderOpen, RefreshCw } from "lucide-react";

const JJSolutionSection = () => {
  const features = [
    {
      title: "Fix the extension instantly",
      description: "JFIF files are already JPEGs — they just have the wrong extension. Desktop Commander renames them properly so every app recognizes them.",
      icon: Zap,
      command: '"Convert all JFIF files in my Downloads to JPG"',
      result: "All files renamed to .jpg — instantly usable"
    },
    {
      title: "Batch process entire folders",
      description: "Got dozens of JFIF files from message backups or web downloads? Convert them all at once. No clicking through dialogs or uploading one by one.",
      icon: FolderOpen,
      command: '"Fix all the JFIF files in my WhatsApp backup folder"',
      result: "247 files converted to JPG in 3 seconds"
    },
    {
      title: "Clean up and organize",
      description: "Don't just convert — organize. Move your fixed images to specific folders, rename them with dates, or sort by type. All in one command.",
      icon: RefreshCw,
      command: '"Convert these JFIF files to JPG and organize by date"',
      result: "Files converted and sorted into dated folders"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-dc-card/30">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Tell it what you need. It handles the rest.
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            No technical knowledge required. Just describe what you want in plain English.
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

export default JJSolutionSection;
