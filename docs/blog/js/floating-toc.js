/**
 * Floating Table of Contents - Minimal Left Margin Style
 * Shows dots that expand to show headings on hover
 */

(function() {
    'use strict';

    const CONFIG = {
        minHeadings: 3,
        headingSelectors: 'h2, h3',
        contentSelector: '.single-post-content',
        desktopBreakpoint: 1400
    };

    let headingsArray = [];

    function isDesktop() {
        return window.innerWidth >= CONFIG.desktopBreakpoint;
    }

    function initFloatingTOC() {
        const postContent = document.querySelector(CONFIG.contentSelector);
        if (!postContent) return;

        const headings = postContent.querySelectorAll(CONFIG.headingSelectors);
        if (headings.length < CONFIG.minHeadings) return;

        // Store headings in array for scroll spy
        headingsArray = Array.from(headings);

        // Ensure all headings have IDs
        headingsArray.forEach((heading, index) => {
            if (!heading.id) {
                heading.id = `toc-heading-${index}`;
            }
        });

        // Create the floating TOC element
        const floatingTOC = createFloatingTOC(headingsArray);
        document.body.appendChild(floatingTOC);

        // Show/hide based on screen size
        updateVisibility(floatingTOC);
        window.addEventListener('resize', () => updateVisibility(floatingTOC));

        // Add scroll spy
        addScrollSpy();

        // Add share functionality
        addShareButton();

        // Initial scroll spy check
        updateActiveOnScroll();
    }

    function createFloatingTOC(headings) {
        const container = document.createElement('div');
        container.className = 'floating-toc';
        container.id = 'floating-toc';

        let html = '<div class="floating-toc-track">';
        
        headings.forEach((heading, index) => {
            const level = parseInt(heading.tagName.substring(1));
            const text = heading.textContent.trim();
            const id = heading.id;

            // Truncate long headings
            const displayText = text.length > 30 ? text.substring(0, 30) + '...' : text;

            html += `
                <a href="#${id}" class="floating-toc-item level-${level}" data-target="${id}">
                    <span class="floating-toc-dot"></span>
                    <span class="floating-toc-label">${displayText}</span>
                </a>
            `;
        });

        // Add share button
        html += `
            <div class="floating-toc-share">
                <button class="floating-toc-share-btn" id="floating-share-btn">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                    </svg>
                    <span class="floating-toc-share-text">Share</span>
                </button>
            </div>
        `;

        html += '</div>';
        container.innerHTML = html;

        // Add click handlers for smooth scroll
        container.querySelectorAll('.floating-toc-item').forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('data-target');
                const target = document.getElementById(targetId);
                if (target) {
                    const offset = 100;
                    const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
                    window.scrollTo({ top, behavior: 'smooth' });
                }
            });
        });

        return container;
    }

    function updateVisibility(container) {
        container.style.display = isDesktop() ? 'block' : 'none';
    }

    function updateActiveOnScroll() {
        const scrollPos = window.scrollY + 150;
        let currentHeading = null;

        // Find the current heading based on scroll position
        for (let i = 0; i < headingsArray.length; i++) {
            const heading = headingsArray[i];
            const headingTop = heading.getBoundingClientRect().top + window.scrollY;
            
            if (headingTop <= scrollPos) {
                currentHeading = heading;
            } else {
                break;
            }
        }

        // Update active state on all items
        const items = document.querySelectorAll('.floating-toc-item');
        items.forEach(item => {
            item.classList.remove('active');
        });

        if (currentHeading) {
            const activeItem = document.querySelector(
                `.floating-toc-item[data-target="${currentHeading.id}"]`
            );
            if (activeItem) {
                activeItem.classList.add('active');
            }
        }
    }

    function addScrollSpy() {
        let ticking = false;

        window.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    updateActiveOnScroll();
                    ticking = false;
                });
                ticking = true;
            }
        });
    }

    function addShareButton() {
        // Use event delegation since button is created dynamically
        document.addEventListener('click', function(e) {
            const btn = e.target.closest('#floating-share-btn');
            if (!btn) return;
            
            e.preventDefault();
            
            navigator.clipboard.writeText(window.location.href).then(() => {
                btn.classList.add('copied');
                btn.innerHTML = `
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span class="floating-toc-share-text">Copied!</span>
                `;

                setTimeout(() => {
                    btn.classList.remove('copied');
                    btn.innerHTML = `
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                        </svg>
                        <span class="floating-toc-share-text">Share</span>
                    `;
                }, 2000);
            });
        });
    }

    // Initialize
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initFloatingTOC);
    } else {
        initFloatingTOC();
    }

})();
