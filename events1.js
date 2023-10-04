const EvenEmitter = require('events')

const custommer = new EvenEmitter()

custommer.on('response', (name, id) => {
  console.log(`${name} and ${id}`);
  })

custommer.emit('response', 'trunganh' , 1)
