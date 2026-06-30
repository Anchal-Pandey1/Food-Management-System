const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({

    foodId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Food",
        required: true
    },

    quantity: {
        type: Number,
        default: 1
    }

});

module.exports = mongoose.model("Cart", cartSchema);