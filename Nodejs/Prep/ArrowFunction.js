// Arrow function
let myFunction = (x,y,z) => (x*y*z);
let result = myFunction(3,4,5);
console.log(result);

//Constructor function
function Person(){
    this.name="Sikha",
    this.age=20
}
const person = new Person();
console.log(person.name);
console.log(person.age);
delete person.age;
console.log(person.age);

// Simple object
const myObj = {
    name:"SIkha",
    age :20,
    stream : "CSE"
}
console.log(myObj);
console.log(myObj.stream);

//Simple Function
function myFunc(){
    return x*y;
}
let res = (6*7);
console.log(res);

//Array
const myArray = ["eat","sleep","repeat"];
console.log(myArray[0]);
myArray.push("code");
console.log(myArray);
myArray.unshift("Heelo");
console.log(myArray);
myArray.pop();
console.log(myArray);