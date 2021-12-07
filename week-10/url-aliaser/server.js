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
  database: 'aliaser',
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

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

function randomNumberGenerator(length) {
  let random = '';
  for (let i = 0; i < length; i++) {
    let number = Math.floor(Math.random()* 10);  // random integer from 0 to 9
    random += number;
  }
  return Number(random);
};

app.get('/api/links', (req, res) => {
  conn.query('SELECT id, url, alias, hitCount FROM entries;', (err, rows) => {
    if (err) {
      res.status(500).json({message: 'Internal server error 5'});
      return;
    } 
    res.status(200).json(rows);
    //console.log(rows);
  });
});

app.post('/api/links', (req, res) => {

  if (!req.body.url || req.body.url === '' || !req.body.alias || req.body.alias === '') {
    res.status(400).json({message: 'Please fill all the fields'});
    return;
  } else {

      conn.query('SELECT * FROM entries WHERE alias = ?;', [req.body.alias], (err, result) => {
        if(err) {
          res.status(500).json({message: 'Internal server error 1'});
          return;
    
        } else if(result.length === 0) {
          let secretCode = randomNumberGenerator(4);
    
          conn.query('INSERT INTO entries (url, alias, secretCode) VALUES (?, ?, ?);', [req.body.url, req.body.alias, secretCode], (err, rows) => {
            if(err) {
              res.status(500).json({message: 'Internal server error 2'});
              return;
    
            } else {
              conn.query('SELECT * FROM entries WHERE id = ?;', [rows.insertId], (err, result) => {
                if(err) {
                  res.status(500).json({message: 'Internal server error 3'});
                  return;
                } else {
                  res.status(201).json(result[0]);
                }
              });
            }
          });
    
        } else {
          res.status(400).json({message: 'Your alias is already in use!'});
        }
    
      });
  }
});

app.get('/a/:alias', (req, res) => {

  if(!req.params.alias || req.params.alias === '') {
    res.status(400).json({message: 'Please provide an alias'});
    return;
  }

  conn.query('SELECT * FROM entries WHERE alias = ?', [req.params.alias], (err, result) => {
    if(err) {
      res.status(500).json({message: 'Interval server error 7'});
      return;

    } else if(result.length === 0) {
      res.status(404).json({message: `No entry was found with alias ${req.params.alias}`});
      return;

    } else {
      let hitCount = result[0].hitCount;
      hitCount = Number(hitCount)+1;

      conn.query(`UPDATE entries SET hitCount = ${hitCount} WHERE alias = ?;`, [req.params.alias], (err, rows) => {
        if(err) {
          res.status(500).json({message: 'Internal server error 10'});
          return;
        } else {

          res.redirect(301, result[0].url);
        }
      })
    }
  });
});

app.delete('/api/links/:id', (req, res) => {

  if(!id || isNaN(id) === true) {
    res.status(400).json({message: 'Please provide an id'});
    return;
  }
  let secretCode = req.body.secretCode;

  conn.query('SELECT secretCode FROM entries WHERE id = ?;', [req.params.id], (err, result) => {
    if(err) {
      res.status(500).json({message: 'Internal server error 6'});
      return;
    } else if (result.length === 0) {
      res.status(404).json({message: `No entry with id ${req.params.id}`});
      return;
    } else {
      if(Number(result[0]) === secretCode ) {
        res.status(403).json({message: 'Secretcode does not match your request'});
        return;
      } else {

        conn.query('DELETE FROM entries WHERE id = ?;' [req.params.id], (err, rows) => {
          if (err) {
            res.status(500).json({message: 'Internal server error 8'});
          } else {
            res.status(204).json({message: 'Entry has been deleted'});
          }
        });
      }
    }
  });

});