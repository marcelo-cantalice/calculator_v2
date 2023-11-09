function calculate() {
  var firstValue = Number(document.getElementById("firstValue").value);
  var secondValue = Number(document.getElementById("secondValue").value);
  var operation = document.getElementById("operation").value;
  var result = 0;
  var solution = "";
  if (firstValue === null || secondValue === null) {
    solution = "Inform valid numbers";
  } else {
    if (operation === "addition") {
      result = firstValue + secondValue;
    } else if (operation === "subtraction") {
      result = firstValue - secondValue;
    } else if (operation === "multiplication") {
      result = firstValue * secondValue;
    } else {
      result = firstValue / secondValue;
    }
    solution = result;
  }
  document.getElementById("result").innerHTML = solution;
  document.getElementById("result").style.color = "black";
}
