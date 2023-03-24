// Create two files: stream.js and stream.txt
// Suppose stream.txt is in server, i want to read stream.txt through stram.js file and further run the server
// and show the content of stram.txt on the browser through stram.js.
// Note: Use the concept of events

const fs = require('fs');
fs.writeFile('stream.txt', 'This is a new created file', function (err) {
if (err) throw err;
console.log('stream.txt is created successfully.');
});

const http = require('http');
const server = http.createServer(function (req, res) {
fs.readFile('stream.txt', function (err, data) {
if (err) {
return res.end('Error loading stream.txt file');
}
res.end(data);
});
});

server.listen(3000, function () {
console.log('Server is listening on port 3000');
});
