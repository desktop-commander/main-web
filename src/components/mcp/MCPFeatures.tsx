import { useState, useEffect, useRef } from "react";
import { 
  FolderOpen, 
  Terminal, 
  FileEdit, 
  Search, 
  Settings, 
  GitBranch 
} from "lucide-react";

const features = [
  {
    icon: FolderOpen,
    title: "File System Access",
    description: "Read, write, move, and organize files and directories with full path control."
  },
  {
    icon: Terminal,
    title: "Terminal Commands",
    description: "Execute shell commands, run scripts, and manage processes directly."
  },
  {
    icon: FileEdit,
    title: "Code Editing",
    description: "Make surgical edits to code files with precise find-and-replace operations."
  },
  {
    icon: Search,
    title: "File Search",
    description: "Search file contents and names across your entire project structure."
  },
  {
    icon: Settings,
    title: "Configurable",
    description: "Set allowed directories, blocked commands, and custom shell preferences."
  },
  {
    icon: GitBranch,
    title: "Process Management",
    description: "Start, monitor, and interact with long-running processes and REPLs."
  }
];

const MCPFeatures = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1, rootMargin: '-50px' }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 md:py-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        {/* Header */}
        <div className={`text-center mb-12 transition-all duration-800 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
            What MCP can do
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Desktop Commander MCP gives AI assistants powerful tools to work with your local system.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className={`p-6 bg-dc-surface border border-dc-border rounded-xl transition-all duration-500 hover:border-dc-accent/30 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: isVisible ? `${200 + index * 100}ms` : '0ms' }}
              >
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Compatibility note */}
        <div className={`mt-12 text-center transition-all duration-800 delay-600 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <p className="text-sm text-muted-foreground">
            Works with Claude Desktop, Cursor, Windsurf, and any MCP-compatible client.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MCPFeatures;
