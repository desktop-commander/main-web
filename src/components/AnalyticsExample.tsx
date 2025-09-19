// Example component showing how to use analytics tracking
// You can integrate these patterns into your existing components

import React from 'react';
import { useAnalytics } from '@/lib/analytics/hooks';

const AnalyticsExample: React.FC = () => {
  const analytics = useAnalytics();

  const handleDownloadClick = () => {
    // Track the download
    analytics.trackDownload('desktop-commander-installer.dmg', 'dmg');
    
    // Your actual download logic here
    console.log('Download started...');
  };

  const handleSignupClick = () => {
    // Track the conversion
    analytics.trackConversion('signup_attempt');
    
    // Your signup logic here
    console.log('Signup form opened...');
  };

  const handleExternalLinkClick = (url: string, linkText: string) => {
    // Track external link clicks
    analytics.trackExternalClick(url, linkText);
    
    // Open the link
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="p-6 space-y-4">
      <h2 className="text-xl font-bold">Analytics Integration Examples</h2>
      
      {/* Download tracking example */}
      <button
        onClick={handleDownloadClick}
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
      >
        Download App (Tracked)
      </button>

      {/* Conversion tracking example */}
      <button
        onClick={handleSignupClick}
        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded ml-2"
      >
        Sign Up (Conversion Tracked)
      </button>

      {/* External link tracking example */}
      <button
        onClick={() => handleExternalLinkClick('https://github.com/your-repo', 'GitHub Repository')}
        className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded ml-2"
      >
        GitHub (External Link Tracked)
      </button>

      {/* Custom event tracking example */}
      <button
        onClick={() => analytics.track('feature_explored', { 
          feature_name: 'analytics_demo',
          user_type: 'developer' 
        })}
        className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded ml-2"
      >
        Custom Event
      </button>
    </div>
  );
};

export default AnalyticsExample;