const express = require("express");
const router = express.Router();

const foodController = require("../controllers/foodController");

router.get("/add-food", foodController.showAddFoodPage);

router.post("/add-food", foodController.addFood);

router.get("/dashboard", foodController.dashboard);

router.get("/edit-food/:id", foodController.showEditPage);

router.post("/update-food/:id", foodController.updateFood);

router.get("/delete-food/:id", foodController.deleteFood);

module.exports = router;
