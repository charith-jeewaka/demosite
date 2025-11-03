const slides = document.querySelectorAll('.slider-img');

slides.forEach(slide => {
    slide.addEventListener('click', () => {

        // If this one is already active → remove and exit
        if (slide.classList.contains('active')) {
            slide.classList.remove('active');
            return;
        }

        // Otherwise remove active from all
        slides.forEach(s => s.classList.remove('active'));

        // And add active to clicked one
        slide.classList.add('active');
    });
});
