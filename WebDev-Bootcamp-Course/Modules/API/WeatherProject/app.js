const express = require("Express"); 
const app = express(); 

const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({extended: true})); 

const https = require("https"); // Does not need to be installed with npm

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html"); 
});

app.post("/", function(req, res) {
    
    const query = req.body.cityName; // <Working with the HTML
    const apiKey = "80c8a3b4c1a2376a82e114bc6eab4fc3"
    const unit = "metric";

    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + apiKey + "&units=" + unit; // I've altered the parameters

    https.get(url, function(response) {
        console.log(response.statusCode);

        response.on("data", function(data) {

            const weatherData = JSON.parse(data);

            const weatherDescription = weatherData.weather[0].description; 
            const name = weatherData.name; 
            const wind = weatherData.wind.deg; 
            const temp = weatherData.main.temp; 

            // Getting the proper icon
            const icon = weatherData.weather[0].icon; 
            const imageUrl = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
            
            console.log(weatherDescription);
            console.log(name);
            console.log(wind);
            console.log(temp);

            res.write("<h1>The temperature in " + name + " is " + temp + "degrees Celcius.</h1>"); 
            res.write("<p>The name of the city is " + name + "</p>"); 
            res.write("<img src=" + imageUrl +">"); 
            res.send(); 
        });
    }); 
}); 


app.listen(3000, function() { 
    console.log("Server is running on port 3000");
});