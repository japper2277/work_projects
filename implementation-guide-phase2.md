# Phase 2: Interactive Genesis - Artwork Timeline Viewer

This guide implements the **Interactive Genesis** feature - a visual storytelling component that shows the evolution of your artwork/projects through multiple iterations.

---

## Overview

**What it does:**
- Displays a horizontal timeline of artwork iterations
- Shows version numbers, dates, and descriptions
- Smooth GSAP animations between states
- Keyboard navigation (arrow keys)
- Touch/swipe support for mobile
- ScrollTrigger animations when entering viewport

**User Experience:**
```
[◄] [==●========] [►]

    Version 3 of 12
    "Refined color palette"

    [Large image display]

    January 2024 • Digital Painting
```

---

## 1. HTML Structure

Add this to your `index.html` (or create a dedicated page):

```html
<!-- Interactive Genesis Section -->
<section id="genesis" class="genesis-section">
    <div class="genesis-container">

        <!-- Section Header -->
        <div class="genesis-header">
            <h2 class="genesis-title">Interactive Genesis</h2>
            <p class="genesis-subtitle">Watch ideas evolve from sketch to final form</p>
        </div>

        <!-- Timeline Viewer -->
        <div class="genesis-viewer">

            <!-- Progress Bar -->
            <div class="genesis-progress">
                <div class="progress-bar">
                    <div class="progress-fill" id="genesisProgressFill"></div>
                    <div class="progress-handle" id="genesisProgressHandle"></div>
                </div>
                <div class="progress-labels">
                    <span class="label-start">First sketch</span>
                    <span class="label-end">Final version</span>
                </div>
            </div>

            <!-- Image Display -->
            <div class="genesis-display">
                <button class="genesis-nav prev" id="genesisPrev" aria-label="Previous iteration">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <polyline points="15 18 9 12 15 6"></polyline>
                    </svg>
                </button>

                <div class="genesis-image-container">
                    <img
                        id="genesisImage"
                        class="genesis-image"
                        src=""
                        alt="Artwork iteration"
                        loading="lazy"
                    >
                    <div class="image-loader" id="genesisLoader">Loading...</div>
                </div>

                <button class="genesis-nav next" id="genesisNext" aria-label="Next iteration">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                </button>
            </div>

            <!-- Metadata -->
            <div class="genesis-meta">
                <div class="meta-version" id="genesisVersion">Version 1 of 12</div>
                <h3 class="meta-title" id="genesisTitle">Initial Concept</h3>
                <p class="meta-description" id="genesisDescription">Description goes here</p>
                <div class="meta-details">
                    <span class="detail-date" id="genesisDate">January 2024</span>
                    <span class="detail-separator">•</span>
                    <span class="detail-techniques" id="genesisTechniques">Pencil sketch</span>
                </div>
            </div>

        </div>

        <!-- Keyboard Hint -->
        <div class="genesis-hint">
            Use <kbd>←</kbd> <kbd>→</kbd> arrow keys to navigate
        </div>

    </div>
</section>
```

---

## 2. CSS Styling

Create `styles/genesis.css`:

