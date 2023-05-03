const express=require('express');
const bodyParser = require("body-parser");
const app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.get('/bmi',function(req,res){
    res.sendFile(__dirname + "/bmi.html");
});
app.post('/bmi',function(req,res){
    console.log(req.body);
    let w1 = Number(req.body.weight);
    let h1 = Number(req.body.height);
    let bmi=w1/(h1*h1);
    res.send("The BMI is : " + bmi)
})
app.listen(3000);