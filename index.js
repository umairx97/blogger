const express = require("express");
const app = express();
const expressEdge = require("express-edge");
const mongoose = require("mongoose");
const logger = require("morgan");
const path = require("path");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

mongoose.connect("mongodb://localhost:27017/nodeBlog", {
  useNewUrlParser: true,
  useCreateIndex: true
});

// Models
const { Post } = require("./DB/Models");

app.use(express.static("public"));
app.use(expressEdge);
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

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

app.post("/post/store", (req, res) => {

  Post.create(req.body, (err, post) => {
    if (err) {
      console.log(err);
    }

    res.redirect("/");
  });

});



app.get("/post/new", (req, res) => {
  res.render("create");
});



const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`The server is running at ${PORT}`);
});
