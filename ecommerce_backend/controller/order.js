const order = require("../model/Order");
const cart=require("../model/Cart");
const bcrypt = require("bcryptjs");
exports.createOrder = async (req, res) => {
  try {
    console.log("vvvvvvvvvvvvvvv");
    const data = await order.create(req.body);
    const deletecart=await cart.deleteMany({userID: "61a5dd3cccb5ab23e8a05e63"})
    res.status(200).json({
      success: true,
      message: "Order Successfully",
      data: data,
      deletedata:deletecart
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: `Order not Successfully ${error}`,
      data: null,
    });
    console.log(error);
  }
};

exports.getAllOrder = async (req, res) => {
  try {
    const data = await order.find().sort({createdAt:-1});
    res.status(200).json({
      success: true,
      message: "Get all Order Successfully",
      data: data,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: `Unable to Get all Order Successfully ${error}`,
      data: null,
    });
  }
};

exports.updateOrder = async (req, res) => {
  try {
     const data=await order.findByIdAndUpdate({_id:req.params.id},req.body); 
    res.status(200).json({
      success: true,
      message: "Update Successfullly",
      data: data,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: `Unable to update Order ${error}`,
      data: null,
    });
    console.log(error);
  }
};

exports.deleteOrder = async (req, res) => {
  try {
    const isId = await User.findById(req.params.id);
    if (!isId) {
      res.status(404).json({
        success: false,
        message: `Invalid ID ${error}`,
        data: null,
      });
    }
    const data = await User.findByIdAndDelete(req.params.id);
    res.status(200).json({
      success: true,
      message: "Delete Successfullly",
      data: data,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: `Unable to delete Order ${error}`,
      data: null,
    });
  }
};

exports.getsingleOrder = async (req, res) => {
  try {
    // console.log(req.params.id);
    const allUser = await user.findById(req.params.id);
    res.status(200).json({
      success: true,
      message: "get all data",
      data: allUser,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "no all data",
      data: null,
    });
  }
};
