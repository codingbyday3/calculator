const numbersBtns = document.querySelectorAll(".digit")
const operatorsBtns = document.querySelectorAll(".operator")
const calculatorDisplay = document.querySelector(".calculator-display")
const equalBtn = document.querySelector("#equal-btn")
let firstNumber = ""
let secondNumber = ""
let operator = ""
let operatorCount = 0
let calculatorState = ""

function main(){

  displayClickedButton()
  handleEqualClick()
  handleClearClick()
  handleBackspaceClick()


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

function displayClickedButton(){
  numbersBtns.forEach((number) =>{
    number.addEventListener("click", () =>{
      if(calculatorState === "calculated"){
        clearDisplay()
        
      }
      calculatorDisplay.textContent += number.textContent
    })
    
  })

  operatorsBtns.forEach((operator) =>{
    operator.addEventListener("click", () =>{
      calculatorDisplay.textContent += operator.textContent
      calculatorState = ""
      
    })
  })
}

function sortValue(toCalculate){

  const opearators = ["+", "-", "/", "x"]
  firstNumber = "";
  secondNumber = "";
  operator = "";
  operatorCount = 0;


  for(let i = 0; i < toCalculate.length; i++){
    if(toCalculate[i] === "-" && i === 0){
      firstNumber += toCalculate[i]
      continue
    }
    if(opearators.includes(toCalculate[i])){
      if(operatorCount > 0 && i === toCalculate.length-1){
        calculate()
        break
      }else if(operatorCount > 0){
        alert("Only one operator can be used")
        clearDisplay()
        
        break
      }
      operator = toCalculate[i]
      operatorCount++

    }else if(operator !== ""){
      secondNumber += toCalculate[i]
    }else{
      firstNumber += toCalculate[i]
    }
  }


}

function handleEqualClick(){
  equalBtn.addEventListener("click", () =>{
    let toCalculate = calculatorDisplay.textContent.trim()
    sortValue(toCalculate)
    calculate()
    
  })
}

function calculate(){
  if(operator === "" || firstNumber === "" || secondNumber === ""){
    clearDisplay()
    alert("Inputed value is not in right format to calculate")
    return
  }
  finalResult = operate(
      operator,
      Number(firstNumber),
      Number(secondNumber)
  )
  if (isNaN(finalResult)){
    alert("Inputed value is not in right format to calculate")
    clearDisplay()
    return

  }
  finalResult = Math.round(finalResult)

  calculatorDisplay.textContent = finalResult
  calculatorState = "calculated"


  
}

function handleClearClick(){
  const clearBtn = document.querySelector("#clear")

  clearBtn.addEventListener("click", () =>{
    clearDisplay()
  })

}

function clearDisplay(){
  calculatorDisplay.textContent = ""
  firstNumber = ""
  secondNumber = ""
  operator = ""
  operatorCount = 0
 
  calculatorState = ""
}

function handleBackspaceClick(){
  const backspaceBtn = document.querySelector("#backspace")
  backspaceBtn.addEventListener("click", () =>{
    calculatorDisplay.textContent = calculatorDisplay.textContent.slice(0,-1)
  })
}




main()