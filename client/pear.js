const run = require('pear-run')

exports.spawn = async function spawn(filename, _, args = []) {
  args = Array.isArray(_) ? _ : args

  let link

  if (filename.startsWith('pear://')) {
    link = filename
  } else {
    filename = filename.replace(/^[\\|/]/, '')
    link = Pear.key ? `${Pear.config.applink}` : `${Pear.config.dir}`
    link = link.replace(/[\\|/]$/, '')
    link = `${link}/${filename}`
  }

  const ipc = run(link, args)

  return { IPC: ipc }
}
