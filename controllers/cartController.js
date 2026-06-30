exports.addToCart = async (req, res) => {
    const foodId = req.params.id;

    const food = await Food.findById(foodId);

    console.log(food);

    res.send("Added to cart successfully"); // IMPORTANT
};