import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { getAssetPath } from "@/utils/assets";
import { trackBlogPostClick } from "@/lib/analytics/tracking";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const blogPostsData = [
  {
    id: 1,
    title: "Build a Google Analytics AI Assistant in 10 Minutes",
    description: "In my previous article, I explained how our Desktop Commander team uses CLIs and AI agents to automate various workflows — from BigQuery data analysis to CRM integrations to task management.",
    thumbnail: "b5.png",
    youtubeUrl: "https://wonderwhy-er.medium.com/build-a-google-analytics-ai-assistant-in-10-minutes-a19f0971d4b6",
    duration: "Read",
    date: "Oct 6, 2025",
    badge: "new"
  },
  {
    id: 2,
    title: "Why I Went From REST APIs to MCPs to CLIs and Ended Up with Self-Improving AI",
    description: "In recent months, I noticed something strange about my workflow. Instead of looking for MCPs to give to AI, I started asking for CLIs instead.",
    thumbnail: "meetup-poster.png",
    youtubeUrl: "https://medium.com/@wonderwhy-er/why-i-went-from-rest-apis-to-mcps-to-clis-and-ended-up-with-self-improving-ai-8b492631f565",
    duration: "Read",
    date: "September 12, 2025"
  },
  {
    id: 3,
    title: "Why I Went From REST APIs to MCPs to CLIs and ended up with Self-Improving AI",
    description: "Exploring the evolution from traditional REST APIs to MCPs and CLIs, and how this journey led to building self-improving AI systems.",
    thumbnail: "b1.png",
    youtubeUrl: "https://www.youtube.com/watch?v=xNlSt-4vTTo",
    duration: "23:20",
    date: "Sep 8, 2025"
  },
  {
    id: 4,
    title: "Vibe Coding With Desktop Commander: Code Documentation + Obsidian + GitHub",
    description: "Live coding session showcasing Desktop Commander's integration with Obsidian and GitHub for enhanced development workflows.",
    thumbnail: "b2.png",
    youtubeUrl: "https://www.youtube.com/watch?v=523coCdL8ZI&t=4s",
    duration: "1:00:13",
    date: "Sep 10, 2025"
  },
  {
    id: 5,
    title: "Claude with MCPs Replaced Cursor & Windsurf — How Did That Happen?",
    description: "Discover how Claude with MCP integration became a powerful alternative to popular development tools like Cursor and Windsurf.",
    thumbnail: "b3.png",
    youtubeUrl: "https://youtu.be/ly3bed99Dy8?si=pMrEbYD7ePOA3cRA",
    duration: "44:44",
    date: "Mar 19, 2025"
  },
  {
    id: 6,
    title: "This Developer Ditched Windsurf, Cursor Using Claude with MCPs",
    description: "A developer's journey from popular IDEs to Claude with MCP integration, showcasing the power and flexibility of this new approach.",
    thumbnail: "b4.png",
    youtubeUrl: "https://wonderwhy-er.medium.com/claude-with-mcps-replaced-cursor-windsurf-how-did-that-happen-c1d1e2795e96",
    duration: "Read",
    date: "December 1, 2024"
  }
];

const Blog = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
  const blogPosts = blogPostsData.map(post => ({
    ...post,
    thumbnail: getAssetPath(post.thumbnail)
  }));

  const handleBlogPostClick = (post: typeof blogPostsData[0], index: number) => {
    trackBlogPostClick({
      post_title: post.title,
      post_url: post.youtubeUrl,
      post_type: post.duration === 'Read' ? 'article' : 'video',
      post_position: index + 1,
      post_date: post.date,
      has_badge: post.badge
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => { if (sectionRef.current) observer.unobserve(sectionRef.current); };
  }, []);

  return (
    <section ref={sectionRef} id="blog" className="py-20 bg-dc-surface/30">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        <div className={`text-center mb-12 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Hear from our founders
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Follow our team on YouTube and Medium
          </p>
        </div>
        
        <div className={`max-w-6xl mx-auto transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <Carousel opts={{ align: "start", loop: false }} className="w-full">
            <CarouselContent className="-ml-3 md:-ml-4">
              {blogPosts.map((post, index) => (
                <CarouselItem 
                  key={post.id} 
                  className={`pl-3 md:pl-4 sm:basis-full md:basis-1/2 lg:basis-1/3 transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: isVisible ? `${500 + index * 150}ms` : '0ms' }}
                >
                  <Card className="group cursor-pointer hover:shadow-xl transition-all duration-300 bg-dc-card border border-dc-border h-full hover:scale-[1.02] hover:border-dc-accent/30">
                    <a 
                      href={post.youtubeUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block h-full"
                      onClick={() => handleBlogPostClick(post, index)}
                    >
                      <div className="relative overflow-hidden rounded-t-lg">
                        <img
                          src={post.thumbnail}
                          alt={post.title}
                          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                          {post.duration}
                        </div>
                        {post.badge === 'new' && (
                          <div className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
                            ✨ New
                          </div>
                        )}
                        {post.id === 3 && (
                          <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
                            🔥 Hot
                          </div>
                        )}
                      </div>
                      
                      <CardContent className="p-5 flex flex-col h-[calc(100%-12rem)]">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors leading-tight line-clamp-2">
                            {post.title}
                          </h3>
                          <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-all flex-shrink-0 mt-1 ml-2" />
                        </div>
                        
                        <p className="text-xs text-muted-foreground mb-3">
                          {post.date}
                        </p>
                        
                        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3 flex-1">
                          {post.description}
                        </p>
                      </CardContent>
                    </a>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Blog;
