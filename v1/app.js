var express =require('express')
var app =express()
var request=require('request')
app.set("view engine","ejs")

app.listen(process.env.PORT,process.env.IP,function(req,res){
    console.log("YelpCamp Full stack Web Development Boot Camp Server initiated on port :: "+ process.env.PORT);
});

app.get("/",function(req,res){
    res.render("landing");
});

app.get("/campgrounds"),function(req,res)
{
    
}

