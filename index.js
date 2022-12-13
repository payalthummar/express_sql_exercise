const express = require("express");
require("dotenv").config();
const { body, validationResult } = require("express-validator");
const colors = require("colors");
const { Pool } = require("pg");

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 8080;

const pool = new Pool({
  PGHOST: process.env.PGHOST,
  PGUSER: process.env.PGUSER,
  PGDATABASE: process.env.PGDATABASE,
  PGPASSWORD: process.env.PGPASSWORD,
  PGPORT: process.env.PGPORT,
});

// Get DATA
app.get("/", (req, res) => {
  res.send("Welcome to the API Database");
});

// get all users
app.get("/api/users", (req, res) => {
  pool
    .query("SELECT * FROM users")
    .then((data) => res.json(data.rows))
    .catch((e) => {
      console.log(e.message);
      res.sendStatus(500);
    });
});
app.get("/api/users/:id", (req, res) => {
  const { id } = req.params;
  pool
    .query("SELECT * FROM users WHERE id=$1", [id])
    .then((data) => res.json(data.rows[0]))
    .catch((e) => e.sendStatus(500));
});

app.post("/api/users", (req, res) => {
  const { first_name, last_name, age } = req.body;
  pool
    .query(
      "INSERT INTO users (first_name,last_name,age) VALUES ($1,$2,$3) RETURNING *",
      [first_name, last_name, age]
    )
    .then((data) => res.json(data.rows[0]))
    .catch((e) => res.sendStatus(500));
});

app.put("/api/users/:id", (req, res) => {
  const { id } = req.params;
  const { first_name, last_name, age } = req.body;
  // console.log(
  //   "id:",
  //   id,
  //   "first_name",
  //   first_name,
  //   "last_name",
  //   last_name,
  //   "age",
  //   age
  // );
  pool
    .query(
      "UPDATE users SET first_name=$1, last_name=$2,age=$3 WHERE id=$4 RETURNING * ",
      [first_name, last_name, age, id]
    )
    .then((data) => res.json(data.rows))
    .catch((e) => res.sendStatus(500));
});

app.delete("/api/users/:id", (req, res) => {
  const { id } = req.params;
  console.log("id: ", id);
  pool
    .query("DELETE FROM users WHERE id=$1", [id])
    .then((data) => {
      console.log("inside delete", data);
      res.status(201).send({ message: "User has been deleted" });
      // res.json(data.rows[0]);
    })
    .catch((e) => res.sendStatus(404));
});

// // get all orders

app.get("/api/orders", (req, res) => {
  pool
    .query("SELECT * FROM orders")
    .then((data) => res.json(data.rows))
    .catch((e) => res.sendStatus(500));
});

app.get("/api/orders/:id", (req, res) => {
  const { id } = req.params;
  pool
    .query("SELECT * FROM orders WHERE id=$1", [id])
    .then((data) => res.json(data.rows))
    .catch((e) => res.sendStatus(500));
});

app.post("/api/orders", (req, res) => {
  const { price, date, user_id } = req.body;

  pool
    .query(
      "INSERT INTO orders (price,date,user_id) VALUES ($1,$2,$3) RETURNING *",
      [price, date, user_id]
    )
    .then((data) => res.json(data.rows))
    .catch((e) => res.sendStatus(500));
});

app.put("/api/orders/:id", (req, res) => {
  const { id } = req.params;
  const { price, date, user_id } = req.body;

  pool
    .query("UPDATE orders SET price=$1, date=$2,user_id=$3 WHERE id=$4 ", [
      price,
      date,
      user_id,
      id,
    ])
    .then((data) => res.json(data.rows))
    .catch((e) => res.sendStatus(500));
});

app.all("*", (req, res) => {
  res.redirect("/");
});
app.listen(PORT, () => {
  console.log(`server listening on http://localhost:${PORT}`.america);
});
