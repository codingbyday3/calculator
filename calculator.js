function main(){
  firstInputedNum = ""
  secondInputedNumber = ""
  inputedOperator = ""

}

function operate(operator, firstNumber, secondNumber){
  switch(operator){
    case "+":
      addNumbers(firstNumber, secondNumber)

    case "-":
      substractNumbers(firstNumber, secondNumber)

    case "*":
      multiplyNumbers(firstNumber, secondNumber)
      
    case "/":
      divideNumbers(firstNumber, secondNumber)
  }
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

main()