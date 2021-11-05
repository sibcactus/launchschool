const readSync = require('readline-sync');

function computeSum(num) {
  return num === 1 ? 1 : num + computeSum(num - 1);
}

function computeProduct(num) {
  return num === 2 ? 2 : num * computeProduct(num - 1);
}

let number = parseInt(readSync.prompt({prompt: 'Please enter an integer greater than 0: '}),10);

let operation;
do {
  operation = readSync.prompt({prompt: 'Enter "s" to compute the sum, or "p" to compute the product: '});
} while (!['s','p'].includes(operation));

let result = (operation === 's' ? computeSum(number) : computeProduct(number));
console.log(`Result of operation is: ${result}`);

