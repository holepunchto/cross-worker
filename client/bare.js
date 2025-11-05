const { isPear } = require('which-runtime')
const BareWorker = require('../shared/bare-worker')
const { dirname, join } = require('bare-path')

exports.spawn = async function spawn(filename, source, args = []) {
  if (isPear) {
    const { spawn: spawnPear } = require('./pear')
    return spawnPear(filename, source, args)
  }

  args = Array.isArray(source) ? source : args

  filename = filename.replace(/^[\\|/]/, '')
  const cwd = dirname(Bare.argv[1])
  const bin = join(cwd, filename)

  const worker = new BareWorker(bin, args)

  return { IPC: worker }
}
