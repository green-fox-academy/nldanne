'use strict';

// Write a program that opens a file called "my-file.txt" and prints
// each line from the file.
// If the program is unable to read the file (for example it does not exist),
// it should print the following error message: "Unable to read file: my-file.txt"

const fs = require('fs');

try {
    let fileContent: string = fs.readFileSync('my-file.txt', 'utf-8');
    console.log(fileContent);
} catch (error: any) {
    console.log('Unable to read file: my-file.txt');
}
