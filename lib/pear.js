exports.args = [...Pear.config.args]

exports.stream = function stream() {
  return Pear.worker.pipe()
}
