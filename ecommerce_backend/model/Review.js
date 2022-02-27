const mongoose = require("mongoose");

const review = mongoose.Schema({
  orderID: {
    type: mongoose.Schema.Types.ObjectId,
  },
  productID: {
    type: mongoose.Schema.Types.ObjectId,
  },
  review: {
    type: String,
  },
  rating: {
    type: String,
  },
  createdAt: {
    type: Date,
  },
  updatedAt: {
    type: Date,
  },
});
module.exports = mongoose.model("review", review);
