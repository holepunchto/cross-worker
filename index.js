const { isBareKit, isPear } = require('which-runtime')

if (isPear) {
  exports.stream = function stream() {
    return Pear.worker.pipe()
  }
} else if (isBareKit) {
  exports.stream = function stream() {
    return BareKit.IPC
  }
}
