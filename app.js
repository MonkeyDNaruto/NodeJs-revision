const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.json([{name: "Nischal"}, {name: "John"}]);
})

app.listen(3000, (req, res) => {
    console.log("Server is listening on port 3000");
})