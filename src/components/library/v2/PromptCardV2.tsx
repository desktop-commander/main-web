import { UseCase } from "@/data/library/useCases";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
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
  Zap,
  Sparkles,
  Users,
  Timer
} from 'lucide-react';
import { EngagementMeter } from '@/components/library/EngagementMeter';

interface PromptCardV2Props {
  useCase: UseCase;
  onVote?: (id: string) => void;
  onOpen?: (useCase: UseCase) => void;
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

// Get estimated time based on session type
const getEstimatedTime = (sessionType: string): string => {
  return sessionType === 'Instant output' ? '< 1 min' : '2-5 min';
};

export function PromptCardV2({ useCase, onVote: _onVote, onOpen }: PromptCardV2Props) {
  const IconComponent = iconMap[useCase.icon as keyof typeof iconMap] || Code;
  const showNewBadge = isNewPrompt(useCase.dateAdded);
  const estimatedTime = getEstimatedTime(useCase.sessionType);

  const getSessionTypeDisplay = (sessionType: string) => {
    switch (sessionType) {
      case 'Instant output':
        return { text: 'Instant', icon: Zap, color: 'text-green-500' };
      case 'Step-by-step flow':
        return { text: 'Guided', icon: null, color: 'text-blue-500' };
      default:
        return { text: sessionType, icon: null, color: 'text-muted-foreground' };
    }
  };

  const promptUrl = `/library/prompts/${useCase.slug}/`;

  const handleClick = (e: React.MouseEvent) => {
    if (onOpen) {
      onOpen(useCase);
    }
  };

  const sessionDisplay = getSessionTypeDisplay(useCase.sessionType);

  return (
    <a 
      href={promptUrl}
      className="block h-full no-underline"
      onClick={handleClick}
    >
      <Card
        className="dc-card h-full flex flex-col cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/50 relative group hover:border-primary/40 transition-all duration-200"
        role="button"
        tabIndex={-1}
      >
        <CardHeader className="pb-3">
          {/* Top row: Icon + Title + New badge */}
          <div className="flex items-start gap-3">
            <div className="p-2 bg-dc-surface-elevated rounded-lg flex-shrink-0">
              <IconComponent className="h-5 w-5 text-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <CardTitle className="text-lg leading-snug flex items-start gap-2">
                <span className="line-clamp-2">{useCase.title}</span>
                {showNewBadge && (
                  <Badge variant="outline" className="text-xs bg-primary/10 text-primary border-primary/20 flex-shrink-0">
                    <Sparkles className="h-3 w-3 mr-1" />
                    New
                  </Badge>
                )}
              </CardTitle>
            </div>
          </div>
        </CardHeader>

        <CardContent className="flex-1 flex flex-col pt-0">
          {/* Description */}
          <CardDescription className="text-sm leading-relaxed mb-4 line-clamp-3">
            {useCase.description}
          </CardDescription>

          {/* Meta info row */}
          <div className="mt-auto pt-3 border-t border-border/50">
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              {/* Left side: Time estimate + Session type */}
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1">
                  <Timer className="h-3.5 w-3.5" />
                  {estimatedTime}
                </span>
                <span className={`flex items-center gap-1 ${sessionDisplay.color}`}>
                  {sessionDisplay.icon && <sessionDisplay.icon className="h-3.5 w-3.5" />}
                  {sessionDisplay.text}
                </span>
              </div>
              
              {/* Right side: Engagement */}
              <div className="flex items-center gap-2">
                <EngagementMeter count={useCase.votes} size="sm" />
              </div>
            </div>

            {/* Target roles */}
            {useCase.targetRoles.length > 0 && (
              <div className="flex items-center gap-1.5 mt-2 flex-wrap">
                <Users className="h-3 w-3 text-muted-foreground flex-shrink-0" />
                <span className="text-xs text-muted-foreground">
                  {useCase.targetRoles.slice(0, 2).join(', ')}
                  {useCase.targetRoles.length > 2 && ` +${useCase.targetRoles.length - 2}`}
                </span>
              </div>
            )}
          </div>

          {/* Hover indicator */}
          <div className="absolute bottom-3 right-3 text-xs text-muted-foreground/50 opacity-0 group-hover:opacity-100 transition-opacity">
            View prompt →
          </div>
        </CardContent>
      </Card>
    </a>
  );
}

export default PromptCardV2;
