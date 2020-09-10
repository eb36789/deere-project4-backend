'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Meal extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Meal.hasMany(models.Ingredients, { foreignKey: "MealId" });
      Meal.belongsToMany(models.User, {
        through: "UserMeal",
        foreignKey: "MealId",
        otherKey: "userId",
      });
    }
  };
  Meal.init({
    name: DataTypes.STRING,
    time: DataTypes.INTEGER,
    type: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Meal',
  });
  return Meal;
};