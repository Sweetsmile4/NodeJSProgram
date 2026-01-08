const net = require('net');

const server = net.createServer(socket => {
  socket.write('Welcome to TCP server!');
  socket.on('data', data => console.log('Client says:', data.toString()));
});

server.listen(8080);