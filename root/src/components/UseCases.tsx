import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Terminal, FileText, Zap, Shield, GitBranch, Cloud } from "lucide-react";

const UseCases = () => {
  const useCases = [
    {
      icon: Cloud,
      title: "Set up infrastructure through conversation",
      description: "Deploy servers, configure databases, and orchestrate cloud services without memorizing complex CLI commands."
    },
    {
      icon: Terminal,
      title: "Explore and debug codebases",
      description: "Navigate complex repositories, trace issues, and fix problems through intelligent analysis."
    },
    {
      icon: FileText,
      title: "Build and maintain documentation or context",
      description: "Create reusable project context that makes every AI interaction smarter."
    },
    {
      icon: Shield,
      title: "Organize and manage your files",
      description: "Navigate, search, and organize your local files through natural conversation."
    },
    {
      icon: Zap,
      title: "Build prototypes and applications locally",
      description: "Transform ideas into working software through natural conversation."
    },
    {
      icon: GitBranch,
      title: "Automate workflows in natural language",
      description: "From invoice processing to email campaigns, describe what you want automated."
    }
  ];

  return (
    <section id="use-cases" className="py-24 bg-dc-surface/30">
      <div className="container mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Transform your workflow today
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From simple file operations to complex deployment pipelines, Desktop Commander handles it all through natural conversation
          </p>
        </div>

        {/* Use Cases Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => {
            const IconComponent = useCase.icon;
            return (
              <Card key={index} className="group bg-background/50 border-dc-border hover:border-dc-blue/30 hover:bg-dc-blue/5 transition-all duration-300 hover:shadow-lg hover:shadow-dc-blue/10 hover:scale-105 cursor-pointer">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-dc-surface border border-dc-border rounded-xl group-hover:border-dc-blue/40 group-hover:bg-dc-blue/10 group-hover:scale-110 transition-all duration-300">
                      <IconComponent className="h-6 w-6 text-foreground group-hover:text-dc-blue transition-colors duration-300" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {useCase.title}
                    </h3>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {useCase.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Install Desktop Commander and see how it handles these use cases
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="lg" asChild>
              <a href="#installation">
                <Terminal className="h-5 w-5" />
                Start Building
              </a>
            </Button>
            <a 
              href="https://library.desktopcommander.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-dc-border text-foreground rounded-lg font-medium hover:bg-dc-surface/50 transition-colors"
            >
              Browse 60+ Prompts to use with DC
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;