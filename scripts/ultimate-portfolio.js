// ====================================
// Enhanced Portfolio Data Structure
// Featured works appear in hero carousel
// ====================================
const portfolioData = [
    // 2024 Works
    {
        id: 'celestial-drift',
        title: 'Celestial Drift',
        year: 2024,
        medium: 'Oil on linen',
        dimensions: '36" × 48"',
        image_url: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=2000&fm=webp',
        thumbnail_url: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=600&fm=webp',
        description: 'A piece exploring the cosmic ballet of nebulae and nascent stars.',
        isForSale: true,
        print_url: null,
        featured: true
    },
    {
        id: 'crimson-bloom',
        title: 'Crimson Bloom',
        year: 2024,
        medium: 'Acrylic on canvas',
        dimensions: '24" × 24"',
        image_url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2000&fm=webp',
        thumbnail_url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=600&fm=webp',
        description: 'An exploration of botanical forms at the edge of abstraction.',
        isForSale: false,
        print_url: '/shop/crimson-bloom',
        featured: true
    },
    {
        id: 'urban-symphony',
        title: 'Urban Symphony',
        year: 2024,
        medium: 'Mixed media on board',
        dimensions: '30" × 40"',
        image_url: 'https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?q=80&w=2000&fm=webp',
        thumbnail_url: 'https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?q=80&w=600&fm=webp',
        description: 'Capturing the rhythm and chaos of city life.',
        isForSale: true,
        print_url: null,
        featured: true
    },
    {
        id: 'neon-dreams',
        title: 'Neon Dreams',
        year: 2024,
        medium: 'Acrylic on canvas',
        dimensions: '40" × 30"',
        image_url: 'https://images.unsplash.com/photo-1533158326339-7f3cf2404354?q=80&w=2000&fm=webp',
        thumbnail_url: 'https://images.unsplash.com/photo-1533158326339-7f3cf2404354?q=80&w=600&fm=webp',
        description: 'Electric colors dance across the urban landscape.',
        isForSale: true,
        print_url: null,
        featured: false
    },
    {
        id: 'whispers-of-autumn',
        title: 'Whispers of Autumn',
        year: 2024,
        medium: 'Oil on canvas',
        dimensions: '36" × 48"',
        image_url: 'https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?q=80&w=2000&fm=webp',
        thumbnail_url: 'https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?q=80&w=600&fm=webp',
        description: 'Capturing the fleeting beauty of fall.',
        isForSale: false,
        print_url: '/shop/whispers-autumn',
        featured: false
    },
    {
        id: 'midnight-garden',
        title: 'Midnight Garden',
        year: 2024,
        medium: 'Mixed media',
        dimensions: '24" × 36"',
        image_url: 'https://images.unsplash.com/photo-1579541814924-49fef17c5be5?q=80&w=2000&fm=webp',
        thumbnail_url: 'https://images.unsplash.com/photo-1579541814924-49fef17c5be5?q=80&w=600&fm=webp',
        description: 'Nocturnal blooms in a surreal landscape.',
        isForSale: true,
        print_url: null,
        featured: false
    },
    {
        id: 'digital-horizons',
        title: 'Digital Horizons',
        year: 2024,
        medium: 'Digital art print',
        dimensions: '30" × 40"',
        image_url: 'https://images.unsplash.com/photo-1557672172-298e090bd0f1?q=80&w=2000&fm=webp',
        thumbnail_url: 'https://images.unsplash.com/photo-1557672172-298e090bd0f1?q=80&w=600&fm=webp',
        description: 'Where technology meets nature.',
        isForSale: true,
        print_url: null,
        featured: false
    },
    {
        id: 'fragments-of-memory',
        title: 'Fragments of Memory',
        year: 2024,
        medium: 'Collage on board',
        dimensions: '20" × 24"',
        image_url: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=2000&fm=webp',
        thumbnail_url: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=600&fm=webp',
        description: 'Piecing together moments from the past.',
        isForSale: false,
        print_url: '/shop/fragments-memory',
        featured: false
    },
    {
        id: 'ocean-depths',
        title: 'Ocean Depths',
        year: 2024,
        medium: 'Oil on canvas',
        dimensions: '48" × 36"',
        image_url: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=2000&fm=webp',
        thumbnail_url: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=600&fm=webp',
        description: 'Exploring the mystery beneath the waves.',
        isForSale: true,
        print_url: null,
        featured: false
    },
    {
        id: 'crystal-clarity',
        title: 'Crystal Clarity',
        year: 2024,
        medium: 'Acrylic on canvas',
        dimensions: '30" × 30"',
        image_url: 'https://images.unsplash.com/photo-1551732998-c91d86d39a7e?q=80&w=2000&fm=webp',
        thumbnail_url: 'https://images.unsplash.com/photo-1551732998-c91d86d39a7e?q=80&w=600&fm=webp',
        description: 'Geometric patterns in vibrant hues.',
        isForSale: true,
        print_url: null,
        featured: false
    },

    // 2023 Works
    {
        id: 'ethereal-waves',
        title: 'Ethereal Waves',
        year: 2023,
        medium: 'Watercolor on paper',
        dimensions: '18" × 24"',
        image_url: 'https://images.unsplash.com/photo-1547891654-e66ed7ebb968?q=80&w=2000&fm=webp',
        thumbnail_url: 'https://images.unsplash.com/photo-1547891654-e66ed7ebb968?q=80&w=600&fm=webp',
        description: 'Fluid forms inspired by ocean movements.',
        isForSale: false,
        print_url: '/shop/ethereal-waves',
        featured: true
    },
    {
        id: 'golden-hour',
        title: 'Golden Hour',
        year: 2023,
        medium: 'Oil on canvas',
        dimensions: '48" × 60"',
        image_url: 'https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?q=80&w=2000&fm=webp',
        thumbnail_url: 'https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?q=80&w=600&fm=webp',
        description: 'Light and shadow interplay during the magic hour.',
        isForSale: true,
        print_url: null,
        featured: true
    },
    {
        id: 'abstract-mind',
        title: 'Abstract Mind',
        year: 2023,
        medium: 'Digital painting',
        dimensions: '40" × 30"',
        image_url: 'https://images.unsplash.com/photo-1561214115-f2f134cc4912?q=80&w=2000&fm=webp',
        thumbnail_url: 'https://images.unsplash.com/photo-1561214115-f2f134cc4912?q=80&w=600&fm=webp',
        description: 'An exploration of consciousness and perception.',
        isForSale: false,
        print_url: '/shop/abstract-mind',
        featured: true
    },
    {
        id: 'desert-mirage',
        title: 'Desert Mirage',
        year: 2023,
        medium: 'Oil on linen',
        dimensions: '36" × 48"',
        image_url: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?q=80&w=2000&fm=webp',
        thumbnail_url: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?q=80&w=600&fm=webp',
        description: 'Heat waves dance across the arid landscape.',
        isForSale: true,
        print_url: null,
        featured: false
    },
    {
        id: 'winter-solstice',
        title: 'Winter Solstice',
        year: 2023,
        medium: 'Acrylic on canvas',
        dimensions: '30" × 40"',
        image_url: 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?q=80&w=2000&fm=webp',
        thumbnail_url: 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?q=80&w=600&fm=webp',
        description: 'The stillness of the longest night.',
        isForSale: false,
        print_url: '/shop/winter-solstice',
        featured: false
    },
    {
        id: 'urban-jungle',
        title: 'Urban Jungle',
        year: 2023,
        medium: 'Mixed media',
        dimensions: '40" × 30"',
        image_url: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=2000&fm=webp',
        thumbnail_url: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=600&fm=webp',
        description: 'Nature reclaims the cityscape.',
        isForSale: true,
        print_url: null,
        featured: false
    },
    {
        id: 'reflections',
        title: 'Reflections',
        year: 2023,
        medium: 'Oil on canvas',
        dimensions: '24" × 36"',
        image_url: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=2000&fm=webp',
        thumbnail_url: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=600&fm=webp',
        description: 'Mirror images of reality and imagination.',
        isForSale: true,
        print_url: null,
        featured: false
    },
    {
        id: 'chromatic-burst',
        title: 'Chromatic Burst',
        year: 2023,
        medium: 'Acrylic on canvas',
        dimensions: '36" × 36"',
        image_url: 'https://images.unsplash.com/photo-1506259091721-347e791bab0f?q=80&w=2000&fm=webp',
        thumbnail_url: 'https://images.unsplash.com/photo-1506259091721-347e791bab0f?q=80&w=600&fm=webp',
        description: 'An explosion of color and energy.',
        isForSale: false,
        print_url: '/shop/chromatic-burst',
        featured: false
    },
    {
        id: 'serenity-now',
        title: 'Serenity Now',
        year: 2023,
        medium: 'Watercolor',
        dimensions: '18" × 24"',
        image_url: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=2000&fm=webp',
        thumbnail_url: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=600&fm=webp',
        description: 'Finding peace in the chaos.',
        isForSale: true,
        print_url: null,
        featured: false
    },
    {
        id: 'temporal-flux',
        title: 'Temporal Flux',
        year: 2023,
        medium: 'Digital art',
        dimensions: '30" × 40"',
        image_url: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2000&fm=webp',
        thumbnail_url: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=600&fm=webp',
        description: 'Time bends and warps in this visual exploration.',
        isForSale: false,
        print_url: '/shop/temporal-flux',
        featured: false
    },

    // 2022 Works
    {
        id: 'mountain-majesty',
        title: 'Mountain Majesty',
        year: 2022,
        medium: 'Oil on canvas',
        dimensions: '48" × 60"',
        image_url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2000&fm=webp',
        thumbnail_url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=600&fm=webp',
        description: 'The grandeur of alpine landscapes.',
        isForSale: true,
        print_url: null,
        featured: true
    },
    {
        id: 'electric-soul',
        title: 'Electric Soul',
        year: 2022,
        medium: 'Acrylic on canvas',
        dimensions: '30" × 40"',
        image_url: 'https://images.unsplash.com/photo-1496449903678-68ddcb189a24?q=80&w=2000&fm=webp',
        thumbnail_url: 'https://images.unsplash.com/photo-1496449903678-68ddcb189a24?q=80&w=600&fm=webp',
        description: 'Energy flows through every brushstroke.',
        isForSale: false,
        print_url: '/shop/electric-soul',
        featured: false
    },
    {
        id: 'forest-whispers',
        title: 'Forest Whispers',
        year: 2022,
        medium: 'Mixed media',
        dimensions: '36" × 48"',
        image_url: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2000&fm=webp',
        thumbnail_url: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=600&fm=webp',
        description: 'Listen to the secrets of the woods.',
        isForSale: true,
        print_url: null,
        featured: false
    },
    {
        id: 'cosmic-voyage',
        title: 'Cosmic Voyage',
        year: 2022,
        medium: 'Digital painting',
        dimensions: '40" × 30"',
        image_url: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=2000&fm=webp',
        thumbnail_url: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=600&fm=webp',
        description: 'Journey through the stars.',
        isForSale: false,
        print_url: '/shop/cosmic-voyage',
        featured: false
    },
    {
        id: 'amber-twilight',
        title: 'Amber Twilight',
        year: 2022,
        medium: 'Oil on linen',
        dimensions: '24" × 36"',
        image_url: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=2000&fm=webp',
        thumbnail_url: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=600&fm=webp',
        description: 'The warm glow of dusk descends.',
        isForSale: true,
        print_url: null,
        featured: false
    },
    {
        id: 'liquid-light',
        title: 'Liquid Light',
        year: 2022,
        medium: 'Watercolor',
        dimensions: '18" × 24"',
        image_url: 'https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?q=80&w=2000&fm=webp',
        thumbnail_url: 'https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?q=80&w=600&fm=webp',
        description: 'Light flows like water across the canvas.',
        isForSale: false,
        print_url: '/shop/liquid-light',
        featured: false
    },
    {
        id: 'metropolitan-pulse',
        title: 'Metropolitan Pulse',
        year: 2022,
        medium: 'Acrylic on board',
        dimensions: '30" × 40"',
        image_url: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=2000&fm=webp',
        thumbnail_url: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=600&fm=webp',
        description: 'The heartbeat of the city.',
        isForSale: true,
        print_url: null,
        featured: false
    },
    {
        id: 'zen-garden',
        title: 'Zen Garden',
        year: 2022,
        medium: 'Mixed media',
        dimensions: '24" × 24"',
        image_url: 'https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?q=80&w=2000&fm=webp',
        thumbnail_url: 'https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?q=80&w=600&fm=webp',
        description: 'Tranquility in minimal forms.',
        isForSale: false,
        print_url: '/shop/zen-garden',
        featured: false
    },
    {
        id: 'prism-dreams',
        title: 'Prism Dreams',
        year: 2022,
        medium: 'Oil on canvas',
        dimensions: '36" × 48"',
        image_url: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=2000&fm=webp',
        thumbnail_url: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=600&fm=webp',
        description: 'Light fractured into infinite possibilities.',
        isForSale: true,
        print_url: null,
        featured: false
    },
    {
        id: 'velvet-night',
        title: 'Velvet Night',
        year: 2022,
        medium: 'Acrylic on canvas',
        dimensions: '30" × 30"',
        image_url: 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?q=80&w=2000&fm=webp',
        thumbnail_url: 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?q=80&w=600&fm=webp',
        description: 'The soft embrace of darkness.',
        isForSale: false,
        print_url: '/shop/velvet-night',
        featured: false
    }
];

