'use strict';
// Add "My todo:" to the beginning of the todoText
// Add " - Download games" to the end of the todoText
// Add " - Diablo" to the end of the todoText applying indention

// Expected output:

// My todo:
//  - Buy milk
//  - Download games
//      - Diablo

let todoText: string = ' - Buy milk\n';
todoText = todoText.substr(0,0) + 'My todo\n' + todoText.substr(0);
todoText += ' - Download games\n';
//todoText += '\t- Diablo';
todoText += '\xa0\xa0' + ' - Diablo';

console.log(todoText);