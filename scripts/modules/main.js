// main.js - Main Application Controller
// Initializes all modules and manages application state

import { Carousel } from './carousel.js';
import { Grid } from './grid.js';
import { Lightbox } from './lightbox.js';
import { Gallery } from './gallery.js';
import { Animations } from './animations.js';
import { announceToScreenReader } from './utils.js';
import { initAboutSection } from '../about-section.js';

class PortfolioApp {
    constructor() {
        this.portfolioData = [];
        this.carousel = null;
        this.grid = null;
        this.lightbox = null;
        this.gallery = null;
        this.animations = null;
    }

    async init() {
        try {
            // Load portfolio data
            await this.loadData();

            // Initialize modules
            this.initializeModules();

            // Set up smooth scrolling
            this.setupSmoothScrolling();

            // Set up mobile menu
            this.setupMobileMenu();

            // Add ARIA live region for announcements
            this.createAriaLiveRegion();

            console.log('Portfolio app initialized successfully');
        } catch (error) {
            console.error('Failed to initialize portfolio app:', error);
            this.showError('Failed to load portfolio. Please refresh the page.');
        }
    }

    async loadData() {
        const response = await fetch('data/portfolio-data.json');
        if (!response.ok) {
            throw new Error(`Failed to load data: ${response.statusText}`);
        }
        this.portfolioData = await response.json();
        console.log('Loaded portfolio data:', this.portfolioData.length, 'items');
    }

    initializeModules() {
        // Initialize carousel
        this.carousel = new Carousel(this.portfolioData);
        this.carousel.init();

        // Initialize grid
        this.grid = new Grid(this.portfolioData);
        this.grid.init();

        // Initialize lightbox
        this.lightbox = new Lightbox(this.portfolioData);
        this.lightbox.init();

        // Initialize gallery command bar
        this.gallery = new Gallery(this.portfolioData, this.lightbox);
        this.gallery.init();

        // Initialize animations
        this.animations = new Animations();
        this.animations.init();

        // Initialize about section interactive elements
        initAboutSection();

        // Make controllers available globally for cross-module communication
        window.LightboxController = this.lightbox;
        window.AnimationController = this.animations;
        window.GridController = this.grid;
    }

    setupSmoothScrolling() {
        // Smooth scroll for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                const href = anchor.getAttribute('href');

                // Skip if it's just '#'
                if (href === '#') {
                    e.preventDefault();
                    return;
                }

                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    e.preventDefault();
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    setupMobileMenu() {
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        const navLinks = document.querySelector('.nav-links');

        if (mobileMenuBtn && navLinks) {
            mobileMenuBtn.addEventListener('click', () => {
                const isExpanded = mobileMenuBtn.getAttribute('aria-expanded') === 'true';
                mobileMenuBtn.setAttribute('aria-expanded', !isExpanded);
                navLinks.classList.toggle('active');

                if (window.announceToScreenReader) {
                    window.announceToScreenReader(
                        isExpanded ? 'Menu closed' : 'Menu opened'
                    );
                }
            });

            // Close menu when clicking a link
            navLinks.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', () => {
                    navLinks.classList.remove('active');
                    mobileMenuBtn.setAttribute('aria-expanded', 'false');
                });
            });

            // Close menu when clicking outside
            document.addEventListener('click', (e) => {
                if (!mobileMenuBtn.contains(e.target) && !navLinks.contains(e.target)) {
                    navLinks.classList.remove('active');
                    mobileMenuBtn.setAttribute('aria-expanded', 'false');
                }
            });
        }
    }

    createAriaLiveRegion() {
        if (!document.getElementById('aria-announcer')) {
            const announcer = document.createElement('div');
            announcer.id = 'aria-announcer';
            announcer.className = 'sr-only';
            announcer.setAttribute('aria-live', 'polite');
            announcer.setAttribute('aria-atomic', 'true');
            announcer.style.cssText = 'position:absolute;left:-10000px;width:1px;height:1px;overflow:hidden;';
            document.body.appendChild(announcer);
        }
    }

    showError(message) {
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.style.cssText = `
            position: fixed;
            top: 20px;
            left: 50%;
            transform: translateX(-50%);
            background: #f44336;
            color: white;
            padding: 16px 24px;
            border-radius: 4px;
            z-index: 10000;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        `;
        errorDiv.textContent = message;
        document.body.appendChild(errorDiv);

        // Remove after 5 seconds
        setTimeout(() => {
            errorDiv.remove();
        }, 5000);

        if (window.announceToScreenReader) {
            window.announceToScreenReader(message, 'assertive');
        }
    }
}

// Initialize the app when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        const app = new PortfolioApp();
        app.init();
    });
} else {
    const app = new PortfolioApp();
    app.init();
}
