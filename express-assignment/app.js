var express = require("express");
var app = express();

app.get("/",function(req,res)
{
    res.send("Hi, there Welcome to Aditya Mandlekar - Nimahi Creations World of Solutions");
}
);

app.listen(process.env.PORT,process.env.IP,function(req,res)
{
    console.log("Listening to your app on port+ "+process.env.PORT);
}
);

app.get("/speak/:animal",function(req,res){
    
    var animalname=req.params.speak.animal;
    res.send("My son favouirate name dog  is "+ animalname);
}
);


app.get("/repeat/:greet/:count",function(req,res){
    
    var count=Number(req.params.repeat.greet.count);
    var message= req.params.repeat.greet;
    var result="";
  
    for (var i=0; i < count;i++)
    {
       result+=message + " ";
    } 
    res.send("And message  is "+ message);
});


app.get("*",function(req,res)
{
   res.send("Sorry you have come to wrong page which doesnt exists"); 
});