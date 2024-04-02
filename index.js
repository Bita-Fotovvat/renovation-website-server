require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");


app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 5050;
app.get('/', (req, res) => {
  res.send("Welcome!");
});

const requestRoutes = require('./routes/request-routes');
app.use('/requests', requestRoutes);




app.listen(PORT, () => {
    console.log(`running at http://localhost:${PORT}`);
  });