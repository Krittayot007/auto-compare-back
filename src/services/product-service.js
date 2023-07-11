const { Favorite, User, Cars } = require("../models");

exports.addOrRemoveById = async (userId, id) => {
  //   console.log("service ID", userId, id);
  const fav = await Favorite.findOne({
    include: [
      {
        model: User,
        where: { userId },
      },
    ],
    include: [
      {
        model: Cars,
        where: { id },
      },
    ],
  });
  //   console.log("favorite -----------------", fav.id);

  if (!fav) {
    const create = await Favorite.create({ userId, carsId: id });
  } else {
    const deleted = await Favorite.destroy({
      where: {
        id: fav.id,
      },
    });
  }
};
