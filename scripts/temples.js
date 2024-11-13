const year = document.getElementById('year');
const lastModified = document.getElementById('lastmodified');
const menu = document.getElementById('menu');
const nav = document.querySelector('nav');

const today = new Date().getFullYear();
year.textContent = today;
lastModified.textContent = `Last Modification: ${document.lastModified}`;
lastModified.style.color = '#F0F465';

menu.addEventListener('click', function() {
    nav.classList.toggle('open');
    menu.classList.toggle('open');
})

