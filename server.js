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
app.use(express.json());

// GET all employees
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

// CREATE a new employee
app.post('/api/v1/employees', (req, res) => {
  const { name, is_admin } = req.body;
  client.query('INSERT INTO employees (name, is_admin) VALUES ($1, $2) RETURNING *', [name, is_admin], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error creating employee');
    } else {
      res.status(201).json(result.rows[0]);
    }
  });
});

// UPDATE an employee
app.put('/api/v1/employees/:id', (req, res) => {
  const { id } = req.params;
  const { name, is_admin } = req.body;
  client.query('UPDATE employees SET name = $1, is_admin = $2 WHERE id = $3 RETURNING *', [name, is_admin, id], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error updating employee');
    } else {
      res.json(result.rows[0]);
    }
  });
});

// DELETE an employee
app.delete('/api/v1/employees/:id', (req, res) => {
  const { id } = req.params;
  client.query('DELETE FROM employees WHERE id = $1', [id], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error deleting employee');
    } else {
      res.sendStatus(204);
    }
  });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});






























  
