const http = require("http");
const dt= require("./myFirstModule");
const server = http.createServer((req,res)=>{
    res.write("Today's Date and Time is " + dt.myDateTime());
    res.end();
})
server.listen(3000);