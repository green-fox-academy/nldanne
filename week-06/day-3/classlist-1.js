'use strict';

// If the fourth p has a 'dolphin' class, replace apple's content with 'pear'
let pList = document.querySelectorAll('p');

if (pList[3].classList.contains('dolphin')) {
  let apple = document.querySelector('.apple');
  apple.innerText = 'pear';

} else {
  console.log('The 4th p has not dolphin class.');
}


//If the first p has an 'apple' class, replace cat's content with 'dog'
if (pList[0].classList.contains('apple')) {
  let cat = document.querySelector('.cat');
  cat.innerText = 'dog';
}


//Make apple red by adding a .red class
pList[0].setAttribute('class', 'red');
let ballon = document.querySelector('.balloon');
ballon.style.borderRadius = '10px';