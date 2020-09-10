const express = require("express");
const router = express.Router();

const UserModel = require("../models").User;
const MealModel = require("../models").Meal;
const IngredientsModel = require("../models").Ingredients;


// GET INDIVIDUAL MEAL INFO - localhost:3000/api/meals/profile/1
router.get("/profile/:id", async (req, res) => {
    let meal = await MealModel.findByPk(req.params.id, 
    //   {
    //   include: IngredientsModel,
    //   attributes: ["id", "amount", "measurement", "ingredient", ]
    // }
    );
    res.json({ meal });
  });
  
  // GET ALL MEALS - localhost:3000/api/meals
  router.get("/", async (req, res) => {
    let meals = await MealModel.findAll({
        // include: IngredientsModel
    })
    res.json({ meals });
  });
  
  
  // CREATE A NEW MEAL - localhost:3000/api/meals/
  router.post("/", async (req, res) => {
    let meal = await MealModel.create(req.body);
    res.json({ meal });
  });
  module.exports = router;
  
  // UPDATE A MEAL - localhost:3000/api/meals/XX
  router.put("/:id", async (req, res) => {
    let meal = await MealModel.update(req.body, {
      where: { id: req.params.id },
      returning: true,
    });
    res.json({ meal });
  });
  
  // DELETE A MEAL - localhost:3000/api/meals/XX
  router.delete("/:id", async (req, res) => {
    await MealModel.destroy({
      where: { id: req.params.id },
    });
    res.json({
      message: `Meal with id ${req.params.id} has been deleted`,
    });
  });

    // ADD A NEW INGREDIENT
    router.post("/:id/newingredient", async (req, res) => {
        let ingredient = await IngredientsModel.create(req.body)
        res.json({ ingredient });
      });

module.exports = router;