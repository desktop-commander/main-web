import { BookOpen, RefreshCw, FolderTree, Network, Sparkles, FileEdit, Move, FolderOpen, MessageSquare, Command, History } from "lucide-react";
import ChatDemo from "../remote/ChatDemo";

const KMSolutionSection = () => {
  const steps = [
    {
      icon: FolderOpen,
      title: "Point to your notes folder",
      description: "Tell it where your notes live: an Obsidian vault, a docs folder in a repo, or any folder on your computer."
    },
    {
      icon: MessageSquare,
      title: "Work in the chat as usual",
      description: "Ask questions, discuss ideas, get help. It reads the notes it needs along the way."
    },
    {
      icon: Command,
      title: "Ask it to save and organize",
      description: '"Save this to my notes" • "Organize by topic" • "Update the README"'
    },
    {
      icon: History,
      title: "Pick up where you left off",
      description: "Next time, ask it to read your notes first. The context is already written down."
    }
  ];

  const features = [
    {
      title: "Turn conversations into permanent knowledge",
      command: "Save this explanation to my notes",
      icon: BookOpen
    },
    {
      title: "Keep documentation synchronized",
      command: "Update the README based on our changes",
      icon: RefreshCw
    },
    {
      title: "Organize without manual filing",
      command: "Move meeting notes to Q4 folder",
      icon: FolderTree
    },
    {
      title: "Build living knowledge bases",
      command: "Create a technical spec from our discussion",
      icon: Network
    }
  ];

  const benefits = [
    {
      icon: Sparkles,
      title: "Never lose valuable insights",
      description: "Any useful answer can be saved to your knowledge base with one message."
    },
    {
      icon: FileEdit,
      title: "Documentation that keeps up",
      description: "Ask it to update your notes and docs as your work changes."
    },
    {
      icon: Move,
      title: "No copying and pasting",
      description: "ChatGPT or Claude writes to your files directly, so nothing gets pasted between the chat and your notes."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-dc-card/30">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            How Desktop Commander Solves It
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Desktop Commander lets ChatGPT or Claude read your notes, and also write, edit, and
            organize them directly.
          </p>
        </div>

        {/* 4 Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="relative flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center mb-4">
                <step.icon className="w-8 h-8 text-primary" />
              </div>
              <div className="absolute top-0 left-1/2 translate-x-4 -translate-y-1 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xs">
                {index + 1}
              </div>
              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
              <p className="text-muted-foreground text-sm">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Divider + Benefits Header */}
        <div className="my-16 text-center">
          <div className="w-16 h-px bg-dc-border mx-auto mb-8" />
          <h3 className="text-2xl md:text-3xl font-bold mb-4">What you get</h3>
        </div>

        {/* Key Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="p-6 rounded-2xl bg-gradient-to-b from-dc-surface to-dc-card border-2 border-dc-border hover:border-primary/50 transition-colors text-center"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 border-2 border-primary/20 flex items-center justify-center mx-auto mb-4">
                <benefit.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* What it looks like in ChatGPT (the old video showed the retired desktop app) */}
        <div className="mb-20">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold">
              See it in action
            </h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto items-start">
            <ChatDemo
              className="max-w-lg mx-auto w-full"
              user="Save what we just worked out about Docker networking as a note in my Obsidian vault"
              workedFor="Worked for 14s"
              reply="Saved the note to your vault."
              steps={[
                "Created Tech/Docker networking.md in your Obsidian vault.",
                "Added the summary of bridge and host networks and the commands we tested.",
                "Linked it from your Docker index note and tagged it #docker.",
              ]}
            />
            <ChatDemo
              className="max-w-lg mx-auto w-full"
              user="Read my project notes and tell me what we decided about the pricing page"
              workedFor="Worked for 27s"
              reply="You made three decisions about the pricing page."
              steps={[
                "Searched 214 notes in Projects/Website for pricing.",
                "Drop the annual toggle, and show the free plan first.",
                "Move the FAQ below the plans. Each point links to the note it came from.",
              ]}
            />
          </div>
          <p className="text-center text-sm text-muted-foreground mt-6">
            Create, update, and organize your knowledge base with simple commands
          </p>
        </div>

        {/* Features - 2x2 Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="p-6 rounded-xl bg-dc-surface border border-dc-border hover:border-primary/30 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
                  <feature.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground font-mono text-sm">"{feature.command}"</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KMSolutionSection;
