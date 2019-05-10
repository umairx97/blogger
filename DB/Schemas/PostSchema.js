const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
  title: {
    type: String
  },

  subtitle: {
    type: String
  },

  content: {
    type: String
  },

  username: {
    type: String
  },

  createdAt: {
    type: Date,
    default: new Date()
  }
});

module.exports = PostSchema;
