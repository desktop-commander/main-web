import { Button } from "@/components/ui/button";
import { Download, Apple, Monitor } from "lucide-react";
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

  const buttonClass = variant === 'hero' 
    ? "bg-primary hover:bg-primary/90 text-primary-foreground"
    : "bg-black hover:bg-black/90 text-white border-2 border-white/20 hover:border-primary/50";

  const size = variant === 'compact' ? 'default' : 'lg';

  return (
    <div className="flex flex-wrap gap-3 justify-center">
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
      <Button 
        size={size}
        className={buttonClass}
        asChild
      >
        <a 
          href={downloadUrls['windows']}
          onClick={() => trackDownload('windows', downloadUrls['windows'])}
        >
          <Monitor className="w-5 h-5" />
          Windows
        </a>
      </Button>
    </div>
  );
};

export default DownloadButtons;
