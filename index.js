require('dotenv').config();

const express = require('express');
const pg = require('pg');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

const   
 client = new pg.Client({
  connectionString: process.env.DATABASE_URL
});

client.connect()
  .then(() => {
    console.log('Connected to database');
  })
  .catch(err => {
    console.error('Connection error:', err.stack)
  });

app.use(cors());

app.get('/api/v1/employees', (req, res) => {
  client.query('SELECT * FROM employees', (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error fetching employees');
    } else {
      res.json(result.rows);
    }
  });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});


































  
