const SubProcess = require('bare-subprocess')

exports.spawn = async function spawn(filename, _, args = []) {
  const RUNTIME = Bare.argv[0]

  args = Array.isArray(_) ? _ : args

  filename = filename.replace(/^[\\|/]/, '')

  const child = SubProcess.spawn(RUNTIME, [filename, ...args], {
    stdio: ['inherit', 'inherit', 'inherit', 'pipe']
  })

  return { IPC: child.stdio[3] }
}
