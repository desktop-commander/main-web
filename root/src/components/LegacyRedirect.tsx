import { useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { idToSlugMap } from '@/data/library/useCases';

/**
 * Component to handle redirects from old URL format (/library?i=123) 
 * to new SEO-friendly format (/library/prompts/slug)
 */
const LegacyRedirect = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const promptId = searchParams.get('i');
    
    if (promptId && idToSlugMap[promptId]) {
      const slug = idToSlugMap[promptId];
      // Redirect to new URL structure
      navigate(`/library/prompts/${slug}`, { replace: true });
    }
  }, [searchParams, navigate]);

  // Return null as this is just a redirect handler
  return null;
};

export default LegacyRedirect;