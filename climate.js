const express=require("express");
const https=require("https");
const bodyparser=require("body-parser");

const app=express();


app.get("/",function(req,res){
    res.sendFile(__dirname+ "/climate.html");
});
app.post("/",function(req,res){
    const place=req.body.cityName;
const key ="10204b5817342ef08e2b6f59d22c1b01";
const url="api.openweathermap.org/data/2.5/weather?q=+ place +&appid=+ key +";
https.get(url,function(responce){
    console.log(response.statusCode);
    response.on("data",function(data){
        const weatherdata=JSON.parse(data);
        const temp=weatherdata.main.temp;
        const weatherdescription=weatherdata.weather[0].description;
        res.write("<p> the weather is currently" +weatherdescription + "</p>");
        res.write("<h1> The temperture is " +place + " degree Celcius.</h1>");
        res.send();
    
    });
});
})
    

app.listen(3000,function(){
    console.log("your server is port at 3000")
})