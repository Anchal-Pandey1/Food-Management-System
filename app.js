const express = require("express");
const path = require("path");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const userRoute = require("./routes/user");

const connectDb = require("./config/db");
connectDb();

const Food = require("./models/Food");

const cartRoute = require("./routes/cart");
const adminRoute = require("./routes/admin");

app.use("/cart", cartRoute);

app.get("/add-food", async (req, res) => {

    await Food.create({
        name: "Paneer Pizza",
        price: 299,
        category: "Pizza",
        image: "pizza.jpg",
        description:"Cheesy Paneer Pizza"
    });

    res.send("Food Added");
});

app.use("/user", userRoute);

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

app.use(express.static(path.join(__dirname,"public")));

app.get("/" ,(req,res) => {
    res.render("user/home");
});

app.get("/drinks" ,(req,res) => {
    res.render("user/drinks");
});

app.get("/food", async (req, res) => {

    const foods = await Food.find();

    res.render("user/menu", { foods });
});

app.listen(2010,() => {
    console.log("server running");
})

app.use("/admin", adminRoute);