// ====================================
// Global State Management
// ====================================
let currentIndex = 0;
let isDragging = false;
let startX = 0;
let currentX = 0;
let threshold = 100;
let isTransitioning = false;

// Pagination & Filtering State
let currentPage = 1;
let itemsPerPage = 12;
let filterYear = 'all';
let featuredWorks = []; // Will hold only featured works for hero carousel
let heroCarouselIndex = 0; // Separate index for hero carousel

// Dual-layer background elements for crossfade
const bg1 = document.getElementById('bgImage1');
const bg2 = document.getElementById('bgImage2');
let currentBg = bg1;
let nextBg = bg2;

// DOM Elements
const container = document.getElementById('container');
const imgTitle = document.getElementById('imgTitle');
const imgMeta = document.getElementById('imgMeta');
const inquireBtn = document.getElementById('inquireBtn');
const prevPreview = document.getElementById('prevPreview');
const nextPreview = document.getElementById('nextPreview');
const loadingOverlay = document.getElementById('loadingOverlay');
const loadingBlur = document.getElementById('loadingBlur');
const errorMessage = document.getElementById('errorMessage');
const announcer = document.getElementById('announcer');
const commandBar = document.getElementById('commandBar');
const thumbnailGrid = document.getElementById('thumbnailGrid');
const portfolioGrid = document.getElementById('portfolioGrid');
const paginationControls = document.getElementById('paginationControls');
const paginationNumbers = document.getElementById('paginationNumbers');
const paginationInfo = document.getElementById('paginationInfo');
const prevPageBtn = document.getElementById('prevPageBtn');
const nextPageBtn = document.getElementById('nextPageBtn');

