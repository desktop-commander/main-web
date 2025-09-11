import { Star, Download, Github, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import TestimonialsStrip from "./TestimonialsStrip";

const TrustedBy = () => {

  const stats = [
    {
      icon: Star,
      value: "9.52/10",
      label: "User Rating",
      description: "Developer satisfaction"
    },
    {
      icon: Download,
      value: "26k+",
      label: "Weekly Downloads",
      description: "Active installations"
    },
    {
      icon: Github,
      value: "4.3k+",
      label: "GitHub Stars",
      description: "Community trust"
    }
  ];

  const testimonials = [
    {
      quote: "Desktop Commander eliminated hours of CLI debugging. Game-changing for our team's velocity.",
      author: "Sarah Chen",
      role: "Senior DevOps Engineer",
      company: "TechFlow"
    },
    {
      quote: "As a founder without deep technical background, DC lets me build and deploy our MVP independently.",
      author: "Marcus Rodriguez",
      role: "Founder & CEO",
      company: "StartupLab"
    },
    {
      quote: "I onboard new developers 3x faster now. They can explore our codebase conversationally.",
      author: "Jennifer Park",
      role: "Engineering Manager",
      company: "DataCore"
    },
    {
      quote: "Setting up test environments used to take days. Now I describe what I need and DC handles it.",
      author: "Alex Thompson",
      role: "QA Lead",
      company: "CloudTech"
    },
    {
      quote: "Deployment is now as simple as having a conversation. Our release cycle went from weeks to hours.",
      author: "David Kim",
      role: "Lead Developer",
      company: "InnovateLab"
    },
    {
      quote: "Finally, infrastructure management that doesn't require a PhD in DevOps. Absolutely revolutionary.",
      author: "Maria Santos",
      role: "CTO",
      company: "GrowthTech"
    },
    {
      quote: "DC transformed how we handle client deployments. What used to take consultants days now takes minutes.",
      author: "James Wilson",
      role: "Technical Consultant",
      company: "DevConsult Pro"
    },
    {
      quote: "Our QA team can now set up complex testing scenarios without waiting for engineering support.",
      author: "Lisa Chang",
      role: "QA Manager",
      company: "TestFlow"
    },
    {
      quote: "From prototype to production in record time. DC is like having a senior developer on speed dial.",
      author: "Robert Taylor",
      role: "Founder",
      company: "QuickStart"
    },
    {
      quote: "Debugging across our entire stack through conversation saved us countless hours of investigation.",
      author: "Amy Foster",
      role: "Support Lead",
      company: "SupportTech"
    },
    {
      quote: "No more CLI documentation diving. I can deploy complex applications just by describing what I need.",
      author: "Chris Anderson",
      role: "Full Stack Developer",
      company: "WebSolutions"
    },
    {
      quote: "Our team productivity increased 10x. New developers are contributing on day one instead of week three.",
      author: "Nina Patel",
      role: "Engineering Director",
      company: "ScaleUp"
    },
    {
      quote: "Managing multiple client environments used to be a nightmare. Now it's conversational and intuitive.",
      author: "Tom Rodriguez",
      role: "DevOps Consultant",
      company: "CloudExperts"
    },
    {
      quote: "DC bridges the gap between technical and non-technical team members perfectly.",
      author: "Sarah Johnson",
      role: "Product Manager",
      company: "ProductFlow"
    },
    {
      quote: "Automated our entire deployment pipeline through simple conversations. Incredible time savings.",
      author: "Mike Chen",
      role: "Site Reliability Engineer",
      company: "ReliableTech"
    },
    {
      quote: "Research data processing that used to take weeks now happens in hours through natural language.",
      author: "Dr. Emma Wright",
      role: "Research Director",
      company: "DataScience Labs"
    },
    {
      quote: "Our startup went from idea to deployed MVP in days, not months. DC made the impossible possible.",
      author: "Jake Martinez",
      role: "Co-founder",
      company: "RapidBuild"
    },
    {
      quote: "Client demos are now live deployments instead of static presentations. Game changer for sales.",
      author: "Rachel Green",
      role: "Solutions Architect",
      company: "EnterpriseFlow"
    },
    {
      quote: "Complex infrastructure becomes simple conversations. Our junior developers deploy like seniors.",
      author: "Kevin Liu",
      role: "Platform Engineer",
      company: "CloudFirst"
    },
    {
      quote: "UX prototyping with real backend functionality in minutes. Design-dev cycle shortened dramatically.",
      author: "Sophie Martin",
      role: "Senior UX Designer",
      company: "DesignFlow"
    },
    {
      quote: "Troubleshooting production issues through conversation beats digging through logs any day.",
      author: "Carlos Vega",
      role: "DevOps Lead",
      company: "ProductionOps"
    },
    {
      quote: "Our consulting business scaled 5x because we can handle any tech stack conversationally.",
      author: "Anna Thompson",
      role: "Technical Director",
      company: "TechConsult"
    }
  ];



  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Trusted by the AI community
          </h2>
        </div>

        {/* Trust Stats - Horizontal Flow */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 mb-12">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="flex items-center gap-4 group">
                <div className="flex items-center justify-center w-12 h-12 bg-dc-blue/10 rounded-xl group-hover:bg-dc-blue/20 transition-all duration-300">
                  <IconComponent className="h-6 w-6 text-dc-blue" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-slate-900">
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-600">
                    {stat.label}
                  </div>
                </div>
                {index < stats.length - 1 && (
                  <div className="hidden md:block w-px h-12 bg-slate-200 ml-8" />
                )}
              </div>
            );
          })}
        </div>

        {/* Testimonials - Two-row Marquee */}
        <div className="mb-12">
          <TestimonialsStrip testimonials={testimonials} />
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <p className="text-xl text-slate-600 mb-8">
            Try it out for yourself or join our community!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="lg" asChild>
              <a href="#getting-started">
                <Terminal className="h-5 w-5" />
                Install Desktop Commander
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="https://discord.com/channels/1119885301872070706/1280461670979993613" target="_blank" rel="noopener noreferrer">
                Join our Discord
              </a>
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default TrustedBy;