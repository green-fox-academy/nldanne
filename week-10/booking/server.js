'use strict';

const mysql = require('mysql');
const express = require('express');
const app = express();

const PORT = 3000;

app.use(express.json());
app.use(express.static('public'));

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'flightBooking',
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

app.get('/manage-booking', (req, res) => {

});

function bookingReferenceGenerator(length) {
	let result = '';
	let chars = 'ABCDEFGHIJKLMNOPQRSTUWXYZ';
	let charsLength = chars.length

	for(let i = 0; i < length; i++) {
		result += chars.charAt(Math.floor(Math.random() * charsLength))
	}
	return result;
}


app.post('/api/booking', (req, res) => {

  if(!req.body.firstName || req.body.firstName === '' || isNaN(req.body.firstName) === true || !req.body.lastName || req.body.lastName === '' || isNaN(req.body.lastName) === true || !req.body.passportNumber || req.body.passportNumber === '') {
    res.status(400).json({message: 'Please fill out all the fields with the correct information'});
    return;
  }

  conn.query('SELECT * FROM booking WHERE passportNumber = ?;', [req.body.passportNumber], (err, result) => {
    if(err) {
      res.status(500).json({message: 'Internal server error'});
      return;
    } else if (result.length === 0) {
      let bookingReference = bookingReferenceGenerator(6);

      conn.query('INSERT INTO booking (firstName, lastName, passportNumber, bookingReference) VALUES (?, ?, ?, ?);', [req.body.firstName, req.body.lastname, req.body.passportNumber, bookingReference], (err, rows) => {
        if (err) {
            res.status(500).json({message: 'Internal serverv error'});
          return;
        } else {
            conn.query('SELECT bookingReference FROM booking wHERE id = ?,', [rows.insertId], (err, result) => {
              if (err) {
                res.status(500).json({message: 'Internal server error'});
                return;
              } else {
                res.status(201).json(result[0]);
              }
            });
        }
      });
    } else {
      res.status(400).json({message: 'Passport number already used'});
    }
  })
});



app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
