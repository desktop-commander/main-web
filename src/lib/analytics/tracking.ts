import type { 
  EventProperties,
  PageViewProperties,
  DownloadClickedProperties,
  CommunityLinkProperties,
  ScrollDepthProperties,
  BlogPostClickedProperties,
  AllEvents
} from './events';
import { PAGE_EVENTS, INTERACTION_EVENTS, BLOG_EVENTS } from './events';

// Enhanced logging for development
const logEvent = (eventName: AllEvents, properties?: EventProperties) => {
  console.log(`🎯 Analytics Event: ${eventName}`, {
    event: eventName,
    properties,
    timestamp: new Date().toISOString(),
    posthogReady: !!(window as any).posthog?.__loaded
  });
};

// Check if PostHog is ready (use window.posthog for Astro compatibility)
const isPostHogReady = (): boolean => {
  return !!(window as any).posthog && !!(window as any).posthog.__loaded;
};

// Check if Google Analytics is ready
const isGtagReady = (): boolean => {
  return typeof window !== 'undefined' && typeof (window as any).gtag === 'function';
};

// Generic tracking function
export const trackEvent = (
  eventName: AllEvents, 
  properties?: EventProperties
): void => {
  // Always log in development for debugging
  if (import.meta.env.DEV) {
    logEvent(eventName, properties);
  }

  // Send to PostHog if ready
  if (isPostHogReady()) {
    try {
      (window as any).posthog.capture(eventName, {
        ...properties,
        timestamp: new Date().toISOString(),
      });
      
      console.log('✅ Event sent to PostHog:', eventName);
    } catch (error) {
      console.error('❌ Error tracking event to PostHog:', eventName, error);
    }
  } else {
    console.warn('PostHog not ready, event logged locally only:', eventName);
  }

  // Send to Google Analytics if ready
  if (isGtagReady()) {
    try {
      (window as any).gtag('event', eventName, properties);
      console.log('✅ Event sent to Google Analytics:', eventName);
    } catch (error) {
      console.error('❌ Error tracking event to Google Analytics:', eventName, error);
    }
  }
};

// Page tracking
export const trackPageView = (properties: PageViewProperties): void => {
  trackEvent(PAGE_EVENTS.PAGE_VIEW, properties);
};

// Download button tracking
export const trackDownloadClick = (properties: DownloadClickedProperties): void => {
  trackEvent(INTERACTION_EVENTS.DOWNLOAD_CLICKED, properties);
};

// Download redirect tracking (when clicking buttons that scroll to #download section)
export const trackDownloadRedirect = (location: string): void => {
  trackEvent(INTERACTION_EVENTS.DOWNLOAD_CLICKED, {
    platform: 'redirect_to_section',
    button_location: location,
    page_path: typeof window !== 'undefined' ? window.location.pathname : '',
    action_type: 'redirect'
  });
};

// Community link tracking
export const trackCommunityLink = (properties: CommunityLinkProperties): void => {
  const eventMap = {
    github: INTERACTION_EVENTS.GITHUB_CLICKED,
    discord: INTERACTION_EVENTS.DISCORD_CLICKED,
    youtube: INTERACTION_EVENTS.YOUTUBE_CLICKED,
  };

  trackEvent(eventMap[properties.platform], properties);
};

// Generic CTA tracking
export const trackCtaClick = (buttonText: string, location: string, additionalProps?: EventProperties): void => {
  trackEvent(INTERACTION_EVENTS.CTA_CLICKED, {
    button_text: buttonText,
    button_location: location,
    ...additionalProps
  });
};

// Scroll depth tracking
export const trackScrollDepth = (properties: ScrollDepthProperties): void => {
  trackEvent(INTERACTION_EVENTS.SCROLL_DEPTH, properties);
};

// Blog post click tracking
export const trackBlogPostClick = (properties: BlogPostClickedProperties): void => {
  trackEvent(BLOG_EVENTS.BLOG_POST_CLICKED, properties);
};
