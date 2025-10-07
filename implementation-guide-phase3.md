# Phase 3: Director's Cut Annotations

This guide implements the **Director's Cut Annotations** feature - interactive commentary points overlaid on artwork/project images that reveal insights when users hover or click.

---

## Overview

**What it does:**
- Places clickable/hoverable "annotation dots" on artwork images
- Each dot reveals a tooltip with commentary when interacted with
- Position annotations using percentage-based X/Y coordinates
- Smooth GSAP animations for tooltip appearance
- Mobile-friendly (tap to toggle instead of hover)

**User Experience:**
```
[Artwork Image]
    • ← Annotation dot (85%, 40%)
        ↓ (on hover)
    [Tooltip: "This gradient was achieved using..."]
```

---

## 1. HTML Structure

Add this to your case study page or artwork detail view:

```html
<!-- Annotated Artwork Section -->
<section class="annotated-artwork">
    <div class="artwork-container">

        <!-- Main Artwork Image -->
        <img
            id="annotatedImage"
            class="artwork-image"
            src="assets/images/projects/artwork-1.jpg"
            alt="Project artwork"
        >

        <!-- Annotations Container (dynamically populated) -->
        <div id="annotationsContainer" class="annotations-overlay">
            <!-- Annotation dots and tooltips will be injected here by JS -->
        </div>

        <!-- Toggle Button (optional - show/hide all annotations) -->
        <button
            id="toggleAnnotations"
            class="annotation-toggle"
            aria-label="Toggle annotations"
        >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"/>
            </svg>
            <span>Show Annotations</span>
        </button>

    </div>

    <!-- Optional: Annotation Count -->
    <div class="annotation-info">
        <span id="annotationCount">0</span> insights available
    </div>
</section>
```

---

## 2. CSS Styling

Create `styles/annotations.css`:

