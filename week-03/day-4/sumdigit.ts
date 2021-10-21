'use strict';

/*
Given a non-negative integer n, return the sum of its digits recursively (without loops).
*/

function sumDigits(number: number) : number {
    if (number === 0) { //base case
        return 0;
    } 
    else {
        return (number % 10 + sumDigits(Math.floor((number / 10))));
    }
}

console.log('The sum of 123 digit\s is: ' + sumDigits(123));  // Ouput is 6
console.log('The sum of 234 digit\s is: ' + sumDigits(234));  // Ouput is 9
console.log('The sum of 999 digit\s is: ' + sumDigits(999));  // Ouput is 27

console.log(123%10); // 3