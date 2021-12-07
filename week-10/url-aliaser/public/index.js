'use strict';

const { response } = require("express");

const p = document.querySelector('#message');
const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  fetch('http://localhost:3000/api/links', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      url: form.url.value,
      alias: form.alias.value
    })
  })
  .then(response => {
    if(response.status === 400) {
      p.style.color = 'red';
    }

    if(response.status === 201) {
      p.style.color = 'blue';
    }

    return response.json();
  })
  .then(data => {
    if(data.message) {
      p.textContent = data.message;
      return;
    } else {
      p.innerHTML = `Your URL is aliased to <b>${data.alias}</b> and your secret code is <b>{${data.secretCode}.</b>`;
      form.reset();
    }
  })
  .catch(error => {
    p.textContent = 'Internal server error oopsy...';
  })

});