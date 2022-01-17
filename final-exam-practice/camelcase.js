/*
Example:
s = oneTwoThree
There are 3 words in a string: 'one', 'Two', 'Three'.
*/

function camelCase(string) {
  let counter = 1;

  for (let i = 0; i < string.length; i++) {
    if(string.charAt(i) === string.charAt(i).toUpperCase()) {
    counter++;
  }
 }
  return counter;
}
console.log(camelCase('oneTwoThree'));  // 3
console.log(camelCase('saveChangesInTheEditor'));  // 5
console.log(camelCase('clickClockMuckShockDockDuck'));  // 6


let string = 'hello';
console.log(string.charAt(0).toUpperCase());