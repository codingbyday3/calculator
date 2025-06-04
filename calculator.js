const numbersBtns = document.querySelectorAll(".digit")
const operatorsBtns = document.querySelectorAll(".operator")
const calculatorDisplay = document.querySelector(".calculator-display")

function main(){

  displayClickedButton()

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


main()