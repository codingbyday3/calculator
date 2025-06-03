const calculatorDisplay = document.querySelector(".calculator-display")
let firstInputedDigits = ""
let inputedOperator = ""
let secondInputedDigits = ""


function main(){
  firstInputedNum = ""
  secondInputedNumber = ""
  inputedOperator = ""

  displayClickedValue()

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
      return Math.round(addNumbers(firstNumber, secondNumber))

    case "-":
      return Math.round(substractNumbers(firstNumber, secondNumber))

    case "x":
      return Math.round(multiplyNumbers(firstNumber, secondNumber))

    case "/":
      return Math.round(divideNumbers(firstNumber, secondNumber))
  }
}

function displayClickedValue(){
  const digitBtns = document.querySelectorAll(".digit")
  const operatorBtns = document.querySelectorAll(".operator")
  const equalBtn = document.querySelector("#equal-btn")

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
    handleEqualClick()
  })

  


}

let handleOperatorClick = function (operator){
  calculatorDisplay.textContent += operator.textContent
  inputedOperator += operator.textContent
}

function handleDigitClick(digitBtn){
  calculatorDisplay.textContent += digitBtn.textContent
  if(inputedOperator === ""){
    firstInputedDigits += digitBtn.textContent  
  }else{
    secondInputedDigits += digitBtn.textContent
  }
}

function handleEqualClick(){
  calculatorDisplay.textContent = operate(
    inputedOperator, 
    Number(firstInputedDigits), 
    Number(secondInputedDigits)
  )
  firstInputedDigits = calculatorDisplay.textContent
  inputedOperator = ""
  secondInputedDigits = ""
}





main()