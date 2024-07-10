let currentScreen = document.querySelector(".operation"); //current operation (should just hold current number or resukt after operation calculation)

let resultScreen = document.querySelector(".result"); // shows ongoing calculation at all times

let numbersContainer = document.querySelector(".numbers"); // click event on  a number

let operationsContainer = document.querySelector(".operations"); // click event on + - / %

let deleteOneContainer = document.querySelector(".deleteOne"); // teh button that deletes on char



let currentNumber,
  calculatedNumber = 0;
let currentOperation, lastOperation;
let lastWasOperation = false;
numbersContainer.addEventListener("click", (v) => {
  currentScreen.innerText += v.target.innerText;
  currentNumber = +currentScreen.innerText;
 
  if (lastWasOperation) {
    currentScreen.innerText = v.target.innerText;
    currentNumber = +currentScreen.innerText;
  }

  resultScreen.innerText += v.target.innerText;
  lastWasOperation = false;
});

operationsContainer.addEventListener("click", (v) => {
  lastWasOperation = true;
  currentOperation = v.target.innerText;
  resultScreen.innerText += " " + currentOperation;
  if (lastOperation != undefined ) {
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
    resultScreen.innerText = currentNumber + (currentOperation!="="?currentOperation:"");
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



deleteOneContainer.addEventListener("click",(event)=>{
  if(lastWasOperation){ lastOperation=undefined;}
  else {
    currentScreen.innerText =currentScreen.innerText.slice(0, -1)
    currentNumber=Math.floor(currentNumber/10);
  }

  resultScreen.innerText=resultScreen.innerText.slice(0, -1);

  
})