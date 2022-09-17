var inputBox = document.getElementById("input-number");

var numZeroBtn = document.getElementById("num-zero");
numZeroBtn.addEventListener("click", function () {
  var zero = 0;
  var inputBox = document.getElementById("input-number");
  inputBox.value += zero;
});

var numOneBtn = document.getElementById("num-one");
numOneBtn.addEventListener("click", function () {
  var one = 1;
  var inputBox = document.getElementById("input-number");
  inputBox.value += one;
});

var numTwoBtn = document.getElementById("num-two");
numTwoBtn.addEventListener("click", function () {
  var two = 2;
  var inputBox = document.getElementById("input-number");
  inputBox.value += two;
});

var numThreeBtn = document.getElementById("num-three");
numThreeBtn.addEventListener("click", function () {
  var three = 3;
  var inputBox = document.getElementById("input-number");
  inputBox.value += three;
});

var numFourBtn = document.getElementById("num-four");
numFourBtn.addEventListener("click", function () {
  var four = 4;
  var inputBox = document.getElementById("input-number");
  inputBox.value += four;
});

var numFiveBtn = document.getElementById("num-five");
numFiveBtn.addEventListener("click", function () {
  var five = 5;
  var inputBox = document.getElementById("input-number");
  inputBox.value += five;
});

var numSixBtn = document.getElementById("num-six");
numSixBtn.addEventListener("click", function () {
  var six = 6;
  var inputBox = document.getElementById("input-number");
  inputBox.value += 6;
});

var numSevenBtn = document.getElementById("num-seven");
numSevenBtn.addEventListener("click", function () {
  var seven = 7;
  var inputBox = document.getElementById("input-number");
  inputBox.value += seven;
});

var numEightBtn = document.getElementById("num-eight");
numEightBtn.addEventListener("click", function () {
  var eight = 8;
  var inputBox = document.getElementById("input-number");
  inputBox.value += eight;
});

var numNineBtn = document.getElementById("num-nine");
numNineBtn.addEventListener("click", function () {
  var inputBox = document.getElementById("input-number");
  inputBox.value += 9;
});

var additionBtn = document.getElementById("addition-sign");
additionBtn.addEventListener("click", function () {
  inputBox.value += " + ";
});

var subtractionBtn = document.getElementById("substraction-sign");
subtractionBtn.addEventListener("click", function () {
  inputBox.value += " - ";
});

var divisionBtn = document.getElementById("division-sign");
divisionBtn.addEventListener("click", function () {
  inputBox.value += " / ";
});

var multiplicationBtn = document.getElementById("multiplication-sign");
multiplicationBtn.addEventListener("click", function () {
  inputBox.value += " * ";
});

var equationBtn = document.getElementById("equation-sign");
equationBtn.addEventListener("click", function () {
  var summation = eval(inputBox.value);
  inputBox.value = summation;
  // console.log(inputBox.value);
});

var clearBtn = document.getElementById("input-clear");
clearBtn.addEventListener("click", function () {
  inputBox.value = "";
});

document.body.addEventListener("keypress", function (e) {
  var keyCode = e.keyCode;
  if (keyCode === 13) {
    var summation = eval(inputBox.value);
    inputBox.value = summation;
  }
});
