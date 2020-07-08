const express = require("express"); 
const app= express(); 
const bodyParser = require("body-parser"); 
const request = require("request"); 
const https = require("https");

app.use(express.static("public")); 
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/signup.html"); 
})

app.post("/", function(req, res) {

    const i = req.body; 

    const firstName = i.first_name;
    const lastName = i.last_name; 
    const email = i.email;

    const data = {
        members: [
                {
                email_address: email,
                status: "subscribed", 
                merge_fields: {
                     FNAME: firstName,
                    LNAME: lastName,
                    }
            }
        ]
    }; 
}); 

const jsonData = JSON.stringify(data); 

const url = "https://us10.api.mailchimp.com/3.0/lists/dfb41b3fbe"; 

const options = {
    method: "POST",
    auth: "laurent1:120c2188000c8b94d1d79baccb28d466-us10"
}

const r = https.request(url, options, function(response) {

    if(response.statusCode === 200) {
        res.send(__dirname + "/success.html"); 
    } else {
        res.send(__dirname + "/failure.html"); 
    }

    response.on("data", function(data){
        console.log(JSON.parse(data));
    })
}); 


r.write(jsonData); 
r.end(); 



app.listen(3000, function() {
    console.log("Server is running on port 3000");
})


// API-Key: 120c2188000c8b94d1d79baccb28d466-us10  
// List-Id: dfb41b3fbe 