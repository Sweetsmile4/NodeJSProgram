const cluster = require('cluster');
const os = require('os');

if (cluster.isMaster) {
  os.cpus().forEach(() => cluster.fork());
} else {
  console.log(`Worker ${process.pid} started`);
}