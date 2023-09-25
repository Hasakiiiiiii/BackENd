const os = require('os')

const user = os.userInfo()

const cur = {
    name: os.type(),
    realse: os. release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),

}
console.log(cur);