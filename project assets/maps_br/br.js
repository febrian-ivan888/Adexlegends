window.onload = function () {
    goToSlide(1);
}
let slides = document.getElementsByClassName("slide");
let dots = document.getElementsByClassName("dot");
let x = 1;
function goToSlide(n) {
    document.getElementById("next").style.display = "block";
    document.getElementById("prev").style.display = "block";
    x = n;
    n -= 1;
    let i = 0;
    for (i = 0; i < slides.length; i++) {
        if (i != n) {
            slides[i].style.display = "none";
            dots[i].className = dots[i].className.replace(" active", "");
        }
    }
    slides[n].style.display = "block";
    dots[n].className += " active"

    if (n == 0) {
        document.getElementById("prev").style.display = "none";
        document.getElementById("mapsSection").style.backgroundImage = "url('maps_br/minimap1.jpg')";
    }
    else if (n == slides.length - 1) {
        document.getElementById("next").style.display = "none";
        document.getElementById("mapsSection").style.backgroundImage = "url('maps_br/minimap2.jpg')";
    }
}

function nextSlide() {
    goToSlide(x + 1);
}
function prevSlide() {
    goToSlide(x - 1);
}

//header footer
window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});

let dropped = false;
function drop() {
    if (sub_dropped == true) {
        drop_sub();
    }
    let menu = document.getElementById("hamburger_dropdown");
    let ham_icon = document.getElementById("hamburger_icon");
    if (dropped == false) {
        menu.style.display = "block";
        ham_icon.innerHTML = " &#10006;"
        dropped = true;
    }
    else {
        menu.style.display = "none";
        ham_icon.innerHTML = "&#9776;"
        dropped = false;
    }
}

let sub_dropped = false;
function drop_sub() {
    let sub_menu = document.getElementById("sub_hamburger");
    let icon = document.getElementById("down_icon");
    if (sub_dropped == false) {
        sub_menu.style.display = "block";
        icon.innerHTML = " &#9650;";
        sub_dropped = true;
    }
    else {
        sub_menu.style.display = "none";
        icon.innerHTML = " &#9660;";
        sub_dropped = false;
    }
}