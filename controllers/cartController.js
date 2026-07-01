const Cart = require("../models/Cart");

exports.addToCart = async (req, res) => {
    const { name, price } = req.body;

    let item = await Cart.findOne({ name });

    if(item){
        item.quantity += 1;
        await item.save();
    } else {
        await Cart.create({ name, price });
    }

    res.json({ success: true });
};