// Google Analytics 4 implementation without external dependency

// Google Analytics 4 configuration
interface GA4Config {
  measurementId: string;
  environment: 'development' | 'production';
}

// Environment-specific configuration
const getGA4Config = (): GA4Config => {
  const isDevelopment = import.meta.env.DEV;
  
  return {
    measurementId: import.meta.env.VITE_GA4_MEASUREMENT_ID || '',
    environment: isDevelopment ? 'development' : 'production'
  };
};

// Initialize Google Analytics 4
export const initializeGA4 = (): void => {
  const config = getGA4Config();
  
  if (!config.measurementId) {
    console.warn('GA4 Measurement ID not found. Google Analytics will not work.');
    return;
  }

  // Load gtag script
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${config.measurementId}`;
  document.head.appendChild(script);

  // Initialize gtag
  window.dataLayer = window.dataLayer || [];
  window.gtag = function() {
    window.dataLayer.push(arguments);
  };

  window.gtag('js', new Date());
  window.gtag('config', config.measurementId, {
    // Enhanced measurement settings
    send_page_view: true,
    enhanced_measurements: {
      scrolls: true,
      outbound_clicks: true,
      site_search: true,
      video_engagement: true,
      file_downloads: true,
    },
    // Development vs Production settings
    debug_mode: config.environment === 'development',
    // Custom dimensions
    custom_map: {
      'custom_dimension_1': 'environment',
      'custom_dimension_2': 'website_section'
    }
  });

  // Set default parameters
  window.gtag('config', config.measurementId, {
    environment: config.environment,
    website_section: 'main_site'
  });

  console.log(`GA4 initialized for ${config.environment} environment with ID: ${config.measurementId}`);
};

// Track custom events
export const trackGA4Event = (
  eventName: string, 
  parameters: Record<string, any> = {}
): void => {
  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, {
      ...parameters,
      timestamp: new Date().toISOString()
    });
  }
};

// Track page views (for SPA navigation)
export const trackGA4PageView = (pagePath: string, pageTitle?: string): void => {
  if (typeof window.gtag === 'function') {
    window.gtag('config', getGA4Config().measurementId, {
      page_path: pagePath,
      page_title: pageTitle || document.title
    });
  }
};

// Track conversions
export const trackGA4Conversion = (
  conversionName: string, 
  value?: number, 
  currency = 'USD'
): void => {
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'conversion', {
      send_to: `${getGA4Config().measurementId}/${conversionName}`,
      value: value,
      currency: currency
    });
  }
};

// Helper function to check if GA4 is ready
export const isGA4Ready = (): boolean => {
  return typeof window.gtag === 'function' && !!getGA4Config().measurementId;
};

// Export types for global gtag
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}