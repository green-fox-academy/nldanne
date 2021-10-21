'use strict';

/*
We have a number of bunnies and each bunny has two big floppy ears. 
Write a recursive method (no loops or multiplication) which takes the 
number of bunnies as its sole parameter and returns the total number 
of ears the bunnies have. The method should be able to handle 
invalid input (e.g. negative numbers)
*/

function countEars(numberOfBunnies: number) : number {
    if (numberOfBunnies === 0) {
        return 0;
    }
    else {
        return 2 + countEars(numberOfBunnies -1);
    }
}

console.log('3 bunnies have: ' + countEars(3) + ' ears.');  // Output 6
console.log('9 bunnies have: ' + countEars(9) + ' ears.');  // Output 18
console.log('0 bunnies have: ' + countEars(0) + ' ears.');  // Output 0