const express = require('express');
const pg = require('pg');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

const   
 client = new pg.Client({
  connectionString: process.env.DATABASE_URL
});

client.connect();