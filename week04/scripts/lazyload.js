const year = document.getElementById('year');
const lastModified = document.getElementById('lastmodified');
const today = new Date().getFullYear();

year.textContent = `© ${today}`
lastModified.textContent = `Last modified: ${document.lastModified}`