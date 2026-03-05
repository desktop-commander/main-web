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
      question: "What counts as a message?",
      answer: "Every message you send counts as one. AI responses, tool calls, and system messages don't count toward your limit."
    },
    {
      question: "What's the difference between messages and AI credits?",
      answer: "They're two separate things. Your plan controls how many messages you can send per week (100 on Free, unlimited on the paid plan). AI credits cover the cost of running cloud models like Claude, GPT, and Gemini. You can send messages without credits if you use local models or your own API keys."
    },
    {
      question: "What are DC credits and how do they work?",
      answer: "DC credits are our built-in pay-as-you-go system for cloud AI models. Every account starts with $10 free. Each message costs a small amount depending on the model — more capable models cost a bit more. When you run low, top up in $10–$200 increments from Settings → Billing."
    },
    {
      question: "What models are available?",
      answer: "Desktop Commander supports models from Anthropic, OpenAI, Google, and many other providers. You can also run open-source models locally via Ollama."
    },
    {
      question: "Can I use my own API keys?",
      answer: "Yes. Bring your own keys from OpenAI, Anthropic, Google, or any other supported provider. You'll be billed directly by that provider instead of using DC credits. Some providers even offer free tiers."
    },
    {
      question: "Can I use my ChatGPT subscription?",
      answer: "Yes. If you already pay for ChatGPT Plus or Team, you can connect it directly inside Desktop Commander. No extra cost — you're already paying for it."
    },
    {
      question: "Can I use Desktop Commander completely free?",
      answer: "Yes. You get 100 messages per week on the free plan, plus $10 in free credits to start. Beyond that, you can run local models via Ollama for free, or use providers with free tiers like Google Gemini. Bring your own API key and you won't spend any DC credits."
    },
    {
      question: "What's the cheapest way to use Desktop Commander?",
      answer: "Several options cost nothing at all: run local models with Ollama, or use cloud providers with free tiers — Google Gemini, for example, offers generous free usage. You can also bring your own API keys from any provider. The free plan gives you 100 messages per week, and every account starts with $10 in free credits."
    },
    {
      question: "Can I mix different AI providers?",
      answer: "Absolutely. You can switch between models on a per-conversation basis. Use Claude for complex reasoning, GPT for creative writing, and a local model for quick tasks — whatever works best for you."
    },
    {
      question: "How much do AI credits cost per message?",
      answer: "It depends on the model. Smaller, faster models cost fractions of a cent per message. Larger, more capable models cost more. You can always see the cost before sending. The $10 free credits go a long way for most users."
    },
    {
      question: "When does my weekly limit reset?",
      answer: "Every Monday at midnight UTC."
    },
    {
      question: "What happens if I hit the message limit?",
      answer: "You'll see a notification in chat. You can wait for the weekly reset on Monday, or upgrade to the Unlimited plan to remove the limit entirely."
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
