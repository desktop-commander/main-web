import { useState, useEffect } from "react";
import { X, Rocket, ArrowRight, Download } from "lucide-react";

const WaitlistBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isClosing, setIsClosing] = useState(false);

  // Check if banner was previously dismissed
  // TEMPORARILY DISABLED for testing - uncomment when ready
  // useEffect(() => {
  //   const isDismissed = localStorage.getItem('launch-banner-dismissed');
  //   if (isDismissed === 'true') {
  //     setIsVisible(false);
  //   }
  // }, []);

  // Add banner-visible class to body when banner is shown
  useEffect(() => {
    if (isVisible) {
      document.documentElement.style.setProperty('--banner-height', '64px');
    }
    return () => {
      document.documentElement.style.setProperty('--banner-height', '0px');
    };
  }, [isVisible]);

  const handleDismiss = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent triggering the banner click
    setIsClosing(true);
    setTimeout(() => {
      setIsVisible(false);
      localStorage.setItem('launch-banner-dismissed', 'true');
      // Remove the banner height
      document.documentElement.style.setProperty('--banner-height', '0px');
    }, 300);
  };

  const handleBannerClick = () => {
    window.location.href = 'https://download.desktopcommander.app/';
  };

  if (!isVisible) return null;

  return (
    <div 
      className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-300 ${
        isClosing ? 'opacity-0 -translate-y-full' : 'opacity-100 translate-y-0'
      }`}
    >
      <div 
        className="bg-gradient-to-r from-blue-500/20 via-cyan-500/25 to-blue-500/20 border-b-2 border-blue-400/60 backdrop-blur-md cursor-pointer hover:border-blue-400/80 hover:from-blue-500/25 hover:via-cyan-500/30 hover:to-blue-500/25 transition-all duration-300 group hover:shadow-lg hover:shadow-blue-500/20"
        onClick={handleBannerClick}
      >
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex items-center justify-center py-6 gap-3 relative">
            
            {/* Centered content */}
            <div className="flex items-center gap-2 sm:gap-3 flex-wrap justify-center">
              <Rocket className="h-5 w-5 text-blue-400 flex-shrink-0 group-hover:scale-110 transition-transform drop-shadow-sm" />
              <span className="text-sm sm:text-base flex items-center gap-1.5 flex-wrap justify-center">
                <span className="font-bold text-blue-400 group-hover:text-blue-300 transition-colors">Desktop Commander App is Live!</span>
                <span className="hidden sm:inline text-foreground/90 font-medium">— Be the first to try it</span>
                <span className="text-foreground/70">•</span>
                <span className="font-bold text-cyan-400 group-hover:text-cyan-300 transition-colors whitespace-nowrap inline-flex items-center gap-1">
                  <Download className="h-4 w-4" />
                  Download Now
                </span>
              </span>
              <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 text-cyan-400 group-hover:translate-x-1 group-hover:scale-110 transition-all drop-shadow-sm flex-shrink-0" />
            </div>

            {/* Close button - absolute positioned */}
            <button
              onClick={handleDismiss}
              className="absolute right-2 sm:right-4 p-1 hover:bg-dc-surface/50 rounded transition-colors text-muted-foreground hover:text-foreground"
              aria-label="Dismiss banner"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaitlistBanner;
