const express = require("express");
const router = express.Router();

const Food = require("../models/Food");

router.get("/food", async (req, res) => {

    const foods = await Food.find({
        category: "Food"
    });

    res.render("food", {
        foods
    });

});

module.exports = router;