'use strict';

// Write the image's url to the console.
let imgUrl = document.querySelector('img');
console.log('original URL:', imgUrl.getAttribute('src'));

//Replace the image with a picture of your favorite animal.
imgUrl.setAttribute('src', 'https://img.freepik.com/free-vector/cute-corgi-puppy-cartoon-icon_42750-299.jpg?size=338&ext=jpg');

//Make the link point to the Green Fox Academy website.
let link = document.querySelector('a');
link.setAttribute('href', 'https://www.greenfoxacademy.com/');

//Disable the second button.
const button = document.querySelector('.this-one');
button.disabled = true;
button.innerText = 'Don\'t click me!';