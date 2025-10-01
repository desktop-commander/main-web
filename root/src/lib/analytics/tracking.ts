import { getPostHog, isPostHogReady, trackEvent as trackEventSafe } from './posthog';
import type { 
  EventProperties,
  PageViewProperties,
  DownloadClickedProperties,
  CommunityLinkProperties,
  ScrollDepthProperties,
  AllEvents
} from './events';
import { PAGE_EVENTS, INTERACTION_EVENTS } from './events';

// Enhanced logging for development
const logEvent = (eventName: AllEvents, properties?: EventProperties) => {
  console.log(`🎯 Analytics Event: ${eventName}`, {
    event: eventName,
    properties,
    timestamp: new Date().toISOString(),
    posthogReady: isPostHogReady()
  });
};

// Generic tracking function  
export const trackEvent = async (
  eventName: AllEvents, 
  properties?: EventProperties
): Promise<void> => {
  // Always log in development for debugging
  if (import.meta.env.DEV) {
    logEvent(eventName, properties);
  }

  // Use the safe tracking wrapper
  await trackEventSafe(eventName, {
    ...properties,
    timestamp: new Date().toISOString(),
  });
};

// Page tracking
export const trackPageView = (properties: PageViewProperties): void => {
  trackEvent(PAGE_EVENTS.PAGE_VIEW, properties);
};

// Download button tracking
export const trackDownloadClick = (properties: DownloadClickedProperties): void => {
  trackEvent(INTERACTION_EVENTS.DOWNLOAD_CLICKED, properties);
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
