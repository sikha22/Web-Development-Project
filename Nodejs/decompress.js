//DECOMPRESS
const fs = require('fs');
const zlib = require('zlib');
const inputFilePath = 'test1.txt.gz';
const outputFilePath = 'test.txt';
const inputStream = fs.createReadStream(inputFilePath);
const outputStream = fs.createWriteStream(outputFilePath);
const gzipStream = inputStream.pipe(zlib.createUnzip()).pipe(outputStream);