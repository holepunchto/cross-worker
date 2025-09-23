#!/usr/bin/env bare

const worker = require('../../../.')

const stream = worker.stream()

const args = Bare.argv.slice(2)

stream.on('data', (data) => stream.write(data))
stream.on('end', () => console.log('Stream ended'))
stream.on('close', () => console.log('Stream closed'))
stream.on('error', (error) => console.error('Stream error:', error))

stream.write(Buffer.from(args.join(' ')))
