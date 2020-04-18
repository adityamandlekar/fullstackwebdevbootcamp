var express = require("express")
var app =express();

app.get("/",function(req,res){
    res.render("home.ejs");
});

app.get("/fallinlovewith/:thing",function(req,res){
    var thing=req.params.thing;
    res.render("thing.ejs",{thingVar:thing});
});

app.get("/Posts",function(req,res){
    var posts =[
        {
            userName:"AdityaM",surname:"Mandlekar"
        },
        {
            userName:"AdityaM1",surname:"Mandlekar1"
        },
        {
            userName:"AdityaM2",surname:"Mandlekar2"
        }
        ]
    res.render("posts.ejs",{posts:posts});

});

app.listen(process.env.PORT,process.env.IP ,function(){
    console.log("listening on port "+process.env.PORT);
});

