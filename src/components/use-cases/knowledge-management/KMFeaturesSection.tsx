import { BookOpen, RefreshCw, FolderTree, Network } from "lucide-react";

const KMFeaturesSection = () => {
  const features = [
    {
      title: "Turn conversations into permanent knowledge",
      description: '"Save this explanation to my Obsidian vault as a new note about Docker networking" → Your AI insights are instantly preserved in your knowledge base.',
      command: "Create a new note in my knowledge base about what we just discussed",
      icon: BookOpen
    },
    {
      title: "Keep documentation synchronized automatically",
      description: '"Update my project README based on the changes we just made to the code" → Documentation that writes itself as you work.',
      command: "Update the setup guide based on our conversation",
      icon: RefreshCw
    },
    {
      title: "Organize knowledge without manual filing",
      description: '"Move all meeting notes from this week to the Q4 folder and create a summary" → Your filing system maintains itself.',
      command: "Organize my daily notes by topic and create an index",
      icon: FolderTree
    },
    {
      title: "Build living knowledge bases",
      description: '"Create a technical spec from our discussion and link it to related notes" → Transform conversations into structured, connected documentation.',
      command: "Generate a knowledge base from this codebase with proper categorization",
      icon: Network
    }
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
