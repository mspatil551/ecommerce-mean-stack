const mongoose = require("mongoose");

const order = mongoose.Schema({
  userID: {
    type: mongoose.Schema.Types.ObjectId,
  },
  productID: {
    type: [mongoose.Schema.Types.ObjectId],
  },
  quntity: {
    type: Number,
  },
  createdAt: {
    type: Date,
    default:Date.now()
  },
  updatedAt: {
    type: Date,
  },
  payment: {
    type: String,
  },
  delivered: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("order", order);

// api/v1/admin/product/add
// api/v1/admin/product/:id => get single user
// api/v1/admin/product/update
//:id
