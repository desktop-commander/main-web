// Unified Analytics Module
// Combines PostHog and Google Analytics 4

import { initializePostHog, posthog, isPostHogReady } from './posthog';
import { 
  initializeGA4, 
  trackGA4Event, 
  trackGA4PageView, 
  trackGA4Conversion,
  isGA4Ready 
} from './ga4';

// Initialize all analytics services
export const initializeAnalytics = (): void => {
  console.log('🔧 Initializing analytics services...');
  
  // Initialize PostHog
  initializePostHog();
  
  // Initialize Google Analytics 4
  initializeGA4();
  
  console.log('✅ Analytics initialization complete');
};

// Unified event tracking - sends to both PostHog and GA4
export const trackEvent = (
  eventName: string, 
  properties: Record<string, any> = {}
): void => {
  // Track with PostHog
  if (isPostHogReady()) {
    posthog.capture(eventName, properties);
  }
  
  // Track with GA4
  if (isGA4Ready()) {
    trackGA4Event(eventName, properties);
  }
};

// Unified page view tracking
export const trackPageView = (pagePath: string, pageTitle?: string): void => {
  // Track with PostHog
  if (isPostHogReady()) {
    posthog.capture('$pageview', {
      $current_url: window.location.href,
      page_path: pagePath,
      page_title: pageTitle || document.title
    });
  }
  
  // Track with GA4
  if (isGA4Ready()) {
    trackGA4PageView(pagePath, pageTitle);
  }
};

// Unified conversion tracking
export const trackConversion = (
  conversionName: string, 
  value?: number, 
  additionalProperties: Record<string, any> = {}
): void => {
  // Track with PostHog
  if (isPostHogReady()) {
    posthog.capture(`conversion_${conversionName}`, {
      conversion_name: conversionName,
      value: value,
      ...additionalProperties
    });
  }
  
  // Track with GA4
  if (isGA4Ready()) {
    trackGA4Conversion(conversionName, value);
  }
};

// User identification (primarily for PostHog)
export const identifyUser = (
  userId: string, 
  userProperties: Record<string, any> = {}
): void => {
  if (isPostHogReady()) {
    posthog.identify(userId, userProperties);
  }
  
  // For GA4, we can set user properties
  if (isGA4Ready() && typeof window.gtag === 'function') {
    window.gtag('config', 'GA_MEASUREMENT_ID', {
      user_id: userId,
      ...userProperties
    });
  }
};

// Analytics status check
export const getAnalyticsStatus = () => {
  return {
    posthog: {
      ready: isPostHogReady(),
      configured: !!import.meta.env.VITE_POSTHOG_API_KEY
    },
    ga4: {
      ready: isGA4Ready(),
      configured: !!import.meta.env.VITE_GA4_MEASUREMENT_ID
    }
  };
};

// Re-export individual services for specific use cases
export { 
  posthog, 
  isPostHogReady 
} from './posthog';
export { 
  trackGA4Event, 
  trackGA4PageView, 
  trackGA4Conversion,
  isGA4Ready 
} from './ga4';