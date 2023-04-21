// create a nodejs applicationto parse a Json file and print the content on console
const fs = require('fs');

// Read the JSON file
fs.readFile('example.json', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  // Parse the JSON data
  const jsonData = JSON.parse(data);

  // Print the contents of the JSON file to the console
  console.log(jsonData);
});
