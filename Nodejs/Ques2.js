// cretae a node js applicaton that contains the following links of homepage conatct us and support link chat box should open and display hi how can i help you 
// Import required modules
const http = require('http');
const fs = require('fs');

// Create server
http.createServer(function(req, res) {
  // Set content type
  res.writeHead(200, {'Content-Type': 'text/html'});
  
  // Check for support link
  if (req.url === '/support') {
    // Display chat box message
    res.write('<div id="chatbox">Hi, how can I help you?</div>');
  } else if (req.url === '/') {
    // Display homepage
    res.write('<h1>Welcome to my website!</h1><a href="/support">Support</a>');
  } else if (req.url === '/contact') {
    // Display contact page
    res.write('<h1>Contact Us</h1><p>Phone: 555-1234<br>Email: info@example.com</p><a href="/support">Support</a>');
  } else {
    // Display 404 error page
    res.write('<h1>404 Page Not Found</h1>');
  }

  // End response
  res.end();
}).listen(8080);
