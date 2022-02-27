const User = require("../model/User");

const bcrypt = require("bcryptjs");

exports.createUser = async (req, res) => {
  try {
    // const salt = await bcrypt.genSalt(10);
    // req.body.password = await bcrypt.hash(req.body.password, salt);
    const data = await User.create(req.body);
    res.status(200).json({
      success: true,
      message: "User Successfully",
      data: data,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: `User not Successfully ${error}`,
      data: null,
    });
  }
};

exports.getAllUser = async (req, res) => {
  try {
    const data = await User.find();
    res.status(200).json({
      success: true,
      message: "Get all User Successfully",
      data: data,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: `Unable to Get all User Successfully ${error}`,
      data: null,
    });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const isId = await User.findById(req.params.id);
    if (!isId) {
      res.status(404).json({
        success: false,
        message: `Invalid ID ${error}`,
        data: null,
      });
    }
    const data = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      success: true,
      message: "Update Successfullly",
      data: data,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: `Unable to update user ${error}`,
      data: null,
    });
  }
};

exports.deleteUser = async (req, res) => {
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
      message: `Unable to delete user ${error}`,
      data: null,
    });
  }
};

exports.getsingleUser = async (req, res) => {
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
