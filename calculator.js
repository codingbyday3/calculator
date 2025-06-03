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
      return divideNumbers(firstNumber, secondNumber)
  }
}

function displayClickedValue(){
  const digitBtns = document.querySelectorAll(".digit")
  const calculatorDisplay = document.querySelector(".calculator-display")
  const operatorBtns = document.querySelectorAll(".operator")
  const equalBtn = document.querySelector("#equal-btn")
  let firstInputedDigits = ""
  let inputedOperator = ""
  let secondInputedDigits = ""

  operatorBtns.forEach((operator) =>{
    operator.addEventListener("click", () =>{
      calculatorDisplay.textContent += operator.textContent
      inputedOperator += operator.textContent
    })
  })

  digitBtns.forEach((digitBtn) =>{
    digitBtn.addEventListener("click", () =>{
      calculatorDisplay.textContent += digitBtn.textContent
      if(inputedOperator === ""){
        firstInputedDigits += digitBtn.textContent  
      }else{
        secondInputedDigits += digitBtn.textContent
      }
      
    })
  })

  equalBtn.addEventListener("click", () =>{
    calculatorDisplay.textContent = operate(inputedOperator, Number(firstInputedDigits), Number(secondInputedDigits))
    firstInputedDigits = calculatorDisplay.textContent
    inputedOperator = ""
    secondInputedDigits = ""
  })


}




main()