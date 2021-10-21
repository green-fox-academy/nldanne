'use strict';

/*
Given a string, write a recursive (no loops) method which returns a new string
 with all the lowercase 'x' chars removed.
*/

function removeX(string: string, length: number) : string {
  if (string === '') {
    return '';
  }

  if (string.charAt(length-1) === 'x') {
    let newString: string = string.split('');
    newString.slice(length, 1);

    return  
  }
}