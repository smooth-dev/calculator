let currentScreen = document.querySelector(".operation"); //current operation (holds current number or result after operation calculation)

let resultScreen = document.querySelector(".result"); // shows ongoing calculation at all times

let numbersContainer = document.querySelector(".numbers"); // click event on  a number

let operationsContainer = document.querySelector(".operations"); // click event on + - / %

let deleteOneContainer = document.querySelector(".deleteOne"); // deletes one char

let deleteAllContainer = document.querySelector(".deleteAll"); //  deletes all

let cursorElement = document.getElementById("cursor"); // blinking cursor

// blinking cursor animation
setInterval(() => {
  if (cursorElement.style.visibility === "hidden") {
    cursorElement.style.visibility = "visible";
  } else {
    cursorElement.style.visibility = "hidden";
  }
}, 500);

let currentNumber,
  calculatedNumber = 0;
let currentOperation, lastOperation;
let lastWasOperation = false; // last clicked button was / x + -

numbersContainer.addEventListener("click", (v) => {
  if (v.target.innerText.length > 1) return; // in case click on the container instead of a button (which would trigger all numbers at once)
  currentScreen.innerText += v.target.innerText;
  currentNumber = +currentScreen.innerText;

  if (lastWasOperation) {
    currentScreen.innerText = v.target.innerText;
    currentNumber = +currentScreen.innerText;
  }

  resultScreen.childNodes[0].nodeValue += v.target.innerText;
  lastWasOperation = false;
});

operationsContainer.addEventListener("click", (v) => {
  lastWasOperation = true;
  currentOperation = v.target.innerText;
  resultScreen.childNodes[0].nodeValue += " " + currentOperation;
  if (lastOperation != undefined) {
    switch (lastOperation) {
      case "+":
        calculatedNumber += currentNumber;

        break;
      case "-":
        calculatedNumber -= currentNumber;

        break;
      case "/":
        calculatedNumber /= currentNumber;

        break;
      case "x":
        calculatedNumber *= currentNumber;

        break;
    }
    currentNumber = calculatedNumber;
    currentScreen.innerText = calculatedNumber;
    resultScreen.childNodes[0].nodeValue =
      currentNumber + (currentOperation != "=" ? currentOperation : "");
    lastOperation = currentOperation;
  } else {
    calculatedNumber = currentNumber;
    lastOperation = v.target.innerText;
  }
});

deleteOneContainer.addEventListener("click", (event) => {
  if (lastWasOperation) {
    lastOperation = undefined;
    lastWasOperation = false;
  } else {
    currentScreen.innerText = currentScreen.innerText.slice(0, -1);
    currentNumber = Math.floor(currentNumber / 10);
  }

  resultScreen.childNodes[0].nodeValue =
    resultScreen.childNodes[0].nodeValue.slice(0, -1);
});

deleteAllContainer.addEventListener("click", (event) => {
  resultScreen.childNodes[0].nodeValue = "";
  currentScreen.innerText = "";
  currentNumber = "";
  currentOperation = "";
  lastOperation = undefined;
});
