import { useScrollTracking, useTrackingFunctions } from './analytics/core';

/**
 * Analytics hook for Astro-rendered components (main site)
 * 
 * Features:
 * - Manual page view tracking (call trackPageView when needed)
 * - Scroll depth tracking (once per component mount)
 * - All standard tracking functions (download, community, CTA, etc.)
 * 
 * Use this in components rendered by Astro (no React Router available)
 */
export const useAnalyticsAstro = () => {
  // Scroll depth tracking - only set up once per component mount
  useScrollTracking();

  // All shared tracking functions
  return useTrackingFunctions();
};
