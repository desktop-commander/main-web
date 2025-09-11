import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import UseCases from "@/components/UseCases";
import TrustedBy from "@/components/TrustedBy";
import PromptLibrary from "@/components/PromptLibrary";
import Installation from "@/components/Installation";
import Blog from "@/components/Blog";
import Community from "@/components/Community";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <UseCases />
        <TrustedBy />
        <Installation />
        <PromptLibrary />
        <Blog />
        <Community />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
