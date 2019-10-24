var http=require("http")
var url=require("url")
var router=require("./router")
var fs=require("fs")
function start(portNumber,route,handle)
{
    function onRequest(request,response){
        if(request.url ==='/favicon.ico')
        {
            response.writeHead(200,{'Content-Type':'image/x-icon'})
            //response.end()
            return;
        }
        response.writeHead(200,{"Content-type":"text-plain"})
var postData="";
var counter=0;
request.addListener("data",function(postDataChunk)
{
    counter = counter+1
    postData +=postDataChunk
    
    fs.writeFileSync('./File/file'+counter+'.txt',postDataChunk)
    console.log("####Recieved post data chunk"+postDataChunk)
    
    
})
request.addListener("end",function()
{
    console.log("$$$$$$Finished reading the complete data")
    route(pathname,handle,response,postData)
})

        var pathname=url.parse(request.url).pathname
        console.log("1.The requested current url is:"+pathname)
       // router.route(pathname)
    //   route(pathname,handle,response)
    //    console.log("3.The requested completed url is:"+pathname)
    //    response.write("Today is good day")
     //   response.end()
    }


var server =http.createServer(onRequest)
server.listen(portNumber)
console.log("Server 1 started on port :"+portNumber)
}
exports.start =start