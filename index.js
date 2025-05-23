const { isBareKit, isPear } = require('which-runtime')

if (isPear) {
  exports.args = [...Pear.config.args]

  exports.stream = function stream() {
    return Pear.worker.pipe()
  }
} else if (isBareKit) {
  exports.args = [...Bare.argv]

  exports.stream = function stream() {
    return BareKit.IPC
  }
}
