import { useEffect } from 'react';
import posthog from 'posthog-js';

// PostHog configuration
const POSTHOG_CONFIG = {
  apiKey: 'phc_SmlF1mKK199Blt4hUNL6V19IWydNNJ9o7Qbym2Y4zQa',
  apiHost: 'https://eu.i.posthog.com',
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
        console.log('✅ PostHog initialized for ' + environment + ' environment');
      },
      respect_dnt: true,
      disable_session_recording: false,
    });

    // Set environment as a super property
    posthog.register({
      environment,
      website_section: 'main_site',
      timestamp: new Date().toISOString(),
    });
  }, []);

  return null;
}
