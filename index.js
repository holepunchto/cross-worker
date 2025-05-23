const { isBareKit, isPear } = require('which-runtime')

if (isPear) {
  module.exports = require('./lib/pear')
} else if (isBareKit) {
  module.exports = require('./lib/bare-kit')
}
