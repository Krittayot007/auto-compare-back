module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define(
    "Image",
    {
      imgUrl: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      underscored: true,
    }
  );

  Image.associate = (models) => {
    Image.belongsTo(models.Cars, {
      foreignKey: {
        name: "carsId",
        allowNull: false,
      },
      onDelete: "RESTRICT",
    });
  };

  return Image;
};
