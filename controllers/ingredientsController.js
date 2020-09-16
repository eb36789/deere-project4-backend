const express = require("express");
const meal = require("../models/meal");
const ingredient = require("../models/ingredients");
const router = express.Router();

const UserModel = require("../models").User;
const MealModel = require("../models").Meal;
const IngredientsModel = require("../models").Ingredients;

//   UPDATE ingredient - localhost:3000/api/ingredients/XX
  router.put("/:id", async (req, res) => {
    let ingredient = await IngredientsModel.update(req.body, {
      where: { id: req.params.id },
      returning: true,
    });
    res.json({ ingredient });
  });

    // DELETE AN INGREDIENTgit add - localhost:3000/api/ingredients/XX
    router.delete("/:id", async (req, res) => {
        await IngredientsModel.destroy({
          where: { id: req.params.id },
        });
        res.json({
          message: `ingredient with id ${req.params.id} has been deleted`,
        });
      });

  module.exports = router;