'use strict';

const form = document.querySelector('form');
const div = document.querySelector('div');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  fetch(`http://localhost:3000/api/booking?lastName=${form.lastName.value}&bookingReference${form.bookingReference.value}`)
  .then(response => response.json())
  .then(data => {

    if(data.message) {
      let p = document.createElement('p');
      p.textContent = data.message;
      return;
    } else {

      let p1 = document.createElement('p');
      p1.textContent= 'First name: ' + data.firstName;
  
      let p2 = document.createElement('p');
      p2.textContent = 'Last name: ' + data.lastName;
  
      let p3 = document.createElement('p');
      p3.textContent = 'Passport number: ' + data.passportNumber;
  
      div.appendChild(p1);
      div.appendChild(p2);
      div.appendChild(p3);
    }
  })
  .catch(error => {
    alert('Something went wrong');
    console.log(error);
  })
})