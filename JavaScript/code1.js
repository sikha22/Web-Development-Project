const abc = (name, callback) => {
    console.log(`hello ${name}`);
    callback();
    }
    const abcd = () => {
    console.log("hello!");
    }
    abc("Sikha ", abcd);

    //create and write
    const fsa = require("fs");
    fsa.writeFileSync("filename.txt", 'This is file1');

    //add element to file
    fsa.appendFileSync("filename.txt","\nThis is append file");

    //read a file
    fsa.readFileSync("filename.txt");
    const read = fsa.readFileSync("filename.txt");
    console.log(read);

    //convert buffer to string
    const od = read.toString();
    console.log(od);

    //another way to convert buffer to string
    fsa.readFileSync("filename.txt");
    const print = fsa.readFileSync("filename.txt","UTF-8");
    console.log(print);

//ASynchronous 
    const a=require("fs");
    a.writeFile("a.txt","I am the original data",(err)=>{
    console.log("file is created");
    console.log(err);
});

//append data
a.appendFile("a.txt",": hello i am added",(err)=>{
    console.log("task completed");
});

//Read file data
a.readFile("a.txt","UTF-8",(err,data)=>{
    console.log(data);
});
