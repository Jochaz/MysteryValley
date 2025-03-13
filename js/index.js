window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".header");
    if (window.scrollY > 50) { // Lorsque l'utilisateur scrolle de 50px ou plus
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

function toggleMenu() {
    const menu = document.getElementById("mobileMenu");
    menu.style.display = menu.style.display === "flex" ? "none" : "flex";
}

document.addEventListener("DOMContentLoaded", () => {
    const background = document.querySelector(".background-infos");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                background.classList.add("visible");
            } else {
                background.classList.remove("visible"); // Disparition quand il sort de l'écran
            }
        });
    }, { threshold: 0.3 }); // Déclenche l'animation quand 30% de .background est visible

    observer.observe(background);
});