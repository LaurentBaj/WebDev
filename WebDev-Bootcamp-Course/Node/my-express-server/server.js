const express = require("express"); 

const app = express(); 

app.get("/", function(request, response) {
    response.send("<h1>Hello!</h1>"); 
});

app.get("/contact", function(req, res) {
    res.send("Laurent_baj@hotmail.com");     
});

app.get("/about", function(req, res) {
    res.send("I am 24 years old"); 
}); 

app.get("/hobbies", function(req, res) {
    res.send("I love playing guitar"); 
}); 

// Chosing port on html
app.listen(3000, function() {
    console.log("Server started on port 3000");
}); 

