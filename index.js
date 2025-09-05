const { isBareKit, isBare, isPear } = require('which-runtime')

if (isPear) {
  module.exports = require('./lib/pear')
} else if (isBare) {
  module.exports = require('./lib/bare')
} else if (isBareKit) {
  module.exports = require('./lib/bare-kit')
}
