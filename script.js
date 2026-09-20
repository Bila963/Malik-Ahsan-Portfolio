  // Navbar scroll effect
        window.addEventListener('scroll', function() {
            const navbar = document.getElementById('navbar');
            const progressBar = document.getElementById('progressBar');
            
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }

            // Update progress bar
            const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
            progressBar.style.width = scrollPercent + '%';
        });

        // Smooth scrolling for navigation links
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

        // Typing animation for subtitle
        const typingText = document.querySelector('.typing-text');
        if (typingText) {
            const text = "Frontend Developer";
            let i = 0;
            typingText.textContent = '';
            
            function typeWriter() {
                if (i < text.length) {
                    typingText.textContent += text.charAt(i);
                    i++;
                    setTimeout(typeWriter, 100);
                }
            }
            
            setTimeout(typeWriter, 1000);
        }

        // Animate skill cards on scroll
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.slide-up').forEach(card => {
            observer.observe(card);
        });

        // Parallax effect for floating shapes
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const shapes = document.querySelectorAll('.shape');
            
            shapes.forEach((shape, index) => {
                const speed = (index + 1) * 0.5;
                shape.style.transform = `translateY(${scrolled * speed}px) rotate(${scrolled * 0.1}deg)`;
            });
        });

        // Add glitch effect to hero title
        const heroTitle = document.querySelector('.hero-title');
        if (heroTitle) {
            heroTitle.addEventListener('mouseenter', function() {
                this.style.animation = 'none';
                this.style.animation = 'glitch 0.5s ease-in-out';
            });
        }

        // CSS for glitch animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes glitch {
                0%, 100% { transform: translate(0); }
                20% { transform: translate(-2px, 2px); }
                40% { transform: translate(-2px, -2px); }
                60% { transform: translate(2px, 2px); }
                80% { transform: translate(2px, -2px); }
            }
        `;
        document.head.appendChild(style);

        // Add hover effect to project cards
        document.querySelectorAll('.project-card').forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-15px) rotateX(5deg)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) rotateX(0deg)';
            });
        });

        // Create floating particles
        function createParticle() {
            const particle = document.createElement('div');
            particle.style.cssText = `
                position: fixed;
                width: 6px;
                height: 6px;
                background: linear-gradient(135deg, #667eea, #764ba2);
                border-radius: 50%;
                pointer-events: none;
                z-index: 1;
                left: ${Math.random() * window.innerWidth}px;
                top: ${window.innerHeight + 10}px;
                opacity: ${Math.random() * 0.8 + 0.2};
            `;
            
            document.body.appendChild(particle);
            
            const animation = particle.animate([
                { transform: 'translateY(0px)', opacity: particle.style.opacity },
                { transform: `translateY(-${window.innerHeight + 100}px)`, opacity: 0 }
            ], {
                duration: Math.random() * 3000 + 2000,
                easing: 'linear'
            });
            
            animation.onfinish = () => particle.remove();
        }

        // Create particles periodically
        setInterval(createParticle, 300);

        // Add loading animation
        window.addEventListener('load', function() {
            document.body.style.opacity = '0';
            document.body.style.transition = 'opacity 0.5s ease';
            
            setTimeout(() => {
                document.body.style.opacity = '1';
            }, 100);
        });