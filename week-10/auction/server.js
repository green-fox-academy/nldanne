'use strict';

const mysql = require('mysql');
const express = require('express');
const app = express();

app.use(express.json());
app.use(express.static('public'));

const PORT = 3000;

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'auction',
});

conn.connect((error) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log('Successfully connected to Database');
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.post('/api/items/:id/bids', (req, res) => {
  if(!req.body.bidderName || !req.body.amount) {
    res.status(400).json({message: 'please fill out all the fields'});
    return;
  }

  if(!req.params.id) {
    res.status(400).json({message: 'Please select an option'});
    return;
  }


  conn.query('SELECT * FROM stuffs WHERE DATE(expirydate) > CURDATE() AND id = ?', [req.params.id], (err, result) => {
    if(err) {
      res.status(500).json({message: 'Internal server error'});
      return;
    } else if (result.length === 0) {
      res.status(400).json({message: "The auction is over!"});
      return;
    } else {
      if(req.body.amount <= result[0].highestBid) {
        res.json(400).json({message: "Your bid is below the highest bid!"});
        return;
      } else {
        conn.query('UPDATE stuffs SET highestBid = ?, highestBidderName = ? WHERE id = ?', [req.body.amount, req.body.bidderName, req.params.id], (err, rows) => {
          if(err) {
            res.status(500).json({message: 'Internal server error'});
            return;
          } else {
            res.status(201).json({message: 'Succesfull!'});
          }
        });
      }
    }
  });
});

app.get('/api/items', (req, res) => {
  conn.query('SELECT * FROM stuffs; ', (err, result) => {
    if(err) {
      res.status(500).json({message: 'Internal server error'});
      return;
    } else {
      res.status(200).json(result);
    }
  })
});

app.listen(PORT, () => console.log('Server running on port' + PORT));