```css
/* ============================================
   GENESIS SECTION
   ============================================ */

.genesis-section {
    min-height: 100vh;
    padding: var(--spacing-xl) var(--spacing-md);
    background: var(--color-bg);
    position: relative;
}

.genesis-container {
    max-width: 1200px;
    margin: 0 auto;
}

/* Header */
.genesis-header {
    text-align: center;
    margin-bottom: var(--spacing-xl);
}

.genesis-title {
    font-size: var(--font-size-3xl);
    font-weight: 700;
    margin-bottom: var(--spacing-sm);
    opacity: 0; /* Will animate in */
    transform: translateY(30px);
}

.genesis-subtitle {
    font-size: var(--font-size-lg);
    color: var(--color-text-muted);
    opacity: 0; /* Will animate in */
    transform: translateY(20px);
}

/* ============================================
   GENESIS VIEWER
   ============================================ */

.genesis-viewer {
    background: var(--color-surface);
    border-radius: 16px;
    padding: var(--spacing-lg);
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
}

/* Progress Bar */
.genesis-progress {
    margin-bottom: var(--spacing-lg);
}

.progress-bar {
    position: relative;
    width: 100%;
    height: 4px;
    background: rgba(0, 0, 0, 0.1);
    border-radius: 2px;
    overflow: visible;
    cursor: pointer;
    transition: height 0.2s ease;
}

.progress-bar:hover {
    height: 6px;
}

.progress-fill {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    background: var(--color-accent);
    border-radius: 2px;
    width: 0%;
    transition: width 0.4s ease;
}

.progress-handle {
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translate(-50%, -50%);
    width: 16px;
    height: 16px;
    background: var(--color-accent);
    border: 3px solid white;
    border-radius: 50%;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    cursor: grab;
    transition: transform 0.2s ease;
}

.progress-handle:hover {
    transform: translate(-50%, -50%) scale(1.2);
}

.progress-handle:active {
    cursor: grabbing;
}

.progress-labels {
    display: flex;
    justify-content: space-between;
    margin-top: var(--spacing-xs);
    font-size: var(--font-size-sm);
    color: var(--color-text-muted);
}

/* Image Display */
.genesis-display {
    position: relative;
    display: flex;
    align-items: center;
    gap: var(--spacing-md);
    margin-bottom: var(--spacing-lg);
}

.genesis-image-container {
    flex: 1;
    position: relative;
    aspect-ratio: 16 / 10;
    background: rgba(0, 0, 0, 0.05);
    border-radius: 12px;
    overflow: hidden;
}

.genesis-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0;
    transition: opacity 0.4s ease;
}

.genesis-image.loaded {
    opacity: 1;
}

.image-loader {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: var(--color-text-muted);
    font-size: var(--font-size-sm);
}

/* Navigation Buttons */
.genesis-nav {
    width: 48px;
    height: 48px;
    background: white;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all var(--transition-fast);
    flex-shrink: 0;
}

.genesis-nav:hover:not(:disabled) {
    background: var(--color-accent);
    color: white;
    border-color: var(--color-accent);
    transform: scale(1.1);
}

.genesis-nav:disabled {
    opacity: 0.3;
    cursor: not-allowed;
}

.genesis-nav svg {
    width: 24px;
    height: 24px;
}

/* Metadata */
.genesis-meta {
    text-align: center;
}

.meta-version {
    font-size: var(--font-size-sm);
    color: var(--color-accent);
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: var(--spacing-xs);
}

.meta-title {
    font-size: var(--font-size-xl);
    font-weight: 600;
    margin-bottom: var(--spacing-sm);
}

.meta-description {
    font-size: var(--font-size-base);
    color: var(--color-text-muted);
    line-height: 1.6;
    margin-bottom: var(--spacing-sm);
}

.meta-details {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--spacing-xs);
    font-size: var(--font-size-sm);
    color: var(--color-text-muted);
}

.detail-separator {
    opacity: 0.5;
}

/* Keyboard Hint */
.genesis-hint {
    text-align: center;
    margin-top: var(--spacing-md);
    font-size: var(--font-size-sm);
    color: var(--color-text-muted);
}

.genesis-hint kbd {
    display: inline-block;
    padding: 4px 8px;
    background: white;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 4px;
    font-family: monospace;
    font-size: 0.9em;
    box-shadow: 0 2px 0 rgba(0, 0, 0, 0.1);
}

/* ============================================
   RESPONSIVE
   ============================================ */

@media (max-width: 768px) {
    .genesis-section {
        padding: var(--spacing-lg) var(--spacing-sm);
    }

    .genesis-viewer {
        padding: var(--spacing-md);
    }

    .genesis-display {
        gap: var(--spacing-sm);
    }

    .genesis-nav {
        width: 40px;
        height: 40px;
    }

    .genesis-title {
        font-size: var(--font-size-2xl);
    }

    .meta-title {
        font-size: var(--font-size-lg);
    }

    .progress-labels {
        font-size: 0.75rem;
    }

    .genesis-hint {
        display: none; /* Hide keyboard hint on mobile */
    }
}

/* ============================================
   LOADING & TRANSITIONS
   ============================================ */

.genesis-image-container.loading .genesis-image {
    opacity: 0.3;
    filter: blur(10px);
}

.genesis-image-container.loading .image-loader {
    display: block;
}

.genesis-image-container:not(.loading) .image-loader {
    display: none;
}
```

