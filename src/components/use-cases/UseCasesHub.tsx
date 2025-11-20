import { Button } from "@/components/ui/button";
import { ArrowRight, Folder, Database, Code, Zap, FileText, Server } from "lucide-react";
import { LucideIcon } from "lucide-react";

interface UseCaseCategory {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  color: string;
}

const UseCasesHub = () => {
  const categories: UseCaseCategory[] = [
    {
      title: "File Management",
      description: "Organize, convert, and manage files efficiently",
      icon: Folder,
      href: "/use-cases/file-management/",
      color: "text-blue-500"
    },
    {
      title: "Data Analysis",
      description: "Process and analyze CSV, JSON, and log files",
      icon: Database,
      href: "/use-cases/data-analysis/",
      color: "text-green-500"
    },
    {
      title: "Development",
      description: "Build features, debug, and refactor code",
      icon: Code,
      href: "/use-cases/development/",
      color: "text-purple-500"
    },
    {
      title: "Automation",
      description: "Automate repetitive tasks and workflows",
      icon: Zap,
      href: "/use-cases/automation/",
      color: "text-yellow-500"
    },
    {
      title: "Content Creation",
      description: "Write, document, and research with AI",
      icon: FileText,
      href: "/use-cases/content-creation/",
      color: "text-pink-500"
    },
    {
      title: "DevOps",
      description: "Deploy, monitor, and manage infrastructure",
      icon: Server,
      href: "/use-cases/devops/",
      color: "text-orange-500"
    }
  ];

  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            What can Desktop Commander{" "}
            <span className="text-primary">help you with?</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground">
            From file management to development workflows, discover how Desktop Commander 
            can simplify your daily tasks with AI-powered automation.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <a
              key={index}
              href={category.href}
              className="group relative p-8 rounded-2xl border border-dc-border bg-dc-card hover:border-primary/50 hover:bg-dc-surface transition-all"
            >
              {/* Icon */}
              <div className="mb-4">
                <div className="inline-flex p-3 rounded-xl bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors">
                  <category.icon className={`w-6 h-6 ${category.color} group-hover:scale-110 transition-transform`} />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">
                {category.title}
              </h3>
              <p className="text-muted-foreground mb-4">
                {category.description}
              </p>

              {/* Arrow indicator */}
              <div className="flex items-center text-primary text-sm font-medium">
                <span>Explore</span>
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasesHub;
