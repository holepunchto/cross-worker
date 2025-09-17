const { isWindows } = require('which-runtime')
const { spawn: spawnChild } = require('child_process')
const { dirname, join } = require('path')

exports.spawn = async function spawn(filename, _, args = []) {
  args = Array.isArray(_) ? _ : args

  filename = filename.replace(/^[\\|/]/, '')
  const cwd = dirname(Bare.argv[1])
  const bin = join(cwd, filename)

  const sp = spawnChild(bin, args, {
    // Overlapped seems to annoy Darwin
    stdio: [isWindows ? 'overlapped' : 'pipe', 'inherit', 'inherit']
  })

  sp.once('exit', (exitCode) => {
    if (exitCode !== 0) pipe.emit('crash', { exitCode })
  })

  const pipe = sp.stdio[0]
  pipe.on('end', () => pipe.end())

  return pipe
}
