'use strict';

// 1. store the element that says 'The King' in the 'king' variable.
//    console.log it.

const king = document.querySelector('.asteroid');
console.log('king',king);

//2. store 'The Businessman' and 'The Lamplighter'
//  in the 'businessLamp' variable.
//  console.log each of them.
let businessLamp = document.querySelectorAll('.big');
for (let i = 0; i < businessLamp.length; i++) {
  console.log('businessLamp', businessLamp[i]);
}

//3. store 'The King' and 'The Conceited Man'
//  in the 'conceitedKing' variable.
//  alert them one by one.
let conceitedKing = document.querySelectorAll('.container .asteroid');
console.log('concietedKing', conceitedKing);
for (let j = 0; j < conceitedKing.length; j++) {
  alert(conceitedKing[j].innerText);
}

//4. store 'The King', 'The Conceited Man' and 'The Lamplighter'
//in the 'noBusiness' variable.
//console.log each of them.
let noBusiness = document.querySelectorAll('.container .asteroid, div.b329');
console.log(noBusiness);
for (let k = 0; k < noBusiness.length; k++) {
  console.log('noBusiness', noBusiness[k]);
}