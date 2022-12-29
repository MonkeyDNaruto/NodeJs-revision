const express = require("express");
const path = require("path");

const app = express();

// Setup Static And MiddleWare
app.use(express.static("./02-express-tutorial/Public"))

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, "./02-express-tutorial/navbar-app/index.html"))
});

app.listen(3000, (req, res) => {
    console.log("server is listening on port: 3000");
});