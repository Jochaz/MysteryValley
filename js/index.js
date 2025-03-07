window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".header");
    if (window.scrollY > 50) { // Lorsque l'utilisateur scrolle de 50px ou plus
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});