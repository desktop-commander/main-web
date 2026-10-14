import { Code, Link, Rocket } from "lucide-react";
import ChatDemo from "../remote/ChatDemo";

const BPSolutionSection = () => {
  const features = [
    {
      title: "Build without learning to code",
      description: "Create working apps, sites, and scripts. Skip the technical learning curve and just build.",
      icon: Code,
    },
    {
      title: "Connect the services you need",
      description: "Integrate APIs, databases, and third-party apps. Just describe what should talk to what.",
      icon: Link,
    },
    {
      title: "Deploy without the complexity",
      description: "Track changes in Git and deploy to GitHub Pages or anywhere else, with no commands to memorize.",
      icon: Rocket,
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-dc-card/30">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Desktop Commander turns plain English into working code.
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ask in ChatGPT or Claude. It fills the gaps in your technical skills and lets you build like a full-stack developer.
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

        {/* What it looks like in ChatGPT (the old video showed the retired desktop app) */}
        <div className="max-w-xl mx-auto">
          <ChatDemo
            user="Build a simple landing page for my newsletter in my Projects folder and start it so I can see it"
            workedFor="Worked for 2m 14s"
            reply="The landing page is running. Open localhost:5173 in a browser on your computer to see it."
            steps={[
              "Created a Vite project in Projects/newsletter-site.",
              "Wrote the page with a headline, three benefits and an email signup form.",
              "Installed dependencies and started the dev server in your terminal.",
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default BPSolutionSection;