// ====================================
// Filter & Pagination Helper Functions
// ====================================
function getFilteredWorks() {
    if (filterYear === 'all') {
        return portfolioData;
    }
    return portfolioData.filter(piece => piece.year === parseInt(filterYear));
}

function getTotalPages() {
    const filteredWorks = getFilteredWorks();
    return Math.ceil(filteredWorks.length / itemsPerPage);
}

function getCurrentPageWorks() {
    const filteredWorks = getFilteredWorks();
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredWorks.slice(startIndex, endIndex);
}

// ====================================
// Portfolio Grid Builder with Pagination
// ====================================
function buildPortfolioGrid() {
    portfolioGrid.innerHTML = '';
    const works = getCurrentPageWorks();

    works.forEach((piece) => {
        const gridItem = document.createElement('article');
        gridItem.className = 'grid-item';

        const link = document.createElement('a');
        link.href = '#home';
        link.dataset.id = piece.id;
        link.setAttribute('aria-label', `View ${piece.title} in full screen`);

        link.innerHTML = `
            <img src="${piece.thumbnail_url}" alt="${piece.title}" loading="lazy">
            <div class="grid-item-overlay">
                <h3>${piece.title}</h3>
                <p>${piece.year}</p>
            </div>
        `;

        link.addEventListener('click', (event) => {
            event.preventDefault();
            const pieceId = event.currentTarget.dataset.id;

            // Find the piece in the filtered works
            const filteredWorks = getFilteredWorks();
            const lightboxIndex = filteredWorks.findIndex(p => p.id === pieceId);

            // Open lightbox with this piece
            if (lightboxIndex !== -1) {
                openLightbox(lightboxIndex, filteredWorks);
            }
        });

        gridItem.appendChild(link);
        portfolioGrid.appendChild(gridItem);
    });

    updatePagination();
}

