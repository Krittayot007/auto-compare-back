const { Cars, Brand, TypeCar } = require("../models");
const { Op } = require("sequelize");

exports.searchProduct = async (search) => {
  let cars = await Cars.findAll({
    // where: {
    //   model: {
    //     [Op.like]: `%${search}%`,
    //   },
    // },
    attributes: [
      "model",
      "desciption",
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
  return cars;
};
