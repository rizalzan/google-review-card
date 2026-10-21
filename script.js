// Interaksi sederhana: menu mobile dan pilihan paket.
const menuButton = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('#navLinks');
if (menuButton && navLinks) {
  menuButton.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
  });
  navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  }));
}
// Saat paket dipilih, sorot kartu paket tersebut.
document.querySelectorAll('.price-card').forEach(card => {
  card.querySelector('.checkout-link')?.addEventListener('click', () => {
    document.querySelectorAll('.price-card').forEach(item => item.classList.remove('selected'));
    card.classList.add('selected');
  });
});
/* =========================================
   PRODUCT SHOWCASE SLIDER
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    const slides = document.querySelectorAll(".showcase-slide");
    const dots = document.querySelectorAll(".showcase-dot");

    const prevButton = document.querySelector(".gallery-prev");
    const nextButton = document.querySelector(".gallery-next");

    if (!slides.length) return;

    let currentSlide = 0;


    function showSlide(index) {

        if (index >= slides.length) {
            currentSlide = 0;
        } else if (index < 0) {
            currentSlide = slides.length - 1;
        } else {
            currentSlide = index;
        }


        slides.forEach((slide, i) => {
            slide.classList.toggle(
                "active",
                i === currentSlide
            );
        });


        dots.forEach((dot, i) => {
            dot.classList.toggle(
                "active",
                i === currentSlide
            );
        });

    }


    nextButton?.addEventListener("click", function () {
        showSlide(currentSlide + 1);
    });


    prevButton?.addEventListener("click", function () {
        showSlide(currentSlide - 1);
    });


    dots.forEach((dot, index) => {

        dot.addEventListener("click", function () {
            showSlide(index);
        });

    });


    /* SWIPE HP */

    let touchStartX = 0;

    const gallery = document.querySelector(".showcase-image");

    gallery?.addEventListener("touchstart", function (event) {

        touchStartX = event.touches[0].clientX;

    });


    gallery?.addEventListener("touchend", function (event) {

        const touchEndX = event.changedTouches[0].clientX;

        const difference = touchStartX - touchEndX;


        if (Math.abs(difference) > 50) {

            if (difference > 0) {
                showSlide(currentSlide + 1);
            } else {
                showSlide(currentSlide - 1);
            }

        }

    });


});