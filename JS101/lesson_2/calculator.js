const rl = require('readline-sync');
const CONSTANTS = require('./calculator_props.json');

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

function getNumber(prompt) {
  let number = rl.prompt({prompt: prompt});
  if (invalidNumber(number)) {
    console.log(CONSTANTS.messages[CONSTANTS.lang].ERROR_INVALID_NUMBER);
    number = getNumber(prompt);
  }
  return number;
}

function getOpsList() {
  return CONSTANTS.OPERATIONS
    .map((element, idx) => `${idx}) ${element}`)
    .join('\n');
}

function getOperation() {

  let operation = rl.prompt(
    {
      prompt: `${CONSTANTS.messages[CONSTANTS.lang].ENTER_OPERATION}\n${getOpsList()}\n> `
    });

  if (!CONSTANTS.OPERATIONS.includes(operation)) {
    console.log(CONSTANTS.messages[CONSTANTS.lang].ERROR_INVALID_OPERATION);
    return getOperation();
  }
  return operation;
}

function calculate() {

  let number1 = getNumber(
    CONSTANTS.messages[CONSTANTS.lang].ENTER_FIRST_NUMBER);
  let number2 = getNumber(
    CONSTANTS.messages[CONSTANTS.lang].ENTER_SECOND_NUMBER);

  while (true) {
    let operation = getOperation();
    switch (operation) {
      case '0':
        return Number(number1) + Number(number2);
      case '1':
        return Number(number1) - Number(number2);
      case '2':
        return Number(number1) * Number(number2);
      case '3':
        return Number(number1) / Number(number2);
    }
    console.log(CONSTANTS.messages[CONSTANTS.lang].ERROR_INVALID_OPERATION);
  }
}

console.log(CONSTANTS.messages[CONSTANTS.lang].WELCOME);

while (true) {

  let result = calculate();
  console.log(`${CONSTANTS.messages[CONSTANTS.lang].RESULT_OF_OPERATION_IS} ${result}`);

  let keyIn = rl.keyIn(CONSTANTS.messages[CONSTANTS.lang].PRESS_C_TO_EXIT); //ask for exit
  if (keyIn.toLowerCase() === 'c') break;
}