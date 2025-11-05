const test = require('brittle')
const client = require('cross-worker/client')

test('bare worker', async (t) => {
  const { IPC: pipe } = await client.spawn('./fixtures/bare-bin/bin.js', [
    'Hello',
    'world!'
  ])

  t.plan(3)

  pipe.on('data', (data) => {
    t.is(data.toString(), 'Hello world!')
    pipe.end()
  })
  pipe.on('end', () => t.pass('worker ended'))
  pipe.on('close', () => t.pass('worker close'))
  pipe.on('error', (err) => t.fail(err.message))
})
