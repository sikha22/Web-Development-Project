//Decompression using zlib
const fs=require('fs');
const zlib=require('zlib');
const unzip = zlib.createUnzip();
const inp = fs.createReadStream('FileY.txt.gz');
const otp = fs.createWriteStream('FileY2.txt');
inp.pipe(unzip).pipe(otp);
console.log("File Unzipped Successfully!!");
