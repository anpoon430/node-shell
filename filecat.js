module.exports = function(cmd){
  const fs = require('fs');
  let cmdArr = cmd.split(' ');

  if (cmdArr[0] === 'cat'){
    let pathName = cmdArr[1];
    fs.readFile(pathName, 'utf-8', function read(err, data){
      if (err){
        throw err;
      }
      let content = data;
      processFile(content);
    });
  }
}

function processFile(content){
  console.log('\n' + content + '\n');
  process.stdout.write('prompt > ');
}
