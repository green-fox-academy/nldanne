'use strict';

// Create a method called decryptDoubled() that takes a filename as string as a parameter
// and it can decrypt the duplicated-chars.txt file
// Decryption is the process reversing an encryption, i.e. the process
// which converts encrypted data into its original form.
// If the file can't be opened it should return this message: File not found
// The result should be saved in the output.txt file

const fs = require('fs');

try {
    let result: string = decryptDoubled('duplicated-chars.txt');
    /*let output: string*/
    fs.writeFileSync('D:/greenfox/nldanne/week-03/day-02/single-chars.txt', result);
    fs.open('D:/greenfox/nldanne/week-03/day-02/single-chars.txt',  )
    

} catch {

}

function decryptDoubled(duplicateContent: string) {
    let newContent: string = '';
    let singleContent = fs.readFileSync(duplicateContent, 'utf8');

    for (var i=0; i< singleContent.length; i = i + 2) {
        if(singleContent[i] == '.') {
          newContent = newContent + singleContent[i] + '\n';
          //  console.log(singleContent[i]);
        }else {
          newContent = newContent + singleContent[i];
        }
      }
    return newContent;
}

//let result = decryptDoubled('duplicated-chars.txt');
//console.log(result);