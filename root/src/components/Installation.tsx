import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Download, Copy, ChevronDown, ChevronRight } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const requirements = [
  "Node.js version >= v18.0.0",
  "Claude Desktop, Cursor, Claude Code, VSCode, Windsurf or another MCP Client"
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

const moreInstallationOptions = [
  { name: "Installing via Smithery", description: "Install through Smithery package manager" },
  { name: "Install in Cursor", description: "Setup in Cursor IDE" },
  { name: "Install in Claude Code", description: "Configure for Claude Code" },
  { name: "Install in Windsurf", description: "Setup in Windsurf editor" },
  { name: "Install in VS Code", description: "Configure for Visual Studio Code" },
  { name: "Install in Cline", description: "Setup in Cline environment" },
  { name: "Install in Augment Code", description: "Configure for Augment Code" },
  { name: "Install in Roo Code", description: "Setup in Roo Code editor" },
  { name: "Install in Gemini CLI", description: "Configure for Gemini CLI" },
  { name: "Install in Claude Desktop", description: "Setup in Claude Desktop app" },
  { name: "Install in Kiro", description: "Configure for Kiro editor" },
  { name: "Using Docker", description: "Deploy using Docker containers" },
  { name: "Install in Warp", description: "Setup in Warp terminal" },
  { name: "Install in Copilot Coding Agent", description: "Configure for GitHub Copilot" }
];

const Installation = () => {
  return (
    <section id="installation" className="py-12 bg-dc-surface/30">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-foreground mb-3">
            Installation
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            MCP server for LLM clients
          </p>
        </div>

        {/* Requirements */}
        <div className="mb-8">
          <div className="max-w-4xl mx-auto">
            <div className="px-4">
              <h3 className="text-base font-medium text-muted-foreground mb-3 text-left">
                Requirements
              </h3>
              <div className="space-y-2">
                {requirements.map((requirement, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Check className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{requirement}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Installation Options */}
        <div>
          <h3 className="text-2xl font-semibold text-foreground mb-6 text-center">
            Installation Options
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto">
            {installationOptions.map((option, index) => (
              <Card key={index} className={`p-6 bg-dc-card border-2 border-primary/30 hover:border-primary/50 transition-colors relative ${!option.available ? 'opacity-60' : ''}`}>
                <div className="text-center mb-4">
                  <h4 className="text-xl font-semibold text-foreground mb-2">
                    {option.method}
                  </h4>
                  <div className="flex gap-2 justify-center flex-wrap">
                    {Array.isArray(option.platform) ? (
                      option.platform.map((platform, platformIndex) => (
                        <span key={platformIndex} className={`px-3 py-1 rounded-full text-sm font-medium ${
                          option.available 
                            ? 'bg-primary/10 text-primary' 
                            : 'bg-muted text-muted-foreground'
                        }`}>
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
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-4 text-center">
                  {option.description}
                </p>
                
                {option.command && (
                  <div className="bg-background border border-dc-border rounded-lg p-4 font-mono text-sm mb-4 relative">
                    <code className="text-primary break-all pr-8 block">{option.command}</code>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="absolute top-3 right-2 h-6 w-6 p-0 hover:bg-muted"
                      onClick={() => navigator.clipboard.writeText(option.command)}
                    >
                      <Copy className="h-3 w-3" />
                    </Button>
                  </div>
                )}
               </Card>
             ))}
          </div>
        </div>

        {/* Getting Started Callout */}
        <div className="mt-10">
          <Card className="p-4 bg-primary/5 border-primary/20 max-w-4xl mx-auto">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-6 h-6 bg-primary/10 rounded-lg flex items-center justify-center">
                <ArrowRight className="h-3 w-3 text-primary" />
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

        {/* Additional Options */}
        <div className="mt-10 max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {/* More Installation Options */}
            <AccordionItem value="more-options" className="border border-dc-border rounded-lg bg-dc-card">
              <AccordionTrigger className="px-4 py-3 hover:no-underline">
                <h3 className="text-base font-semibold text-foreground">More installation options</h3>
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                  {moreInstallationOptions.map((option, index) => (
                    <Dialog key={index}>
                      <DialogTrigger asChild>
                         <Button 
                           variant="outline" 
                           className="h-auto p-4 text-left justify-between border-dc-border hover:bg-dc-surface/50"
                         >
                           <div>
                             <div className="font-medium text-sm">{option.name}</div>
                             <div className="text-xs text-muted-foreground mt-1">{option.description}</div>
                           </div>
                           <ChevronRight className="h-3 w-3 text-muted-foreground flex-shrink-0" />
                         </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl">
                        <DialogHeader>
                          <DialogTitle>{option.name}</DialogTitle>
                        </DialogHeader>
                        <div className="space-y-4">
                          <p className="text-muted-foreground">
                            Installation instructions for {option.name} will be available soon. 
                            Please use the standard installation methods above for now.
                          </p>
                          <div className="bg-muted/30 rounded-lg p-4">
                            <p className="text-sm text-muted-foreground">
                              For the latest installation guides, visit our documentation or join our Discord community for support.
                            </p>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Uninstall */}
            <AccordionItem value="uninstall" className="border border-dc-border rounded-lg bg-dc-card">
              <AccordionTrigger className="px-4 py-3 hover:no-underline">
                <h3 className="text-base font-semibold text-foreground">Uninstall</h3>
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4">
                <div className="space-y-3">
                  <p className="text-muted-foreground text-sm">Run this command in terminal:</p>
                  <div className="bg-background border border-dc-border rounded-lg p-3 font-mono text-sm relative">
                    <code className="text-primary break-all pr-8 block">npx @wonderwhy-er/desktop-commander@latest remove</code>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="absolute top-2 right-2 h-5 w-5 p-0 hover:bg-muted"
                      onClick={() => navigator.clipboard.writeText("npx @wonderwhy-er/desktop-commander@latest remove")}
                    >
                      <Copy className="h-3 w-3" />
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    or remove the cloned directory and remove MCP server entry from config file.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Installation;