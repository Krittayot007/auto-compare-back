module.exports = (sequelize, DataTypes) => {
  const SelectEngine = sequelize.define(
    "SelectEngine",
    {},
    { underscored: true }
  );

  SelectEngine.associate = (models) => {
    SelectEngine.belongsTo(models.Cars, {
      foreignKey: {
        name: "carsId",
        allowNull: false,
      },
      onDelete: "RESTRICT",
    });

    SelectEngine.belongsTo(models.EngineType, {
      foreignKey: {
        name: "engineId",
        allowNull: false,
      },
      onDelete: "RESTRICT",
    });
  };
  return SelectEngine;
};
