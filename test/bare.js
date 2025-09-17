const client = require('cross-worker/client')

const main = async () => {
  const pipe = await client.spawn('./fixtures/bare-bin/bin.js', [
    'Hello',
    'world!'
  ])

  pipe.on('data', (data) => {
    console.log('from worker:', data.toString())
  })

  pipe.on('end', () => console.log('Worker ended'))
  pipe.on('close', () => console.log('Worker closed'))
  pipe.on('error', (error) => console.error('Worker error:', error))
}

main()
