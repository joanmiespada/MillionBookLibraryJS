var webpack = require('webpack');
var path = require('path');

var libraryName = 'API';

var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
var env = process.env.WEBPACK_ENV;

var plugins = [], outputFile;

if (env === 'build') {
  plugins.push(new UglifyJsPlugin({ minimize: true }));
  outputFile = libraryName + '.min.js';
} else {
  outputFile = libraryName + '.js';
}

var config = {
  entry: [ __dirname + '/src/index.js'],
  devtool: 'source-map',
  target:"node",
  output: {
    path: __dirname + '/build/script',
    filename: outputFile

  },
  module: {
    loaders: [
      {
        test: /(\.jsx|\.js)$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /(\.jsx|\.js)$/,
        loader: "eslint-loader",
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    //root: path.resolve('./src'),
    extensions: ['.js']
  },
  plugins: plugins
};

module.exports = config;