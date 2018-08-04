const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: {
    pageOne: './src/page-one.js',
    pageTwo: './src/page-two.js'
  },
  output: {
    filename: 'index.js'
  },
  module: {
    rules: [
      { test: /\.js$/, use: 'babel-loader' },
      { 
        test: /\.css$/, 
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'test.html',
      template: './src/test.html'
    })
  ]
}
