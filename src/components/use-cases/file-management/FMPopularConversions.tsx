import { ArrowRight, Image, FileImage, Sparkles, FileType, File } from "lucide-react";

interface ConversionCard {
  title: string;
  description: string;
  href: string;
  icon: React.ElementType;
  badge?: string;
}

const FMPopularConversions = () => {
  const conversions: ConversionCard[] = [
    {
      title: "HEIC to JPG",
      description: "Convert iPhone photos to universally compatible JPG format. Batch process entire folders with one command.",
      href: "/use-cases/file-management/heic-to-jpg/",
      icon: Image,
      badge: "Most Popular"
    },
    {
      title: "HEIC to PNG",
      description: "Convert iPhone HEIC photos to PNG with lossless quality and transparency support. Perfect for creative work.",
      href: "/use-cases/file-management/heic-to-png/",
      icon: Image
    },
    {
      title: "PDF to PNG",
      description: "Extract pages from PDFs as high-quality PNG images. Perfect for presentations and social media sharing.",
      href: "/use-cases/file-management/pdf-to-png/",
      icon: File,
      badge: "New"
    },
    {
      title: "JFIF to JPG",
      description: "Convert confusing JFIF files to standard JPG instantly. JFIF is just JPEG with a different extension.",
      href: "/use-cases/file-management/jfif-to-jpg/",
      icon: FileType
    },
    {
      title: "WebP to JPG",
      description: "Convert WebP images downloaded from the web into JPG for easy sharing and editing.",
      href: "/use-cases/file-management/webp-to-jpg/",
      icon: FileImage
    },
    {
      title: "AVIF to JPG",
      description: "Convert next-gen AVIF images to widely supported JPG format when you need maximum compatibility.",
      href: "/use-cases/file-management/avif-to-jpg/",
      icon: Sparkles
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-dc-card/30 to-background">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Popular File Conversions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Step-by-step guides for common file management tasks
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {conversions.map((conversion, index) => (
            <a
              key={index}
              href={conversion.href}
              className="group relative p-6 rounded-2xl border border-dc-border bg-dc-card hover:border-primary/50 hover:bg-dc-surface transition-all"
            >
              {/* Badge */}
              {conversion.badge && (
                <span className="absolute top-4 right-4 px-2 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20">
                  {conversion.badge}
                </span>
              )}

              {/* Icon */}
              <div className="mb-4">
                <div className="inline-flex p-3 rounded-xl bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors">
                  <conversion.icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                {conversion.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {conversion.description}
              </p>

              {/* Arrow indicator */}
              <div className="flex items-center text-primary text-sm font-medium">
                <span>View guide</span>
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FMPopularConversions;
