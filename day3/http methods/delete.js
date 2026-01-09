const http = require('http');

const server = http.createServer((req, res) => {
  if (req.method === 'DELETE' && req.url === '/delete') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Resource deleted successfully!');
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

server.listen(3001, () => {
  console.log('Server running at http://localhost:3001/');
});