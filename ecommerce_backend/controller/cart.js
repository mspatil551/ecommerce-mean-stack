const Cart = require("../model/Cart");
const product =require("../model/Product");
 
exports.createCart = async (req, res) => {
  try {
    const checkcart=await Cart.findOne({productID:req.body.productID})
    // console.log(checkcart);
    if(checkcart){
    return  res.status(200).json({
        success: false,
        message: "Cart allredy exist",
         data: null,
      });
    }else{
      const data = await Cart.create(req.body);
      return res.status(200).json({
        success: true,
        message: "Cart Successfully",
        data: data,
      });
    }
   
  } catch (error) {
    res.status(404).json({
      success: false,
      message: `Cart not Successfully ${error}`,
      data: null,
    });
    console.log(error);
  }
};

exports.getAllCart = async (req, res) => {
  try {
    const data=await Cart.find({userID: "61a5dd3cccb5ab23e8a05e63"}).populate("productID");
    res.status(200).json({
      count:data.length,
      success: true,
      message: "Get all Cart Successfully",
      data: data,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: `Unable to Get all Cart Successfully ${error}`,
      data: null,
    });
  }
};

exports.updateCart = async (req, res) => {
  try {
    const isId = await Cart.findById(req.params.id);
    if (!isId) {
      res.status(404).json({
        success: false,
        message: `Invalid ID ${error}`,
        data: null,
      });
    }
    const data = await Cart.findByIdAndUpdate(req.params.id, req.body, {
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
      message: `Unable to update Cart ${error}`,
      data: null,
    });
  }
};

exports.deleteCart = async (req, res) => {
  try {
    const data = await Cart.findByIdAndDelete(req.params.id);
     
    res.status(200).json({
      success: true,
      message: "Delete Successfullly",
      data: null,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: `Unable to delete Cart ${error}`,
      data: null,
    });
  }
};

exports.getsingleCart = async (req, res) => {
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
