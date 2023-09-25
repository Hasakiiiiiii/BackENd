const {readFileSync, writeFileSync} = require('fs')


const first = readFileSync('./subFolder/first.txt', 'utf8')
const second = readFileSync('./subFolder/second.txt','utf8')
// console.log(first, second);

writeFileSync('./subFolder/thirst.txt',`${first} + ${second}`,{flag: 'a'})