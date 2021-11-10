'use strict';

// Add an item that says 'The Green Fox' to the asteroid list.
const asteroidList = document.querySelector('ul');

const greenFox = document.createElement('li');
greenFox.textContent = 'The Green Fox';
asteroidList.appendChild(greenFox);

// Add an item that says 'The Lamplighter' to the asteroid list.
const lampLighter = document.createElement('li');
lampLighter.textContent = 'The LampLighter';
asteroidList.appendChild(lampLighter);

// Add a heading saying 'I can add elements to the DOM!' to the .container.
const container = document.querySelector('.container');

const heading = document.createElement('h2');
heading.textContent = 'I can add elements to the DOM!';
container.appendChild(heading);

//Add an image, any image, to the container.
const img = document.createElement('img');
img.setAttribute('src', 'https://img.freepik.com/vrije-vector/vliegende-plak-van-pizza-cartoon-vectorillustratie-fast-food-concept-geisoleerde-vector-flat-cartoon-stijl_138676-1934.jpg?size=338&ext=jpg');
container.appendChild(img);