Don't forget to import it in `index.html`:

```html
<link rel="stylesheet" href="styles/genesis.css">
```

---

## 3. JavaScript Implementation

Create `scripts/genesis-viewer.js`:

```javascript
// scripts/genesis-viewer.js

class GenesisViewer {
    constructor() {
        this.currentIndex = 0;
        this.timeline = [];
        this.isAnimating = false;

        // DOM elements
        this.image = document.getElementById('genesisImage');
        this.imageContainer = document.querySelector('.genesis-image-container');
        this.loader = document.getElementById('genesisLoader');
        this.progressFill = document.getElementById('genesisProgressFill');
        this.progressHandle = document.getElementById('genesisProgressHandle');
        this.prevBtn = document.getElementById('genesisPrev');
        this.nextBtn = document.getElementById('genesisNext');

        // Metadata elements
        this.versionEl = document.getElementById('genesisVersion');
        this.titleEl = document.getElementById('genesisTitle');
        this.descriptionEl = document.getElementById('genesisDescription');
        this.dateEl = document.getElementById('genesisDate');
        this.techniquesEl = document.getElementById('genesisTechniques');

        this.init();
    }

    async init() {
        // Load timeline data
        await this.loadTimeline();

        // Setup event listeners
        this.setupEventListeners();

        // Display first iteration
        this.displayIteration(0);

        // Animate in on scroll
        this.setupScrollAnimation();
    }

    /**
     * Load timeline data from JSON
     */
    async loadTimeline() {
        try {
            const response = await fetch('data/genesis-timeline.json');
            if (!response.ok) throw new Error('Failed to load timeline');
            const data = await response.json();
            this.timeline = data.timeline;
        } catch (error) {
            console.error('Error loading genesis timeline:', error);
            // Fallback to demo data
            this.timeline = this.getDemoData();
        }
    }

    /**
     * Setup all event listeners
     */
    setupEventListeners() {
        // Navigation buttons
        this.prevBtn.addEventListener('click', () => this.navigate(-1));
        this.nextBtn.addEventListener('click', () => this.navigate(1));

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') this.navigate(-1);
            if (e.key === 'ArrowRight') this.navigate(1);
        });

        // Progress bar click
        const progressBar = document.querySelector('.progress-bar');
        progressBar.addEventListener('click', (e) => {
            const rect = progressBar.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const percentage = x / rect.width;
            const index = Math.round(percentage * (this.timeline.length - 1));
            this.displayIteration(index);
        });

        // Image load event
        this.image.addEventListener('load', () => {
            this.imageContainer.classList.remove('loading');
            this.image.classList.add('loaded');
        });

        // Touch/swipe support for mobile
        this.setupTouchEvents();
    }

    /**
     * Navigate to previous/next iteration
     */
    navigate(direction) {
        if (this.isAnimating) return;

        const newIndex = this.currentIndex + direction;
        if (newIndex < 0 || newIndex >= this.timeline.length) return;

        this.displayIteration(newIndex);
    }

    /**
     * Display specific iteration
     */
    displayIteration(index) {
        if (index < 0 || index >= this.timeline.length || this.isAnimating) return;

        this.isAnimating = true;
        this.currentIndex = index;
        const iteration = this.timeline[index];

        // Show loading state
        this.imageContainer.classList.add('loading');
        this.image.classList.remove('loaded');

        // Update image
        this.image.src = iteration.image;
        this.image.alt = `${iteration.title} - Iteration ${index + 1}`;

        // Animate metadata update
        this.animateMetadataUpdate(iteration, index);

        // Update progress bar
        this.updateProgressBar(index);

        // Update button states
        this.updateButtonStates(index);

        // Reset animation lock after transition
        setTimeout(() => {
            this.isAnimating = false;
        }, 500);
    }

    /**
     * Animate metadata changes
     */
    animateMetadataUpdate(iteration, index) {
        const tl = gsap.timeline();

        // Fade out
        tl.to([this.versionEl, this.titleEl, this.descriptionEl, this.dateEl, this.techniquesEl], {
            opacity: 0,
            y: -10,
            duration: 0.3,
            stagger: 0.05
        });

        // Update content
        tl.call(() => {
            this.versionEl.textContent = `Version ${index + 1} of ${this.timeline.length}`;
            this.titleEl.textContent = iteration.title;
            this.descriptionEl.textContent = iteration.description;
            this.dateEl.textContent = this.formatDate(iteration.date);
            this.techniquesEl.textContent = iteration.techniques.join(', ');
        });

        // Fade in
        tl.to([this.versionEl, this.titleEl, this.descriptionEl, this.dateEl, this.techniquesEl], {
            opacity: 1,
            y: 0,
            duration: 0.3,
            stagger: 0.05
        });
    }

    /**
     * Update progress bar position
     */
    updateProgressBar(index) {
        const percentage = (index / (this.timeline.length - 1)) * 100;

        gsap.to(this.progressFill, {
            width: `${percentage}%`,
            duration: 0.4,
            ease: 'power2.out'
        });

        gsap.to(this.progressHandle, {
            left: `${percentage}%`,
            duration: 0.4,
            ease: 'power2.out'
        });
    }

    /**
     * Update button disabled states
     */
    updateButtonStates(index) {
        this.prevBtn.disabled = index === 0;
        this.nextBtn.disabled = index === this.timeline.length - 1;
    }

    /**
     * Setup touch/swipe events for mobile
     */
    setupTouchEvents() {
        let touchStartX = 0;
        let touchEndX = 0;

        this.imageContainer.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });

        this.imageContainer.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            this.handleSwipe(touchStartX, touchEndX);
        }, { passive: true });
    }

    /**
     * Handle swipe gesture
     */
    handleSwipe(startX, endX) {
        const swipeThreshold = 50;
        const diff = startX - endX;

        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                this.navigate(1); // Swipe left = next
            } else {
                this.navigate(-1); // Swipe right = prev
            }
        }
    }

    /**
     * Setup GSAP ScrollTrigger animation
     */
    setupScrollAnimation() {
        // Animate header on scroll into view
        gsap.to('.genesis-title', {
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
                trigger: '.genesis-section',
                start: 'top 80%',
                toggleActions: 'play none none none'
            }
        });

        gsap.to('.genesis-subtitle', {
            opacity: 1,
            y: 0,
            duration: 1,
            delay: 0.2,
            scrollTrigger: {
                trigger: '.genesis-section',
                start: 'top 80%',
                toggleActions: 'play none none none'
            }
        });
    }

    /**
     * Format date string
     */
    formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            month: 'long',
            year: 'numeric'
        });
    }

    /**
     * Demo data fallback
     */
    getDemoData() {
        return [
            {
                id: "demo-1",
                title: "Initial Concept",
                date: "2024-01-01",
                image: "https://via.placeholder.com/800x500/667eea/ffffff?text=Initial+Concept",
                description: "The first sketch exploring the core idea",
                techniques: ["Pencil sketch", "Digital painting"]
            },
            {
                id: "demo-2",
                title: "Color Exploration",
                date: "2024-02-01",
                image: "https://via.placeholder.com/800x500/764ba2/ffffff?text=Color+Exploration",
                description: "Testing different color palettes and moods",
                techniques: ["Digital painting", "Color studies"]
            },
            {
                id: "demo-3",
                title: "Refined Composition",
                date: "2024-03-01",
                image: "https://via.placeholder.com/800x500/f093fb/ffffff?text=Refined+Composition",
                description: "Adjusting layout and visual hierarchy",
                techniques: ["Digital painting", "Layout design"]
            }
        ];
    }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => new GenesisViewer());
} else {
    new GenesisViewer();
}

// Export for use in other modules
export default GenesisViewer;
```

