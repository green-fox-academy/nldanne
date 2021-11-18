'use strict';
const mysql = require('mysql');
const express = require('express');
const app = express();

app.use(express.json()); // body parser

const PORT = 3000;

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'bookstore',
});

app.listen(PORT, () => console.log(`Server running at PORT ${PORT}`));

conn.connect((error) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log('Successfully connected to Database');
  //conn.end();
});

app.get('/books', (req, res) => {
  const SQL_QUERY_ALL = `SELECT book_name, aut_name, cate_descrip, pub_name, book_price FROM book_mast INNER JOIN author ON book_mast.aut_id = author.aut_id INNER JOIN category ON book_mast.cate_id = category.cate_id INNER JOIN publisher ON book_mast.pub_id = publisher.pub_id GROUP BY book_name;`;

  conn.query(SQL_QUERY_ALL, (error, rows) => {
    if (error) {
      console.log(error);
      res.status(500).json('INTERNAL SERVER ERROR');
      return;
    }
    //console.log(rows);
    rows.forEach((row) => {
      console.log(row);  // lists all of the book titles aka book names
    });
    
    res.status(200).json(rows);

  });

});