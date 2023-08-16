import express from "express";
import bodyParser from "body-parser";

const port = 3000;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"))

var itemListToday = [];
var itemListWork = [];

/* Initial load - rendering main page */
app.get("/", (req,res) => {
    res.render("index.ejs",{itemListToday});
})

app.get("/work", (req,res) => {
    res.render("work.ejs", {itemListWork});
})


app.post("/",(req,res) => {
    if (req.body["toDoItem"]) {    
        itemListToday.push(req.body["toDoItem"]);
        res.render("index.ejs", {itemListToday});
    }
});

app.post("/work",(req,res) => {
    if (req.body["toDoItemWork"]) {    
        itemListWork.push(req.body["toDoItemWork"]);
        res.render("work.ejs", {itemListWork});
    }
});

app.listen(port, () => {
    console.log("Server listening on port " + port + ".");
});
