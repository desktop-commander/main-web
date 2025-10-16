import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPageView } from '@/lib/analytics/tracking';
import { useScrollTracking, useTrackingFunctions } from './analytics/core';

/**
 * Analytics hook for React Router pages (e.g., /library section)
 * 
 * Features:
 * - Automatic page view tracking on route changes
 * - Scroll depth tracking that resets per route
 * - All standard tracking functions (download, community, CTA, etc.)
 * 
 * Use this in components that have access to React Router (useLocation)
 */
export const useAnalytics = () => {
  const location = useLocation();

  // Auto-track page views on route change
  useEffect(() => {
    const pageTitle = document.title || 'Desktop Commander';
    const pageUrl = window.location.href;
    const referrer = document.referrer;

    trackPageView({
      page_title: pageTitle,
      page_url: pageUrl,
      referrer: referrer || undefined,
    });
  }, [location.pathname]);

  // Scroll depth tracking - resets on route change
  useScrollTracking(location.pathname);

  // All shared tracking functions
  return useTrackingFunctions();
};
