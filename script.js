let slideIndex = 0;
showSlides(slideIndex);

function currentSlide(n) {
    showSlides(slideIndex = n - 1);
}

function showSlides(n) {
    const slides = document.querySelectorAll('.slide');
    const navBars = document.querySelectorAll('.navi');

    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active');
        navBars[i].style.backgroundColor = 'gray';
    }

    slides[n].classList.add('active');
    navBars[n].style.backgroundColor = 'orangered';
}
