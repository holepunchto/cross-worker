const BareWorker = require('../shared/bare-worker')

exports.args = [...Bare.Thread.self.data.data]

exports.stream = function stream() {
  return new BareWorker()
}
