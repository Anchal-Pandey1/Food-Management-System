const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
    foodName: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        default: 1
    }
});

module.exports = mongoose.model("Cart", cartSchema);