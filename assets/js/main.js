/**
 * Carros & Cia - Main JavaScript
 * Autor: Rodrigo Abreu
 */

// ============= MENU TOGGLE =============
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Fechar menu ao clicar em um link
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
}

// ============= SMOOTH SCROLL COM OFFSET =============
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;

        const target = document.querySelector(href);
        if (!target) return;

        e.preventDefault();

        const offsetTop = target.offsetTop - 60;
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    });
});

// ============= BUTTON SCROLL ACTIONS =============
document.querySelectorAll('[data-scroll]').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const target = btn.dataset.scroll;
        const element = document.querySelector(target);
        
        if (element) {
            const offsetTop = element.offsetTop - 60;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ============= NAVBAR ACTIVE LINK =============
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionBottom = sectionTop + section.offsetHeight;
        const scrollPosition = window.scrollY;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            navLinks.forEach(link => {
                const href = link.getAttribute('href');
                const section = document.querySelector(href);
                
                if (section && section.offsetTop - 100 <= scrollPosition) {
                    navLinks.forEach(l => l.removeAttribute('data-active'));
                    link.setAttribute('data-active', 'true');
                }
            });
        }
    });
});

// ============= SCROLL REVEAL ANIMATION =============
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.section-header, .service-card, .stat-box').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'all 0.6s ease-out';
    observer.observe(element);
});

// ============= PREVENT LAYOUT SHIFT =============
document.addEventListener('DOMContentLoaded', () => {
    // Preload images for smooth rendering
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.loading = 'lazy';
    });
});

// ============= ACTIVE NAV LINK ON PAGE LOAD =============
window.addEventListener('load', () => {
    const hash = window.location.hash;
    if (hash) {
        const link = document.querySelector(`.nav-link[href="${hash}"]`);
        if (link) {
            document.querySelectorAll('.nav-link').forEach(l => l.removeAttribute('data-active'));
            link.setAttribute('data-active', 'true');
        }
    }
});
