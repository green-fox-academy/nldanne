'use strict';

import { writeFileSync } from "fs";

// Create a function that takes 3 parameters: a path, a word and a number
// and is able to write into a file.
// - The path parameter should be a string that describes the location of the file you wish to modify.
// - The word parameter should also be a string that will be written to the file as individual lines.
// - The number parameter should describe how many lines the file should have.

// If the word is 'apple' and the number is 5, it should write 5 lines
// into the file and each line should read 'apple'.
// The function should not raise any errors if it could not write the file.

const fs = require('fs');

try {
    let textResult: string = writeMultipleLines('my-file.txt', 'pizza', 4);
    console.log(textResult);

} catch {

}

function writeMultipleLines(path: string, word: string, number: number) : string {
    let myFileContent = fs.readFileSync(path, 'utf-8');
    //let myWord: string[] = [];

    for (let i: number = 0; i < number; i++) {
       fs.appendFileSync(path, word + '\n');
    }

    //let final: string = myWord.join('\n');
    //fs.writeFileSync(path, final);
    myFileContent = fs.readFileSync(path, 'utf-8');
    return myFileContent;
}
