//Example of pipe event
const fs=require("fs");
const http = require("http");
const server= http.createServer();
server.on('request',(req,res)=>{
    const rstream=fs.createReadStream("stream.txt");
    rstream.pipe(res);
})
server.listen(4000,()=>{
    console.log("listening to port");
});