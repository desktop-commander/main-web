import { UseCase } from "@/data/library/useCases";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { EngagementMeter } from './EngagementMeter';
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
} from 'lucide-react';

interface PromptCardProps {
  useCase: UseCase;
  onVote: (id: string) => void;
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

export function PromptCard({ useCase, onVote: _onVote, onOpen }: PromptCardProps) {
  const IconComponent = iconMap[useCase.icon as keyof typeof iconMap] || Code;
  const showNewBadge = isNewPrompt(useCase.dateAdded);

  const getSessionTypeDisplay = (sessionType: string) => {
    switch (sessionType) {
      case 'Instant output':
        return { text: 'Instant', icon: Zap };
      case 'Step-by-step flow':
        return { text: 'Step-by-Step', icon: null };
      default:
        return { text: sessionType, icon: null };
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
        className="h-full flex flex-col cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/50 relative group bg-card/50 border-border/40 hover:border-primary/30 hover:bg-card/80 transition-all duration-200"
        role="button"
        tabIndex={-1}
      >
        <CardHeader className="pb-2 pt-4 px-4">
          <div className="flex items-start gap-3">
            <div className="p-1.5 bg-primary/10 rounded-md shrink-0">
              <IconComponent className="h-4 w-4 text-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <CardTitle className="text-base leading-snug line-clamp-2">
                {useCase.title}
              </CardTitle>
            </div>
            {showNewBadge && (
              <Badge variant="outline" className="text-[10px] px-1.5 py-0 bg-primary/10 text-primary border-primary/20 shrink-0">
                New
              </Badge>
            )}
          </div>
        </CardHeader>

        <CardContent className="flex-1 flex flex-col pt-0 px-4 pb-4">
          <CardDescription className="text-sm leading-relaxed line-clamp-1 text-muted-foreground/80">
            {useCase.description}
          </CardDescription>
          
          {/* Footer: Session type and popularity */}
          <div className="mt-auto pt-3 flex items-center justify-between">
            <Badge variant="outline" className="text-[10px] px-1.5 py-0 font-normal border-border/30 bg-transparent text-muted-foreground/70">
              {sessionDisplay.icon && <sessionDisplay.icon className="h-3 w-3 mr-1" />}
              {sessionDisplay.text}
            </Badge>
            <EngagementMeter count={useCase.gaClicks || 0} size="sm" showLabel={false} />
          </div>
        </CardContent>
      </Card>
    </a>
  );
}
