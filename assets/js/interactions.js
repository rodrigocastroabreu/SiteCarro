/**
 * Carros & Cia - Interactions
 * Autor: Rodrigo Abreu
 */

// ============= FORM VALIDATION =============
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const message = document.getElementById('message');

        // Reset errors
        document.querySelectorAll('.form-error').forEach(error => {
            error.textContent = '';
        });

        let isValid = true;

        // Validate name
        if (!name.value.trim()) {
            document.getElementById('nameError').textContent = 'Nome é obrigatório';
            isValid = false;
        }

        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email.value.trim() || !emailRegex.test(email.value)) {
            document.getElementById('emailError').textContent = 'Email inválido';
            isValid = false;
        }

        // Validate message
        if (!message.value.trim() || message.value.trim().length < 10) {
            document.getElementById('messageError').textContent = 'Mensagem deve ter pelo menos 10 caracteres';
            isValid = false;
        }

        if (isValid) {
            // Simulate form submission
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            submitBtn.textContent = 'Enviando...';
            submitBtn.disabled = true;

            // Simulate API call
            setTimeout(() => {
                showSuccessMessage();
                contactForm.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 1500);
        }
    });
}

// ============= SUCCESS MESSAGE =============
function showSuccessMessage() {
    const message = document.createElement('div');
    message.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #00ff88 0%, #00d4ff 100%);
        color: #000;
        padding: 20px 30px;
        border-radius: 8px;
        font-weight: 700;
        z-index: 10000;
        box-shadow: 0 0 30px rgba(0, 255, 136, 0.5);
        animation: slideInRight 0.3s ease-out;
    `;
    message.textContent = '✓ Mensagem enviada com sucesso!';
    document.body.appendChild(message);

    setTimeout(() => {
        message.style.animation = 'slideOutRight 0.3s ease-out';
        setTimeout(() => message.remove(), 300);
    }, 3000);
}

// ============= SERVICE CARD HOVER EFFECT =============
const serviceCards = document.querySelectorAll('.service-card');

serviceCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.zIndex = '10';
    });

    card.addEventListener('mouseleave', function() {
        this.style.zIndex = '1';
    });
});

// ============= STAT BOX COUNTER =============
const statBoxes = document.querySelectorAll('.stat-number');

const countUp = (element, target, duration = 2000) => {
    let current = 0;
    const increment = target / (duration / 16);
    const originalText = element.textContent;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = originalText;
            clearInterval(timer);
        } else {
            const value = Math.floor(current);
            element.textContent = value + '+';
        }
    }, 16);
};

// Observe stat boxes for animation
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.dataset.animated) {
            entry.target.dataset.animated = 'true';
            const text = entry.target.textContent.replace(/[^\d]/g, '');
            const target = parseInt(text);
            countUp(entry.target, target);
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

statBoxes.forEach(box => statsObserver.observe(box));

// ============= PARALLAX SCROLL EFFECT =============
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    const heroVisual = document.querySelector('.hero-visual');

    if (hero && window.innerWidth > 768) {
        const scrollPosition = window.scrollY;
        const heroHeight = hero.offsetHeight;

        if (scrollPosition < heroHeight) {
            heroVisual.style.transform = `translateY(${scrollPosition * 0.5}px)`;
        }
    }
});

// ============= INPUT FOCUS ANIMATION =============
const inputs = document.querySelectorAll('.form-group input, .form-group textarea');

inputs.forEach(input => {
    input.addEventListener('focus', function() {
        this.style.background = 'rgba(10, 14, 39, 0.95)';
    });

    input.addEventListener('blur', function() {
        if (!this.value) {
            this.style.background = 'rgba(10, 14, 39, 0.8)';
        }
    });
});

// ============= MOBILE VIEWPORT HEIGHT FIX =============
const setVH = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
};

window.addEventListener('resize', setVH);
setVH();
