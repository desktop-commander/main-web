const ROW_A = [
  "Organize my Downloads folder by file type",
  "Convert all HEIC photos on my Desktop to JPG",
  "Find every invoice PDF and rename it by date and vendor",
  "Clean out duplicate files in my Documents",
  "Merge these three PDFs into one",
  "Search all my notes for mentions of the Berlin project",
  "Resize every image in this folder for the web",
];

const ROW_B = [
  "Clone this repo, install dependencies, and run the tests",
  "Check what is using port 3000 and kill it",
  "Set up a Python environment and install the requirements",
  "Run the build and fix the errors you find",
  "Show me the largest files eating my disk space",
  "Start my dev server and watch the logs",
  "Create a cron job that backs up this folder nightly",
];

const Chip = ({ text }: { text: string }) => (
  <span className="inline-flex items-center whitespace-nowrap px-5 py-2.5 mx-2 rounded-full border border-dc-border bg-dc-card text-sm text-muted-foreground">
    <span className="text-primary mr-2 select-none">›</span>
    {text}
  </span>
);

/** Two counter-scrolling rows of real prompts. Pure CSS animation. */
const GptPromptMarquee = () => {
  return (
    <section className="py-10 md:py-14 overflow-hidden border-y border-dc-border/60 bg-dc-surface/30">
      <p className="text-center text-sm uppercase tracking-widest text-muted-foreground mb-8">
        Things people ask ChatGPT to do on their computer
      </p>
      <div className="space-y-4" aria-hidden="true">
        <div className="flex w-max animate-marquee-left hover:[animation-play-state:paused]">
          {[...ROW_A, ...ROW_A].map((text, i) => (
            <Chip key={`a-${i}`} text={text} />
          ))}
        </div>
        <div className="flex w-max animate-marquee-right hover:[animation-play-state:paused]">
          {[...ROW_B, ...ROW_B].map((text, i) => (
            <Chip key={`b-${i}`} text={text} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GptPromptMarquee;
