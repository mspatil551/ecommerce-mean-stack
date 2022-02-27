const express = require("express");
const upload = require("../middleware/uplaod")
const router = express.Router()
const {
  createUser,
  getAllUser,
  updateUser,
  deleteUser,
  getsingleUser,
} = require("../controller/user");
const {
  createProduct,
  getAllProduct,
  updateProduct,
  deleteProduct,
  getsingleProduct,
} = require("../controller/product");
const {
  createReview,
  getAllReview,
  updateReview,
  deleteReview,
  getsingleReview,
} = require("../controller/review");
const {
  createOrder,
  getAllOrder,
  updateOrder,
  deleteOrder,
  getsingleOrder,
} = require("../controller/order");
const {
  createCart,
  getAllCart,
  updateCart,
  deleteCart,
  getsingleCart,
} = require("../controller/cart");
router.route("/user").get(getAllUser).post(createUser);
router.route("/product").get(getAllProduct).post(upload.single('file'),createProduct);
router.route("/review").get(getAllReview).post(createReview);
router.route("/order").get(getAllOrder).post(createOrder);
router.route("/cart").get(getAllCart).post(createCart);

router.route("/user/:id").delete(deleteUser).put(updateUser).get(getsingleUser);
router.route("/cart/:id").delete(deleteCart).put(updateCart).get(getsingleCart);
router
  .route("/order/:id")
  .delete(deleteOrder)
  .put(updateOrder)
  .get(getsingleOrder);
router
  .route("/review/:id")
  .delete(deleteReview)
  .put(updateReview)
  .get(getsingleReview);
router
  .route("/product/:id")
  .delete(deleteProduct)
  .put(updateProduct)
  .get(getsingleProduct);

module.exports = router;
