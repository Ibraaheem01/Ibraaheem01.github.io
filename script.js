// Toggle mobile menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Smooth scrolling for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Hide preloader when window loads
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    preloader.classList.add('preload-finished');
});

// Form submission with custom animated notification
const contactForm = document.getElementById('contact-form');
const notification = document.getElementById('form-notification');

contactForm.addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    
    try {
        const response = await fetch(contactForm.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });
        
        if (response.ok) {
            // Show custom success toast
            notification.textContent = 'Thank you! Your message has been sent successfully.';
            notification.classList.add('show');
            contactForm.reset();
            
            // Hide the toast automatically after 5 seconds
            setTimeout(() => {
                notification.classList.remove('show');
            }, 5000);
        } else {
            notification.textContent = 'Oops! There was a problem submitting your form. Please try again.';
            notification.classList.add('show');
        }
    } catch (error) {
        notification.textContent = 'Network error. Please check your connection and try again.';
        notification.classList.add('show');
    }
});
