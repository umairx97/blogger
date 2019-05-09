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

app.get("/", async (req, res) => {

  const posts = await Post.find({})

  res.render("index", { 
    posts
  });
});



app.get("/about", (req, res) => {
  res.render("about");
});




app.get("/contact", (req, res) => {
  res.render("contact");
});




app.get("/post/:id", async (req, res) => {

  const post = await Post.findById(req.params.id)
  res.render("post", { 
    post
  });
});





app.get("/posts/new", (req, res) => {
  res.render("create");
});




app.post("/posts/store", (req, res) => {

  Post.create(req.body, (err, post) => {
    if (err) {
      console.log(err);
    }

    res.redirect("/");
  });

});


const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`The server is running at ${PORT}`);
});
