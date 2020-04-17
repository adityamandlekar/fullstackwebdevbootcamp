var fakerdemo=require("faker");

var productName = fakerdemo.commerce.productName();
//var priceName = fakerdemo.commerce().priceName;
for(var i=0; i < 10; i++)
    console.log(productName);