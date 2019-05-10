const express = require("express");
const app = express();
const expressEdge = require("express-edge");
const mongoose = require("mongoose");
const logger = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const fileUpload = require("express-fileupload");

// Controllers
const createPostController = require("./controllers/createPost");
const homePageController = require("./controllers/homePage");
const aboutPageController = require("./controllers/aboutPage");
const contactPageController = require("./controllers/contactPage");
const storePostsController = require("./controllers/storePosts");
const singlePostController = require("./controllers/singlePost");

// Database Connections
mongoose.connect("mongodb://localhost:27017/nodeBlog", {
  useNewUrlParser: true,
  useCreateIndex: true
});

// Middleware to check if the body is not empty and file is attached
const createPostValidation = require("./middlewares/storePosts");

// Middlewares
app.use(express.static("public"));
app.use(expressEdge);
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(fileUpload());
app.use("/posts/store", createPostValidation);
app.set("views", `${__dirname}/views`);

// Routes
app.get("/", homePageController);

app.get("/about", aboutPageController);

app.get("/contact", contactPageController);

app.get("/posts/new", createPostController);

app.post("/posts/store", storePostsController);

app.get("/post/:id", singlePostController);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`The server is running at ${PORT}`);
});
