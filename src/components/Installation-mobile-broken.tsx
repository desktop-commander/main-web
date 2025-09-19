import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Download, Copy, Terminal, ChevronDown, ChevronRight, ExternalLink } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useState, useEffect, useRef } from "react";
import { useAnalytics } from "@/hooks/useAnalytics";

const requirements = [
  {
    text: "Node.js version >= v18.0.0",
    downloadUrl: "https://nodejs.org/en/download"
  },
  {
    text: "Claude Desktop",
    downloadUrl: "https://claude.ai/download"
  }
];

const installationOptions = [
  {
    platform: ["MacOS"],
    method: "Bash Install",
    description: "Run this in Terminal:",
    command: "curl -fsSL https://raw.githubusercontent.com/wonderwhy-er/DesktopCommanderMCP/refs/heads/main/install.sh | bash",
    available: true,
    buttonText: "Copy and run this in Terminal"
  },
  {
    platform: ["Windows", "MacOS"],
    method: "NPX Install",
    description: "Run this in Terminal/Command Prompt:",
    command: "npx @wonderwhy-er/desktop-commander@latest setup",
    available: true,
    buttonText: "Copy and run this in Command Center / Terminal"
  }
];

const Installation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [copiedCommand, setCopiedCommand] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const { trackDownload, trackCustomEvent } = useAnalytics();

  // Intersection Observer for scroll-triggered animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '-50px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const copyToClipboard = (text: string, eventData: any) => {
    navigator.clipboard.writeText(text);
    setCopiedCommand(text);
    setTimeout(() => setCopiedCommand(null), 2000);
    trackCustomEvent('copy_command_clicked', eventData);
  };

  return (
    <section ref={sectionRef} id="installation" className="py-12 md:py-16 bg-dc-surface/30 scroll-mt-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        {/* Header - Mobile optimized */}
        <div className={`text-center mb-12 md:mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 md:mb-6 leading-tight">
            Installation
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            MCP server for LLM clients
          </p>
        </div>

        {/* Requirements - Mobile optimized */}
        <div className={`mb-8 md:mb-12 transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="max-w-4xl mx-auto">
            <div className="px-4">
              <h3 className="text-base font-medium text-muted-foreground mb-3 text-left">
                Requirements
              </h3>
              <div className="space-y-2">
                {requirements.map((requirement, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Check className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                    <a
                      href={requirement.downloadUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground hover:text-primary hover:underline transition-colors duration-200"
                    >
                      {requirement.text}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Installation Options - Mobile responsive grid */}
        <div className={`transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-8 md:mb-12 text-center">
            Installation Options
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
            {installationOptions.map((option, index) => (
              <Card 
                key={index} 
                className={`p-6 bg-dc-card border-2 border-primary/30 hover:border-primary/50 transition-all duration-500 hover:scale-105 hover:shadow-lg relative ${!option.available ? 'opacity-60' : ''} ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
                style={{
                  transitionDelay: isVisible ? `${700 + index * 200}ms` : '0ms'
                }}
              >
                <div className="text-center mb-4">
                  <h4 className="text-xl font-semibold text-foreground mb-2">
                    {option.method}
                  </h4>
                  <div className="flex gap-2 justify-center flex-wrap mb-4">
                    {Array.isArray(option.platform) ? (
                      option.platform.map((platform, platformIndex) => (
                        <span 
                          key={platformIndex} 
                          className={`px-3 py-1 rounded-full text-sm font-medium ${
                            option.available 
                              ? 'bg-primary/10 text-primary' 
                              : 'bg-muted text-muted-foreground'
                          }`}
                        >
                          {platform}
                        </span>
                      ))
                    ) : (
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        option.available 
                          ? 'bg-primary/10 text-primary' 
                          : 'bg-muted text-muted-foreground'
                      }`}>
                        {option.platform}
                      </span>
                    )}
                    {/* Claude Desktop tag */}
                    <span className="px-3 py-1 rounded-full text-sm font-medium bg-green-500/10 text-green-400 border border-green-500/20">
                      Claude Desktop
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-6">
                    {option.description}
                  </p>
                </div>

                {/* Command Box - Mobile optimized */}
                <div className="bg-background border border-dc-border rounded-lg p-3 md:p-4 font-mono text-sm relative mb-6 overflow-x-auto">
                  <code className="text-primary break-all block pr-8 min-h-[20px]">
                    {option.command}
                  </code>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute top-2 right-2 h-6 w-6 p-0 hover:bg-muted flex-shrink-0"
                    onClick={() => copyToClipboard(option.command, {
                      button_text: 'Copy',
                      button_location: `install_${option.method.toLowerCase().replace(' ', '_')}`,
                      installation_method: option.method,
                      command: option.command
                    })}
                  >
                    {copiedCommand === option.command ? (
                      <Check className="h-3 w-3 text-green-500" />
                    ) : (
                      <Copy className="h-3 w-3" />
                    )}
                  </Button>
                </div>

                <Button 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium transition-all duration-300 hover:scale-[1.02]"
                  onClick={() => copyToClipboard(option.command, {
                    button_text: option.buttonText,
                    button_location: `install_button_${option.method.toLowerCase().replace(' ', '_')}`,
                    installation_method: option.method,
                    command: option.command
                  })}
                >
                  {copiedCommand === option.command ? (
                    <>
                      <Check className="h-4 w-4 mr-2" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4 mr-2" />
                      {option.buttonText}
                    </>
                  )}
                </Button>
              </Card>
            ))}
          </div>
        </div>

        {/* Getting Started Callout - Delayed animation */}
        <div className={`mt-10 transition-all duration-1000 delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <Card className="p-4 bg-primary/5 border-primary/20 max-w-4xl mx-auto hover:bg-primary/10 transition-all duration-300 hover:scale-105">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-6 h-6 bg-primary/10 rounded-lg flex items-center justify-center transition-colors duration-300 group-hover:bg-primary/20">
                <ArrowRight className="h-3 w-3 text-primary transition-transform duration-300 group-hover:translate-x-1" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-foreground mb-2">
                  Getting Started
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Simply ask Claude or your LLM: <span className="font-semibold text-foreground">"What can I do with Desktop Commander?"</span> and you'll get guided tutorials and examples to discover what's possible.
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Alternative Methods - Mobile accordion */}
        <div className={`transition-all duration-1000 delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-6 md:mb-8 text-center">
            Alternative Installation Methods
          </h3>
          
          <Accordion type="single" collapsible className="max-w-4xl mx-auto space-y-4">
            {/* Smithery Installation */}
            <AccordionItem value="smithery" className="border border-dc-border rounded-lg bg-dc-card">
              <AccordionTrigger className="px-4 md:px-6 py-4 hover:no-underline">
                <h4 className="text-base md:text-lg font-semibold text-foreground">Install via Smithery</h4>
              </AccordionTrigger>
              <AccordionContent className="px-4 md:px-6 pb-6">
                <div className="space-y-4">
                  <p className="text-muted-foreground text-sm md:text-base">
                    Install through the Smithery web interface:
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-xs font-bold text-primary">1</span>
                      <div>
                        <strong className="text-foreground">Visit Smithery:</strong>
                        <div className="mt-1">
                          <a 
                            href="https://smithery.ai/server/@wonderwhy-er/desktop-commander" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-primary hover:underline text-sm break-all"
                          >
                            smithery.ai/server/@wonderwhy-er/desktop-commander
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-xs font-bold text-primary">2</span>
                      <div><strong className="text-foreground">Login to Smithery</strong> if you haven't already</div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-xs font-bold text-primary">3</span>
                      <div><strong className="text-foreground">Select Claude Desktop</strong> on the right side</div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-xs font-bold text-primary">4</span>
                      <div><strong className="text-foreground">Install with the provided key</strong></div>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Cursor Installation */}
            <AccordionItem value="cursor" className="border border-dc-border rounded-lg bg-dc-card">
              <AccordionTrigger className="px-4 md:px-6 py-4 hover:no-underline">
                <h4 className="text-base md:text-lg font-semibold text-foreground">Install in Cursor IDE</h4>
              </AccordionTrigger>
              <AccordionContent className="px-4 md:px-6 pb-6">
                <div className="space-y-4">
                  <p className="text-muted-foreground text-sm md:text-base">
                    One-click installation for Cursor users:
                  </p>
                  <div className="text-center">
                    <a 
                      href="cursor://anysphere.cursor-deeplink/mcp/install?name=desktop-commander&config=eyJjb21tYW5kIjoibnB4IC15IEB3b25kZXJ3aHktZXIvZGVza3RvcC1jb21tYW5kZXJAbGF0ZXN0In0%3D" 
                      className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium"
                    >
                      Install in Cursor
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                  <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                    <p className="text-sm text-blue-400">
                      <strong>Note:</strong> Make sure Cursor IDE is installed before clicking the link.
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Manual Installation */}
            <AccordionItem value="manual" className="border border-dc-border rounded-lg bg-dc-card">
              <AccordionTrigger className="px-4 md:px-6 py-4 hover:no-underline">
                <h4 className="text-base md:text-lg font-semibold text-foreground">Manual Installation</h4>
              </AccordionTrigger>
              <AccordionContent className="px-4 md:px-6 pb-6">
                <div className="space-y-4">
                  <p className="text-muted-foreground text-sm md:text-base">
                    Add this to your claude_desktop_config.json:
                  </p>
                  <div className="bg-background border border-dc-border rounded-lg p-3 font-mono text-xs md:text-sm relative overflow-x-auto">
                    <code className="text-primary whitespace-pre block pr-8">{`{
  "mcpServers": {
    "desktop-commander": {
      "command": "npx",
      "args": [
        "-y",
        "@wonderwhy-er/desktop-commander@latest"
      ]
    }
  }
}`}</code>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="absolute top-2 right-2 h-6 w-6 p-0 hover:bg-muted"
                      onClick={() => copyToClipboard(`{
  "mcpServers": {
    "desktop-commander": {
      "command": "npx",
      "args": [
        "-y",
        "@wonderwhy-er/desktop-commander@latest"
      ]
    }
  }
}`, {
                        button_text: 'Copy',
                        button_location: 'manual_install',
                        installation_method: 'Manual Install',
                        command: 'Manual config'
                      })}
                    >
                      {copiedCommand?.includes('mcpServers') ? (
                        <Check className="h-3 w-3 text-green-500" />
                      ) : (
                        <Copy className="h-3 w-3" />
                      )}
                    </Button>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Uninstall */}
            <AccordionItem value="uninstall" className="border border-dc-border rounded-lg bg-dc-card">
              <AccordionTrigger className="px-4 md:px-6 py-4 hover:no-underline">
                <h4 className="text-base md:text-lg font-semibold text-foreground">Uninstall</h4>
              </AccordionTrigger>
              <AccordionContent className="px-4 md:px-6 pb-6">
                <div className="space-y-4">
                  <p className="text-muted-foreground text-sm md:text-base">
                    Run this command in terminal:
                  </p>
                  <div className="bg-background border border-dc-border rounded-lg p-3 font-mono text-sm relative overflow-x-auto">
                    <code className="text-primary break-all block pr-8">
                      npx @wonderwhy-er/desktop-commander@latest remove
                    </code>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="absolute top-2 right-2 h-6 w-6 p-0 hover:bg-muted"
                      onClick={() => copyToClipboard("npx @wonderwhy-er/desktop-commander@latest remove", {
                        button_text: 'Copy',
                        button_location: 'uninstall',
                        installation_method: 'Uninstall',
                        command: 'Remove command'
                      })}
                    >
                      {copiedCommand === "npx @wonderwhy-er/desktop-commander@latest remove" ? (
                        <Check className="h-3 w-3 text-green-500" />
                      ) : (
                        <Copy className="h-3 w-3" />
                      )}
                    </Button>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-12 md:mt-16 transition-all duration-1000 delay-1200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <p className="text-lg text-muted-foreground mb-6">
            Need help? Join our community for support
          </p>
          <Button variant="outline" size="lg" asChild className="transition-all duration-300 hover:scale-105">
            <a 
              href="https://discord.gg/kQ27sNnZr7" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Terminal className="h-5 w-5" />
              Join Discord Community
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Installation;