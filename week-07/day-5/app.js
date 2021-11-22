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

// GET all posts
app.get('/posts', (req, res) => {
  const SQL_GET_POSTS_QUERY = 'SELECT id, title, url, timestamp, score, user_name AS owner FROM posts INNER JOIN users ON posts.user_id = users.user_id;';

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

// create a new reddit post
app.post('/posts', (req, res) => {
  let userName = req.headers.user_name;
  const SQL_GET_ID_QUERY = `SELECT user_id FROM users WHERE user_name = ?;`;

  if(!userName) {
    res.status(400).json('Please provide a user_name!');
    return;
  }

  conn.query(SQL_GET_ID_QUERY, [userName], (error, rows) => {
    if (error) {
      console.log(error);
      res.status(500).json('INTERNAL SERVER ERROR Hello');
      return;
    }

    let userId = rows[0].user_id;

    //console.log(req.headers);
    // saves a new post to the database 
    const SQ_INSERT_POST_QUERY = `INSERT INTO posts (title, url, user_id) VALUES (?, ?, ?);`;  
    
    let newId = null;
  
    if (req.headers['content-type'] !== 'application/json') {
      res.status(400).json('Please provide correct json content!');
      return;
    }
  
    conn.query(SQ_INSERT_POST_QUERY, [req.body.title, req.body.url, userId], (error, rows) => {
      if (error) {
        console.log(error);
        res.status(500).json('INTERNAL SERVER ERROR 2');
        return;
      }
  
      // responds with the json of the newly created reddit post
      newId = rows.insertId;
      const SQL_SELECT_POST_QUERY = `SELECT id, title, url, timestamp, score, user_name AS owner FROM posts INNER JOIN users ON posts.user_id = users.user_id WHERE id=?;`;
  
      conn.query(SQL_SELECT_POST_QUERY, [newId], (error, rows) => {
        if (error) {
          console.log(error);
          res.status(500).json('INTERNAL SERVER ERROR 3');
          return;
        }
  
        res.status(201).json(rows);
        console.log('new Reddit post was successfully added');
      })
  
    });
  })


});

//app.put('/posts/:id', (req, res) => {
//  const SQL_UPDATE_POST_QUERY ;
//})