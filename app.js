const express = require("express")

const app = express();

app.get("/", (req, res) => {
    res.send('<h1>Hi my name is Tom</h1>');
});

app.get("/me", (req, res) => {
    res.send({name: "tom", age: 27})
})

app.get("/cake", (req, res) => {
    console.log('MMMMmmmmhhhhh cake')
})









app.listen(3000, () => {
    console.log("Listening on port 3000")
})