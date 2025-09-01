# cross-worker

Cross-runtime worker abstractions.

```
npm i cross-worker
```

## Usage

Client:

```js
const client = require('cross-worker/client')

const pipe = client.spawn('./worker', ['arg1', 'arg2'])
```

Worker:

```js
const worker = require('cross-worker')

const stream = worker.stream()
```

## License

Apache-2.0
