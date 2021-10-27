'use strict';

// Create a method called decryptDoubled() that takes a filename as string as a parameter
// and it can decrypt the duplicated-chars.txt file
// Decryption is the process reversing an encryption, i.e. the process
// which converts encrypted data into its original form.
// If the file can't be opened it should return this message: File not found
// The result should be saved in the output.txt file

const fs = require('fs');

let myFile: string = 'duplicated-chars.txt';

function decryptDoubled(duplicateContent: string) {
  let single: string = '';
  let duplicated: string;
    
  try {
    duplicated = fs.readFileSync(duplicateContent, 'utf8');
  } catch {
    throw ('File not found');
  }

  for (var i=0; i< duplicated.length; i = i + 2) {
    single = single + duplicated[i];
  }

  fs.writeFileSync('output.txt', single);
  return single;
}

decryptDoubled(myFile);

//let result = decryptDoubled('duplicated-chars.txt');
//console.log(result);