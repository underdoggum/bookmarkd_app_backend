//////////////////////////////////////////
// Dependencies
//////////////////////////////////////////
require("dotenv").config();
const mongoose = require("mongoose");
const { DATABASE_URL } = process.env;


//////////////////////////////////////////
// Database connection
//////////////////////////////////////////
mongoose.connect(DATABASE_URL, { useUnifiedTopology: true, useNewUrlParser: true });

// messages
mongoose.connection
  .on("open", () => console.log("Connected to Mongo"))
  .on("close", () => console.log("Disconnected from Mongo"))
  .on("error", error => console.log(error));



module.exports = mongoose;
