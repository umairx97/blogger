const express = require("express");
const app = express();
const expressEdge = require("express-edge");
const mongoose = require('mongoose')


mongoose.connect('mongodb://localhost:27017/nodeBlog', {useNewUrlParser: true, useCreateIndex: true,}); 



// Models
const { Post } = require('./DB/Models');




const path = require("path");
app.use(express.static("public"));
app.use(expressEdge);

app.set("views", `${__dirname}/views`);

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

app.get("/post", (req, res) => {
  res.render("post");
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`The server is running at ${PORT}`);
});
