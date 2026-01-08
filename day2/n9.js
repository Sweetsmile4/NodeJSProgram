const dns = require('dns');

dns.lookup('example.com', (err, address) => {
  console.log('IP Address:', address);
});