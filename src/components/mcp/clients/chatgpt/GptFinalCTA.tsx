import OpenAIMark from "./OpenAIMark";
import GptCta from "./GptCta";

const GptFinalCTA = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto max-w-5xl px-4 sm:px-6">
        <div className="relative rounded-2xl md:rounded-3xl border border-primary/25 overflow-hidden text-center px-6 py-14 md:py-20">
          <div className="absolute inset-0 gradient-subtle" aria-hidden="true" />
          <div
            className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-primary/20 blur-[100px]"
            aria-hidden="true"
          />
          <div className="relative">
            <div className="flex items-center justify-center gap-4 mb-7">
              <img
                src="/favicon-512x512.png"
                alt="Desktop Commander"
                className="w-12 h-12 rounded-xl border border-dc-border bg-dc-surface object-contain p-1.5"
              />
              <span className="text-xl text-muted-foreground select-none">×</span>
              <span className="w-12 h-12 rounded-xl border border-dc-border bg-white text-black flex items-center justify-center">
                <OpenAIMark className="w-7 h-7" />
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold text-foreground mb-4">
              Your computer is ChatGPT's
              <br className="hidden sm:block" /> missing superpower
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-9">
              Add the Desktop Commander plugin and start working with real files and a
              real terminal today.
            </p>
            <GptCta position="final" className="text-base px-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GptFinalCTA;
