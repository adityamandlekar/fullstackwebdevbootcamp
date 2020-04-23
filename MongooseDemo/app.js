var monogoose = require('mongoose')
monogoose.connect("mongodb://localhost/cat_app");

var CatSchema = new monogoose.Schema({
    name : String,
    age: Number,
    temprament: String 
});

var Cat= monogoose.model("Cat",CatSchema);

//1.Save Method --this would always add same object everytime we run.Run this First and then comment out
//Adding a new cat with DB. 

var George= new Cat({   
    name : "billi",
    age: 11,
    temprament: "short-Tempered" });
    
George.save(function(err,cat)
{
   if(err) 
   console.log("SOMETHING Went Wrong!")
   else
   console.log("Record Saved Succesfully with Save method");
   console.log(cat);
});

//2.Create Method --Alternative to Save Method ,Rather than creating an object first ,it helps to create and save both.
//Adding a new cat with DB.

Cat.create({
     name : "manjar",
    age: 11,
    temprament: "short-Tempered" 
},function(err,cat){ 
    if(err) 
   console.log("SOMETHING Went Wrong!")
   else
   console.log("Record Saved Succesfully with Create  method");
});

Cat.find({},function(err,cats){ 
    if(err) 
    {
   console.log("SOMETHING Went Wrong!");
    }
   else
  {
      console.log("All the cats...");
    console.log(cats);
  }
});