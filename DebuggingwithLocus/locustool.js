var request = require('request');
console.log(" Weather is for the City ::");

//If you're using windows then be sure to use an older version of locus by installing it with this command: npm i -D locus@2.0.0, instead of npm i -D locus
request('https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=439d4b804bc8187953eb36d2a8c26a02',function(error,response,body)
{
    eval(require('locus'))
    if(error)
    {
        console.log("Something Went Wrong");
        
    }
    else
    
    {
        if (response.statusCode==200)
        {
            var parsedData=JSON.parse(body);
            
            console.log(parsedData["name"]);
        }
    }
});