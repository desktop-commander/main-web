import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ExternalLink } from "lucide-react";
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
      question: "What is Desktop Commander?",
      answer: "Desktop Commander gives AI chat access to your computer, so it works on it directly instead of telling you what to do. It reads and writes files, runs commands, and manages processes on your own machine, then continues from the results."
    },
    {
      question: "What is Desktop Commander Remote MCP?",
      answer: "Remote MCP lets you use Desktop Commander from remote AI clients like ChatGPT, Claude, and other AI services while still working with your own machine. You connect one or more of your devices, and your AI assistant gets access to local files, terminal, previews, and running processes on them. You can also use it yourself from another device — for example, controlling your PC from your phone. Get started at mcp.desktopcommander.app."
    },
    {
      question: "Should I use the local or remote MCP?",
      answer: "Use Remote MCP when your AI client runs in the browser, like ChatGPT or Claude web, or when you want to reach your machine from another device. Use the local MCP server if you work at your computer in a desktop MCP client like Claude Desktop, Cursor, or Windsurf; it runs entirely on your machine and is free and open source. Both give AI the same core ability: to read, write, run, and act on your system."
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
          <div className={`mt-12 transition-all duration-1000 delay-1200 ${
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default MCPFAQ;
