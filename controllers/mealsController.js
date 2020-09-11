const express = require("express");
const meal = require("../models/meal");
const router = express.Router();

const UserModel = require("../models").User;
const MealModel = require("../models").Meal;
const IngredientsModel = require("../models").Ingredients;


    // ADD A NEW INGREDIENT - localhost:3000/api/meals/26/newingredient
    router.post("/:id/newingredient", async (req, res) => {
      let meal = await MealModel.findByPk(req.params.id);
      req.body.mealId = req.params.id;
      let ingredient = await IngredientsModel.create(req.body);
      res.json({ meal, ingredient});
    });

  //     // UPDATE ingredient - localhost:3000/api/meals/XX
  // router.put("/:id", async (req, res) => {
  //   let ingredient = await IngredientsModel.update(req.body, {
  //     where: { id: req.params.id },
  //     returning: true,
  //   });
  //   res.json({ ingredient });
  // });

// GET INDIVIDUAL MEAL INFO - localhost:3000/api/meals/profile/1
router.get("/profile/:id", async (req, res) => {
    let meal = await MealModel.findByPk(req.params.id, 
      {
      include: {model: IngredientsModel,
      attributes: ["amount", "measurement", "ingredient" ]}
    }
    );
    res.json({ meal });
  });
  
  // GET ALL MEALS - localhost:3000/api/meals
  router.get("/", async (req, res) => {
    let meals = await MealModel.findAll({
       attributes: ["name", "time", "type", "id"],
       include: {model: IngredientsModel,
        attributes: ["amount", "measurement", "ingredient" ]}
       });
    res.json({ meals });
  })
  
  
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

  module.exports = router;


