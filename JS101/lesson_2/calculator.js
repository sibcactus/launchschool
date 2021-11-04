//ask user for the first number
//ask user for the second number
//ask user for an operation to perform
//perform operation on the two numbers
//print the result to the terminal
const readline = require('readline-sync');

console.log("Welcome to Calculator!");

console.log('What\'s the first number?');
let number1 = readline.question();

console.log('What\s the second number?');
let number2 = readline.question();

console.log('What operation would you like to perform:\n1) Add 2) Subtract 3) Multiply 4) Divide');
let operation = readline.question();

let output;
switch(operation) {
  case 1:
    output = number1 + number2;
    break;
  case 2:
    output = number1 - number2;
    break;
  case 3:
    output = number1 * number2;
    break;
  case 4:
    output = number1 / number2;
    break;
  default:
    output = 'Wrong operation';
}

console.log(`The result is ${output}`);

