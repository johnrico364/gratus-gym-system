require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

const _dbURI = process.env.MONGO_DB_URI;

mongoose.connect(_dbURI).then(() => {
  console.log("Connected to Mongo DB");
});

app.listen(4000, () => console.log("Listening to port 4000"));
