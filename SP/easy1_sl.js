const readlineSync = require('readline-sync');

function shortLongShort(str1, str2) {
  return (str1.length < str2.length) ?
    (str1 + str2 + str1) : (str2 + str1 + str2);
}

let str1 = readlineSync.prompt({prompt: "Enter the first line > "});
let str2 = readlineSync.prompt({prompt: "Enter the second line > "});
console.log(shortLongShort(str1, str2));