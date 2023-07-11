const express = require("express");
const productController = require("../controllers/product-controller");

const router = express.Router();

router.post("/wishlist/:id", productController.createWishList);

module.exports = router;
