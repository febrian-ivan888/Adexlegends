let overlay = document.getElementsByClassName("overlay");
let i;
for (i = 0; i < overlay.length; i++) {
    overlay[i].style.display = "none"
}
function on(n) {
    overlay[n].style.display = "block";
}
function off(n) {
    overlay[n].style.display = "none";
}

//Header, Footer
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

