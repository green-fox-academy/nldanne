'use strict';

let a: number = 24;
let output1: number = 0;

// if a is even increment output1 by one
if (a % 2 ==0) {
    console.log(++output1);
} else {
    console.log(output1);
}
//Prints: 1 because the number a = 24 is an even number



let b: number = 13;
let output2: string = '';

// if b is between 10 and 20 set output2 to "Sweet!"
// if less than 10 set output2 to "Less!",
// if more than 20 set output2 to "More!"
if (b >= 20) {
    output2 = 'More!';
    console.log(output2);
} else if (b > 10 && b < 20){
    output2 = 'Sweet!';
    console.log(output2);
} else {
    output2 = 'Less!';
    console.log(output2);
}
// Prints: Sweet!



let c: number = 123;
let credits: number = 100;
let isBonus: boolean = false;

// if credits are at least 50,
// and is_bonus is false decrement c by 2
// if credits are smaller than 50,
// and is_bonus is false decrement c by 1
// if is_bonus is true c should remain the same
if (credits >= 50 && isBonus == false) {
    c -= 2;
    console.log(c);
} else if (credits < 50 && isBonus == false){
    c--;
    console.log(c);
} else {
    console.log(c);
}
// Prints: 121



let d: number =  8;
let time: number = 120;
let output3: string = '';

// if d is dividable by 4
// and time is not more than 200
// set output3 to "check"
// if time is more than 200
// set output3 to "Time out"
// otherwise set output3 to "Run Forest Run!"
if (d % 4 == 0 && time <= 200) {
    output3 = 'check';
    console.log(output3);
} else if (time > 200) {
    output3 = 'Time out!';
    console.log(output3);
} else {
    output3 = 'Run Forest, Run!';
    console.log(output3);
}
// Prints: check



