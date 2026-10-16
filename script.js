// Wait for the HTML document to fully load before running any script
document.addEventListener('DOMContentLoaded', () => {

    // Toggle mobile menu
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Smooth scrolling for nav links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Form submission with custom animated notification
    const contactForm = document.getElementById('contact-form');
    const notification = document.getElementById('form-notification');

    if (contactForm && notification) {
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
                    notification.textContent = 'Thank you! Your message has been sent successfully.';
                    notification.classList.add('show');
                    contactForm.reset();
                    
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
    }

    // --- Fullscreen Image Modal Functionality ---
    const modal = document.getElementById('image-modal');
    const modalImg = document.getElementById('modal-img');
    const closeBtn = document.querySelector('.modal-close-btn');

    if (modal && modalImg && closeBtn) {
        document.querySelectorAll('.project-card img').forEach(img => {
            img.addEventListener('click', function() {
                modal.style.display = 'flex'; // Uses flex to maintain perfect centering
                modalImg.src = this.src;
            });
        });

        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                modal.style.display = 'none';
            }
        });
    }

});

// Hide preloader when window loads completely
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        preloader.classList.add('preload-finished');
    }
});
