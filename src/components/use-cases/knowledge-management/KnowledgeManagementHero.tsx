import UseCaseHeroCta from "../remote/UseCaseHeroCta";

const KnowledgeManagementHero = () => {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-20">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight max-w-4xl">
            Chat with your notes <span className="text-primary">in ChatGPT or Claude</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl leading-relaxed">
            Ask ChatGPT or Claude to read, write, and organize the markdown notes and docs on your
            Mac or Windows PC. Your Obsidian vault or docs folder becomes an AI knowledge base you
            can search and update from the chat.
          </p>

          {/* Tool Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <span className="text-sm text-muted-foreground">Works with:</span>
            <div className="flex flex-wrap items-center justify-center gap-2">
              {["Obsidian", "Markdown folders", "Git repos", "Project docs"].map((badge) => (
                <span
                  key={badge}
                  className="px-3 py-1.5 rounded-full bg-dc-surface border border-dc-border text-sm font-medium"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          <UseCaseHeroCta location="knowledge_management" />

          {/* Value points */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground pt-2">
            <span>Plain markdown files</span>
            <span className="w-1 h-1 rounded-full bg-muted-foreground/50" />
            <span>Works from web and phone</span>
            <span className="w-1 h-1 rounded-full bg-muted-foreground/50" />
            <span>Mac and Windows</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KnowledgeManagementHero;
