'use strict';

import { constants } from "buffer";
import { count } from "console";

// Write a function called countLines() that takes a filename as string as a parameter
// and returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error.

const fs = require('fs');

try {
    let result: number = countLines('my-file.txt');
    if (typeof(result) == 'number') {
        console.log(result);
    }

} catch {
    console.log(0);

} finally {

}

function countLines(filename: string) :any {
    let myFileContent: string = fs.readFileSync(filename, 'utf-8');
    let lineArr: string[] = myFileContent.split('\n');
    let lineCount: number = lineArr.length;

    return lineCount;
    //console.log(lineCount);
}