'use strict';

// Write a function that is able to manipulate a file
// by writing your name into it as a single line.
// The file should be named "my-file.txt".
// In case the program is unable to write the file,
// it should print the following error message: "Unable to write file: my-file.txt".

const fs = require('fs');

try {
    let result: string = writeLine('Anne', 'my-file.txt');

    if (typeof result === 'string') {
        console.log(result);
    } else {
        throw ('Unable to write file: my-file.txt');
    }

} catch (error) {
    console.log(error);
}

function writeLine(name: string, myfile: string) {
    let myFileContent = fs.readFileSync(myfile, 'utf8');
    fs.writeFileSync('my-file.txt', name);
    myFileContent = fs.readFileSync(myfile, 'utf8');

    return myFileContent;
}