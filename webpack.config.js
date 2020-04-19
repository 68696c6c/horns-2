const path = require('path')

module.exports = {
  module: {
    loaders: [{ exclude: ['node_modules'], loader: 'babel', test: /\.jsx?$/ }],
  },
  resolve: {
    alias: {
      'setup-test': path.resolve(__dirname, 'test/setup.jsx'),
    },
    extensions: ['', 'js', 'jsx'],
    modules: ['node_modules'],
  },
}
