'use strict';

let massInKg: number = 81.2;
let heightInM: number = 1.78;

// Print the Body mass index (BMI) based on these values
//Formula is: BMI = kg/m2
console.log('The body mass index is: ', (massInKg / (heightInM * heightInM)).toFixed(2));
// Prints: The body mass index is:  25.63
