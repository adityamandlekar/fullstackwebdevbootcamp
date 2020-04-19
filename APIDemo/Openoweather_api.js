var request = require('request');
console.log(" Weather is for the City ::");
request('https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=439d4b804bc8187953eb36d2a8c26a02',function(error,response,body)
{
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