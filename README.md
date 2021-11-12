<!-- dependencies, models, backend route table -->
# Backend

## Dependencies
The required dependencies used:
- require("dotenv").config();
- const express = require("express");
- const app = express();
- const { PORT = 3001, DATABASE_URL } = process.env;
- const mongoose = require("mongoose");
- const morgan = require("morgan");
- const cors = require("cors");

## Models
Models implemented into the bookmark app:
- title: String
- url: String

## Route table

Listed routes in a table

| url | method | action |
|-----|--------|--------|
| /bookmark | get | get all books (index)|
| /bookmark | post | get a particular books (create)|
| /bookmark/:id | put | get a particular books (update)|
| /bookmark/:id | delete | get a particular books (destroy)|
