const mongoose = require("mongoose");

const user = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide name"],
  },
  email: {
    type: String,
    required: [true, "Please enter your email"],
  },
  googleId: {
    type: String,
  },
  createdAt: {
    type: Date,
  },
  updatedAt: {
    type: Date,
  },
});
module.exports = mongoose.model("user", user);