// ====================================
// Pagination Controls
// ====================================
function updatePagination() {
    const totalPages = getTotalPages();
    const filteredWorks = getFilteredWorks();

    // Update page numbers
    paginationNumbers.innerHTML = '';

    if (totalPages <= 1) {
        paginationControls.style.display = 'none';
        paginationInfo.style.display = 'none';
        return;
    }

    paginationControls.style.display = 'flex';
    paginationInfo.style.display = 'block';

    // Create page numbers (max 5 visible at a time)
    const maxVisible = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisible / 2));
    let endPage = Math.min(totalPages, startPage + maxVisible - 1);

    if (endPage - startPage < maxVisible - 1) {
        startPage = Math.max(1, endPage - maxVisible + 1);
    }

    // Show first page if not visible
    if (startPage > 1) {
        const firstBtn = createPageButton(1);
        paginationNumbers.appendChild(firstBtn);
        if (startPage > 2) {
            const ellipsis = document.createElement('span');
            ellipsis.className = 'pagination-ellipsis';
            ellipsis.textContent = '...';
            paginationNumbers.appendChild(ellipsis);
        }
    }

    // Create page buttons
    for (let i = startPage; i <= endPage; i++) {
        const pageBtn = createPageButton(i);
        paginationNumbers.appendChild(pageBtn);
    }

    // Show last page if not visible
    if (endPage < totalPages) {
        if (endPage < totalPages - 1) {
            const ellipsis = document.createElement('span');
            ellipsis.className = 'pagination-ellipsis';
            ellipsis.textContent = '...';
            paginationNumbers.appendChild(ellipsis);
        }
        const lastBtn = createPageButton(totalPages);
        paginationNumbers.appendChild(lastBtn);
    }

    // Update prev/next buttons
    prevPageBtn.disabled = currentPage === 1;
    nextPageBtn.disabled = currentPage === totalPages;

    // Update pagination info
    const startItem = (currentPage - 1) * itemsPerPage + 1;
    const endItem = Math.min(currentPage * itemsPerPage, filteredWorks.length);
    paginationInfo.textContent = `Showing ${startItem}-${endItem} of ${filteredWorks.length} works | Page ${currentPage} of ${totalPages}`;
}

