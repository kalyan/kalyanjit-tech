// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }

    // Scroll Spy: Update Active Link in Navbar on Scroll
    const sections = document.querySelectorAll('section, header');
    const navLinks = document.querySelectorAll('.nav-menu a');

    function selectActiveNavLink() {
        let currentSection = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            // Detect section current scroll threshold
            if (window.scrollY >= (sectionTop - 120)) {
                currentSection = section.getAttribute('id') || '';
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            const hrefAttr = link.getAttribute('href');
            if (hrefAttr.includes(currentSection) && currentSection !== '') {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', selectActiveNavLink);
    selectActiveNavLink(); // Run on startup
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const target = document.querySelector(targetId);
        if (target) {
            const offsetTop = target.offsetTop - 80; // Account for fixed navbar height
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar Background and scroll effects on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
});

// 3D Parallax Tilt Effect on Profile Card
const profileCard = document.querySelector('.profile-card');
const heroImageContainer = document.querySelector('.hero-image');

if (profileCard && heroImageContainer) {
    heroImageContainer.addEventListener('mousemove', function(e) {
        const rect = profileCard.getBoundingClientRect();
        
        // Calculate mouse coordinate delta from the card center
        const cardWidth = rect.width;
        const cardHeight = rect.height;
        const cardCenterX = rect.left + cardWidth / 2;
        const cardCenterY = rect.top + cardHeight / 2;
        
        const mouseX = e.clientX - cardCenterX;
        const mouseY = e.clientY - cardCenterY;
        
        // Map delta to angle limit
        const angleLimit = 15; // Max tilt rotation angle
        const rotateX = -1 * (mouseY / (cardHeight / 2)) * angleLimit;
        const rotateY = (mouseX / (cardWidth / 2)) * angleLimit;
        
        profileCard.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
        profileCard.style.transition = 'transform 0.1s ease-out';
    });

    heroImageContainer.addEventListener('mouseleave', function() {
        profileCard.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
        profileCard.style.transition = 'transform 0.5s ease-out';
    });
}

// Intersection Observer for Animating Elements on Scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const elObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Register animation listeners on cards
document.querySelectorAll('.expertise-card, .service-card, .timeline-item-card, .credential, .podcast-banner, .talks-teaser-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.75s cubic-bezier(0.4, 0, 0.2, 1), transform 0.75s cubic-bezier(0.4, 0, 0.2, 1)';
    elObserver.observe(el);
});

// Contact Form Submission Handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalBtnHTML = submitBtn.innerHTML;
        
        // Get form data
        const formData = new FormData(this);
        const name = formData.get('name');
        const email = formData.get('email');
        const subject = formData.get('subject');
        const message = formData.get('message');
        
        // Inputs validation
        if (!name.trim() || !email.trim() || !subject.trim() || !message.trim()) {
            showNotification('Please fill in all fields.', 'error');
            return;
        }
        
        if (!isValidEmail(email)) {
            showNotification('Please enter a valid email address.', 'error');
            return;
        }
        
        // Set Loading State
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fas fa-circle-notch fa-spin"></i> Sending message...';
        
        // API Handler Action
        const endpoint = "/api/send-email"; 

        fetch(endpoint, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, email, subject, message }),
        })
        .then(async response => {
            // Attempt to parse JSON response
            let data = {};
            try {
                data = await response.json();
            } catch (e) {
                // Non-JSON response (e.g. Vercel deployment error)
            }
            
            if (!response.ok) {
                throw new Error(data.error || 'Mail server error occurred.');
            }
            
            showNotification("Thank you for your message! I will get back to you soon.", "success");
            this.reset();
            // Reset input labels class state
            document.querySelectorAll('.form-group-floating label').forEach(label => {
                label.removeAttribute('style');
            });
        })
        .catch(error => {
            console.error("Form error:", error);
            showNotification(error.message || "There was an error sending your message. Please try again later.", "error");
        })
        .finally(() => {
            // Restore Button State
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalBtnHTML;
        });
    });
}

// Email syntax checker
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Toast Notification popup
function showNotification(message, type) {
    // Remove active toasts
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
            <span>${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Custom inline properties
    notification.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        background: ${type === 'success' ? 'rgba(16, 185, 129, 0.95)' : 'rgba(239, 68, 68, 0.95)'};
        color: white;
        padding: 1.15rem 1.75rem;
        border-radius: 12px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
        z-index: 10000;
        opacity: 0;
        transform: translateY(50px);
        transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        max-width: 420px;
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.1);
    `;
    
    notification.querySelector('.notification-content').style.cssText = `
        display: flex;
        align-items: center;
        gap: 0.75rem;
        font-weight: 500;
    `;
    
    notification.querySelector('.notification-close').style.cssText = `
        background: none;
        border: none;
        color: white;
        font-size: 1.3rem;
        cursor: pointer;
        margin-left: auto;
        padding: 0 0 0 1rem;
        line-height: 1;
    `;
    
    document.body.appendChild(notification);
    
    // Play transition
    setTimeout(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateY(0)';
    }, 100);
    
    // Setup dismiss click handlers
    notification.querySelector('.notification-close').addEventListener('click', function() {
        notification.style.opacity = '0';
        notification.style.transform = 'translateY(50px)';
        setTimeout(() => notification.remove(), 400);
    });
    
    // Auto removal clock
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.opacity = '0';
            notification.style.transform = 'translateY(50px)';
            setTimeout(() => notification.remove(), 400);
        }
    }, 6000);
}
