// script.js
// You can add JavaScript for interactive elements here if needed.
// For example, to handle form submissions or add dynamic behavior.

// Example: Simple alert on form submission (for demonstration purposes)
const contactForm = document.querySelector('.contact-form form');
if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission
        alert('Your message has been sent!');
        this.reset(); // Clear the form after submission
    });
}

// You might also add smooth scrolling for navigation links:
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});