const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: {
    pageOne: './src/page-one/page-one.js',
    pageTwo: './src/page-two/page-two.js'
  },
  output: {
    filename: '[name].js'
  },
  module: {
    rules: [
      { test: /\.js$/, use: 'babel-loader' }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'page-one.html',
      template: './src/page-one/page-one.html',
      chunks: ['pageOne']
    }),
    new HtmlWebpackPlugin({
      filename: 'page-two.html',
      template: './src/page-two/page-two.html'
    })
  ]
}
