'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let ingredients = await queryInterface.bulkInsert("Ingredients", [
      { ingredient: "tortillas", amount: 1, measurement: "package", mealId: 1 },
      { ingredient: "ground beef or chicken", amount: 1, measurement: "pound",mealId: 1 },
      { ingredient: "taco seasoning", mealId: 1 },
      { ingredient: "shredded cheese", mealId: 1 },
      { ingredient: "optional: lettuce", mealId: 1 },
      { ingredient: "optional: tomato", mealId: 1 },
      { ingredient: "optional: onion", mealId: 1 },
      { ingredient: "optional: salsa", mealId: 1 },
      { ingredient: "optional: mild sauce", mealId: 1 },
      { ingredient: "optional: sour cream", mealId: 1 },
      { ingredient: "optional: chips", mealId: 1 },
      { ingredient: "optional: guacamole (mix+avocado)", mealId: 1 },
      { ingredient: "chicken broth", mealId: 2 },
      { ingredient: "potatos", mealId: 2 },
      { ingredient: "onion or minced onion seasoning", mealId: 2 },
      { ingredient: "salt", mealId: 2 },
      { ingredient: "pepper", mealId: 2 },
      { ingredient: "celery", mealId: 2 },
      { ingredient: "bacon", mealId: 2 },
      { ingredient: "shredded cheese", mealId: 2 },
      { ingredient: "sliced american cheese", mealId: 2 },
      { ingredient: "optional: cheddar bay biscuits", mealId: 2 },
      { ingredient: "egg noodles", mealId: 3 },
      { ingredient: "ground beef", mealId: 3 },
      { ingredient: "sour cream", mealId: 3 },
      { ingredient: "cream of mushroom soup", mealId: 3 },
      { ingredient: "garlic powder", mealId: 3 },
      { ingredient: "optional: french bread", mealId: 3 },
      { ingredient: "hot dogs", mealId: 4 },
      { ingredient: "hot dog buns", mealId: 4 },
      { ingredient: "chili or chili sauce", mealId: 4 },
      { ingredient: "preferred condiments", mealId: 4 },
      { ingredient: "optional: shredded cheese", mealId: 4 },
      { ingredient: "optional: onions", mealId: 4 },
      { ingredient: "spaghetti noodles", mealId: 5 },
      { ingredient: "optional: white or red sauce", mealId: 5 },
      { ingredient: "optional: ground beef or italian sausage", mealId: 4 },
      { ingredient: "optional: french bread", mealId: 5 },
      { ingredient: "optional: salad fixings", mealId: 5 },

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
