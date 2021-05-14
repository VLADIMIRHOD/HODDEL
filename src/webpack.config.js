const path = require('path')

module.exports = {
  mode: 'development',
  entry: {
    main: '.src/js/index.js'
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'publick')
  }
}