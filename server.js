//////////////////////////////////////////
// Dependencies
//////////////////////////////////////////
require("dotenv").config();
const express = require("express");
const mongoose = require("./db/connection");
const morgan = require("morgan");
const cors = require("cors");
const { PORT = 6000, DATABASE_URL } = process.env;

const app = express();


//////////////////////////////////////////
// Database Connection
//////////////////////////////////////////
// establish connection
mongoose.connect(DATABASE_URL, {
  useUnifiedTopology: true,
  useNewUrlParser: true
})

// Connection Events
mongoose.connection
.on("open", () => console.log("You are connected to Mongo"))
.on("close", () => console.log("You are disconnected from Mongo"))
.on("error", (error) => console.log(error))


/////////////////////
// Models
/////////////////////
const VarSchema = new mongoose.Schema({
  var: Value,
  var: Value,
  var: Value
}, {timestamps: true}) // if necessary

const Var = mongoose.model("var", VarSchema)


/////////////////////////
// Middleware
/////////////////////////
app.use(cors())
app.use(morgan("dev"))
app.use(express.json())


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
