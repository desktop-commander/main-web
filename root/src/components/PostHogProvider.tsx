import { createContext, useContext, ReactNode, useEffect, useState } from 'react';
import { getPostHog, initializePostHog } from '@/lib/analytics/posthog';

const PostHogContext = createContext<any>(null);

interface PostHogProviderProps {
  children: ReactNode;
}

export function PostHogProvider({ children }: PostHogProviderProps) {
  const [posthog, setPosthog] = useState<any>(null);

  useEffect(() => {
    // Initialize PostHog lazily
    initializePostHog().then(() => {
      getPostHog().then(setPosthog);
    });
  }, []);

  return (
    <PostHogContext.Provider value={posthog}>
      {children}
    </PostHogContext.Provider>
  );
}

export const usePostHog = () => {
  return useContext(PostHogContext);
};

// Mock export for backward compatibility
export default null;
