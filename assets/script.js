let backtotop = document.querySelector(".arrow-btn");
let navbar = document.querySelector(".navbar");
let navcolored = document.querySelector(".nav-colored");
let navtransparent = document.querySelector(".nav-transparent");

window.onscroll = function() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        backtotop.style.display = "block";
        backtotop.style.transition = "transform 0.40s ease-in-out";
    } else {
        backtotop.style.display = "none";
    }
};

backtotop.addEventListener("click", function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

});

window.addEventListener("scroll", function() {
    if (window.scrollY > 300) {
        navbar.classList.add("nav-colored");
        navbar.classList.remove("nav-transparent");
    } else {
        navbar.classList.add("nav-transparent");
        navbar.classList.remove("nav-colored");
    }
});