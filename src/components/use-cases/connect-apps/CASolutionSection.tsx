import { Clock, Zap, Workflow } from "lucide-react";
import ChatDemo from "../remote/ChatDemo";

const CASolutionSection = () => {
  const features = [
    {
      title: "Skip the UI entirely",
      description: "ChatGPT or Claude calls the service's API or CLI from your terminal. No menus to click through, no new interface to learn.",
      icon: Zap,
    },
    {
      title: "Describe outcomes, not steps",
      description: "\"Pull the leads we added after last week's conference.\" You say what you want, not how to get it.",
      icon: Clock,
    },
    {
      title: "Chain actions across tools",
      description: "Get data from one service, work with it, and send the result to another, all in one conversation.",
      icon: Workflow,
    }
  ];

  const exampleCommands = [
    "List the leads I added to our CRM after last week's conference.",
    "Check which of our GitHub issues are still open from the last release.",
    "Find any traffic spikes in last month's analytics export.",
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-dc-card/30">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            One conversation across your tools
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Desktop Commander lets ChatGPT or Claude run commands in the terminal on your computer.
            If you can reach a tool from there with an API key, a CLI or a script, you can ask for
            it in plain words.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="p-8 rounded-2xl bg-gradient-to-b from-dc-surface to-dc-card border-2 border-dc-border hover:border-primary/50 transition-colors text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-6">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Example Commands */}
        <div className="max-w-3xl mx-auto mb-16">
          <p className="text-sm text-muted-foreground text-center mb-4">Just say things like:</p>
          <div className="space-y-3">
            {exampleCommands.map((command, index) => (
              <div 
                key={index}
                className="p-4 rounded-xl bg-dc-surface border border-dc-border font-mono text-sm md:text-base text-center"
              >
                "{command}"
              </div>
            ))}
          </div>
        </div>

        {/* What it looks like in ChatGPT (the old video showed the retired desktop app) */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto items-start">
          <ChatDemo
            className="max-w-lg mx-auto w-full"
            user="Pull the HubSpot contacts we added after last week's conference and save them to a CSV"
            workedFor="Worked for 48s"
            reply="Saved 37 new contacts to conference-leads.csv."
            steps={[
              "Called the HubSpot contacts API with the key in your project's .env file.",
              "Kept contacts created in the last 7 days that came from the conference form.",
              "Saved name, company, email and deal stage to Documents/conference-leads.csv.",
            ]}
          />
          <ChatDemo
            className="max-w-lg mx-auto w-full"
            user="Which pull requests on our website repo are waiting for my review?"
            workedFor="Worked for 19s"
            reply="3 pull requests are waiting for your review."
            steps={[
              "Ran gh pr list in your website repo, filtered to review requests for you.",
              "#412 Pricing page copy, opened 2 days ago.",
              "#418 Fix mobile nav and #419 Update footer links, both opened today.",
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default CASolutionSection;
