let backtotop = document.querySelector(".arrow-btn");

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