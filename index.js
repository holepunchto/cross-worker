const { isBareKit, isPear, isBare } = require('which-runtime')

if (isPear) {
  module.exports = require('./lib/pear')
  // Temporary: will be removed after exposing in bare-kit 1.15.0
} else if (isBareKit) {
  module.exports = require('./lib/bare-kit')
} else if (isBare) {
  module.exports = require('./lib/bare')
}
