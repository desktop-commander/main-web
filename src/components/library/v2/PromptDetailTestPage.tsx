import { useState } from 'react';
import { PostHogProvider } from '@/components/PostHogProvider';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Toaster } from '@/components/ui/sonner';
import { toast } from 'sonner';
import { RunInDCButton } from './GetDesktopCommanderSection';
import { PromptCardV2 } from './PromptCardV2';
import { UseCase } from '@/data/library/useCases';
import { 
  User,
  RefreshCw,
  Share2,
  Copy,
  Check,
  BadgeCheck,
  ArrowLeft,
  Zap
} from 'lucide-react';

// Sample prompt data for testing
const samplePrompt: UseCase = {
  id: "8",
  title: "Organise my Downloads folder",
  slug: "organise-my-downloads-folder",
  description: "Organise messy downloads folder into relevant subfolders.",
  prompt: "Analyze my Downloads folder and organize all files into subfolders by type (Documents, Images, Videos, Archives, etc.). Show me what you're doing and create a summary of what was organized. Open the new folder when you are done.",
  sessionType: "Instant output",
  targetRoles: ["Vibe Coders", "Content makers", "Data analysts", "Professionals", "Developers"],
  categories: ["Organize files"],
  votes: 66,
  gaClicks: 66,
  icon: "RefreshCw",
  author: "DC team",
  verified: true,
  dateAdded: "2024-12-01"
};

const samplePrompt2: UseCase = {
  id: "2",
  title: "Build A Feature from Scratch",
  slug: "build-a-feature-from-scratch",
  description: "Build a new feature for your app based on your existing codebase.",
  prompt: "# Feature Development Assistant...",
  sessionType: "Step-by-step flow",
  targetRoles: ["Developers", "Vibe Coders"],
  categories: ["Build features and products"],
  votes: 51,
  gaClicks: 51,
  icon: "Settings",
  author: "DC team",
  verified: true
};

const samplePrompt3: UseCase = {
  id: "3",
  title: "Analyze My Data File",
  slug: "analyze-my-data-file",
  description: "Make sense of a data file that you have.",
  prompt: "Look for the file called 'filename' in my [folder]. Analyze this file and tell me...",
  sessionType: "Instant output",
  targetRoles: ["Professionals", "Data analysts"],
  categories: ["Analyze data"],
  votes: 27,
  gaClicks: 27,
  icon: "TestTube",
  author: "DC team",
  verified: true,
  dateAdded: "2025-01-10"
};

