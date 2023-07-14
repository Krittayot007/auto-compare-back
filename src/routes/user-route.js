const express = require("express");
const productController = require("../controllers/product-controller");

const router = express.Router();

router.get("/fetchWishlist/:id", productController.getWishListById);
router.get("/checkWishlist/:id", productController.getWishListByProductId);
router.post("/wishlist/:id", productController.createWishList);

module.exports = router;
