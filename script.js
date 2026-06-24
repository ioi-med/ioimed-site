/* ============================================
   MehdiLabs — JavaScript
   Canvas Icons, Particles, Animations
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

    // ========================================
    // CANVAS ICON GENERATOR
    // ========================================
    function drawLogoIcon(canvas, size) {
        const ctx = canvas.getContext('2d');
        const s = size || canvas.width;
        const dpr = window.devicePixelRatio || 1;
        canvas.width = s * dpr;
        canvas.height = s * dpr;
        canvas.style.width = s + 'px';
        canvas.style.height = s + 'px';
        ctx.scale(dpr, dpr);

        // Background
        const bgGrad = ctx.createLinearGradient(0, 0, s, s);
        bgGrad.addColorStop(0, '#7c3aed');
        bgGrad.addColorStop(0.5, '#06b6d4');
        bgGrad.addColorStop(1, '#10b981');
        ctx.beginPath();
        const r = s * 0.2;
        ctx.moveTo(r, 0);
        ctx.lineTo(s - r, 0);
        ctx.quadraticCurveTo(s, 0, s, r);
        ctx.lineTo(s, s - r);
        ctx.quadraticCurveTo(s, s, s - r, s);
        ctx.lineTo(r, s);
        ctx.quadraticCurveTo(0, s, 0, s - r);
        ctx.lineTo(0, r);
        ctx.quadraticCurveTo(0, 0, r, 0);
        ctx.closePath();
        ctx.fillStyle = bgGrad;
        ctx.fill();

        // "ML" text
        ctx.fillStyle = 'rgba(255, 255, 255, 0.95)';
        ctx.font = `bold ${s * 0.36}px 'Inter', sans-serif`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('ML', s / 2, s / 2 - s * 0.06);

        // Underline
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.6)';
        ctx.lineWidth = s * 0.04;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(s * 0.25, s * 0.7);
        ctx.lineTo(s * 0.75, s * 0.7);
        ctx.stroke();
    }

    // Draw all logos
    const logoCanvas = document.getElementById('logo-canvas');
    if (logoCanvas) drawLogoIcon(logoCanvas, 40);

    const footerLogoCanvas = document.getElementById('footer-logo-canvas');
    if (footerLogoCanvas) drawLogoIcon(footerLogoCanvas, 32);

    // Favicon
    const faviconCanvas = document.getElementById('favicon-canvas');
    if (faviconCanvas) {
        drawLogoIcon(faviconCanvas, 64);
        try {
            const faviconUrl = faviconCanvas.toDataURL('image/png');
            let link = document.querySelector("link[rel*='icon']") || document.createElement('link');
            link.type = 'image/png';
            link.rel = 'icon';
            link.href = faviconUrl;
            document.head.appendChild(link);
        } catch (e) { /* canvas tainted, ignore */ }
    }

    // ========================================
    // PROJECT ICONS (Canvas)
    // ========================================
    function drawNexuxIcon(canvas) {
        const ctx = canvas.getContext('2d');
        const s = 48;
        const dpr = window.devicePixelRatio || 1;
        canvas.width = s * dpr;
        canvas.height = s * dpr;
        canvas.style.width = s + 'px';
        canvas.style.height = s + 'px';
        ctx.scale(dpr, dpr);

        // Brain/AI icon
        ctx.strokeStyle = '#a855f7';
        ctx.lineWidth = 2;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';

        // Central circle
        ctx.beginPath();
        ctx.arc(24, 22, 12, 0, Math.PI * 2);
        ctx.stroke();

        // Neural connections
        const nodes = [
            [24, 10], [14, 18], [34, 18],
            [14, 28], [34, 28], [24, 34]
        ];
        ctx.fillStyle = '#a855f7';
        nodes.forEach(([x, y]) => {
            ctx.beginPath();
            ctx.arc(x, y, 2.5, 0, Math.PI * 2);
            ctx.fill();
        });

        // Lines between nodes
        ctx.strokeStyle = 'rgba(168, 85, 247, 0.4)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(24, 10); ctx.lineTo(14, 18);
        ctx.moveTo(24, 10); ctx.lineTo(34, 18);
        ctx.moveTo(14, 18); ctx.lineTo(14, 28);
        ctx.moveTo(34, 18); ctx.lineTo(34, 28);
        ctx.moveTo(14, 28); ctx.lineTo(24, 34);
        ctx.moveTo(34, 28); ctx.lineTo(24, 34);
        ctx.moveTo(14, 18); ctx.lineTo(34, 28);
        ctx.moveTo(34, 18); ctx.lineTo(14, 28);
        ctx.stroke();

        // "AI" label
        ctx.fillStyle = '#a855f7';
        ctx.font = 'bold 10px Inter, sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('AI', 24, 44);
    }

    function drawPyLingoIcon(canvas) {
        const ctx = canvas.getContext('2d');
        const s = 48;
        const dpr = window.devicePixelRatio || 1;
        canvas.width = s * dpr;
        canvas.height = s * dpr;
        canvas.style.width = s + 'px';
        canvas.style.height = s + 'px';
        ctx.scale(dpr, dpr);

        // Code brackets
        ctx.strokeStyle = '#06b6d4';
        ctx.lineWidth = 2.5;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';

        // Left bracket <
        ctx.beginPath();
        ctx.moveTo(16, 12);
        ctx.lineTo(8, 24);
        ctx.lineTo(16, 36);
        ctx.stroke();

        // Right bracket >
        ctx.beginPath();
        ctx.moveTo(32, 12);
        ctx.lineTo(40, 24);
        ctx.lineTo(32, 36);
        ctx.stroke();

        // Slash /
        ctx.strokeStyle = 'rgba(6, 182, 212, 0.5)';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(28, 10);
        ctx.lineTo(20, 38);
        ctx.stroke();

        // Py text
        ctx.fillStyle = '#06b6d4';
        ctx.font = 'bold 8px Inter, sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('Py', 24, 24);
    }

    function drawTerminusIcon(canvas) {
        const ctx = canvas.getContext('2d');
        const s = 48;
        const dpr = window.devicePixelRatio || 1;
        canvas.width = s * dpr;
        canvas.height = s * dpr;
        canvas.style.width = s + 'px';
        canvas.style.height = s + 'px';
        ctx.scale(dpr, dpr);

        // Terminal window
        ctx.strokeStyle = '#10b981';
        ctx.lineWidth = 2;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';

        // Terminal body
        const rx = 4;
        ctx.beginPath();
        ctx.moveTo(6 + rx, 8);
        ctx.lineTo(42 - rx, 8);
        ctx.quadraticCurveTo(42, 8, 42, 8 + rx);
        ctx.lineTo(42, 40 - rx);
        ctx.quadraticCurveTo(42, 40, 42 - rx, 40);
        ctx.lineTo(6 + rx, 40);
        ctx.quadraticCurveTo(6, 40, 6, 40 - rx);
        ctx.lineTo(6, 8 + rx);
        ctx.quadraticCurveTo(6, 8, 6 + rx, 8);
        ctx.closePath();
        ctx.stroke();

        // Title bar
        ctx.strokeStyle = 'rgba(16, 185, 129, 0.3)';
        ctx.beginPath();
        ctx.moveTo(6, 16);
        ctx.lineTo(42, 16);
        ctx.stroke();

        // Dots
        ctx.fillStyle = '#ef4444';
        ctx.beginPath(); ctx.arc(12, 12, 1.5, 0, Math.PI * 2); ctx.fill();
        ctx.fillStyle = '#f59e0b';
        ctx.beginPath(); ctx.arc(17, 12, 1.5, 0, Math.PI * 2); ctx.fill();
        ctx.fillStyle = '#10b981';
        ctx.beginPath(); ctx.arc(22, 12, 1.5, 0, Math.PI * 2); ctx.fill();

        // Prompt
        ctx.strokeStyle = '#10b981';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(12, 24);
        ctx.lineTo(18, 28);
        ctx.lineTo(12, 32);
        ctx.stroke();

        // Cursor line
        ctx.strokeStyle = 'rgba(16, 185, 129, 0.5)';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(22, 28);
        ctx.lineTo(36, 28);
        ctx.stroke();
    }

    const iconNexux = document.getElementById('icon-nexux');
    if (iconNexux) drawNexuxIcon(iconNexux);

    const iconPylingo = document.getElementById('icon-pylingo');
    if (iconPylingo) drawPyLingoIcon(iconPylingo);

    const iconTerminus = document.getElementById('icon-terminus');
    if (iconTerminus) drawTerminusIcon(iconTerminus);

    function drawMasterBrevetIcon(canvas) {
        const ctx = canvas.getContext('2d');
        const s = 48;
        const dpr = window.devicePixelRatio || 1;
        canvas.width = s * dpr;
        canvas.height = s * dpr;
        canvas.style.width = s + 'px';
        canvas.style.height = s + 'px';
        ctx.scale(dpr, dpr);

        ctx.strokeStyle = '#f59e0b';
        ctx.lineWidth = 2;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';

        // Book shape
        ctx.beginPath();
        ctx.moveTo(10, 32);
        ctx.lineTo(24, 36);
        ctx.lineTo(38, 32);
        ctx.lineTo(38, 14);
        ctx.lineTo(24, 18);
        ctx.lineTo(10, 14);
        ctx.closePath();
        ctx.stroke();

        // Center fold
        ctx.beginPath();
        ctx.moveTo(24, 18);
        ctx.lineTo(24, 36);
        ctx.stroke();

        // Pages
        ctx.strokeStyle = 'rgba(245, 158, 11, 0.5)';
        ctx.beginPath();
        ctx.moveTo(14, 18); ctx.lineTo(20, 20);
        ctx.moveTo(14, 22); ctx.lineTo(20, 24);
        ctx.moveTo(14, 26); ctx.lineTo(20, 28);
        ctx.moveTo(34, 18); ctx.lineTo(28, 20);
        ctx.moveTo(34, 22); ctx.lineTo(28, 24);
        ctx.moveTo(34, 26); ctx.lineTo(28, 28);
        ctx.stroke();
    }

    const iconMasterBrevet = document.getElementById('icon-masterbrevet');
    if (iconMasterBrevet) drawMasterBrevetIcon(iconMasterBrevet);

    // ========================================
    // HERO CANVAS ANIMATION (3D Rotating Mesh)
    // ========================================
    const heroCanvas = document.getElementById('hero-canvas');
    if (heroCanvas) {
        const ctx = heroCanvas.getContext('2d');
        let width, height;
        const dpr = window.devicePixelRatio || 1;

        function resizeHeroCanvas() {
            const rect = heroCanvas.parentElement.getBoundingClientRect();
            width = Math.min(rect.width, 500);
            height = width;
            heroCanvas.width = width * dpr;
            heroCanvas.height = height * dpr;
            heroCanvas.style.width = width + 'px';
            heroCanvas.style.height = height + 'px';
            ctx.scale(dpr, dpr);
        }
        resizeHeroCanvas();

        // Generate sphere points
        const points = [];
        const numPoints = 80;
        for (let i = 0; i < numPoints; i++) {
            const phi = Math.acos(1 - 2 * (i + 0.5) / numPoints);
            const theta = Math.PI * (1 + Math.sqrt(5)) * i;
            points.push({
                x: Math.sin(phi) * Math.cos(theta),
                y: Math.sin(phi) * Math.sin(theta),
                z: Math.cos(phi)
            });
        }

        let time = 0;
        function drawHero() {
            ctx.clearRect(0, 0, width, height);
            time += 0.005;

            const cx = width / 2;
            const cy = height / 2;
            const radius = width * 0.32;

            // Project and sort by z
            const projected = points.map((p, i) => {
                const cosA = Math.cos(time);
                const sinA = Math.sin(time);
                const cosB = Math.cos(time * 0.7);
                const sinB = Math.sin(time * 0.7);

                // Rotate Y
                let x1 = p.x * cosA + p.z * sinA;
                let z1 = -p.x * sinA + p.z * cosA;
                // Rotate X
                let y1 = p.y * cosB - z1 * sinB;
                let z2 = p.y * sinB + z1 * cosB;

                return {
                    x: cx + x1 * radius,
                    y: cy + y1 * radius,
                    z: z2,
                    index: i
                };
            });

            projected.sort((a, b) => a.z - b.z);

            // Draw connections
            for (let i = 0; i < projected.length; i++) {
                for (let j = i + 1; j < projected.length; j++) {
                    const dx = projected[i].x - projected[j].x;
                    const dy = projected[i].y - projected[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < radius * 0.7) {
                        const alpha = (1 - dist / (radius * 0.7)) * 0.15 * ((projected[i].z + 1) / 2);
                        ctx.beginPath();
                        ctx.moveTo(projected[i].x, projected[i].y);
                        ctx.lineTo(projected[j].x, projected[j].y);
                        ctx.strokeStyle = `rgba(168, 85, 247, ${alpha})`;
                        ctx.lineWidth = 0.5;
                        ctx.stroke();
                    }
                }
            }

            // Draw points
            projected.forEach(p => {
                const alpha = (p.z + 1) / 2 * 0.8 + 0.2;
                const size = (p.z + 1) / 2 * 2 + 1;

                // Color gradient based on position
                const hue = (p.index / numPoints) * 120 + 260; // purple to cyan
                ctx.beginPath();
                ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
                ctx.fillStyle = `hsla(${hue}, 70%, 65%, ${alpha})`;
                ctx.fill();

                // Glow
                ctx.beginPath();
                ctx.arc(p.x, p.y, size + 2, 0, Math.PI * 2);
                ctx.fillStyle = `hsla(${hue}, 70%, 65%, ${alpha * 0.2})`;
                ctx.fill();
            });

            requestAnimationFrame(drawHero);
        }
        drawHero();
    }

    // ========================================
    // ABOUT CANVAS — Code Rain / Matrix
    // ========================================
    const aboutCanvas = document.getElementById('about-canvas');
    if (aboutCanvas) {
        const ctx = aboutCanvas.getContext('2d');
        const s = 400;
        const dpr = window.devicePixelRatio || 1;
        aboutCanvas.width = s * dpr;
        aboutCanvas.height = s * dpr;
        aboutCanvas.style.width = s + 'px';
        aboutCanvas.style.height = s + 'px';
        ctx.scale(dpr, dpr);

        const chars = 'MehdiLabs NEXUX PyLingo Terminus AI def class import 01'.split('');
        const columns = Math.floor(s / 14);
        const drops = Array(columns).fill(0);

        function drawAbout() {
            ctx.fillStyle = 'rgba(10, 10, 15, 0.08)';
            ctx.fillRect(0, 0, s, s);

            ctx.font = '12px JetBrains Mono, monospace';
            for (let i = 0; i < drops.length; i++) {
                const char = chars[Math.floor(Math.random() * chars.length)];
                const x = i * 14;
                const y = drops[i] * 14;

                // Gradient color
                const hue = (i / columns) * 120 + 260;
                const alpha = Math.random() * 0.5 + 0.3;
                ctx.fillStyle = `hsla(${hue}, 70%, 60%, ${alpha})`;
                ctx.fillText(char, x, y);

                if (y > s && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
            requestAnimationFrame(drawAbout);
        }
        // Initial dark fill
        ctx.fillStyle = 'rgba(10, 10, 15, 1)';
        ctx.fillRect(0, 0, s, s);
        drawAbout();
    }

    // ========================================
    // PARTICLES BACKGROUND
    // ========================================
    const particlesCanvas = document.getElementById('particles-canvas');
    if (particlesCanvas) {
        const ctx = particlesCanvas.getContext('2d');
        let pWidth, pHeight;
        const dpr = window.devicePixelRatio || 1;

        function resizeParticles() {
            pWidth = window.innerWidth;
            pHeight = window.innerHeight;
            particlesCanvas.width = pWidth * dpr;
            particlesCanvas.height = pHeight * dpr;
            particlesCanvas.style.width = pWidth + 'px';
            particlesCanvas.style.height = pHeight + 'px';
            ctx.setTransform(1, 0, 0, 1, 0, 0);
            ctx.scale(dpr, dpr);
        }
        resizeParticles();
        window.addEventListener('resize', resizeParticles);

        const particles = [];
        const numParticles = Math.min(60, Math.floor(pWidth / 20));

        for (let i = 0; i < numParticles; i++) {
            particles.push({
                x: Math.random() * pWidth,
                y: Math.random() * pHeight,
                vx: (Math.random() - 0.5) * 0.3,
                vy: (Math.random() - 0.5) * 0.3,
                size: Math.random() * 1.5 + 0.5,
                hue: Math.random() * 120 + 260
            });
        }

        function drawParticles() {
            ctx.clearRect(0, 0, pWidth, pHeight);

            // Update and draw particles
            particles.forEach(p => {
                p.x += p.vx;
                p.y += p.vy;

                if (p.x < 0) p.x = pWidth;
                if (p.x > pWidth) p.x = 0;
                if (p.y < 0) p.y = pHeight;
                if (p.y > pHeight) p.y = 0;

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fillStyle = `hsla(${p.hue}, 60%, 60%, 0.3)`;
                ctx.fill();
            });

            // Connect nearby particles
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < 150) {
                        const alpha = (1 - dist / 150) * 0.08;
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.strokeStyle = `rgba(168, 85, 247, ${alpha})`;
                        ctx.lineWidth = 0.5;
                        ctx.stroke();
                    }
                }
            }

            requestAnimationFrame(drawParticles);
        }
        drawParticles();
    }

    // ========================================
    // NAVBAR
    // ========================================
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('nav-toggle');
    const navLinks = document.getElementById('nav-links');

    // Scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Active link update
        const sections = ['hero', 'projects', 'about', 'contact'];
        let current = '';
        sections.forEach(id => {
            const el = document.getElementById(id);
            if (el) {
                const rect = el.getBoundingClientRect();
                if (rect.top <= 200) current = id;
            }
        });

        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });

    // Mobile toggle
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Close on link click
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navToggle.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }

    // ========================================
    // SCROLL REVEAL
    // ========================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.project-card, .about-grid, .contact-card').forEach(el => {
        observer.observe(el);
    });

    // ========================================
    // COUNTER ANIMATION
    // ========================================
    const counters = document.querySelectorAll('.stat-number');
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.dataset.count);
                let current = 0;
                const increment = target / 40;
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        current = target;
                        clearInterval(timer);
                    }
                    entry.target.textContent = Math.floor(current);
                }, 30);
                counterObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(c => counterObserver.observe(c));

    // ========================================
    // SMOOTH SCROLL
    // ========================================
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

    // ========================================
    // CARD TILT EFFECT
    // ========================================
    document.querySelectorAll('[data-tilt]').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = (y - centerY) / centerY * -3;
            const rotateY = (x - centerX) / centerX * 3;
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
        });
    });

    // ========================================
    // TERMS MODAL FOR ALL PROJECTS
    // ========================================
    const visitButtons = document.querySelectorAll('.visit-site-btn');
    const termsModal = document.getElementById('terms-modal');
    const declineTerms = document.getElementById('decline-terms');
    const acceptTerms = document.getElementById('accept-terms');

    if (termsModal) {
        const modalTextContainer = document.getElementById('modal-text-container');
        
        visitButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                
                const projectName = btn.getAttribute('data-project-name') || 'ce projet';
                const hasAI = btn.getAttribute('data-has-ai') === 'true';
                
                let textHTML = `<p>Bienvenue sur <strong>${projectName}</strong> ! Avant d'y accéder, sachez que toutes mes créations sont le fruit de mon travail personnel.</p>`;
                
                if (hasAI) {
                    textHTML += `<p>Veuillez noter que ce projet spécifique a été développé avec l'assistance de l'Intelligence Artificielle à hauteur de 10% pour repousser les limites de mes idées.</p>`;
                }
                
                textHTML += `<p>En continuant, vous acceptez de respecter le travail fourni et ces conditions d'utilisation.</p>`;
                
                if (modalTextContainer) {
                    modalTextContainer.innerHTML = textHTML;
                }
                
                // Set the link of the "Accepter" button to the project's url
                if (acceptTerms) {
                    acceptTerms.href = btn.href;
                }
                termsModal.classList.add('active');
            });
        });

        if (declineTerms) {
            declineTerms.addEventListener('click', () => {
                termsModal.classList.remove('active');
            });
        }

        if (acceptTerms) {
            acceptTerms.addEventListener('click', () => {
                termsModal.classList.remove('active');
            });
        }

        // Close on outside click
        termsModal.addEventListener('click', (e) => {
            if (e.target === termsModal) {
                termsModal.classList.remove('active');
            }
        });
    }

});
