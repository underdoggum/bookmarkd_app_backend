//////////////////////////////////////////
// Dependencies
//////////////////////////////////////////
require("dotenv").config();
const express = require("express");
const mongoose = require("./db/connection");
const morgan = require("morgan");
const cors = require("cors");
const { PORT = 6000 } = process.env;

const app = express();


//////////////////////////////////////////
// Routes
//////////////////////////////////////////
// test route
app.get("/", (req, res) => {
  res.send("Hello world!");
});







// listening
app.listen(PORT, () => {
  console.log(`App is listening on port: ${PORT}`);
});
