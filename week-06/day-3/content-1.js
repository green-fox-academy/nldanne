'use strict';

// 1. Append every paragraph with the last one's content.
let paragraphList = document.querySelectorAll('p');
for (let i = 1; i < paragraphList.length; i++) {
  paragraphList[i].innerText +=  ' ' + paragraphList[i-1].innerText;
}
console.log(paragraphList[0].innerText);
console.log(paragraphList[1].innerText);
console.log(paragraphList[2].innerText);
console.log(paragraphList[3].innerText);
