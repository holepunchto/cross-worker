exports.args = [...Bare.argv]

exports.stream = function stream() {
  return globalThis.BareKit.IPC
}
