'use strict';

let a: number = 3;
// make it bigger by 10
a = a * 10;  // OR 'a *= 10'
console.log(a);  // Prints: 30


let b: number = 100;
// make it smaller by 7
b -= 7;
console.log(b);  // Prints: 93


let c: number = 44;
// double c's value
c *= 2;
console.log(c);  // Prints: 88


let d: number = 125;
// divide d's value by 5
d /= 5;
console.log(d);  // Prints: 25


let e: number = 8;
// what's the cube of e's value?
e = e * e *e;
console.log(e);  //Prints: 512


let f1: number = 123;
let f2: number = 345;
// tell if f1 is bigger than f2 (as a boolean)
console.log('Is 123 bigger than 345?', f1 > f2);
//Prints: false, because 123 is smaller than 345


let g1: number = 350;
let g2: number = 200;
// tell if the double of g2 is bigger than g1 (pras a boolean)
console.log('Is 200*2 bigger than 350?',g2 * 2 > g1);
//Prints: true


let h: number = 1357988018575474;
// tell if 11 is a divisor of h (as a boolean)
console.log('Is 11 a divisor of', h + '?', h % 1 == 0);
//Prints: true


let i1: number = 10;
let i2: number = 3;
// tell if i1 is higher than i2 squared and smaller than i2 cubed (as a boolean)
var squared: number = i2 * i2;
var cubed: number = squared * i2;
console.log(i1 > squared && i1 < cubed);
// Prints: true


let j: number = 1521;
// tell if j is divisible by 3 or 5 (as a boolean)
console.log('Is', j, 'divisible by 3 or 5?', j % 3 === 0 && j % 5 === 0);
// Prints: false