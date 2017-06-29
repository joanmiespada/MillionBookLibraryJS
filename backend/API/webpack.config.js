var path = require('path');

module.exports = {
  name: 'server',
  entry: './src/index.js',
  target: 'node',
  output: {
    filename: 'API.js',
    path: path.join(process.cwd(), 'build', 'script')
  }
};
