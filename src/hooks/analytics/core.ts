import { useCallback, useEffect } from 'react';
import { 
  trackPageView, 
  trackDownloadClick, 
  trackCommunityLink,
  trackEvent,
  trackCtaClick,
  trackScrollDepth
} from '@/lib/analytics/tracking';
import type { 
  EventProperties 
} from '@/lib/analytics/events';
import type { AllEvents } from '@/lib/analytics/events';

/**
 * Scroll depth tracking hook
 * @param resetDependency - Optional dependency to reset scroll tracking (e.g., location.pathname for React Router)
 */
export const useScrollTracking = (resetDependency?: any) => {
  useEffect(() => {
    let maxScrollDepth = 0;
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollTop = window.pageYOffset;
          const docHeight = document.documentElement.scrollHeight - window.innerHeight;
          const scrollPercent = Math.round((scrollTop / docHeight) * 100);

          // Track at 25%, 50%, 75%, 90% milestones
          const milestones = [25, 50, 75, 90];
          const currentMilestone = milestones.find(milestone => 
            scrollPercent >= milestone && maxScrollDepth < milestone
          );

          if (currentMilestone) {
            maxScrollDepth = currentMilestone;
            trackScrollDepth({
              depth_percentage: currentMilestone,
              page_url: window.location.href,
              max_scroll_reached: scrollPercent,
            });
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [resetDependency]);
};

/**
 * Core tracking functions shared between all analytics hooks
 * These work the same in both React Router and Astro contexts
 */
export const useTrackingFunctions = () => {
  const trackDownload = useCallback((buttonText: string, location: string, additionalProps?: EventProperties) => {
    trackDownloadClick({
      button_text: buttonText,
      button_location: location,
      ...additionalProps
    });
  }, []);

  const trackCommunity = useCallback((
    platform: 'github' | 'discord' | 'youtube',
    linkLocation: string,
    linkText: string
  ) => {
    trackCommunityLink({
      platform,
      link_location: linkLocation,
      link_text: linkText,
    });
  }, []);

  const trackCTA = useCallback((
    buttonText: string,
    location: string,
    additionalProps?: EventProperties
  ) => {
    trackCtaClick(buttonText, location, additionalProps);
  }, []);

  const trackCustomEvent = useCallback((
    eventName: AllEvents,
    properties?: EventProperties
  ) => {
    trackEvent(eventName, properties);
  }, []);

  const trackNavigation = useCallback((
    linkText: string,
    destination: string,
    linkType: 'internal' | 'external' = 'internal'
  ) => {
    trackEvent('navigation_clicked' as AllEvents, {
      link_text: linkText,
      destination,
      link_type: linkType,
    });
  }, []);

  const trackPageViewManual = useCallback((pageTitle?: string, additionalProps?: EventProperties) => {
    trackPageView({
      page_title: pageTitle || document.title || 'Desktop Commander',
      page_url: window.location.href,
      referrer: document.referrer || undefined,
      ...additionalProps
    });
  }, []);

  return {
    trackDownload,
    trackCommunity,
    trackCTA,
    trackCustomEvent,
    trackNavigation,
    trackPageView: trackPageViewManual,
  };
};
