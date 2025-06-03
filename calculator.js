const calculatorDisplay = document.querySelector(".calculator-display")
let firstInputedDigits = ""
let inputedOperator = ""
let secondInputedDigits = ""
let operatorCount = 0


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
    handleEqualClick()
  })

  clearBtn.addEventListener("click", () =>{
    handleClearClick()
  })


}

let handleOperatorClick = function (operator){
  if (operatorCount !== 0){
    handleEqualClick()
  }else{
    operatorCount++
    calculatorDisplay.textContent += operator.textContent
    inputedOperator += operator.textContent
  }
  
}

function handleDigitClick(digitBtn){
  calculatorDisplay.textContent += digitBtn.textContent
  if(inputedOperator === ""){
    firstInputedDigits += digitBtn.textContent  
  }else{
    
    if (firstInputedDigits === ""){
      handleClearClick()
      alert("Operator must come after first number")
    }else{
      secondInputedDigits += digitBtn.textContent
    }
  }
}

function handleEqualClick(){
  if(firstInputedDigits === "" || secondInputedDigits === "" || inputedOperator === ""){
    handleClearClick()
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
  }

}

function handleClearClick(){
  calculatorDisplay.textContent = ""
  inputedOperator = ""
  operatorCount = 0
  secondInputedDigits = ""
  firstInputedDigits = ""
}



main()