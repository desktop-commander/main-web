import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, MessageCircle, Github, Youtube } from "lucide-react";

const Community = () => {
  return (
    <section id="community" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Join Our Community
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Connect with other users and contributors to share ideas, get help, and contribute to the project.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-gray-50 rounded-lg p-8 text-center transform hover:scale-105 transition-all duration-200 hover:shadow-lg">
              <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center mx-auto mb-6 shadow-sm">
                <Github className="w-8 h-8 text-gray-900" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">GitHub</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Star the repository, report issues, and contribute code.
              </p>
              <Button 
                className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-2 w-full"
                onClick={() => window.open('https://github.com/wonderwhy-er/DesktopCommanderMCP', '_blank')}
              >
                GITHUB REPO
              </Button>
            </div>
            
            <div className="bg-white border-2 border-blue-600 rounded-lg p-8 text-center shadow-lg transform hover:scale-105 transition-all duration-200">
              <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center mx-auto mb-6 shadow-sm">
                <MessageCircle className="w-8 h-8 text-gray-900" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Discord</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Join our Discord server to chat with the community in real-time.
              </p>
              <Button 
                className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-2 w-full"
                onClick={() => window.open('https://discord.gg/kQ27sNnZr7', '_blank')}
              >
                JOIN DISCORD
              </Button>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-8 text-center transform hover:scale-105 transition-all duration-200 hover:shadow-lg">
              <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center mx-auto mb-6 shadow-sm">
                <Youtube className="w-8 h-8 text-gray-900" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">YouTube Channel</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Follow us on YouTube and vibe code with us.
              </p>
              <Button 
                className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-2 w-full"
                onClick={() => window.open('https://www.youtube.com/@EduardsRuzga', '_blank')}
              >
                WATCH NOW
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;