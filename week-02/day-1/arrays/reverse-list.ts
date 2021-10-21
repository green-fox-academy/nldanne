'use strict';

// -  Create a variable named `numbers`
//    with the following content: `[3, 4, 5, 6, 7]`
// -  Reverse the order of the elements of `numbers`
// 	   -  do it with the built in method
//	   -  do it with creating a new temp array and a loop
// -  Print the elements of the reversed `numbers`

let number: number[] = [3, 4, 5, 6, 7];

// built in method
//number = number.reverse();
//console.log(number);

//a new temp array and a loop

let tempArr: number[] = [];

for(let i: number = 0; i < number.length; i++) {
    tempArr.unshift(number[i]);
}

console.log(tempArr);
