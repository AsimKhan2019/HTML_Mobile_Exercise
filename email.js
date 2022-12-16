const eMail = document.getElementById("txtemail");
const error = document.querySelector(".error");
// function validateContactForm(){
//   if(eMail.value!=eMail.value.toLowerCase()){
//     error.innerHTML="Please enter email in lower letters";
//     return false;
//   }
//   else {
//     error.innerHTML = "";
//     return true;
//   }
// }
function validateContactForm() {
  if (!validateEmail()) 
    return false;
  return true;
}
function validateEmail() {
  if (eMail.value != eMail.value.toLowerCase()) {
      error.textContent = "Please enter lowercase email"
      error.className = "error active";
      return false;
  }
  else {
      error.textContent = "";
      error.className = "error"
      return true;
  }
}