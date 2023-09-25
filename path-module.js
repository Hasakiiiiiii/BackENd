const path = require('path')

// console.log(path.sep);

const filePath = path.join('Day1', 'app.js')
// console.log(filePath);

const baseName = path.basename(filePath)

// console.log(baseName);

const abso = path.resolve(__dirname,'module.js')
console.log(abso);