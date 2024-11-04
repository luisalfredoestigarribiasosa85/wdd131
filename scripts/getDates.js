const currentYear = document.querySelector('#currentyear')
const lastModified = document.querySelector('#lastmodified');

const year = new Date().getFullYear();
currentYear.textContent = year;
lastModified.innerHTML = document.lastModified;