//loading screen
window.addEventListener('load', function () {
    const preloader = document.getElementById('preloader');
    preloader.style.opacity = '0';
    preloader.style.transition = 'opacity 0.5s ease';
    setTimeout(() => preloader.style.display = 'none', 500);
});

const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// scroll spy
const sections = document.querySelectorAll("section");
const navigationLinks = document.querySelectorAll(".nav-links li a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute("id");
        }
    });

    navigationLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    });
});

//return home
const btn = document.querySelector("#return-home");
window.addEventListener("scroll", () => {
    if (window.scrollY > 700){
        btn.classList.add("show");
    }else {
        btn.classList.remove("show");
    }
});

// slide in

const elements = document.querySelectorAll('.slide-in');

window.addEventListener('scroll', () => {
    elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        const inView = rect.top < window.innerHeight - 70 && rect.bottom > 100;

        if (inView) {
            el.classList.add('active');
        } else {
            el.classList.remove('active');
        }
    });
});
//