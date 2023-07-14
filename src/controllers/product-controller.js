const productService = require("../services/product-service");

exports.createWishList = async (req, res, next) => {
  try {
    // console.log("iddddd", req.user.id, req.params.id);
    const { id } = req.params;
    const result = await productService.addOrRemoveById(req.user.id, id);
    // console.log(result);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

exports.getWishListById = async (req, res, next) => {
  try {
    const { id } = req.params; // userId
    // console.log("id from controller", id);
    const result = await productService.getFavoriteProductById(id);
    // console.log("result", result);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

exports.getWishListByProductId = async (req, res, next) => {
  try {
    const { id } = req.params; // productId
    const result = await productService.getFavoriteProductByProductId(id);
    res.json(result);
  } catch (error) {
    next(error);
  }
};
