let currentScreen = document.querySelector(".operation"); //current operation (should just hold current number or resukt after operation calculation)

let resultContainer = document.querySelector(".result"); // shows ongoing calculation at all times

let numbersContainer = document.querySelector(".numbers"); // click event on  a number

let operationsContainer = document.querySelector(".operations"); // click event on + - / %

let currentNumber,
  calculatedNumber = 0;
let currentOperation, lastOperation;
let lastWasOperation = false;
numbersContainer.addEventListener("click", (v) => {
  // if (lastOperation == undefined) {
  currentScreen.innerText += v.target.innerText;
  currentNumber = +currentScreen.innerText;
  // } else {
  //   {
  //     currentScreen.innerText = v.target.innerText;
  //     currentNumber = +currentScreen.innerText;
  //   }
  //}
  if (lastWasOperation) {
    currentScreen.innerText = v.target.innerText;
    currentNumber = +currentScreen.innerText;
  }

  resultContainer.innerText += v.target.innerText;
  lastWasOperation = false;
});

operationsContainer.addEventListener("click", (v) => {
  lastWasOperation = true;
  currentOperation = v.target.innerText;
  resultContainer.innerText += " " + currentOperation;
  if (lastOperation != undefined) {
    switch (lastOperation) {
      case "+":
        calculatedNumber = calculatedNumber + currentNumber;

        break;
      case "-":
        calculatedNumber -= currentNumber;

        break;
      case "/":
        calculatedNumber /= currentNumber;

        break;
      case "*":
        calculatedNumber *= currentNumber;

        break;
    }
    currentNumber = calculatedNumber;
    currentScreen.innerText = calculatedNumber;
    resultContainer.innerText = currentNumber + currentOperation;
    lastOperation = currentOperation;

    console.log(calculatedNumber);
  } else {
    calculatedNumber = currentNumber;
    lastOperation = v.target.innerText;
  }

  console.log(
    "lastOperation" +
      lastOperation +
      "currentOperation" +
      currentOperation +
      "calculatedNumber" +
      calculatedNumber
  );
});
