import { Button } from "@/components/ui/button";
import { Apple, Clock, ArrowRight } from "lucide-react";
import posthog from 'posthog-js';

// Download URLs for each platform
export const downloadUrls = {
  'macos-m': 'https://github.com/desktop-commander/dc-app-client-releases/releases/latest/download/desktop-commander-mac-arm64.dmg',
  'macos-intel': 'https://github.com/desktop-commander/dc-app-client-releases/releases/latest/download/desktop-commander-mac-x64.dmg',
  'windows': 'https://github.com/desktop-commander/dc-app-client-releases/releases/latest/download/desktop-commander-win-x64.exe'
};

interface DownloadButtonsProps {
  variant?: 'default' | 'hero' | 'compact';
  location?: string;
}

const DownloadButtons = ({ variant = 'default', location = 'unknown' }: DownloadButtonsProps) => {
  const trackDownload = (platform: string, url: string) => {
    posthog.capture('download_clicked', {
      platform,
      url,
      button_location: location,
      page_path: window.location.pathname
    });
  };

  const trackWindowsWaitlist = () => {
    posthog.capture('windows_waitlist_clicked', {
      button_location: location,
      page_path: window.location.pathname
    });
  };

  const buttonClass = variant === 'hero' 
    ? "bg-primary hover:bg-primary/90 text-primary-foreground"
    : "bg-black hover:bg-black/90 text-white border-2 border-white/20 hover:border-primary/50";

  const disabledButtonClass = variant === 'hero'
    ? "bg-primary/40 text-primary-foreground/60 cursor-not-allowed"
    : "bg-black/40 text-white/60 border-2 border-white/10 cursor-not-allowed";

  const size = variant === 'compact' ? 'default' : 'lg';

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="flex flex-wrap gap-3 justify-center items-start">
        {/* macOS Buttons */}
        <Button 
          size={size}
          className={buttonClass}
          asChild
        >
          <a 
            href={downloadUrls['macos-m']} 
            onClick={() => trackDownload('macos-m', downloadUrls['macos-m'])}
          >
            <Apple className="w-5 h-5" />
            macOS M Chip
          </a>
        </Button>
        <Button 
          size={size}
          className={buttonClass}
          asChild
        >
          <a 
            href={downloadUrls['macos-intel']}
            onClick={() => trackDownload('macos-intel', downloadUrls['macos-intel'])}
          >
            <Apple className="w-5 h-5" />
            macOS Intel
          </a>
        </Button>
        
        {/* Windows Button + Waitlist grouped together */}
        <div className="flex flex-col items-center gap-2">
          <Button 
            size={size}
            className={disabledButtonClass}
            disabled
          >
            <Clock className="w-5 h-5" />
            Windows – Coming Soon
          </Button>
          <a 
            href="/product/early-access" 
            onClick={trackWindowsWaitlist}
            className="text-sm text-primary hover:text-primary/80 font-medium inline-flex items-center gap-1 transition-colors"
          >
            Join the Windows waitlist
            <ArrowRight className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default DownloadButtons;
