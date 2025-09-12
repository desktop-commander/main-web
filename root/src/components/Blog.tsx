import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const blogPosts = [
  {
    id: 1,
    title: "Why I Went From REST APIs to MCPs to CLIs and ended up with Self-Improving AI",
    description: "Exploring the evolution from traditional REST APIs to MCPs and CLIs, and how this journey led to building self-improving AI systems.",
    thumbnail: "/lovable-uploads/7a730910-107b-4522-8ec0-e6162de4b964.png",
    youtubeUrl: "https://www.youtube.com/@EduardsRuzga", // Update with specific video URL when available
    duration: "23:20",
    date: "December 15, 2024"
  },
  {
    id: 2,
    title: "Claude with MCPs Replaced Cursor & Windsurf — How Did That Happen?",
    description: "Discover how Claude with MCP integration became a powerful alternative to popular development tools like Cursor and Windsurf.",
    thumbnail: "/lovable-uploads/a308c575-ec23-4441-a47b-4972493a21fc.png",
    youtubeUrl: "https://www.youtube.com/@EduardsRuzga", // Update with specific video URL when available
    duration: "44:44",
    date: "December 10, 2024"
  },
  {
    id: 3,
    title: "Vibe Coding With Desktop Commander: Code Documentation + Obsidian + GitHub",
    description: "Live coding session showcasing Desktop Commander's integration with Obsidian and GitHub for enhanced development workflows.",
    thumbnail: "/lovable-uploads/475851c6-f486-41b0-ad13-794aa399dfb7.png",
    youtubeUrl: "https://www.youtube.com/@EduardsRuzga", // Update with specific video URL when available
    duration: "1:00:13",
    date: "December 5, 2024"
  },
  {
    id: 4,
    title: "This Developer Ditched Windsurf, Cursor Using Claude with MCPs",
    description: "A developer's journey from popular IDEs to Claude with MCP integration, showcasing the power and flexibility of this new approach.",
    thumbnail: "/lovable-uploads/26d7f576-3160-4635-a542-bd03a8bc2ef1.png",
    youtubeUrl: "https://medium.com/@example/developer-ditched-windsurf-cursor", // Replace with actual URL
    duration: "Read",
    date: "December 1, 2024"
  }
];

const Blog = () => {
  return (
    <section id="blog" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Blog
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Follow our content on AI, MCPs and latest tools in the industry.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: false,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-3 md:-ml-4">
              {blogPosts.map((post) => (
                <CarouselItem key={post.id} className="pl-3 md:pl-4 sm:basis-full md:basis-1/2 lg:basis-1/3">
                  <Card className="group cursor-pointer hover:shadow-lg transition-all duration-300 bg-white border border-gray-200 h-full">
                    <a 
                      href={post.youtubeUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block h-full"
                    >
                      <div className="relative overflow-hidden rounded-t-lg">
                        <img
                          src={post.thumbnail}
                          alt={post.title}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                          {post.duration}
                        </div>
                        {post.id === 2 && (
                          <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full font-semibold flex items-center gap-1">
                            🔥 Hot
                          </div>
                        )}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                      </div>
                      
                      <CardContent className="p-5 flex flex-col h-[calc(100%-12rem)]">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="text-base font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200 leading-tight line-clamp-2">
                            {post.title}
                          </h3>
                          <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors duration-200 flex-shrink-0 mt-1 ml-2" />
                        </div>
                        
                        <p className="text-xs text-gray-500 mb-3">
                          {post.date}
                        </p>
                        
                        <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 flex-1">
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