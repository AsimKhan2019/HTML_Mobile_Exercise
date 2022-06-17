let formObj;

function saveData(){
  formObj = {
    name : document.getElementById("txtname").value,
    email: document.getElementById("txtemail").value,
    message: document.getElementById("txtmsg").value
  }

  let serializedFormObj = JSON.stringify(formObj);
  localStorage.setItem("formData", serializedFormObj);
}

function getData(){
  let deserializedFormObj = JSON.parse(localStorage.getItem("formData"));
  
  document.getElementById("txtname").value = deserializedFormObj.name;
  document.getElementById("txtemail").value = deserializedFormObj.email;
  document.getElementById("txtmsg").value = deserializedFormObj.message;
}