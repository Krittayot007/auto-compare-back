module.exports = (sequelize, DataTypes) => {
  const TypeCar = sequelize.define(
    "TypeCar",
    {
      type: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      segment: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      seats: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      underscored: true,
      paranoid: true,
    }
  );

  TypeCar.associate = (models) => {
    TypeCar.hasMany(models.Cars, {
      foreignKey: {
        name: "typeId",
        allowNull: false,
      },
      onDelete: "RESTRICT",
    });
  };

  return TypeCar;
};
