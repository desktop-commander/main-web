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
      question: "How does the Credits Plan work?",
      answer: "You subscribe to a monthly AI usage credits bundle — $20, $50, $100, or $200 per month. Credits cover the cost of running AI models: each message costs a small amount depending on the model, with more capable models costing a bit more."
    },
    {
      question: "What models are available?",
      answer: "Desktop Commander gives you access to the best AI models available on the market — from Anthropic, OpenAI, Google, and other leading providers."
    },
    {
      question: "Can I switch between models?",
      answer: "Absolutely. You can switch between models on a per-conversation basis. Use Claude for complex reasoning, GPT for creative writing, a fast model for quick tasks — whatever works best for you."
    },
    {
      question: "Can I change my bundle?",
      answer: "Yes. You can change your credits bundle package at any time — upgrade when you need more, downsize when you need less."
    },
    {
      question: "How much do credits cost per message?",
      answer: "It depends on the model. Smaller, faster models cost fractions of a cent per message. Larger, more capable models cost more. You can always see the cost before sending."
    },
    {
      question: "Can I try it before subscribing?",
      answer: "Yes. New accounts include free starting credits, so you can try Desktop Commander before committing to a bundle."
    },
    {
      question: "Can I cancel anytime?",
      answer: "Yes. Subscriptions can be cancelled at any time — no contracts, no cancellation fees."
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
            Everything you need to know about plans, credits, and billing.
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
