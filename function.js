
function updateLabel() {
  let num1,num2,sum;
  num1 = document.getElementById("num1").value;
  console.log('num1:', num1);
  num2 = document.getElementById("num2").value;
  console.log('num2:', num2);
  sum = parseInt(num1) + parseInt(num2);
  console.log('sum:', sum);
  sum.textContent = num1 + ' + ' + num2 + ' = ' + sum;
  document.getElementById("sum").innerText = sum;
}