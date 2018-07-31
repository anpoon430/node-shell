module.exports = function(cmd) {
  const fs = require('fs');
  if (cmd === 'ls') {
    fs.readdir('./', 'utf-8', (err, files) => {
      if (err) {
        throw err;
      } else {
        process.stdout.write(files.join('\n'))
        process.stdout.write('\nprompt > ')
      }
    })
  }
}
