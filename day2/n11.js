const { exec } = require('child_process');

exec('node -v', (err, stdout) => {
  console.log('Node version:', stdout);
});