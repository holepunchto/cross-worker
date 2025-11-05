const Thread = require('bare-thread')
const Channel = require('bare-channel')
const EventEmitter = require('events')

class BareWorker extends EventEmitter {
  _thread = null
  _channel = null
  _port = null

  constructor(bin, args) {
    super()
    if (Thread.isMainThread) {
      this._channel = new Channel()
      this._thread = new Thread(bin, {
        data: { args, handle: this._channel.handle }
      })
    } else {
      this._channel = Channel.from(Bare.Thread.self.data.handle)
    }

    this._port = this._channel.connect()

    this._port.on('end', () => {
      if (!Thread.isMainThread) {
        this.end()
      }
      this.emit('end')
    })

    this._port.on('close', () => this.emit('close'))

    const read = this._port.createReadStream()

    read.on('data', (data) => this.emit('data', data))
  }

  write(data) {
    this._port.write(data).catch(noop)
  }

  end() {
    if (this._thread) {
      this._port
        .close()
        .then(() => this._thread.join())
        .catch(noop)
    } else {
      this._port.unref()
    }
  }
}

const noop = () => {}

module.exports = BareWorker
