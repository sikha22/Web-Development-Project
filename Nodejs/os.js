// const os=require("os");
// //return the os cpu architecture
// console.log(os.arch());

// //return the amount of free system memory in bytes as integer
// const mem= os.freemem();
// console.log(mem);

// //return the number of total memory of the systems
// const mem1 = os.totalmem();
// console.log(mem1);

// //hostname() : returns the hostname of the operating system
// console.log(os.hostname());

// // release() : Returns information about the operating system's release
// console.log(os.release());

// //tmpdir(): returns the operating system default directory for temporary file
// console.log(os.tmpdir());

// //type() : returns the name of the operating system
// console.log(os.type());

// //uptime(): return the uptime of the operating system 
// // in seconds.This method returns an integer value that specifies the number of second the systems is running
// console.log(os.uptime());

// //userInfo() :  return information about the current user
// console.log(os.userInfo());

// //version(): returns the version of the operating system
// console.log(os.version());

// //os.constants , it returns an object that contains operating system specified constants
// console.log(os.constants);


// //cpus :Returns an array conatining information about the computer's cpu
// console.log(os.cpus());

// //path module: provide way of working with directories and file paths
// const path = require('path');
// // C:\Users\Sikha\Documents\INT222\INT222UNIT1.pptx    : copy path
// // os.js    : copy relative path

// //path.dirname("path") : 
// console.log(path.dirname('C:\Users\Sikha\Documents\INT222\INT222UNIT1.pptx'));

// //path.extname('path') :
// console.log(path.extname('C:\Users\Sikha\Documents\INT222\os.js'));

// // path.basename('path') :
// console.log(path.basename('C:\Users\Sikha\Documents\INT222\os.js'));
// console.log(path.basename('os.js'));

// //path.parse('path')
// console.log(path.parse('os.js'));
// console.log(path.parse('C:\Users\Sikha\Documents\INT222\os.js'));

// //propertyname
// console.log(path.propertyname);

// //delimiter : returns the delimiter specifies for the platform
// console.log(path.delimiter);

//Events 
// const EventEmitter = require("events");
// const event = new EventEmitter();
// event.on('save',()=> {
//     console.log('A saved event occured');
// });
// event.emit('save');
// event.emit('save');
// event.emit('save');


// Timer
// var myInt = setInterval(function(){
//     console.log("Hello");
// },500);

//http module
//program to create server
// const http=require("http");
// const server=http.createServer((req,res)=>{
//     console.log(req.url);
//     res.write("Start Writing ");//it can run multiple times
//     res.end("hello i am response"); // it restricted to run only one time
//     // res.end("hello i am response");
// });
// server.listen(1000,()=>{
//     console.log("listening to port number 1000")
// });

//Handle Http Request(routing)
// var http = require("http");
// var server = http.createServer(function(req,res){
//     if(req.url=='/'){
//         res.end("Welcome to Index Page");
//     }
//     else if(req.url=="/emp"){
//         res.end("Welcome to Employees page");
//     } 
//     else{
//         res.end("Invalid request of the user");
//     }
// });
// server.listen(1000);
// console.log("Server is running at port 1000")

