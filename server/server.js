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

const postalCodesData = [];

app.get("/postalcodes", (req, res) => {
  res.send(postalCodesData);
});

app.post("/postalcodes", (req, res) => {
  const newPostalCode = req.body;
  //validation shere
  postalCodesData.push(newPostalCode);
  res.status(201).send(`Postal code received: ${JSON.stringify(data)}`);
});

app.listen(port, () => {
  console.log(`newleaf server is running on ${port}.`);
});