---

## 4. Update main.js

In `scripts/main.js`, import the genesis viewer:

```javascript
// Add to top of main.js
import GenesisViewer from './genesis-viewer.js';

// Or if not using modules, just include the script:
// <script src="scripts/genesis-viewer.js"></script>
```

---

## 5. Sample Data

Update `data/genesis-timeline.json` with your actual artwork:

```json
{
    "timeline": [
        {
            "id": "genesis-1",
            "title": "Initial Concept",
            "date": "2023-01-15",
            "image": "assets/images/genesis/concept-1.jpg",
            "description": "The first sketch exploring the core idea behind the project",
            "techniques": ["Pencil sketching", "Brainstorming"]
        },
        {
            "id": "genesis-2",
            "title": "Digital Wireframe",
            "date": "2023-02-10",
            "image": "assets/images/genesis/wireframe-1.jpg",
            "description": "Translating sketches into digital format with basic structure",
            "techniques": ["Figma", "Digital wireframing"]
        },
        {
            "id": "genesis-3",
            "title": "Color Study",
            "date": "2023-03-05",
            "image": "assets/images/genesis/color-study-1.jpg",
            "description": "Experimenting with color palettes to find the right mood",
            "techniques": ["Digital painting", "Color theory"]
        },
        {
            "id": "genesis-4",
            "title": "First Prototype",
            "date": "2023-04-20",
            "image": "assets/images/genesis/prototype-1.jpg",
            "description": "Working interactive prototype with basic functionality",
            "techniques": ["HTML/CSS", "JavaScript", "Prototyping"]
        },
        {
            "id": "genesis-5",
            "title": "Final Version",
            "date": "2023-06-01",
            "image": "assets/images/genesis/final-1.jpg",
            "description": "Polished final version with all features implemented",
            "techniques": ["Full-stack development", "Animation", "Testing"]
        }
    ]
}
```

