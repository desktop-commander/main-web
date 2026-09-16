import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState, useEffect, useRef } from "react";

const PricingFAQ = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => { if (sectionRef.current) observer.unobserve(sectionRef.current); };
  }, []);

  const faqs = [
    {
      question: "What is a tool call?",
      answer: "One action Desktop Commander performs on your machine: reading a file, writing a file, running a command, checking a process. A single request in ChatGPT or Claude usually takes several tool calls."
    },
    {
      question: "What happens when I reach 10,000 tool calls?",
      answer: "The Free plan stops at 10,000 tool calls for that month. Your devices stay connected, and you can either wait for the next month or upgrade to Pro for unlimited calls."
    },
    {
      question: "Is the local MCP server free?",
      answer: "Yes. The local MCP server is free and open source, with no account and no monthly limit. These plans cover Remote MCP, which is what connects web clients like ChatGPT and Claude to your machine."
    },
    {
      question: "How many devices can I connect?",
      answer: "Connect as many machines as you need on either plan: a laptop, a desktop, a server. You choose which ones are reachable and can disconnect any of them at any time."
    },
    {
      question: "Can I cancel anytime?",
      answer: "Yes. Subscriptions can be cancelled at any time, with no contracts and no cancellation fees."
    },
  ];

  return (
    <section ref={sectionRef} id="pricing-faq" className="pb-20 bg-background">
      <div className="container mx-auto max-w-3xl px-4 sm:px-6">
        <div className={`text-center mb-12 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Pricing FAQ
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Tool calls, devices, and billing.
          </p>
        </div>

        <div className={`transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`pricing-faq-${index}`}
                className={`bg-dc-surface border border-dc-border rounded-lg px-6 py-2 transition-all duration-700 hover:shadow-lg hover:scale-[1.01] transform ${
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
        </div>
      </div>
    </section>
  );
};

export default PricingFAQ;
