const mongoose = require("mongoose");
const { Post } = require("./DB/Models");

mongoose.connect("mongodb://localhost:27017/nodeBlog");



Post.create({
  title: "Nodejs Post",

  description: "This is description about the post",

  content: "Lorem ipsum dolor sit amet, consectur"

}, (err, doc) => { 
    console.log('err', err)
    console.log('doc', doc)

})