```css
/* ============================================
   ANNOTATED ARTWORK SECTION
   ============================================ */

.annotated-artwork {
    padding: var(--spacing-xl) var(--spacing-md);
    max-width: 1400px;
    margin: 0 auto;
}

.artwork-container {
    position: relative;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
}

.artwork-image {
    display: block;
    width: 100%;
    height: auto;
}

/* ============================================
   ANNOTATIONS OVERLAY
   ============================================ */

.annotations-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none; /* Allow clicks through to dots only */
}

/* ============================================
   ANNOTATION DOT
   ============================================ */

.annotation-dot {
    position: absolute;
    width: 24px;
    height: 24px;
    background: var(--color-accent);
    border: 3px solid white;
    border-radius: 50%;
    cursor: pointer;
    pointer-events: auto; /* Enable clicks on dots */
    z-index: 10;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    transform: translate(-50%, -50%); /* Center the dot on coordinates */
}

.annotation-dot:hover {
    transform: translate(-50%, -50%) scale(1.2);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.4);
}

.annotation-dot.active {
    background: var(--color-primary);
    transform: translate(-50%, -50%) scale(1.3);
}

/* Pulse animation for dots */
.annotation-dot::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    background: var(--color-accent);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    animation: pulse 2s infinite;
}

@keyframes pulse {
    0% {
        transform: translate(-50%, -50%) scale(1);
        opacity: 0.6;
    }
    100% {
        transform: translate(-50%, -50%) scale(2);
        opacity: 0;
    }
}

/* ============================================
   ANNOTATION TOOLTIP
   ============================================ */

.annotation-tooltip {
    position: absolute;
    background: white;
    padding: var(--spacing-sm) var(--spacing-md);
    border-radius: 8px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
    max-width: 280px;
    pointer-events: auto;
    z-index: 20;
    opacity: 0;
    visibility: hidden;
    transform: translateY(-10px);
    transition: opacity 0.3s ease, visibility 0.3s ease, transform 0.3s ease;
}

.annotation-tooltip.visible {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
}

.annotation-tooltip::before {
    content: '';
    position: absolute;
    bottom: 100%;
    left: 20px;
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-bottom: 8px solid white;
}

/* Tooltip positioned above dot */
.annotation-tooltip.position-top {
    bottom: calc(100% + 12px);
    left: 50%;
    transform: translateX(-50%) translateY(-10px);
}

.annotation-tooltip.position-top.visible {
    transform: translateX(-50%) translateY(0);
}

.annotation-tooltip.position-top::before {
    top: 100%;
    bottom: auto;
    left: 50%;
    transform: translateX(-50%);
    border-bottom: none;
    border-top: 8px solid white;
}

/* Tooltip positioned below dot */
.annotation-tooltip.position-bottom {
    top: calc(100% + 12px);
    left: 50%;
    transform: translateX(-50%) translateY(10px);
}

.annotation-tooltip.position-bottom.visible {
    transform: translateX(-50%) translateY(0);
}

.tooltip-content {
    font-size: var(--font-size-sm);
    line-height: 1.5;
    color: var(--color-text);
}

.tooltip-title {
    font-weight: 600;
    margin-bottom: var(--spacing-xs);
    color: var(--color-primary);
}

/* Close button for mobile */
.tooltip-close {
    position: absolute;
    top: 8px;
    right: 8px;
    width: 24px;
    height: 24px;
    background: none;
    border: none;
    cursor: pointer;
    color: var(--color-text-muted);
    display: none; /* Hidden on desktop, shown on mobile */
}

/* ============================================
   ANNOTATION TOGGLE BUTTON
   ============================================ */

.annotation-toggle {
    position: absolute;
    bottom: var(--spacing-md);
    right: var(--spacing-md);
    display: flex;
    align-items: center;
    gap: var(--spacing-xs);
    padding: var(--spacing-xs) var(--spacing-md);
    background: white;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 24px;
    font-size: var(--font-size-sm);
    font-weight: 500;
    cursor: pointer;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    transition: all var(--transition-fast);
    z-index: 30;
}

.annotation-toggle:hover {
    background: var(--color-accent);
    color: white;
    border-color: var(--color-accent);
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
}

.annotation-toggle svg {
    transition: transform 0.3s ease;
}

.annotation-toggle.active svg {
    transform: rotate(45deg);
}

/* ============================================
   ANNOTATION INFO
   ============================================ */

.annotation-info {
    text-align: center;
    margin-top: var(--spacing-md);
    font-size: var(--font-size-sm);
    color: var(--color-text-muted);
}

#annotationCount {
    font-weight: 600;
    color: var(--color-accent);
}

/* ============================================
   RESPONSIVE - MOBILE
   ============================================ */

@media (max-width: 768px) {
    .annotation-dot {
        width: 32px;
        height: 32px;
    }

    .annotation-tooltip {
        max-width: calc(100vw - 40px);
        left: 50% !important;
        transform: translateX(-50%) translateY(10px);
        bottom: auto;
        top: calc(100% + 12px);
    }

    .annotation-tooltip.visible {
        transform: translateX(-50%) translateY(0);
    }

    .annotation-tooltip::before {
        left: 50%;
        transform: translateX(-50%);
    }

    .tooltip-close {
        display: block;
    }

    .annotation-toggle {
        bottom: var(--spacing-sm);
        right: var(--spacing-sm);
        font-size: 0.75rem;
        padding: var(--spacing-xs) var(--spacing-sm);
    }
}

/* ============================================
   ANIMATIONS
   ============================================ */

.annotations-overlay.hidden .annotation-dot {
    opacity: 0;
    pointer-events: none;
    transform: translate(-50%, -50%) scale(0);
}

.annotations-overlay.visible .annotation-dot {
    animation: dotAppear 0.4s ease backwards;
}

@keyframes dotAppear {
    from {
        opacity: 0;
        transform: translate(-50%, -50%) scale(0);
    }
    to {
        opacity: 1;
        transform: translate(-50%, -50%) scale(1);
    }
}
```

Import in your HTML:

```html
<link rel="stylesheet" href="styles/annotations.css">
```

---

## 3. JavaScript Implementation

Create `scripts/annotations.js`:

