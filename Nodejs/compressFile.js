//compressing the file
const zlib=require('zlib');
const gzip = zlib.createGzip();
const fs = require('fs');
fs.writeFile('test.txt',"hello create a zip file",(err)=>{
    if (err) throw err;
})
const inp = fs.createReadStream('test.txt');
const out=fs.createWriteStream('test.txt.gz');
inp.pipe(gzip).pipe(out);

