var http = require('http')
var fs = require('fs')

http.createServer((req, res) => {
  const text = fs.readFileSync('../Day2/subFolder/first.txt')
  res.end(text)
}).listen(5000)