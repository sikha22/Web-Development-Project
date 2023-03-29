//using error event, check whether the file exist or not, and print the same on the browser
const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');
  fs.access('file.txt', fs.constants.F, (err) => {
    if (err) {
      res.statusCode = 404;
      res.end('<h1>File Not Found</h1>');
    } else {
      res.statusCode = 200;
      res.end('<h1>File Found</h1>');
    }
  });
});

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});
