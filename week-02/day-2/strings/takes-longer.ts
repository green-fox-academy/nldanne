'use strict';
// While saving this quote, a disk error has occured. Please fix it!
// Insert the words "always takes longer than" between the words "It" and "you"!

let quote: string = `Hofstadter's Law: It you expect, even when you take into account Hofstadter's Law.`;
let index1: number = quote.indexOf('It')+2;

console.log(quote.substr(0, index1) + ' always takes longer than' + quote.substr(index1));