const productService = require("../services/product-service");

exports.createWishList = async (req, res, next) => {
  try {
    // console.log("iddddd", req.user.id, req.params.id);
    const result = await productService.addOrRemoveById(
      req.user.id,
      req.params.id
    );
    res.json(result);
  } catch (error) {
    next(error);
  }
};
