const data={
    name:"Sikha",
    age:00,
    department:"CSE"
};
console.log(data); 

//convert javascript object to Json string
const jsonData = JSON.stringify(data);
console.log(jsonData);

//convert Json string to javascript object
const jsOnData=JSON.parse(jsonData);
console.log(jsOnData);