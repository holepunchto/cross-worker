#!/usr/bin/env bare

const worker = require('../../../.')

const stream = worker.stream()

const args = worker.args

stream.on('data', (data) => stream.write(data))
stream.on('end', () => console.log('Stream ended'))
stream.on('error', (error) => console.error('Stream error:', error))

stream.write(Buffer.from(args.join(' ')))
