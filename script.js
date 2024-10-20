// Select elements
const navbar = document.querySelector('.header .navbar');
const menuBtn = document.getElementById('menu-btn');
const navClose = document.getElementById('nav-close');
const searchForm = document.querySelector('.search-form');
const searchBtn = document.getElementById('search-btn');
const closeSearch = document.getElementById('close-search');
const header = document.querySelector('.header');

// Toggle navbar visibility
menuBtn.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

navClose.addEventListener('click', () => {
    navbar.classList.remove('active');
});

// Toggle search form visibility
searchBtn.addEventListener('click', () => {
    searchForm.classList.toggle('active');
});

closeSearch.addEventListener('click', () => {
    searchForm.classList.remove('active');
});

// Handle scroll event
const handleScroll = () => {
    if (window.scrollY > 0) {
        header.classList.add('active');
        navbar.classList.remove('active'); // Hide navbar on scroll
    } else {
        header.classList.remove('active');
    }
};

// Event listeners
window.addEventListener('scroll', handleScroll);
window.addEventListener('load', handleScroll);
