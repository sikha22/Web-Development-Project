const fs = require('node:fs');
const readable = getReadableStreamSomehow();
const writable = fs.createWriteStream('file.txt');
//All the data from readable goes into file.txt
readable.pipe(writable);