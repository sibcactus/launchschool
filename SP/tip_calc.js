const readSync = require('readline-sync');

let bill = Number(readSync.prompt({prompt: 'What is the bill? > '}));
let tipPercent = Number(readSync.prompt({prompt: 'What is the tip percentage? > '}));

let tip = (bill * tipPercent / 100);
let total = bill + tip;

console.log(`The tip is $${tip.toFixed(2)}`);
console.log(`The total is $${total.toFixed(2)}`);