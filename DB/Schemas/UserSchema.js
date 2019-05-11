const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  username: {
    type: String
  },

  email: {
    type: String
  },

  password: {
    type: String
  },

  createdAt: {
    type: Date,
    default: new Date()
  }
});

module.exports = UserSchema;