```javascript
// scripts/annotations.js

class AnnotationSystem {
    constructor(imageId, containerId, dataUrl) {
        this.image = document.getElementById(imageId);
        this.container = document.getElementById(containerId);
        this.dataUrl = dataUrl;
        this.annotations = [];
        this.activeTooltip = null;
        this.annotationsVisible = true;

        this.init();
    }

    async init() {
        // Wait for image to load to get accurate dimensions
        if (this.image.complete) {
            await this.loadAnnotations();
            this.render();
            this.setupToggle();
        } else {
            this.image.addEventListener('load', async () => {
                await this.loadAnnotations();
                this.render();
                this.setupToggle();
            });
        }

        // Update positions on window resize
        window.addEventListener('resize', () => this.updatePositions());
    }

    /**
     * Load annotation data from JSON
     */
    async loadAnnotations() {
        try {
            const response = await fetch(this.dataUrl);
            if (!response.ok) throw new Error('Failed to load annotations');
            const data = await response.json();
            this.annotations = data.annotations;

            // Update count display
            const countEl = document.getElementById('annotationCount');
            if (countEl) countEl.textContent = this.annotations.length;

        } catch (error) {
            console.error('Error loading annotations:', error);
            // Use demo data if file not found
            this.annotations = this.getDemoData();
        }
    }

    /**
     * Render all annotation dots and tooltips
     */
    render() {
        this.container.innerHTML = ''; // Clear existing

        this.annotations.forEach((annotation, index) => {
            // Create annotation dot
            const dot = this.createDot(annotation, index);

            // Create tooltip
            const tooltip = this.createTooltip(annotation, index);

            // Add to container
            this.container.appendChild(dot);
            this.container.appendChild(tooltip);

            // Setup interaction
            this.setupInteraction(dot, tooltip, index);

            // Stagger animation appearance
            gsap.from(dot, {
                scale: 0,
                opacity: 0,
                duration: 0.4,
                delay: index * 0.1,
                ease: 'back.out(1.7)'
            });
        });
    }

    /**
     * Create annotation dot element
     */
    createDot(annotation, index) {
        const dot = document.createElement('div');
        dot.className = 'annotation-dot';
        dot.id = `annotation-dot-${index}`;
        dot.style.left = `${annotation.x}%`;
        dot.style.top = `${annotation.y}%`;
        dot.setAttribute('aria-label', annotation.title || 'Annotation');
        dot.setAttribute('role', 'button');
        dot.setAttribute('tabindex', '0');

        return dot;
    }

    /**
     * Create tooltip element
     */
    createTooltip(annotation, index) {
        const tooltip = document.createElement('div');
        tooltip.className = 'annotation-tooltip';
        tooltip.id = `annotation-tooltip-${index}`;

        // Position tooltip relative to dot
        const position = annotation.y < 50 ? 'position-bottom' : 'position-top';
        tooltip.classList.add(position);

        // Tooltip content
        tooltip.innerHTML = `
            <button class="tooltip-close" aria-label="Close">×</button>
            <div class="tooltip-content">
                ${annotation.title ? `<div class="tooltip-title">${annotation.title}</div>` : ''}
                <p>${annotation.text}</p>
            </div>
        `;

        return tooltip;
    }

    /**
     * Setup interaction events for dot and tooltip
     */
    setupInteraction(dot, tooltip, index) {
        const isMobile = 'ontouchstart' in window;

        if (isMobile) {
            // Mobile: Tap to toggle
            dot.addEventListener('click', (e) => {
                e.stopPropagation();
                this.toggleTooltip(dot, tooltip, index);
            });

            // Close button
            const closeBtn = tooltip.querySelector('.tooltip-close');
            closeBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                this.hideTooltip(dot, tooltip);
            });

            // Click outside to close
            document.addEventListener('click', () => {
                if (this.activeTooltip === index) {
                    this.hideTooltip(dot, tooltip);
                }
            });

        } else {
            // Desktop: Hover to show
            dot.addEventListener('mouseenter', () => {
                this.showTooltip(dot, tooltip, index);
            });

            dot.addEventListener('mouseleave', (e) => {
                // Don't hide if moving to tooltip
                if (!e.relatedTarget || !tooltip.contains(e.relatedTarget)) {
                    this.hideTooltip(dot, tooltip);
                }
            });

            // Keep tooltip visible when hovering over it
            tooltip.addEventListener('mouseenter', () => {
                this.showTooltip(dot, tooltip, index);
            });

            tooltip.addEventListener('mouseleave', () => {
                this.hideTooltip(dot, tooltip);
            });
        }

        // Keyboard accessibility
        dot.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.toggleTooltip(dot, tooltip, index);
            }
        });
    }

    /**
     * Show tooltip with GSAP animation
     */
    showTooltip(dot, tooltip, index) {
        // Hide any other active tooltip
        if (this.activeTooltip !== null && this.activeTooltip !== index) {
            const prevTooltip = document.getElementById(`annotation-tooltip-${this.activeTooltip}`);
            const prevDot = document.getElementById(`annotation-dot-${this.activeTooltip}`);
            if (prevTooltip) this.hideTooltip(prevDot, prevTooltip);
        }

        this.activeTooltip = index;
        dot.classList.add('active');

        // Position tooltip
        this.positionTooltip(dot, tooltip);

        // Animate in
        gsap.to(tooltip, {
            opacity: 1,
            y: 0,
            duration: 0.3,
            ease: 'power2.out',
            onStart: () => {
                tooltip.classList.add('visible');
            }
        });
    }

    /**
     * Hide tooltip with GSAP animation
     */
    hideTooltip(dot, tooltip) {
        if (!tooltip.classList.contains('visible')) return;

        dot.classList.remove('active');
        this.activeTooltip = null;

        gsap.to(tooltip, {
            opacity: 0,
            y: -10,
            duration: 0.2,
            ease: 'power2.in',
            onComplete: () => {
                tooltip.classList.remove('visible');
            }
        });
    }

    /**
     * Toggle tooltip (for mobile/keyboard)
     */
    toggleTooltip(dot, tooltip, index) {
        if (tooltip.classList.contains('visible')) {
            this.hideTooltip(dot, tooltip);
        } else {
            this.showTooltip(dot, tooltip, index);
        }
    }

    /**
     * Position tooltip relative to dot
     */
    positionTooltip(dot, tooltip) {
        const dotRect = dot.getBoundingClientRect();
        const containerRect = this.container.getBoundingClientRect();

        // Position relative to container
        const x = dotRect.left - containerRect.left + (dotRect.width / 2);
        const y = dotRect.top - containerRect.top + (dotRect.height / 2);

        tooltip.style.left = `${x}px`;
        tooltip.style.top = `${y}px`;
    }

    /**
     * Update all positions on resize
     */
    updatePositions() {
        this.annotations.forEach((annotation, index) => {
            const dot = document.getElementById(`annotation-dot-${index}`);
            const tooltip = document.getElementById(`annotation-tooltip-${index}`);

            if (dot && tooltip && tooltip.classList.contains('visible')) {
                this.positionTooltip(dot, tooltip);
            }
        });
    }

    /**
     * Setup show/hide all toggle button
     */
    setupToggle() {
        const toggleBtn = document.getElementById('toggleAnnotations');
        if (!toggleBtn) return;

        toggleBtn.addEventListener('click', () => {
            this.annotationsVisible = !this.annotationsVisible;

            if (this.annotationsVisible) {
                this.container.classList.remove('hidden');
                this.container.classList.add('visible');
                toggleBtn.classList.remove('active');
                toggleBtn.querySelector('span').textContent = 'Hide Annotations';
            } else {
                this.container.classList.add('hidden');
                this.container.classList.remove('visible');
                toggleBtn.classList.add('active');
                toggleBtn.querySelector('span').textContent = 'Show Annotations';

                // Hide any active tooltips
                if (this.activeTooltip !== null) {
                    const tooltip = document.getElementById(`annotation-tooltip-${this.activeTooltip}`);
                    const dot = document.getElementById(`annotation-dot-${this.activeTooltip}`);
                    if (tooltip && dot) this.hideTooltip(dot, tooltip);
                }
            }
        });
    }

    /**
     * Demo data fallback
     */
    getDemoData() {
        return [
            {
                x: 85,
                y: 40,
                title: "Color Technique",
                text: "This subtle gradient was achieved using multiple layers of transparent washes, building up depth gradually."
            },
            {
                x: 20,
                y: 65,
                title: "Hidden Reference",
                text: "A subtle callback to my earlier work 'Project Alpha' - notice the similar geometric pattern."
            },
            {
                x: 50,
                y: 25,
                title: "Iterative Process",
                text: "This section went through 12 iterations before I was satisfied with the composition and balance."
            }
        ];
    }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        // Initialize for the main annotated artwork
        const annotationSystem = new AnnotationSystem(
            'annotatedImage',
            'annotationsContainer',
            'data/annotations.json'
        );
    });
} else {
    const annotationSystem = new AnnotationSystem(
        'annotatedImage',
        'annotationsContainer',
        'data/annotations.json'
    );
}

export default AnnotationSystem;
```

