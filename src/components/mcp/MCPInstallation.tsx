import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Copy, ChevronRight } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useState, useEffect, useRef } from "react";
import { useAnalyticsAstro } from "@/hooks/useAnalyticsAstro";

const requirements = [
  { text: "Node.js version >= v18.0.0", downloadUrl: "https://nodejs.org/en/download" },
  { text: "Claude Desktop", downloadUrl: "https://claude.ai/download" }
];

const installationOptions = [
  {
    platform: ["MacOS"],
    method: "Bash Install",
    description: "Run this in Terminal:",
    command: "curl -fsSL https://raw.githubusercontent.com/wonderwhy-er/DesktopCommanderMCP/refs/heads/main/install.sh | bash",
    available: true
  },
  {
    platform: ["Windows", "MacOS"],
    method: "NPX Install",
    description: "Run this in Terminal/Command Prompt:",
    command: "npx @wonderwhy-er/desktop-commander@latest setup",
    available: true
  }
];

const MCPInstallation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [openModal, setOpenModal] = useState<string | null>(null);
  const [copiedCommand, setCopiedCommand] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const { trackCustomEvent } = useAnalyticsAstro();

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

  const copyCommand = (command: string, method: string) => {
    navigator.clipboard.writeText(command);
    setCopiedCommand(method);
    setTimeout(() => setCopiedCommand(null), 2000);
    trackCustomEvent('copy_command_clicked', {
      button_location: 'mcp_installation',
      installation_method: method,
      command
    });
  };

  const moreOptions = [
    { 
      name: "Install via Smithery", 
      description: "One-click install through Smithery",
      content: (
        <div className="space-y-4">
          <p className="text-muted-foreground">Install via the Smithery web interface:</p>
          <ol className="space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-xs font-bold text-primary">1</span>
              <div>
                Visit <a href="https://smithery.ai/server/@wonderwhy-er/desktop-commander" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">smithery.ai/server/@wonderwhy-er/desktop-commander</a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-xs font-bold text-primary">2</span>
              <div>Login to Smithery and select your client (Claude Desktop)</div>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-xs font-bold text-primary">3</span>
              <div>Install with the provided key, then restart Claude Desktop</div>
            </li>
          </ol>
        </div>
      )
    },
    { 
      name: "Install in Cursor", 
      description: "One-click setup for Cursor IDE",
      content: (
        <div className="space-y-4">
          <p className="text-muted-foreground">Install Desktop Commander in Cursor with one click:</p>
          <a 
            href="cursor://anysphere.cursor-deeplink/mcp/install?name=desktop-commander&config=eyJjb21tYW5kIjoibnB4IC15IEB3b25kZXJ3aHktZXIvZGVza3RvcC1jb21tYW5kZXJAbGF0ZXN0In0%3D" 
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium"
          >
            Install in Cursor
            <ArrowRight className="h-4 w-4" />
          </a>
          <p className="text-sm text-muted-foreground">Make sure Cursor IDE is installed before clicking.</p>
        </div>
      )
    },
    { 
      name: "Install using Docker", 
      description: "Sandboxed container deployment",
      content: (
        <div className="space-y-4">
          <p className="text-muted-foreground">Run in a sandboxed Docker container — no Node.js required:</p>
          <div className="space-y-3">
            <div>
              <p className="text-sm font-medium text-foreground mb-2">macOS/Linux:</p>
              <div className="bg-background border border-dc-border rounded-lg p-3 font-mono text-xs relative">
                <code className="text-primary break-all pr-8 block">bash &lt;(curl -fsSL https://raw.githubusercontent.com/wonderwhy-er/DesktopCommanderMCP/refs/heads/main/install-docker.sh)</code>
                <Button variant="ghost" size="sm" className="absolute top-2 right-2 h-5 w-5 p-0" onClick={() => copyCommand("bash <(curl -fsSL https://raw.githubusercontent.com/wonderwhy-er/DesktopCommanderMCP/refs/heads/main/install-docker.sh)", "Docker macOS")}>
                  <Copy className="h-3 w-3" />
                </Button>
              </div>
            </div>
            <div>
              <p className="text-sm font-medium text-foreground mb-2">Windows PowerShell:</p>
              <div className="bg-background border border-dc-border rounded-lg p-3 font-mono text-xs relative">
                <code className="text-primary break-all pr-8 block">iex ((New-Object System.Net.WebClient).DownloadString('https://raw.githubusercontent.com/wonderwhy-er/DesktopCommanderMCP/refs/heads/main/install-docker.ps1'))</code>
                <Button variant="ghost" size="sm" className="absolute top-2 right-2 h-5 w-5 p-0" onClick={() => copyCommand("iex ((New-Object System.Net.WebClient).DownloadString('https://raw.githubusercontent.com/wonderwhy-er/DesktopCommanderMCP/refs/heads/main/install-docker.ps1'))", "Docker Windows")}>
                  <Copy className="h-3 w-3" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      )
    },
    { 
      name: "Manual configuration", 
      description: "Add to claude_desktop_config.json",
      content: (
        <div className="space-y-4">
          <p className="text-muted-foreground">Add this to your claude_desktop_config.json:</p>
          <div className="bg-background border border-dc-border rounded-lg p-3 font-mono text-xs relative overflow-x-auto">
            <code className="text-primary whitespace-pre block">{`{
  "mcpServers": {
    "desktop-commander": {
      "command": "npx",
      "args": ["-y", "@wonderwhy-er/desktop-commander@latest"]
    }
  }
}`}</code>
            <Button variant="ghost" size="sm" className="absolute top-2 right-2 h-5 w-5 p-0" onClick={() => copyCommand(`{"mcpServers":{"desktop-commander":{"command":"npx","args":["-y","@wonderwhy-er/desktop-commander@latest"]}}}`, "Manual")}>
              <Copy className="h-3 w-3" />
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">Restart Claude Desktop after adding the configuration.</p>
        </div>
      )
    },
    { 
      name: "Local development", 
      description: "Clone and build from source",
      content: (
        <div className="space-y-4">
          <p className="text-muted-foreground">Clone and build locally:</p>
          <div className="bg-background border border-dc-border rounded-lg p-3 font-mono text-xs relative">
            <code className="text-primary whitespace-pre block">{`git clone https://github.com/wonderwhy-er/DesktopCommanderMCP
cd DesktopCommanderMCP
npm run setup`}</code>
            <Button variant="ghost" size="sm" className="absolute top-2 right-2 h-5 w-5 p-0" onClick={() => copyCommand("git clone https://github.com/wonderwhy-er/DesktopCommanderMCP\ncd DesktopCommanderMCP\nnpm run setup", "Local")}>
              <Copy className="h-3 w-3" />
            </Button>
          </div>
        </div>
      )
    }
  ];

  return (
    <section ref={sectionRef} id="installation" className="py-16 md:py-24 bg-dc-surface/30 scroll-mt-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        {/* Header */}
        <div className={`text-center mb-10 transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">Installation</h2>
          <p className="text-lg text-muted-foreground">Choose your preferred installation method</p>
        </div>

        {/* Requirements */}
        <div className={`mb-8 transition-all duration-800 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="max-w-4xl mx-auto px-4">
            <h3 className="text-sm font-medium text-muted-foreground mb-3 uppercase tracking-wide">Requirements</h3>
            <div className="flex flex-wrap gap-4">
              {requirements.map((req, i) => (
                <a key={i} href={req.downloadUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                  <Check className="h-4 w-4 text-green-500" />
                  {req.text}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Main Options */}
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto mb-8 transition-all duration-800 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {installationOptions.map((option, index) => (
            <Card key={index} className="p-6 bg-dc-card border-2 border-primary/30 hover:border-primary/50 transition-all duration-300">
              <div className="text-center mb-4">
                <h4 className="text-xl font-semibold text-foreground mb-2">{option.method}</h4>
                <div className="flex gap-2 justify-center flex-wrap">
                  {option.platform.map((p, i) => (
                    <span key={i} className="px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary">{p}</span>
                  ))}
                  <span className="px-3 py-1 rounded-full text-sm font-medium bg-green-500/10 text-green-400 border border-green-500/20">Claude Desktop</span>
                </div>
              </div>
              <p className="text-muted-foreground mb-4 text-center text-sm">{option.description}</p>
              <div className="bg-background border border-dc-border rounded-lg p-4 font-mono text-sm relative">
                <code className="text-primary break-all pr-8 block">{option.command}</code>
                <Button variant="ghost" size="sm" className="absolute top-3 right-2 h-6 w-6 p-0 hover:bg-muted" onClick={() => copyCommand(option.command, option.method)}>
                  {copiedCommand === option.method ? <Check className="h-3 w-3 text-green-500" /> : <Copy className="h-3 w-3" />}
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Getting Started */}
        <div className={`max-w-4xl mx-auto mb-8 transition-all duration-800 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Card className="p-4 bg-primary/5 border-primary/20">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-6 h-6 bg-primary/10 rounded-lg flex items-center justify-center">
                <ArrowRight className="h-3 w-3 text-primary" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-foreground mb-1">Getting Started</h3>
                <p className="text-sm text-muted-foreground">
                  Ask Claude: <span className="font-semibold text-foreground">"What can I do with Desktop Commander?"</span>
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* More Options */}
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            <AccordionItem value="more-options" className="border border-dc-border rounded-lg bg-dc-card">
              <AccordionTrigger className="px-4 py-3 hover:no-underline">
                <h3 className="text-base font-semibold text-foreground">More installation options</h3>
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                  {moreOptions.map((option, index) => (
                    <Dialog key={index} open={openModal === option.name} onOpenChange={(open) => setOpenModal(open ? option.name : null)}>
                      <DialogTrigger asChild>
                        <Button variant="outline" className="h-auto p-4 text-left justify-between items-center border-dc-border hover:bg-dc-surface/50">
                          <div className="flex-1 min-w-0">
                            <div className="font-medium text-sm">{option.name}</div>
                            <div className="text-xs text-muted-foreground mt-1">{option.description}</div>
                          </div>
                          <ChevronRight className="h-4 w-4 text-muted-foreground flex-shrink-0 ml-3" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl">
                        <DialogHeader>
                          <DialogTitle>{option.name}</DialogTitle>
                        </DialogHeader>
                        <div className="space-y-4">{option.content}</div>
                      </DialogContent>
                    </Dialog>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="uninstall" className="border border-dc-border rounded-lg bg-dc-card">
              <AccordionTrigger className="px-4 py-3 hover:no-underline">
                <h3 className="text-base font-semibold text-foreground">Uninstall</h3>
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4">
                <div className="space-y-3">
                  <p className="text-muted-foreground text-sm">Run this command in terminal:</p>
                  <div className="bg-background border border-dc-border rounded-lg p-3 font-mono text-sm relative">
                    <code className="text-primary pr-8 block">npx @wonderwhy-er/desktop-commander@latest remove</code>
                    <Button variant="ghost" size="sm" className="absolute top-2 right-2 h-5 w-5 p-0" onClick={() => copyCommand("npx @wonderwhy-er/desktop-commander@latest remove", "Uninstall")}>
                      <Copy className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default MCPInstallation;