function createPageButton(pageNum) {
    const button = document.createElement('button');
    button.className = 'page-number';
    button.textContent = pageNum;
    button.setAttribute('aria-label', `Page ${pageNum}`);

    if (pageNum === currentPage) {
        button.classList.add('active');
        button.setAttribute('aria-current', 'page');
    }

    button.addEventListener('click', () => {
        changePage(pageNum);
    });

    return button;
}

function changePage(page) {
    const totalPages = getTotalPages();
    if (page < 1 || page > totalPages || page === currentPage) {
        return;
    }

    currentPage = page;
    buildPortfolioGrid();

    // Scroll to portfolio section
    const portfolioSection = document.getElementById('portfolio');
    portfolioSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ====================================
// Year Filter
// ====================================
function filterByYear(year) {
    filterYear = year;
    currentPage = 1; // Reset to first page when filtering
    buildPortfolioGrid();

    // Update active filter button
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.year === year) {
            btn.classList.add('active');
        }
    });
}

// ====================================
// Lightbox Modal
// ====================================
let currentLightboxIndex = 0;
let lightboxWorks = [];

const lightboxOverlay = document.getElementById('lightboxOverlay');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxTitle = document.getElementById('lightboxTitle');
const lightboxMeta = document.getElementById('lightboxMeta');
const lightboxDescription = document.getElementById('lightboxDescription');
const lightboxInquireBtn = document.getElementById('lightboxInquireBtn');
const lightboxClose = document.getElementById('lightboxClose');
const lightboxPrev = document.getElementById('lightboxPrev');
const lightboxNext = document.getElementById('lightboxNext');

function openLightbox(index, works) {
    currentLightboxIndex = index;
    lightboxWorks = works;

    updateLightboxContent();
    lightboxOverlay.classList.add('show');

    // Disable body scroll
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    lightboxOverlay.classList.remove('show');
    document.body.style.overflow = '';
}

function updateLightboxContent() {
    const piece = lightboxWorks[currentLightboxIndex];

    lightboxImage.src = piece.image_url;
    lightboxImage.alt = piece.title;
    lightboxTitle.textContent = piece.title;
    lightboxMeta.textContent = `${piece.medium}, ${piece.dimensions}, ${piece.year}`;
    lightboxDescription.textContent = piece.description;

    // Update inquire button
    if (piece.isForSale) {
        lightboxInquireBtn.textContent = 'INQUIRE ABOUT ORIGINAL';
        lightboxInquireBtn.style.display = 'block';
        lightboxInquireBtn.onclick = () => {
            closeLightbox();
            setTimeout(() => {
                window.location.href = '#contact';
            }, 300);
        };
    } else if (piece.print_url) {
        lightboxInquireBtn.textContent = 'PURCHASE PRINT';
        lightboxInquireBtn.style.display = 'block';
        lightboxInquireBtn.onclick = () => {
            window.location.href = piece.print_url;
        };
    } else {
        lightboxInquireBtn.style.display = 'none';
    }

    // Update navigation buttons
    lightboxPrev.disabled = currentLightboxIndex === 0;
    lightboxNext.disabled = currentLightboxIndex === lightboxWorks.length - 1;
}

