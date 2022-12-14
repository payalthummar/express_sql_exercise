const express = require("express");
const router = express.Router();
const { Pool } = require("pg");
const pool = new Pool({
  PGHOST: process.env.PGHOST,
  PGUSER: process.env.PGUSER,
  PGDATABASE: process.env.PGDATABASE,
  PGPASSWORD: process.env.PGPASSWORD,
  PGPORT: process.env.PGPORT,
});
// get all users

router.get("/", (req, res) => {
  res.send("Welcome to the API Database");
});
router.get("/api/users", (req, res) => {
  pool
    .query("SELECT * FROM users")
    .then((data) => res.json(data.rows))
    .catch((e) => {
      console.log(e.message);
      res.sendStatus(500);
    });
});
router.get("/api/users/:id", (req, res) => {
  const { id } = req.params;
  pool
    .query("SELECT * FROM users WHERE id=$1", [id])
    .then((data) => res.json(data.rows[0]))
    .catch((e) => e.sendStatus(500));
});

router.post("/api/users", (req, res) => {
  const { first_name, last_name, age } = req.body;

  pool
    .query(
      "INSERT INTO users (first_name,last_name,age) VALUES ($1,$2,$3) RETURNING *",
      [first_name, last_name, age]
    )
    .then((data) => res.json(data.rows[0]))
    .catch((e) => res.sendStatus(500));
});

router.put("/api/users/:id", (req, res) => {
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

router.delete("/api/users/:id", (req, res) => {
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

module.exports = router;
