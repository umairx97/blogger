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
const createUserController = require('./controllers/createUser');
const storeUserController = require('./controllers/storeUser');


// Database Connections
const datbaseName = 'nodeBlog'
const databaseURL = `mongodb://localhost:27017/${datbaseName}`

mongoose.connect(databaseURL, {
  useNewUrlParser: true,
  useCreateIndex: true
});

// Validations
const createPostValidation = require("./middlewares/storePosts");
const hashPassword = require('./middlewares/hashPassword');

// Middlewares
app.use(express.static("public"));
app.use(expressEdge);
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(fileUpload());

// Validation middlewares
app.use("/posts/store", createPostValidation);
app.use('/users/register', hashPassword)


// Engine
app.set("views", `${__dirname}/views`);

// Static Routes
app.get("/", homePageController);

app.get("/about", aboutPageController);

app.get("/contact", contactPageController);

// Registration page route 
app.get('/auth/register', createUserController)

// New post apge route
app.get("/posts/new", createPostController);

// Single Post page route
app.get("/post/:id", singlePostController);

// Storing posts route
app.post("/posts/store", storePostsController);

// Storing users route
app.post("/users/register", storeUserController)


const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`The server is running at ${PORT}`);
});
