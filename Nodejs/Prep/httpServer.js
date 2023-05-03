const http=require('http');
const fs= require('fs');
const server=http.createServer((req,res)=>{
    if(req.url=='/'){
        res.writeHead(200,{"content-type":"text/html"});
        res.write('<h1>This is Home Page</h1>');
        res.end();
    }
    else if(req.url=='/about'){
        res.writeHead(200,{"content-type":"text/html"});
        res.write("<h1>This is About Page</h1>");
        res.end();
    }else if(req.url=='/contact'){
        res.writeHead(200,{"content-type":"text/html"});
        res.write("<h1>This is Contact Page</h1>");
        res.end();
    }else{
        res.writeHead(404,{"content-type":"text/html"});
        res.write("<h1>404 error Page doesn't exist</h1>");
        res.end();
    }
}).listen(3000);