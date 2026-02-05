/**
 * Carros & Cia - Advanced Animations
 * Autor: Rodrigo Abreu
 */

// ============= ADD ANIMATION STYLES DYNAMICALLY =============
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }

    @keyframes fadeInScale {
        from {
            opacity: 0;
            transform: scale(0.95);
        }
        to {
            opacity: 1;
            transform: scale(1);
        }
    }

    @keyframes bounceIn {
        0% {
            opacity: 0;
            transform: translateY(30px);
        }
        50% {
            opacity: 1;
        }
        100% {
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// ============= MOUSE MOVE PARALLAX EFFECT =============
document.addEventListener('mousemove', (e) => {
    const carContainer = document.querySelector('.car-3d-container');
    
    if (carContainer && window.innerWidth > 768) {
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;
        
        const rotateX = (mouseY - 0.5) * 10;
        const rotateY = (mouseX - 0.5) * 10;
        
        carContainer.style.perspective = '1000px';
        carContainer.querySelector('.car-3d').style.transform = 
            `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    }
});

// ============= SERVICE CARD 3D EFFECT =============
const serviceCards = document.querySelectorAll('.service-card');

serviceCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
    });
});

// ============= TEXT ANIMATION STAGGER =============
const titleWords = document.querySelectorAll('.title-word');

titleWords.forEach((word, index) => {
    word.style.opacity = '0';
    word.style.animation = `fadeInUp 0.6s ease-out ${index * 0.2}s forwards`;
});

// ============= GLOW CURSOR EFFECT =============
const createGlowCursor = () => {
    const cursor = document.createElement('div');
    cursor.style.cssText = `
        position: fixed;
        width: 20px;
        height: 20px;
        border: 2px solid #00ff88;
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        box-shadow: 0 0 20px rgba(0, 255, 136, 0.5);
        display: none;
    `;
    document.body.appendChild(cursor);

    document.addEventListener('mousemove', (e) => {
        cursor.style.display = 'block';
        cursor.style.left = (e.clientX - 10) + 'px';
        cursor.style.top = (e.clientY - 10) + 'px';
    });

    document.addEventListener('mouseleave', () => {
        cursor.style.display = 'none';
    });
};

// Uncomment to enable glow cursor (disable on touch devices)
// if (!('ontouchstart' in window)) {
//     createGlowCursor();
// }

// ============= MATRIX RAIN BACKGROUND (OPTIONAL) =============
// Descomente para ativar efeito Matrix no fundo
/*
const createMatrixRain = () => {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    const hero = document.querySelector('.hero');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0.05;
        pointer-events: none;
    `;
    
    hero.style.position = 'relative';
    hero.appendChild(canvas);

    const chars = '01アイウエオカキクケコサシスセソタチツテト';
    const columns = canvas.width / 20;
    const drops = Array(Math.floor(columns)).fill(0);

    const draw = () => {
        context.fillStyle = 'rgba(10, 14, 39, 0.1)';
        context.fillRect(0, 0, canvas.width, canvas.height);
        context.fillStyle = '#00ff88';
        context.font = '15px Courier';

        drops.forEach((y, i) => {
            const text = chars[Math.floor(Math.random() * chars.length)];
            context.fillText(text, i * 20, y * 20);
            
            if (y * 20 > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            } else {
                drops[i]++;
            }
        });
    };

    setInterval(draw, 30);
};

createMatrixRain();
*/

// ============= PAGE PERFORMANCE OPTIMIZATION =============
// Lazy load images
const images = document.querySelectorAll('img[src]');
images.forEach(img => {
    img.loading = 'lazy';
    img.decoding = 'async';
});

// ============= CUSTOM SCROLL BEHAVIOR =============
let ticking = false;
window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            // Add any continuous scroll animations here
            ticking = false;
        });
        ticking = true;
    }
});
