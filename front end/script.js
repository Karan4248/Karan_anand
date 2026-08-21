// Grab the hamburger button and the nav bar it lives inside
const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.querySelector('.site-nav');

// Each click toggles the "open" class: adds it if missing, removes it if present
navToggle.addEventListener('click', () => {
    siteNav.classList.toggle('site-nav--open');
});
