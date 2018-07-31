const pwd = require('./pwd');
const ls = require('./ls');
const cat = require('./filecat');
process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
  const cmd = data.toString().trim();

  pwd(cmd);
  ls(cmd);
  cat(cmd);

})
