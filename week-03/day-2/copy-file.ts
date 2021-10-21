'use strict';

// Write a function that copies the contents of a file into another file
// It should take two filenames as parameters
// It should return a boolean that shows if the copy was successful
const fs = require('fs');


function copyFile(fileName1: string, fileName2: string) {
    try {
        const fs = require('fs');
        let myText = fs.readFileSync(fileName1, 'utf8');
        fs.writeFileSync(fileName2, fileName1);

        return true;
    } catch (error) {
        return false;
    }
}

let isSuccessful = copyFile('D:/greenfox/nldanne/week-03/day-2/my-file.txt', 'D:/greenfox/nldanne/week-03/day-2/copied-my-file.txt');
console.log(isSuccessful);