const http = require('http');

const data = JSON.stringify({ name: "Madhusmita", age: 22 });

const options = {
  hostname: 'localhost',
  port: 3000,
  path: '/submit',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': data.length
  }
};

const req = http.request(options, (res) => {
  let response = '';
  res.on('data', chunk => response += chunk);
  res.on('end', () => console.log('Server Response:', response));
});

req.write(data);
req.end();