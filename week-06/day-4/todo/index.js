'use strict';

const express = require('express');
const app = express();
const PORT = 3000;
const todos = ['get up', 'survive', 'go back to bed'];

// set the view engine to ejs
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  res.render('home', {todos});
});

// start express app on port 3000
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});