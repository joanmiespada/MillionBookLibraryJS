var path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'businesslayer.js',
    path: path.resolve(__dirname, 'dist')
  }
};
