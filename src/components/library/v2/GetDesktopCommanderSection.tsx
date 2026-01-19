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

// Detect if user is on Apple Silicon Mac
const detectAppleSilicon = (): boolean => {
  if (typeof window === 'undefined') return true; // Default to Apple Silicon for SSR
  
  const ua = navigator.userAgent.toLowerCase();
  const platform = (navigator as any).userAgentData?.platform?.toLowerCase() || navigator.platform?.toLowerCase() || '';
  
  // Check if it's a Mac
  const isMac = platform.includes('mac') || ua.includes('macintosh') || ua.includes('mac os');
  if (!isMac) return true; // Default to Apple Silicon for non-Mac (they'll use "Other options" anyway)
  
  // Try to detect Apple Silicon
  // Apple Silicon Macs report as ARM in some contexts
  if (ua.includes('arm64') || ua.includes('aarch64')) return true;
  
  // Check for Apple Silicon indicators in userAgentData
  if ((navigator as any).userAgentData?.architecture === 'arm') return true;
  
  // Heuristic: Macs from 2020+ are likely Apple Silicon
  // Safari on Apple Silicon sometimes shows different WebGL renderer
  try {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    if (gl) {
      const debugInfo = (gl as WebGLRenderingContext).getExtension('WEBGL_debug_renderer_info');
      if (debugInfo) {
        const renderer = (gl as WebGLRenderingContext).getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
        // Apple GPU indicates Apple Silicon
        if (renderer && renderer.toLowerCase().includes('apple')) return true;
      }
    }
  } catch (e) {}
  
  // Default to Apple Silicon as it's now the majority of Macs
  return true;
};

// Download URLs
const downloadUrls = {
  'macos-m': 'https://github.com/desktop-commander/dc-app-client-releases/releases/latest/download/desktop-commander-mac-arm64.dmg',
  'macos-intel': 'https://github.com/desktop-commander/dc-app-client-releases/releases/latest/download/desktop-commander-mac-x64.dmg',
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
  const [isAppleSilicon, setIsAppleSilicon] = useState(true);
  const posthog = usePostHog();

  useEffect(() => {
    const installed = getCookie('dc_installed');
    setHasInstalled(installed === 'true');
    setIsAppleSilicon(detectAppleSilicon());
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
    posthog.capture('prompt_library_download_clicked', {
      prompt_title: promptTitle,
      platform,
      source: 'prompt_detail_page'
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

  // Determine primary download based on detection
  const primaryDownload = isAppleSilicon 
    ? { url: downloadUrls['macos-m'], label: 'Download for Mac', platform: 'macos-m' }
    : { url: downloadUrls['macos-intel'], label: 'Download for Mac (Intel)', platform: 'macos-intel' };

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
            className="dc-button-primary min-w-[220px]"
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

          {/* Simplified Download Flow */}
          <div className="flex flex-col items-center gap-4">
            {/* Primary download button - auto-detected */}
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground min-w-[240px]"
              asChild
            >
              <a 
                href={primaryDownload.url} 
                onClick={() => handleDownloadClick(primaryDownload.platform)}
              >
                <Apple className="w-5 h-5 mr-2" />
                {primaryDownload.label}
              </a>
            </Button>

            {/* Already installed - prominent option */}
            <button 
              onClick={handleAlreadyInstalled}
              className="text-sm text-primary hover:text-primary/80 font-medium transition-colors"
            >
              I already have Desktop Commander installed →
            </button>

            {/* Other options - collapsed by default */}
            <div className="w-full max-w-sm pt-4 border-t border-border/30">
              <button 
                onClick={() => setShowOtherOptions(!showOtherOptions)}
                className="w-full text-xs text-muted-foreground hover:text-foreground transition-colors flex items-center justify-center gap-1"
              >
                {showOtherOptions ? (
                  <>
                    <ChevronUp className="h-3 w-3" />
                    Hide other options
                  </>
                ) : (
                  <>
                    <ChevronDown className="h-3 w-3" />
                    Other download options
                  </>
                )}
              </button>

              {showOtherOptions && (
                <div className="mt-3 space-y-2 text-center animate-in slide-in-from-top-1 duration-200">
                  {/* Show alternate Mac version */}
                  <a 
                    href={isAppleSilicon ? downloadUrls['macos-intel'] : downloadUrls['macos-m']}
                    onClick={() => handleDownloadClick(isAppleSilicon ? 'macos-intel' : 'macos-m')}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1"
                  >
                    <Apple className="w-3 h-3" />
                    {isAppleSilicon ? 'Mac (Intel)' : 'Mac (Apple Silicon)'}
                  </a>
                  
                  <div className="text-muted-foreground/50">·</div>
                  
                  {/* Windows waitlist */}
                  <a 
                    href="/product/early-access" 
                    className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1"
                  >
                    <Monitor className="w-3 h-3" />
                    Windows (join waitlist)
                  </a>
                  
                  <div className="text-muted-foreground/50">·</div>
                  
                  {/* MCP alternative */}
                  <a 
                    href="/mcp"
                    onClick={handleMCPClick}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1"
                  >
                    Using your own AI client? Get MCP
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default RunInDCButton;
