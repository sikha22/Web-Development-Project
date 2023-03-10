const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
let path = "./pages/";
switch (req.url) {
case "/":
path += "index.html";
break;
case "/index":
path += "index.html";
break;
case "/about":
path += "about.html";
break;
default:
path += "error.html";
res.statusCode = 404;
break;
}
fs.readFile(path,(err, data) => {
if (err) {
console.log(err);
} else {
res.end(data);
}
});
});

server.listen(1000, () => {
console.log("listening to the port 1000");
});