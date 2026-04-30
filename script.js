// Lightbox functionality
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxCaption = document.getElementById('lightbox-caption');
const closeBtn = document.querySelector('.close');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentImageIndex = 0;
let images = [];

const GITHUB_REPO_OWNER = 'Sakura7274';
const GITHUB_REPO_NAME = 'Esethu-x-Ntando';
const GITHUB_PHOTOS_API = `https://api.github.com/repos/${GITHUB_REPO_OWNER}/${GITHUB_REPO_NAME}/contents/photos`;
const supportedPhotoExtensions = ['jpg', 'jpeg', 'png', 'webp', 'svg'];

function getGalleryItems() {
    return document.querySelectorAll('.gallery-item');
}

function initGallery() {
    const galleryItems = getGalleryItems();
    images = Array.from(galleryItems).map((item, index) => {
        const src = item.querySelector('img').src;
        const caption = item.querySelector('.photo-caption').textContent;

        item.onclick = function() {
            currentImageIndex = index;
            showLightbox();
        };

        return { src, caption };
    });
}

function createGalleryItem(src, captionText) {
    const item = document.createElement('div');
    item.className = 'gallery-item';
    const image = document.createElement('img');
    image.src = src;
    image.alt = captionText;

    const caption = document.createElement('div');
    caption.className = 'photo-caption';
    caption.textContent = captionText;

    item.appendChild(image);
    item.appendChild(caption);
    return item;
}

function populateGalleryFromGitHub() {
    fetch(GITHUB_PHOTOS_API)
        .then(response => {
            if (!response.ok) {
                throw new Error('Unable to fetch photos from GitHub.');
            }
            return response.json();
        })
        .then(files => {
            const photoFiles = files.filter(file => file.type === 'file' && supportedPhotoExtensions.some(ext => file.name.toLowerCase().endsWith(ext)));
            if (photoFiles.length === 0) {
                initGallery();
                populateHeroCollage();
                return;
            }

            const galleryGrid = document.querySelector('.gallery-grid');
            galleryGrid.innerHTML = '';

            photoFiles.forEach((file, index) => {
                const src = file.download_url;
                const caption = `Memory ${index + 1}`;
                galleryGrid.appendChild(createGalleryItem(src, caption));
            });

            initGallery();
            populateHeroCollage();
        })
        .catch(() => {
            initGallery();
            populateHeroCollage();
        });
}

function showLightbox() {
    lightbox.classList.add('active');
    lightboxImg.src = images[currentImageIndex].src;
    lightboxCaption.textContent = images[currentImageIndex].caption;
    document.body.style.overflow = 'hidden'; // Prevent scrolling
}

function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = 'auto'; // Allow scrolling
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    showLightbox();
}

function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    showLightbox();
}

closeBtn.addEventListener('click', closeLightbox);
nextBtn.addEventListener('click', nextImage);
prevBtn.addEventListener('click', prevImage);

lightbox.addEventListener('click', function(e) {
    if (e.target === lightbox) {
        closeLightbox();
    }
});

document.addEventListener('keydown', function(e) {
    if (!lightbox.classList.contains('active')) return;
    
    switch(e.key) {
        case 'ArrowRight':
            nextImage();
            break;
        case 'ArrowLeft':
            prevImage();
            break;
        case 'Escape':
            closeLightbox();
            break;
    }
});

function populateHeroCollage() {
    const heroCollage = document.querySelector('.hero-collage');
    if (!heroCollage) return;

    const galleryImages = Array.from(document.querySelectorAll('.gallery-item img'))
        .map(img => img.src)
        .filter(Boolean);

    heroCollage.innerHTML = '';

    const collagePositions = [
        { top: '4%', left: '5%', width: '220px', height: '220px', rotate: '-8deg' },
        { top: '10%', left: '45%', width: '200px', height: '200px', rotate: '6deg' },
        { top: '55%', left: '10%', width: '240px', height: '240px', rotate: '10deg' },
        { top: '45%', left: '55%', width: '210px', height: '210px', rotate: '-6deg' },
        { top: '15%', left: '75%', width: '180px', height: '180px', rotate: '8deg' },
        { top: '62%', left: '78%', width: '200px', height: '200px', rotate: '-10deg' }
    ];

    galleryImages.slice(0, collagePositions.length).forEach((src, index) => {
        const item = document.createElement('div');
        item.className = 'collage-item';
        const position = collagePositions[index];
        item.style.top = position.top;
        item.style.left = position.left;
        item.style.width = position.width;
        item.style.height = position.height;
        item.style.transform = `rotate(${position.rotate})`;

        const img = document.createElement('img');
        img.src = src;
        img.alt = `Collage photo ${index + 1}`;
        item.appendChild(img);
        heroCollage.appendChild(item);
    });
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    populateGalleryFromGitHub();
});

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.about, .timeline, .gallery').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});
