var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: {
    index:[
      'webpack-dev-server/client?http://localhost:3000',
      'webpack/hot/only-dev-server',
      './index'
    ],
    learnreact:[
      'webpack-dev-server/client?http://localhost:3000',
      'webpack/hot/only-dev-server',
      './learnreact'
    ]
  },
  output: {
    path: path.resolve(__dirname,'build'),
    publicPath: "http://localhost:3000/build/",
    filename: '[name].js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['react-hot', 'babel'],
      exclude: /node_modules/,
      include: __dirname
    }]
  }
};
