// React hooks for analytics tracking

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPageView, trackEvent, trackConversion } from './index';

// Hook to automatically track page views on route changes
export const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    // Track page view when location changes
    trackPageView(location.pathname + location.search, document.title);
  }, [location]);
};

// Hook for tracking specific events with easy usage
export const useAnalytics = () => {
  return {
    // Track any custom event
    track: (eventName: string, properties?: Record<string, any>) => {
      trackEvent(eventName, properties);
    },
    
    // Track button clicks
    trackClick: (buttonName: string, additionalProps?: Record<string, any>) => {
      trackEvent('button_click', {
        button_name: buttonName,
        ...additionalProps
      });
    },
    
    // Track form submissions
    trackFormSubmit: (formName: string, additionalProps?: Record<string, any>) => {
      trackEvent('form_submit', {
        form_name: formName,
        ...additionalProps
      });
    },
    
    // Track downloads
    trackDownload: (fileName: string, fileType?: string) => {
      trackEvent('file_download', {
        file_name: fileName,
        file_type: fileType || fileName.split('.').pop()
      });
    },
    
    // Track conversions
    trackConversion: (conversionName: string, value?: number, additionalProps?: Record<string, any>) => {
      trackConversion(conversionName, value, additionalProps);
    },
    
    // Track external link clicks
    trackExternalClick: (url: string, linkText?: string) => {
      trackEvent('external_link_click', {
        destination_url: url,
        link_text: linkText
      });
    },
    
    // Track video interactions
    trackVideo: (action: 'play' | 'pause' | 'complete', videoName: string, progress?: number) => {
      trackEvent('video_interaction', {
        action,
        video_name: videoName,
        progress_percent: progress
      });
    },
    
    // Track search actions
    trackSearch: (query: string, resultCount?: number) => {
      trackEvent('search', {
        search_query: query,
        result_count: resultCount
      });
    }
  };
};