// Using Built-in fs Module


const fs = require('fs');

// Write to a file
fs.writeFileSync('data.txt', 'Learning Node.js functions');

// Read from the file
const content = fs.readFileSync('data.txt', 'utf8');
console.log("File Content:", content);
