const express = require("express");
const app = express();

//
app.get('/', (req, res) => {
    res.send("Hello World!")
});

app.get("/about", (req, res) => {
    res.send("gkfgkwkfgygiugbwuyvjktvliugi")
})

// listining server on port 3000
app.listen('3000', (req, res) => {
    console.log("Server lising on port 3000");
});