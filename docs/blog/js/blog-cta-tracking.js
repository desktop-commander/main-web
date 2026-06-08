/**
 * Blog CTA Tracking for Desktop Commander
 * Tracks CTA button clicks from blog posts to PostHog
 * Uses sendBeacon for reliable tracking during navigation
 * Version: 1.6.0 - Fixed distinct_id handling
 */

document.addEventListener('DOMContentLoaded', function() {
    
    // PostHog API endpoint and token (same as in functions.php)
    var POSTHOG_HOST = 'https://eu.i.posthog.com';
    var POSTHOG_TOKEN = 'phc_SmlF1mKK199Blt4hUNL6V19IWydNNJ9o7Qbym2Y4zQa';
    
    // Get or create anonymous ID (PostHog uses this)
    function getDistinctId() {
        // Try to get PostHog's distinct_id if available
        if (typeof posthog !== 'undefined' && typeof posthog.get_distinct_id === 'function') {
            var phId = posthog.get_distinct_id();
            if (phId) return phId;
        }
        
        // Fallback: check PostHog cookie
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i].trim();
            if (cookie.indexOf('ph_') === 0 && cookie.indexOf('_posthog=') !== -1) {
                try {
                    var value = cookie.split('=')[1];
                    var data = JSON.parse(decodeURIComponent(value));
                    if (data.distinct_id) return data.distinct_id;
                } catch(e) {
                    console.log('[Blog Tracking] Cookie parse error:', e);
                }
            }
        }
        
        // Final fallback: Generate and store anonymous ID
        var storageKey = 'dc_anonymous_id';
        var storedId = null;
        try {
            storedId = localStorage.getItem(storageKey);
        } catch(e) {}
        
        if (storedId) return storedId;
        
        var newId = 'dc_anon_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
        try {
            localStorage.setItem(storageKey, newId);
        } catch(e) {}
        
        return newId;
    }
    
    // Send event using sendBeacon (reliable during navigation)
    function sendEventBeacon(eventName, properties) {
        var distinctId = getDistinctId();
        
        var payload = {
            api_key: POSTHOG_TOKEN,
            event: eventName,
            distinct_id: distinctId,
            properties: Object.assign({}, properties, {
                distinct_id: distinctId,
                $current_url: window.location.href,
                $host: window.location.host,
                $pathname: window.location.pathname,
                $lib: 'web-beacon',
                $lib_version: '1.6.0',
                token: POSTHOG_TOKEN
            }),
            timestamp: new Date().toISOString()
        };
        
        var url = POSTHOG_HOST + '/capture/';
        var data = JSON.stringify(payload);
        
        // Try sendBeacon first (works during page unload)
        if (navigator.sendBeacon) {
            var blob = new Blob([data], { type: 'application/json' });
            var sent = navigator.sendBeacon(url, blob);
            console.log('[Blog Tracking] Beacon sent:', sent, eventName, properties.button_location, 'distinct_id:', distinctId);
            return sent;
        }
        
        // Fallback to sync XHR
        var xhr = new XMLHttpRequest();
        xhr.open('POST', url, false); // sync
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(data);
        console.log('[Blog Tracking] XHR sent:', eventName, properties.button_location);
        return true;
    }
    
    // Helper function to track and navigate
    function trackAndNavigate(eventName, properties, targetUrl, isNewTab) {
        // Send via beacon (reliable)
        sendEventBeacon(eventName, properties);
        
        // Also try PostHog if loaded (for session linkage)
        if (typeof posthog !== 'undefined' && typeof posthog.capture === 'function') {
            posthog.capture(eventName, properties);
        }
        
        // Navigate after small delay
        setTimeout(function() {
            if (isNewTab) {
                window.open(targetUrl, '_blank', 'noopener');
            } else {
                window.location.href = targetUrl;
            }
        }, 150);
        
        return true;
    }
    
    // ===========================================
    // Blog CTA Buttons (in-post CTAs)
    // ===========================================
    var ctaButtons = document.querySelectorAll('.dc-app-cta-btn, .dc-mcp-cta-btn');
    
    ctaButtons.forEach(function(button) {
        button.addEventListener('click', function(e) {
            var postSlug = button.getAttribute('data-post-slug') || '';
            var postTitle = button.getAttribute('data-post-title') || '';
            var ctaVariant = button.getAttribute('data-cta-variant') || 'default';
            var ctaType = button.getAttribute('data-cta-type') || 'download';
            
            var eventName = ctaType === 'mcp' ? 'mcp_install_clicked' : 'download_clicked';
            var buttonLocation = ctaType === 'mcp' ? 'blog_post_mcp_cta' : 'blog_post_app_cta';
            
            var targetUrl = button.getAttribute('href');
            var isNewTab = button.getAttribute('target') === '_blank';
            
            e.preventDefault();
            
            trackAndNavigate(eventName, {
                platform: 'redirect_to_section',
                button_location: buttonLocation,
                action_type: 'redirect',
                page_path: window.location.pathname,
                blog_post_slug: postSlug,
                blog_post_title: postTitle,
                cta_variant: ctaVariant,
                cta_type: ctaType,
                source: 'blog'
            }, targetUrl, isNewTab);
        });
    });
    
    // ===========================================
    // Header Download Buttons (desktop + mobile)
    // ===========================================
    var headerButtons = document.querySelectorAll('.dc-download-btn, .dc-mobile-download-btn');
    
    headerButtons.forEach(function(button) {
        button.addEventListener('click', function(e) {
            var targetUrl = button.getAttribute('href');
            var isMobile = button.classList.contains('dc-mobile-download-btn');
            var buttonLocation = isMobile ? 'blog_header_mobile' : 'blog_header_desktop';
            
            // Get current post info if on a single post
            var postSlug = '';
            var postTitle = '';
            var body = document.body;
            if (body.classList.contains('single-post')) {
                var classes = body.className.split(' ');
                for (var i = 0; i < classes.length; i++) {
                    if (classes[i].indexOf('postid-') === -1 && 
                        classes[i] !== 'single' && 
                        classes[i] !== 'single-post' &&
                        classes[i] !== 'logged-in' &&
                        classes[i].indexOf('admin-bar') === -1 &&
                        classes[i].indexOf('wp-') === -1 &&
                        classes[i].indexOf('customize-') === -1) {
                        if (classes[i].length > 3 && classes[i].indexOf('-') !== -1) {
                            postSlug = classes[i];
                            break;
                        }
                    }
                }
                var titleEl = document.querySelector('h1.entry-title, h1.post-title, article h1');
                if (titleEl) {
                    postTitle = titleEl.textContent.trim();
                }
            }
            
            e.preventDefault();
            
            trackAndNavigate('download_clicked', {
                platform: 'redirect_to_section',
                button_location: buttonLocation,
                action_type: 'redirect',
                page_path: window.location.pathname,
                blog_post_slug: postSlug,
                blog_post_title: postTitle,
                cta_type: 'download',
                source: 'blog'
            }, targetUrl, false);
        });
    });
    
    // Log initialization
    console.log('[Blog Tracking] Initialized:', ctaButtons.length, 'CTA buttons,', headerButtons.length, 'header buttons (v1.6.0)');
});
