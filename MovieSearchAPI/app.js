var express=require('express')
var app =express()
var request=require('request');
app.set("view engine","ejs");

app.get("/",function(req,res){
    res.render("search");
});
app.listen(process.env.PORT,process.env.IP,function(){
    console.log("Movie APP has started on port " + process.env.PORT);
});

app.get("/results",function(req,res){
     var query=req.query.search;
     var url="http://www.omdbapi.com/?s="+query;
     //One needs to add API key to url to work . I am removing Code for security Purpose
     var key="&apikey=PUTYOUROWNKEYCANTSHAREDUETOSECURITY"; 
     url+=key;
    request(url,function(error,response,body){
     
       var data=JSON.parse(body);
       //res.send(result);
     //  res.send(result["Search"][0]["Title"]);
     res.render("results",{data:data});
   }) ;
});
