import { UseCase } from '@/data/library/useCases';
import { PostHogProvider } from '@/components/PostHogProvider';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { sessionTypeExplanations } from "@/data/library/useCases";
import { getLink } from '@/utils/basePath';
import { 
  User,
  FolderSearch,
  FolderOpen,
  Code,
  BarChart3,
  Settings,
  FileText,
  Archive,
  Shield,
  Database,
  TestTube,
  Clock,
  RefreshCw,
  ArrowRightLeft,
  Activity,
  Search,
  Share2,
  Info,
  BadgeCheck,
  Sparkles,
  Zap,
  Copy,
  Check
} from 'lucide-react';
import { useState, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { ToastAction } from '@/components/ui/toast';
import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/popover';
import { Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip';
import { EngagementMeter } from '@/components/library/EngagementMeter';
import { RunInDCButton } from '@/components/library/RunInDCButton';
import { usePostHog } from '@/components/PostHogProvider';

interface PromptDetailPageProps {
  useCase: UseCase;
}

const iconMap = {
  FolderSearch,
  FolderOrganize: FolderOpen,
  Code,
  BarChart3,
  Settings,
  FileText,
  Archive,
  Shield,
  Database,
  TestTube,
  Clock,
  RefreshCw,
  ArrowRightLeft,
  Activity,
  Search
};

// Helper function to check if a prompt is new (within 14 days)
const isNewPrompt = (dateAdded?: string): boolean => {
  if (!dateAdded) return false;
  
  const addedDate = new Date(dateAdded);
  const today = new Date();
  const diffTime = Math.abs(today.getTime() - addedDate.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  return diffDays <= 14;
};

// Default fallback content for prompts without extended fields
const getDefaultHowItWorks = (title: string): string[] => [
  "Run this prompt in Desktop Commander",
  "AI analyzes your request and gathers context",
  "Executes the necessary actions on your system",
  "Shows you the results and any relevant output"
];

const getDefaultWhyDC = (): string => 
  "Unlike regular AI chatbots, Desktop Commander can actually access your files and execute tasks on your computer — turning this prompt into real action in seconds.";

const PromptDetailPage = ({ useCase }: PromptDetailPageProps) => {
  const [hasVoted, setHasVoted] = useState(false);
  const [showSessionTypeExplainer, setShowSessionTypeExplainer] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const [copiedPrompt, setCopiedPrompt] = useState(false);
  const { toast } = useToast();
  const [exactUses, setExactUses] = useState(0);
  const posthog = usePostHog();

  useEffect(() => {
    if (!useCase) return;
    const key = `useCase_uses_${useCase.id}`;
    const raw = localStorage.getItem(key);
    const value = raw ? Number(raw) : 0;
    setExactUses(Number.isFinite(value) ? value : 0);

    // Track page view
    posthog.capture('prompt_page_viewed', {
      prompt_id: useCase.id,
      prompt_title: useCase.title,
      prompt_slug: useCase.slug,
      prompt_categories: useCase.categories,
      prompt_session_type: useCase.sessionType,
      source_page: 'direct_url',
      url_type: 'seo_friendly'
    });
  }, [useCase?.id, posthog]);

  const incrementUses = () => {
    if (!useCase) return;
    const key = `useCase_uses_${useCase.id}`;
    setExactUses((prev) => {
      const next = prev + 1;
      localStorage.setItem(key, String(next));
      return next;
    });
  };

  if (!useCase) return null;

  const IconComponent = iconMap[useCase.icon as keyof typeof iconMap] || Code;
  const showNewBadge = isNewPrompt(useCase.dateAdded);
  
  // Use extended content or fallbacks
  const displayDescription = useCase.extendedDescription || useCase.description;
  const howItWorks = useCase.howItWorks || getDefaultHowItWorks(useCase.title);
  const whyDC = useCase.whyDC || getDefaultWhyDC();

  const handleClose = () => {
    window.location.href = getLink('/library/prompts');
  };

  const handleCopyPrompt = async () => {
    try {
      await navigator.clipboard.writeText(useCase.prompt);
      setCopiedPrompt(true);
      
      posthog.capture('prompt_library_prompt_copied', {
        prompt_id: useCase.id,
        prompt_title: useCase.title,
        copy_method: 'copy_text_button'
      });

      setTimeout(() => setCopiedPrompt(false), 3000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const handleCopySuccess = () => {
    incrementUses();
    toast({
      title: "Prompt copied!",
      description: "Now paste it in Desktop Commander to run.",
    });
  };

  const getSessionTypeClass = (sessionType: string) => {
    switch (sessionType) {
      case 'Instant output':
        return 'session-instant-output';
      case 'Step-by-step flow':
        return 'session-step-by-step-flow';
      default:
        return 'session-instant-output';
    }
  };

  const getShareUrl = (shareSource = 'share_button') => {
    const url = new URL(getLink(`/library/prompts/${useCase.slug}`), window.location.origin);
    url.searchParams.set('utm_source', 'desktop_commander');
    url.searchParams.set('utm_medium', shareSource);
    url.searchParams.set('utm_campaign', 'prompt_sharing');
    url.searchParams.set('utm_content', useCase.slug || '');
    url.searchParams.set('shared_at', Date.now().toString());
    return url.toString();
  };

  const handleShare = async () => {
    const isMobile =
      typeof navigator !== 'undefined' &&
      (/(Mobi|Android|iPhone|iPad|iPod)/i.test(navigator.userAgent) ||
        (typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(pointer: coarse)').matches));

    const shareSource = isMobile && navigator.share ? 'native_share' : 'clipboard_copy';
    const shareUrl = getShareUrl(shareSource);
    const title = `Prompt: ${useCase.title}`;

    posthog.capture('share_button_clicked', {
      prompt_id: useCase.id,
      prompt_title: useCase.title,
      share_method: shareSource,
      source_page: 'prompt_detail_page'
    });

    try {
      if (isMobile && navigator.share) {
        await navigator.share({
          title,
          text: 'Check out this Desktop Commander prompt',
          url: shareUrl,
        });
        return;
      }

      await navigator.clipboard.writeText(shareUrl);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 1500);
      
      toast({
        title: 'Link copied',
        description: 'Share it with your team.',
        action: (
          <ToastAction altText="Open link" onClick={() => window.open(shareUrl, '_blank', 'noopener,noreferrer')}>
            Open
          </ToastAction>
        ),
      });
    } catch {
      toast({
        title: 'Share failed',
        description: 'Could not share or copy the link.',
        variant: 'destructive',
      });
    }
  };

  return (
    <PostHogProvider>
      <TooltipProvider>
        <div className="min-h-screen bg-background mt-20">
          <div className="container mx-auto px-4 py-8 max-w-4xl">
            {/* Back Button */}
            <Button 
              variant="ghost" 
              onClick={handleClose}
              className="mb-6 -ml-2 text-muted-foreground hover:text-foreground"
            >
              <svg className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Explore all prompts
            </Button>

            {/* Header */}
            <div className="flex items-start gap-4 mb-8">
              <div className="p-3 bg-dc-surface-elevated rounded-lg flex-shrink-0">
                <IconComponent className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <h1 className="text-2xl sm:text-3xl font-bold mb-3 break-words flex items-start gap-2">
                  {useCase.title}
                  {showNewBadge && (
                    <Badge variant="outline" className="text-xs bg-primary/10 text-primary border-primary/20 flex-shrink-0">
                      <Sparkles className="h-3 w-3 mr-1" />
                      New
                    </Badge>
                  )}
                </h1>
                <div className="flex items-center gap-3 flex-wrap">
                  {useCase.verified && (
                    <span className="inline-flex items-center gap-1 text-xs rounded-full border border-primary/20 bg-primary/10 text-primary px-2.5 py-1">
                      <BadgeCheck className="h-3.5 w-3.5" />
                      Verified by DC team
                    </span>
                  )}
                  <Badge 
                    variant="outline" 
                    className="text-xs flex items-center gap-1"
                  >
                    <Zap className="h-3 w-3" />
                    {useCase.sessionType}
                  </Badge>
                  <div className="flex flex-wrap gap-1">
                    {useCase.categories.map((category, index) => (
                      <Badge key={index} variant="outline" className="text-xs">{category}</Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* SECTION 1: What this prompt does */}
            <div className="mb-10">
              <h2 className="text-xl font-semibold mb-4">What this prompt does</h2>
              
              <p className="text-muted-foreground text-base leading-relaxed mb-6">
                {displayDescription}
              </p>

              {/* How it works - simple steps */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-foreground mb-3">How it works</h3>
                <ol className="space-y-2 text-sm text-muted-foreground">
                  {howItWorks.map((step, index) => (
                    <li key={index} className="flex gap-3">
                      <span className="text-primary font-medium">{index + 1}.</span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Why DC - single line callout */}
              <p className="text-sm text-muted-foreground border-l-2 border-primary/30 pl-4">
                <span className="text-foreground">Why Desktop Commander?</span> {whyDC}
              </p>
            </div>

            {/* Best for / Target Roles */}
            <div className="mb-10">
              <h3 className="text-sm font-medium text-muted-foreground mb-3">Best for</h3>
              <div className="flex flex-wrap gap-2">
                {useCase.targetRoles.map((role) => (
                  <Badge key={role} variant="secondary" className="text-xs">
                    {role}
                  </Badge>
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
                  {copiedPrompt ? (
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
              <div className="p-5 bg-dc-surface-elevated rounded-lg border border-border max-h-96 overflow-y-auto">
                <pre className="text-sm whitespace-pre-wrap font-mono text-foreground/90 leading-relaxed">
                  {useCase.prompt}
                </pre>
              </div>
            </div>

            {/* SECTION 3: Run in Desktop Commander CTA */}
            <RunInDCButton 
              promptTitle={useCase.title}
              prompt={useCase.prompt}
              onCopySuccess={handleCopySuccess}
            />

            {/* Footer */}
            <div className="flex justify-between items-center mt-8 pt-6 border-t border-border/50">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <User className="h-4 w-4" />
                  Created by {useCase.author}
                </div>
                <div className="flex items-center gap-1">
                  <EngagementMeter count={useCase.votes + (hasVoted ? 1 : 0)} />
                  <Popover>
                    <PopoverTrigger asChild>
                      <button
                        type="button"
                        aria-label={`Exact uses: ${useCase.votes} (all-time)`}
                        className="inline-flex items-center justify-center text-muted-foreground hover:text-foreground"
                      >
                        <Info className="h-4 w-4" />
                      </button>
                    </PopoverTrigger>
                    <PopoverContent align="end" side="bottom">
                      Exact uses: {useCase.votes} (all-time)
                    </PopoverContent>
                  </Popover>
                </div>
              </div>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleShare}
                    aria-label="Share this prompt"
                    className="flex items-center gap-2"
                  >
                    <Share2 className="h-4 w-4" />
                    <span>{copiedLink ? 'Copied' : 'Share'}</span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Copy link to share</TooltipContent>
              </Tooltip>
            </div>
          </div>
        </div>
      </TooltipProvider>
    </PostHogProvider>
  );
};

export default PromptDetailPage;
