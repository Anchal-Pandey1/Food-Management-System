const Food = require("../models/Food");

// Show Add Food Page
exports.showAddFoodPage = (req, res) => {
    res.render("admin/addfood");
};

// Add Food
exports.addFood = async (req, res) => {
    try {

        console.log(req.body);

        const food = await Food.create({
            name: req.body.name,
            price: req.body.price,
            category: req.body.category,
            image: req.body.image,
            description: req.body.description
        });

        res.redirect("/admin/dashboard");

    } catch (err) {
        console.log(err);
        res.send("Something went wrong");
    }
};

// Show Dashboard
exports.dashboard = async (req, res) => {

    const foods = await Food.find();

    const totalFoods = foods.length;

    res.render("admin/dashboard", {
        foods,
        totalFoods
    });

}

exports.showEditPage = async (req, res) => {

    try {

        const food = await Food.findById(req.params.id);

        res.render("admin/editfood", {
            food
        });

    } catch (err) {

        console.log(err);

    }

};

exports.updateFood = async (req, res) => {

    try {

        await Food.findByIdAndUpdate(req.params.id, {
            name: req.body.name,
            price: req.body.price,
            category: req.body.category,
            image: req.body.image,
            description: req.body.description
        });

        res.redirect("/admin/dashboard");

    } catch (err) {

        console.log(err);
        res.send("Error updating food");

    }

};

exports.deleteFood = async (req, res) => {

    try {

        await Food.findByIdAndDelete(req.params.id);

        res.redirect("/admin/dashboard");

    } catch (err) {

        console.log(err);
        res.send("Error deleting food");

    }

};
