const http = require("http");
const fs= require("fs");
http.createServer((req,res)=>{
    res.write(req.url);
    res.end();
}).listen(3000);