function showPrevLightboxImage() {
    if (currentLightboxIndex > 0) {
        currentLightboxIndex--;
        updateLightboxContent();
    }
}

function showNextLightboxImage() {
    if (currentLightboxIndex < lightboxWorks.length - 1) {
        currentLightboxIndex++;
        updateLightboxContent();
    }
}

// Lightbox event listeners
lightboxClose.addEventListener('click', closeLightbox);
lightboxPrev.addEventListener('click', showPrevLightboxImage);
lightboxNext.addEventListener('click', showNextLightboxImage);

// Close on overlay click
lightboxOverlay.addEventListener('click', (e) => {
    if (e.target === lightboxOverlay) {
        closeLightbox();
    }
});

// Keyboard navigation for lightbox
document.addEventListener('keydown', (e) => {
    if (!lightboxOverlay.classList.contains('show')) return;

    switch (e.key) {
        case 'Escape':
            e.preventDefault();
            closeLightbox();
            break;
        case 'ArrowLeft':
            e.preventDefault();
            showPrevLightboxImage();
            break;
        case 'ArrowRight':
            e.preventDefault();
            showNextLightboxImage();
            break;
    }
});

// ====================================
// Hero Carousel - Featured Works Only
// ====================================
function loadHeroImage(index, direction = 'none') {
    if (isTransitioning || index < 0 || index >= featuredWorks.length) {
        return;
    }

    isTransitioning = true;
    heroCarouselIndex = index;
    const piece = featuredWorks[heroCarouselIndex];

    // Update text content
    imgTitle.textContent = piece.title;
    imgMeta.textContent = `${piece.medium}, ${piece.dimensions}, ${piece.year}`;

    // Update inquire button
    if (piece.isForSale) {
        inquireBtn.textContent = 'INQUIRE ABOUT ORIGINAL';
        inquireBtn.style.display = 'inline-block';
        inquireBtn.onclick = () => {
            window.location.href = `#contact`;
        };
    } else if (piece.print_url) {
        inquireBtn.textContent = 'PURCHASE PRINT';
        inquireBtn.style.display = 'inline-block';
        inquireBtn.onclick = () => {
            window.location.href = piece.print_url;
        };
    } else {
        inquireBtn.style.display = 'none';
    }

    // Crossfade transition
    const img = new Image();
    img.onload = () => {
        // Set the image on the hidden background div
        nextBg.style.backgroundImage = `url('${piece.image_url}')`;

        // Fade in the new image and fade out the old one
        currentBg.classList.remove('visible');
        nextBg.classList.add('visible');

        // Swap the roles of the background divs for the next transition
        [currentBg, nextBg] = [nextBg, currentBg];

        // Update aria labels
        currentBg.setAttribute('aria-label', `${piece.title} - ${piece.year}`);

        // Hide loading overlay if it's the first load
        if (loadingOverlay.classList.contains('hidden') === false) {
            loadingOverlay.classList.add('hidden');
        }

        // Update previews
        updatePreviews();

        // Update command bar if open
        if (commandBar.classList.contains('show')) {
            updateThumbnailGrid();
        }

        // Announce to screen readers
        announcer.textContent = `Now viewing ${piece.title}, ${piece.year}`;

        isTransitioning = false;
    };

    img.onerror = () => {
        console.error(`Failed to load image: ${piece.image_url}`);
        showError();
        isTransitioning = false;
    };

    img.src = piece.image_url;
}

// ====================================
// Preview Images Update
// ====================================
function updatePreviews() {
    const prevIndex = (heroCarouselIndex - 1 + featuredWorks.length) % featuredWorks.length;
    const nextIndex = (heroCarouselIndex + 1) % featuredWorks.length;

    prevPreview.style.backgroundImage = `url('${featuredWorks[prevIndex].image_url}')`;
    nextPreview.style.backgroundImage = `url('${featuredWorks[nextIndex].image_url}')`;
}

// ====================================
// Hero Carousel Navigation Functions
// ====================================
function showNextHeroImage() {
    const nextIndex = (heroCarouselIndex + 1) % featuredWorks.length;
    loadHeroImage(nextIndex, 'next');
}

