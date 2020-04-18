var express = require("express");
var app =express();

app.get("/",function(req,res){
   res.send("This is Aditya Mandlekar getting ready for Full Stack Development challenges on Cloud Platforms");
});

app.listen(process.env.PORT,process.env.IP,function(){
    console.log("Server has Started");
});

app.get("/myloveyfamily",function(req,res){
    res.send("Madhura Nihal Mahi Aai Baba ketki Mahesh and all beloved ones - You are my World");
});

app.get("/world",function(req,res){
    res.send("Vasudhaiva Kutumbakam-world");
});