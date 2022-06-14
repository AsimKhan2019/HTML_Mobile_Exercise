const hBtn = document.getElementById("menubar");
const nav = document.querySelector("nav");
function toggleMenu() {
    hBtn.classList.toggle("open");
    nav.classList.toggle("open");
}

hBtn.addEventListener("click", toggleMenu);