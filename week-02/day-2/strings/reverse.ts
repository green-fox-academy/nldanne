'use strict';
// Create a function that can reverse a string, which is passed as the parameter
// Use it on this reversed string to check it!

let toBeReversed: string = `.eslaf eb t'ndluow ecnetnes siht ,dehctiws erew eslaf dna eurt fo sgninaem eht fI`;

function reverse(string: string) :string {
    let newArr: string[] = string.split(' ').reverse(); // returns the reversed string array
    let newStr: string[] = [];
    let finalStr: string = '';

    // Goes through the array by index
    for (let i: number = 0; i < newArr.length; i++) {
        newStr = newArr[i].split('').reverse(); // splits each string in the array into letters and reverses it

        //Goes through each array element until the length of a string
        for (let j: number = 0; j < newStr.length; j++) {
            finalStr = newStr.join(''); // Adss all elements iinto a string
            //console.log(finalStr);
        }
       // finalStr = newArr.join('');
        newArr.splice(i, 1, finalStr);
        //console.log(finalStr);
    }
    //console.log(finalStr);
   return newArr.join(' ');
}
console.log(reverse(toBeReversed));

export = reverse;


/*
let finalStr: string = '';
finalStr = newStr.join('');
// newArr.splice(i, 1, finalStr);
console.log(finalStr);
*/