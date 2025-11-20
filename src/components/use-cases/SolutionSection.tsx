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
      title: "Convert any file format instantly—privately",
      description: '"Convert these HEIC photos to JPG" → Done instantly, without uploading to random websites or installing bloatware. Works with HEIC to JPG, PDF to Word, image formats, and more. Your files never leave your computer.',
      icon: FileImage,
      videoPlaceholder: "Demo: Converting HEIC to JPG locally"
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Work with your files on your local machine
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Desktop Commander is your AI-powered file organizer that connects directly to your files. 
            It works with your actual files on your computer—no uploading, no cloud copies, everything stays local on your machine.
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
              </div>
            </div>
          ))}
        </div>

        {/* Privacy callout */}
        <div className="mt-16 p-6 md:p-8 rounded-2xl bg-primary/5 border border-primary/20">
          <div className="flex items-start gap-4">
            <div className="p-2 rounded-lg bg-primary/10 shrink-0">
              <Shield className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-lg font-medium mb-2">
                ✅ Complete privacy. Everything happens on your computer.
              </p>
              <p className="text-muted-foreground">
                Your files never leave your machine—Desktop Commander simply helps you manage what's already yours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
