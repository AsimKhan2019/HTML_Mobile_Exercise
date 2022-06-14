const hBtn = document.getElementById("menubar");
const nav = document.getElementById("mobNav");
function toggleMenu() {
    hBtn.classList.toggle("open");
    nav.classList.toggle("open");
}
hBtn.addEventListener("click", toggleMenu);
nav.addEventListener("click", toggleMenu);

var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}
