const client = require('cross-worker/client')

const pipe = client.spawn('..', ['hello', 'world'])

console.log('client:', pipe)
