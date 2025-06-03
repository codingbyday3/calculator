const calculatorDisplay = document.querySelector(".calculator-display")
let firstInputedDigits = ""
let inputedOperator = ""
let secondInputedDigits = ""
let operatorCount = 0
let calculation = false
let dotCount = 0


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
  const digitBtns = document.querySelectorAll(".digit")
  const operatorBtns = document.querySelectorAll(".operator")
  const equalBtn = document.querySelector("#equal-btn")
  const clearBtn = document.querySelector("#clear")

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


}

let handleOperatorClick = function (operator){
  if (operatorCount !== 0){
    displayCalculation()
  }else{
    operatorCount++
    calculatorDisplay.textContent += operator.textContent
    inputedOperator += operator.textContent
    dotCount = 0
  }
  
}

function handleDigitClick(digitBtn){
  if(dotCount > 0){
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

  }else if(calculation && inputedOperator === ""){
    
    firstInputedDigits = digitBtn.textContent
    calculation = false 
    calculatorDisplay.textContent = firstInputedDigits

  }else{
    
    if (firstInputedDigits === ""){
      clearDisplay()
      alert("Operator must come after first number")
    }else{

      if(digitBtn.textContent === ".") {
        dotCount++ 
      }
      secondInputedDigits += digitBtn.textContent
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
    )
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



main()