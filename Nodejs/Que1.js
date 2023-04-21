// Create an express application to demonstrate the use of fs and zlib module
const express = require('express');
const fs = require('fs');
const zlib = require('zlib');
const app = express();
app.get('/', (req, res) => {
  const fileStream = fs.createReadStream('./example.txt');
  const gzip = zlib.createGzip();

  fileStream.pipe(gzip);
  res.setHeader('Content-Type', 'application/octet-stream');
  res.setHeader('Content-Encoding', 'gzip');
  gzip.pipe(res);
});
app.listen(4000, () => {
  console.log('Server started on port 4000');
});
