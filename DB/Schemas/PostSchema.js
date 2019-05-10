const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
  username: {
    type: String
  },

  title: {
    type: String
  },

  subtitle: {
    type: String
  },

  content: {
    type: String
  },

  image: { 
    type: String
  }, 

  createdAt: {
    type: Date,
    default: new Date()
  }
});

module.exports = PostSchema;
