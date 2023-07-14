const { Favorite, User, Cars, Image } = require("../models");

exports.addOrRemoveById = async (userId, id) => {
  //   console.log("service ID", userId, id);
  const fav = await Favorite.findOne({
    // include: [
    //   {
    //     model: User,
    //     where: { id:userId },
    //   },
    // ],
    // include: [
    //   {
    //     model: Cars,
    //     where: { id },
    //   },
    // ],
    where: { userId, carsId: id },
  });
  console.log("favorite -----------------", fav);

  if (!fav) {
    const create = await Favorite.create({ userId, carsId: id });
    return create;
  } else if (fav && fav.userId == userId) {
    const deleted = await Favorite.destroy({
      where: {
        id: fav.id,
      },
    });
    return deleted;
  }
};

exports.getFavoriteProductById = async (id) => {
  // console.log("id from service", id);
  return await Favorite.findAll({
    include: [
      {
        model: User,
        where: { id },
      },
      {
        model: Cars,
        include: [
          {
            model: Image,
          },
        ],
      },
    ],
  });
};

exports.getFavoriteProductByProductId = async (id) =>
  await Favorite.findAll({
    include: [
      {
        model: User,
      },
      {
        model: Cars,
        where: { id },
        include: [
          {
            model: Image,
          },
        ],
      },
    ],
  });
