const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 8080;

const dotenv = require("dotenv");
dotenv.config();
const CORS_ORIGIN = process.env.CORS_ORIGIN || "https://localhost:5174";

app.use(
  cors({
    origin: CORS_ORIGIN,
  })
);
app.use(express.json());

app.get("/", (req, res) => {
  res.send("newleaf server up and running!");
});

app.listen(port, () => {
  console.log(`newleaf server is running on ${port}.`);
});
