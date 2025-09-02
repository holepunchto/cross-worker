const worker = require('cross-worker')

const stream = worker.stream()

console.log('worker:', worker.args, stream)
