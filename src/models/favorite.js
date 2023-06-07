module.exports = (sequelize, DataTypes) => {
  const Favorite = sequelize.define("Favorite", {}, { underscored: true });

  Favorite.associate = (models) => {
    Favorite.belongsTo(models.User, {
      foreignKey: {
        name: "userId",
        allowNull: false,
      },
      onDelete: "RESTRICT",
    });

    Favorite.belongsTo(models.Cars, {
      foreignKey: {
        name: "carsId",
        allowNull: false,
      },
      onDelete: "RESTRICT",
    });
  };
  return Favorite;
};
