const { Cars, Brand, TypeCar, Image, EngineType } = require("../models");
const { Op } = require("sequelize");

exports.searchProduct = async (search) => {
  let cars = await Cars.findAll({
    // where: {
    //   model: {
    //     [Op.like]: `%${search}%`,
    //   },
    // },
    attributes: [
      "id",
      "model",
      "description",
      "linkYoutube",
      "linkPartner",
      "price",
      "discount",
    ],
    include: [
      {
        model: Brand,
        attributes: ["name"],
      },
      {
        model: TypeCar,
        attributes: ["type"],
      },
      {
        model: Image,
        attributes: ["imgUrl"],
      },
      {
        model: EngineType,
        attributes: ["type"],
      },
    ],
  });

  //   if (cars.length === 0) {
  //     cars = await Cars.findAll({
  //       include: {
  //         model: Brand,
  //         where: {
  //           name: {
  //             [Op.like]: `%${search}%`,
  //           },
  //         },
  //         attributes: ["name"],
  //       },
  //     });
  //   }

  //   if (cars.length === 0) {
  //     cars = await Cars.findAll({
  //       include: {
  //         model: TypeCar,
  //         where: {
  //           type: {
  //             [Op.like]: `%${search}%`,
  //           },
  //         },
  //         attributes: ["type"],
  //       },
  //     });
  //   }
  console.log(cars);
  return cars;
};

exports.getProductById = async (id) =>
  Cars.findByPk(id, {
    attributes: [
      "id",
      "model",
      "description",
      "linkYoutube",
      "linkPartner",
      "price",
      "discount",
    ],
    include: [
      {
        model: Brand,
        attributes: ["id", "name"],
      },
      {
        model: TypeCar,
        attributes: ["id", "type"],
      },
      {
        model: Image,
        attributes: ["id", "imgUrl"],
      },
      {
        model: EngineType,
        attributes: ["id", "type"],
      },
    ],
  });
