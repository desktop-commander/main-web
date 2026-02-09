import { useEffect } from 'react';
import posthog from 'posthog-js';

const POSTHOG_CONFIG = {
  apiKey: "phc_SmlF1mKK199Blt4hUNL6V19IWydNNJ9o7Qbym2Y4zQa",
  apiHost: "https://eu.i.posthog.com"
};
const hasStatisticsConsent = () => {
  if (typeof window === "undefined") return false;
  const cookiebot = window.Cookiebot;
  return cookiebot?.consent?.statistics === true;
};
const detectBlogReferral = () => {
  const referrer = document.referrer;
  const urlParams = new URLSearchParams(window.location.search);
  const isFromBlog = referrer.includes("/blog") || referrer.includes("blog.desktopcommander.app") || referrer.includes("rk7f8a7274b9330-haqfg.wpcomstaging.com");
  if (isFromBlog) {
    console.log("🎯 User arrived from blog:", referrer);
    const referralData = {
      referrer_url: referrer,
      landing_page: window.location.href,
      landing_path: window.location.pathname,
      landing_hash: window.location.hash,
      landing_search: window.location.search,
      timestamp: (/* @__PURE__ */ new Date()).toISOString(),
      session_start: true
    };
    if (window.posthog && posthog.__loaded) {
      posthog.capture("arrived_from_blog", referralData);
      posthog.setPersonProperties({
        last_blog_referrer: referrer,
        came_from_blog: true,
        last_blog_visit: (/* @__PURE__ */ new Date()).toISOString()
      });
      console.log("✅ PostHog: Tracked blog arrival", referralData);
    }
    if (window.gtag) {
      window.gtag("event", "arrived_from_blog", referralData);
      console.log("✅ GA4: Tracked blog arrival", referralData);
    }
  }
  const trackOrganicJourney = () => {
    const utmSource = urlParams.get("utm_source");
    const isOrganicViaBlog = (referrer.includes("google.com") || referrer.includes("bing.com") || referrer.includes("duckduckgo.com")) && utmSource === "blog";
    if (isOrganicViaBlog) {
      if (window.posthog && posthog.__loaded) {
        posthog.capture("organic_search_via_blog", {
          search_engine: referrer.includes("google") ? "google" : referrer.includes("bing") ? "bing" : "other",
          utm_source: utmSource,
          landing_page: window.location.href
        });
        console.log("✅ PostHog: Tracked organic journey via blog");
      }
    }
  };
  trackOrganicJourney();
};
const initializePostHog = () => {
  if (posthog.__loaded) {
    console.log("PostHog already initialized");
    return;
  }
  const environment = window.location.hostname === "localhost" ? "development" : "production";
  posthog.init(POSTHOG_CONFIG.apiKey, {
    api_host: POSTHOG_CONFIG.apiHost,
    // CRITICAL: Enable cross-domain tracking
    cross_subdomain_cookie: true,
    session_recording: {
      enabled: true,
      record_console: environment === "development",
      record_network: environment === "development"
    },
    autocapture: {
      dom_event_allowlist: ["click", "change", "submit"],
      mask_all_element_attributes: false,
      mask_all_text: false
    },
    loaded: (posthogInstance) => {
      if (environment === "development") {
        posthogInstance.debug(true);
      }
      console.log("✅ PostHog initialized for " + environment + " environment with cross-domain tracking");
      detectBlogReferral();
    },
    respect_dnt: true,
    disable_session_recording: false
  });
  posthog.register({
    environment,
    website_section: "main_site",
    domain: "desktopcommander.app",
    timestamp: (/* @__PURE__ */ new Date()).toISOString()
  });
};
function PostHogInit() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.posthog = posthog;
    }
    if (hasStatisticsConsent()) {
      initializePostHog();
    } else {
      console.log("⏳ PostHog: Waiting for Cookiebot statistics consent");
    }
    const handleConsentChange = () => {
      if (hasStatisticsConsent() && !posthog.__loaded) {
        console.log("✅ Cookiebot statistics consent received, initializing PostHog");
        initializePostHog();
      }
    };
    window.addEventListener("CookiebotOnAccept", handleConsentChange);
    window.addEventListener("CookiebotOnDecline", () => {
      console.log("❌ Cookiebot statistics consent declined");
    });
    return () => {
      window.removeEventListener("CookiebotOnAccept", handleConsentChange);
    };
  }, []);
  return null;
}

export { PostHogInit as P };
