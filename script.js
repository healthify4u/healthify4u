// script.js
let currentIndex = 0;

const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

function updateSlides() {
    const slider = document.querySelector('.slides');
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

prev.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalSlides - 1;
    updateSlides();
});

next.addEventListener('click', () => {
    currentIndex = (currentIndex < totalSlides - 1) ? currentIndex + 1 : 0;
    updateSlides();
});

// Auto Slide (Optional)
setInterval(() => {
    next.click();
}, 5000);

