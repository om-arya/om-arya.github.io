// Highlight navbar links as they are scrolled on
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
};

// Scroll reveal effect on page load
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 1500,
    delay: 200,
});

ScrollReveal().reveal('.home-content', { origin: 'top' });
ScrollReveal().reveal('.home-content h1', { origin: 'left'});

// Type welcome message
const typed = new Typed('.typed-text', {
    strings: ['Welcome to my portfolio.'],
    typeSpeed: 80,
});