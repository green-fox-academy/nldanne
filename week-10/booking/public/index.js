'use strict';

const p = document.querySelector('p');
const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  let firstname = form.firstName.value;
  let lastname = form.lastName.value;
  let passportnumber = form.passportNumber.value;


  fetch(`http://localhost:3000/api/booking`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        firstName: firstname,
        lastName: lastname,
        passportNumber: passportnumber
      })
  })
  .then(response => response.json())
  .then(data => {
    if(err) {
      p.textContent = data.message;
    } else {
      p.textContent = `Succesfull booking. Your booking reference is ${data.bookingReference}.`;
    }
  })
  .catch(error => {
    alert('Something went wrong please try again later');
    console.log(error);
  })
});