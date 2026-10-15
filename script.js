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

// Handle Formspree AJAX Submission with Custom Response
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', async function(e) {
    e.preventDefault(); // Stop standard redirect
    
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
            alert('Thank you! Your message has been sent successfully.');
            contactForm.reset(); // Clear the form inputs
        } else {
            alert('Oops! There was a problem submitting your form. Please try again.');
        }
    } catch (error) {
        alert('Network error. Please check your connection and try again.');
    }
});
