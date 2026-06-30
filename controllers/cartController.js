const Cart = require("../models/Cart");

exports.addToCart = async (req, res) => {

    console.log(req.body);

    res.send("Item Added");
}