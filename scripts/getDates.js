const currentYear = document.getElementById('currentyear');
const lastModified = document.getElementById('lastmodified');

const year = new Date().getFullYear();
currentYear.textContent = year;
lastModified.innerHTML = document.lastModified;