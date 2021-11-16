'use strict';

const characterList = document.querySelector('.character-data');
const textSearch = document.querySelector('#character-name');
const button = document.querySelector('button');

button.onclick = () => {
  console.log(textSearch.value);
  fetch(`https://swapi.dev/api/people/?search=${textSearch.value}`) 
    .then(response => response.json())
    .then(body => {
      console.log(body.results);
 
          const li = document.createElement('li');
          li.textContent = body.results[0].name;
          characterList.appendChild(li);

          const movies = document.querySelector('.movie-list');
          li.onclick = () => {
          for (let i = 0; i < body.results[0].films.length; i++) {
            fetch(`${body.results[0].films[i]}`)
            .then(response => response.json())
            .then(data => {
              
              console.log(data.title, data.release_date);
              
                const li2 = document.createElement('li');
                li2.textContent = `${data.title} (${data.release_date})`
                movies.appendChild(li2);
              })
            }
          }
   
  
    });
}




