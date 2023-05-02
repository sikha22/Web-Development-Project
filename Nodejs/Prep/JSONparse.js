let person ={
    name: "SIkha",
    age: 20,
    stream : "CSE"
}
console.log(person);
console.log("Person Name is : ",person.name);

//Stringify the data
let jsonData = JSON.stringify(person);
console.log(jsonData);
console.log("Person Name is : ",jsonData.name); //We can not access data directly from jsondata

//Parse The data
let Data = JSON.parse(jsonData);
console.log(Data);
console.log("Person Name is : ",Data.name); //After parsing it we can access the data