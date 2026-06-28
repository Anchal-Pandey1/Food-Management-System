const express = require("express");
const path = require("path");

const app = express();

const userRoute = require("./routes/user");

app.use("/user", userRoute);

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

app.use(express.static(path.join(__dirname,"public")));

app.get("/" ,(req,res) => {
    res.render("home");
});

app.get("/food" ,(req,res) => {
    res.render("food");
});

app.get("/drinks" ,(req,res) => {
    res.render("drinks");
});

app.listen(2000,() => {
    console.log("server running");
})

