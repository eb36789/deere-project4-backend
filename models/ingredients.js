'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ingredients extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Ingredients.belongsTo(models.Meal, { foreignKey: "mealId" });
    }
  };
  Ingredients.init({
    ingredient: DataTypes.STRING,
    amount: DataTypes.INTEGER,
    measurement: DataTypes.STRING,
    mealId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Ingredients',
  });
  return Ingredients;
};