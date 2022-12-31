const express = require("express");
const app = express();

const { products } = require("./02-express-tutorial/data");

app.get("/", (req, res) => {
    res.json(products);
})

app.listen(3000, (req, res) => {
    console.log("Server is listening on port 3000");
})