---

## 6. Testing Checklist

- [ ] Genesis section loads without console errors
- [ ] First image displays correctly
- [ ] Click "Next" button - advances to next iteration
- [ ] Click "Previous" button - goes back
- [ ] Arrow keys (← →) navigate correctly
- [ ] Click on progress bar jumps to that iteration
- [ ] Metadata animates smoothly when changing
- [ ] Progress bar updates to match current position
- [ ] Buttons disable at start/end of timeline
- [ ] Mobile swipe left/right works
- [ ] Images lazy load correctly
- [ ] ScrollTrigger animates header on scroll

---

## 7. Troubleshooting

**Issue**: Images not loading
- Check file paths in genesis-timeline.json
- Verify images exist in assets/images/genesis/
- Check browser console for 404 errors

**Issue**: Animations not smooth
- Ensure GSAP is loaded before genesis-viewer.js
- Check for console errors
- Reduce animation duration if laggy on mobile

**Issue**: Keyboard navigation not working
- Make sure event listener is attached
- Check browser console for errors
- Ensure genesis section is in viewport

**Issue**: Progress bar not clickable
- Verify .progress-bar has cursor: pointer in CSS
- Check z-index stacking
- Ensure click event listener is attached

---

## 8. Enhancements (Optional)

### Auto-play mode
Add this to GenesisViewer class:

```javascript
startAutoplay(interval = 3000) {
    this.autoplayInterval = setInterval(() => {
        if (this.currentIndex < this.timeline.length - 1) {
            this.navigate(1);
        } else {
            this.displayIteration(0); // Loop back to start
        }
    }, interval);
}

stopAutoplay() {
    if (this.autoplayInterval) {
        clearInterval(this.autoplayInterval);
    }
}
```

### Thumbnail preview
Add small thumbnails below progress bar for quick navigation

### Comparison mode
Show before/after with slider overlay

---

## Next Steps

Phase 2 complete! Ready for:
- **Phase 3**: Director's Cut Annotations
- **Phase 4**: 3D Portfolio Constellation
- **Phase 5**: AR Viewer Integration

---

**Questions?** Test thoroughly before moving to Phase 3. The genesis viewer is the foundation for understanding how GSAP animations work in your portfolio.
