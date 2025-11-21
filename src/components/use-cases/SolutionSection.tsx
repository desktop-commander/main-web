import { Shield, Folder, FileImage, Database, FolderSearch } from "lucide-react";

const SolutionSection = () => {
  const features = [
    {
      title: "Find and organize files by describing them",
      description: '"Find all invoices from Q3 and move them to my accounting folder" → Desktop Commander locates them and organizes them for you.',
      icon: FolderSearch,
      videoPlaceholder: "Demo: Organizing files by natural language"
    },
    {
      title: "Convert any file format instantly",
      description: '"Convert these HEIC photos to JPG" → Done instantly, without uploading to random websites or installing bloatware. Works with HEIC to JPG, PDF to Word, image formats, and more.',
      icon: FileImage,
      videoPlaceholder: "Demo: Converting HEIC to JPG"
    },
    {
      title: "Clean up folders with simple instructions",
      description: '"Organize my downloads folder by file type" → Your files are sorted exactly how you\'d like them.',
      icon: Folder,
      videoPlaceholder: "Demo: Auto-organizing downloads"
    },
    {
      title: "Analyze data files directly",
      description: '"Show me the trends in this CSV" or "What are the totals in this Excel file?" → Desktop Commander reads and analyzes spreadsheets, data files, and documents without opening multiple programs.',
      icon: Database,
      videoPlaceholder: "Demo: Analyzing CSV data"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-dc-card/30">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          {/* Time-saving badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary mb-6">
            <span>70% of our users save 3+ hours per week</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Work with your files directly
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Desktop Commander connects your AI assistant directly to files on your computer. 
            Files are processed through your trusted AI provider—no random third-party conversion sites, no downloading and re-uploading.
          </p>
        </div>

        {/* Features grid */}
        <div className="space-y-12">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="grid lg:grid-cols-2 gap-8 items-center"
            >
              {/* Content */}
              <div className={`space-y-4 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-primary/10 border border-primary/20">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold">{feature.title}</h3>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Video */}
              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="relative aspect-video rounded-xl border border-dc-border bg-dc-surface overflow-hidden group">
                  {index === 0 ? (
                    // First feature: Move files video
                    <video 
                      className="w-full h-full object-cover" 
                      autoPlay
                      loop 
                      muted 
                      playsInline
                      controls
                    >
                      <source src="/videos/move-files-demo.mp4" type="video/mp4" />
                      Your browser doesn't support video playback.
                    </video>
                  ) : index === 1 ? (
                    // Second feature: Convert files video
                    <video 
                      className="w-full h-full object-cover" 
                      autoPlay
                      loop 
                      muted 
                      playsInline
                      controls
                    >
                      <source src="/videos/convert-files-demo.mp4" type="video/mp4" />
                      Your browser doesn't support video playback.
                    </video>
                  ) : index === 2 ? (
                    // Third feature: Organize downloads video
                    <video 
                      className="w-full h-full object-cover" 
                      autoPlay
                      loop 
                      muted 
                      playsInline
                      controls
                    >
                      <source src="/videos/organize-downloads-demo.mp4" type="video/mp4" />
                      Your browser doesn't support video playback.
                    </video>
                  ) : (
                    // Fourth feature: Analyze data video
                    <video 
                      className="w-full h-full object-cover" 
                      autoPlay
                      loop 
                      muted 
                      playsInline
                      controls
                    >
                      <source src="/videos/analyze-data-demo.mp4" type="video/mp4" />
                      Your browser doesn't support video playback.
                    </video>
                  )}
                </div>
                
                {/* Command example below video */}
                <div className="mt-4 p-4 rounded-lg bg-dc-surface border border-dc-border">
                  <p className="text-xs font-medium text-muted-foreground mb-2">Try this command in Desktop Commander app:</p>
                  <p className="text-sm font-mono text-foreground">
                    {index === 0 ? '"Find all invoices from Q3 and move them to my accounting folder"' : 
                     index === 1 ? '"Convert these HEIC photos to JPG"' : 
                     index === 2 ? '"Organize my downloads folder by file type"' : 
                     '"Show me the trends in this CSV"'}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Key Benefits - More prominent section */}
        <div className="mt-24 pt-12 border-t border-dc-border">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold">The smarter way to manage your files</h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Save Time */}
            <div className="p-8 rounded-2xl bg-gradient-to-b from-dc-surface to-dc-card border-2 border-dc-border hover:border-primary/50 transition-colors text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 border-2 border-primary/20 flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Save time</h3>
              <p className="text-muted-foreground">
                70% users save 3+ hours per week using DC
              </p>
            </div>

            {/* Keep Files Secure */}
            <div className="p-8 rounded-2xl bg-gradient-to-b from-dc-surface to-dc-card border-2 border-dc-border hover:border-primary/50 transition-colors text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 border-2 border-primary/20 flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🔒</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Keep files secure</h3>
              <p className="text-muted-foreground">
                Do not use random websites to work with your files
              </p>
            </div>

            {/* Do It All in One App */}
            <div className="p-8 rounded-2xl bg-gradient-to-b from-dc-surface to-dc-card border-2 border-dc-border hover:border-primary/50 transition-colors text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 border-2 border-primary/20 flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Do it all in one app</h3>
              <p className="text-muted-foreground">
                Manage all file operations - from converting to moving files with AI
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
