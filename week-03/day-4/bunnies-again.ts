'use strict';

/*
We have bunnies standing in a line numbered as 1, 2, ... 
The "odd" bunnies (1, 3, ...) have the usual number of ears = 2. 
However, the even bunnies (2, 4, ...) have 3 ears each (because they have a raised foot). 
Write a recursive method which accepts the number of bunnies as a parameter 
and returns the total number of "ears" in the bunny line. 
The method should be able to handle invalid input (e.g. negative numbers).
*/

function countMoreBunnyEars(numberOfBunny: number) : number {
    if (numberOfBunny === 0) {
      return numberOfBunny;
    }
    else if (numberOfBunny % 2 === 0) {
      return 3 + countMoreBunnyEars(numberOfBunny -1);
    }
    else {
        return 2 + countMoreBunnyEars(numberOfBunny -1);
    }
}

console.log('The ear count of 4 bunnies is: ' + countMoreBunnyEars(4)); // Output is 10 = 2 + 3 + 2 +3
console.log('The ear count of 0 bunnies is: ' + countMoreBunnyEars(0)); // Output is 0