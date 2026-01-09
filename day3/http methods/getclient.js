const http = require('http');

http.get('http://jsonplaceholder.typicode.com/posts/1', (res) => {
  let data = '';

  res.on('data', chunk => {
    data += chunk;
  });

  res.on('end', () => {
    console.log('Response:', data);
  });
});