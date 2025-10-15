document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    // Toggle mobile navigation
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", ()=>{
    hamburger.classList.remove("active");
    navLinks.classList.remove("active")
}))

    // Smooth scrolling for anchor links on the same page
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            // Don't prevent default for the services link on mobile, as it has its own logic
            if (this.getAttribute('href') === '#services' && window.innerWidth <= 992) {
                return;
            }

            // If the target is on the same page, scroll smoothly
            if (document.querySelector(this.getAttribute('href'))) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            }

            // Close mobile nav if a link is clicked
            if (navLinks && navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });
    });
});
