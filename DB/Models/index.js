const mongoose = require("mongoose");
const PostSchema = require("../Schemas/PostSchema");
const UserSchema = require('../Schemas/UserSchema'); 


const Post = mongoose.model("Post", PostSchema);
const User = mongoose.model('User', UserSchema); 


module.exports = {
  Post, 
  User
};
