'use strict';

 // - Create a two dimensional list dynamically with the following content.
 //   Note that a two dimensional list is often called matrix if every
 //   internal list has the same length.
 //   Use a loop!
 //
 //   1 0 0 0
 //   0 1 0 0
 //   0 0 1 0
 //   0 0 0 1
 //
 //   Its length should depend on a variable
 //  
 // - Print this two dimensional list to the output


let arrayLength: number = 4;
let multiArray: number[][] = [];

for (let i: number = 0; i < arrayLength; i++) {
    multiArray.push([]);
    let add: string = '';

    for (let j: number = 0; j < arrayLength; j++) {
        if (i === j) {
            multiArray[i][j] = 1;
            add += '1';
        } else {
            multiArray[i][j] = 0;
            add += '0';
        }
    }
    console.log(multiArray[i]);
    //console.log(add);
}

//console.log(multiArray);

