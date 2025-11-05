const BareWorker = require('../shared/bare-worker')

exports.args = [...Bare.Thread.self.data.args]

exports.stream = function stream() {
  return new BareWorker()
}
