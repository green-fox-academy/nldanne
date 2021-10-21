'use strict';

let myFinance: number[] = [500, 1000, 1250, 800, 120];

//How much did we spend?
let totalAmount: number = 0;
for (let i: number = 0; i < myFinance.length; i++) {
    totalAmount += myFinance[i];
}
console.log('I have spent ' + totalAmount + ' HUF this week.');


//Which was our greatest expense?
let biggest: number = 0;
let temp: number = 0;
for (let j: number = 0; j < myFinance.length; j++) {
    temp = myFinance[j];
    
    for (let k: number = 1; k < myFinance.length; k++) {
        if (temp < myFinance[k]) {
            temp = myFinance[k];
            biggest = temp;
        }
    }
    
}
console.log('The most that I have spent this week was ' + biggest + ' HUF.');


//Which was our cheapest spending?
let min: number = 0;
let temp2: number = 0;

for (let h: number = 0; h < myFinance.length; h++) {
    temp2 += myFinance[h];

    for (let g: number = 1; g < myFinance.length; g++) {
        if (temp2 < myFinance[g]) {
            temp2 = temp2
            min += temp2;
        } else {
            temp2 = myFinance[g];
            min = temp2;
        }
    }
}
console.log('My cheapest spending was ' + min + ' HUF.');


//What was the average amount of our spendings?
let counter: number = 0;
let sum: number = 0;

for (let m: number = 0; m < myFinance.length; m++) {
    sum += myFinance[m];
    counter++;
}

console.log('The average is: ' + sum/counter);