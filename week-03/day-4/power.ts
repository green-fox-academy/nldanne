'use strict';

/*
Given base and n that are both 1 or more, write a recursive method (no loops) 
which returns the value of base to the n-th power, so powerN(3, 2) is 9 (3 squared).


IN HERE

base => number
n => squaredBy
*/

function powerN(number: number, squaredBy: number) : number {
    if (number === 1 || squaredBy === 1) { // base case
        return number;
    }
    else {
        return number * powerN(number, squaredBy -1);
    }
}

console.log('The powerN(3,2) equals: ' + powerN(3,2)); // 9
console.log('The powerN(4,2) equals: ' + powerN(4,2)); // 16
console.log('The powerN(2,3) equals: ' + powerN(2,3)); // 8