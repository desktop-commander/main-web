import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ExternalLink } from "lucide-react";

const MCPFAQ = () => {
  const faqs = [
    {
      question: "What is Desktop Commander MCP?",
      answer: "Desktop Commander MCP is a free, open-source Model Context Protocol server that gives Claude Desktop and other MCP-compatible clients direct access to your computer's file system and terminal. It enables AI to explore, read, and write files, execute commands, and manage processes on your machine."
    },
    {
      question: "What is an MCP?",
      answer: "MCP stands for Model Context Protocol. It's a framework developed by Anthropic that allows AI language models like Claude to interact with external tools and services. MCPs give Claude the ability to perform actions in the real world - in this case, to read and write files, execute terminal commands, and manage processes on your computer."
    },
    {
      question: "How much does Desktop Commander MCP cost?",
      answer: "Desktop Commander MCP is completely free and open-source. To use it with Claude Desktop, you need a Claude Pro subscription ($20/month). There are no additional charges for the MCP server itself."
    },
    {
      question: "Which operating systems does Desktop Commander MCP support?",
      answer: "Desktop Commander MCP works with Windows, macOS, and Linux, with ongoing improvements for better cross-platform support."
    },
    {
      question: "How does it differ from coding tools like Cursor or Windsurf?",
      answer: "Unlike Cursor or Windsurf which are primarily coding IDEs, Desktop Commander MCP works directly with Claude to provide a flexible, solution-centric approach. It's not confined to a coding environment - it can handle coding tasks but also excels at file management, automation, and working across multiple projects simultaneously."
    },
    {
      question: "Is it safe to give Claude access to my file system?",
      answer: "Claude operates within safety boundaries - it typically only works with files you direct it to, and can only perform actions your user account has permission for. No data is sent to external servers beyond your Claude conversations. You maintain full control over what Claude can access."
    },
    {
      question: "How does Desktop Commander MCP collect data?",
      answer: "It has three systems: local usage analytics (always active, stays on your machine), anonymous telemetry (can be disabled), and an optional feedback system (user controlled). Your file contents are never collected."
    },
    {
      question: "I'm having trouble installing. Where can I get help?",
      answer: "Join our Discord server for community support, check the GitHub issues for known problems, or review our comprehensive FAQ on GitHub. If you encounter a new issue, please consider opening a GitHub issue with details about your problem."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about Desktop Commander MCP.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-background border rounded-lg px-6 py-2"
              >
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
          {/* Link to comprehensive FAQ */}
          <div className="mt-12 text-center">
            <div className="bg-background border rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2">Need More Details?</h3>
              <p className="text-muted-foreground mb-4">
                View our comprehensive FAQ document on GitHub for more detailed answers and troubleshooting guides.
              </p>
              <a 
                href="https://github.com/wonderwhy-er/DesktopCommanderMCP/blob/main/FAQ.md"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
              >
                Complete FAQ on GitHub
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MCPFAQ;
