import { useEffect } from 'react';
import posthog from 'posthog-js';

// PostHog configuration
const POSTHOG_CONFIG = {
  apiKey: 'phc_SmlF1mKK199Blt4hUNL6V19IWydNNJ9o7Qbym2Y4zQa',
  apiHost: 'https://eu.i.posthog.com',
};

/**
 * Detects and tracks when a user arrives from the blog
 * This enables cross-domain user journey tracking
 */
const detectBlogReferral = (): void => {
  const referrer = document.referrer;
  const urlParams = new URLSearchParams(window.location.search);
  
  // Check if user came from blog
  const isFromBlog = referrer.includes('/blog') || 
                     referrer.includes('blog.desktopcommander.app') || 
                     referrer.includes('rk7f8a7274b9330-haqfg.wpcomstaging.com');
  
  if (isFromBlog) {
    console.log('🎯 User arrived from blog:', referrer);
    
    const referralData = {
      referrer_url: referrer,
      landing_page: window.location.href,
      landing_path: window.location.pathname,
      landing_hash: window.location.hash,
      landing_search: window.location.search,
      timestamp: new Date().toISOString(),
      session_start: true
    };
    
    // Track in PostHog
    if (window.posthog && posthog.__loaded) {
      posthog.capture('arrived_from_blog', referralData);
      
      // Set person properties for this session
      posthog.setPersonProperties({
        last_blog_referrer: referrer,
        came_from_blog: true,
        last_blog_visit: new Date().toISOString()
      });
      
      console.log('✅ PostHog: Tracked blog arrival', referralData);
    }
    
    // Track in Google Analytics if available
    if ((window as any).gtag) {
      (window as any).gtag('event', 'arrived_from_blog', referralData);
      console.log('✅ GA4: Tracked blog arrival', referralData);
    }
  }
  
  // Also track if user came from organic search to blog first
  const trackOrganicJourney = () => {
    const utmSource = urlParams.get('utm_source');
    
    // If referrer is a search engine and UTM source is blog
    const isOrganicViaBlog = (
      (referrer.includes('google.com') || 
       referrer.includes('bing.com') || 
       referrer.includes('duckduckgo.com')) &&
      utmSource === 'blog'
    );
    
    if (isOrganicViaBlog) {
      if (window.posthog && posthog.__loaded) {
        posthog.capture('organic_search_via_blog', {
          search_engine: referrer.includes('google') ? 'google' : 
                        referrer.includes('bing') ? 'bing' : 'other',
          utm_source: utmSource,
          landing_page: window.location.href
        });
        console.log('✅ PostHog: Tracked organic journey via blog');
      }
    }
  };
  
  trackOrganicJourney();
};

export default function PostHogInit() {
  useEffect(() => {
    // Expose PostHog globally for Astro components and tracking functions
    if (typeof window !== 'undefined') {
      (window as any).posthog = posthog;
    }

    // Check if already initialized (prevent double init)
    if (posthog.__loaded) {
      console.log('PostHog already initialized');
      return;
    }

    const environment = window.location.hostname === 'localhost' ? 'development' : 'production';

    // Initialize PostHog
    posthog.init(POSTHOG_CONFIG.apiKey, {
      api_host: POSTHOG_CONFIG.apiHost,
      
      // CRITICAL: Enable cross-domain tracking
      cross_subdomain_cookie: true,
      
      session_recording: {
        enabled: true,
        record_console: environment === 'development',
        record_network: environment === 'development',
      },
      autocapture: {
        dom_event_allowlist: ['click', 'change', 'submit'],
        mask_all_element_attributes: false,
        mask_all_text: false,
      },
      loaded: (posthogInstance) => {
        if (environment === 'development') {
          posthogInstance.debug(true);
        }
        console.log('✅ PostHog initialized for ' + environment + ' environment with cross-domain tracking');
        
        // Detect blog referrals after PostHog is loaded
        detectBlogReferral();
      },
      respect_dnt: true,
      disable_session_recording: false,
    });

    // Set environment as a super property
    posthog.register({
      environment,
      website_section: 'main_site',
      domain: 'desktopcommander.app',
      timestamp: new Date().toISOString(),
    });
  }, []);

  return null;
}
