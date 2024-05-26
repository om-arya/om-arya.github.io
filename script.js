// Scroll reveal effect on page load
ScrollReveal({
    distance: '10rem',
    duration: 1500,
});

ScrollReveal().reveal('.home-container', { origin: 'top' });
ScrollReveal().reveal('.home-container h1', { origin: 'left'});
ScrollReveal().reveal('.projects-box, .tech-stack-container div', { origin: 'bottom'});

// Type welcome message
const typed = new Typed('.typed-text', {
    strings: ['Welcome to my portfolio.'],
    typeSpeed: 80,
});

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

// Switch between light/dark mode
const switchMode = () => {
    let root = document.querySelector(':root');
    let currentTextColor = getComputedStyle(root).getPropertyValue('--text-main-color').trim();
    let modeToggleIcon = document.querySelector('#mode-toggle i');

    if (currentTextColor === 'white') {
        root.style.setProperty('--bg-main-color', 'white');
        root.style.setProperty('--bg-second-color', '#f9f9f9');
        root.style.setProperty('--text-main-color', 'black');
        root.style.setProperty('--text-second-color', '#fa5f55');
        modeToggleIcon.classList.remove('bx-moon');
        modeToggleIcon.classList.add('bxs-sun');
    } else {
        root.style.setProperty('--bg-main-color', '#0f0f0f');
        root.style.setProperty('--bg-second-color', '#151516');
        root.style.setProperty('--text-main-color', 'white');
        root.style.setProperty('--text-second-color', '#05a0aa');
        modeToggleIcon.classList.remove('bxs-sun');
        modeToggleIcon.classList.add('bx-moon');
    }
}