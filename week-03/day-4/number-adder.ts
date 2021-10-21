'use strict';

/*
Write a recursive function that takes one parameter: n 
and returns the sum of numbers (integers) from 1 to n. 
The function should return 0 for inputs less than 1.
*/

function sumNumbers(number: number) : number {
    if (number <= 1) {
        return 1;
    }
    else {
        return number + sumNumbers(number - 1);
    }
}

console.log('Numbers added from 1 to 2 equals: ' + sumNumbers(2)); // output 3
console.log('Numbers added from 1 to 3 equals: ' + sumNumbers(3)); // output 6
console.log('Numbers added from 1 to 4 equals: ' + sumNumbers(4)); // output 10

