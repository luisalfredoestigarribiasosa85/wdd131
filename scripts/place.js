const year = document.getElementById('year');
const lastModified = document.getElementById('lastmodified');
const temp = document.getElementById('temp');
const wind = document.getElementById('wind');
const windChill = document.getElementById('windChill');
const tempValue = 35;
const windValue = 8;

const currentYear = new Date().getFullYear();
year.textContent = `© ${currentYear}`;

lastModified.textContent = `Last Modification: ${document.lastModified}`;
lastModified.style.color = '#fff';

temp.innerHTML = `<b>Temperature: </b>${tempValue} °C`;
wind.innerHTML = `<b>Wind: </b> ${windValue} km/h`;

const calculateWindChill = (temperature, windSpeed) =>
    temperature <= 10 && windSpeed > 4.8
        ? (13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16)).toFixed(2) + " °C"
        : "N/A";

windChill.innerHTML = `<b>Wind: </b> ${calculateWindChill(tempValue, windValue)}`;