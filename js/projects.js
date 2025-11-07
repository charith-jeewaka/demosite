
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





////////////////////////////////////////////popup//////////////////////


const popup = document.getElementById("project-popup");
const closePopup = document.getElementById("close-popup");
const popupTitle = document.querySelector(".popup-title");
const popupDescription = document.querySelector(".popup-description");
const popupImage = document.querySelector(".popup-image");
const usedTechnologies = document.querySelector(".used-technologies");

// details data
const projects = {
    "pjct-happy-chat": {
        title: "HAPPY CHAT",
        image: "assets/images/HappyChat.png",
        description: "Happy Chat is a real-time chat application using Java Socket programming. It includes user authentication, online/offline status tracking, and group chat support.",
        technologies: ["Java", "JavaFX", "Socket Programming"]
    },
    "pjct-ds-manager": {
        title: "DS MANAGER",
        image: "assets/images/ds-manager-sh.png",
        description: "DS Manager is a desktop application for managing student records, batch schedules, payments, and class attendance.",
        technologies: ["Java", "JavaFX", "Hibernate", "MySQL","Layered","CSS"]
    },
    "pjct-creative-flora": {
        title: "CREATIVE FLORA",
        image: "assets/images/creative-flora-sh.png",
        description: "Creative Flora is a florist POS system that tracks plant growth stages and adjusts pricing dynamically, designed with layered architecture.",
        technologies: ["Java", "JavaFX", "MVC", "MySQL","CSS"]
    },
    "pjct-fx-calculator": {
        title: "FX CALCULATOR",
        image: "assets/images/CreativeFlora.png",
        description: "fx CALCULATOR is a florist POS system that tracks plant growth stages and adjusts pricing dynamically, designed with layered architecture.",
        technologies: ["Java", "JavaFX","CSS"]
    },
    "pjct-portfolio": {
        title: "MY PORTFOLIO",
        image: "assets/images/portfolio-sh.png",
        description: "fx CALCULATOR is a florist POS system that tracks plant growth stages and adjusts pricing dynamically, designed with layered architecture.",
        technologies: ["JS", "HTML", "CSS"]
    }
};


document.querySelectorAll(".see-project-details").forEach(btn => {
    btn.addEventListener("click", () => {
        const projectKey = btn.dataset.project;
        const project = projects[projectKey];

        popupTitle.innerText = project.title;
        popupImage.src = project.image;
        popupDescription.innerText = project.description;

        usedTechnologies.innerHTML = "";
        project.technologies.forEach(tech => {
            const span = document.createElement("span");
            span.innerText = tech;
            usedTechnologies.appendChild(span);
        });

        popup.style.display = "flex";
    });
});

closePopup.addEventListener("click", () => popup.style.display = "none");

popup.addEventListener("click", (e) => {
    if (e.target === popup) popup.style.display = "none";
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") popup.style.display = "none";
});



// view the image
document.querySelectorAll(".popup-image").forEach(img => {
    img.addEventListener("click", () => {
        window.open(img.src, "_blank");
    });
});




