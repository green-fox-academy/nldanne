'use strict';

const mysql = require('mysql');
const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json()); // body parser

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'reddit',
});

app.listen(PORT, () => console.log(`Server running at PORT ${PORT}`));

conn.connect((error) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log('Successfully conncected to Database!');

});

app.get('/hello', (req, res) => {
  res.send("<h1> Hello World</h1>");
})

app.get('/posts', (req, res) => {
  const SQL_GET_POSTS_QUERY = 'SELECT * FROM posts;';

  conn.query(SQL_GET_POSTS_QUERY, (error, rows) => {
    if (error) {
      console.log(error);
      res.status(500).json('INTERNAL SERVER ERROR');
      return;
    }

    let theTime = 0;
    let tempTimeStamp = 0;
   // console.log('hello');
    for(let i = 0; i < rows.length; i++) {
      tempTimeStamp = new Date(rows[i].timestamp);
     // console.log(tempTimeStamp);
      if (rows[i].timestamp) {
        theTime= tempTimeStamp.getTime();
      //  console.log(theTime);
        rows[i].timestamp = theTime;
      }

    }
  
    res.status(200).json({"posts": rows});
  });

});
