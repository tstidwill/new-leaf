const express = require("express");
const cors = require("cors");
const axios = require("axios");
const dotenv = require("dotenv");
const leavesRoutes = require("./routes/leaves-routes");

dotenv.config();

const app = express();
const port = process.env.PORT || 8080;
const API_KEY = process.env.VITE_GOOGLE_MAPS_API_KEY;
const CORS_ORIGIN = process.env.CORS_ORIGIN || "https://localhost:5174";

app.use(
  cors({
    origin: CORS_ORIGIN,
  })
);
app.use(express.json());

app.use("/leaves", leavesRoutes);

app.get("/api", (req, res) => {
  res.send("newleaf server up and running!");
});

app.get("/api/searchGroceryStores", async (req, res) => {
  const { lat, lng } = req.query;

  if (!lat || !lng) {
    return res.status(400).json({ error: "coordinates required" });
  }

  try {
    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/place/textsearch/json`,
      {
        params: {
          key: API_KEY,
          location: `${lat},${lng}`,
          radius: 1000,
          query: "zero waste grocery store",
        },
      }
    );
    res.json(response.data.results);
  } catch (error) {
    res.status(500).json({ error: `Error fetching grocery stores` });
  }
});

app.listen(port, () => {
  console.log(`newleaf server is running on ${port}.`);
});
