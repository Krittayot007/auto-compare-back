const { uploadProducts } = require("../controllers/admin-controller");
const { Cars } = require("../models");
const { Image } = require("../models");
const { TypeCar } = require("../models");

exports.addProduct = async (product) => {
  const {
    brandId,
    engineId,
    model,
    typeId,
    // segment,
    // seat,
    description,
    linkYoutube,
    linkPartner,
    price,
    discount,
  } = product;
  const result = await Cars.create({
    brandId,
    engineId,
    model,
    description,
    linkYoutube,
    linkPartner,
    price,
    discount,
    typeId,
  });

  return result;
};

exports.uploadMultiFiles = (files) => Image.bulkCreate(files);

exports.updateProduct = (value, id) =>
  Cars.update(value, {
    where: { id },
  });

exports.deleteFileProduct = (id) =>
  Image.destroy({
    where: { carsId: id },
  });

exports.deleteProduct = (id) =>
  Cars.destroy({
    where: { id },
  });
