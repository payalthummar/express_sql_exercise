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

router.get("/api/orders", (req, res) => {
  pool
    .query("SELECT * FROM orders")
    .then((data) => res.json(data.rows))
    .catch((e) => res.sendStatus(500));
});

router.get("/api/orders/:id", (req, res) => {
  const { id } = req.params;
  pool
    .query("SELECT * FROM orders WHERE id=$1", [id])
    .then((data) => res.json(data.rows))
    .catch((e) => res.sendStatus(500));
});

router.post("/api/orders", (req, res) => {
  const { price, date, user_id } = req.body;

  pool
    .query(
      "INSERT INTO orders (price,date,user_id) VALUES ($1,$2,$3) RETURNING *",
      [price, date, user_id]
    )
    .then((data) => res.json(data.rows))
    .catch((e) => res.sendStatus(500));
});

router.put("/api/orders/:id", (req, res) => {
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
module.exports = router;
