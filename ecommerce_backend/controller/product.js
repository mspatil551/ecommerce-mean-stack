const Product = require("../model/Product");


exports.createProduct = async (req, res) => {
  try {  
    // console.log());
    let newData=JSON.parse(req.body.data);
    newData.image=req.file.path;
    // console.log();
    // newData.publish=="true"?newData.publish=true:newData.publish=false;
    newData.image =req.file.path.split('public\\')[1];
    const data = await Product.create(newData);
    // console.log(req.files);
    // console.log(req.body);
    res.status(200).json({
      success: true,
      message: "Product Successfully",
      data: data,
    });
  } catch (error) {
    res.status(200).json({
      success: false,
      message: `Product not Successfully ${error}`,
      data: null,
    });
  }
};

exports.getAllProduct = async (req, res) => {
  try {
    const data = await Product.find({publish:true});
 setTimeout(() => {
      res.status(200).json({
      success: true,
      message: "Get all Product Successfully",
      data: data,
    });
 }, 2000);
  } catch (error) {
    res.status(404).json({
      success: false,
      message: `Unable to Get all Product Successfully ${error}`,
      data: null,
    });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const isId = await Product.findById(req.params.id);
    if (!isId) {
      res.status(404).json({
        success: false,
        message: `Invalid ID ${error}`,
        data: null,
      });
    }
    const data = await Product.findByIdAndUpdate(req.params.id, req.body, {
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
      message: `Unable to update Product ${error}`,
      data: null,
    });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const isId = await Product.findById(req.params.id);
    if (!isId) {
      res.status(404).json({
        success: false,
        message: `Invalid ID ${error}`,
        data: null,
      });
    }
    const data = await Product.findByIdAndDelete(req.params.id);
    res.status(200).json({
      success: true,
      message: "Delete Successfullly",
      data: data,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: `Unable to delete Product ${error}`,
      data: null,
    });
  }
};

exports.getsingleProduct = async (req, res) => {
  try {
    // console.log(req.params.id);
    const allProduct = await Product.findById(req.params.id);
    res.status(200).json({
      success: true,
      message: "get all data",
      data: allProduct,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "no all data",
      data: null,
    });
  }
};
