const express = require("express");
const bodyParser = require("body-parser");  
const app = express(); // Refers to the express method;

// the body parser npm requres the values inside the curly braces
app.use(bodyParser.urlencoded({extended: true})); 

// .get requests data from a source 
app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html"); 
}); 

app.get("/bmicalculator", function(req, res) {
    res.sendFile(__dirname + "/bmiCalculator.html"); 
});

// post-method loads data from the server 
app.post("/bmicalculator", function(req,res) {
    const height = parseFloat(req.body.height);
    const weight = parseFloat(req.body.weight);

    const result = weight / (height * height);
    
    res.send("Your BMI is " + result); 
});

app.post("/", function(req, res) {
    // The request looks for the html element inside the body and finds 'num1' which is the name of the first input 
    const num1 = parseInt(req.body.num1);
    const num2 = parseInt(req.body.num2);

    const result = num1 + num2; 

    res.send("Result: " + result); 
});

app.listen(3000, function() {
    console.log("Server is running on port 3000");
});