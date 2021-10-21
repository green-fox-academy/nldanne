'use strict';

/*
Given a string, write a recursive (no loops) method which returns a new string
 with all the lowercase 'x' chars changed to 'y' chars.
*/

function xReplaceY(string: string, letter: string) : string {
  if (string === '') {
    return '';
  }
  
  if (string.charAt(0) === letter) {
    return 'y' + xReplaceY(string.substr(1), letter);
  }
  else {
    return string.charAt(0) + xReplaceY(string.substr(1), letter);
  }
}

console.log(xReplaceY('hexxy', 'e'));
console.log(xReplaceY('hexxy', 'x'));
