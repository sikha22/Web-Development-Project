const fs=require('fs');
const zlib=require('zlib');
const gzip = zlib.createGzip(); //for compression
const inp = fs.createReadStream('FileY.txt');
const opt = fs.createWriteStream('FileY.txt.gz');
inp.pipe(gzip).pipe(opt);
console.log("file compressed successfully");