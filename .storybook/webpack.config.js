const path = require('path')

module.exports = {
  resolve: {
    alias: {
      _story: path.resolve(__dirname, '../src/_story/'),
      config: path.resolve(__dirname, '../src/config/'),
      traits: path.resolve(__dirname, '../src/traits/'),
    },
  },
}
