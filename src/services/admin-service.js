const { Cars } = require("../models");
const { Image } = require("../models");

exports.addProduct = (product) => Cars.create(product);

exports.uploadMultiFiles = (files) => Image.bulkCreate(files);

exports.updateProduct = (value, id) =>
  Cars.update(value, {
    where: { id },
  });

exports.deleteProduct = (id) =>
  Cars.destroy({
    where: { id },
  });
