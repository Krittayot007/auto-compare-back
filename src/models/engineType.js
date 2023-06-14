module.exports = (sequelize, DataTypes) => {
  const EngineType = sequelize.define(
    "EngineType",
    {
      type: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      underscored: true,
    }
  );

  EngineType.associate = (models) => {
    EngineType.hasMany(models.Cars, {
      foreignKey: {
        name: "engineId",
        allowNull: false,
      },
      onDelete: "RESTRICT",
    });
    //   EngineType.hasMany(models.SelectEngine, {
    //     foreignKey: {
    //       name: "engineId",
    //       allowNull: false,
    //     },
    //     onDelete: "RESTRICT",
    //   });
    // };
  };
  return EngineType;
};
