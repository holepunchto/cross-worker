const Pipe = require('bare-pipe')

exports.args = Bare.argv.slice(2)

exports.stream = function stream() {
  const fd = 3
  return new Pipe(fd)
}
