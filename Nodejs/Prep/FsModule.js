//Common Use of FS Module
//Read,Create,Delete,Update,Rename

//Read Fs Module Syunchronous
const http = require("http");
const fs= require("fs");
const text = fs.readFileSync('dele.txt','utf-8');
console.log(text);

//Read Fs Module Asynchronous
const http=require("http");
const fs= require("fs");
const text1 = fs.readFile('dele.txt',(err,data)=>{
    if(err){
        console.log('error occured',err);
        return;
    }
    console.log("File readed Successfully",text1);
});


//Write fs module

const http = require("http");
const fs = require("fs");
const data2 = fs.writeFileSync('Write.txt',"This created a new write file using Fs Module");

//Write Fs Module Async
const http=require("http");
const fs= require("fs");
const data1 = fs.writeFile('myFile.txt',"Hello This is Asynchronous File ", (err)=>{
    if(err){
        console.log("error Occured",err);
    }
    console.log("File Created Successsfully");
});

//DElete Fs Module
// fs.unlinkSync = Delete Synchronous
// fs.unlink - Delete Asynchronous
const http= require("http");
const fs= require("fs");
fs.unlinkSync('dele.txt');
console.log("file Deleted Successfully");

//Asynchronous file delete
const http=require("http");
const fs= require("fs");
fs.unlink('Write.txt',(err)=>{
    if(err){
        throw (err);
    }
    console.log("file Deleted Successfully");
});


//Create Fs Module Directory Syunchoronous
const http= require("http");
const fs= require('fs');
fs.mkdirSync('foo');
console.log("Directory Created");
try{
    fs.mkdirSync('foo');

} catch(err){
    console.log("Error Occured",err);
}
console.log("Created successfully");

//Create Fs Module Directory Asynchronous
const http = require('http');
const fs=require('fs');
fs.mkdir('foo',function(err){
    if(err){
        throw(err);
    }
    console.log("Directory Created");
});

//Delete Directory SYunchronous
const http=require('http');
const fs= require('fs');
fs.rmdirSync('foo');
console.log('Directory Deleted SUccessfully');

//Delete Directory Asyunchronous
const http=require('http');
const fs= require("fs");
fs.rmdir('foo',function(err){
    if(err){
        throw(err);
    }
        console.log('Directory Deleted');
    
});

//Get Content of directory Asyunchronous
const http=require('http');
const fs= require("fs");
fs.readdir(__dirname,function(err,data){
    if(err){
        console.log('Error Occured',err);
    }
    console.log("Content of directory",data);
});


//Get Content of directory Syunchronous
const http=require('http');
const fs= require("fs");
let data = fs.readdirSync(__dirname);
console.log(data);

//Rename File using Fs Module Syunchronous
const http=require('http');
const fs= require('fs');
fs.renameSync('myFile.txt','FileX.txt');
console.log("Renamed File SUccessfully");

//Rename File Using fs Module Asyunchronous
const http=require('http');
const fs= require('fs');
fs.rename('FileX.txt','FileY.txt',(err)=>{
    if(err){
        console.log('Error Occured',err);
    }
    console.log('File Renamed Successfully');
});
