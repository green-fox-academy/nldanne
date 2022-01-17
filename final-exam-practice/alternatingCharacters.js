/*
You are given a string containing characters 'A' and 'B' only. 
Your task is to change it into a string such that there are no matching adjacent characters. 
To do this, you are allowed to delete zero or more characters in the string.

Your task is to find the minimum number of required deletions.
*/

/*
Function Description:

alternatingCharacters has the following parameter(s):
    string s: a string

Returns
    int: the minimum number of deletions required
*/

function alternatingCharacters(s) {
  let deleteCount = 0;
  for(let i = 0; i < s.length; i++) {
      if(s[i] === s[i+1]) {  // if two adjecent characters are the same
          deleteCount++;    // then increment deleteCount by 1
      }
  }
  return deleteCount;
}

let s1 = 'AAAA';
let s2 = 'BBBBB';
let s3 = 'ABABABAB';
let s4 = 'BABABA';
let s5 = 'AAABBB';

console.log(alternatingCharacters(s1));   // 3
console.log(alternatingCharacters(s2));   // 4
console.log(alternatingCharacters(s3));   // 0
console.log(alternatingCharacters(s4));   // 0
console.log(alternatingCharacters(s5));   // 4


