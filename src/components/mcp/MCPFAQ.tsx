import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ExternalLink, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect, useRef } from "react";

const MCPFAQ = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const faqs = [
    {
      question: "What is Desktop Commander MCP?",
      answer: "Desktop Commander MCP is an open-source MCP (Model Context Protocol) server that allows Claude Desktop and other MCP clients to access and control your computer's file system and terminal. It enables LLMs to explore, read, and write files, execute commands, and manage processes - expanding their capabilities beyond just conversation."
    },
    {
      question: "What is the Desktop Commander App?",
      answer: "Desktop Commander is now also available as a standalone desktop application! The app gives you a complete AI-powered interface with access to local files and terminal, letting you automate tasks using natural language. You can choose your preferred AI model (Claude, GPT, Gemini, and more) and work without needing to configure MCP manually. It's the easiest way to get started with Desktop Commander."
    },
    {
      question: "What is an MCP?",
      answer: "MCP stands for Model Context Protocol. It's a framework developed by Anthropic that allows AI language models like Claude to interact with external tools and services. MCPs give Claude the ability to perform actions in the real world - in this case, to read and write files, execute terminal commands, and manage processes on your computer."
    },
    {
      question: "How does Desktop Commander differ from coding tools like Cursor or Windsurf?",
      answer: "Unlike tools like Cursor or Windsurf which are primarily designed as coding IDEs, Desktop Commander provides a more flexible, solution-centric approach. It's not confined to a coding box - it can handle coding tasks but also excels at exploring codebases, drawing diagrams, running automation processes, organizing files, and working with multiple projects simultaneously."
    },
    {
      question: "How much does it cost?",
      answer: "Desktop Commander MCP is completely free and open-source. To use it with Claude Desktop, you need a Claude Pro subscription ($20/month). The Desktop Commander App is currently in beta and free to use - you just need API access to your preferred AI model."
    },
    {
      question: "Which operating systems are supported?",
      answer: "Both the MCP server and the Desktop Commander App work on Windows, macOS, and Linux, with ongoing improvements for better cross-platform support."
    },
    {
      question: "Is it safe to give AI access to my file system?",
      answer: "Desktop Commander operates within safety boundaries - it typically only works with files you direct it to, can only perform actions your user account has permission for, and processes files locally on your machine. No file data is sent to external servers beyond your AI provider conversations."
    },
    {
      question: "How does Desktop Commander collect feedback and usage data?",
      answer: "The MCP has three systems: local usage analytics (always active, stays on your machine), anonymous telemetry (can be disabled), and optional feedback system (user controlled)."
    },
    {
      question: "I'm having trouble with the MCP. Where can I get help?",
      answer: "Join our Discord server for community support, check the GitHub issues for known problems, or review our comprehensive FAQ for troubleshooting tips. If you encounter a new issue, please consider opening a GitHub issue with details about your problem."
    }
  ];

  return (
    <section ref={sectionRef} id="faq" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about Desktop Commander MCP and the App.
          </p>
        </div>
        
        <div className={`max-w-3xl mx-auto transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className={`bg-background border rounded-lg px-6 py-2 transition-all duration-700 hover:shadow-lg hover:scale-[1.01] transform ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-4'
                }`}
                style={{
                  transitionDelay: isVisible ? `${500 + index * 100}ms` : '0ms'
                }}
              >
                <AccordionTrigger className="text-left hover:no-underline transition-colors duration-300 hover:text-primary">
                  <span className="font-semibold">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
          {/* Links section */}
          <div className={`mt-12 grid gap-6 md:grid-cols-2 transition-all duration-1000 delay-1200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            {/* GitHub FAQ link */}
            <div className="bg-background border rounded-lg p-6 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] transform">
              <h3 className="text-lg font-semibold mb-2">Need More Details?</h3>
              <p className="text-muted-foreground mb-4 text-sm">
                View our comprehensive FAQ document on GitHub for detailed troubleshooting guides.
              </p>
              <a 
                href="https://github.com/wonderwhy-er/DesktopCommanderMCP/blob/main/FAQ.md"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:underline font-medium transition-all duration-300 hover:scale-105 group"
              >
                Complete FAQ on GitHub
                <ExternalLink className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>

            {/* App CTA */}
            <div className="bg-dc-surface border border-dc-border rounded-lg p-6 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] transform">
              <h3 className="text-lg font-semibold mb-2">Try the Desktop App</h3>
              <p className="text-muted-foreground mb-4 text-sm">
                Get started faster with the Desktop Commander App - no MCP configuration needed.
              </p>
              <Button variant="hero" size="sm" asChild>
                <a href="/#download" className="inline-flex items-center gap-2">
                  <Download className="h-4 w-4" />
                  Download App
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MCPFAQ;
