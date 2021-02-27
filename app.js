const express = require("express");
const path = require("path");

const app = express();

const port = 3000;

app.set("view engine","hbs")

app.use("/assets", express.static(path.join(__dirname, "./assets")))
app.use("/js", express.static(path.join(__dirname, "./js")))

app.get("/",function(req, res){
    res.render("index")
})

app.get("/about",function(req, res){
    res.send("Strona o mnie")
})

app.get("/about/michal",function(req, res){
    res.send("Strona o Michal")
})

app.listen(port, (err) => {
    if (err) { return console.log(`Wystąpił błąd: ${err}`)}
    console.log(`Aplikacja działa na porcie ${port}`)
});