/*
Given two strings, determine if they share a common substring. 
A substring may be as small as one character. 
*/

/*
Example 1:
s1 = 'and';
s2 = 'art;
These share the common substring of 'a'
*/

/*
Example 2:
s1 = 'be';
s2 = 'cat;
These do not share a substring;
*/

function twoStrings(string1, string2) {
  for (let i = 0; i < string1.length; i++) {
    for (let j = 0; j < string2.length; j++) {
      if (string1.charAt(i) === string2.charAt(j)){
        return 'YES';
      }
    }
  }
  return 'NO';
}

console.log(twoStrings('cat', 'bat'));