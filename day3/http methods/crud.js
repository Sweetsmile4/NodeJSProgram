const http = require('http');

let users = [{ id: 1, name: "Madhusmita" }];

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/users') {
    // READ
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(users));

  } else if (req.method === 'POST' && req.url === '/users') {
    // CREATE
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', () => {
      const newUser = JSON.parse(body);
      users.push(newUser);
      res.writeHead(201, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(newUser));
    });

  } else if (req.method === 'PUT' && req.url.startsWith('/users/')) {
    // UPDATE
    const id = parseInt(req.url.split('/')[2]);
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', () => {
      const updatedUser = JSON.parse(body);
      users = users.map(u => u.id === id ? updatedUser : u);
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(updatedUser));
    });

  } else if (req.method === 'DELETE' && req.url.startsWith('/users/')) {
    // DELETE
    const id = parseInt(req.url.split('/')[2]);
    users = users.filter(u => u.id !== id);
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('User deleted');
    
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

server.listen(3000, () => {
  console.log('Server running on http://localhost:3000/');
});