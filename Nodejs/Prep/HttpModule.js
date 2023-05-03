const http=require('http');
const fs= require('fs');
const server=http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'text/html'});
    res.write("<h1>Hello</h1>");
    res.end();
})
server.listen(3000,function(){
    console.log("server is listening on port 3000");
})
server.on("connection",function(socket){
    console.log("new connection is establising");
})
console.log("Methods are",http.METHODS);
console.log("Status codes are",http.STATUS_CODES);