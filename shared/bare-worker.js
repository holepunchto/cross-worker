const { Worker } = require('bare-worker')
const EventEmitter = require('events')

class BareWorker extends EventEmitter {
  constructor(bin, args) {
    super()
    if (Worker.isMainThread) {
      this.worker = new Worker(bin, args)
    } else {
      this.worker = Worker.parentPort
    }

    this.worker.on('message', (data) => {
      this.emit('data', data)
    })

    this.worker.on('error', (error) => {
      this.emit('error', error)
    })

    this.worker.on('close', () => {
      this.emit('end') // TODO: is this correct?
    })
  }

  write(data) {
    this.worker.postMessage(data)
  }
}

module.exports = BareWorker
