import express, { Request, Response } from "express";
import sqlite3 from "sqlite3";
import cors from "cors";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

const db = new sqlite3.Database(
  "./.sqlite/pathzero.db",
  sqlite3.OPEN_READWRITE,
  (err) => {
    if (err) {
      console.error(err.message);
    }
    console.log("Connected to the Pathzero database.");
  }
);

app.get("/projects", (_req: Request, res: Response) => {
  db.all("SELECT * FROM projects", (err, rows) => {
    if (err) {
      console.error(err.message);
      res
        .status(500)
        .json({ error: "Error retrieving data from Pathzero database." });
    }
    res.json(rows);
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
