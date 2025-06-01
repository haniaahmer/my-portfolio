// Mobile Navigation Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

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

// Scroll to contact section
function scrollToContact() {
    document.getElementById('contact').scrollIntoView({
        behavior: 'smooth'
    });
}

// Open GitHub profile
function openGitHub() {
    window.open('https://github.com', '_blank');
}

// Project card interactions
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', function() {
        const projectType = this.getAttribute('data-project');
        showProjectDetails(projectType);
    });
});

function showProjectDetails(projectType) {
    const projectDetails = {
        ecommerce: {
            title: 'E-Commerce Platform',
            description: 'A full-stack e-commerce solution built with React, Node.js, and MongoDB. Features include user authentication, product catalog, shopping cart, and payment integration.',
            technologies: ['React', 'Node.js', 'MongoDB', 'Stripe API', 'JWT'],
            liveUrl: '#',
            githubUrl: '#'
        },
        weather: {
            title: 'Weather Dashboard',
            description: 'A responsive weather application that displays current weather conditions and forecasts. Built with vanilla JavaScript and integrates with OpenWeatherMap API.',
            technologies: ['JavaScript', 'HTML5', 'CSS3', 'OpenWeatherMap API', 'Chart.js'],
            liveUrl: '#',
            githubUrl: '#'
        },
        task: {
            title: 'Task Management App',
            description: 'A productivity app with drag-and-drop functionality for managing tasks. Built with Vue.js and Firebase for real-time data synchronization.',
            technologies: ['Vue.js', 'Vuex', 'Firebase', 'Vuetify', 'Drag & Drop API'],
            liveUrl: '#',
            githubUrl: '#'
        }
    };

    const project = projectDetails[projectType];
    if (project) {
        alert(`${project.title}\n\n${project.description}\n\nTechnologies: ${project.technologies.join(', ')}`);
    }
}

// Contact form handling
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = new FormData(this);
    const name = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const message = this.querySelector('textarea').value;
    
    if (name && email && message) {
        // Simulate form submission
        alert('Thank you for your message! I\'ll get back to you soon.');
        this.reset();
    } else {
        alert('Please fill in all fields.');
    }
});

// Navbar background on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(26, 32, 44, 0.98)';
    } else {
        navbar.style.background = 'rgba(26, 32, 44, 0.95)';
    }
});

// Intersection Observer for animations
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

// Observe elements for animation
document.querySelectorAll('.project-card, .skill-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Typing effect for hero title
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

// Initialize typing effect when page loads
window.addEventListener('load', function() {
    const heroTitle = document.querySelector('.hero-text h1');
    const originalText = heroTitle.innerHTML;
    typeWriter(heroTitle, originalText, 50);
});

// Parallax effect for hero section
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const rate = scrolled * -0.5;
    
    if (hero) {
        hero.style.transform = `translateY(${rate}px)`;
    }
});

// Add floating animation to anime character
function addFloatingAnimation() {
    const animeCharacter = document.querySelector('.anime-character');
    if (animeCharacter) {
        animeCharacter.style.animation = 'float 3s ease-in-out infinite';
    }
}

// Add CSS for floating animation
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-10px); }
    }
`;
document.head.appendChild(style);

// Initialize floating animation
addFloatingAnimation();

// Particle effect for background (optional enhancement)
function createParticle() {
    const particle = document.createElement('div');
    particle.style.position = 'fixed';
    particle.style.width = '4px';
    particle.style.height = '4px';
    particle.style.background = 'rgba(255, 255, 255, 0.5)';
    particle.style.borderRadius = '50%';
    particle.style.pointerEvents = 'none';
    particle.style.zIndex = '1';
    particle.style.left = Math.random() * window.innerWidth + 'px';
    particle.style.top = '-10px';
    particle.style.animation = 'fall 10s linear infinite';
    
    document.body.appendChild(particle);
    
    setTimeout(() => {
        particle.remove();
    }, 10000);
}

// Add CSS for falling particles
const particleStyle = document.createElement('style');
particleStyle.textContent = `
    @keyframes fall {
        to {
            transform: translateY(100vh);
            opacity: 0;
        }
    }
`;
document.head.appendChild(particleStyle);

// Create particles periodically
setInterval(createParticle, 2000);

// Theme toggle functionality (bonus feature)
function toggleTheme() {
    document.body.classList.toggle('light-theme');
    localStorage.setItem('theme', document.body.classList.contains('light-theme') ? 'light' : 'dark');
}

// Load saved theme
window.addEventListener('load', function() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-theme');
    }
});
 document.addEventListener('DOMContentLoaded', () => {
            const progressBars = document.querySelectorAll('.progress');
            progressBars.forEach(bar => {
                const progress = bar.getAttribute('data-progress');
                bar.style.width = progress + '%';
            });
        });