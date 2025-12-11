// ========================================
// Mobile Navigation Toggle
// ========================================
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Close menu when clicking a link
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
}

// ========================================
// Hero Slider
// ========================================
let currentSlideIndex = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let eventPreviewIndex = 0;
const eventSlides = document.querySelectorAll('.event-slide');
const eventDots = document.querySelectorAll('.event-dot');
let eventPreviewTimer = null;
const EVENT_PREVIEW_DELAY = 7000;

function showSlide(n) {
    if (slides.length === 0) return;
    
    if (n >= slides.length) {
        currentSlideIndex = 0;
    }
    if (n < 0) {
        currentSlideIndex = slides.length - 1;
    }

    slides.forEach(slide => {
        slide.classList.remove('active');
    });

    dots.forEach(dot => {
        dot.classList.remove('active');
    });

    slides[currentSlideIndex].classList.add('active');
    if (dots[currentSlideIndex]) {
        dots[currentSlideIndex].classList.add('active');
    }
}

function changeSlide(n) {
    currentSlideIndex += n;
    showSlide(currentSlideIndex);
}

function currentSlide(n) {
    currentSlideIndex = n;
    showSlide(currentSlideIndex);
}

// Auto-advance slides every 5 seconds
if (slides.length > 0) {
    setInterval(() => {
        currentSlideIndex++;
        showSlide(currentSlideIndex);
    }, 5000);
}

function updateEventPreviewSlider() {
    if (!eventSlides.length) return;

    let slideIndex = 0;
    for (const slide of eventSlides) {
        const isActive = slideIndex === eventPreviewIndex;
        slide.classList.toggle('active', isActive);
        slide.setAttribute('aria-hidden', String(!isActive));
        slideIndex++;
    }

    if (eventDots.length) {
        let dotIndex = 0;
        for (const dot of eventDots) {
            dot.classList.toggle('active', dotIndex === eventPreviewIndex);
            dotIndex++;
        }
    }
}

function startEventPreviewAutoSlide() {
    if (!eventSlides.length) return;
    stopEventPreviewAutoSlide();
    eventPreviewTimer = setInterval(() => changeEventPreviewSlide(1, false), EVENT_PREVIEW_DELAY);
}

function stopEventPreviewAutoSlide() {
    if (eventPreviewTimer) {
        clearInterval(eventPreviewTimer);
        eventPreviewTimer = null;
    }
}

function changeEventPreviewSlide(direction, restartTimer = true) {
    if (!eventSlides.length) return;
    eventPreviewIndex = (eventPreviewIndex + direction + eventSlides.length) % eventSlides.length;
    updateEventPreviewSlider();
    if (restartTimer) {
        startEventPreviewAutoSlide();
    }
}

function goToEventPreviewSlide(index) {
    if (!eventSlides.length) return;
    if (index < 0 || index >= eventSlides.length) return;
    eventPreviewIndex = index;
    updateEventPreviewSlider();
    startEventPreviewAutoSlide();
}

document.addEventListener('DOMContentLoaded', () => {
    if (eventSlides.length) {
        updateEventPreviewSlider();
        startEventPreviewAutoSlide();

        const sliderTrack = document.querySelector('.events-slider');
        if (sliderTrack) {
            sliderTrack.addEventListener('mouseenter', stopEventPreviewAutoSlide);
            sliderTrack.addEventListener('mouseleave', startEventPreviewAutoSlide);
        }
    }
});

// ========================================
// Room Image Gallery
// ========================================
function changeImage(imgId, newSrc) {
    const mainImage = document.getElementById(imgId);
    if (mainImage) {
        mainImage.src = newSrc;
    }
}

// ========================================
// FAQ Accordion
// ========================================
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        const faqItem = question.parentElement;
        const isActive = faqItem.classList.contains('active');

        // Close all other FAQ items
        document.querySelectorAll('.faq-item').forEach(item => {
            item.classList.remove('active');
        });

        // Toggle current item
        if (!isActive) {
            faqItem.classList.add('active');
        }
    });
});

// ========================================
// Smooth Scrolling
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href.length > 1) {
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// ========================================
// Scroll to Top
// ========================================
window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Optional: Add a scroll-to-top button if needed
    // You can uncomment and customize this section
    /*
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    if (scrollTopBtn) {
        if (scrollTop > 300) {
            scrollTopBtn.style.display = 'block';
        } else {
            scrollTopBtn.style.display = 'none';
        }
    }
    */
});

// ========================================
// Form Validation Helper
// ========================================
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

function validatePhone(phone) {
    const re = /^[\d\s\-+()]+$/;
    return re.test(phone) && phone.replace(/\D/g, '').length >= 10;
}

// ========================================
// Date Validation
// ========================================
function setMinDate() {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    
    const checkInInput = document.getElementById('checkIn');
    const checkOutInput = document.getElementById('checkOut');
    
    if (checkInInput) {
        checkInInput.min = today.toISOString().split('T')[0];
        
        checkInInput.addEventListener('change', () => {
            if (checkOutInput) {
                const checkInDate = new Date(checkInInput.value);
                const nextDay = new Date(checkInDate);
                nextDay.setDate(nextDay.getDate() + 1);
                checkOutInput.min = nextDay.toISOString().split('T')[0];
                
                // Reset checkout if it's before new check-in
                if (checkOutInput.value && new Date(checkOutInput.value) <= checkInDate) {
                    checkOutInput.value = '';
                }
            }
        });
    }
    
    if (checkOutInput) {
        checkOutInput.min = tomorrow.toISOString().split('T')[0];
    }
}

// Initialize date validation on page load
document.addEventListener('DOMContentLoaded', setMinDate);

// ========================================
// Animation on Scroll (Optional)
// ========================================
function animateOnScroll() {
    const elements = document.querySelectorAll('.room-card, .mission-card, .service-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });
    
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s, transform 0.5s';
        observer.observe(element);
    });
}

// Initialize animations
document.addEventListener('DOMContentLoaded', animateOnScroll);

// ========================================
// Utility Functions
// ========================================
function formatCurrency(amount) {
    return 'Rs. ' + amount.toLocaleString();
}

function calculateNights(checkIn, checkOut) {
    const date1 = new Date(checkIn);
    const date2 = new Date(checkOut);
    const diffTime = Math.abs(date2 - date1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
}