---

## 4. Data Structure

Create `data/annotations.json`:

```json
{
    "annotations": [
        {
            "x": 85,
            "y": 40,
            "title": "Gradient Technique",
            "text": "This subtle gradient was achieved using multiple layers of transparent washes, building up depth gradually over several sessions."
        },
        {
            "x": 20,
            "y": 65,
            "title": "Hidden Reference",
            "text": "A subtle callback to my earlier work 'Project Alpha' from 2022 - notice the similar geometric pattern in the lower left."
        },
        {
            "x": 50,
            "y": 25,
            "title": "Compositional Balance",
            "text": "The focal point was carefully positioned using the rule of thirds to create natural eye flow through the piece."
        },
        {
            "x": 65,
            "y: 75,
            "title": "Color Psychology",
            "text": "The warm orange tones here were chosen to evoke feelings of energy and creativity, contrasting with the cooler blues in the background."
        },
        {
            "x": 35,
            "y": 50,
            "title": "Iterative Refinement",
            "text": "This section went through 12 iterations before achieving the right balance between detail and simplicity."
        }
    ]
}
```

---

## 5. Integration with Existing Pages

### Option A: Single Project Page

Add the annotation system to your case study page:

```html
<!-- In your case-study.html -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<link rel="stylesheet" href="styles/annotations.css">
<script type="module" src="scripts/annotations.js"></script>
```

