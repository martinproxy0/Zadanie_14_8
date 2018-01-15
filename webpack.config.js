const path = require('path');
module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['babel-preset-env','react']
          }
        }
      }
    ]
  }
}