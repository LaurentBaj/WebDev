const express = require("express"); 
const bodyParser = require("body-parser"); 

const app = express(); 

let item = ""; 

app.use(bodyParser.urlencoded({extended: true})); 

app.set("view engine", "ejs"); 

app.get("/", function(req, res) {

    let today = new Date(); 

    const options = {
        weekday: "long", 
        day: "numeric", 
        month: "long"
    }; 
    
    let day = today.toLocaleDateString("en-US", options); 

    res.render("list", {
        kindOfDay: day, 
        newListItem: data
    }); 

}); 

app.post("/", function(req, res) {
    
    const item = req.body.newItem;  
    
    res.redirect("/"); 

}); 

app.listen(3000, function() {
    console.log("Server runs on port 3000s");
})