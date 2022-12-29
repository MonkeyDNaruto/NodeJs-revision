const express = require("express");
const app = express();

app.get('/', (req, res) => {
    console.log("resources have been hit")
    res.status(200).send("<h1>Home Page</h1>")
});

app.get('/about', (req, res) => {
    console.log("resources have been hit")
    res.status(200).send("<h1>About Page</h1>")
});

app.all('*', (req, res) => {
    res.status(404).send("<h1>Resources not found...</h1>")
});
app.listen(3000, (req, res) => {
    console.log("Server is listening on port: 3000")
})

// app.get
// app.posy
// app.delete
// app.put
// app.all
// app.use
// app.listen