'use strict';

// Remove the king from the list.
const asteroids = document.querySelector('.asteroids');

const king = document.querySelector('li');
asteroids.removeChild(king);

// Fill the list based on the following list of objects.
// Only add the asteroids to the list.
// Each list item should have its category as a class and its content as text content

const planetData = [
  {
    category: 'inhabited',
    content: 'Foxes',
    asteroid: true,
  },
  {
    category: 'inhabited',
    content: 'Whales and Rabbits',
    asteroid: true,
  },
  {
    category: 'uninhabited',
    content: 'Baobabs and Roses',
    asteroid: true,
  },
  {
    category: 'inhabited',
    content: 'Giant monsters',
    asteroid: false,
  },
  {
    category: 'inhabited',
    content: 'Sheep',
    asteroid: true,
  },
];

for (let i = 0; i < planetData.length; i++) {
  if (planetData[i].asteroid === true) {
    let newListElement = document.createElement('li');
    newListElement.setAttribute('class', planetData[i].category);
    newListElement.textContent = planetData[i].content;
    asteroids.appendChild(newListElement);
  }
}