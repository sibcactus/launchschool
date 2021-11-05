//Isn't it Odd?
function isOdd(num) {
  return !!(num % 2);
}

console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
console.log(isOdd(-8)); // => false
console.log(isOdd(0)); // => false
console.log(isOdd(7)); // => true

//Odd Numbers
let odd = 1;
while (odd <= 99) {
  console.log(odd);
  odd += 2;
}

//even:
let even = 2;
while (even < 99) {
  console.log(even);
  even += 2;
}

//How big is the room?
const readlineSync = require('readline-sync');

const SQ_METERS_TO_SQ_FEET = 10.7639;

console.log('Enter the length of the room in meters:');
let length = Number(readlineSync.prompt({prompt: '> '}));

console.log('Enter the width of the room in meters:');
let width = Number(readlineSync.prompt({prompt: '> '}));

let squareMeters = length * width;
let squareFeet = squareMeters * SQ_METERS_TO_SQ_FEET;

console.log(`Area in sq meters: ${squareMeters}\nArea in sq feet: ${squareFeet}`);