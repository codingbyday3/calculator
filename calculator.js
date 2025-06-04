const calculatorDisplay = document.querySelector(".calculator-display")
const backspaceBtn = document.querySelector("#backspace")
const digitBtns = document.querySelectorAll(".digit")
const operatorBtns = document.querySelectorAll(".operator")
const equalBtn = document.querySelector("#equal-btn")
const clearBtn = document.querySelector("#clear")
let firstInputedDigits = ""
let inputedOperator = ""
let secondInputedDigits = ""
let operatorCount = 0
let calculation = false
let dotCount = 0
let currentState = ""




function main(){
  firstInputedNum = ""
  secondInputedNumber = ""
  inputedOperator = ""

  displayClickedValue()
  handleKeyboardInput()

}

function addNumbers(num1, num2){
  return num1 + num2
}

function substractNumbers(num1, num2){
  return num1 - num2
}

function multiplyNumbers(num1, num2){
  return num1 * num2
}

function divideNumbers(num1, num2){

  return num1 / num2

}

function operate(operator, firstNumber, secondNumber){
  switch(operator){
    case "+":
      return addNumbers(firstNumber, secondNumber)

    case "-":
      return substractNumbers(firstNumber, secondNumber)

    case "x":
      return multiplyNumbers(firstNumber, secondNumber)

    case "/":
      if(secondNumber === 0){
        alert("You can't divide with zero")
       clearDisplay()
      }else{
        return divideNumbers(firstNumber, secondNumber)
      }
  }
}

function displayClickedValue(){

  operatorBtns.forEach((operator) =>{
    operator.addEventListener("click", () =>{
      handleOperatorClick(operator)
    })
  })

  digitBtns.forEach((digitBtn) =>{
    digitBtn.addEventListener("click", () =>{
      handleDigitClick(digitBtn)
      
    })
  })

  equalBtn.addEventListener("click", () =>{
    displayCalculation()
  })

  clearBtn.addEventListener("click", () =>{
    clearDisplay()
  })

  backspaceBtn.addEventListener("click", () =>{
    handleBackspaceBtn()
  })

}

let handleOperatorClick = function (operator){
  if (operatorCount !== 0){
    displayCalculation()
  }else{
    operatorCount++
    calculatorDisplay.textContent += operator.textContent
    inputedOperator += operator.textContent
    dotCount = 0
    currentState = "operator"
  }
  
}

function handleDigitClick(digitBtn){

  if(dotCount > 0 && digitBtn.textContent === "."){
    alert("There can be only one dot")
    dotCount = 0
    return;
  }
  calculatorDisplay.textContent += digitBtn.textContent
  if(inputedOperator === "" && !calculation){
    if(digitBtn.textContent === ".") {
      dotCount++ 
    }
    firstInputedDigits += digitBtn.textContent
    currentState = "first number"

  }else if(calculation && inputedOperator === ""){
    
    firstInputedDigits = digitBtn.textContent
    calculation = false 
    calculatorDisplay.textContent = firstInputedDigits
    currentState = "first number"

  }else{
    
    if (firstInputedDigits === ""){
      clearDisplay()
      alert("Operator must come after first number")
    }else{

      if(digitBtn.textContent === ".") {
        dotCount++ 
      }
      secondInputedDigits += digitBtn.textContent
      currentState = "second number"
    }
  }
  
}

function displayCalculation(){
  if(firstInputedDigits === "" || secondInputedDigits === "" || inputedOperator === ""){
    clearDisplay()
    alert("Inputed value is not in right form to calculate")
  }else{
    calculatorDisplay.textContent = operate(
    inputedOperator, 
    Number(firstInputedDigits), 
    Number(secondInputedDigits)
    ).toFixed(2)
    firstInputedDigits = calculatorDisplay.textContent
    inputedOperator = ""
    operatorCount = 0
    secondInputedDigits = ""
    dotCount = 0
    calculation = true
  }

}

function clearDisplay(){
  calculatorDisplay.textContent = ""
  inputedOperator = ""
  operatorCount = 0
  secondInputedDigits = ""
  firstInputedDigits = ""
  calculation = false
  dotCount = 0
}

function handleBackspaceBtn(){
  calculatorDisplay.textContent = calculatorDisplay.textContent.slice(0,-1)
  
  switch(currentState){
      
    case "first number":
      firstInputedDigits = firstInputedDigits.slice(0,-1)
      break
    case "operator":
      inputedOperator = inputedOperator.slice(0,-1)
      operatorCount = 0
      currentState = "first number"
      break
    case "second number":
      secondInputedDigits = secondInputedDigits.slice(0,-1)
      if(secondInputedDigits.length === 0){currentState = "operator"}
      break
  }

  if(calculatorDisplay.textContent[calculatorDisplay.textContent.length - 1] === "."){
    dotCount = 0
  }

}

function handleKeyboardInput(){

  calculatorDisplay.addEventListener("click", () =>{
    createInput()
  })
  
}

function createInput(){
  const keyboardInput = document.querySelector("#calculator-keyboard-input")
    if(!keyboardInput){
      const input = document.createElement("input")
      input.id = "calculator-keyboard-input"
      input.autocomplete = "off"
      calculatorDisplay.appendChild(input)
    }
    keyboardInput.focus()
}

main()