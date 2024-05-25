// Main Navigation Toggle
const button = document.getElementById('menu-toggle');
const links = document.getElementById('nav-menu');

button.addEventListener('click', function(){
    links.classList.toggle('toggled');
    const expanded = button.getAttribute('aria-expanded') === 'true' || false;
    button.setAttribute('aria-expanded', !expanded);
});


// Thumb Navigation Toggle

// const thumbButton = document.getElementById('thumb-nav-button');
// const thumbLinks = document.getElementById('thumb-nav-secondary');

// thumbButton.addEventListener('click', function(){
//     thumbLinks.classList.toggle('toggled');

// });