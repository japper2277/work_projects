// lightbox.js - Lightbox Modal Module
// Handles fullscreen artwork viewing with navigation and focus management

import { ZoomViewer } from './zoom-viewer.js';

export class Lightbox {
    constructor(portfolioData) {
        this.portfolioData = portfolioData;
        this.currentWorks = portfolioData; // Currently displayed works (can be filtered)
        this.currentIndex = 0;
        this.isOpen = false;
        this.focusableElements = [];
        this.previousFocusElement = null;

        // DOM elements
        this.lightbox = null;
        this.lightboxImage = null;
        this.lightboxTitle = null;
        this.lightboxYear = null;
        this.lightboxMedium = null;
        this.lightboxDescription = null;
        this.lightboxTechnique = null;
        this.lightboxInspiration = null;
        this.lightboxSeries = null;
        this.lightboxDimensionsNote = null;
        this.zoomViewer = null;
        this.closeBtn = null;
        this.prevBtn = null;
        this.nextBtn = null;
    }

    init() {
        this.cacheElements();
        this.attachEventListeners();
    }

    cacheElements() {
        this.lightbox = document.getElementById('lightboxOverlay');
        this.lightboxImage = document.getElementById('lightboxImage');
        this.lightboxTitle = document.getElementById('lightboxTitle');
        this.lightboxMeta = document.getElementById('lightboxMeta');
        this.lightboxDescription = document.getElementById('lightboxDescription');
        this.lightboxTechnique = document.getElementById('lightboxTechnique');
        this.lightboxInspiration = document.getElementById('lightboxInspiration');
        this.lightboxSeries = document.getElementById('lightboxSeries');
        this.lightboxDimensionsNote = document.getElementById('lightboxDimensionsNote');
        this.lightboxInquireBtn = document.getElementById('lightboxInquireBtn');
        this.zoomViewer = new ZoomViewer();
        this.closeBtn = document.getElementById('lightboxClose');
        this.prevBtn = document.getElementById('lightboxPrev');
        this.nextBtn = document.getElementById('lightboxNext');
    }

