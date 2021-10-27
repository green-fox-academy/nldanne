'use strict';

// Create a method that decrypts reversed-order.txt

const fs = require('fs');
let myFile: string = 'reversed-order.txt';

function reverseOrder(filename: string) {
  let toReverse: string = fs.readFileSync(filename, 'utf8');
  let toArray: string[] = [];
  let result: string = '';

  toArray = toReverse.split('\n').reverse();
  result = result + toArray.join('');
  fs.writeFileSync('reversed-order-output.txt', result);
  console.log(result);
}

reverseOrder(myFile);