export default function PromptDetailTestPage() {
  const [copied, setCopied] = useState(false);
  const useCase = samplePrompt;

  const handleCopyPrompt = async () => {
    try {
      await navigator.clipboard.writeText(useCase.prompt);
      setCopied(true);
      toast.success('Prompt copied to clipboard!');
      setTimeout(() => setCopied(false), 3000);
    } catch (err) {
      toast.error('Failed to copy prompt');
    }
  };

  const handleCopySuccess = () => {
    toast.success('Prompt copied! Now paste it in Desktop Commander to run.');
  };

  return (
    <PostHogProvider>
      <TooltipProvider>
        <Toaster position="top-center" />
        
        <div className="container mx-auto px-4 py-8 max-w-6xl">
          {/* Test Header */}
          <div className="mb-8 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
            <h2 className="text-lg font-bold text-yellow-600 mb-2">🧪 CTA Test Page v2</h2>
            <p className="text-sm text-muted-foreground">
              Updated layout: Expanded description → Prompt → Run CTA at the bottom
            </p>
          </div>

          {/* Section 1: New Card Design */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Card Design (V2)</h2>
            <p className="text-muted-foreground mb-6">Cleaner cards with time estimate and target roles</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <PromptCardV2 useCase={samplePrompt} />
              <PromptCardV2 useCase={samplePrompt2} />
              <PromptCardV2 useCase={samplePrompt3} />
            </div>
          </section>

          <Separator className="my-12" />

          {/* Section 2: New Prompt Detail Page Layout */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Prompt Detail Page Layout (V2)</h2>
            <p className="text-muted-foreground mb-6">Description → Prompt → CTA flow</p>

            {/* Simulated Prompt Detail Page */}
            <div className="border border-border rounded-xl p-6 sm:p-8 bg-dc-surface-elevated/30">
              
              {/* Back button */}
              <Button 
                variant="ghost" 
                className="mb-6 -ml-2 text-muted-foreground hover:text-foreground"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Library
              </Button>

              {/* Header */}
              <div className="flex items-start gap-4 mb-8">
                <div className="p-3 bg-dc-surface-elevated rounded-lg flex-shrink-0">
                  <RefreshCw className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h1 className="text-2xl sm:text-3xl font-bold mb-3">
                    {useCase.title}
                  </h1>
                  <div className="flex items-center gap-3 flex-wrap text-sm">
                    {useCase.verified && (
                      <span className="inline-flex items-center gap-1 text-xs rounded-full border border-primary/20 bg-primary/10 text-primary px-2.5 py-1">
                        <BadgeCheck className="h-3.5 w-3.5" />
                        Verified by DC team
                      </span>
                    )}
                    <Badge variant="outline" className="text-xs">
                      <Zap className="h-3 w-3 mr-1" />
                      {useCase.sessionType}
                    </Badge>
                    {useCase.categories.map((cat, i) => (
                      <Badge key={i} variant="outline" className="text-xs">{cat}</Badge>
                    ))}
                  </div>
                </div>
              </div>

              {/* SECTION 1: What this prompt does */}
              <div className="mb-10">
                <h2 className="text-xl font-semibold mb-4">What this prompt does</h2>
                
                <p className="text-muted-foreground text-base leading-relaxed mb-6">
                  This prompt automatically organizes your messy Downloads folder into clean subfolders 
                  by file type — documents, images, videos, archives, and more. No manual sorting required.
                </p>

                {/* How it works - simple steps */}
                <div className="mb-6">
                  <h3 className="text-sm font-medium text-foreground mb-3">How it works</h3>
                  <ol className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex gap-3">
                      <span className="text-primary font-medium">1.</span>
                      <span>Run this prompt in Desktop Commander</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-medium">2.</span>
                      <span>AI scans your Downloads folder and identifies all file types</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-medium">3.</span>
                      <span>Creates organized subfolders and moves files automatically</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-medium">4.</span>
                      <span>Opens the folder and shows you a summary of what was organized</span>
                    </li>
                  </ol>
                </div>

                {/* Why DC - single line callout */}
                <p className="text-sm text-muted-foreground border-l-2 border-primary/30 pl-4">
                  <span className="text-foreground">Why Desktop Commander?</span> Unlike regular AI chatbots, 
                  Desktop Commander can actually access your files and execute tasks on your computer — 
                  turning this prompt into real action in seconds.
                </p>
              </div>

              {/* Target Roles - more spacing */}
              <div className="mb-10">
                <h3 className="text-sm font-medium text-muted-foreground mb-3">Best for</h3>
                <div className="flex flex-wrap gap-2">
                  {useCase.targetRoles.map((role) => (
                    <Badge key={role} variant="secondary" className="text-xs">{role}</Badge>
                  ))}
                </div>
              </div>

              <Separator className="my-10" />

              {/* SECTION 2: The Prompt */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-semibold">The Prompt</h2>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={handleCopyPrompt}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    {copied ? (
                      <>
                        <Check className="h-4 w-4 mr-2" />
                        Copied
                      </>
                    ) : (
                      <>
                        <Copy className="h-4 w-4 mr-2" />
                        Copy text
                      </>
                    )}
                  </Button>
                </div>
                <div className="p-5 bg-background rounded-lg border border-border">
                  <pre className="text-sm whitespace-pre-wrap font-mono text-foreground/90 leading-relaxed">
                    {useCase.prompt}
                  </pre>
                </div>
              </div>

              {/* SECTION 3: Run in Desktop Commander CTA - AT THE BOTTOM */}
              <RunInDCButton 
                promptTitle={useCase.title}
                prompt={useCase.prompt}
                onCopySuccess={handleCopySuccess}
              />

              {/* Footer */}
              <div className="flex justify-between items-center mt-8 pt-6 border-t border-border/50">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <User className="h-4 w-4" />
                  Created by {useCase.author}
                </div>
                <Button variant="ghost" size="sm">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
              </div>
            </div>
          </section>
        </div>
      </TooltipProvider>
    </PostHogProvider>
  );
}
