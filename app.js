const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/dating-app', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
}).then(() => {
  console.log('Connected to MongoDB database!');
}).catch((err) => {
  console.log('Error connecting to MongoDB database:', err);
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


  