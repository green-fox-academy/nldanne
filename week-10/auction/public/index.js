'use strict';

const ul = document.querySelector('ul');
const form = document.querySelector('form');
const select = document.querySelector('select');
const p = document.querySelector('p');


window.addEventListener('load', (event) => {
  event.preventDefault();

  fetch('http://localhost:3000/api/items')
    .then((response) => response.json())
    .then((data) => {

      data.forEach((element) => {
        let li = document.createElement('li');
        li.textContent = `${element.title} (highest bid: ${element.highestBid}, ${element.highestBidderName})`;
        ul.appendChild(li);

        let option = document.createElement('option');
        option.textContent = element.title;
        option.setAttribute('value', `${element.title}`);
        option.setAttribute('id', `${element.id}`);
        select.appendChild(option);
      });

    })
    .catch(error => {
      alert('Internal server error');
      console.log(error);
    })
});

//const valami = document.getElementById('1');
//console.log(valami);

//console.log(select);
//console.log(select.selectedIndex);

form.addEventListener('submit', (event) => {
  event.preventDefault();

  if(!form.bidderName.value || form.bidderName.value === '' || !form.amount.value || form.bidderName.value === '') {
    p.textContent = 'Please fill in the fields';
    return;
  }

  let index = document.querySelector('select').options.selectedIndex +1;

  fetch(`http://localhost:3000/api/items/:${index}/bids`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      bidderName: form.bidderName.value,
      amount: form.amount.value
    })
  })
  .then(response => response.json())
  .then(data => {

    if(data.message === "The auction is over!") {
      p.textContent = "The auction is over!";
      form.reset();
      return;
    } 

    if(data.message === "Your bid is below the highest bid!") {
      p.textContent === "Your bid is below the highest bid!";
      return;
    }

    if(data.message === 'Succesfull!') {
      form.reset();
      location.reload();
    }
  })
  .catch(error => {
    alert('Something went wrong');
    console.log(error);
  })
})
