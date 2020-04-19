var request = require("request");
request('http://www.google.com',function(error,response,body)
{
    if(error)
    {
        console.log("Something Went Wrong");
        
    }
    else
    
    {
        if (response.statusCode==200)
        {
            console.log(response.body);
        }
    }
});