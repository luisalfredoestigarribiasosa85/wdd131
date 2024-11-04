const currentYear = document.querySelector('#currentyear')
const lastModified = document.querySelector('#lastmodified');

const year = new Date();
currentYear.textContent = year.getFullYear();
lastModified.innerHTML = document.lastModified;