import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Apple, Monitor, ArrowRight, Check, Copy, Zap, ChevronDown, ChevronUp } from 'lucide-react';
import { usePostHog } from '@/components/PostHogProvider';

// Cookie utilities
const setCookie = (name: string, value: string, days: number = 365) => {
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
};

const getCookie = (name: string): string | null => {
  const nameEQ = name + "=";
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
};

// Download URLs
const downloadUrls = {
  'macos-m': 'https://github.com/desktop-commander/dc-app-client-releases/releases/latest/download/desktop-commander-mac-arm64.dmg',
  'macos-intel': 'https://github.com/desktop-commander/dc-app-client-releases/releases/latest/download/desktop-commander-mac-x64.dmg',
  'windows': 'https://github.com/desktop-commander/dc-app-client-releases-windows/releases/latest/download/desktop-commander-win-x64.msi',
};

interface RunInDCButtonProps {
  promptTitle: string;
  prompt: string;
  onCopySuccess?: () => void;
}

export function RunInDCButton({ promptTitle, prompt, onCopySuccess }: RunInDCButtonProps) {
  const [hasInstalled, setHasInstalled] = useState<boolean | null>(null);
  const [copied, setCopied] = useState(false);
  const [showDownloadSection, setShowDownloadSection] = useState(false);
  const [showOtherOptions, setShowOtherOptions] = useState(false);
  const posthog = usePostHog();

  useEffect(() => {
    const installed = getCookie('dc_installed');
    setHasInstalled(installed === 'true');
  }, []);

  const handleRunClick = async () => {
    if (!hasInstalled) {
      setShowDownloadSection(true);
      posthog.capture('prompt_library_run_clicked_no_install', {
        prompt_title: promptTitle,
        action: 'show_download_options'
      });
      return;
    }

    try {
      await navigator.clipboard.writeText(prompt);
      setCopied(true);
      
      posthog.capture('prompt_library_prompt_copied', {
        prompt_title: promptTitle,
        has_dc_installed: true,
        copy_method: 'run_button'
      });

      onCopySuccess?.();
      setTimeout(() => setCopied(false), 3000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const handleDownloadClick = (platform: string) => {
    // Use main download_clicked event with prompt library identification
    posthog.capture('download_clicked', {
      platform,
      button_location: 'prompt_detail_page',
      site_section: 'prompt_library',
      prompt_title: promptTitle,
      page_path: window.location.pathname
    });
  };

  const handleAlreadyInstalled = async () => {
    setCookie('dc_installed', 'true', 365);
    setHasInstalled(true);
    setShowDownloadSection(false);
    
    posthog.capture('prompt_library_marked_installed', {
      prompt_title: promptTitle
    });

    try {
      await navigator.clipboard.writeText(prompt);
      setCopied(true);
      onCopySuccess?.();
      setTimeout(() => setCopied(false), 3000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const handleMCPClick = () => {
    posthog.capture('prompt_library_mcp_link_clicked', {
      prompt_title: promptTitle,
      source: 'prompt_detail_page'
    });
  };

  return (
    <div className="space-y-4">
      {/* Main CTA Button - Always visible */}
      <div className="bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 border border-primary/20 rounded-xl p-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/20 rounded-lg">
              <Zap className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="font-medium text-foreground">Ready to run this prompt?</p>
              <p className="text-sm text-muted-foreground">Copy and paste into Desktop Commander</p>
            </div>
          </div>
          <Button 
            size="lg" 
            onClick={handleRunClick}
            className={`min-w-[220px] transition-colors ${
              showDownloadSection 
                ? 'bg-muted hover:bg-muted/80 text-muted-foreground' 
                : 'dc-button-primary'
            }`}
          >
            {copied ? (
              <>
                <Check className="h-5 w-5 mr-2" />
                Copied! Paste in DC
              </>
            ) : (
              <>
                <Copy className="h-5 w-5 mr-2" />
                Run in Desktop Commander
              </>
            )}
          </Button>
        </div>
      </div>

      {/* Download Section - Only shows when user doesn't have DC */}
      {showDownloadSection && (
        <div className="bg-dc-surface-elevated border border-border rounded-xl p-6 animate-in slide-in-from-top-2 duration-300">
          <div className="text-center mb-6">
            <h3 className="text-lg font-semibold mb-2">
              Get Desktop Commander to run this prompt
            </h3>
            <p className="text-sm text-muted-foreground max-w-lg mx-auto">
              Desktop Commander gives AI direct access to your files and system, 
              letting you automate tasks like this in seconds.
            </p>
          </div>

          {/* Download Flow */}
          <div className="flex flex-col items-center gap-4">
            {/* Level 1: Primary download buttons - both Mac options visible */}
            <div className="flex flex-wrap justify-center gap-3">
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
                asChild
              >
                <a 
                  href={downloadUrls['macos-m']} 
                  onClick={() => handleDownloadClick('macos-m')}
                >
                  <Apple className="w-5 h-5 mr-2" />
                  Download for Mac (Apple Silicon)
                </a>
              </Button>
              <Button 
                size="lg"
                variant="outline"
                asChild
              >
                <a 
                  href={downloadUrls['macos-intel']}
                  onClick={() => handleDownloadClick('macos-intel')}
                >
                  <Apple className="w-5 h-5 mr-2" />
                  Mac (Intel)
                </a>
              </Button>
            </div>

            {/* Level 2: Other options button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowOtherOptions(!showOtherOptions)}
              className="text-muted-foreground hover:text-foreground"
            >
              {showOtherOptions ? (
                <>
                  <ChevronUp className="h-4 w-4 mr-1" />
                  Hide other options
                </>
              ) : (
                <>
                  <ChevronDown className="h-4 w-4 mr-1" />
                  Other options
                </>
              )}
            </Button>

            {/* Level 2 expanded: Other options content */}
            {showOtherOptions && (
              <div className="w-full max-w-md animate-in slide-in-from-top-1 duration-200">
                <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 text-sm">
                  {/* Windows download */}
                  <a 
                    href={downloadUrls['windows']}
                    className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1"
                  >
                    <Monitor className="w-4 h-4" />
                    Windows
                    <ArrowRight className="w-3 h-3" />
                  </a>
                  
                  <span className="text-muted-foreground/30">|</span>
                  
                  {/* MCP alternative */}
                  <a 
                    href="/mcp"
                    onClick={handleMCPClick}
                    className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1"
                  >
                    MCP for AI clients
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>

                {/* Level 3: Already installed link */}
                <div className="mt-4 pt-4 border-t border-border/30 text-center">
                  <button 
                    onClick={handleAlreadyInstalled}
                    className="text-xs text-muted-foreground hover:text-primary transition-colors"
                  >
                    I already have Desktop Commander installed →
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default RunInDCButton;
