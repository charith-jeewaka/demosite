document.addEventListener("DOMContentLoaded", () => {

    // LinkedIn
    document.querySelector(".linkedin").addEventListener("click", () => {
        window.open("https://www.linkedin.com/in/charith-jeewaka-7b47a8382/", "_blank");
    });

    // GitHub
    document.querySelector(".github").addEventListener("click", () => {
        window.open("https://github.com/charith-jeewaka", "_blank");
    });

    // Twitter / X
    document.querySelector(".twitter").addEventListener("click", () => {
        window.open("https://x.com/Charith_jw", "_blank");
    });

    // Facebook
    document.querySelector(".facebook").addEventListener("click", () => {
        window.open("https://www.facebook.com/charith.jeewaka.94", "_blank");
    });

    // Instagram
    document.querySelector(".instagram").addEventListener("click", () => {
        window.open("https://www.instagram.com/your-handle", "_blank");
    });

    document.querySelector("#download-cv").addEventListener("click", () => {
        window.open("assets/pdf/cv.pdf", "_blank");
    })
});
