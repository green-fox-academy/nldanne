'use strict';

/*

    Write a function, that takes a string as an argument and returns a dictionary with all letters in the string as keys, and numbers as values that shows how many occurrences there are.
    Create a test for that.

*/
export function printDictionary(myword: string) : any{
  let dictionary: any = {};
  let character: string = '';
  
  //Loop through the word
  for (let i: number = 0; i < myword.length; i++) {
    character = myword.charAt(i);
    //checking if the characther exists
    if(dictionary[character]) {
      dictionary[character]++;
    }
    else {
      dictionary[character] = 1;
    }
  }
  return dictionary;
}
/*
let myDictionary = printDictionary('hello');
console.log(myDictionary);
*/