var express    = require('express'),
    app        = express(),
    request    = require('request'),
    bodyParser = require('body-parser'),
    mongoose   = require('mongoose');
    
mongoose.connect("mongodb://localhost/yelp_camp");

var campgroundSchema = new mongoose.Schema({
    name:String,
    image:String
});

var Campground= mongoose.model("Campground",campgroundSchema);

//just used for initial data creation and demo
/*Campground.create(
     {name: "Salmon Creek", image: "https://farm9.staticflickr.com/8442/7962474612_bf2baf67c0.jpg"
},
function(err,campground){
    if(err)
        console.log("Something Went Wrong!");
    else
        console.log("campground added Succesfully...");
        console.log(campground);
});*/

app.use(bodyParser.urlencoded({extended:true}));

/*var campgrounds= [
       
        {name: "Granite Hill", image: "https://farm1.staticflickr.com/60/215827008_6489cd30c3.jpg"},
        {name: "Mountain Goat's Rest", image: "https://farm7.staticflickr.com/6057/6234565071_4d20668bbd.jpg"},
        {name: "Salmon Creek", image: "https://farm9.staticflickr.com/8442/7962474612_bf2baf67c0.jpg"},
        {name: "Granite Hill", image: "https://farm1.staticflickr.com/60/215827008_6489cd30c3.jpg"},
        {name: "Mountain Goat's Rest", image: "https://farm7.staticflickr.com/6057/6234565071_4d20668bbd.jpg"},
        {name: "Salmon Creek", image: "https://farm9.staticflickr.com/8442/7962474612_bf2baf67c0.jpg"},
        {name: "Granite Hill", image: "https://farm1.staticflickr.com/60/215827008_6489cd30c3.jpg"},
        {name: "Mountain Goat's Rest", image: "https://farm7.staticflickr.com/6057/6234565071_4d20668bbd.jpg"}
        ] 
*/   
app.set("view engine","ejs")


app.get("/",function(req,res){
    res.render("landing");
});

app.get("/campgrounds",function(req,res)
{       
        Campground.find({},function(err,allcampgrounds){
        if(err)
            console.log("Something Went Wrong!");
    else
        {
            console.log("campground added Succesfully...");
            //console.log(allcampgrounds);
            res.render("campgrounds",{campgrounds:allcampgrounds})
        }
    });
});

app.post("/campgrounds",function(req,res){
    
    //get data from camp and add to array
    //redirect
    var name=req.body.name;
    var image =req.body.image;
    var newcampground={name:name,image:image};
    //No longer needed as we use Database
        //campgrounds.push(newcampground);
    Campground.create(newcampground,function(err,newlyCreate){
         if(err)
            console.log("Something Went Wrong!");
    else
        {
            res.redirect("/campgrounds");
            //res.send("You hit the post route");
        }
    }); 
   
});

app.get("/campgrounds/new",function(req, res) {
    res.render("new.ejs");
});


app.listen(process.env.PORT,process.env.IP,function(req,res){
    console.log("YelpCamp Full stack Web Development Boot Camp Server initiated on port :: "+ process.env.PORT);
});
