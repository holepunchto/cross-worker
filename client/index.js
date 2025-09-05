const { isBareKit, isBare, isPear } = require('which-runtime')

if (isPear) {
  module.exports = require('./pear')
} else if (isBare) {
  module.exports = require('./bare')
} else if (isBareKit) {
  module.exports = require('./bare-kit')
}
