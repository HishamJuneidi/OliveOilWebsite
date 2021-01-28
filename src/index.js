const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const events = require('./Item');


const bearerToken = require('express-bearer-token');
const oktaAuth = require('./auth');



const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'Hisham',
  password : 'Hi@1234sham',
  database : 'Item'
});

connection.connect();

const port = process.env.PORT || 8081;


  const app = express()
  .use(cors())
  .use(bodyParser.json())
  .use(bearerToken())
  .use(oktaAuth)
  .use(events(connection));

app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});
