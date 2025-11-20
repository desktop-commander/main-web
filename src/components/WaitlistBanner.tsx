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
        className="bg-gradient-to-r from-amber-500/20 via-orange-500/25 to-amber-500/20 border-b-2 border-amber-400/60 backdrop-blur-md cursor-pointer hover:border-amber-400/80 hover:from-amber-500/25 hover:via-orange-500/30 hover:to-amber-500/25 transition-all duration-300 group hover:shadow-lg hover:shadow-amber-500/20"
        onClick={handleBannerClick}
      >
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex items-center justify-center py-6 gap-3 relative">
            
            {/* Centered content */}
            <div className="flex items-center gap-2 sm:gap-3">
              <Sparkles className="h-5 w-5 text-amber-500 flex-shrink-0 group-hover:scale-110 transition-transform drop-shadow-sm" />
              <span className="text-sm sm:text-base">
                <span className="font-bold text-amber-600 dark:text-amber-400 group-hover:text-amber-700 dark:group-hover:text-amber-300 transition-colors">App Launching Soon</span>
                <span className="hidden sm:inline text-foreground/90 font-medium"> — Get early beta access</span>
                <span className="mx-1.5 text-foreground/70">•</span>
                <span className="font-bold text-orange-600 dark:text-orange-400 group-hover:text-orange-700 dark:group-hover:text-orange-300 transition-colors">Join Waitlist</span>
              </span>
              <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 text-orange-600 dark:text-orange-400 group-hover:translate-x-1 group-hover:scale-110 transition-all drop-shadow-sm" />
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
