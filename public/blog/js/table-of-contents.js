/**
 * Table of Contents Generator - Sidebar Version
 * Automatically generates a sticky TOC sidebar from post headings
 */

(function() {
    'use strict';

    // Configuration
    const CONFIG = {
        minHeadings: 3,           // Minimum headings required to show TOC
        headingSelectors: 'h2, h3, h4, h5, h6', // Which headings to include
        contentSelector: '.single-post-content', // Where to find headings
        sidebarSelector: '#toc-sidebar', // Where to insert TOC
        smoothScrollDuration: 800,  // Smooth scroll duration in ms
        desktopBreakpoint: 1024     // Show sidebar only above this width
    };

    /**
     * Check if we're on desktop
     */
    function isDesktop() {
        return window.innerWidth >= CONFIG.desktopBreakpoint;
    }

    /**
     * Initialize the Table of Contents
     */
    function initTableOfContents() {
        // Only run on single post pages
        const postContent = document.querySelector(CONFIG.contentSelector);
        const sidebar = document.querySelector(CONFIG.sidebarSelector);
        
        if (!postContent || !sidebar) return;

        // Get all headings from the content
        const headings = postContent.querySelectorAll(CONFIG.headingSelectors);
        
        // Check if we have enough headings
        if (headings.length < CONFIG.minHeadings) {
            // Hide sidebar if not enough headings
            sidebar.style.display = 'none';
            return;
        }

        // Generate the TOC HTML
        const tocHTML = generateTOC(headings);
        
        // Insert the TOC into sidebar
        sidebar.innerHTML = tocHTML;
        
        // Show sidebar on desktop only
        updateSidebarVisibility();
        
        // Add smooth scroll behavior
        addSmoothScroll();
        
        // Add share button functionality
        addShareButton();
        
        // Handle responsive behavior
        window.addEventListener('resize', updateSidebarVisibility);
    }

    /**
     * Update sidebar visibility based on screen size
     */
    function updateSidebarVisibility() {
        const sidebar = document.querySelector(CONFIG.sidebarSelector);
        if (!sidebar) return;
        
        if (isDesktop()) {
            sidebar.style.display = 'block';
        } else {
            sidebar.style.display = 'none';
        }
    }

    /**
     * Generate the Table of Contents HTML
     */
    function generateTOC(headings) {
        let tocHTML = `
            <div class="toc-sidebar-container">
                <h3 class="toc-sidebar-title">In this article</h3>
                <nav class="toc-sidebar-nav">
                    <ul class="toc-sidebar-list">
        `;

        let currentLevel = 2;
        let listStack = [];

        headings.forEach((heading, index) => {
            const level = parseInt(heading.tagName.substring(1));
            const text = heading.textContent;
            const id = heading.id || `toc-heading-${index}`;
            
            // Ensure heading has an ID
            if (!heading.id) {
                heading.id = id;
            }

            // Handle nesting based on heading levels
            if (level > currentLevel) {
                // Open new nested list(s)
                for (let i = currentLevel; i < level; i++) {
                    tocHTML += '<ul class="toc-sidebar-sublist">';
                    listStack.push(i);
                }
            } else if (level < currentLevel) {
                // Close nested list(s)
                while (listStack.length > 0 && listStack[listStack.length - 1] >= level) {
                    tocHTML += '</ul></li>';
                    listStack.pop();
                }
            } else if (listStack.length > 0) {
                // Same level, close previous item
                tocHTML += '</li>';
            }

            // Add the list item
            tocHTML += `
                <li class="toc-sidebar-item toc-sidebar-level-${level}">
                    <a href="#${id}" class="toc-sidebar-link" data-target="${id}">
                        ${text}
                    </a>
            `;

            currentLevel = level;
        });

        // Close any remaining open lists
        while (listStack.length > 0) {
            tocHTML += '</li></ul>';
            listStack.pop();
        }

        tocHTML += '</li>'; // Close the last item

        tocHTML += `
                    </ul>
                </nav>
                
                <!-- Share Button at Bottom -->
                <button class="toc-share-button" id="toc-share-btn">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                    </svg>
                    <span class="toc-share-text">Share this article</span>
                </button>
            </div>
        `;

        return tocHTML;
    }

    /**
     * Add smooth scroll behavior to TOC links
     */
    function addSmoothScroll() {
        const tocLinks = document.querySelectorAll('.toc-sidebar-link');
        
        tocLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('data-target');
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    // Calculate offset for fixed header
                    const headerOffset = 100; // Adjust based on your header height
                    const elementPosition = targetElement.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });

                    // Update active state
                    updateActiveLink(this);
                }
            });
        });

        // Add scroll spy functionality
        addScrollSpy();
    }

    /**
     * Update the active TOC link
     */
    function updateActiveLink(activeLink) {
        // Remove active class from all links
        document.querySelectorAll('.toc-sidebar-link').forEach(link => {
            link.classList.remove('active');
        });
        
        // Add active class to the current link
        if (activeLink) {
            activeLink.classList.add('active');
        }
    }

    /**
     * Add scroll spy to highlight current section
     */
    function addScrollSpy() {
        const headings = document.querySelectorAll(CONFIG.headingSelectors);
        const tocLinks = document.querySelectorAll('.toc-sidebar-link');
        
        if (headings.length === 0 || tocLinks.length === 0) return;

        let isScrolling = false;
        
        window.addEventListener('scroll', function() {
            if (isScrolling) return;
            
            isScrolling = true;
            
            setTimeout(() => {
                const scrollPosition = window.scrollY + 150;
                
                let currentHeading = null;
                
                headings.forEach(heading => {
                    if (heading.offsetTop <= scrollPosition) {
                        currentHeading = heading;
                    }
                });
                
                if (currentHeading) {
                    const currentId = currentHeading.id;
                    const activeLink = document.querySelector(`.toc-sidebar-link[data-target="${currentId}"]`);
                    updateActiveLink(activeLink);
                }
                
                isScrolling = false;
            }, 100);
        });
    }

    /**
     * Add share button functionality to copy article link
     */
    function addShareButton() {
        const shareButton = document.getElementById('toc-share-btn');
        
        if (!shareButton) return;
        
        shareButton.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get current page URL
            const articleUrl = window.location.href;
            
            // Copy to clipboard
            navigator.clipboard.writeText(articleUrl).then(function() {
                // Show success feedback
                const textElement = shareButton.querySelector('.toc-share-text');
                const originalText = textElement.textContent;
                
                shareButton.innerHTML = `
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span class="toc-share-text">Link copied!</span>
                `;
                shareButton.classList.add('copied');
                
                // Reset after 2 seconds
                setTimeout(function() {
                    shareButton.innerHTML = `
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                        </svg>
                        <span class="toc-share-text">${originalText}</span>
                    `;
                    shareButton.classList.remove('copied');
                }, 2000);
            }).catch(function(err) {
                console.error('Failed to copy link: ', err);
                // Fallback: show error state
                shareButton.classList.add('error');
                setTimeout(function() {
                    shareButton.classList.remove('error');
                }, 2000);
            });
        });
    }

    // Initialize on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initTableOfContents);
    } else {
        initTableOfContents();
    }

})();
