import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface Props {
  name: string;
  faqs: { question: string; answer: string }[];
  /** Overrides the default "<name> + Desktop Commander FAQ" heading. */
  heading?: string;
  /**
   * Shows "More answers in the Help center" under the questions.
   * Off on ad landing pages, so the page keeps people on the install path.
   */
  helpLink?: boolean;
}

const ClientFAQ = ({ name, faqs, heading, helpLink = true }: Props) => {
  return (
    <section id="faq" className="py-14 md:py-20">
      <div className="container mx-auto max-w-3xl px-4 sm:px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
            {heading ?? `${name} + Desktop Commander FAQ`}
          </h2>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`faq-${index}`}
              className="border-dc-border"
            >
              <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        {helpLink && (
          <p className="text-center text-sm text-muted-foreground mt-8">
            More answers in the{" "}
            <a href="/help/" className="text-primary font-medium hover:underline">
              Help center
            </a>
            .
          </p>
        )}
      </div>
    </section>
  );
};

export default ClientFAQ;
