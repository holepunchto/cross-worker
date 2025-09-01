exports.spawn = async function spawn(filename, _, args = []) {
  args = Array.isArray(_) ? _ : args

  filename = filename.replace(/^[\\|/]/, '')

  let link = Pear.key ? `${Pear.config.applink}` : `${Pear.config.dir}`

  link = link.replace(/[\\|/]$/, '')

  const ipc = Pear.worker.run(`${link}/${filename}`, args)

  return { IPC: ipc }
}
