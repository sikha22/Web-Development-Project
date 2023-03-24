// Create an Object
// Convert it into JSON
// Add this data to another file
// Read the data from that file
// Again Convert it back to JS Object
// Show data on the Console
const data= {
    name:"Sikha",
    age:00,
    department:"CSE"
    };
    console.log(data);
    
    // Convert javascript object to JSON string
    const jsonData =JSON.stringify(data);
    console.log(jsonData);
    
    // Convert JSON string to Javascript object
    const jsonObject = JSON.parse(jsonData);
    console.log(jsonObject);
    
    const fs= require("fs");
    // create a new file
    fs.writeFile('fss.json', jsonData, (err) => {
    // error checking
    if(err) throw err;
    
    console.log("New data added");
    });
    // // append
    
    
    // read file
    fs.readFile("fss.json",(err,jsonData)=>{
    if(err) throw err;
    console.log(jsonData.toString());
    });