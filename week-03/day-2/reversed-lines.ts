'use stric';
// Create a method that decrypts reversed-lines.txt

const fs = require('fs');
let myFile: string = 'reversed-lines.txt';
function reverseLines(filename: string) {
  let reversedContent: string = '';
  let toReverse: string = '';
  let toReverseArray: string[] = [];

  try { 
    toReverse = fs.readFileSync(filename, 'utf8');
  } catch {
    throw('File not found');
  }

  toReverseArray = toReverse.split('\n');
  for (let i: number = 0; i < toReverseArray.length; i++) {
    reversedContent += toReverseArray[i].split('').reverse().join('');
  }
  console.log(reversedContent);
  fs.writeFileSync('reversed-output.txt', reversedContent);
  
}

reverseLines(myFile);