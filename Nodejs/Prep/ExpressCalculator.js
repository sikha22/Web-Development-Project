const express=require('express');
const bodyParser = require("body-parser");
const app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.get('/',function(req,res){
    res.send("Hello World");
});
app.get('/about',function(req,res){
    res.send("Creating about page in express js");
});
app.get('/contact',function(req,res){
    res.send("Creating contact us page using express js");
});
app.get('/calculator',function(req,res){
    res.sendFile(__dirname + "/index.html");
});
app.post('/calculator',function(req,res){
    console.log(req.body);
    let n1 = Number(req.body.value1);
    let n2 = Number(req.body.value2);
    let sum=n1+n2;
    res.send("The sum is : " + sum)
})
app.listen(3000);