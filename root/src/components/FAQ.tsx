import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What is Desktop Commander?",
      answer: "Desktop Commander is a powerful CLI tool that brings AI-powered automation to your desktop. It allows you to execute complex tasks, manage files, and interact with your system using natural language commands."
    },
    {
      question: "How do I get started?",
      answer: "Getting started is simple! Install Desktop Commander using npm, configure your AI provider (OpenAI, Anthropic, or local models), and start running commands. Check out our installation guide for detailed steps."
    },
    {
      question: "Is Desktop Commander free to use?",
      answer: "Yes! Desktop Commander is completely free and open-source. You only pay for the AI provider costs (like OpenAI or Anthropic API usage) based on your actual usage."
    },
    {
      question: "What are the system requirements?",
      answer: "Desktop Commander works on Windows, macOS, and Linux. You need Node.js 16+ installed and an API key from your preferred AI provider (OpenAI, Anthropic, or you can use local models)."
    },
    {
      question: "How secure is Desktop Commander?",
      answer: "Security is our top priority. All API keys are stored locally, commands are executed in controlled environments, and we provide detailed logging for transparency. You have full control over what commands are executed."
    },
    {
      question: "Can I contribute to the project?",
      answer: "Absolutely! Desktop Commander is open-source and we welcome contributions. You can contribute code, documentation, report bugs, or suggest features on our GitHub repository."
    },
    {
      question: "How does it compare to other AI tools?",
      answer: "Unlike web-based AI tools, Desktop Commander runs locally and can directly interact with your system. It's designed specifically for developers and power users who need AI assistance with their desktop workflows."
    },
    {
      question: "What's on the roadmap?",
      answer: "We're constantly improving Desktop Commander with new features like enhanced plugin system, better multi-modal support, team collaboration features, and integration with more AI providers. Check our GitHub for the latest updates."
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Got questions? We've got answers. Find everything you need to know about Desktop Commander.
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
        </div>
      </div>
    </section>
  );
};

export default FAQ;