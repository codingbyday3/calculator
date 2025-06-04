const numbersBtns = document.querySelectorAll(".digit")
const operatorsBtns = document.querySelectorAll(".operator")
const calculatorDisplay = document.querySelector(".calculator-display")
const equalBtn = document.querySelector("#equal-btn")
let firstNumber = ""
let secondNumber = ""
let operator = ""
let operatorCount = 0

function main(){

  displayClickedButton()
  handleEqualClick()
  handleClearClick()

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
      calculatorDisplay.textContent += number.textContent

    })
    
  })

  operatorsBtns.forEach((operator) =>{
    operator.addEventListener("click", () =>{
      calculatorDisplay.textContent += operator.textContent
    })
  })
}

function sortDisplayedValue(){
  let toCalculate = calculatorDisplay.textContent.trim()
  //console.log(toCalculate, toCalculate.length)
  const opearators = ["+", "-", "/", "x"]
  firstNumber = "";
  secondNumber = "";
  operator = "";
  operatorCount = 0;

  for(let i = 0; i < toCalculate.length; i++){
    if(opearators.includes(toCalculate[i])){
      console.log(i, toCalculate[i])
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
    sortDisplayedValue()
    calculate()
    
  })
}

function calculate(){
  if(operator === "" || firstNumber === "" || secondNumber === ""){
    clearDisplay()
    alert("Inputed value is not in right format to calculate")
    
  }
  finalResult = operate(
      operator,
      Number(firstNumber),
      Number(secondNumber)
  )

  calculatorDisplay.textContent = finalResult

  
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
}

main()