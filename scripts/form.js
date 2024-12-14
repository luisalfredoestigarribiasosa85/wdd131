const year = document.getElementById('year');
const lastModified = document.getElementById('lastmodified');
const select = document.getElementById('pname');
const reviewCount = document.getElementById('reviewCount');
const submit = document.getElementById('submit');
const reviewForm = document.getElementById('reviewForm');

const today = new Date();
const yearNow = today.getFullYear();
if (year) year.innerHTML = yearNow;
if (lastModified) lastModified.innerHTML = `Last Modification: ${document.lastModified}`;

if (select) {
    const products = [
        { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
        { id: "fc-2050", name: "power laces", averagerating: 4.7 },
        { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
        { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
        { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
    ];

    products.forEach(product => {
        const option = document.createElement('option');
        option.textContent = `${product.id} - ${product.name}`;
        option.value = product.id;
        select.appendChild(option);
    });
}

if (submit && reviewForm) {
    submit.addEventListener('click', (event) => {
        event.preventDefault();

        let review = parseInt(localStorage.getItem('reviewCount')) || 0;

        review++;

        localStorage.setItem('reviewCount', review);

        reviewForm.reset();

        window.location.href = 'review.html';
    });
}


if (reviewCount) {
    const reviews = parseInt(localStorage.getItem('reviewCount')) || 0;
    reviewCount.textContent = reviews;
}
