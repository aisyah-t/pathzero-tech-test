import express from 'express';
import sqlite3 from "sqlite3";

const db = new sqlite3.Database('./.sqlite/pathzero.db', sqlite3.OPEN_READWRITE, (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the pathzero database.');
});

const app = express();

app.get('/projects', (req, res) => {
  const data = db.all('SELECT * FROM projects', (err, rows) => {

    res.send(rows)
  })
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000')
});