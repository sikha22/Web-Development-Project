//Read a json file and parse it and print on the console
const http= require("http");
const fs=require("fs");
fs.readFile('file.json','utf-8',(err,data)=>{
    if(err){
        console.log("Error Occured",err);
    }
    let jsonData = JSON.parse(data);
    console.log("Data Parsed SUccessfully",jsonData);
    console.log("Name is",jsonData.name);
});