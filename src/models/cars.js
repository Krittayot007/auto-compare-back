module.exports = (sequelize, DataTypes) => {
  const Cars = sequelize.define(
    "Cars",
    {
      model: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      desciption: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      linkYoutube: DataTypes.STRING,
      linkPartner: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: DataTypes.DECIMAL(11, 2),
      discount: DataTypes.FLOAT,
    },
    {
      underscored: true,
      paranoid: true,
    }
  );

  Cars.associate = (models) => {
    Cars.belongsTo(models.Brand, {
      foreignKey: {
        name: "brandId",
        allowNull: false,
      },
      onDelete: "RESTRICT",
    });

    Cars.belongsTo(models.TypeCar, {
      foreignKey: {
        name: "typeId",
        allowNull: false,
      },
      onDelete: "RESTRICT",
    });

    Cars.hasMany(models.SelectEngine, {
      foreignKey: {
        name: "carsId",
        allowNull: false,
      },
      onDelete: "RESTRICT",
    });

    Cars.hasMany(models.Image, {
      foreignKey: {
        name: "carsId",
        allowNull: false,
      },
      onDelete: "RESTRICT",
    });

    Cars.hasMany(models.Favorite, {
      foreignKey: {
        name: "carsId",
        allowNull: false,
      },
      onDelete: "RESTRICT",
    });
  };

  return Cars;
};
