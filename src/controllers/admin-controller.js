const adminService = require("../services/admin-service");

exports.addProduct = async (req, res, next) => {
  try {
    const { product } = req.body;
    const result = await adminService.addProduct(product);
    res.json(result);
  } catch (err) {
    next(err);
  }
};

exports.updateProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const value = req.body;
    const update = await adminService.updateProduct(value, id);
    res.status(201).json(update);
  } catch (err) {
    next(err);
  }
};
// in front end
// if(1) {
//   setState
// }

exports.deleteProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleteProduct = await adminService.deleteProduct(id);
    res.json(deleteProduct);
  } catch (err) {
    next(err);
  }
};
