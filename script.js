document.addEventListener('DOMContentLoaded', () => {

    /* ========== LOADER ========== */
    const loader = document.getElementById('loader');
    const loaderBar = document.getElementById('loader-bar');
    const loaderPercent = document.getElementById('loader-percent');
    let progress = 0;

    const loaderInterval = setInterval(() => {
        progress += Math.random() * 15 + 5;
        if (progress > 100) progress = 100;
        loaderBar.style.width = progress + '%';
        loaderPercent.textContent = Math.floor(progress) + '%';
        if (progress >= 100) {
            clearInterval(loaderInterval);
            setTimeout(() => loader.classList.add('done'), 400);
        }
    }, 120);

    /* ========== CUSTOM CURSOR ========== */
    const cursor = document.getElementById('cursor');
    const cursorTrail = document.getElementById('cursor-trail');
    let mouseX = 0, mouseY = 0;
    let trailX = 0, trailY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        if (cursor) {
            cursor.style.left = mouseX + 'px';
            cursor.style.top = mouseY + 'px';
        }
    });

    function animateTrail() {
        trailX += (mouseX - trailX) * 0.12;
        trailY += (mouseY - trailY) * 0.12;
        if (cursorTrail) {
            cursorTrail.style.left = trailX + 'px';
            cursorTrail.style.top = trailY + 'px';
        }
        requestAnimationFrame(animateTrail);
    }
    animateTrail();

    const hoverTargets = document.querySelectorAll('a, button, .skill-card, .project-card, .contact-card, .stat-card');
    hoverTargets.forEach(el => {
        el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
        el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
    });

    /* ========== HEADER SCROLL ========== */
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        header.classList.toggle('scrolled', window.scrollY > 50);
    });

    /* ========== MOBILE MENU ========== */
    const navToggle = document.getElementById('nav-toggle');
    const mobileMenu = document.getElementById('mobile-menu');

    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
    });

    document.querySelectorAll('.mobile-link').forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    /* ========== SMOOTH SCROLL ========== */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
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

    /* ========== ACTIVE NAV LINK ========== */
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const top = section.offsetTop - 200;
            if (scrollY >= top) current = section.getAttribute('id');
        });
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-section') === current) {
                link.classList.add('active');
            }
        });
    });

    /* ========== INTERSECTION OBSERVER REVEAL ========== */
    const revealElements = document.querySelectorAll(
        '.section-label, .section-title, .about-desc, .about-stats, .about-image-frame, ' +
        '.skill-card, .project-card, .contact-card, .contact-form, .projects-subtitle, .contact-desc'
    );

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

    revealElements.forEach(el => {
        el.classList.add('reveal');
        revealObserver.observe(el);
    });

    /* ========== SKILL BARS ========== */
    const skillBars = document.querySelectorAll('.skill-bar-fill');
    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                const width = bar.getAttribute('data-width');
                setTimeout(() => { bar.style.width = width; }, 200);
                skillObserver.unobserve(bar);
            }
        });
    }, { threshold: 0.5 });

    skillBars.forEach(bar => skillObserver.observe(bar));

    /* ========== STAT COUNTERS ========== */
    const statNums = document.querySelectorAll('.stat-num');
    const statObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            const el = entry.target;
            const target = parseInt(el.getAttribute('data-target')) || 0;
            const duration = 1000;
            const start = performance.now();

            function step(now) {
                const progress = Math.min((now - start) / duration, 1);
                const eased = 1 - Math.pow(1 - progress, 3);
                el.textContent = Math.floor(eased * target);
                if (progress < 1) requestAnimationFrame(step);
            }

            requestAnimationFrame(step);
            statObserver.unobserve(el);
        });
    }, { threshold: 0.5 });

    statNums.forEach(el => statObserver.observe(el));

    /* ========== FETCH GITHUB PROJECTS ========== */
    const projectsGrid = document.getElementById('projects-grid');
    const GITHUB_USERNAME = 'ZLouada';

    const langColors = {
        'HTML': '#e34c26',
        'CSS': '#563d7c',
        'JavaScript': '#f1e05a',
        'TypeScript': '#3178c6',
        'Python': '#3572A5',
        'C': '#555555',
        'C++': '#f34b7d',
        'Shell': '#89e051'
    };

    const langIcons = {
        'HTML': 'fab fa-html5',
        'CSS': 'fab fa-css3-alt',
        'JavaScript': 'fab fa-js-square',
        'TypeScript': 'fas fa-code',
        'Python': 'fab fa-python',
        'C': 'fas fa-terminal',
        'C++': 'fas fa-microchip',
        'Shell': 'fas fa-terminal'
    };

    async function fetchGitHubProjects() {
        try {
            const res = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=30`);
            if (!res.ok) throw new Error('Failed to fetch');
            const repos = await res.json();

            const filtered = repos
                .filter(r => !r.fork && r.name !== GITHUB_USERNAME && r.name !== `${GITHUB_USERNAME}.github.io`)
                .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
                .slice(0, 6);

            if (filtered.length === 0) {
                projectsGrid.innerHTML = '<p style="text-align:center;color:var(--text-muted);grid-column:1/-1;">No projects found.</p>';
                return;
            }

            projectsGrid.innerHTML = filtered.map(repo => {
                const lang = repo.language || 'Code';
                const icon = langIcons[lang] || 'fas fa-code';
                const color = langColors[lang] || '#888';
                const desc = repo.description || 'No description available';
                const homepage = repo.homepage ? `<a href="${repo.homepage}" target="_blank" title="Live Demo"><i class="fas fa-external-link-alt"></i></a>` : '';

                return `
                    <div class="project-card reveal">
                        <div class="project-card-header">
                            <div class="project-card-icon">
                                <i class="${icon}"></i>
                            </div>
                            <div class="project-card-links">
                                <a href="${repo.html_url}" target="_blank" title="Source Code"><i class="fab fa-github"></i></a>
                                ${homepage}
                            </div>
                        </div>
                        <div class="project-card-body">
                            <h3><a href="${repo.html_url}" target="_blank">${repo.name.replace(/[-_]/g, ' ')}</a></h3>
                            <p>${desc}</p>
                        </div>
                        <div class="project-card-footer">
                            <div class="project-tags">
                                <span class="project-tag" style="border-color: ${color}30; background: ${color}10; color: ${color}">${lang}</span>
                            </div>
                            ${repo.stargazers_count > 0 ? `<div class="project-stars"><i class="fas fa-star"></i> ${repo.stargazers_count}</div>` : ''}
                        </div>
                    </div>
                `;
            }).join('');

            // Re-observe newly added project cards
            document.querySelectorAll('.project-card.reveal').forEach(card => {
                revealObserver.observe(card);
            });

            // Re-add cursor hover for new cards
            document.querySelectorAll('.project-card').forEach(el => {
                el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
                el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
            });

        } catch (err) {
            projectsGrid.innerHTML = `
                <div style="grid-column:1/-1;text-align:center;padding:3rem 0;">
                    <p style="color:var(--text-muted);margin-bottom:1rem;">Could not load projects from GitHub.</p>
                    <a href="https://github.com/${GITHUB_USERNAME}" target="_blank" class="btn btn-outline" style="display:inline-flex;">
                        <i class="fab fa-github"></i>
                        <span>Visit GitHub Profile</span>
                    </a>
                </div>
            `;
        }
    }

    fetchGitHubProjects();

    /* ========== CONTACT FORM ========== */
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = contactForm.querySelector('button[type="submit"]');
        const btnSpan = btn.querySelector('span');
        const originalText = btnSpan.textContent;

        btn.disabled = true;
        btnSpan.textContent = 'Sending...';

        setTimeout(() => {
            contactForm.reset();
            btn.disabled = false;
            btnSpan.textContent = 'Sent!';
            btn.style.background = 'linear-gradient(135deg, #22c55e, #16a34a)';

            setTimeout(() => {
                btnSpan.textContent = originalText;
                btn.style.background = '';
            }, 2500);
        }, 1200);
    });

});
