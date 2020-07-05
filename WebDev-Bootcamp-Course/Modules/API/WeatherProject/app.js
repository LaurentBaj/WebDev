const express = require("Express"); 
const app = express(); 

const https = require("https"); // Does not need to be installed 

app.get("/", function(req, res) {
    const url = "https://api.openweathermap.org/data/2.5/weather?q=Mombasa&appid=80c8a3b4c1a2376a82e114bc6eab4fc3&units=metric";
    https.get(url, function(response) {
        console.log(response);
    }); 
});

app.listen(3000, function() {
    console.log("Server is sunning on port 3000");
});