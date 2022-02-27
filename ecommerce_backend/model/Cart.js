const mongoose = require("mongoose");

const cart = mongoose.Schema({
  userID: {
    type: mongoose.Schema.Types.ObjectId,
  },
  productID: {
    type: mongoose.Schema.Types.ObjectId,
    ref:"product"
  },
  // quntity: {
  //   type: Number,
  // },
  // createdAt: {
  //   type: Date,
  // },
  // updatedAt: {
  //   type: Date,
  // },
});

module.exports = mongoose.model("cart", cart);
