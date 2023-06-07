module.exports = (sequelize, DataTypes) => {
  const Brand = sequelize.define(
    "Brand",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      underscored: true,
    }
  );

  Brand.associate = (models) => {
    Brand.hasMany(models.Cars, {
      foreignKey: {
        name: "brandId",
        allowNull: false,
      },
      onDelete: "RESTRICT",
    });
  };

  return Brand;
};
