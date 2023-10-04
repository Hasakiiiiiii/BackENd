const  {createReadStream} = require('fs')

const stream = createReadStream('../Day2/subFolder/first.txt','utf-8')

stream.on('data', (result) => {
  console.log(result);
  })