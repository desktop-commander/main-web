import { Shield } from "lucide-react";
import UseCaseHeroCta from "./remote/UseCaseHeroCta";

const FileManagementHero = () => {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-20">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-dc-surface border border-dc-border text-sm text-muted-foreground">
            <Shield className="w-4 h-4 text-primary" />
            <span>Works in ChatGPT and Claude</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight max-w-4xl">
            Manage your files <span className="text-primary">with chat</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl leading-relaxed">
            Ask ChatGPT or Claude to organize, convert, or rename the files on your Mac or Windows
            PC. One message instead of a dozen manual steps.
          </p>

          <UseCaseHeroCta location="file_management" />

          {/* Value points */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground pt-2">
            <span>Save time</span>
            <span className="w-1 h-1 rounded-full bg-muted-foreground/50" />
            <span>Works from web and phone</span>
            <span className="w-1 h-1 rounded-full bg-muted-foreground/50" />
            <span>Ask in plain words</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FileManagementHero;
