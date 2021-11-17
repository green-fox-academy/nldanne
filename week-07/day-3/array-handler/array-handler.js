'use strict';

const { json } = require('express');
const express = require('express');
const app = express();

const PORT = 3000;
app.use(express.json());


app.post('/arrays', function(req, res) {
  let operation = req.body.what;
  let numberArr = req.body.numbers;

  if(!operation || !numberArr) {
    res.status(400).json({"error": "Please provide what to do with the numbers"});
  
  } else if(operation ==="sum") {
    let sum = 0;
    for (let i = 0; i < numberArr.length; i++) {
      sum += numberArr[i];
    }
    res.status(200).json({"result": sum});
  
  } else if (operation === "multiply") {
    let total = 1;
    for (let j = 0; j < numberArr.length; j++) {
      total = total* numberArr[j];
    }
    res.status(200).json({"result": total});

  } else if (operation === "double") {
    let multipliedArr = [];

    for(let k = 0; k < numberArr.length; k++) {
      let number = numberArr[k] *2;
      multipliedArr.push(number);
    }
    res.status(200).json({"result": multipliedArr});
  }
})


app.listen(PORT, () => {
  console.log(`The server is up and running on ${PORT}`);
});