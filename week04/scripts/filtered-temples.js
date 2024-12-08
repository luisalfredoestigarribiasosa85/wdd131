const year = document.getElementById('year');
const lastModified = document.getElementById('lastmodified');
const menu = document.getElementById('menu');
const nav = document.querySelector('nav');
const title = document.querySelector('#title');
const oldTemples = document.querySelector('#old');
const newTemples = document.querySelector('#new');
const largeTemples = document.querySelector('#large');
const smallTemples = document.querySelector('#small');


const today = new Date().getFullYear();
year.textContent = today;
lastModified.textContent = `Last Modification: ${document.lastModified}`;
lastModified.style.color = '#F0F465';

menu.addEventListener('click', function () {
    nav.classList.toggle('open');
    menu.classList.toggle('open');
});

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Buenos Aires Argentina",
        location: "Buenos Aires, Argentina",
        dedicated: "1986, January, 17",
        area: 30659,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/buenos-aires-argentina-temple/buenos-aires-argentina-temple-12546.jpg"
    },
    {
        templeName: "Copenhagen Denmark",
        location: "Copenhagen, Denmark",
        dedicated: "2004, May, 23",
        area: 25000,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/copenhagen-denmark-temple/copenhagen-denmark-temple-16182.jpg"
    },
    {
        templeName: "Brisbane Australia",
        location: "Brisbane, Queensland, Australia",
        dedicated: "1984, May, 18",
        area: 12000,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/brisbane-australia-temple/brisbane-australia-temple-16530.jpg"
    },
    {
        templeName: "Asunción Paraguay",
        location: "Asunción, Paraguay",
        dedicated: "2002, November, 19",
        area: 12000,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/asuncion-paraguay-temple/asuncion-paraguay-temple-6952.jpg"
    }
];

function createTempleCard(filteredTemples) {
    document.querySelector('.container').innerHTML = '';

    filteredTemples.forEach(temple => {
        let card = document.createElement('section');
        let name = document.createElement('h3');
        let location = document.createElement('p');
        let dedication = document.createElement('p');
        let area = document.createElement('p');
        let image = document.createElement('img');

        name.textContent = temple.templeName;
        location.innerHTML = `<span class="label">Location: </span> ${temple.location}`;
        dedication.innerHTML = `<span class="label">Dedicated: </span> ${temple.dedicated}`;
        area.innerHTML = `<span class="label">Area: </span> ${temple.area} sq ft`;
        image.setAttribute("src", temple.imageUrl);
        image.setAttribute("alt", `${temple.templeName} Temple`);
        image.setAttribute("loading", "lazy");

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(area);
        card.appendChild(image);

        document.querySelector('.container').appendChild(card);
    });
}

oldTemples.addEventListener("click", (event) => {
    event.preventDefault();
    const filteredOld = temples.filter(temple => {
        const year = parseInt(temple.dedicated.split(",")[0], 10);
        title.innerHTML = 'Old Temples';
        return year <= 1900;
    });
    createTempleCard(filteredOld);
});

newTemples.addEventListener("click", (event) => {
    event.preventDefault();
    const filteredNew = temples.filter(temple => {
        const year = parseInt(temple.dedicated.split(",")[0], 10);
        title.innerHTML = 'New Temples';
        return year >= 2000;
    });
    createTempleCard(filteredNew);
});

largeTemples.addEventListener("click", (event) => {
    event.preventDefault();
    const filteredLarge = temples.filter(temple => {
        const size = temple.area;
        title.innerHTML = 'Large Temples';
        return size >= 90000;
    });
    createTempleCard(filteredLarge);
});

smallTemples.addEventListener("click", (event) => {
    event.preventDefault();
    const filteredSmall = temples.filter(temple => {
        const size = temple.area;
        title.innerHTML = 'Small Temples';
        return size <= 10000;
    });
    createTempleCard(filteredSmall);
});

createTempleCard(temples);