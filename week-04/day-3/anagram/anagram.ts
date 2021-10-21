'use strict';

export function isAnagram(string1?: string, string2?: string) : boolean{
  let myWord: string = string1 ?? '';
  let otherWord: string = string2 ?? '';
  
  let str1 = myWord.split('').sort().join('');
  let str2 = otherWord.split('').sort().join('');

  if(myWord.length !== otherWord.length) {
    return false;
  }

  if (str1 === str2 && str1.length > 1 && str2.length > 1) {
    return true;
  } else {
    return false;
  }
 }
/*
let isIt = isAnagram('apple', 'appel');
console.log(isIt);

let isItTwo = isAnagram('kiwis', 'appel');
console.log(isItTwo);

let isItThree = isAnagram();
console.log(isItThree);

let isItFour = isAnagram('hello');
console.log(isItThree);
*/
