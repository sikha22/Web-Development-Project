// const http = require("http");
// const fs = require("fs");
// const server = http.createServer((req,res)=>{
// console.log("It's a request");
// res.write("Hello Lpu");
// res.end();
// })
// server.listen(3000);

const http = require("http");
const fs= require("fs");
const server = http.createServer((req,res)=>{
    res.write("Hello World");
    res.end();
})
server.listen(3000);