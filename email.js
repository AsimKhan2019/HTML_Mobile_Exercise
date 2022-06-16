const eMail = document.getElementById("txtemail");
const error = document.querySelector(".error");
function validateContactForm(){
  if(eMail.value!=eMail.value.toLowerCase()){
    error.innerHTML="Please enter email in lower letters";
    return false;
  }
  else {
    error.innerHTML = "";
    return true;
  }
}