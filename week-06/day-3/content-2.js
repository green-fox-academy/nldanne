'use strict';

// 1) replace the list items' content with items from this list:
// ['apple', 'banana', 'cat', 'dog']
let placeholderList = document.querySelectorAll('li');
//console.log(placeholderList);
let fruits = ['apple', 'banana', 'cat', 'dog'];

for (let i = 0; i < placeholderList.length; i++) {
  placeholderList[i].innerText = fruits[i];
}


// 2) change the <ul> element's background color to 'limegreen'
// - use css class to change the color instead of the style property
let ulElement = document.querySelector('ul');
ulElement.style.backgroundColor = 'limegreen';