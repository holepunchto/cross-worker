exports.spawn = async function spawn(filename, _, args = []) {
  args = Array.isArray(_) ? _ : args

  filename = filename.replace(/^[\\|/]/, '')

  const link = Pear.key
    ? `${Pear.config.applink}/${filename}`
    : `${Pear.config.dir}${filename}`

  const ipc = Pear.worker.run(link, args)

  return { IPC: ipc }
}