    attachEventListeners() {
        // Close button
        if (this.closeBtn) {
            this.closeBtn.addEventListener('click', () => this.close());
        }

        // Navigation buttons
        if (this.prevBtn) {
            this.prevBtn.addEventListener('click', () => this.showPrevious());
        }
        if (this.nextBtn) {
            this.nextBtn.addEventListener('click', () => this.showNext());
        }

        // Click outside to close
        if (this.lightbox) {
            this.lightbox.addEventListener('click', (e) => {
                if (e.target === this.lightbox) {
                    this.close();
                }
            });
        }

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (!this.isOpen) return;

            switch (e.key) {
                case 'Escape':
                    this.close();
                    break;
                case 'ArrowLeft':
                    this.showPrevious();
                    break;
                case 'ArrowRight':
                    this.showNext();
                    break;
                case 'Tab':
                    this.handleTabKey(e);
                    break;
            }
        });
    }

    open(work, index, worksArray = null) {
        if (!this.lightbox) return;

        this.currentIndex = index;
        this.currentWorks = worksArray || this.portfolioData; // Use filtered works if provided
        this.isOpen = true;

        // Store the element that had focus
        this.previousFocusElement = document.activeElement;

        // Update lightbox content
        if (this.lightboxImage) {
            this.lightboxImage.src = work.image_url;
            this.lightboxImage.alt = work.title;
        }
        if (this.lightboxTitle) this.lightboxTitle.textContent = work.title;
        if (this.lightboxMeta) this.lightboxMeta.textContent = `${work.year} • ${work.medium}${work.dimensions ? ' • ' + work.dimensions : ''}`;
        if (this.lightboxDescription) this.setOrHide(this.lightboxDescription, work.description, '');
        if (this.lightboxTechnique) this.setOrHide(this.lightboxTechnique, work.technique, 'Technique: ');
        if (this.lightboxInspiration) this.setOrHide(this.lightboxInspiration, work.inspiration, 'Inspiration: ');
        if (this.lightboxSeries) this.setOrHide(this.lightboxSeries, work.series, 'Series: ');
        if (this.lightboxDimensionsNote) this.setOrHide(this.lightboxDimensionsNote, work.dimensions_note, '');

        // Update inquiry button with mailto functionality
        this.updateInquireButton(work);

        // Initialize zoom viewer
        const lightboxImageContainer = this.lightbox.querySelector('.lightbox-image-container');
        if (lightboxImageContainer && this.zoomViewer) {
            this.zoomViewer.init(this.lightboxImage, lightboxImageContainer);
        }

        // Show lightbox with GSAP animation
        this.lightbox.style.display = 'flex';
        document.body.style.overflow = 'hidden'; // Prevent background scrolling

        // Check if GSAP is available
        if (typeof gsap !== 'undefined') {
            // Animate lightbox entrance
            gsap.fromTo(this.lightbox,
                { opacity: 0 },
                { opacity: 1, duration: 0.3, ease: 'power2.out' }
            );

            // Animate content with stagger
            const lightboxContent = this.lightbox.querySelector('.lightbox-info');
            const lightboxImage = this.lightbox.querySelector('.lightbox-image-container');

            gsap.fromTo(lightboxImage,
                { opacity: 0, scale: 0.95 },
                { opacity: 1, scale: 1, duration: 0.4, ease: 'power2.out', delay: 0.1 }
            );

            if (lightboxContent) {
                const contentElements = lightboxContent.querySelectorAll('h2, p, button');
                gsap.fromTo(contentElements,
                    { opacity: 0, y: 20 },
                    { opacity: 1, y: 0, duration: 0.4, stagger: 0.08, ease: 'power2.out', delay: 0.2 }
                );
            }
        } else {
            this.lightbox.classList.add('show');
        }

        // Set up focus trap
        this.setupFocusTrap();

        // Focus on close button
        setTimeout(() => {
            if (this.closeBtn) this.closeBtn.focus();
        }, 400);

        // Announce to screen readers
        if (window.announceToScreenReader) {
            window.announceToScreenReader(`Viewing ${work.title}. Use arrow keys to navigate, escape to close.`);
        }
    }

    setOrHide(element, value, prefix = '') {
        if (!element) return;
        if (value && String(value).trim().length > 0) {
            element.style.display = '';
            element.textContent = `${prefix}${value}`;
        } else {
            element.style.display = 'none';
            element.textContent = '';
        }
    }

    close() {
        if (!this.lightbox || !this.isOpen) return;

        this.isOpen = false;

        // Animate lightbox exit with GSAP
        if (typeof gsap !== 'undefined') {
            gsap.to(this.lightbox, {
                opacity: 0,
                duration: 0.25,
                ease: 'power2.in',
                onComplete: () => {
                    this.lightbox.style.display = 'none';
                    this.lightbox.classList.remove('show');
                    document.body.style.overflow = ''; // Restore scrolling

                    // Return focus to the element that opened the lightbox
                    if (this.previousFocusElement) {
                        this.previousFocusElement.focus();
                    }
                }
            });
        } else {
            this.lightbox.classList.remove('show');
            document.body.style.overflow = '';
            if (this.previousFocusElement) {
                this.previousFocusElement.focus();
            }
        }

        if (window.announceToScreenReader) {
            window.announceToScreenReader('Lightbox closed');
        }

        // Clean up zoom viewer
        if (this.zoomViewer) {
            this.zoomViewer.destroy();
        }
    }

    showNext() {
        const nextIndex = (this.currentIndex + 1) % this.currentWorks.length;
        const nextWork = this.currentWorks[nextIndex];
        this.open(nextWork, nextIndex, this.currentWorks);
    }

    showPrevious() {
        const prevIndex = (this.currentIndex - 1 + this.currentWorks.length) % this.currentWorks.length;
        const prevWork = this.currentWorks[prevIndex];
        this.open(prevWork, prevIndex, this.currentWorks);
    }

    setupFocusTrap() {
        // Get all focusable elements in the lightbox
        this.focusableElements = Array.from(
            this.lightbox.querySelectorAll(
                'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
            )
        ).filter(el => !el.disabled && el.offsetParent !== null);
    }

    handleTabKey(e) {
        if (this.focusableElements.length === 0) return;

        const firstElement = this.focusableElements[0];
        const lastElement = this.focusableElements[this.focusableElements.length - 1];

        if (e.shiftKey) {
            // Shift + Tab
            if (document.activeElement === firstElement) {
                lastElement.focus();
                e.preventDefault();
            }
        } else {
            // Tab
            if (document.activeElement === lastElement) {
                firstElement.focus();
                e.preventDefault();
            }
        }
    }

    updateInquireButton(work) {
        if (!this.lightboxInquireBtn) return;

        const availability = work.availability || (work.isForSale ? 'Available' : 'Sold');

        // Determine button text and action based on availability
        if (availability === 'Available' || work.isForSale) {
            this.lightboxInquireBtn.textContent = 'INQUIRE ABOUT ORIGINAL';
            this.lightboxInquireBtn.style.display = 'block';

            // Create mailto link with pre-filled subject and body
            this.lightboxInquireBtn.onclick = () => {
                const subject = encodeURIComponent(`Inquiry: ${work.title}`);
                const body = encodeURIComponent(
                    `Hi,\n\nI'm interested in learning more about "${work.title}" (${work.year}).\n\n` +
                    `Details:\n` +
                    `• Medium: ${work.medium}\n` +
                    `• Dimensions: ${work.dimensions}\n\n` +
                    `Please let me know about pricing and availability.\n\nThank you!`
                );
                window.location.href = `mailto:contact@anjelinavillalobos.com?subject=${subject}&body=${body}`;
            };
        } else if (work.printUrl) {
            this.lightboxInquireBtn.textContent = 'PURCHASE PRINT';
            this.lightboxInquireBtn.style.display = 'block';
            this.lightboxInquireBtn.onclick = () => {
                window.location.href = work.printUrl;
            };
        } else if (availability === 'Sold' || availability === 'Private Collection') {
            // Show status but don't make it clickable
            this.lightboxInquireBtn.textContent = availability.toUpperCase();
            this.lightboxInquireBtn.style.display = 'block';
            this.lightboxInquireBtn.style.opacity = '0.5';
            this.lightboxInquireBtn.style.cursor = 'default';
            this.lightboxInquireBtn.onclick = null;
        } else {
            this.lightboxInquireBtn.style.display = 'none';
        }
    }

    destroy() {
        if (this.isOpen) {
            this.close();
        }
    }
}
