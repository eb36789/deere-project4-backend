'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let meals = await queryInterface.bulkInsert("Meals", [
      { name: "Tacos" },
      { name: "Cheesy Potato Soup" },
      { name: "Beef Stroganoff" },
      { name: "Chili Cheese Dogs" },
      { name: "Spaghetti" },
      { name: "Cajun Sausage Alfredo" },
      { name: "Chicken and Dumplings" },
      { name: "Chicken and Noodles" },
      { name: "Enchiladas" },
      { name: "Fajitas" },
      { name: "Bratwurst" },
      { name: "Pancakes" },
      { name: "Breakfast Burritos" },
      { name: "Omelettes" },
      { name: "Eggs Benedict" },
      { name: "Chicken Pot Pie" },
      { name: "White Chili" },
      { name: "Grilled Cheese and Tomato Soup" },
      { name: "Fried Chicken" },
      { name: "Pizza" },
      { name: "French Bread Pizza" },
      { name: "Chinese Stir Fry" },
      { name: "Pot Roast" },
      { name: "Red Beans and Rice" },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