function showPrevHeroImage() {
    const prevIndex = (heroCarouselIndex - 1 + featuredWorks.length) % featuredWorks.length;
    loadHeroImage(prevIndex, 'prev');
}

// ====================================
// Drag/Swipe Navigation
// ====================================
function handleDragStart(e) {
    if (isTransitioning) return;

    isDragging = true;
    container.classList.add('dragging');
    startX = e.type.includes('mouse') ? e.pageX : e.touches[0].pageX;
    currentX = startX;
}

function handleDragMove(e) {
    if (!isDragging) return;

    e.preventDefault();
    currentX = e.type.includes('mouse') ? e.pageX : e.touches[0].pageX;
    const deltaX = currentX - startX;

    // Update preview positions
    prevPreview.style.transform = `translateX(calc(-100% + ${deltaX}px))`;
    nextPreview.style.transform = `translateX(calc(100% + ${deltaX}px))`;

    // Fade current background based on drag distance
    const opacity = 1 - Math.abs(deltaX) / (window.innerWidth / 2);
    currentBg.style.opacity = Math.max(0.3, opacity);
}

function handleDragEnd(e) {
    if (!isDragging) return;

    isDragging = false;
    container.classList.remove('dragging');

    const deltaX = currentX - startX;

    prevPreview.classList.add('snapping');
    nextPreview.classList.add('snapping');

    if (deltaX > threshold) {
        showPrevHeroImage();
    } else if (deltaX < -threshold) {
        showNextHeroImage();
    } else {
        // Restore opacity
        currentBg.style.opacity = 1;
    }

    // Reset preview positions
    setTimeout(() => {
        prevPreview.style.transform = 'translateX(-100%)';
        nextPreview.style.transform = 'translateX(100%)';
        prevPreview.classList.remove('snapping');
        nextPreview.classList.remove('snapping');
    }, 250);
}

// ====================================
// Command Bar (Gallery Overview) - Featured Works Only
// ====================================
function buildThumbnailGrid() {
    thumbnailGrid.innerHTML = '';

    featuredWorks.forEach((piece, index) => {
        const thumbnail = document.createElement('div');
        thumbnail.className = 'thumbnail-item';
        thumbnail.setAttribute('role', 'gridcell');
        thumbnail.setAttribute('tabindex', '0');
        thumbnail.setAttribute('aria-label', `${piece.title}, ${piece.year}`);

        if (index === heroCarouselIndex) {
            thumbnail.classList.add('current');
        }

        thumbnail.innerHTML = `
            <img src="${piece.thumbnail_url}" alt="${piece.title}">
            <div class="thumbnail-info">
                <div>${piece.title}</div>
                <div>${piece.year}</div>
            </div>
        `;

        thumbnail.addEventListener('click', () => {
            loadHeroImage(index);
            closeCommandBar();
        });

        thumbnail.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                loadHeroImage(index);
                closeCommandBar();
            }
        });

        thumbnailGrid.appendChild(thumbnail);
    });
}

function updateThumbnailGrid() {
    const thumbnails = thumbnailGrid.querySelectorAll('.thumbnail-item');
    thumbnails.forEach((thumb, index) => {
        if (index === heroCarouselIndex) {
            thumb.classList.add('current');
        } else {
            thumb.classList.remove('current');
        }
    });
}

function openCommandBar() {
    commandBar.classList.add('show');
    updateThumbnailGrid();

    // Focus first thumbnail
    const firstThumbnail = thumbnailGrid.querySelector('.thumbnail-item');
    if (firstThumbnail) {
        setTimeout(() => firstThumbnail.focus(), 100);
    }
}

function closeCommandBar() {
    commandBar.classList.remove('show');
}

function toggleCommandBar() {
    if (commandBar.classList.contains('show')) {
        closeCommandBar();
    } else {
        openCommandBar();
    }
}

// ====================================
// Error Handling
// ====================================
function showError() {
    errorMessage.classList.add('show');
}

function hideError() {
    errorMessage.classList.remove('show');
}

// ====================================
// Toast Notifications
// ====================================
function showToast(message, duration = 3000) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.add('show');

    setTimeout(() => {
        toast.classList.remove('show');
    }, duration);
}

