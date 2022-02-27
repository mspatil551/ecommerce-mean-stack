const mongoose = require("mongoose");

const product = mongoose.Schema({
  name: {
    type: String,
    require: [true, "Please provide name"],
  },
  price: {
    type: Number,
    require: [true, "Please enter price"],
  },
  discription: {
    type: [String],
  },
  discount: {
    type: Number,
  },
  maxDiscount: {
    type: Number,
  },
  discountEndDate: {
    type: Date,
  },
  image: {
    type: [String],
    default:"./uploads/default.jfif"
  },
  stock: {
    type: Boolean,
    default:true
  },
  publish: {
    type: Boolean,
    default:true
  },
  createdAt: {
    type: Date,
    default:Date.now()
  },
  updatedAt: {
    type: Date,
  },
});
module.exports = mongoose.model("product", product);