### Option B: Multiple Artworks

For dynamic loading based on project ID:

```javascript
// In annotations.js, modify the data URL:
const projectId = new URLSearchParams(window.location.search).get('project');
const annotationSystem = new AnnotationSystem(
    'annotatedImage',
    'annotationsContainer',
    `data/annotations-${projectId}.json`
);
```

---

## 6. Testing Checklist

- [ ] Annotations load without console errors
- [ ] Dots appear at correct X/Y positions
- [ ] Hover over dot shows tooltip (desktop)
- [ ] Tap dot shows tooltip (mobile)
- [ ] Tooltip has smooth fade-in animation
- [ ] Tooltip positioned correctly (doesn't go off-screen)
- [ ] Multiple tooltips don't overlap
- [ ] Active tooltip closes when showing another
- [ ] Close button works on mobile
- [ ] Toggle button shows/hides all annotations
- [ ] Keyboard navigation works (Tab + Enter)
- [ ] Window resize updates tooltip positions
- [ ] Pulse animation plays on dots

---

## 7. Troubleshooting

**Issue**: Dots not appearing at correct positions
- Ensure image has loaded before rendering annotations
- Check that X/Y values are percentages (0-100)
- Verify `position: relative` on artwork container

**Issue**: Tooltips cut off at edges
- Add logic to detect screen boundaries
- Flip tooltip position if too close to edge
- Reduce `max-width` on mobile

**Issue**: Animations not smooth
- Verify GSAP is loaded before annotations.js
- Check for JavaScript errors in console
- Reduce animation `duration` if still laggy

**Issue**: Mobile tooltips don't close
- Ensure click-outside listener is attached
- Verify close button has proper event listener
- Check z-index stacking

---

## 8. Advanced Enhancements

### Auto-tour Mode

Add automatic cycling through all annotations:

```javascript
startTour(interval = 3000) {
    let currentIndex = 0;
    this.tourInterval = setInterval(() => {
        const dot = document.getElementById(`annotation-dot-${currentIndex}`);
        const tooltip = document.getElementById(`annotation-tooltip-${currentIndex}`);

        this.showTooltip(dot, tooltip, currentIndex);

        currentIndex = (currentIndex + 1) % this.annotations.length;
    }, interval);
}
```

### Annotation Categories

Group annotations by type (technique, inspiration, process):

```json
{
    "x": 85,
    "y": 40,
    "category": "technique",
    "title": "Gradient Technique",
    "text": "..."
}
```

Apply different colors per category in CSS.

### Video/Audio Annotations

Embed media in tooltips:

```javascript
tooltip.innerHTML = `
    <div class="tooltip-content">
        <div class="tooltip-title">${annotation.title}</div>
        <video controls width="100%">
            <source src="${annotation.videoUrl}" type="video/mp4">
        </video>
        <p>${annotation.text}</p>
    </div>
`;
```

---

## Next Steps

Phase 3 complete! Ready for:
- **Phase 4**: 3D Portfolio Constellation (Three.js)
- **Phase 5**: AR Viewer Integration
- **Phase 6**: Page Transitions & Advanced GSAP

---

**Pro tip**: Start with 3-5 annotations per artwork. Too many can overwhelm users. Focus on the most interesting technical or creative insights.