// ====================================
// Keyboard Navigation
// ====================================
document.addEventListener('keydown', (e) => {
    // Lightbox has priority
    if (lightboxOverlay.classList.contains('show')) {
        return; // Lightbox handles its own keyboard nav
    }

    // Don't trigger if command bar is open and user is navigating thumbnails
    if (commandBar.classList.contains('show')) {
        if (e.key === 'Escape' || e.key === 'g' || e.key === 'G') {
            e.preventDefault();
            closeCommandBar();
        }
        return;
    }

    switch (e.key) {
        case 'ArrowLeft':
            e.preventDefault();
            showPrevHeroImage();
            break;
        case 'ArrowRight':
            e.preventDefault();
            showNextHeroImage();
            break;
        case 'g':
        case 'G':
            e.preventDefault();
            toggleCommandBar();
            break;
        case 'Escape':
            closeCommandBar();
            break;
    }
});

// ====================================
// Button Event Listeners
// ====================================
document.querySelector('.carousel-nav .prev').addEventListener('click', showPrevHeroImage);
document.querySelector('.carousel-nav .next').addEventListener('click', showNextHeroImage);
document.getElementById('galleryHint').addEventListener('click', toggleCommandBar);
document.getElementById('errorRetry').addEventListener('click', () => {
    hideError();
    loadHeroImage(heroCarouselIndex);
});

// Pagination buttons
prevPageBtn.addEventListener('click', () => {
    changePage(currentPage - 1);
});

nextPageBtn.addEventListener('click', () => {
    changePage(currentPage + 1);
});

// Filter buttons
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        filterByYear(btn.dataset.year);
    });
});

// Close command bar when clicking overlay
commandBar.addEventListener('click', (e) => {
    if (e.target === commandBar) {
        closeCommandBar();
    }
});

// ====================================
// Drag Event Listeners
// ====================================
container.addEventListener('mousedown', handleDragStart);
container.addEventListener('mousemove', handleDragMove);
container.addEventListener('mouseup', handleDragEnd);
container.addEventListener('mouseleave', handleDragEnd);

container.addEventListener('touchstart', handleDragStart, { passive: true });
container.addEventListener('touchmove', handleDragMove, { passive: false });
container.addEventListener('touchend', handleDragEnd);

// ====================================
// Contextual Tips
// ====================================
function showContextualTip() {
    const tip = document.getElementById('contextualTip');
    tip.classList.add('show');

    setTimeout(() => {
        tip.classList.remove('show');
    }, 5000);
}

document.getElementById('contextualTipClose').addEventListener('click', () => {
    document.getElementById('contextualTip').classList.remove('show');
});

// ====================================
// Initialization
// ====================================
document.addEventListener('DOMContentLoaded', () => {
    // Extract featured works for hero carousel
    featuredWorks = portfolioData.filter(piece => piece.featured === true);

    console.log(`Total artworks: ${portfolioData.length}`);
    console.log(`Featured works (hero carousel): ${featuredWorks.length}`);

    // Set loading blur to first featured image
    if (featuredWorks.length > 0) {
        loadingBlur.style.backgroundImage = `url('${featuredWorks[0].thumbnail_url}')`;
    }

    // Build portfolio grid (paginated, shows all works)
    buildPortfolioGrid();

    // Build thumbnail grid (shows only featured works)
    buildThumbnailGrid();

    // Load first featured image in hero carousel
    if (featuredWorks.length > 0) {
        loadHeroImage(0);
    }

    // Show contextual tip after a delay
    setTimeout(() => {
        showContextualTip();
    }, 2000);

    // Show toast hint after a longer delay
    setTimeout(() => {
        if (!sessionStorage.getItem('toastShown')) {
            showToast('Pro Tip: Press G to view the full gallery.', 4000);
            sessionStorage.setItem('toastShown', 'true');
        }
    }, 5000);
});

// ====================================
// Smooth Scroll for Navigation Links
// ====================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');

        // Don't prevent default for grid items or title links
        if (href === '#home') {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return;
        }

        const target = document.querySelector(href);
        if (target && href !== '#home') {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// ====================================
// Preload Images for Better Performance
// ====================================
function preloadImages() {
    // Prioritize featured works first
    featuredWorks.forEach((piece) => {
        const img = new Image();
        img.src = piece.image_url;
    });

    // Then preload the rest
    setTimeout(() => {
        portfolioData.forEach((piece) => {
            if (!piece.featured) {
                const img = new Image();
                img.src = piece.image_url;
            }
        });
    }, 1000);
}

// Preload images after initial load
setTimeout(preloadImages, 2000);
