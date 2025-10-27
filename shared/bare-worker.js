const { Worker } = require('bare-worker')
const EventEmitter = require('events')

class BareWorker extends EventEmitter {
  constructor(bin, args) {
    super()
    if (Worker.isMainThread) {
      this.worker = new Worker(bin, {
        workerData: args
      })
    } else {
      this.worker = Worker.parentPort
    }

    this.worker.on('message', (data) => {
      this.emit('data', data)
    })

    this.worker.on('error', (error) => {
      this.emit('error', error)
    })

    this.worker.on('end', () => {
      this.emit('end')
    })

    this.worker.on('close', () => {
      this.emit('close')
    })
  }

  write(data) {
    this.worker.postMessage(data)
  }

  end() {
    this.worker.close()
    this.emit('end')
  }
}

module.exports = BareWorker
