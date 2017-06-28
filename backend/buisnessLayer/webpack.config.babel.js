'use strict';
import path from "path"
import webpack from "webpack"
import pkg from "./package.json"
const banner = `
  ${pkg.name} - ${pkg.description}
  Version: ${pkg.version}
`;

export default {
  entry: ['babel-polyfill', path.join(process.cwd(), 'src', 'index.js')],
  output: {
    library: 'BabelWebpackCukes',
    libraryTarget: 'umd',
    path: path.join(process.cwd(), 'build', 'script'),
    filename: 'businesslayer2.js'
  },
  devtool: "#inline-source-map",
  externals: [],
  module: {
    loaders: [
      // babel loader, testing for files that have a .js extension
      // (except for files in our node_modules folder!).
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: ["babel-loader","eslint-loader"],
       /* query: {
          compact: false // because I want readable output
        }*/
      }
      
    ]
  },
  plugins: [
    new webpack.BannerPlugin(banner)
  ]
};