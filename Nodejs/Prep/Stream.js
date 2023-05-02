//Read data Stream
// const http=require('http');
// const fs=require('fs');
// const server = http.createServer((req,res)=>{
//     const reader = fs.createReadStream('./FileY.txt');
//     reader.on('data',(data)=>{
//         res.write(data.toString());
//     })
//     reader.on('end',(data)=>{
//         res.end();
//     })
// }).listen(3000);

//Write data Stream
const http=require('http');
const fs=require('fs');
const server=http.createServer((req,res)=>{
    const writeable = fs.createWriteStream('./Write.txt');
    writeable.write('This is a writeable stream file');
    writeable.write("Created with the help of createwritestream");
    writeable.on('finish',()=>{
        console.log('created writable stream!!');
    })
    
});

