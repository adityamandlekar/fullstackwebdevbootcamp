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


//Routes Param

app.get("/facebook/:userid/:comments/:title",function(req,res){
console.log(req);
console.log(req.params);
});

app.get("/facebook/:userid/:comments/:title/:subtitle",function(req,res){
console.log(req.params);
});
app.get("/facebook/:userid/:comments",function(req,res){
    
var userid = req.params.userid;
var comments = req.params.userid.comments;
res.send( "user"+ userid + "--tried to redirect to comments Page --> "+ comments);

});

//Routes params - *  . Ordering of this matters. try keeping above all.
app.get("*",function(req,res){
    res.send("Anything apart from defind routes but ordering matters. Try putting * route at the start");
});
