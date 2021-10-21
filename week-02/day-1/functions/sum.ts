'use strict';

// Write a function called `sum()` that returns the sum of numbers 
//from zero to the given parameter

function sum(number: number) {
    let total: number = 0;

    for (let i: number = 0; i <= number; i++) {
        total += i;
    }
    return total;
}

console.log(sum(10));