import { getAdVariant, type AdPageKey } from "./adPages";

/** Static sections of the ads pages: workflows and quote. */

interface Props {
  page: AdPageKey;
  variant?: string;
}

export const AdWorkflows = ({ page: pageKey, variant: variantKey = "" }: Props) => {
  const { page, variant } = getAdVariant(pageKey, variantKey);
  const where = page.key === "code" ? "the tools already in your repo" : "the services already on your machine";
  return (
    <section className="py-16 md:py-20 bg-dc-surface/30 border-y border-dc-border/60">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">Three things to start with</h2>
          <p className="text-lg text-muted-foreground">Each one works with {where}.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {variant.workflowOrder.map((key, i) => {
            const w = page.workflows[key];
            return (
              <div
                key={key}
                className={`rounded-2xl border-2 p-6 flex flex-col ${
                  i === 0 ? "border-primary/60 bg-gradient-to-b from-dc-surface to-dc-card" : "border-dc-border bg-dc-card"
                }`}
              >
                <h3 className="text-xl font-semibold text-foreground mb-3">{w.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-5 flex-1">{w.body}</p>
                <p className="rounded-lg bg-background/60 border border-dc-border px-3 py-2.5 text-sm text-foreground/90">
                  <span className="text-muted-foreground">Try: </span>"{w.prompt}"
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export const AdQuote = ({ page: pageKey }: Props) => {
  const { page } = getAdVariant(pageKey);
  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto max-w-3xl px-4 sm:px-6 text-center">
        <blockquote className="text-2xl sm:text-3xl font-semibold text-foreground leading-snug">
          “{page.quote.text}”
        </blockquote>
        <p className="mt-5 text-sm text-muted-foreground">{page.quote.who}</p>
        <p className="mt-6 text-muted-foreground max-w-xl mx-auto">{page.quote.context}</p>
      </div>
    </section>
  );
};
