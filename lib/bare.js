const Pipe = require('bare-pipe')

exports.args = Bare.argv.slice(2)

exports.stream = function stream() {
  return new Pipe(3)
}
