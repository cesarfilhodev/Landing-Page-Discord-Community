// Main JavaScript for Metroidvania Guild Landing Page

document.addEventListener('DOMContentLoaded', function() {
    // Initialize variables
    const header = document.getElementById('header');
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const themeToggle = document.getElementById('theme-toggle');
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    // Check for saved theme preference or use preferred color scheme
    const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'dark' || (!savedTheme && userPrefersDark)) {
        document.documentElement.classList.add('dark');
    }
    
    // Header scroll effect with glitch animation
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.classList.add('shadow-lg', 'py-2');
            header.classList.remove('py-3');
            
            // Add random glitch effect on scroll
            if (Math.random() < 0.1) {
                header.classList.add('glitch-header');
                setTimeout(() => {
                    header.classList.remove('glitch-header');
                }, 500);
            }
        } else {
            header.classList.remove('shadow-lg', 'py-2');
            header.classList.add('py-3');
        }
    });
    
    // Mobile menu toggle with energy effect
    mobileMenuButton.addEventListener('click', function() {
        mobileMenu.classList.toggle('hidden');
        
        // Add energy pulse effect
        mobileMenuButton.classList.add('energy-pulse');
        setTimeout(() => {
            mobileMenuButton.classList.remove('energy-pulse'); 
        }, 500);
        
        // Change icon based on state
        const icon = mobileMenuButton.querySelector('i');
        if (mobileMenu.classList.contains('hidden')) {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        } else {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        }
    });
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll('#mobile-menu a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            
            const icon = mobileMenuButton.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });
    
    // Dark/Light theme toggle
    themeToggle.addEventListener('click', function() {
        // Add teleport effect
        document.body.classList.add('teleport-effect');
        setTimeout(() => {
            document.body.classList.remove('teleport-effect');
        }, 500);
        
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        }
    });
    
    // FAQ Accordion
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            const icon = this.querySelector('i');
            
            // Toggle active class
            this.classList.toggle('active');
            
            // Add energy effect on click
            const energyEffect = document.createElement('div');
            energyEffect.classList.add('energy-click-effect');
            this.appendChild(energyEffect);
            setTimeout(() => {
                this.removeChild(energyEffect);
            }, 500);
            
            // Toggle answer visibility
            if (answer.style.maxHeight) {
                answer.style.maxHeight = null;
                answer.classList.add('hidden');
                icon.classList.remove('transform', 'rotate-180');
            } else {
                answer.classList.remove('hidden');
                answer.style.maxHeight = answer.scrollHeight + 'px';
                icon.classList.add('transform', 'rotate-180');
            }
        });
    });
    
    // Initialize ScrollReveal with metroidvania-style effects
    const sr = ScrollReveal({
        origin: 'bottom',
        distance: '60px',
        duration: 1000,
        delay: 200,
        easing: 'cubic-bezier(0.2, 0.8, 0.2, 1)',
        reset: false,
        beforeReveal: function(el) {
            el.classList.add('reveal-animation');
        }
    });
    
    // Apply reveal animations
    sr.reveal('.reveal-top', {
        origin: 'top'
    });
    
    sr.reveal('.reveal-left', {
        origin: 'left'
    });
    
    sr.reveal('.reveal-right', {
        origin: 'right'
    });
    
    sr.reveal('.reveal-item', {
        interval: 100
    });
    
    sr.reveal('.benefit-card', {
        interval: 200,
        distance: '20px'
    });
    
    sr.reveal('.metroidvania-panel', {
        interval: 150,
        distance: '30px'
    });
    
    // Energy bar animations
    const energyBars = document.querySelectorAll('.energy-bar');
    
    function animateEnergyBars() {
        energyBars.forEach(bar => {
            const randomDelay = Math.random() * 1000;
            setTimeout(() => {
                bar.classList.add('energy-pulse');
                setTimeout(() => {
                    bar.classList.remove('energy-pulse');
                }, 1000);
            }, randomDelay);
        });
    }
    
    // Start energy bar animation loop
    setInterval(animateEnergyBars, 4000);
    
    // Add glitch effect to headings on hover
    document.querySelectorAll('.metroidvania-heading').forEach(heading => {
        heading.addEventListener('mouseenter', function() {
            this.classList.add('glitch');
            this.setAttribute('data-text', this.textContent);
        });
        
        heading.addEventListener('mouseleave', function() {
            this.classList.remove('glitch');
            this.removeAttribute('data-text');
        });
    });
    
    // Button hover and click effects
    const pixelBtns = document.querySelectorAll('.pixel-btn');
    
    pixelBtns.forEach(btn => {
        btn.addEventListener('mouseenter', function() {
            this.classList.add('power-up');
        });
        
        btn.addEventListener('mouseleave', function() {
            this.classList.remove('power-up');
        });
        
        btn.addEventListener('click', function() {
            this.classList.add('activated');
            
            // Add click teleport effect
            const teleportEffect = document.createElement('div');
            teleportEffect.classList.add('teleport-circle');
            this.appendChild(teleportEffect);
            
            setTimeout(() => {
                this.classList.remove('activated');
                this.removeChild(teleportEffect);
            }, 600);
        });
    });
    
    // Add custom cursor effect for gaming feel
    const cursor = document.createElement('div');
    cursor.classList.add('custom-cursor');
    document.body.appendChild(cursor);
    
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });
    
    // Add keyframe animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes glitchEffect {
            0% { transform: translate(0); }
            20% { transform: translate(-3px, 3px); }
            40% { transform: translate(-3px, -3px); }
            60% { transform: translate(3px, 3px); }
            80% { transform: translate(3px, -3px); }
            100% { transform: translate(0); }
        }
        
        .energy-pulse {
            animation: energyPulse 0.5s ease-in-out;
        }
        
        .power-up {
            animation: powerUp 1s infinite;
            transform: translateY(-3px);
            box-shadow: 0 5px 20px rgba(155, 89, 255, 0.6);
        }
        
        .activated {
            transform: scale(0.95);
        }
        
        .reveal-animation {
            animation: revealGlow 1s forwards;
        }
        
        .teleport-effect {
            animation: teleport 0.5s;
        }
        
        .teleport-circle {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 10px;
            height: 10px;
            background: var(--primary-color);
            border-radius: 50%;
            z-index: 100;
            animation: teleportCircle 0.6s forwards;
        }
        
        .energy-click-effect {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(45deg, var(--primary-color), var(--secondary-color));
            opacity: 0.1;
            z-index: -1;
            animation: energyClick 0.5s forwards;
        }
        
        .custom-cursor {
            width: 20px;
            height: 20px;
            border: 2px solid var(--primary-color);
            border-radius: 50%;
            position: fixed;
            pointer-events: none;
            transform: translate(-50%, -50%);
            z-index: 9999;
            transition: transform 0.1s ease, opacity 0.3s ease;
            mix-blend-mode: difference;
        }
        
        .glitch-header {
            animation: glitchEffect 0.5s forwards;
        }
        
        @keyframes powerUp {
            0% { box-shadow: 0 0 10px rgba(155, 89, 255, 0.6); }
            50% { box-shadow: 0 0 20px rgba(155, 89, 255, 0.8); }
            100% { box-shadow: 0 0 10px rgba(155, 89, 255, 0.6); }
        }
        
        @keyframes teleport {
            0% { opacity: 1; }
            50% { opacity: 0.5; }
            100% { opacity: 1; }
        }
        
        @keyframes teleportCircle {
            0% { width: 10px; height: 10px; opacity: 1; }
            100% { width: 300px; height: 300px; opacity: 0; }
        }
        
        @keyframes energyClick {
            0% { opacity: 0.3; }
            100% { opacity: 0; }
        }
        
        @keyframes revealGlow {
            0% { box-shadow: 0 0 0 rgba(155, 89, 255, 0); }
            100% { box-shadow: 0 0 15px rgba(155, 89, 255, 0.3); }
        }
    `;
    document.head.appendChild(style);
});
