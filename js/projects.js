
// togggle behaviour
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


// git hub buttons
document.querySelector("#btn-creative-flora-repo").addEventListener("click", () => {
    window.open("https://github.com/charith-jeewaka/final_layered_project", "_blank");
});

document.querySelector("#btn-ds-manager-repo").addEventListener("click", () => {
    window.open("https://github.com/charith-jeewaka/ORM-Driving_School_Management_System", "_blank");
});

document.querySelector("#btn-happy-chat-repo").addEventListener("click", () => {
    window.open("https://github.com/charith-jeewaka/Multi_Client_Chat_Room", "_blank");
});
