const BareWorker = require('../shared/bare-worker')

exports.args = [...Bare.argv]

exports.stream = function stream() {
  return new BareWorker()
}
