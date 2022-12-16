const hBtn = document.getElementById("menubar");
const nav = document.getElementById("mobNav");
const mobNavLinks = document.querySelectorAll("#mobNav a");
function toggleMenu() {
    // hBtn.classList.toggle("open");
    nav.classList.toggle("open");
}
hBtn.addEventListener("click", toggleMenu);
//nav.addEventListener("click", toggleMenu);
for (let i = 0; i < mobNavLinks.length; i++) {
  mobNavLinks[i].addEventListener("click", toggleMenu);
}

var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}

// Get the modal
var modal1 = document.getElementById("myModal");
var modal2 = document.getElementById("myModal2");
var modal3 = document.getElementById("myModal3");
var modal4 = document.getElementById("myModal4");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");
var btn2 = document.getElementById("myBtn2");
var btn3 = document.getElementById("myBtn3");
var btn4 = document.getElementById("myBtn4");

// Get the <span> element that closes the modal
var spanclose = document.getElementsByClassName("close")[0];
var spanclose2 = document.getElementsByClassName("close2")[0];
var spanclose3 = document.getElementsByClassName("close3")[0];
var spanclose4 = document.getElementsByClassName("close4")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal1.style.display = "block";
}

btn2.onclick = function() {
  modal2.style.display = "block";
}

btn3.onclick = function() {
  modal3.style.display = "block";
}

btn4.onclick = function() {
  modal4.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spanclose.onclick = function() {
  modal1.style.display = "none";
}

spanclose2.onclick = function() {
  modal2.style.display = "none";
}

spanclose3.onclick = function() {
  modal3.style.display = "none";
}

spanclose4.onclick = function() {
  modal4.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal1) {
    modal.style.display = "none";
  } else if (event.target == modal2) {
    modal2.style.display = "none";
  } else if (event.target == modal3) {
    modal3.style.display = "none";
  } else if (event.target == modal4) {
    modal4.style.display = "none";
  }
}
