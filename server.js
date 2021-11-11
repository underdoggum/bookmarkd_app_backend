//////////////////////////////////////////
// Dependencies
//////////////////////////////////////////
require("dotenv").config();
const express = require("express");
const app = express();
const { PORT = 3001, DATABASE_URL } = process.env;
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");


//////////////////////////////////////////
// Database connection
//////////////////////////////////////////
mongoose.connect(DATABASE_URL, { useUnifiedTopology: true, useNewUrlParser: true });

// messages
mongoose.connection
  .on("open", () => console.log("Connected to Mongo"))
  .on("close", () => console.log("Disconnected from Mongo"))
  .on("error", error => console.log(error));


/////////////////////
// Models
/////////////////////
const BookmarkSchema = new mongoose.Schema({
  title: String,
  url: String
}, {timestamps: true})

const Bookmark = mongoose.model("Bookmark", BookmarkSchema)


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

// Index route
app.get("/bookmark", async (req, res) => {
  try {
    res.json(await Bookmark.find({}))
  } catch (error) {
    res.status(400).json({error})
  }
})

// Create route
app.post("/bookmark", async (req, res) => {
  try {
    res.json(await Bookmark.create(req.body))
  } catch(error) {
    res.status(400).json({error})
  }
})

// update route
app.put("/bookmark/:id", async (req, res) => {
  try {
    res.json(await Bookmark.findByIdAndUpdate(req.params.id, req.body, {new: true}))
  } catch (error) {
    res.status(400).json({error})
  }
})

// Destroy route
app.delete("/bookmark/:id", async (req, res) => {
  try {
    res.json(await Bookmark.findByIdAndRemove(req.params.id, req.body))
  } catch (error) {
    res.status(400).json({error});
  }
})


// listening
app.listen(PORT, () => {
  console.log(`App is listening on port: ${PORT}`);
});
