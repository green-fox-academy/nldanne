'use strict';

// - Create a function called `calculateFactorial()`
//   that returns the factorial of its input
// 0! = 1
// 1! = 1
// 2! = 1*2
// 3! = 1*2*3
function calculateFactorial(input: number) {
    let total: number = 1;

    if (input === 0 || input === 1) {
        return total;

    } else {
        for (let i: number = 1; i <= input; i++) {
            total = total * i;
        }
        return total;
    }
}

console.log(calculateFactorial(5));