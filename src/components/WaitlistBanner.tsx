import { useState, useEffect } from "react";
import { X, Sparkles, ArrowRight, Zap } from "lucide-react";

const WaitlistBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isClosing, setIsClosing] = useState(false);

  // Check if banner was previously dismissed
  // TEMPORARILY DISABLED for testing - uncomment when ready
  // useEffect(() => {
  //   const isDismissed = localStorage.getItem('waitlist-banner-dismissed');
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
      localStorage.setItem('waitlist-banner-dismissed', 'true');
      // Remove the banner height
      document.documentElement.style.setProperty('--banner-height', '0px');
    }, 300);
  };

  const handleBannerClick = () => {
    window.location.href = '/product/early-access/';
  };

  if (!isVisible) return null;

  // OPTION 1: Compact with inline button
  return (
    <div 
      className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-300 ${
        isClosing ? 'opacity-0 -translate-y-full' : 'opacity-100 translate-y-0'
      }`}
    >
      <div 
        className="bg-gradient-to-r from-dc-card via-amber-500/10 to-dc-card border-b border-amber-500/40 backdrop-blur-md cursor-pointer hover:border-amber-500/60 hover:via-amber-500/15 transition-all duration-300 group hover:shadow-lg hover:shadow-amber-500/10"
        onClick={handleBannerClick}
      >
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex items-center justify-center py-6 gap-3 relative">
            
            {/* Centered content */}
            <div className="flex items-center gap-2 sm:gap-3">
              <Sparkles className="h-4 w-4 text-amber-400 flex-shrink-0 group-hover:scale-110 transition-transform" />
              <span className="text-sm sm:text-base">
                <span className="font-semibold text-blue-600 group-hover:text-blue-500 transition-colors">App Launching Soon</span>
                <span className="hidden sm:inline text-muted-foreground"> — Get early beta access</span>
                <span className="mx-1.5 text-muted-foreground">•</span>
                <span className="font-medium text-blue-600 group-hover:text-blue-500 transition-colors">Join Waitlist</span>
              </span>
              <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-blue-600 group-hover:translate-x-1 group-hover:scale-110 transition-all" />
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
