const express = require("express");
const dotenv = require("dotenv");
const app = express();
const cors = require("cors");
require("dotenv").config();

app.use(cors());
app.use(express.json());
const PORT = process.env.SERVER_PORT || 5050;


app.listen(PORT, () => {
    console.log(`running at http://localhost:${PORT}`);
  });