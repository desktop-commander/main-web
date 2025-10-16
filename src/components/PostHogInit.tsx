import posthog from 'posthog-js';

// Expose PostHog globally for Astro components and tracking functions
if (typeof window !== 'undefined') {
  (window as any).posthog = posthog;
}

// This component does nothing visually, just exposes PostHog
export default function PostHogInit() {
  return null;
}
