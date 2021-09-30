'use strict';

let currentHours: number = 14;
let currentMinutes: number = 34;
let currentSeconds: number = 42;

// Write a program that prints the remaining seconds (as an integer) from a
// day if the current time is represented by these variables
let daySum: number = 60 * 60 * 24;
let currentSum: number = (14 * 60 *60) + (30 * 60) + 42;

console.log(daySum - currentSum + ' seconds are remaining for today.');