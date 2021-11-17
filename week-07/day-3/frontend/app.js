'use strict';

const express = require('express');
const path = require('path');
const app = express();
const PORT = 8080;

app.use(express.json());
app.use(express.static('assets'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
  //res.send('OK!');
});


app.get(`/doubling`, function (req, res) {
  let number = req.query.input;
  let result = number*2;
  if(!number) {
    res.status(200).json({"error": "Please provide an input!"});
  } else {
    res.status(200).json({
      "received": Number(number),
      "result": result
    });
  }
});


app.get(`/greeter`, function (req, res) {
  let name = req.query.name;
  let title = req.query.title;

  if(!name && !title) {
    res.status(400).json({"error": "Please provide a name and a title!"});
  } else if(!name && title.length > 1) {
    res.status(400).json({"error": "Please provide a name!"});
  } else if (!title && name.length > 1) {
    res.status(400).json({"error": "Please provide a title!"});
  } else {
    res.status(200).json({"welcome_message": `Oh, hi there ${name}, my dear ${title}!`});
  }
});


app.get('/appenda/:appendable', function (req, res) {
  let toAppend = req.params.appendable;

  if(!toAppend) {
    res.status(404).json({"error": "define an appendable word"});
  } else {
    res.status(200).json({"appended": toAppend+"a"});
  }
});


app.post('/dountil/:operation', function (req, res) {
  let number = req.body.until;
  let operation = req.params.operation;
  
  if(!number) {
    res.status(400).json({"error": "Please provide a number!"});
    
  } else if (operation === "sum") {
    let sum = 0;
    for (let j = 1; j <= Number(number); j++) {
      sum += j;
    }
    res.status(200).json({"result": sum});

  } else if (operation === "factor") {
    let total = 1;
    for(let i = 2; i <= Number(number); i++) {
      total = total * i;
    }
    res.status(200).json({"result": total});
  }

})

app.listen(PORT, () => {
  console.log(`The server is up and running on ${PORT}`);
});