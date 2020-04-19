var express = require("express")
var app =express();
var bodyParser=require("body-parser")
var friends =["Aditya","Ketki","Nihal","Mahi"]
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static("public"));
app.set("view engine","ejs");

app.get("/",function(req,res){
    res.render("home");
});


app.get("/friends",function(req,res){
    
    res.render("friends",{friends:friends});

});

app.post("/addFreind",function(req,res){
    
    var freindName=req.body.newFreind;
    friends.push(freindName);
    res.redirect("/friends");
});
app.listen(process.env.PORT,process.env.IP ,function(){
    console.log("listening on port "+process.env.PORT);
});
