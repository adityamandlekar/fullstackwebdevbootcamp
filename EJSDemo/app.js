var express = require("express")
var app =express();

app.use(express.static("public"));
app.set("view engine","ejs");

app.get("/",function(req,res){
    res.render("home");
});

app.get("/fallinlovewith/:thing",function(req,res){
    var thing=req.params.thing;
    res.render("thing",{thingVar:thing});
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
    res.render("posts",{posts:posts});

});

app.listen(process.env.PORT,process.env.IP ,function(){
    console.log("listening on port "+process.env.PORT);
});

