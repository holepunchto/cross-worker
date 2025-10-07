const Pipe = require('bare-pipe')

exports.args = [...Bare.argv]

exports.stream = function stream() {
  return new Pipe(0)
}
