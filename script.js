document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;

    /* Loader -------------------------------------------------- */
    const loader = document.getElementById('loader');
    window.addEventListener('load', () => {
        setTimeout(() => loader?.classList.add('hidden'), 1200);
    });

    /* Live Time ------------------------------------------------ */
    const timeEl = document.getElementById('current-time');
    const timeMobileEl = document.getElementById('current-time-mobile');
    const updateTime = () => {
        if (!timeEl && !timeMobileEl) return;
        const now = new Date();
        const opts = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false, timeZone: 'Africa/Casablanca' };
        const formatted = now.toLocaleTimeString('en-GB', opts);
        if (timeEl) timeEl.textContent = formatted;
        if (timeMobileEl) timeMobileEl.textContent = formatted;
    };
    updateTime();
    setInterval(updateTime, 1000);

    /* Menu Overlay --------------------------------------------- */
    const menuToggle = document.getElementById('menu-toggle');
    const menuOverlay = document.getElementById('menu-overlay');

    const setMenuState = (open) => {
        menuOverlay?.classList.toggle('active', open);
        menuToggle?.classList.toggle('active', open);
        body.classList.toggle('menu-open', open);
    };

    menuToggle?.addEventListener('click', () => {
        const isOpen = menuOverlay?.classList.contains('active');
        setMenuState(!isOpen);
    });

    document.querySelectorAll('.menu-link').forEach((link) => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');
            if (targetId && targetId.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(targetId);
                target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
            setMenuState(false);
        });
    });

    /* Smooth Scroll ------------------------------------------- */
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener('click', (e) => {
            const href = anchor.getAttribute('href');
            if (!href || href === '#') return;
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    /* Custom Cursor ------------------------------------------- */
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorOutline = document.querySelector('.cursor-outline');
    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let outlineX = targetX;
    let outlineY = targetY;

    const renderCursor = () => {
        outlineX += (targetX - outlineX) * 0.15;
        outlineY += (targetY - outlineY) * 0.15;
        if (cursorOutline) {
            cursorOutline.style.left = `${outlineX}px`;
            cursorOutline.style.top = `${outlineY}px`;
        }
        if (cursorDot) {
            cursorDot.style.left = `${targetX}px`;
            cursorDot.style.top = `${targetY}px`;
        }
        requestAnimationFrame(renderCursor);
    };

    document.addEventListener('mousemove', (e) => {
        targetX = e.clientX;
        targetY = e.clientY;
    });

    renderCursor();

    /* Magnetic Hover ------------------------------------------ */
    const magnetics = document.querySelectorAll('.magnetic');
    magnetics.forEach((el) => {
        const strength = 0.25;
        el.addEventListener('mousemove', (e) => {
            const rect = el.getBoundingClientRect();
            const deltaX = e.clientX - (rect.left + rect.width / 2);
            const deltaY = e.clientY - (rect.top + rect.height / 2);
            el.style.transform = `translate(${deltaX * strength}px, ${deltaY * strength}px)`;
        });
        el.addEventListener('mouseleave', () => {
            el.style.transform = 'translate(0, 0)';
        });
    });

    /* Project Hover Images ------------------------------------- */
    const projectItems = document.querySelectorAll('.project-item');
    projectItems.forEach((item) => {
        const hoverImage = item.querySelector('.project-hover-image');
        if (!hoverImage) return;

        item.addEventListener('mouseenter', () => {
            hoverImage.style.opacity = '1';
        });

        item.addEventListener('mouseleave', () => {
            hoverImage.style.opacity = '0';
        });

        item.addEventListener('mousemove', (e) => {
            hoverImage.style.transform = `translate(${e.clientX + 20}px, ${e.clientY - 20}px)`;
        });
    });

    /* Stat Counters -------------------------------------------- */
    const counters = document.querySelectorAll('.stat-number');
    const counterObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            const el = entry.target;
            const target = Number(el.getAttribute('data-count')) || 0;
            const duration = 1200;
            const start = performance.now();

            const step = (now) => {
                const progress = Math.min((now - start) / duration, 1);
                el.textContent = Math.floor(progress * target).toString();
                if (progress < 1) requestAnimationFrame(step);
            };

            requestAnimationFrame(step);
            observer.unobserve(el);
        });
    }, { threshold: 0.5 });

    counters.forEach((c) => counterObserver.observe(c));

    /* Contact Form --------------------------------------------- */
    const contactForm = document.getElementById('contact-form');
    contactForm?.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = contactForm.querySelector('.submit-button');
        const btnText = btn?.querySelector('.btn-text');

        if (btn) {
            btn.disabled = true;
            if (btnText) btnText.textContent = 'Sending...';
        }

        setTimeout(() => {
            contactForm.reset();
            if (btn) btn.disabled = false;
            if (btnText) btnText.textContent = 'Send Message';
            alert('Message sent! I will get back to you soon.');
        }, 1200);
    });
});
// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    if (hamburger) hamburger.classList.remove('active');
    if (navMenu) navMenu.classList.remove('active');
}));

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
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

// Navbar Blur Effect on Scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(15, 23, 42, 0.95)';
        navbar.style.boxShadow = '0 10px 30px -10px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.background = 'rgba(15, 23, 42, 0.85)';
        navbar.style.boxShadow = 'none';
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');

            // Animate progress bars
            const progressBar = entry.target.querySelector('.progress-bar');
            if (progressBar) {
                const width = progressBar.getAttribute('data-width');
                requestAnimationFrame(() => {
                    progressBar.style.width = width;
                });
            }

            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

const revealTargets = document.querySelectorAll('section, .skill-card, .project-card, .about-card');
revealTargets.forEach(el => {
    el.classList.add('reveal');
    observer.observe(el);
});

// Form Handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const submitBtn = this.querySelector('.btn-primary');
        const originalText = submitBtn.textContent;
        
        submitBtn.textContent = 'Sending...';
        submitBtn.style.opacity = '0.7';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            alert('Message sent successfully!');
            this.reset();
            submitBtn.textContent = originalText;
            submitBtn.style.opacity = '1';
            submitBtn.disabled = false;
        }, 1500);
    });
}

// Typing Animation
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = ''; 
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

window.addEventListener('load', () => {
    const heroTitle = document.querySelector('.hero-title .highlight');
    if (heroTitle) {
        const text = heroTitle.textContent;
        typeWriter(heroTitle, text, 80);
    }
});

// Ripple Effect
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        let ripple = document.createElement('span');
        ripple.classList.add('ripple');
        this.appendChild(ripple);
        
        let rect = this.getBoundingClientRect();
        let x = e.clientX - rect.left;
        let y = e.clientY - rect.top;
        
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Active Link Highlighting
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 300)) {
            current = section.getAttribute('id');
        }
    });
    
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Inject Ripple Styles
const style = document.createElement('style');
style.textContent = `
    .btn { position: relative; overflow: hidden; }
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.4);
        transform: scale(0);
        animation: ripple 0.6s linear;
        pointer-events: none;
    }
    @keyframes ripple {
        to { transform: scale(4); opacity: 0; }
    }
`;
document.head.appendChild(style);
