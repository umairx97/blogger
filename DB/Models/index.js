const mongoose = require("mongoose");
const PostSchema = require("../Schemas/PostSchema");

const Post = mongoose.model("Post", PostSchema);

module.exports = {
  Post
};
