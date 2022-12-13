const express = require("express");

const colors = require("colors");

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 8080;

// Get DATA
app.get("/", (req, res) => {
  res.send("Welcome to the API Database");
});

// get all users
app.get("/api/users", (req, res) => {
  res.send("Welcome to the API Database");
});
app.listen(PORT, () => {
  console.log(`server listening on http://localhost:${PORT}`.america);
});
