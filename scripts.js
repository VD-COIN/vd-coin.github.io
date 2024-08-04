// scripts.js

// Example of newsletter form submission handling
document.getElementById('newsletter-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent actual form submission
    window.location.href = 'mailto:nahomdebebe2024@gmail.com?subject=Newsletter Subscription';
});

// Example of contact form submission handling
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent actual form submission
    window.location.href = 'mailto:nahomdebebe2024@gmail.com?subject=Contact Form Submission';
});