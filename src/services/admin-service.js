const { Cars } = require("../models");

exports.addProduct = (product) => Cars.create(product);

exports.updateProduct = (value, id) =>
  Cars.update(value, {
    where: { id },
  });

exports.deleteProduct = (id) =>
  Cars.destroy({
    where: { id },
  });
